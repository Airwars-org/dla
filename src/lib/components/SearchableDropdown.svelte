<script>
    import { createEventDispatcher } from "svelte";

    export let options = [];
    export let placeholder = "";
    export let selected = "";
    const dispatch = createEventDispatcher();
    let search = "";

    $: {
        search = selected;
    }

    $: filteredOptions = options
        .filter((option) => option.toLowerCase().includes(search.toLowerCase()))
        .sort();

    function handleSelect(option) {
        selected = option;
        search = option;
        dispatch("select", option);
    }

    function handleInput(event) {
        search = event.target.value;
        dispatch("input", search);
    }

    function handleSelectAll() {
        selected = "";
        search = "";
        dispatch("select", "");
    }
</script>

<div class="dropdown">
    <input
        type="text"
        {placeholder}
        bind:value={search}
        on:input={handleInput}
    />
    <div class="dropdown-content">
        <div on:click={handleSelectAll}>All</div>
        {#each filteredOptions as option}
            <div on:click={() => handleSelect(option)}>
                {option}
            </div>
        {/each}
    </div>
</div>

<style>
    .dropdown {
        position: relative;
        display: inline-block;
        max-width: 340px;
        width: 100%;
        margin: 5px;
    }

    .dropdown-content {
        display: none;
        position: absolute;
        background-color: #f9f9f9;
        min-width: 160px;
        box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
        z-index: 1;
        max-height: 350px;
        overflow-y: auto;
        width: 100%;
        cursor: pointer;
    }

    .dropdown:hover .dropdown-content {
        display: block;
    }

    .dropdown-content div {
        color: black;
        text-decoration: none;
        display: block;
    }

    .dropdown-content div:hover {
        background-color: darkorange !important;
    }

    .dropdown-content div:nth-of-type(odd) {
        background-color: #f1f1f1;
    }

    input {
        width: 100%;
        box-sizing: border-box;
    }
</style>
