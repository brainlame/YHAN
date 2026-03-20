<script lang="ts">
  let { color = '', children } = $props<{ color?: string; children?: any }>();
</script>

<p class={`font-sans font-extrabold text-[0.72rem] tracking-[0.14em] uppercase mb-3 ${color}`}>
  {@render children?.()}
</p>
