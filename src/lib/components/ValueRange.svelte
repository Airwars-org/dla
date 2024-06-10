<script>
    import { createEventDispatcher } from "svelte";

    export let minValue = 0;
    export let maxValue = 10000;
    export let minLimit = 0;
    export let maxLimit = 100000;
    const dispatch = createEventDispatcher();

    function handleValueChange() {
        dispatch("change", { minValue, maxValue });
    }
</script>

<div>
    <label for="valueRange">Value Range: {minValue} - {maxValue}</label>
    <input
        type="range"
        id="minValue"
        min={minLimit}
        max={maxLimit}
        step="100"
        bind:value={minValue}
        on:input={handleValueChange}
    />
    <input
        type="range"
        id="maxValue"
        min={minLimit}
        max={maxLimit}
        step="100"
        bind:value={maxValue}
        on:input={handleValueChange}
    />
</div>

<style>
    input[type="range"] {
        display: block;
        width: 100%;
    }
</style>
