<script lang="ts">
  import { onMount } from "svelte";

  let { chapters = [] } = $props<{ chapters?: any[] }>();
  
  let mapRef = $state<HTMLDivElement>();
  let leafletRef: any = null;
  let selectedId = $state<number | null>(null);
  
  onMount(async () => {
    if (!(window as any).L) {
      await new Promise((resolve) => {
        const script = document.createElement("script");
        script.src = "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.js";
        script.onload = resolve;
        document.head.appendChild(script);
      });
    }

    const L = (window as any).L;
    if (!mapRef || leafletRef) return;

    const map = L.map(mapRef, { center: [20, 10], zoom: 2, scrollWheelZoom: false });
    L.tileLayer("https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png", {
      attribution: "© OpenStreetMap © CARTO",
      subdomains: "abcd",
      maxZoom: 19
    }).addTo(map);
    
    leafletRef = map;

    chapters.forEach((ch) => {
      const icon = L.divIcon({
        html: `<div style="width:36px;height:36px;background:${ch.color};border:3px solid white;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:16px;box-shadow:0 4px 14px ${ch.color}60;cursor:pointer;">${ch.flag}</div>`,
        className: "",
        iconSize: [36, 36],
        iconAnchor: [18, 18],
      });
      L.marker([ch.lat, ch.lng], { icon })
        .addTo(map)
        .bindPopup(`<div style="font-family:'DM Sans',sans-serif;min-width:160px;"><div style="font-weight:900;font-size:1rem;color:#232C3D;margin-bottom:4px;">${ch.flag} ${ch.city}</div><div style="font-size:0.78rem;color:#5a6478;margin-bottom:8px;">${ch.country}</div><div style="font-size:0.78rem;color:#232C3D;font-weight:700;">${ch.schools} schools · ${ch.students.toLocaleString()} students</div></div>`, { closeButton: false })
        .on("click", () => {
          selectedId = ch.id;
        });
    });

    return () => {
      if (leafletRef) {
        leafletRef.remove();
        leafletRef = null;
      }
    };
  });
</script>

<svelte:head>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.css" />
</svelte:head>

<div class="interactive-map-section">
  <!-- Map -->
  <div
    bind:this={mapRef}
    class="w-full h-[480px] rounded-[24px] overflow-hidden shadow-[0_8px_40px_rgba(35,44,61,0.12)] border-[1.5px] border-yhan-border"
  ></div>

  <!-- List -->
  <div class="mt-[48px]">
    <h3 class="font-serif font-bold text-[1.3rem] text-yhan-navy mb-[20px]">
      All Chapters
    </h3>

    <div class="flex flex-col gap-[14px]">
      {#each chapters as ch}
        {@const active = selectedId === ch.id}
        <button
          type="button"
          onclick={() => (selectedId = ch.id)}
          class="text-left w-full bg-yhan-white border-[1.5px] border-l-[4px] rounded-[18px] py-[22px] px-[24px] cursor-pointer transition-all duration-200 {active ? `${ch.twBorderClass} ${ch.twBorderLClass} ${ch.twShadowClass} translate-x-[4px]` : 'border-yhan-border border-l-yhan-border shadow-[0_2px_10px_rgba(35,44,61,0.05)] translate-x-0'}"
        >
          <div class="flex items-start justify-between gap-[12px]">
            <div class="flex items-center gap-[12px]">
              <span class="text-[1.6rem]">{ch.flag}</span>
              <div>
                <div class="font-serif font-bold text-[1rem] text-yhan-navy">
                  {ch.city}
                  <span class="font-sans font-medium text-[0.82rem] text-yhan-mid ml-[8px]">{ch.country}</span>
                </div>
                <div class="font-sans text-[0.75rem] text-yhan-mid font-semibold mt-[2px]">
                  {ch.schools} schools · {ch.students.toLocaleString()} students · Est. {ch.founded}
                </div>
              </div>
            </div>
            <span
              class="font-sans text-[0.65rem] font-extrabold tracking-[0.08em] uppercase py-[4px] px-[10px] rounded-full whitespace-nowrap shrink-0 {ch.status === 'Active' ? 'bg-[#eaf9f3] text-[#1a7a50] border-[1px] border-[#b2e6d0]' : 'bg-[#fff8ed] text-yhan-yellow border-[1px] border-[#f5d9a3]'}"
            >
              {ch.status}
            </span>
          </div>

          {#if active}
            <div class="mt-[14px] pt-[14px] border-t border-yhan-border font-sans text-[0.85rem] text-yhan-mid leading-[1.65] font-medium flex items-start gap-[8px]">
              <span class="{ch.twTextClass} text-[1rem] mt-[1px]">✦</span>
              {ch.highlight}
            </div>
          {/if}
        </button>
      {/each}
    </div>
  </div>
</div>

<style>
  :global(.leaflet-popup-content-wrapper) {
    border-radius: 14px !important;
    box-shadow: 0 8px 32px rgba(35,44,61,.15) !important;
    border: 1.5px solid #e0e7ef !important;
  }
  :global(.leaflet-popup-tip) {
    display: none !important;
  }
</style>
