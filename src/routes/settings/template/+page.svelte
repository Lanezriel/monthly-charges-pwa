<script>
	import { getContext } from 'svelte';

  import { openModal, closeModal } from 'svelte-modals';

  import edit from '$lib/svg/edit.svelte';
  import deleteForever from '$lib/svg/deleteForever.svelte';
  import plusRounded from '$lib/svg/plusRounded.svelte';

  import createRipple from '$lib/utils/createRipple.js';

  import UpdateCharge from '$lib/modals/UpdateCharge.svelte';
  import DeleteConfirm from '$lib/modals/DeleteConfirm.svelte';

  // ----------

  const utils = getContext('utils');
  const settings = getContext('settings');

  let actionIndex = null;

  // ----------

  function handleClick(event) {
    createRipple(event);

    const index = Number(event.currentTarget.attributes.tabIndex.value);
    if (actionIndex === index) {
      actionIndex = null
    } else {
      actionIndex = index;
    }
  }

  function handleEditClick(event, id) {
    createRipple(event);

    openModal(UpdateCharge, {
      item: $settings.template.charges.find((item) => item.id === id),
      onValidate: (newItem) => {
        actionIndex = null;

        const index = $settings.template.charges.findIndex((item) => item.id === id);
        $settings.template.charges[index] = newItem;

        closeModal();
      },
    });
  }

  function handleDeleteClick(event, id) {
    createRipple(event);

    openModal(DeleteConfirm, {
      onDelete: () => {
        actionIndex = null;
        $settings.template.charges = $settings.template.charges.filter((item) => item.id !== id);
        closeModal();
      },
    });
  }

  function handleAddClick(event) {
    createRipple(event);
    actionIndex = null;

    openModal(UpdateCharge, {
      title: 'Create a charge',
      onValidate: (newItem) => {
        $settings.template.charges = [
          ...$settings.template.charges,
          {
            ...newItem,
            id: crypto.randomUUID(),
            paid: false,
          },
        ];

        closeModal();
      },
    });
  }
</script>

<svelte:head>
	<title>Monthly charges - Settings - Template</title>
	<meta name="description" content="Template definitions" />
</svelte:head>

{#each $settings.template.charges as charge, i}
  <div class="charge-wrapper">
    <div
      class="charge"
      role="button"
      tabindex="{i}"
      on:click={handleClick}
      on:keydown={handleClick}
    >
      <h2>{charge.name}</h2>
      <p>{charge.value} {$settings.currency}</p>
    </div>
    <div
      class="action edit"
      class:visible={actionIndex === i}
      role="button"
      tabindex="{i}"
      on:click={(e) => handleEditClick(e, charge.id)}
      on:keydown={(e) => handleEditClick(e, charge.id)}
    >
      <svelte:component this={edit} />
    </div>
    <div
      class="action delete"
      class:visible={actionIndex === i}
      role="button"
      tabindex="{i}"
      on:click={(e) => handleDeleteClick(e, charge.id)}
      on:keydown={(e) => handleDeleteClick(e, charge.id)}
    >
      <svelte:component this={deleteForever} />
    </div>
  </div>
{/each}
<div class="charge-wrapper">
  <div
    class="charge add"
    role="button"
    tabindex="{$settings.template.charges.length}"
    on:click={handleAddClick}
    on:keydown={handleAddClick}
  >
    <svelte:component this={plusRounded} />
  </div>
</div>

<style>
  h2 {
    font-size: 1.2rem;
    font-weight: bold;
    margin: 0;
  }

  p {
    margin: 0;
  }

  .charge-wrapper {
    display: flex;
    width: 100%;
    align-items: stretch;
  }

  .charge-wrapper:not(:last-child) {
    border-bottom: solid 1px rgba(0, 0, 0, 0.1);
  }

  :global([data-dark-mode]) .charge-wrapper:not(:last-child) {
    border-bottom: solid 1px rgba(255, 255, 255, 0.05);
  }

  .charge {
    flex-grow: 1;
    min-width: 0;
    height: 4.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.25rem;
    padding: 0 1rem;
    background: rgba(0, 0, 0, 0.05);
  }

  :global([data-dark-mode]) .charge {
    background: rgba(0, 0, 0, 0.2);
  }

  .charge > * {
    pointer-events: none;
  }

  .charge > h2 {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .charge > p {
    flex-shrink: 0;
  }

  .charge.add {
    justify-content: center;
  }

  .charge.add > :global(svg) {
    width: 3rem;
    height: 3rem;
    pointer-events: none;
  }

  .action {
    width: 0;
    min-width: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: width 200ms linear,
                min-width 200ms linear,
                background 500ms linear;
    cursor: pointer;
  }

  .action > :global(svg) {
    pointer-events: none;
  }

  .action.visible {
    width: 4rem;
    min-width: 4rem;
  }

  .action.edit {
    background: var(--warning-bg);
  }

  .action.delete {
    background: var(--danger-bg);
  }

  @media (min-width: 600px) {
    .charge {
      background: rgba(0, 0, 0, 0);
      transition: background 500ms linear;
      cursor: pointer;
    }

    .charge:hover {
      background: rgba(0, 0, 0, 0.1);
    }

    .charge-wrapper:first-child {
      border-radius: 1rem 1rem 0 0;
    }

    .charge-wrapper:last-child {
      border-radius: 0 0 1rem 1rem;
    }

    /* Order matters here */
    .charge-wrapper:only-child {
      border-radius: 1rem;
    }

    :global([data-dark-mode]) .charge {
      background: rgba(0, 0, 0, 0);
      transition: background 500ms linear;
    }

    :global([data-dark-mode]) .charge:hover {
      background: rgba(255, 255, 255, 0.05);
    }

    .action.edit:hover {
      background: color-mix(in srgb, var(--warning-bg), rgb(0, 0, 0) 15%);
    }

    .action.delete:hover {
      background: color-mix(in srgb, var(--danger-bg), rgb(0, 0, 0) 15%);
    }

    :global([data-dark-mode]) .action.edit:hover {
      background: color-mix(in srgb, var(--warning-bg), rgb(255, 255, 255) 20%);
    }

    :global([data-dark-mode]) .action.delete:hover {
      background: color-mix(in srgb, var(--danger-bg), rgb(255, 255, 255) 15%);
    }
  }
</style>
