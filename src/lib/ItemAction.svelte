<script>
  export let type = 'edit';
  export let isVisible;
  export let clickCallback;
  export let icon;
</script>

<button
  class="action {type}"
  class:visible={isVisible}
  on:click={clickCallback}
  on:keydown={clickCallback}
>
  <svelte:component this={icon} />
</button>

<style>
  .action {
    width: 0;
    min-width: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    border: none;
    color: unset;
    transition: width 200ms linear,
                min-width 200ms linear,
                background 500ms linear;
    cursor: pointer;
  }

  .action > :global(svg) {
    pointer-events: none;
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
