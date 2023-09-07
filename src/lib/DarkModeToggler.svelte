<script>
  import { getContext } from 'svelte';
  import { settings } from '$lib/stores';

  function toggleDarkMode() {
    $settings.isDark = !$settings.isDark;
  }
</script>

<button
  class="theme-toggle"
  id="theme-toggle"
  title="Toggles dark theme"
  aria-label="auto"
  aria-live="polite"
  on:click={toggleDarkMode}
>
  <svg class="sun-and-moon" aria-hidden="true" width="24" height="24" viewBox="0 0 24 24">
    <circle class="sun" cx="12" cy="12" r="6" mask="url(#moon-mask)" fill="currentColor" />
    <g class="sun-beams" stroke="currentColor">
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </g>

    <mask class="moon" id="moon-mask">
      <rect x="0" y="0" width="100%" height="100%" fill="white" />
      <circle cx="24" cy="10" r="6" fill="black" />
    </mask>
  </svg>
</button>

<style>
  .theme-toggle {
    display: flex;
    align-items: center;
    justify-content: center;
    background: none;
    border: none;
    padding: 0;
    margin: auto;

    width: 100%;
    height: 100%;
    aspect-ratio: 1;
    border-radius: 50%;

    cursor: pointer;
    touch-action: manipulation;
    -webkit-tap-highlight-color: transparent;
    outline-offset: 5px;
  }

  .theme-toggle > svg {
    width: 2rem;
    height: 2rem;
    stroke-linecap: round;
    color: var(--color-text);
    transition: color 200ms linear;
  }

  .theme-toggle > svg:hover {
    color: var(--color-theme-1);
  }

  .sun-and-moon > :is(.moon, .sun, .sun-beams) {
    transform-origin: center center;
  }

  .sun-and-moon > .sun-beams {
    stroke-width: 2px;
  }

  .sun-and-moon > .sun {
    transition: transform 500ms var(--ease-elastic-3);
  }

  :global([data-dark-mode]) .sun-and-moon > .sun {
    transform: scale(1.75);
    transition-timing-function: var(--ease-3);
    transition-duration: 350ms;
  }

  .sun-and-moon > .sun-beams {
    transition:
      transform 500ms var(--ease-elastic-4),
      opacity 500ms var(--ease-3);
  }

  :global([data-dark-mode]) .sun-and-moon > .sun-beams {
    transform: rotateZ(-25deg);
    opacity: 0;
    transition-duration: 150ms;
  }

  .sun-and-moon > .moon > circle {
    transition: transform 250ms var(--ease-out-5);
  }

  :global([data-dark-mode]) .sun-and-moon > .moon > circle {
    transform: translateX(-7px);
    transition-delay: 250ms;
    transition-duration: 500ms;
  }

  @supports (cx: 1) {
    .sun-and-moon > .moon > circle {
      transition: cx 250ms var(--ease-out-5);
    }

    :global([data-dark-mode]) .sun-and-moon > .moon > circle {
      transform: translateX(0);
      cx: 17;
    }
  }
</style>