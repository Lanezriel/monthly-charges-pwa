<script>
  import { setContext } from 'svelte';
  import { writable } from 'svelte/store';
  import { dev } from '$app/environment';
  import { onNavigate } from '$app/navigation';

  import { set } from 'idb-keyval';
  import { pwaInfo } from 'virtual:pwa-info';

	import Header from '$lib/Header.svelte';
  import TopBar from '$lib/TopBar.svelte';
  import BottomNav from '$lib/BottomNav.svelte';

	import './styles.css';

  // Retrieve data from +layout.js (which retrieved data from indexedDB)
  /** @type {import('./$types').PageData} */
  export let data;

  onNavigate((navigation) => {
    if (!document.startViewTransition) return;

    return new Promise((resolve) => {
      document.startViewTransition(async () => {
        resolve();
        await navigation.complete;
      });
    });
  });

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
  $: themeColorMeta = $preferences.isDark
    ? '<meta name="theme-color" content="hsl(240, 15%, 6%)">'
    : '<meta name="theme-color" content="rgb(240, 244, 247)">';

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
    view-transition-name: footer;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}

  /* Page transitions */
  @keyframes fade-in {
    from {
      opacity: 0;
    }
  }

  @keyframes fade-out {
    to {
      opacity: 0;
    }
  }

  @keyframes slide-from-right {
    from {
      transform: translateX(30px);
    }
  }

  @keyframes slide-to-left {
    to {
      transform: translateX(-30px);
    }
  }

  :root::view-transition-old(root) {
    animation: 90ms cubic-bezier(0.4, 0, 1, 1) both fade-out,
      300ms cubic-bezier(0.4, 0, 0.2, 1) both slide-to-left;
  }

  :root::view-transition-new(root) {
    animation: 210ms cubic-bezier(0, 0, 0.2, 1) 90ms both fade-in,
      300ms cubic-bezier(0.4, 0, 0.2, 1) both slide-from-right;
  }
</style>
