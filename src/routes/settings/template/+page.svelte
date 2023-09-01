<script>
  import { page } from '$app/stores';
	import { getContext } from "svelte";

  const utils = getContext('utils');
  const settings = getContext('settings');
</script>

<svelte:head>
	<title>Monthly charges - Settings - Template</title>
	<meta name="description" content="Template definitions" />
</svelte:head>

<section>
  {#if $utils.isDesktop}
    <h1>{$page.data.title}</h1>
  {/if}

  <div class="charges">
    {#each $settings.template.charges as charge}
      <div class="charge">
        <h2>{charge.name}</h2>
        <p>{charge.value} {$settings.currency}</p>
      </div>
    {/each}
  </div>
</section>

<style>
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
  }

  h2 {
    font-size: 1.2rem;
    font-weight: bold;
    margin: 0;
  }

  p {
    margin: 0;
  }

  .charges {
    flex-grow: 1;
    width: 100%;
  }

  .charge {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.25rem;
    padding: 1.5rem 1rem;
    background: rgba(0, 0, 0, 0.05);
  }

  .charge:not(:last-child) {
    border-bottom: solid 1px rgba(0, 0, 0, 0.1);
  }

  :global([data-dark-mode]) .charge {
    background: rgba(0, 0, 0, 0.2);
  }

  :global([data-dark-mode]) .charge:not(:last-child) {
    border-bottom: solid 1px rgba(255, 255, 255, 0.05);
  }

  @media (min-width: 600px) {
    section {
      width: fit-content;
      min-width: 200px;
      margin: auto;
      padding-top: 2rem;
    }

    .charges {
      flex-grow: unset;
      min-width: 400px;
      width: fit-content;
      max-height: calc(100% - 2.5rem);
      overflow-y: auto;
      background: rgba(0, 0, 0, 0.05);
      border: solid 1px rgba(0, 0, 0, 0.1);
      border-radius: 1rem;
      box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    }

    :global([data-dark-mode]) .charges {
      background: rgba(0, 0, 0, 0.2);
      border: solid 1px rgba(255, 255, 255, 0.05);
    }

    .charge {
      background: rgba(0, 0, 0, 0);
      transition: background 500ms ease-in-out;
      cursor: pointer;
    }

    .charge:hover {
      background: rgba(0, 0, 0, 0.1);
    }

    .charge:first-child {
      border-radius: 1rem 1rem 0 0;
    }

    .charge:last-child {
      border-radius: 0 0 1rem 1rem;
    }

    /* Order matters here */
    .charge:only-child {
      border-radius: 1rem;
    }

    :global([data-dark-mode]) .charge {
      background: rgba(0, 0, 0, 0);
      transition: background 500ms ease-in-out;
    }

    :global([data-dark-mode]) .charge:hover {
      background: rgba(0, 0, 0, 0.2);
    }
  }
</style>
