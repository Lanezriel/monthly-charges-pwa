<script>
	import { getContext } from 'svelte';
  import { goto } from '$app/navigation';

  import createRipple from '$lib/utils/createRipple.js';

	import ItemEntry from '$lib/containers/ItemEntry.svelte';
	import ItemWrapper from '$lib/containers/ItemWrapper.svelte';

  const settings = getContext('settings');

  let currencySelect;

  function navigate(event, path) {
    createRipple(event);

    goto(path);
  }

  function onCurrencyClick(event) {
    createRipple(event);

    currencySelect.click();
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
  <ItemEntry noPadding clickCallback={onCurrencyClick}>
    <div class="select-wrapper">
      <label for="currency">Currency</label>
      <select
        id="currency"
        bind:value={$settings.currency}
        bind:this={currencySelect}
      >
        <option value="€">€</option>
        <option value="$">$</option>
        <option value="¥">¥</option>
      </select>
    </div>
  </ItemEntry>
</ItemWrapper>

<style>
  h2, label {
    font-size: 1.2rem;
    font-weight: bold;
    margin: 0;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    pointer-events: none;
  }

  .select-wrapper {
    width: 100%;
    height: 100%;
    position: relative;
  }

  .select-wrapper > label {
    position: absolute;
    left: 1rem;
    top: 50%;
    transform: translateY(-50%);
    max-width: 75%;
  }

  select {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0 1rem;
    text-align: right;
    font-size: 1.2rem;
    background: none;
    color: var(--color-text);
    border: none;
    appearance: none;
    outline: none;
    cursor: pointer;
    z-index: 2;
  }
</style>
