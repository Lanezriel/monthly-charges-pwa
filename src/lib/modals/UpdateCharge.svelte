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
  let modal;

  $: if (item) {
      newItem = {...item};
    } else {
      newItem = {...defaultItem};
    };
  
  $: if (isOpen && modal) modal.querySelector('input#name').focus();

  $: nameValid = newItem.name !== undefined
    && newItem.name !== null
    && newItem.name !== '';

  $: valueValid = newItem.value !== undefined
    && newItem.value !== null
    && newItem.value !== ''
    && +newItem.value !== NaN
    && +newItem.value >= 0;
</script>

{#if isOpen}
  <div role="dialog" class="modal" transition:fly|global={{ y: 50 }} bind:this={modal}>
    <div class="contents">
      <h2>{ title }</h2>
      <hr/>
      <form>
        <label for="name">Name</label>
        <div class="input">
          <input
            id="name"
            type="text"
            class:error={!nameValid}
            value={newItem.name}
            on:input={(e) => newItem.name = e.target.value}
            required
          />
          {#if !nameValid}
            <span class="input-error">Charge name is required</span>
          {/if}
        </div>
        <label for="value">Value</label>
        <div class="input">
          <input
            id="value"
            type="number"
            class:error={!valueValid}
            value={newItem.value}
            min="0"
            on:input={(e) => newItem.value = e.target.value}
            required
          />
          {#if !valueValid}
            <span class="input-error">Value must be a valid number</span>
          {/if}
        </div>
      </form>
      <hr/>
      <div class="actions">
        <button class="cancel" on:click={closeModal}>Cancel</button>
        <button
          class="validate"
          on:click={() => onValidate({...newItem, value: Number(newItem.value)})}
          disabled={!nameValid || !valueValid}
        >
          {item ? 'Update' : 'Create'}
        </button>
      </div>
    </div>
  </div>
{/if}

<style>
  form {
    display: grid;
    grid-template-rows: fit-content fit-content;
    grid-template-columns: 20% 1fr;
    gap: 0.25rem;
    align-items: flex-start;
    padding: 1rem;
  }

  label {
    font-size: 1.1rem;
    font-weight: bold;
    padding-top: 0.25rem;
  }

  .input {
    display: flex;
    flex-direction: column;
    gap: 0.15rem;
  }

  .input > input {
    padding: 0.25rem 0.5rem;
    border: none;
    border-radius: 4px;
    transition: box-shadow 200ms linear;
  }

  .input > input:focus {
    outline: none;
  }

  .input > input.error {
    box-shadow: inset 0 0 1px 1px var(--color-theme-1),
                0 0 1px 1px var(--color-theme-1);
  }

  .input-error {
    color: var(--color-theme-1);
    font-size: 0.8rem;
  }
</style>
