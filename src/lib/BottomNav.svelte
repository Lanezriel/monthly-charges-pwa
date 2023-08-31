<script>
	import { page } from '$app/stores';
  import { base } from '$app/paths';

  import home from '$lib/svg/home.svelte';
  import testTube from '$lib/svg/testTube.svelte';

  $: basePath = base === '' ? '/' : `${base}/`;
</script>

<footer>
  <nav>
		<ul>
			<li aria-current={$page.url.pathname === basePath ? 'page' : undefined}>
				<a href="{basePath}">
          <svelte:component this={home} />
          <span>Home</span>
        </a>
			</li>
      <li aria-current={$page.url.pathname === `${base}/test/` ? 'page' : undefined}>
				<a href="{base}/test/">
          <svelte:component this={testTube} />
          <span>Test</span>
        </a>
			</li>
		</ul>
	</nav>
</footer>

<style>
  footer {
		display: flex;
		justify-content: space-around;
    align-items: center;
    background: var(--nav-background);
    height: 4rem;
    position: sticky;
    bottom: 0;
	}

  nav {
		display: flex;
		justify-content: center;
    height: 100%;
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--nav-background);
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
	}

	li[aria-current='page']::before {
		--size: 8px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		bottom: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-bottom: var(--size) solid var(--color-theme-1);
	}

	nav a {
		display: flex;
    flex-direction: column;
		height: 100%;
    justify-content: flex-start;
		align-items: center;
    gap: 0.1rem;
		padding: 0.25rem 0.5rem;
		color: var(--color-text);
		font-weight: 700;
		font-size: 0.7rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--color-theme-1);
	}
</style>