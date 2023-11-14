<script>
  import Progressbar from "./progressbar.svelte";

  export let principe;
  export let url;

  const checkedSuccescriteria = url.checks[0] ? url.checks[0].succescriteria : [];
</script>

<!-- <pre>{JSON.stringify(principe, null, 2)}</pre> -->


<section class="flex-container">
  <div class="huidige-richtlijn">
    <h2><span>{principe.titel}.</span> Principe {principe.index}</h2>
    <p>{@html principe.beschrijving.html}</p>
    <ul>
      <li>
				<section>
					<div>
						<span class="goed-bezig">Goed bezig!</span>
						<p>Je hebt al grote stappen gemaakt met dit principe!</p>
					</div>
				</section> 
			</li>
			<li>
				<section>
					<div>
						<span class="tip">Tip</span>
						<p>
							Kijk ook eens naar succescriteria 1.4.1. Deze is namelijk eenvoudig toe te passen!
						</p>
					</div>
				</section>
			</li>
			<li>
				<section>
					<div>
						<span class="tip">Tip</span>
						<p>
							Succescriteria 1.2.3 zal de toegankelijkheid op je website sterk verbeteren door het
							contrast gebruik.
						</p>
					</div>
				</section>
			</li>
    </ul>
    <Progressbar />
  </div>
  <form action="">
    {#each principe.richtlijnen as richtlijn}
      <section>
        <div class="richtlijn">
          <span>Richtlijn {richtlijn.index}</span>
          <h3>{richtlijn.titel}</h3>
        </div>
        {#each richtlijn.succescriteria as succescriterium}
          <details>
            <summary>
              <label class="form-control">
                <div class="titel">
                  <span>Criteria {succescriterium.index} ({succescriterium.niveau})</span>
                  <h4>{succescriterium.titel}</h4>
                </div>
                <input
                  type="checkbox"
                  checked={checkedSuccescriteria.find((e) => e.id === succescriterium.id)}
                />
              </label>
            </summary>
            <div class="uitleg-richtlijn">{@html richtlijn.uitleg.html}</div>
          </details>
        {/each}
      </section>
    {/each}
  </form>
</section>

<style>

  .huidige-richtlijn {
    background-color: var(--c-container);
    border-radius: 0.5em;
    border: solid 1px var(--c-container-stroke);
    margin-bottom: 1em;
    padding: 1em;
  }

  .huidige-richtlijn ul {
		list-style-type: none;
		display: flex;
		flex-wrap: wrap;
		gap: 1em;
		margin-top: .5em;
	}
  
  .huidige-richtlijn ul li {
    background-color: var(--c-container-stroke);
		padding: 1em;
		border-radius: 0.5em;
		min-width: 16em;
  }

  .huidige-richtlijn li  p {
		font-size: 1em;
		max-width: 16rem;
		margin-top: .25em;
	}

  .goed-bezig {
		color: var(--c-green);
		font-size: 1.25em;
	}

	.tip {
		color: var(--c-orange);
		font-size: 1.25em;
	}

  h2 span {
    color: var(--c-pink);
  }

  .flex-container {
    flex-basis: 0;
    flex-grow: 999;
  }

  form section:not(:first-child) {
    margin-top: 1em;
  }

  form section {
    background-color: var(--c-container);
    border-radius: 0.5em;
    border: solid 1px var(--c-container-stroke);
  }

  .titel {
    margin-left: 1em;
  }

  details {
    padding: 1em;
  }

  .richtlijn {
    padding-top: 1em;
    padding-left: 1em;
    padding-right: 1em;
  }

  .richtlijn span, .titel span {
    font-size: 1em;
    font-weight: 100;
  }

  .richtlijn h3 {
    font-size: 1.5em;
  }

  .titel h4 {
    font-size: 1.5em;
    font-weight: normal;
    font-family: "Inter", sans-serif;
  }

  .uitleg-richtlijn {
    font-size: .9em !important;
    padding-top: 1em;
  }

  section details:not(:nth-child(2)) {
    border-top: 1px solid var(--c-container-stroke);
  }

  summary {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  summary::-webkit-details-marker {
    display: none;
  }

  summary:before {
    content: "🡒";
    font-size: 1.5em;
    color: #fff;
    width: 30px;
  }

  details[open] summary:before {
    content: "🡓";
    color: var(--c-pink);
  }

  label {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

input[type="checkbox"] {
  -webkit-appearance: none;
  appearance: none;
  /* background-color: var(--c-pink); */
  margin: 0;
  color: var(--c-pink);
  min-width: 2em;
  width: 2em;
  height: 2em;
  border: 0.15em solid currentColor;
  border-radius: .3em;
  transform: translateY(-0.075em);

  display: grid;
  place-content: center;
}

input[type="checkbox"]::before {
  content: "";
  width: 1em;
  height: 1em;
  clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
  transform: scale(0);
  background-color: white;
}

input[type="checkbox"]:checked::before {
  transform: scale(1);
}

input[type="checkbox"]:checked {
  background-color: var(--c-pink);
}

</style>