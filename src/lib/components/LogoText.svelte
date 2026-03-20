<script lang="ts">
  let { 
    light = false,
    sizeClass = "text-[0.9rem] sm:text-[1.1rem]",
    className = ""
  } = $props<{ 
    light?: boolean;
    sizeClass?: string;
    className?: string;
  }>();

  let baseTextColor = $derived(light ? "text-white" : "text-yhan-navy");
</script>

<div class={`font-sans font-black ${sizeClass} tracking-[-0.01em] flex flex-wrap items-center gap-x-[4px] leading-[1.1] ${className}`}>
  <span class="text-yhan-orange">Youth Health</span>
  <span class={light ? "text-white/50 hidden sm:inline-block" : "text-yhan-hyphen hidden sm:inline-block"}>-</span>
  <span class={baseTextColor}>Accountability Network</span>
</div>
