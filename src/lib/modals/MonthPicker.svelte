<script>
	import { fly } from 'svelte/transition';
  import { closeModal } from 'svelte-modals';

  import createRipple from '$lib/utils/createRipple.js';

  import ChevronLeftRounded from '$lib/svg/chevronLeftRounded.svelte';
  import ChevronRightRounded from '$lib/svg/chevronRightRounded.svelte';

  // from svelte-modals
  export let isOpen;

  // our props
  export let onSelect;
  
  const months = [
    { name: 'January', value: 0 },
    { name: 'February', value: 1 },
    { name: 'March', value: 2 },
    { name: 'April', value: 3 },
    { name: 'May', value: 4 },
    { name: 'June', value: 5 },
    { name: 'July', value: 6 },
    { name: 'August', value: 7 },
    { name: 'September', value: 8 },
    { name: 'October', value: 9 },
    { name: 'November', value: 10 },
    { name: 'December', value: 11 },
  ];

  let year = new Date().getFullYear();
  let modal;

  $: if(isOpen && modal) modal.querySelector('button').focus();
</script>

{#if isOpen}
  <div role="dialog" class="modal" transition:fly|global={{ y: 50 }} bind:this={modal}>
    <div class="contents">
      <h2>Select charges month</h2>
      <hr/>
      <div class="year">
        <button
          title="Previous year"
          aria-label="auto"
          aria-live="polite"
          on:click={createRipple}
          on:click={() => year -= 1}
        >
          <svelte:component this={ChevronLeftRounded}/>
        </button>
        <p>{year}</p>
        <button
          title="Next year"
          aria-label="auto"
          aria-live="polite"
          on:click={createRipple}
          on:click={() => year += 1}
        >
          <svelte:component this={ChevronRightRounded}/>
        </button>
      </div>
      <div class="months">
        {#each months as month (month.value)}
          <button
            title="{month.name}"
            aria-label="auto"
            aria-live="polite"
            on:click={() => onSelect(new Date(year, month.value))}
            on:click={closeModal}
          >
            {month.name}
          </button>
        {/each}
      </div>
    </div>
  </div>
{/if}

<style>
  .year {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 1rem;
  }

  .year > button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 3rem;
    height: 3rem;
    padding: 0;
    background: rgba(0, 0, 0, 0.05);
    border: solid 1px rgba(0, 0, 0, 0.1);
    border-radius: 50%;
    color: var(--color-text);
    transition: background 500ms linear;
    cursor: pointer;
  }

  :global([data-dark-mode]) .year > button {
    background: rgba(0, 0, 0, 0.2);
    border: solid 1px rgba(255, 255, 255, 0.05)
  }

  .year > button:hover {
    background: rgba(0, 0, 0, 0.1);
  }

  :global([data-dark-mode]) .year > button:hover {
    background: rgba(255, 255, 255, 0.05);
  }

  .year > button > :global(svg) {
    width: 100%;
    height: 100%;
  }

  .year > p {
    margin: 0;
    padding: 0;
    font-size: 2rem;
  }

  .months {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    margin: 0 1rem 1rem 1rem;
    gap: 1px;
    border-radius: 1rem;
    background: rgba(0, 0, 0, 0.05);
  }

  :global([data-dark-mode]) .months {
    background: rgba(0, 0, 0, 0.2);
  }

  .months > button {
    padding: 1rem;
    outline: solid 1px rgba(0, 0, 0, 0.1);
    border: none;
    background: none;
    font-size: 0.9rem;
    color: var(--color-text);
    transition: background 500ms linear;
    cursor: pointer;
  }

  .months > button:hover {
    background: rgba(0, 0, 0, 0.1);
  }

  :global([data-dark-mode]) .months > button {
    outline: solid 1px rgba(255, 255, 255, 0.05);
  }

  :global([data-dark-mode]) .months > button:hover {
    background: rgba(255, 255, 255, 0.05);
  }

  .months > button:first-child {
    border-top-left-radius: 1rem;
  }

  .months > button:nth-child(3) {
    border-top-right-radius: 1rem;
  }

  .months > button:nth-child(10) {
    border-bottom-left-radius: 1rem;
  }

  .months > button:last-child {
    border-bottom-right-radius: 1rem;
  }

  @media (min-width: 600px) {
    .months > button {
      padding: 1rem 1.5rem;
      font-size: 1rem;
    }
  }
</style>
