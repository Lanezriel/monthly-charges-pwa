<script>
  export let centered = false;
  export let clickCallback;
</script>

<button
  class="charge"
  class:centered={centered}
  on:click={clickCallback}
  on:keydown={clickCallback}
>
  <slot/>
</button>

<style>
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
    border: none;
    color: unset;
  }

  :global([data-dark-mode]) .charge {
    background: rgba(0, 0, 0, 0.2);
  }

  .charge > * {
    pointer-events: none;
  }

  .charge.centered {
    justify-content: center;
  }

  .charge.centered > :global(svg) {
    width: 3rem;
    height: 3rem;
    pointer-events: none;
  }
</style>
