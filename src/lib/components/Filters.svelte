<script>
    import SearchableDropdown from "$lib/components/SearchableDropdown.svelte";
    import YearRangeFilter from "$lib/components/YearRangeFilter.svelte";
    import DoubleRangeSlider from "$lib/components/DoubleRangeSlider.svelte";

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

    // Update the filter options based on the selected filters and text inputs
    $: {
        // const years = data.map((d) => new Date(d["Ship Date"]).getFullYear());
        // const values = data.map((d) =>
        //     parseAcquisitionValue(d["Acquisition Value"]),
        // );
        // minYear = Math.min(...years);
        // maxYear = Math.max(...years);
        // minValue = Math.min(...values);
        // maxValue = Math.max(...values);
        // if (startYear === undefined) startYear = minYear;
        // if (endYear === undefined) endYear = maxYear;
        // if (startValue === undefined) startValue = minValue;
        // if (endValue === undefined) endValue = maxValue;
    }
    $: {
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

        handleFilterChange();
    }

    function handleFilterChange() {
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
        handleFilterChange();
    }
</script>

<div>
    <h2>Filter the dataset</h2>
    <YearRangeFilter bind:startYear bind:endYear {minYear} {maxYear} />
    <DoubleRangeSlider bind:startValue bind:endValue {minValue} {maxValue} />

    <SearchableDropdown
        options={agencyNames}
        placeholder="Type to filter Agency Names..."
        bind:selected={selectedAgencyName}
        on:select={handleFilterChange}
        on:input={() => handleFilterChange()}
    />

    <SearchableDropdown
        options={itemNames}
        placeholder="Type to filter Item Names..."
        bind:selected={selectedItemName}
        on:select={handleFilterChange}
        on:input={() => handleFilterChange()}
    />

    <div class="reset">
        <button on:click={resetFilters}>Reset Filters</button>
    </div>
</div>

<style>
    div {
        background: rgb(246, 246, 246);
        padding: 10px;
    }

    .reset {
        display: flex;
        flex-direction: row-reverse;
    }

    button {
        margin-top: 30px;
        padding: 1px 4px;
        background-color: gray;
        color: white;
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
