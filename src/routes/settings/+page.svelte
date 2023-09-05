<script>
	import { getContext } from 'svelte';
  import { goto } from '$app/navigation';

  import createRipple from '$lib/utils/createRipple.js';

	import ItemEntry from '$lib/containers/ItemEntry.svelte';
	import ItemWrapper from '$lib/containers/ItemWrapper.svelte';

  const settings = getContext('settings');

  function navigate(event, path) {
    createRipple(event);

    goto(path);
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
  <ItemEntry clickCallback={(e) => createRipple(e)}>
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
  }

  p {
    flex-shrink: 0;
    margin: 0;
    font-size: 1.2rem;
  }
</style>
