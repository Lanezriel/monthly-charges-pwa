<script>
  import { goto } from '$app/navigation';

  import { openModal, closeModal } from 'svelte-modals';

  import { settings } from '$lib/stores';
  import createRipple from '$lib/utils/createRipple.js';

  import SelectModal from '$lib/modals/SelectModal.svelte';
	import ItemEntry from '$lib/containers/ItemEntry.svelte';
	import ItemWrapper from '$lib/containers/ItemWrapper.svelte';

  function navigate(event, path) {
    createRipple(event);

    goto(path);
  }

  function onCurrencyClick(event) {
    createRipple(event);

    openModal(SelectModal, {
      options: [
        { value: '€', label: '€' }, 
        { value: '$', label: '$' }, 
        { value: '¥', label: '¥' }, 
      ],
      onSelect: (value) => {
        $settings.currency = value;
        closeModal();
      },
    });
  }
</script>

<svelte:head>
	<title>Monthly charges - Settings</title>
	<meta name="description" content="Settings" />
</svelte:head>

<ItemWrapper>
  <ItemEntry clickCallback={(e) => navigate(e, './template')}>
    <h2>Template configuration</h2>
  </ItemEntry>
</ItemWrapper>

<ItemWrapper>
  <ItemEntry clickCallback={onCurrencyClick}>
    <h2>Currency</h2>
    <p>{$settings.currency}</p>
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
    pointer-events: none;
  }

  p {
    flex-shrink: 0;
    margin: 0;
    font-size: 1.2rem;
  }
</style>
