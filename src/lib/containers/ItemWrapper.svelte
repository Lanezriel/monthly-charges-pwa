<script></script>

<div class="item-wrapper">
  <slot/>
</div>

<style>
  .item-wrapper {
    display: flex;
    width: 100%;
    align-items: stretch;
  }

  .item-wrapper:not(:last-child) {
    border-bottom: solid 1px rgba(0, 0, 0, 0.1);
  }

  :global([data-dark-mode]) .item-wrapper:not(:last-child) {
    border-bottom: solid 1px rgba(255, 255, 255, 0.05);
  }

  @media (min-width: 600px) {
    .item-wrapper:first-child {
      border-radius: 1rem 1rem 0 0;
    }

    .item-wrapper:last-child {
      border-radius: 0 0 1rem 1rem;
    }

    /* Order matters here */
    .item-wrapper:only-child {
      border-radius: 1rem;
    }
  }
</style>
