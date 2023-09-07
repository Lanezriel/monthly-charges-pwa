<script>
  import { closeModal } from 'svelte-modals';
	import { fly } from 'svelte/transition';

  // from svelte-modals
  export let isOpen;

  // our props
  export let onDelete;

  let modal;

  $: if(isOpen && modal) modal.querySelector('button.cancel').focus();
</script>

{#if isOpen}
  <div role="dialog" class="modal" transition:fly|global={{ y: 50 }} bind:this={modal}>
    <div class="contents">
      <h2>Deletion warning!</h2>
      <hr/>
      <p>Are you sure you want to delete this item?</p>
      <hr/>
      <div class="actions">
        <button
          class="cancel"
          title="Cancel button"
          aria-label="auto"
          aria-live="polite"
          on:click={closeModal}
        >
          Cancel
        </button>
        <button
          class="delete"
          title="Delete button"
          aria-label="auto"
          aria-live="polite"
          on:click={onDelete}
        >
          Delete
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
