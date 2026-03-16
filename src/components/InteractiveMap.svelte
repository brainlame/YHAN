<script lang="ts">
  import { onMount } from "svelte";
  import { C } from "../tokens";

  export let chapters: any[] = [];
  
  let mapRef: HTMLDivElement;
  let leafletRef: any = null;
  export let selectedId: number | null = null;
  
  onMount(async () => {
    // Dynamically load leaflet
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
        .bindPopup(`<div style="font-family:'DM Sans',sans-serif;min-width:160px;"><div style="font-weight:900;font-size:1rem;color:${C.navy};margin-bottom:4px;">${ch.flag} ${ch.city}</div><div style="font-size:0.78rem;color:${C.mid};margin-bottom:8px;">${ch.country}</div><div style="font-size:0.78rem;color:${C.navy};font-weight:700;">${ch.schools} schools · ${ch.students.toLocaleString()} students</div></div>`, { closeButton: false })
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
    style={`
      width: 100%;
      height: 480px;
      border-radius: 24px;
      overflow: hidden;
      box-shadow: 0 8px 40px rgba(35,44,61,.12);
      border: 1.5px solid ${C.border};
    `}
  ></div>

  <!-- List -->
  <div style="margin-top: 48px;">
    <h3
      style={`
        font-family: 'Fraunces', serif;
        font-weight: 700;
        font-size: 1.3rem;
        color: ${C.navy};
        margin-bottom: 20px;
      `}
    >
      All Chapters
    </h3>

    <div style="display: flex; flex-direction: column; gap: 14px;">
      {#each chapters as ch}
        {@const active = selectedId === ch.id}
        <button
          type="button"
          on:click={() => (selectedId = ch.id)}
          style={`
            text-align: left;
            width: 100%;
            background: ${C.white};
            border: 1.5px solid ${active ? ch.color : C.border};
            border-left: 4px solid ${active ? ch.color : C.border};
            border-radius: 18px;
            padding: 22px 24px;
            cursor: pointer;
            box-shadow: ${active ? `0 4px 24px ${ch.color}22` : "0 2px 10px rgba(35,44,61,.05)"};
            transform: ${active ? "translateX(4px)" : "none"};
            transition: all .2s;
          `}
        >
          <div style="display: flex; align-items: flex-start; justify-content: space-between; gap: 12px;">
            <div style="display: flex; align-items: center; gap: 12px;">
              <span style="font-size: 1.6rem;">{ch.flag}</span>
              <div>
                <div style={`font-family: 'Fraunces', serif; font-weight: 700; font-size: 1rem; color: ${C.navy};`}>
                  {ch.city}
                  <span style={`font-family: 'DM Sans', sans-serif; font-weight: 500; font-size: 0.82rem; color: ${C.mid}; margin-left: 8px;`}>{ch.country}</span>
                </div>
                <div style={`font-family: 'DM Sans', sans-serif; font-size: 0.75rem; color: ${C.mid}; font-weight: 600; margin-top: 2px;`}>
                  {ch.schools} schools · {ch.students.toLocaleString()} students · Est. {ch.founded}
                </div>
              </div>
            </div>
            <span
              style={`
                font-family: 'DM Sans', sans-serif;
                font-size: 0.65rem;
                font-weight: 800;
                letter-spacing: 0.08em;
                text-transform: uppercase;
                padding: 4px 10px;
                border-radius: 50px;
                background: ${ch.status === "Active" ? "#eaf9f3" : "#fff8ed"};
                color: ${ch.status === "Active" ? "#1a7a50" : C.yellow};
                border: 1px solid ${ch.status === "Active" ? "#b2e6d0" : "#f5d9a3"};
                white-space: nowrap;
                flex-shrink: 0;
              `}
            >
              {ch.status}
            </span>
          </div>

          {#if active}
            <div
              style={`
                margin-top: 14px;
                padding-top: 14px;
                border-top: 1px solid ${C.border};
                font-family: 'DM Sans', sans-serif;
                font-size: 0.85rem;
                color: ${C.mid};
                line-height: 1.65;
                font-weight: 500;
                display: flex;
                align-items: flex-start;
                gap: 8px;
              `}
            >
              <span style={`color: ${ch.color}; font-size: 1rem; margin-top: 1px;`}>✦</span>
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
