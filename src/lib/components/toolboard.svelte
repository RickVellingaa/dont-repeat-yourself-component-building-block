<script>
    import Sidebar from "./sidebar.svelte";
    import Checklist from "./checklist.svelte";
  import Check from "./check.svelte";

    export let principes;
    export let principe;
    export let url;

</script>

<section class="checklist">
    <Check {principe} {url} />
    <Sidebar {principes}/>
</section>

<style>
.checklist {
    display: flex;
    flex-wrap: wrap;
    margin: 1em;
    gap: 1em;
}
</style>