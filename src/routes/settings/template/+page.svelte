<script>
  import { page } from '$app/stores';
	import { getContext } from "svelte";

  import edit from '$lib/svg/edit.svelte';
  import deleteForever from '$lib/svg/deleteForever.svelte';
  import plusRounded from '$lib/svg/plusRounded.svelte';

  import createRipple from '$lib/utils/createRipple.js';

  const utils = getContext('utils');
  const settings = getContext('settings');

  let actionIndex = null;

  function handleClick(event) {
    createRipple(event);

    const index = Number(event.currentTarget.attributes.tabIndex.value);
    if (actionIndex === index) {
      actionIndex = null
    } else {
      actionIndex = index;
    }
  }

  function handleEditClick(event) {
    createRipple(event);
  }

  function handleDeleteClick(event) {
    createRipple(event);
  }

  function handleAddClick(event) {
    createRipple(event);
  }
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
    {#each $settings.template.charges as charge, i}
      <div class="charge-wrapper">
        <div
          class="charge"
          role="button"
          tabindex="{i}"
          on:click={handleClick}
          on:keydown={handleClick}
        >
          <h2>{charge.name}</h2>
          <p>{charge.value} {$settings.currency}</p>
        </div>
        <div
          class="action edit"
          class:visible={actionIndex === i}
          role="button"
          tabindex="{i}"
          on:click={handleEditClick}
          on:keydown={handleEditClick}
        >
          <svelte:component this={edit} />
        </div>
        <div
          class="action delete"
          class:visible={actionIndex === i}
          role="button"
          tabindex="{i}"
          on:click={handleDeleteClick}
          on:keydown={handleDeleteClick}
        >
          <svelte:component this={deleteForever} />
        </div>
      </div>
    {/each}
    <div class="charge-wrapper">
      <div
        class="charge add"
        role="button"
        tabindex="{$settings.template.charges.length}"
        on:click={handleAddClick}
        on:keydown={handleAddClick}
      >
        <svelte:component this={plusRounded} />
      </div>
    </div>
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
    max-width: 100vw;
  }

  .charge-wrapper {
    display: flex;
    width: 100%;
    align-items: stretch;
  }

  .charge-wrapper:not(:last-child) {
    border-bottom: solid 1px rgba(0, 0, 0, 0.1);
  }

  :global([data-dark-mode]) .charge-wrapper:not(:last-child) {
    border-bottom: solid 1px rgba(255, 255, 255, 0.05);
  }

  .charge {
    flex-grow: 1;
    min-width: 0;
    height: 4.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.25rem;
    padding: 0 1rem;
    background: rgba(0, 0, 0, 0.05);
  }

  :global([data-dark-mode]) .charge {
    background: rgba(0, 0, 0, 0.2);
  }

  .charge > h2 {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .charge > p {
    flex-shrink: 0;
  }

  .charge.add {
    justify-content: center;
  }

  .charge.add > :global(svg) {
    width: 3rem;
    height: 3rem;
  }

  .action {
    width: 0;
    min-width: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: width 200ms linear,
                min-width 200ms linear,
                background 500ms linear;
    cursor: pointer;
  }

  .action.visible {
    width: 4rem;
    min-width: 4rem;
  }

  .action.edit {
    background: var(--warning-bg);
  }

  .action.delete {
    background: var(--danger-bg);
  }

  @media (min-width: 600px) {
    section {
      width: fit-content;
      min-width: 400px;
      margin: auto;
      padding-top: 2rem;
    }

    .charges {
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

    :global([data-dark-mode]) .charges {
      background: rgba(0, 0, 0, 0.2);
      border: solid 1px rgba(255, 255, 255, 0.05);
    }

    .charge {
      background: rgba(0, 0, 0, 0);
      transition: background 500ms linear;
      cursor: pointer;
    }

    .charge:hover {
      background: rgba(0, 0, 0, 0.1);
    }

    .charge-wrapper:first-child {
      border-radius: 1rem 1rem 0 0;
    }

    .charge-wrapper:last-child {
      border-radius: 0 0 1rem 1rem;
    }

    /* Order matters here */
    .charge-wrapper:only-child {
      border-radius: 1rem;
    }

    :global([data-dark-mode]) .charge {
      background: rgba(0, 0, 0, 0);
      transition: background 500ms linear;
    }

    :global([data-dark-mode]) .charge:hover {
      background: rgba(255, 255, 255, 0.05);
    }

    .action.edit:hover {
      background: color-mix(in srgb, var(--warning-bg), rgb(0, 0, 0) 15%);
    }

    .action.delete:hover {
      background: color-mix(in srgb, var(--danger-bg), rgb(0, 0, 0) 15%);
    }

    :global([data-dark-mode]) .action.edit:hover {
      background: color-mix(in srgb, var(--warning-bg), rgb(255, 255, 255) 20%);
    }

    :global([data-dark-mode]) .action.delete:hover {
      background: color-mix(in srgb, var(--danger-bg), rgb(255, 255, 255) 15%);
    }
  }
</style>
