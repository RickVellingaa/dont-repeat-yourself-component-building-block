<script>
  import Progressbar from "./progressbar.svelte";

    export let principes;
</script>

<!-- <pre>{JSON.stringify(principes, null, 2)}</pre> -->

<div class="sidebar">
    <ul>
        {#each principes as principe}
        <li>
            <a href="/">
                <h5>{principe.titel}</h5>
                <span>Principe {principe.index}</span>
                <div class="progress-container">
                    <progress id="progress-partner" max="100" value="35" />
                    <label class="progress-percentage" for="progress-partner">8/25</label>
                </div>
            </a>
        </li>
        {/each}
    </ul>
</div>

<style>

    h5 {
        font-size: 1.5rem;
        font-weight: 500;
        font-family: "Inter", sans-serif;
    }

    span {
        font-weight: 100;
    }

    .sidebar {
        display: block;
        position: -webkit-sticky;
        position: sticky;
        top: 1em;
        height: 100%;
        background-color: var(--c-container);
        border-radius: 0.5em;
        border: solid 1px var(--c-container-stroke);
        flex-grow: 400;
        flex-basis: 0;
        align-self: start;
    }

    li {
        display: flex;
    }

    a {
        width: 100%;
        height: 100%;
        border-bottom: 1px solid var(--c-container-stroke);
        padding: 1em;
        color: white;
        text-decoration: none;
    }

    span {
        font-weight: 100;
    }

    .progress-container {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: flex-end;
		gap: 1em;
		margin-top: 0.25em;
	}


    progress {
		width: 100%;
	}

	progress[value] {
		/* Reset the default appearance */
		-webkit-appearance: none;
		appearance: none;
		height: 10px;
	}

	/* chrome/safari */
	progress[value]::-webkit-progress-bar {
		background-color: var(--c-container-stroke);
		border-radius: 0.5em;
	}

	progress[value]::-webkit-progress-value {
		background-color: var(--c-pink);
		border-radius: 0.5em;
	}

	.progress-percentage {
		height: 85%;
	}
</style>