<script lang="ts">
  export let topColor: string;
  export let bottomColor: string;
  export let direction: "down" | "up" = "down";
</script>

<div class="w-full relative h-[40px] md:h-[60px] overflow-hidden -mt-[1px] -mb-[1px]">
  <div class="absolute inset-0 z-0 {bottomColor}"></div>
  <svg 
    viewBox="0 0 1440 60" 
    preserveAspectRatio="none" 
    class="relative z-10 w-full h-full text-{topColor}"
    fill="currentColor"
  >
    {#if direction === "down"}
      <path d="M0,0 C320,60 1120,60 1440,0 L1440,0 L0,0 Z"></path>
    {:else}
      <path d="M0,60 C320,0 1120,0 1440,60 L1440,60 L0,60 Z"></path>
    {/if}
  </svg>
</div>
