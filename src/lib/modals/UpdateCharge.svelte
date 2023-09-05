<script>
  import { closeModal } from 'svelte-modals';
	import { fly } from 'svelte/transition';

  // from svelte-modals
  export let isOpen;

  // our props
  export let title = 'Update a charge';
  export let item  = null;
  export let onValidate;

  const defaultItem = { name: '', value: 0.00 }
  let newItem = {...defaultItem};

  $: if (item) {
      newItem = {...item};
    } else {
      newItem = {...defaultItem};
    };
</script>

{#if isOpen}
  <div role="dialog" class="modal" transition:fly|global={{ y: 50 }}>
    <div class="contents">
      <h2>{ title }</h2>
      <hr/>
      <p>Form to be implemented</p>
      <p>
          ITEM<br/>
          Name: {item?.name}<br/>
          Value: {item?.value}
      </p>
      <p>
          NEW ITEM<br/>
          Name: {newItem?.name}<br/>
          Value: {newItem?.value}
      </p>
      <hr/>
      <div class="actions">
        <button class="cancel" on:click={closeModal}>Cancel</button>
        <button class="validate" on:click={() => onValidate(newItem)}>{item ? 'Update' : 'Create'}</button>
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
