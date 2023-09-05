<script>
  import { closeModal } from 'svelte-modals';
	import { fly } from 'svelte/transition';

  // from svelte-modals
  export let isOpen;

  // our props
  export let onDelete;
</script>

{#if isOpen}
  <div role="dialog" class="modal" transition:fly|global={{ y: 50 }}>
    <div class="contents">
      <h2>Deletion warning!</h2>
      <hr/>
      <p>Are you sure you want to delete this item?</p>
      <hr/>
      <div class="actions">
        <button class="cancel" on:click={closeModal}>Cancel</button>
        <button class="delete" on:click={onDelete}>Delete</button>
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
