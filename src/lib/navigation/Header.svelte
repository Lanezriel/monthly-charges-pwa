<script>
	import { page } from '$app/stores';
  import { base } from '$app/paths';

  import { edition } from '$lib/stores';

	import github from '$lib/svg/github.svelte';
  import arrowBackRounded from '$lib//svg/arrowBackRounded.svelte';
  import edit from '$lib/svg/edit.svelte';
  import roundCheck from '$lib/svg/roundCheck.svelte';
  import DarkModeToggler from '$lib/DarkModeToggler.svelte';

  $: basePath = base === '' ? '/' : `${base}/`;
</script>

<header>
	<div class="corner">
		<a href="https://github.com/Lanezriel" target="_blank" aria-label="My Github page">
			<svelte:component this={github} />
		</a>
	</div>

	<nav>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z" />
		</svg>
		<ul>
      {#if $page.data.type === 'sub'}
        <a href="{$page.data.backURL}" class="back-icon" aria-label="Back">
          <svelte:component this={arrowBackRounded} />
        </a>
      {/if}
			<li aria-current={$page.url.pathname === basePath ? 'page' : undefined}>
				<a href="{basePath}">Home</a>
			</li>
      <li aria-current={$page.url.pathname === `${base}/settings/` ? 'page' : undefined}>
				<a href="{base}/settings/">Settings</a>
			</li>
      {#if $page.data.editable}
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
		</ul>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z" />
		</svg>
	</nav>

	<div class="corner">
		<DarkModeToggler />
	</div>
</header>

<style>
  @import 'open-props/easings';

	header {
		display: flex;
		justify-content: space-between;
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
    color: var(--color-text);
    transition: color 200ms linear;
  }

  .corner a:hover :global(svg) {
    color: var(--color-theme-1);
  }

	nav {
		display: flex;
		justify-content: center;
	}

  svg {
    width: 2em;
    height: 3em;
    display: block;
  }

	path {
		fill: var(--nav-background);
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--nav-background);
		background-size: contain;
	}

  .back-icon {
    position: absolute;
    left: -5rem;
  }

  .edition-icon {
    position: absolute;
    right: -5rem;
    background: none;
    border: none;
    margin: 0;
    padding: 0;
    cursor: pointer;
  }

	li {
		position: relative;
		height: 100%;
	}

	li[aria-current='page']::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--color-theme-1);
	}

	nav a,
  nav .edition-icon {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 0.5rem;
		color: var(--color-text);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 200ms linear;
	}

	a:hover,
  .edition-icon:hover {
		color: var(--color-theme-1);
	}
</style>
