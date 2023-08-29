<script>
	import { onMount } from "svelte";
  import { writable } from "svelte/store";
  import { get, set } from "idb-keyval";

  const isSmallStore = writable(false);
  let isSmall;
  isSmallStore.subscribe((val) => {
    isSmall = val;
  });

  onMount(() => {
    get('isSmall').then((value) => {
      isSmallStore.set(value);
    });
  });

  function toggleIsSmall() {
    set('isSmall', !isSmall).then(() => {
      isSmallStore.set(!isSmall);
    });
  }
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<h1 class:small-title={isSmall}>Welcome!</h1>
  <p>This page is soon to be completely changed</p>
  <button on:click={toggleIsSmall}>{isSmall ? 'Restore title size' : 'Make title small'}</button>
</section>

<style>
  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  h1 {
    font-size: 4rem;
    font-weight: bold;
    margin: 0;
  }

  h1.small-title {
    font-size: 2rem;
  }

  button {
    padding: 1rem 2.5rem;
    border-radius: 50px;
    border: none;
    font-size: 1.25rem;
    background: var(--color-theme-1);
    color: white;
    box-shadow: 0 0.25rem 0.25rem #0004;
    cursor: pointer;
    transition: background 300ms ease-in-out;
  }

  button:hover {
    background: color-mix(in srgb, var(--color-theme-1), #000 15%);
  }
</style>
