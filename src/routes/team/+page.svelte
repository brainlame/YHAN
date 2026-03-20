<script lang="ts">
  import ColorBar from "$components/ColorBar.svelte";
  import Nav from "$components/Nav.svelte";
  import Footer from "$components/Footer.svelte";
  import Eyebrow from "$components/Eyebrow.svelte";

  const founders = [
    {
      name: "Ayra Dhillon",
      role: "Founder & Executive Director",
      bio: "Ayra founded YHAN after watching decisions get made about students, without students. She leads global operations, chapter development, and direct partnerships with school districts and city governments.",
      email: "ayra@yhan.org",
      accentColor: "#E97132",
      twColor: "text-yhan-orange",
      twBg: "bg-yhan-orange",
      twBorder: "border-yhan-orange",
      twShadow: "shadow-[0_6px_20px_rgba(233,113,50,0.3)]",
      twBgLight: "bg-yhan-orange/10",
      twBorderLight: "border-yhan-orange/30",
      initials: "AD",
      badges: ["Policy Advocacy", "Chapter Ops", "Partnerships"],
    },
    {
      name: "Co-Founder Two",
      role: "Director of Research & Data",
      bio: "Leads survey design, data collection methodology, and analysis pipelines. Passionate about turning student responses into evidence that policymakers can act on.",
      email: "research@yhan.org",
      accentColor: "#29A9C1",
      twColor: "text-yhan-cyan",
      twBg: "bg-yhan-cyan",
      twBorder: "border-yhan-cyan",
      twShadow: "shadow-[0_6px_20px_rgba(41,169,193,0.3)]",
      twBgLight: "bg-yhan-cyan/10",
      twBorderLight: "border-yhan-cyan/30",
      initials: "CF",
      badges: ["Survey Design", "Data Analysis", "Research"],
    },
    {
      name: "Co-Founder Three",
      role: "Director of Community & Growth",
      bio: "Drives ambassador recruitment, ambassador training, and inter-chapter collaboration. Believes every school deserves a school who will speak up.",
      email: "community@yhan.org",
      accentColor: "#F29C33",
      twColor: "text-yhan-yellow",
      twBg: "bg-yhan-yellow",
      twBorder: "border-yhan-yellow",
      twShadow: "shadow-[0_6px_20px_rgba(242,156,51,0.3)]",
      twBgLight: "bg-yhan-yellow/10",
      twBorderLight: "border-yhan-yellow/30",
      initials: "CT",
      badges: ["Recruitment", "Training", "Community"],
    },
  ];
</script>

<ColorBar />
<Nav activePage="team" />

<section class="py-[100px] md:py-[140px] px-6 md:px-[60px] pb-[60px] md:pb-[80px] bg-yhan-white relative overflow-hidden">
  <div
    class="absolute inset-0 pointer-events-none"
    style="
      background: radial-gradient(ellipse 60% 60% at 50% 0%, rgba(233,113,50,.07) 0%, transparent 70%),
                  radial-gradient(ellipse 40% 40% at 0% 100%, rgba(41,169,193,.06) 0%, transparent 70%),
                  radial-gradient(ellipse 40% 40% at 100% 100%, rgba(242,156,51,.05) 0%, transparent 70%);
    "
  ></div>
  <div class="relative z-10 text-center mx-auto max-w-[620px]">
    <Eyebrow color="text-yhan-orange">The People Behind YHAN</Eyebrow>
    <h1 class="font-serif font-black text-[clamp(2.5rem,5vw,4.8rem)] leading-[1.05] tracking-[-0.02em] text-yhan-navy mb-[24px]">
      Meet the team that<br />
      <em class="italic text-yhan-orange">refuses to be ignored.</em>
    </h1>
    <p class="font-sans text-[1.08rem] leading-[1.78] text-yhan-mid font-medium mx-auto">
      Three students who believed that youth perspectives deserve a seat at the table — and built the organization to make it happen.
    </p>
  </div>
</section>

<section class="px-6 md:px-[60px]">
  {#each founders as founder, index}
    {@const flipped = index % 2 === 1}
    <div class="flex flex-col lg:grid lg:grid-cols-[420px_1fr] gap-[40px] md:gap-[72px] items-center py-[60px] md:py-[80px] border-b-[1.5px] border-yhan-border text-center lg:text-left">
      {#if flipped}
        <div class="order-2 lg:order-1">
          <div class="inline-flex items-center justify-center lg:justify-start gap-[8px] bg-yhan-light border-[1.5px] border-yhan-border py-[6px] px-[14px] rounded-full mb-[20px]">
            <span class={`w-[8px] h-[8px] rounded-full ${founder.twBg} inline-block shrink-0`}></span>
            <span class="font-sans text-[0.72rem] font-extrabold text-yhan-mid tracking-[0.08em] uppercase text-left">{founder.role}</span>
          </div>
          <h2 class="font-serif font-black text-[clamp(2rem,3vw,3rem)] leading-[1.05] tracking-[-0.02em] text-yhan-navy mb-[20px]">
            {founder.name}
          </h2>
          <p class="font-sans text-[1.02rem] leading-[1.82] text-yhan-mid font-medium mb-[28px] max-w-[500px] mx-auto lg:mx-0">{founder.bio}</p>
          <div class="flex gap-[8px] flex-wrap justify-center lg:justify-start mb-[28px]">
            {#each founder.badges as b}
              <span class={`font-sans text-[0.75rem] font-bold py-[5px] px-[14px] rounded-full ${founder.twBgLight} ${founder.twColor} border-[1.5px] ${founder.twBorderLight}`}>
                {b}
              </span>
            {/each}
          </div>
          <a href={`mailto:${founder.email}`} class={`inline-flex items-center justify-center gap-[8px] py-[13px] px-[24px] rounded-full font-sans font-extrabold text-[0.9rem] no-underline ${founder.twBg} text-white ${founder.twShadow}`}>
            ✉ {founder.email}
          </a>
        </div>
        
        <div class="order-1 lg:order-2 w-full max-w-[420px] mx-auto aspect-[4/5] bg-yhan-light rounded-[28px] flex items-center justify-center flex-col gap-[16px] border-[2px] border-dashed border-yhan-border relative overflow-hidden">
          <div class={`absolute top-0 right-0 w-[60px] h-[60px] border-b-[4px] border-l-[4px] rounded-bl-[28px] ${founder.twBorder}`}></div>
          <div class={`absolute bottom-0 left-0 w-[60px] h-[60px] border-t-[4px] border-r-[4px] rounded-tr-[28px] ${founder.twBorder}`}></div>
          <div class={`w-[96px] h-[96px] rounded-full ${founder.twBg} flex items-center justify-center font-serif font-black text-[2rem] text-white opacity-85`}>
            {founder.initials}
          </div>
          <p class="font-sans text-[0.78rem] font-semibold text-yhan-mid tracking-[0.06em] uppercase">
            Photo Coming Soon
          </p>
        </div>
      {:else}
        <div class="w-full max-w-[420px] mx-auto aspect-[4/5] bg-yhan-light rounded-[28px] flex items-center justify-center flex-col gap-[16px] border-[2px] border-dashed border-yhan-border relative overflow-hidden">
          <div class={`absolute top-0 left-0 w-[60px] h-[60px] border-b-[4px] border-r-[4px] rounded-br-[28px] ${founder.twBorder}`}></div>
          <div class={`absolute bottom-0 right-0 w-[60px] h-[60px] border-t-[4px] border-l-[4px] rounded-tl-[28px] ${founder.twBorder}`}></div>
          <div class={`w-[96px] h-[96px] rounded-full ${founder.twBg} flex items-center justify-center font-serif font-black text-[2rem] text-white opacity-85`}>
            {founder.initials}
          </div>
          <p class="font-sans text-[0.78rem] font-semibold text-yhan-mid tracking-[0.06em] uppercase">
            Photo Coming Soon
          </p>
        </div>

        <div>
          <div class="inline-flex items-center justify-center lg:justify-start gap-[8px] bg-yhan-light border-[1.5px] border-yhan-border py-[6px] px-[14px] rounded-full mb-[20px]">
            <span class={`w-[8px] h-[8px] rounded-full ${founder.twBg} inline-block shrink-0`}></span>
            <span class="font-sans text-[0.72rem] font-extrabold text-yhan-mid tracking-[0.08em] uppercase text-left">{founder.role}</span>
          </div>
          <h2 class="font-serif font-black text-[clamp(2rem,3vw,3rem)] leading-[1.05] tracking-[-0.02em] text-yhan-navy mb-[20px]">
            {founder.name}
          </h2>
          <p class="font-sans text-[1.02rem] leading-[1.82] text-yhan-mid font-medium mb-[28px] max-w-[500px] mx-auto lg:mx-0">{founder.bio}</p>
          <div class="flex gap-[8px] flex-wrap justify-center lg:justify-start mb-[28px]">
            {#each founder.badges as b}
              <span class={`font-sans text-[0.75rem] font-bold py-[5px] px-[14px] rounded-full ${founder.twBgLight} ${founder.twColor} border-[1.5px] ${founder.twBorderLight}`}>
                {b}
              </span>
            {/each}
          </div>
          <a href={`mailto:${founder.email}`} class={`inline-flex items-center justify-center gap-[8px] py-[13px] px-[24px] rounded-full font-sans font-extrabold text-[0.9rem] no-underline ${founder.twBg} text-white ${founder.twShadow}`}>
            ✉ {founder.email}
          </a>
        </div>
      {/if}
    </div>
  {/each}
</section>

<section class="py-[60px] md:py-[80px] px-6 md:px-[60px] bg-yhan-navy text-center relative overflow-hidden">
  <div
    class="absolute inset-0 pointer-events-none"
    style="background: radial-gradient(ellipse 60% 80% at 50% 50%, rgba(233,113,50,.15) 0%, transparent 70%);"
  ></div>
  <div class="relative z-10 max-w-[620px] mx-auto">
    <Eyebrow color="text-yhan-yellow">Want to join the team?</Eyebrow>
    <h2 class="font-serif font-black text-[clamp(1.9rem,3vw,2.8rem)] text-white leading-[1.1] tracking-[-0.02em] mb-[20px]">
      Become a Chapter Ambassador
    </h2>
    <p class="font-sans text-[1rem] text-white/60 leading-[1.75] font-medium mb-[32px]">
      Lead surveys at your school, present findings to your local government, and join a global network of young advocates who are actually changing things.
    </p>
    <a
      href="mailto:ayra@yhan.org?subject=Ambassador Application"
      class="inline-flex items-center justify-center gap-[8px] py-[15px] px-[32px] rounded-full font-sans font-extrabold text-[0.95rem] no-underline bg-yhan-yellow text-yhan-navy"
    >
      Apply Now →
    </a>
  </div>
</section>

<Footer />
