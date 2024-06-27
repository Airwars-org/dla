<script>
    import Nav from "$lib/components/Nav.svelte";
</script>

<Nav />
<main>
    <slot />
</main>

<style>
    :global(body) {
        height: 100vh;
        margin: 0;
        font-family: sans-serif;
        text-rendering: optimizeLegibility;
    }
</style>
