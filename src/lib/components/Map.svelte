<script>
    export let data = [];
    export let itemName;
    export let agencyName;

    import { onMount } from "svelte";
    import * as topojson from "topojson-client";
    import { geoPath, geoAlbersUsa } from "d3-geo";
    import { scaleSqrt } from "d3-scale";

    let states = [];
    let points = [];
    let container;
    let width;
    let height;

    onMount(async () => {
        const us = await fetch("us.json").then((d) => d.json());
        states = topojson.feature(us, us.objects.states).features;
    });

    let projection = geoAlbersUsa().scale(1300).translate([487.5, 305]);
    let path = geoPath().projection(null);

    $: clusteredPoints = clusterData(data);

    function clusterData(data) {
        const pointMap = new Map();

        data.forEach((d) => {
            const coords = projection([d.Longitude, d.Latitude]);
            if (!coords) return;
            const [cx, cy] = coords;
            const key = `${cx}-${cy}`;
            if (!pointMap.has(key)) {
                pointMap.set(key, { ...d, cx, cy, count: 0 });
            }
            pointMap.get(key).count += 1;
        });

        return Array.from(pointMap.values());
    }

    function getRadius(count) {
        const minRadius = 3;
        const maxRadius = 30;
        const scale = scaleSqrt()
            .domain([1, Math.max(...clusteredPoints.map((p) => p.count))])
            .range([minRadius, maxRadius]);
        return scale(count);
    }
</script>

<article class="container" bind:clientWidth={width} bind:clientHeight={height}>
    <svg viewBox="0 0 975 610">
        <g fill="white" stroke="black">
            {#each states as feature, i}
                <path d={path(feature)} class="country" />
            {/each}
        </g>

        <g class="points">
            {#each clusteredPoints as { cx, cy, count }}
                {#if cx && cy}
                    <circle {cx} {cy} r={getRadius(count)} class="point" />
                {/if}
            {/each}
        </g>
    </svg>
</article>

<style>
    article {
        background-color: gainsboro;
        height: 100%;
    }

    .country {
        fill: white;
        stroke: grey;
    }

    .point {
        fill: blue;
        stroke: black;
    }
</style>
