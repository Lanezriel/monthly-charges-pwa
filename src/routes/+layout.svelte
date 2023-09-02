<script>
  import { setContext } from 'svelte';
  import { writable } from 'svelte/store';
  import { dev } from '$app/environment';

  import { set } from 'idb-keyval';
  import { pwaInfo } from 'virtual:pwa-info';

	import Header from '$lib/Header.svelte';
  import TopBar from '$lib/TopBar.svelte';
	import PageTransition from '$lib/PageTransition.svelte';
  import BottomNav from '$lib/BottomNav.svelte';

  import defaultTemplate from '$lib/utils/defaultTemplate.js';

	import './styles.css';

  // Retrieve data from +layout.js (which retrieved data from indexedDB)
  /** @type {import('./$types').PageData} */
  export let data;

  // Initiate stores
  const test = writable(data.test || { isSmall: false, isTeal: false });
  setContext('test', test);

  const utils = writable({ isDesktop: window.innerWidth >= 600 });
  setContext('utils', utils);

  const settings = writable(data.settings || { isDark: checkPrefersColorScheme(), currency: '€', template: defaultTemplate });
  setContext('settings', settings);
  
  // Update on system preference change
  if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
      $settings.isDark = event.matches;
    })
  }
  
  if (!dev) {
    pwaInfo.webManifest.linkTag = '<link rel="manifest" href="/monthly-charges-pwa/manifest.webmanifest">'
  }

  // Update indexedDb when store has changes
  $: $test, updateIDB('test', $test);
  $: $settings, updateIDB('settings', $settings);
  $: $settings.isDark, toggleHTMLDarkMode($settings.isDark);
  
  // Other reactives
  $: pathname = data.pathname;
  $: webManifestLink = pwaInfo ? pwaInfo.webManifest.linkTag : '';
  $: themeColorMeta = $settings.isDark
    ? '<meta name="theme-color" content="hsl(240, 15%, 6%)">'
    : '<meta name="theme-color" content="rgb(240, 244, 247)">';

  function checkPrefersColorScheme() {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  function toggleHTMLDarkMode(isDark) {
    const htmlTag = document.querySelector('html');

    if (isDark) {
      htmlTag.setAttribute('data-dark-mode', '');
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
  {@html themeColorMeta}
</svelte:head>

<svelte:window on:resize={handleResize} on:orientationchange={handleResize} />

<div class="app">
  {#if $utils.isDesktop}
	  <Header />
  {:else}
    <TopBar />
  {/if}

	<main>
    <PageTransition {pathname}>
		  <slot />
    </PageTransition>
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
	}

	main {
		flex: 1;
		display: grid;
    grid-template-rows: 1fr;
		grid-template-columns: 1fr;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
    overflow-x: hidden;
	}

  main > :global(*) {
    grid-row: 1;
    grid-column: 1;
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
