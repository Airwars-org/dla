<script>
    function clamp(num, min, max) {
        return num < min ? min : num > max ? max : num;
    }
    export let minValue;
    export let maxValue;
    export let startValue = 100;
    export let endValue = 400000;

    let leftHandle;
    let body;
    let slider;
    function draggable(node) {
        let x;
        let y;
        function handleMousedown(event) {
            if (event.type === "touchstart") {
                event = event.touches[0];
            }
            x = event.clientX;
            y = event.clientY;
            node.dispatchEvent(
                new CustomEvent("dragstart", {
                    detail: { x, y },
                }),
            );
            window.addEventListener("mousemove", handleMousemove);
            window.addEventListener("mouseup", handleMouseup);
            window.addEventListener("touchmove", handleMousemove);
            window.addEventListener("touchend", handleMouseup);
        }
        function handleMousemove(event) {
            if (event.type === "touchmove") {
                event = event.changedTouches[0];
            }
            const dx = event.clientX - x;
            const dy = event.clientY - y;
            x = event.clientX;
            y = event.clientY;
            node.dispatchEvent(
                new CustomEvent("dragmove", {
                    detail: { x, y, dx, dy },
                }),
            );
        }
        function handleMouseup(event) {
            x = event.clientX;
            y = event.clientY;
            node.dispatchEvent(
                new CustomEvent("dragend", {
                    detail: { x, y },
                }),
            );
            window.removeEventListener("mousemove", handleMousemove);
            window.removeEventListener("mouseup", handleMouseup);
            window.removeEventListener("touchmove", handleMousemove);
            window.removeEventListener("touchend", handleMouseup);
        }
        node.addEventListener("mousedown", handleMousedown);
        node.addEventListener("touchstart", handleMousedown);
        return {
            destroy() {
                node.removeEventListener("mousedown", handleMousedown);
                node.removeEventListener("touchstart", handleMousedown);
            },
        };
    }
    function setHandlePosition(which) {
        return function (evt) {
            const { left, right } = slider.getBoundingClientRect();
            const parentWidth = right - left;
            const p = Math.min(
                Math.max((evt.detail.x - left) / parentWidth, 0),
                1,
            );
            if (which === "start") {
                startValue = Math.round(minValue + p * (maxValue - minValue));
                endValue = Math.max(endValue, startValue);
            } else {
                startValue = Math.min(startValue, endValue);
                endValue = Math.round(minValue + p * (maxValue - minValue));
            }
        };
    }
    function setHandlesFromBody(evt) {
        const { width } = body.getBoundingClientRect();
        const { left, right } = slider.getBoundingClientRect();
        const parentWidth = right - left;
        const leftHandleLeft = leftHandle.getBoundingClientRect().left;
        const pxStart = clamp(
            leftHandleLeft + event.detail.dx - left,
            0,
            parentWidth - width,
        );
        const pxEnd = clamp(pxStart + width, width, parentWidth);
        const pStart = pxStart / parentWidth;
        const pEnd = pxEnd / parentWidth;
        startValue = Math.round(minValue + pStart * (maxValue - minValue));
        endValue = Math.round(minValue + pEnd * (maxValue - minValue));
    }
</script>

<div class="double-range-container">
    <div class="slider" bind:this={slider}>
        <div
            class="body"
            bind:this={body}
            use:draggable
            on:dragmove|preventDefault|stopPropagation={setHandlesFromBody}
            style="
				left: {100 * ((startValue - minValue) / (maxValue - minValue))}%;
				right: {100 * (1 - (endValue - minValue) / (maxValue - minValue))}%;
			"
        />
        <div
            class="handle"
            bind:this={leftHandle}
            data-which="start"
            use:draggable
            on:dragmove|preventDefault|stopPropagation={setHandlePosition(
                "start",
            )}
            style="
				left: {100 * ((startValue - minValue) / (maxValue - minValue))}%
			"
        >
            <span>
                {startValue}$
            </span>
        </div>

        <div
            class="handle"
            data-which="end"
            use:draggable
            on:dragmove|preventDefault|stopPropagation={setHandlePosition(
                "end",
            )}
            style="
				left: {100 * ((endValue - minValue) / (maxValue - minValue))}%
			"
        >
            <span>
                {endValue}$
            </span>
        </div>
    </div>
</div>

<style>
    .double-range-container {
        width: 100%;
        height: 15px;
        user-select: none;
        box-sizing: border-box;
        white-space: nowrap;
        cursor: grab;
        margin: 5px;
    }

    .slider {
        position: relative;
        width: 100%;
        max-width: 280px;
        height: 15px;
        top: 50%; /* align to buttons */
        transform: translate(0, -50%);
        background-color: #f5f5f5;
        border-radius: 1px;
    }

    .handle {
        position: absolute;
        top: 50%;
        width: 0;
        height: 0;
    }

    span {
        box-sizing: border-box;
        position: absolute;
        width: fit-content;
        padding: 1px;
        background: white;
        border: 1px solid;
        color: black;
        transform: translate(-50%, -50%);
        cursor: grab;
    }

    span:hover {
        background: #eaeaea;
        border-color: #eaeaea;
    }

    .body {
        top: 0;
        position: absolute;
        background-color: darkorange;
        bottom: 0;
    }
</style>
