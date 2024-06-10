<script>
    import { onMount } from "svelte";
    import DataVisualization from "$lib/components/DataVisualization.svelte";
    import Filters from "$lib/components/Filters.svelte";
    import Header from "$lib/components/Header.svelte";

    let data = [];
    let selectedItemName = "";
    let selectedAgencyName = "";
    let startYear = 1990;
    let endYear = new Date().getFullYear();
    let startValue = 10;
    let endValue = 1000;
    let filteredData = [];

    const parseAcquisitionValue = (value) => {
        return parseFloat(
            value.replace("US$", "").replace(/\./g, "").replace(",", "."),
        );
    };

    onMount(async () => {
        const response = await fetch("/data.json");
        data = await response.json();
        updateFilteredData();
    });

    function updateFilteredData() {
        filteredData = data.filter((d) => {
            const shipYear = new Date(d["Ship Date"]).getFullYear();

            const acquisitionValue = parseAcquisitionValue(
                d["Acquisition Value"],
            );

            return (
                (selectedItemName == "" ||
                    d["Item Name"]
                        .toLowerCase()
                        .includes(selectedItemName.toLowerCase())) &&
                (selectedAgencyName == "" ||
                    d["Agency Name"]
                        .toLowerCase()
                        .includes(selectedAgencyName.toLowerCase())) &&
                shipYear >= startYear &&
                shipYear <= endYear &&
                acquisitionValue >= startValue &&
                acquisitionValue <= endValue
            );
        });
    }

    function handleFilterChange(
        itemName,
        agencyName,
        startYr,
        endYr,
        minVal,
        maxVal,
    ) {
        selectedItemName = itemName;
        selectedAgencyName = agencyName;
        startYear = startYr;
        endYear = endYr;
        startValue = minVal;
        endValue = maxVal;
        updateFilteredData();
    }
</script>

<div>
    <Header />
    <Filters
        {data}
        {selectedItemName}
        {selectedAgencyName}
        {startYear}
        {endYear}
        {startValue}
        {endValue}
        onFilterChange={handleFilterChange}
    />
</div>

{#if filteredData.length > 0}
    <div class="viz">
        <DataVisualization
            data={filteredData}
            itemName={selectedItemName}
            agencyName={selectedAgencyName}
        />
    </div>
{:else}
    <p>...</p>
{/if}

<style>
    :global(body) {
        margin: 0;
        font-family: sans-serif;
        text-rendering: optimizeLegibility;
        display: flex;
    }
    div {
        width: 100%;
        max-width: 400px;
        height: 100vh;
        background: rgb(246, 246, 246);
        position: sticky;
        top: 0;
    }
    .viz {
        width: 100%;
        max-width: calc(100vw - 410px);
        overflow: scroll;
        background: white;
    }

    p {
        margin: 10px;
    }
</style>
