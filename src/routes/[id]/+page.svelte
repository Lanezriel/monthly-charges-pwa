<script>
  import { openModal, closeModal } from 'svelte-modals';
  import { beforeNavigate } from '$app/navigation';
  import { settings, entries, edition } from '$lib/stores';

  import UpdateCharge from '$lib/modals/UpdateCharge.svelte';
  import DeleteConfirm from '$lib/modals/DeleteConfirm.svelte';
  import ItemWrapper from '$lib/containers/ItemWrapper.svelte';
  import ItemEntry from '$lib/containers/ItemEntry.svelte';
  import ItemAction from '$lib/ItemAction.svelte';

  import edit from '$lib/svg/edit.svelte';
  import deleteForever from '$lib/svg/deleteForever.svelte';
  import plusRounded from '$lib/svg/plusRounded.svelte';
  import roundCheck from '$lib/svg/roundCheck.svelte';

  export let data;

  let entry = data.entry;
  let actionId;

  $: if (!$edition) actionId = null;
  $: entry, onEntryChange();

  beforeNavigate(() => {
    $edition = false;
  });

  function onEntryChange() {
    const index = $entries.findIndex((item) => item.id === entry.id);
    $entries[index] = entry;
  }

  function handleClick(charge) {
    if ($edition) {
      if (actionId === charge.id) {
        actionId = null;
      } else {
        actionId = charge.id;
      }
    } else {
      const index = entry.charges.findIndex((item) => item.id === charge.id);
      entry.charges[index] = { ...charge, paid: !charge.paid };
    }
  }

  function handleEditClick(id) {
    openModal(UpdateCharge, {
      item: entry.charges.find((item) => item.id === id),
      onValidate: (newItem) => {
        actionId = null;

        const index = entry.charges.findIndex((item) => item.id === id);
        entry.charges[index] = newItem;

        closeModal();
      },
    }, { replace: true });
  }

  function handleDeleteClick(id) {
    openModal(DeleteConfirm, {
      onDelete: () => {
        actionId = null;

        entry.charges = entry.charges.filter((item) => item.id !== id);

        closeModal();
      },
    }, { replace: true });
  }

  function handleAddClick() {
    openModal(UpdateCharge, {
      title: 'Create a charge',
      onValidate: (newItem) => {
        entry.charges = [
          ...entry.charges,
          {
            ...newItem,
            id: crypto.randomUUID(),
            paid: false,
          },
        ].toSorted((a, b) => b.value - a.value);

        closeModal();
      },
    }, { replace: true });
  }
</script>

<svelte:head>
	<title>Monthly charges - {data.title}</title>
	<meta name="description" content="Template definitions" />
</svelte:head>

{#if entry}
  {#each entry.charges as charge (charge.id)}
    <ItemWrapper>
      <ItemEntry clickCallback={() => handleClick(charge)}>
        <h2>{charge.name}</h2>
        <div class="right">
          <p>{charge.value} {$settings.currency}</p>
          {#if charge.paid}
            <svelte:component this={roundCheck}/>
          {/if}
        </div>
      </ItemEntry>

      <ItemAction
        type="edit"
        isVisible={actionId === charge.id}
        clickCallback={() => handleEditClick(charge.id)}
        icon={edit}
      />
      <ItemAction
        type="delete"
        isVisible={actionId === charge.id}
        clickCallback={() => handleDeleteClick(charge.id)}
        icon={deleteForever}
      />
    </ItemWrapper>
  {/each}

  <ItemWrapper>
    <ItemEntry clickCallback={handleAddClick} centered>
      <svelte:component this={plusRounded} />
    </ItemEntry>
  </ItemWrapper>
{:else}
  <div class="oops">
    <h2>Oops!</h2>
    <p>The entry you are looking for doesn't seem to exist.</p>
  </div>
{/if}

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
    margin: 0;
    font-size: 1.2rem;
  }

  .right {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .oops {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    padding: 1rem;
  }

  .oops > h2 {
    font-size: 2rem;
  }

  .oops > p {
    text-align: center;
  }
</style>
