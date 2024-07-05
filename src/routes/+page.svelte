<script>
    import { onMount } from "svelte";
    import Map from "$lib/components/Map.svelte";
    import Filters from "$lib/components/Filters.svelte";
    import Timeline from "$lib/components/Timeline.svelte";

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
        const response = await fetch("data.json");
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

{#if data.length > 0}
    <section class="vizContainer">
        <div>
            <section class="filters">
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
            </section>
            <section class="map">
                <Map
                    data={filteredData}
                    itemName={selectedItemName}
                    agencyName={selectedAgencyName}
                />
            </section>
        </div>
        <section class="timeline">
            <Timeline
                data={filteredData}
                itemName={selectedItemName}
                agencyName={selectedAgencyName}
            />
        </section>
    </section>
{:else}
    <p>Loading...</p>
{/if}

<style>
    .vizContainer {
        width: 100%;
        height: 100vh;
        display: flex;
        flex-wrap: wrap;
    }

    div {
        background-color: gainsboro;
    }

    .filters {
        display: flex;
        background-color: #d0d0d0;
        /* min-height: 120px; */
        /* max-width: 400px; */
    }

    .timeline {
        flex: 2;
        height: 100vh;
        overflow: scroll;
        background: white;
    }

    .map {
        flex: 3;
        overflow: hidden;
        align-items: center;
    }

    p {
        margin: 10px;
    }

    @media screen and (max-width: 1024px) {
        .header {
            max-width: 100%;
        }
        .vizContainer {
            display: block;
        }
    }
</style>
