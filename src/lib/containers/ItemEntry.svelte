<script>
  import createRipple from '$lib/utils/createRipple.js';

  export let centered = false;
  export let clickCallback;
</script>

<button
  class="item"
  class:centered={centered}
  title="Entry wrapper"
  aria-label="auto"
  aria-live="polite"
  on:click={createRipple}
  on:click={clickCallback}
>
  <slot/>
</button>

<style>
  .item {
    flex-grow: 1;
    min-width: 0;
    height: 4.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.25rem;
    padding: 0 1rem;
    background: rgba(0, 0, 0, 0.05);
    border: none;
    color: unset;
  }

  :global([data-dark-mode]) .item {
    background: rgba(0, 0, 0, 0.2);
  }

  .item > * {
    pointer-events: none;
  }

  .item.centered {
    justify-content: center;
  }

  .item.centered > :global(svg) {
    width: 3rem;
    height: 3rem;
    pointer-events: none;
  }

  @media (min-width: 600px) {
    .item {
      background: rgba(0, 0, 0, 0);
      transition: background 500ms linear;
      cursor: pointer;
    }

    .item:hover {
      background: rgba(0, 0, 0, 0.1);
    }

    :global([data-dark-mode]) .item {
      background: rgba(0, 0, 0, 0);
      transition: background 500ms linear;
    }

    :global([data-dark-mode]) .item:hover {
      background: rgba(255, 255, 255, 0.05);
    }
  }
</style>
