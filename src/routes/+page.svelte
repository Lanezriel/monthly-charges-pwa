<script>
  import { goto } from '$app/navigation';

  import { openModal, closeModal } from 'svelte-modals';

  import { settings, entries, edition } from '$lib/stores';

  import MonthPicker from '$lib/modals/MonthPicker.svelte';
  import DeleteConfirm from '$lib/modals/DeleteConfirm.svelte';
	import ItemWrapper from '$lib/containers/ItemWrapper.svelte';
  import ItemEntry from '$lib/containers/ItemEntry.svelte';
  import ItemAction from '$lib/ItemAction.svelte';

  import deleteForever from '$lib/svg/deleteForever.svelte';
  import plusRounded from '$lib/svg/plusRounded.svelte';

  let actionId;

  $: if (!$edition) actionId = null;

  function handleClick(id) {
    if ($edition) {
      if (actionId === id) {
        actionId = null;
      } else {
        actionId = id;
      }
    } else {
      goto(`./${id}`)
    }
  }

  function handleDeleteClick(id) {
    openModal(DeleteConfirm, {
      onDelete: () => {
        actionId = null;

        $entries = $entries.filter((item) => item.id !== id);

        closeModal();
      },
    }, { replace: true });
  }

  function handleAddClick() {
   openModal(MonthPicker, {
    onSelect: (date) => {
      $entries = [
        ...$entries,
        {
          id: crypto.randomUUID(),
          name: date.toLocaleDateString(undefined, {month: 'long', year: 'numeric'}),
          date,
          charges: [
            ...$settings.template.charges,
          ],
        },
      ].toSorted((a, b) => a.date.getTime() - b.date.getTime());
    },
   }, { replace: true });
  }

  function getRemainingCharges(charges) {
    return charges.reduce((acc, cur) => cur.paid ? acc : acc + cur.value, 0);
  }

  function getTotalCharges(charges) {
    return charges.reduce((acc, cur) => acc + cur.value, 0);
  }

  function getProgress(charges) {
    const total = getTotalCharges(charges);
    const paid = charges.reduce((acc, cur) => cur.paid ? acc + cur.value : acc, 0);

    return (paid / total) * 100;
  }
</script>

<svelte:head>
	<title>Monthly charges - Home</title>
	<meta name="description" content="Home page" />
</svelte:head>

{#if $entries.length === 0}
  <ItemWrapper>
    <div class="oops">
      <h2>Oops!</h2>
      <p class="oops-detail">You don't seem to have any entry yet.</p>
      <p class="oops-detail">Think about preparing your <a href="./settings/template?home=true">template</a> before starting.</p>
    </div>
  </ItemWrapper>
{:else}
  {#each $entries as entry (entry.id)}
    <ItemWrapper>
      <ItemEntry clickCallback={() => handleClick(entry.id)}>
        <div class="wrapper">
          <div class="info">
            <h2>{entry.name}</h2>
            <p>Remaining: {getRemainingCharges(entry.charges)} {$settings.currency}</p>
          </div>
          <div class="progress">
            <div class="labels">
              <p>0 {$settings.currency}</p>
              <p>{getTotalCharges(entry.charges)} {$settings.currency}</p>
            </div>
            <div class="progress-bar">
              <div style="width: {getProgress(entry.charges)}%;"></div>
            </div>
          </div>
        </div>
      </ItemEntry>

      <ItemAction
        type="delete"
        isVisible={actionId === entry.id}
        clickCallback={() => handleDeleteClick(entry.id)}
        icon={deleteForever}
      />
    </ItemWrapper>
  {/each}
{/if}
<ItemWrapper>
  <ItemEntry clickCallback={handleAddClick} centered>
    <svelte:component this={plusRounded} />
  </ItemEntry>
</ItemWrapper>



<style>
  h2,
  p:not(.oops-detail) {
    margin: 0;
    pointer-events: none;
  }

  p > a {
    font-weight: bold;
  }

  .oops > p {
    text-align: center;
  }

  .wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .info {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .info > h2 {
    text-transform: capitalize;
    font-size: 1.2rem;
    font-weight: bold;
  }

  .progress {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .progress > .labels {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.8rem;
  }

  .progress-bar {
    position: relative;
    width: 100%;
    height: 4px;
    border-radius: 50px;
    background: var(--progress-bar-bg);
    overflow: hidden;
  }

  .progress-bar > div {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    background: var(--progress-bar);
    border-radius: 50px;
    box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.25);
  }

  .oops {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    padding: 1rem;
    background: rgba(0, 0, 0, 0.05);
  }

  :global([data-dark-mode]) .oops {
    background: rgba(0, 0, 0, 0.2);
  }

  .oops > h2 {
    font-size: 2.5rem;
    font-weight: bold;
  }

  @media (min-width: 600px) {
    .oops {
      background: none;
    }

    :global([data-dark-mode]) .oops {
      background: none;
    }
  }
</style>
