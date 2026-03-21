<script lang="ts">
  import ColorBar from "$components/ColorBar.svelte";
  import Nav from "$components/Nav.svelte";
  import Footer from "$components/Footer.svelte";
  import H2 from "$components/H2.svelte";
  import ContactNudge from "$components/ContactNudge.svelte";
  import InteractiveMap from "$components/InteractiveMap.svelte";

  const chapters = [
    { id: 1, city: "Toronto",   country: "Canada",         flag: "🇨🇦", schools: 6, students: 4200, status: "Active",  color: "#E97132", lat: 43.7,   lng: -79.42, founded: "2023", highlight: "Partnered with Toronto District School Board", twBorderClass: "border-yhan-orange", twBorderLClass: "border-l-yhan-orange", twShadowClass: "shadow-[0_4px_24px_rgba(233,113,50,0.13)]", twTextClass: "text-yhan-orange" },
    { id: 2, city: "London",    country: "United Kingdom", flag: "🇬🇧", schools: 5, students: 3100, status: "Active",  color: "#29A9C1", lat: 51.5,   lng: -0.12,  founded: "2023", highlight: "Presented to borough council on mental health policy", twBorderClass: "border-yhan-cyan", twBorderLClass: "border-l-yhan-cyan", twShadowClass: "shadow-[0_4px_24px_rgba(41,169,193,0.13)]", twTextClass: "text-yhan-cyan" },
    { id: 3, city: "New Delhi", country: "India",          flag: "🇮🇳", schools: 4, students: 2800, status: "Active",  color: "#F29C33", lat: 28.61,  lng: 77.21,  founded: "2024", highlight: "Survey reached 2,800+ students across 4 schools", twBorderClass: "border-yhan-yellow", twBorderLClass: "border-l-yhan-yellow", twShadowClass: "shadow-[0_4px_24px_rgba(242,156,51,0.13)]", twTextClass: "text-yhan-yellow" },
    { id: 4, city: "Nairobi",   country: "Kenya",          flag: "🇰🇪", schools: 4, students: 2400, status: "Active",  color: "#E63337", lat: -1.29,  lng: 36.82,  founded: "2024", highlight: "Launched first peer-led wellness survey in the region", twBorderClass: "border-yhan-red", twBorderLClass: "border-l-yhan-red", twShadowClass: "shadow-[0_4px_24px_rgba(230,51,55,0.13)]", twTextClass: "text-yhan-red" },
    { id: 5, city: "Sydney",    country: "Australia",      flag: "🇦🇺", schools: 4, students: 1900, status: "Active",  color: "#E97132", lat: -33.87, lng: 151.21, founded: "2024", highlight: "Collaboration with NSW Department of Education", twBorderClass: "border-yhan-orange", twBorderLClass: "border-l-yhan-orange", twShadowClass: "shadow-[0_4px_24px_rgba(233,113,50,0.13)]", twTextClass: "text-yhan-orange" },
    { id: 6, city: "São Paulo", country: "Brazil",         flag: "🇧🇷", schools: 3, students: 1300, status: "Growing", color: "#29A9C1", lat: -23.55, lng: -46.63, founded: "2024", highlight: "Expanding to 3 additional schools in 2025", twBorderClass: "border-yhan-cyan", twBorderLClass: "border-l-yhan-cyan", twShadowClass: "shadow-[0_4px_24px_rgba(41,169,193,0.13)]", twTextClass: "text-yhan-cyan" },
    { id: 7, city: "Helsinki",  country: "Finland",        flag: "🇫🇮", schools: 2, students: 900,  status: "Growing", color: "#F29C33", lat: 60.17,  lng: 24.94,  founded: "2025", highlight: "Newest chapter — focused on student mental health data", twBorderClass: "border-yhan-yellow", twBorderLClass: "border-l-yhan-yellow", twShadowClass: "shadow-[0_4px_24px_rgba(242,156,51,0.13)]", twTextClass: "text-yhan-yellow" },
  ];
</script>

<ColorBar />
<Nav activePage="chapters" />

<!-- HERO -->
<section class="py-[100px] md:py-[140px] px-6 md:px-[60px] pb-[60px] md:pb-[80px] bg-yhan-white relative overflow-hidden">
  <div
    class="absolute inset-0 pointer-events-none"
    style="
      background: radial-gradient(ellipse 60% 60% at 50% 0%, rgba(233,113,50,.07) 0%, transparent 70%),
                  radial-gradient(ellipse 40% 40% at 0% 100%, rgba(41,169,193,.06) 0%, transparent 70%),
                  radial-gradient(ellipse 40% 40% at 100% 100%, rgba(242,156,51,.05) 0%, transparent 70%);
    "
  ></div>
  <div class="relative z-10 max-w-[760px] text-center mx-auto">
    <h1 class="font-serif font-black text-[clamp(2.8rem,5vw,5rem)] leading-[1.05] tracking-[-0.02em] text-yhan-navy mb-[24px]">
      Student voices,<br />
      <em class="italic text-yhan-orange">everywhere.</em>
    </h1>
    <p class="font-sans text-[1.08rem] leading-[1.78] text-yhan-mid font-medium max-w-[560px] mx-auto">
      YHAN chapters are active in 7 countries, reaching 15,000+ students across 28 schools. Each chapter is led by a local student ambassador who drives surveys, data collection, and policy advocacy in their community.
    </p>

    <div class="flex flex-col sm:flex-row gap-0 mt-[44px] rounded-[16px] overflow-hidden border-[1.5px] border-yhan-border bg-yhan-white shadow-[0_4px_20px_rgba(35,44,61,0.06)] max-w-[520px] mx-auto">
      {#each [
        { n: "7",    l: "Active Chapters",   color: "text-yhan-orange" },
        { n: "28",   l: "Schools",            color: "text-yhan-cyan" },
        { n: "15K+", l: "Students Reached",   color: "text-yhan-yellow" },
      ] as s, i}
        <div class={`flex-1 py-[20px] text-center ${i < 2 ? 'sm:border-r-[1.5px] border-b-[1.5px] sm:border-b-0 border-yhan-border' : ''}`}>
          <div class={`font-serif font-black text-[2rem] leading-none ${s.color}`}>
            {s.n}
          </div>
          <div class="font-sans text-[0.72rem] font-bold text-yhan-mid mt-[4px]">
            {s.l}
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- MAP + LIST SECTION -->
<section class="py-[60px] md:py-[90px] px-6 md:px-[60px] bg-yhan-white">
  <div class="mb-[40px] md:mb-[48px] text-center">
    <H2>7 chapters. One mission.</H2>
    <p class="font-sans text-[1rem] leading-[1.8] text-yhan-mid font-medium mt-[14px] max-w-[560px] mx-auto">
      Click a pin on the map or a chapter below to learn more about what each team is working on.
    </p>
  </div>
  
  <InteractiveMap {chapters} />
</section>

<!-- Email nudge -->
<section class="py-[60px] md:py-[90px] px-6 md:px-[60px] bg-yhan-offwhite">
  <div class="max-w-[800px] mx-auto">
    <ContactNudge />
  </div>
</section>

<Footer />
