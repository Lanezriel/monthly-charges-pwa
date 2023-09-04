<script>
	import { getContext } from 'svelte';

  import createRipple from '$lib/utils/createRipple.js';

  const test = getContext('test');

  $: buttonText = $test.isSmall ? 'Restore title size' : 'Make title small';

  function toggleIsSmall() {
    $test.isSmall = !$test.isSmall;
  }
</script>

<svelte:head>
	<title>Monthly charges - Home</title>
	<meta name="description" content="Home page" />
</svelte:head>

<section>
	<h1 class:small-title={$test.isSmall}>Welcome!</h1>
  <p>This page is soon to be completely changed</p>
  <p>The following button exists only for testing the offline local storage</p>
  <button on:click={createRipple} on:click={toggleIsSmall}>
    {buttonText}
  </button>
</section>

<style>
  section {
    height: 100%;
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

  p {
    text-align: center;
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
