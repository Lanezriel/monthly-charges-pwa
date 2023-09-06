<script>
	import { fly } from 'svelte/transition';

  // from svelte-modals
  export let isOpen;

  // our props
  export let options = [{value: '', label: 'No options provided'}];
  export let onSelect;

  let modal;

  $: if (isOpen && modal) modal.querySelector('button').focus();
</script>

{#if isOpen}
  <div role="dialog" class="modal" transition:fly|global={{ y: 50 }} bind:this={modal}>
    <div class="contents">
      {#each options as option (option.value)}
        <button on:click={() => onSelect(option.value)}>{option.label}</button>
      {/each}
    </div>
  </div>
{/if}

<style>
  button {
    padding: 1rem;
    background: none;
    border: none;
    color: var(--color-text);
    transition: background 500ms linear;
  }

  button:hover {
    background: rgba(0, 0, 0, 0.1);
  }

  :global([data-dark-mode]) button:hover {
    background: rgba(255, 255, 255, 0.05);
  }

  button:not(:last-child) {
    border-bottom: solid 1px rgba(0, 0, 0, 0.1);
  }

  :global([data-dark-mode]) button:not(:last-child) {
    border-bottom: solid 1px rgba(255, 255, 255, 0.05);
  }

  button:first-child {
    border-radius: 1rem 1rem 0 0;
  }

  button:last-child {
    border-radius: 0 0 1rem 1rem;
  }

  /* Order matters here */
  button:only-child {
    border-radius: 1rem;
  }
</style>
