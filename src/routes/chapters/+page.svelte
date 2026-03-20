<script lang="ts">
  import ColorBar from "$components/ColorBar.svelte";
  import Nav from "$components/Nav.svelte";
  import Footer from "$components/Footer.svelte";
  import Eyebrow from "$components/Eyebrow.svelte";
  import H2 from "$components/H2.svelte";
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

  const perks = [
    "Lead student surveys at your school and collect feedback from peers",
    "Share results with principals, school districts, or local government",
    "Help turn student voices into real, lasting policy change",
    "Join a global network of young advocates driving education reform",
  ];

  const whatYouGet = [
    { n: "01", title: "Leadership & Research Experience", body: "Run a real advocacy campaign from start to finish: survey design, data analysis, stakeholder presentations." },
    { n: "02", title: "A Global Student Network",         body: "Connect with YHAN ambassadors across 7 chapters worldwide. Share strategies, learn, and grow together." },
    { n: "03", title: "Recognition for Real Impact",      body: "Your work won't just look good on a résumé — it will have genuinely changed something at your school." },
  ];
</script>

<ColorBar />
<Nav activePage="chapters" />

<!-- HERO -->
<section class="py-[100px] md:py-[140px] px-6 md:px-[60px] pb-[60px] md:pb-[80px] bg-yhan-navy relative overflow-hidden">
  <div
    class="absolute inset-0 pointer-events-none"
    style="
      background: radial-gradient(ellipse 60% 80% at -10% 50%, rgba(233,113,50,.2) 0%, transparent 60%),
                  radial-gradient(ellipse 50% 70% at 110% 50%, rgba(41,169,193,.16) 0%, transparent 60%);
    "
  ></div>
  <div class="relative z-10 max-w-[760px] text-center md:text-left mx-auto md:mx-0">
    <Eyebrow color="text-yhan-yellow">Global Chapters</Eyebrow>
    <h1 class="font-serif font-black text-[clamp(2.8rem,5vw,5rem)] leading-[1.05] tracking-[-0.02em] text-white mb-[24px]">
      Student voices,<br />
      <em class="italic text-yhan-orange">everywhere.</em>
    </h1>
    <p class="font-sans text-[1.08rem] leading-[1.78] text-white/65 font-medium max-w-[560px] mx-auto md:mx-0">
      YHAN chapters are active in 7 countries, reaching 15,000+ students across 28 schools. Each chapter is led by a local student ambassador who drives surveys, data collection, and policy advocacy in their community.
    </p>

    <div class="flex flex-col sm:flex-row gap-0 mt-[44px] rounded-[16px] overflow-hidden border-[1.5px] border-white/10 bg-white/5 max-w-[520px] mx-auto md:mx-0">
      {#each [
        { n: "7",    l: "Active Chapters",   color: "text-yhan-orange" },
        { n: "28",   l: "Schools",            color: "text-yhan-cyan" },
        { n: "15K+", l: "Students Reached",   color: "text-yhan-yellow" },
      ] as s, i}
        <div class={`flex-1 py-[20px] text-center ${i < 2 ? 'sm:border-r-[1.5px] border-b-[1.5px] sm:border-b-0 border-white/10' : ''}`}>
          <div class={`font-serif font-black text-[2rem] leading-none ${s.color}`}>
            {s.n}
          </div>
          <div class="font-sans text-[0.72rem] font-bold text-white/45 mt-[4px]">
            {s.l}
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- MAP + LIST SECTION -->
<section class="py-[60px] md:py-[90px] px-6 md:px-[60px] bg-yhan-white">
  <div class="mb-[40px] md:mb-[48px] text-center md:text-left">
    <Eyebrow color="text-yhan-cyan">Where We Are</Eyebrow>
    <H2>7 chapters. One mission.</H2>
    <p class="font-sans text-[1rem] leading-[1.8] text-yhan-mid font-medium mt-[14px] max-w-[560px] mx-auto md:mx-0">
      Click a pin on the map or a chapter below to learn more about what each team is working on.
    </p>
  </div>
  
  <InteractiveMap {chapters} />
</section>

<!-- APPLY CTA -->
<section id="apply" class="py-[60px] md:py-[90px] px-6 md:px-[60px] bg-yhan-offwhite">
  <div class="mb-[40px] md:mb-[48px] text-center md:text-left">
    <Eyebrow color="text-yhan-orange">Join the Movement</Eyebrow>
    <H2>Become a Global Ambassador Today</H2>
    <p class="font-sans text-[1rem] leading-[1.8] text-yhan-mid font-medium mt-[14px] max-w-[580px] mx-auto md:mx-0">
      Want to change the rules at your own school? YHAN Chapter Ambassadors lead student surveys, collect real feedback, and bring data directly to the people with the power to act on it.
    </p>
  </div>

  <!-- Main banner -->
  <div
    class="rounded-[24px] py-[44px] px-6 md:px-[48px] flex flex-col lg:grid lg:grid-cols-2 gap-[44px] items-center shadow-[0_8px_32px_rgba(35,44,61,.15)] mb-[24px] text-center lg:text-left"
    style="background: linear-gradient(130deg, #232C3D 0%, #2d3a52 100%);"
  >
    <div>
      <h3 class="font-serif font-black text-[1.5rem] text-white leading-[1.2] mb-[26px]">
        As a YHAN Chapter Ambassador, you can:
      </h3>
      <a
        href="mailto:ayra@yhan.org?subject=Ambassador Application"
        class="inline-flex items-center gap-[8px] bg-yhan-yellow text-yhan-navy py-[13px] px-[24px] rounded-full font-sans font-extrabold text-[0.9rem] no-underline"
      >
        Apply Now →
      </a>
    </div>
    <ul class="list-none p-0 m-0 flex flex-col gap-[12px] text-left">
      {#each perks as p}
        <li class="flex items-start gap-[12px] font-sans text-[0.9rem] text-white/80 leading-[1.55] font-medium">
          <span class="shrink-0 w-[22px] h-[22px] bg-[#29A9C12E] text-yhan-cyan rounded-full text-[0.7rem] font-extrabold flex items-center justify-center mt-[1px]">
            ✓
          </span>
          {p}
        </li>
      {/each}
    </ul>
  </div>

  <!-- What you get cards -->
  <div class="flex flex-col md:grid md:grid-cols-3 gap-[18px]">
    {#each whatYouGet as w}
      <div class="bg-yhan-white rounded-[20px] py-[30px] px-[26px] shadow-[0_2px_16px_rgba(35,44,61,.07)] border-[1.5px] border-yhan-border text-center md:text-left">
        <div class="font-sans font-extrabold text-[0.68rem] tracking-[0.1em] uppercase text-yhan-cyan mb-[12px]">
          What you'll get · {w.n}
        </div>
        <div class="font-serif font-bold text-[1rem] text-yhan-navy mb-[8px]">
          {w.title}
        </div>
        <div class="font-sans text-[0.83rem] text-yhan-mid leading-[1.65] font-medium">
          {w.body}
        </div>
      </div>
    {/each}
  </div>

  <!-- Email nudge -->
  <div class="mt-[24px] bg-yhan-light rounded-[20px] py-[30px] px-[26px] flex flex-col sm:flex-row items-center justify-between border-[1.5px] border-dashed border-yhan-border gap-[16px] text-center sm:text-left">
    <div class="flex flex-col sm:flex-row items-center gap-[12px]">
      <span class="text-[2rem]">📩</span>
      <div>
        <div class="font-serif font-bold text-[1rem] text-yhan-navy">
          Ready to apply?
        </div>
        <div class="font-sans text-[0.85rem] text-yhan-mid font-medium">
          Email our founder to get started.
        </div>
      </div>
    </div>
    <a
      href="mailto:ayra@yhan.org?subject=Ambassador Application"
      class="font-sans text-yhan-orange font-extrabold text-[0.9rem] no-underline"
    >
      ayra@yhan.org →
    </a>
  </div>
</section>

<Footer />
