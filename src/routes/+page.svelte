<script lang="ts">
  import ColorBar from "$components/ColorBar.svelte";
  import Nav from "$components/Nav.svelte";
  import Footer from "$components/Footer.svelte";
  import ContactNudge from "$components/ContactNudge.svelte";
  import H2 from "$components/H2.svelte";

  const stats = [
    { n: "60+", l: "Students supported" },
    { n: "Hubs", l: "Mental Health\nResources" },
    { n: "5", l: "Schools with\nQuiet Spaces" },
    { n: "100%", l: "Youth-Led\nResearch" },
  ];
  const statColors = ["text-yhan-orange", "text-yhan-cyan", "text-yhan-red", "text-yhan-yellow"];

  const borderColors = ["border-t-yhan-orange", "border-t-yhan-yellow", "border-t-yhan-cyan", "border-t-yhan-red"];

  const impactBoxes = [
    { n: "60+", l: "Underserved schoolgirls in Afghanistan joined our global peer support WhatsApp community.", color: "text-yhan-orange" },
    { n: "Hubs", l: "Developed student-led Mental Health Resource Hubs for peer support.", color: "text-yhan-yellow" },
    { n: "5", l: "Schools where we have created dedicated quiet study spaces.", color: "text-yhan-cyan" },
    { n: "✓", l: "Supporting youth-led research through peer surveys and policy analysis.", color: "text-yhan-red" },
  ];
</script>

<ColorBar />
<Nav activePage="home" />

<!-- HERO -->
<section id="hero" class="min-h-screen flex flex-col justify-center items-center gap-[50px] md:gap-[70px] px-6 md:px-[60px] pt-[120px] md:pt-[150px] pb-[80px] md:pb-[100px] bg-yhan-white relative overflow-hidden">
  <div
    class="absolute inset-0 pointer-events-none"
    style="
      background: radial-gradient(ellipse 55% 55% at 50% 0%, rgba(233,113,50,.06) 0%, transparent 70%),
                  radial-gradient(ellipse 50% 50% at 0% 100%, rgba(41,169,193,.05) 0%, transparent 70%),
                  radial-gradient(ellipse 50% 50% at 100% 100%, rgba(242,156,51,.05) 0%, transparent 70%);
    "
  ></div>

  <div class="relative z-10 text-center flex flex-col items-center w-full max-w-[800px]">
    <div class="inline-flex items-center gap-[8px] bg-yhan-light border-[1.5px] border-yhan-border text-yhan-mid py-[7px] px-[16px] rounded-full text-[0.75rem] font-extrabold tracking-[0.08em] uppercase mb-[28px] font-sans">
      Student-Led · Non-Profit
    </div>

    <h1 class="font-serif font-black text-[clamp(2.8rem,6vw,5.5rem)] leading-[1.05] tracking-[-0.02em] text-yhan-navy mb-[24px]">
      Your voice can<br />
      <em class="italic text-yhan-orange">change</em> the rules.
    </h1>

    <p class="font-sans text-[1.12rem] md:text-[1.2rem] leading-[1.78] text-yhan-mid font-medium mb-[40px] max-w-[600px] mx-auto">
      The Youth Accountability Network is a student-led initiative that empowers young people to research challenges in their community and makes decisions based on their needs.
    </p>

    <div class="flex flex-col sm:flex-row gap-[16px] justify-center flex-wrap">
      <a
        href="/chapters"
        class="inline-flex items-center justify-center gap-[8px] py-[16px] px-[32px] rounded-full font-sans font-extrabold text-[0.95rem] no-underline bg-yhan-orange text-white shadow-[0_6px_20px_rgba(233,113,50,.28)] hover:opacity-90 transition-opacity"
      >
        Become an Ambassador
      </a>
      <a
        href="#mission"
        class="inline-flex items-center justify-center gap-[8px] py-[15px] px-[30px] rounded-full font-sans font-bold text-[0.95rem] no-underline text-yhan-navy border-2 border-yhan-border bg-transparent hover:bg-yhan-light transition-colors"
      >
        Our Mission →
      </a>
    </div>
  </div>

  <div class="relative z-10 w-full flex justify-center mt-[10px] md:mt-[20px]">
    <div class="grid grid-cols-2 md:grid-cols-4 rounded-[24px] overflow-hidden border-[1.5px] border-yhan-border bg-yhan-white shadow-[0_8px_30px_rgba(35,44,61,.06)] w-full max-w-[900px]">
      {#each stats as s, i}
        <div class={`py-[24px] md:py-[32px] px-[16px] text-center flex-1 border-yhan-border ${i < 2 ? 'border-b-[1.5px] md:border-b-0' : ''} ${i % 2 === 0 ? 'border-r-[1.5px]' : 'border-r-0'} ${i < 3 ? 'md:border-r-[1.5px]' : 'md:border-r-0'}`}>
          <div class={`font-serif font-black text-[2.2rem] md:text-[2.8rem] leading-none mb-[8px] ${statColors[i]}`}>
            {s.n}
          </div>
          <div class="font-sans text-[0.8rem] md:text-[0.9rem] font-bold text-yhan-mid mt-1 leading-[1.4] whitespace-pre-line px-2">
            {s.l}
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- MISSION -->
<section id="mission" class="py-[60px] md:py-[90px] px-6 md:px-[60px] bg-yhan-offwhite">
  <div class="max-w-[800px] mx-auto text-center">
    <H2>What we do</H2>
    <p class="font-sans text-[1.05rem] leading-[1.82] text-yhan-mid font-medium mt-[20px] max-w-[700px] mx-auto">
      The Youth Accountability Network is a student-led initiative that empowers young people to research health challenges affecting their communities. Students survey their peers and analyze policies to identify gaps in youth health and support systems.
    </p>
    <p class="font-sans text-[1.05rem] leading-[1.82] text-yhan-mid font-medium mt-[16px] max-w-[700px] mx-auto">
      Chapters then use this data to both develop community projects and share research with policymakers to help improve decisions that impact youth well-being.
    </p>
  </div>
</section>

<!-- CONTACT -->
<section id="contact" class="py-[60px] md:py-[90px] px-6 md:px-[60px] bg-yhan-offwhite">
  <div class="max-w-[800px] mx-auto">
    <div class="text-center mb-[40px]">
      <H2>Let's connect.</H2>
      <p class="font-sans mt-[18px] text-[1rem] leading-[1.8] text-yhan-mid font-medium">
        For quick inquiries, updates, chapter information, or to apply as an ambassador — reach out directly to our founder. We'd love to hear from you.
      </p>
    </div>

    <ContactNudge />
  </div>
</section>

<Footer />
