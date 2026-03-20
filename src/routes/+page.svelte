<script lang="ts">
  import ColorBar from "$components/ColorBar.svelte";
  import Nav from "$components/Nav.svelte";
  import Footer from "$components/Footer.svelte";
  import ContactForm from "$components/ContactForm.svelte";
  import Eyebrow from "$components/Eyebrow.svelte";
  import H2 from "$components/H2.svelte";

  const stats = [
    { n: "10", l: "Student\nAmbassadors" },
    { n: "15K+", l: "Students\nReached" },
    { n: "7", l: "Global\nChapters" },
    { n: "28", l: "Schools\nImpacted" },
  ];
  const statColors = ["text-yhan-orange", "text-yhan-cyan", "text-yhan-red", "text-yhan-yellow"];

  const missionCards = [
    { icon: "📋", title: "Survey & Research", body: "Large-scale surveys designed and distributed by student leaders to capture authentic peer perspectives at scale." },
    { icon: "📊", title: "Data Analysis", body: "We help students turn raw responses into clear, compelling insights that decision-makers can't ignore." },
    { icon: "🏛️", title: "Policy Advocacy", body: "Results are presented directly to principals, school boards, and city officials to drive real, lasting change." },
    { icon: "🌐", title: "Global Collaboration", body: "Chapters across cities and countries share knowledge, strategies, and wins with one another." },
  ];
  const borderColors = ["border-t-yhan-orange", "border-t-yhan-yellow", "border-t-yhan-cyan", "border-t-yhan-red"];

  const impactBoxes = [
    { n: "10", l: "Student Ambassadors\nWorldwide", color: "text-yhan-orange" },
    { n: "15K+", l: "Students\nReached", color: "text-yhan-yellow" },
    { n: "7", l: "Global Chapters\nActive", color: "text-yhan-cyan" },
    { n: "28", l: "Schools\nImpacted", color: "text-yhan-red" },
  ];

  const contactItems = [
    { icon: "✉️", label: "Email our founder", val: "ayra@yhan.org" },
    { icon: "🌍", label: "Active in", val: "7 countries · 28 schools impacted" },
    { icon: "🎓", label: "Open to", val: "Students, schools & partner organizations" },
  ];
</script>

<ColorBar />
<Nav activePage="home" />

<!-- HERO -->
<section id="hero" class="min-h-screen flex flex-col md:grid md:grid-cols-2 items-center gap-[40px] md:gap-[60px] px-6 md:px-[60px] pt-[100px] md:pt-[120px] pb-[60px] md:pb-[80px] bg-yhan-white relative overflow-hidden">
  <div
    class="absolute inset-0 pointer-events-none"
    style="
      background: radial-gradient(ellipse 55% 55% at 0% 0%, rgba(233,113,50,.08) 0%, transparent 70%),
                  radial-gradient(ellipse 50% 50% at 100% 0%, rgba(242,156,51,.07) 0%, transparent 70%),
                  radial-gradient(ellipse 50% 50% at 100% 100%, rgba(230,51,55,.06) 0%, transparent 70%),
                  radial-gradient(ellipse 55% 55% at 0% 100%, rgba(41,169,193,.07) 0%, transparent 70%);
    "
  ></div>

  <div class="relative z-10 text-center md:text-left order-2 md:order-1">
    <div class="inline-flex items-center gap-[8px] bg-yhan-light border-[1.5px] border-yhan-border text-yhan-mid py-[7px] px-[16px] rounded-full text-[0.75rem] font-extrabold tracking-[0.08em] uppercase mb-[28px] font-sans">
      Student-Led · Non-Profit
    </div>

    <h1 class="font-serif font-black text-[clamp(2.6rem,4.5vw,4.8rem)] leading-[1.05] tracking-[-0.02em] text-yhan-navy mb-[22px]">
      Your voice can
      <br />
      <em class="italic text-yhan-orange">change</em> the rules.
    </h1>

    <p class="font-sans text-[1.08rem] leading-[1.78] text-yhan-mid font-medium mb-[38px] max-w-[500px] mx-auto md:mx-0">
      A global movement using student insight to reshape education systems.
    </p>

    <div class="flex flex-col sm:flex-row gap-[12px] justify-center md:justify-start flex-wrap">
      <a
        href="/chapters"
        class="inline-flex items-center justify-center gap-[8px] py-[15px] px-[30px] rounded-full font-sans font-extrabold text-[0.93rem] no-underline bg-yhan-orange text-white shadow-[0_6px_20px_rgba(233,113,50,.28)]"
      >
        Become an Ambassador
      </a>
      <a
        href="#mission"
        class="inline-flex items-center justify-center gap-[8px] py-[14px] px-[28px] rounded-full font-sans font-bold text-[0.93rem] no-underline text-yhan-navy border-2 border-yhan-border bg-transparent"
      >
        Our Mission →
      </a>
    </div>
  </div>

  <div class="relative z-10 flex flex-col items-center gap-[28px] order-1 md:order-2 w-full mt-[20px] md:mt-0">
    <div class="w-[240px] h-[240px] md:w-[280px] md:h-[280px] flex items-center justify-center bg-yhan-white rounded-full shadow-[0_20px_70px_rgba(35,44,61,.1),0_4px_20px_rgba(35,44,61,.06)] p-[30px]">
      <svg viewBox="0 0 120 120" width="100%" height="100%">
        <circle cx="60" cy="60" r="55" class="fill-yhan-light" />
        <path
          d="M 60 20 L 90 80 L 30 80 Z"
          fill="none"
          class="stroke-yhan-orange"
          stroke-width="4"
          stroke-linejoin="round"
        />
        <circle cx="60" cy="60" r="12" class="fill-yhan-cyan opacity-80" />
        <circle cx="60" cy="20" r="6" class="fill-yhan-orange" />
        <circle cx="90" cy="80" r="6" class="fill-yhan-yellow" />
        <circle cx="30" cy="80" r="6" class="fill-yhan-red" />
        <text
          x="60"
          y="105"
          text-anchor="middle"
          class="font-sans font-black text-[11px] fill-yhan-navy tracking-[2px]"
        >
          YHAN
        </text>
      </svg>
    </div>

    <div class="grid grid-cols-2 md:flex rounded-[18px] overflow-hidden border-[1.5px] border-yhan-border bg-yhan-white shadow-[0_4px_20px_rgba(35,44,61,.06)] w-full max-w-[380px]">
      {#each stats as s, i}
        <div class={`py-[16px] md:py-[18px] text-center flex-1 border-b-[1.5px] md:border-b-0 border-r-[1.5px] border-yhan-border ${(i === 1 || i === 3) ? 'border-r-0' : ''} ${(i === 2 || i === 3) ? 'border-b-0' : ''}`}>
          <div class={`font-serif font-black text-[1.5rem] md:text-[1.8rem] leading-none ${statColors[i]}`}>
            {s.n}
          </div>
          <div class="font-sans text-[0.6rem] md:text-[0.68rem] font-bold text-yhan-mid mt-1 leading-[1.35] whitespace-pre-line px-2">
            {s.l}
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- MISSION -->
<section id="mission" class="py-[60px] md:py-[90px] px-6 md:px-[60px] bg-yhan-offwhite">
  <div class="flex flex-col md:grid md:grid-cols-2 gap-[40px] md:gap-[72px] items-center">
    <div class="text-center md:text-left">
      <Eyebrow color="text-yhan-orange">Our Mission</Eyebrow>
      <H2>What we do and how we do it.</H2>
      <p class="font-sans text-[1.02rem] leading-[1.82] text-yhan-mid font-medium mt-[18px]">
        We connect students with school and community leaders. We work with
        student leaders to distribute surveys, analyze the data, and present
        results directly to decision-makers who shape your city's school
        policies.
      </p>
      <p class="font-sans text-[1.02rem] leading-[1.82] text-yhan-mid font-medium mt-[12px]">
        We help schools improve by making sure student voices are heard and
        genuinely acted upon.
      </p>
    </div>

    <div class="flex flex-col sm:grid sm:grid-cols-2 gap-[14px]">
      {#each missionCards as c, i}
        <div class={`bg-yhan-white rounded-[20px] py-[26px] px-[20px] shadow-[0_2px_16px_rgba(35,44,61,.07)] border-t-[4px] ${borderColors[i]} sm:${i % 2 === 1 ? 'mt-[20px]' : ''}`}>
          <div class="text-[1.6rem] mb-[10px]">{c.icon}</div>
          <div class="font-serif font-bold text-[0.95rem] text-yhan-navy mb-[7px]">
            {c.title}
          </div>
          <div class="font-sans text-[0.82rem] text-yhan-mid leading-[1.6] font-medium">
            {c.body}
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- IMPACT -->
<section id="impact" class="py-[60px] md:py-[90px] px-6 md:px-[60px] bg-yhan-navy relative overflow-hidden">
  <div
    class="absolute inset-0 pointer-events-none"
    style="
      background: radial-gradient(circle 500px at 20% 50%, rgba(233,113,50,.12) 0%, transparent 70%),
                  radial-gradient(circle 400px at 80% 50%, rgba(41,169,193,.1) 0%, transparent 70%);
    "
  ></div>
  <div class="relative z-10">
    <div class="text-center max-w-[520px] mx-auto mb-[40px] md:mb-[56px]">
      <Eyebrow color="text-yhan-yellow">Our Impact</Eyebrow>
      <H2 light>Numbers that tell the story</H2>
      <p class="font-sans mt-[16px] text-[0.96rem] text-white/50 leading-[1.75] font-medium">
        Every survey distributed, every meeting held, every policy changed:
        tracked and counted because accountability goes both ways.
      </p>
    </div>

    <div class="grid grid-cols-2 lg:grid-cols-4 gap-[16px]">
      {#each impactBoxes as b}
        <div class="bg-white/5 border-[1.5px] border-white/10 rounded-[20px] py-[30px] md:py-[44px] px-[20px] md:px-[28px] text-center">
          <div class={`font-serif font-black text-[2.5rem] md:text-[3.2rem] leading-none ${b.color}`}>
            {b.n}
          </div>
          <div class="font-sans text-[0.75rem] md:text-[0.82rem] text-white/45 mt-[10px] leading-[1.5] font-semibold whitespace-pre-line">
            {b.l}
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- CONTACT -->
<section id="contact" class="py-[60px] md:py-[90px] px-6 md:px-[60px] bg-yhan-offwhite">
  <div class="flex flex-col lg:grid lg:grid-cols-2 gap-[40px] md:gap-[72px] items-start">
    <div class="text-center md:text-left w-full">
      <Eyebrow color="text-yhan-orange">Get in Touch</Eyebrow>
      <H2>Let's connect.</H2>
      <p class="font-sans mt-[18px] text-[1rem] leading-[1.8] text-yhan-mid font-medium">
        For quick inquiries, updates, chapter information, or to apply as an
        ambassador — reach out directly to our founder. We'd love to hear
        from you.
      </p>

      <div class="flex flex-col gap-[12px] mt-[30px]">
        {#each contactItems as l}
          <div class="flex flex-col sm:flex-row items-center text-center sm:text-left gap-[14px] py-[16px] px-[20px] bg-yhan-white rounded-[16px] shadow-[0_2px_14px_rgba(35,44,61,.06)] border-[1.5px] border-yhan-border">
            <div class="w-[40px] h-[40px] bg-[#edf7fb] rounded-[12px] flex items-center justify-center text-[1rem] shrink-0">
              {l.icon}
            </div>
            <div>
              <div class="font-sans text-[0.74rem] text-yhan-mid font-semibold">
                {l.label}
              </div>
              <div class="font-sans text-[0.88rem] font-extrabold text-yhan-navy break-all sm:break-normal">
                {l.val}
              </div>
            </div>
          </div>
        {/each}
      </div>
    </div>

    <div class="w-full">
      <ContactForm />
    </div>
  </div>
</section>

<Footer />
