<script>
  import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
  import { dev } from '$app/environment';
  import { page } from '$app/stores';

  import { set } from 'idb-keyval';
  import { pwaInfo } from 'virtual:pwa-info';
  import { Modals, closeModal } from 'svelte-modals';

	import Header from '$lib/navigation/Header.svelte';
  import TopBar from '$lib/navigation/TopBar.svelte';
	import PageTransition from '$lib/containers/PageTransition.svelte';
	import Footer from '$lib/navigation/Footer.svelte';
  import BottomNav from '$lib/navigation/BottomNav.svelte';

  import { utils, settings, entries } from '$lib/stores';

	import './styles.css';

  // Retrieve data from +layout.js (which retrieved data from indexedDB)
  /** @type {import('./$types').PageData} */
  export let data;

  // Initiate stores data
  onMount(() => {
    $utils.isDesktop = window.innerWidth >= 600;

    if (data.settings) $settings = data.settings;
    $settings.isDark = checkPrefersColorScheme();

    if (data.entries) $entries = data.entries;
  });
  
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
  $: $settings, updateIDB('settings', $settings);
  $: $settings.isDark, toggleHTMLDarkMode($settings.isDark);
  $: $entries, updateIDB('entries', $entries);
  
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
      <section>
        {#if $utils.isDesktop}
          <h1>{$page.data.title}</h1>
        {/if}
      
        <div class="wrapper">
          <slot />
        </div>
      </section>
    </PageTransition>
	</main>

  {#if $utils.isDesktop}
    <Footer />
  {:else}
    <BottomNav />
  {/if}
</div>

<Modals>
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div
    slot="backdrop"
    class="backdrop"
    transition:fade
    on:click={closeModal}
    on:keydown={closeModal}
  />
</Modals>

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

  section {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 2rem;
  }

  h1 {
    font-size: 2.5rem;
    font-weight: bold;
    margin: 0;
    text-transform: capitalize;
  }

  .wrapper {
    flex-grow: 1;
    width: 100%;
    max-width: 100vw;
  }

  .backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: rgba(0,0,0,0.2);
    backdrop-filter: blur(4px);
  }

  @media (min-width: 600px) {
    section {
      width: fit-content;
      min-width: 400px;
      margin: auto;
      padding-top: 2rem;
    }

    .wrapper {
      flex-grow: unset;
      min-width: 400px;
      max-width: 400px;
      width: fit-content;
      max-height: calc(100% - 2.5rem);
      overflow-y: auto;
      background: rgba(0, 0, 0, 0.05);
      border: solid 1px rgba(0, 0, 0, 0.1);
      border-radius: 1rem;
      box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    }

    :global([data-dark-mode]) .wrapper {
      background: rgba(0, 0, 0, 0.2);
      border: solid 1px rgba(255, 255, 255, 0.05);
    }
  }
</style>
