<script>
  import { setContext } from 'svelte';
  import { writable } from 'svelte/store';
  import { set } from 'idb-keyval';
  import { pwaInfo } from 'virtual:pwa-info';
  import { dev } from '$app/environment';

	import Header from '$lib/Header.svelte';
  import TopBar from '$lib/TopBar.svelte';
  import BottomNav from '$lib/BottomNav.svelte';

	import './styles.css';

  // Retrieve data from +layout.js (which retrieved data from indexedDB)
  /** @type {import('./$types').PageData} */
  export let data;

  // Initiate stores
  const test = writable(data.test || { isSmall: false, isTeal: false });
  setContext('test', test);

  const utils = writable({ isDesktop: window.innerWidth >= 600 });
  setContext('utils', utils);
  
  const preferences = writable(data.preferences || { isDark: checkPrefersColorScheme() });
  setContext('preferences', preferences);
  
  // Update on system preference change
  if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
      $preferences.isDark = event.matches;
    })
  }
  
  if (!dev) {
    pwaInfo.webManifest.linkTag = '<link rel="manifest" href="/monthly-charges-pwa/manifest.webmanifest">'
  }

  // Update indexedDb when store has changes
  $: $test, updateIDB('test', $test);
  $: $preferences, updateIDB('preferences', $preferences);
  $: $preferences.isDark, toggleHTMLDarkMode($preferences.isDark);
  
  // Other reactives
  $: webManifestLink = pwaInfo ? pwaInfo.webManifest.linkTag : '';

  function checkPrefersColorScheme() {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  function toggleHTMLDarkMode(isDark) {
    const htmlTag = document.querySelector('html');

    if (isDark) {
      htmlTag.setAttribute('data-dark-mode', true);
    } else {
      htmlTag.removeAttribute('data-dark-mode');
    }
  }

  async function updateIDB(key, object) {
    await set(key, object);
  }

  function handleResize() {
    $utils.isDesktop = window.innerWidth >= 600;
  }
</script>

<svelte:head>
  {@html webManifestLink}
</svelte:head>

<svelte:window on:resize={handleResize} />

<div class="app">
  {#if $utils.isDesktop}
	  <Header />
  {:else}
    <TopBar />
  {/if}

	<main>
		<slot />
	</main>

  {#if $utils.isDesktop}
    <footer>
      <p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
    </footer>
  {:else}
    <BottomNav />
  {/if}
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
    width: 100%;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
    justify-content: center;
    align-items: center;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
