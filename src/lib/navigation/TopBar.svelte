<script>
  import { page } from '$app/stores';

  import { edition } from '$lib/stores';

	import github from '$lib/svg/github.svelte';
  import arrowBackRounded from '$lib/svg/arrowBackRounded.svelte';
  import roundCheck from '$lib/svg/roundCheck.svelte';
  import edit from '$lib/svg/edit.svelte';
  import DarkModeToggler from '$lib/DarkModeToggler.svelte';
</script>

<header>
  <div class="corner">
    {#if $page.data.type === 'main'}
      <a href="https://github.com/Lanezriel" target="_blank" aria-label="My Github page">
        <svelte:component this={github} />
      </a>
    {:else}
      <a href="{$page.data.backURL}" aria-label="Back">
        <svelte:component this={arrowBackRounded} />
      </a>
    {/if}
	</div>

  <div class="title-wrapper">
    <h1>{$page.data.title}</h1>

    {#if $page.data.editable && !$page.data.title.startsWith('404')}
      {#if $edition}
        <button
          title="Disable edition mode"
          aria-label="auto"
          aria-live="polite"
          class="edition-icon"
          on:click={() => $edition = false}
        >
          <svelte:component this={roundCheck} />
        </button>
      {:else}
        <button
          title="Enable edition mode"
          aria-label="auto"
          aria-live="polite"
          class="edition-icon"
          on:click={() => $edition = true}
        >
          <svelte:component this={edit} />
        </button>
      {/if}
    {/if}
  </div>

	<div class="corner">
		<DarkModeToggler />
	</div>
</header>

<style>
  @import 'open-props/easings';

	header {
		display: flex;
		justify-content: space-between;
    align-items: center;
    background: var(--nav-background);
    height: 4rem;
    position: sticky;
    top: 0;
    padding: 0 0.5rem;
	}

  h1 {
    max-width: 100%;
    font-size: 1.5rem;
    font-weight: bold;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .title-wrapper {
    position: relative;
    max-width: calc(100vw - 12.5rem);
    display: flex;
    justify-content: center;
    align-items: center;
  }

	.corner {
		width: 3rem;
		height: 3rem;
	}

	.corner a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

  .corner a :global(svg) {
    width: 2rem;
    height: 2rem;
    color: var(--icon-fill);
  }

  .corner a:hover :global(svg) {
    color: var(--icon-fill-hover);
  }

  .edition-icon {
    position: absolute;
    right: -2.5rem;
    background: none;
    border: none;
    margin: 0;
    padding: 0;
    cursor: pointer;
  }

  .edition-icon > :global(svg) {
    color: var(--color-text);
  }
</style>