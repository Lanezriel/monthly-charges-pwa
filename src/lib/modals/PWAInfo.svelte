<script>
  import { closeModal } from 'svelte-modals';
	import { fly } from 'svelte/transition';

  // from svelte-modals
  export let isOpen;

  let modal;

  $: if(isOpen && modal) modal.querySelector('.contents').focus();
</script>

{#if isOpen}
  <div role="dialog" class="modal" transition:fly|global={{ y: 50 }} bind:this={modal}>
    <div class="contents">
      <h2>PWA Info</h2>
      <hr/>
      <p>This application is a Progressive Web App (PWA).</p>
      <p>This means it can be installed as a standalone version using its own local storage for your data.</p>
      <p>
        Installation instructions can be found
        <a href="https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Guides/Installing" target="_blank">here</a>.
      </p>
      <hr/>
      <div class="actions">
        <button
          class="cancel"
          title="Ok button"
          aria-label="auto"
          aria-live="polite"
          on:click={closeModal}
        >
          Ok
        </button>
      </div>
    </div>
  </div>
{/if}

<style>
  p {
    margin: 0;
    padding: 1rem;
  }
</style>
