<script>
    import Sidebar from "./sidebar.svelte";
    import Checklist from "./checklist.svelte";

    export let principes;
    export let principe;
    export let url;

</script>

<div class="checklist">
    <Checklist {principe} {url} />
    <Sidebar {principes}/>
</div>

<style>
    .checklist {
        display: flex;
        flex-wrap: wrap;
        margin: 1em;
        gap: 1em;
    }
</style>