<script>
    import SearchableDropdown from "$lib/components/SearchableDropdown.svelte";
    import YearRangeFilter from "$lib/components/YearRangeFilter.svelte";
    import DoubleRangeSlider from "$lib/components/DoubleRangeSlider.svelte";
    import Header from "./Header.svelte";

    export let data = [];
    export let selectedItemName = "";
    export let selectedAgencyName = "";
    export let startYear = 1990;
    export let endYear = new Date().getFullYear();
    export let onFilterChange;

    let startValue = 10;
    let endValue = 4400000;

    let minValue = startValue;
    let maxValue = endValue;

    let minYear = startYear;
    let maxYear = endYear;

    let itemNames = [];
    let agencyNames = [];

    const parseAcquisitionValue = (value) => {
        return parseFloat(
            value.replace("US$", "").replace(/\./g, "").replace(",", "."),
        );
    };

    filterData();

    function filterData() {
        let filteredData = data;

        if (startYear || endYear) {
            filteredData = filteredData.filter((d) => {
                const shipYear = new Date(d["Ship Date"]).getFullYear();
                return shipYear >= startYear && shipYear <= endYear;
            });
        }

        if (startValue || endValue) {
            filteredData = filteredData.filter((d) => {
                const acquisitionValue = parseAcquisitionValue(
                    d["Acquisition Value"],
                );
                return (
                    acquisitionValue >= startValue &&
                    acquisitionValue <= endValue
                );
            });
        }

        if (selectedItemName) {
            filteredData = filteredData.filter((d) =>
                d["Item Name"]
                    .toLowerCase()
                    .includes(selectedItemName.toLowerCase()),
            );
        }

        if (selectedAgencyName) {
            filteredData = filteredData.filter((d) =>
                d["Agency Name"]
                    .toLowerCase()
                    .includes(selectedAgencyName.toLowerCase()),
            );
        }

        itemNames = [...new Set(filteredData.map((d) => d["Item Name"]))];
        agencyNames = [...new Set(filteredData.map((d) => d["Agency Name"]))];

        onFilterChange(
            selectedItemName,
            selectedAgencyName,
            startYear,
            endYear,
            startValue,
            endValue,
        );
    }

    function resetFilters() {
        selectedItemName = "";
        selectedAgencyName = "";
        startYear = 1990;
        endYear = new Date().getFullYear();
        startValue = 10;
        endValue = 4400000;
        filterData();
    }
</script>

<div class="filterContainer">
    <section>
        <Header />
        <!-- <DoubleRangeSlider bind:startValue bind:endValue {minValue} {maxValue} /> -->
    </section>
    <section>
        <YearRangeFilter bind:startYear bind:endYear {minYear} {maxYear} />
        <SearchableDropdown
            options={agencyNames}
            placeholder="Type to filter Agency Names..."
            bind:selected={selectedAgencyName}
            on:select={filterData}
        />

        <SearchableDropdown
            options={itemNames}
            placeholder="Type to filter Item Names..."
            bind:selected={selectedItemName}
            on:select={filterData}
        />
    </section>
    <section>
        <div class="actions">
            <button on:click={filterData}>Apply Filters</button>
            <button on:click={resetFilters}>Reset Filters</button>
        </div>
    </section>
</div>

<style>
    .filterContainer {
        display: flex;
        gap: 40px;
        padding: 10px;
        align-items: flex-end;
    }

    section {
        max-width: 400px;
        /* flex: 1; */
    }

    .actions {
        display: flex;
        justify-content: flex-end;
        gap: 5px;
        margin-top: 20px;
    }

    button {
        border: none;
        border-radius: 3px;
        cursor: pointer;
        position: relative;
    }

    button:hover {
        background-color: darkorange;
        color: black;
    }

    h2 {
        font-weight: 400;
    }
</style>
