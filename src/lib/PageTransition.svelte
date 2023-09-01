<script>
	import { fly } from "svelte/transition";

  export let pathname = '';

  const duration = 500;
  const delay = duration + 150;
  const x = 100;

  const inParams = { x, duration, delay };
  const outParams = { x: -x, duration };
</script>

{#key pathname}
  <div in:fly={inParams} out:fly={outParams}>
    <slot />
  </div>
{/key}

<style></style>
