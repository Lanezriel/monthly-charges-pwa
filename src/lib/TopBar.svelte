<script>
  import { page } from '$app/stores';

	import github from '$lib/svg/github.svelte';
  import DarkModeToggler from '$lib/DarkModeToggler.svelte';
</script>

<header>
  <div class="corner">
		<a href="https://github.com/Lanezriel" target="_blank">
			<svelte:component this={github} />
		</a>
	</div>

	<h1>{$page.data.title}</h1>

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
	}

  h1 {
    font-size: 1.5rem;
    font-weight: bold;
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
</style>