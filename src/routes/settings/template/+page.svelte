<script>
	import { getContext } from 'svelte';

  import { openModal, closeModal } from 'svelte-modals';

  import edit from '$lib/svg/edit.svelte';
  import deleteForever from '$lib/svg/deleteForever.svelte';
  import plusRounded from '$lib/svg/plusRounded.svelte';

  import createRipple from '$lib/utils/createRipple.js';

  import UpdateCharge from '$lib/modals/UpdateCharge.svelte';
  import DeleteConfirm from '$lib/modals/DeleteConfirm.svelte';
  import ItemWrapper from '$lib/containers/ItemWrapper.svelte';
  import ItemEntry from '$lib/containers/ItemEntry.svelte';
	import ItemAction from '$lib/ItemAction.svelte';

  // ----------

  const settings = getContext('settings');

  let actionId = null;

  // ----------

  function handleClick(event, id) {
    createRipple(event);

    if (actionId === id) {
      actionId = null
    } else {
      actionId = id;
    }
  }

  function handleEditClick(event, id) {
    createRipple(event);

    openModal(UpdateCharge, {
      item: $settings.template.charges.find((item) => item.id === id),
      onValidate: (newItem) => {
        actionId = null;

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
        actionId = null;

        $settings.template.charges = $settings.template.charges.filter((item) => item.id !== id);

        closeModal();
      },
    });
  }

  function handleAddClick(event) {
    createRipple(event);
    actionId = null;

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

{#each $settings.template.charges as charge (charge.id)}
  <ItemWrapper>
    <ItemEntry clickCallback={(e) => handleClick(e, charge.id)}>
      <h2>{charge.name}</h2>
      <p>{charge.value} {$settings.currency}</p>
    </ItemEntry>

    <ItemAction
      type="edit"
      isVisible={actionId === charge.id}
      clickCallback={(e) => handleEditClick(e, charge.id)}
      icon={edit}
    />
    <ItemAction
      type="delete"
      isVisible={actionId === charge.id}
      clickCallback={(e) => handleDeleteClick(e, charge.id)}
      icon={deleteForever}
    />
  </ItemWrapper>
{/each}
<ItemWrapper>
  <ItemEntry clickCallback={handleAddClick} centered>
    <svelte:component this={plusRounded} />
  </ItemEntry>
</ItemWrapper>

<style>
  h2 {
    font-size: 1.2rem;
    font-weight: bold;
    margin: 0;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  p {
    flex-shrink: 0;
    margin: 0;
    font-size: 1.2rem;
  }
</style>
