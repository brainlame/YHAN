<script lang="ts">
  import ColorBar from "$components/ColorBar.svelte";
  import Nav from "$components/Nav.svelte";
  import Footer from "$components/Footer.svelte";
  import WaveTransition from "$components/WaveTransition.svelte";

  const founder = {
    name: "Ayra Dhillon",
    role: "Founder",
    bio: "Ayra Dhillon founded YHAN to empower young people like her to research and address health challenges affecting communities. Through the surveys, or data analysis, she works to ensure that student voices around the world are informing solutions for youth well-being.",
    email: "ayrasaraidhillon@gmail.com",
    accentColor: "#E97132",
    twColor: "text-yhan-orange",
    twBg: "bg-yhan-orange",
    twBorder: "border-yhan-orange",
    twShadow: "shadow-[0_6px_20px_rgba(233,113,50,0.3)]",
    twBgLight: "bg-yhan-orange/10",
    twBorderLight: "border-yhan-orange/30",
    badges: ["Policy Advocacy", "Chapter Ops", "Partnerships"],
  };
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
    <h1 class="font-serif font-black text-[clamp(2.5rem,5vw,4.8rem)] leading-[1.05] tracking-[-0.02em] text-yhan-navy mb-[24px]">
      Meet the team
    </h1>
    <p class="font-sans text-[1.08rem] leading-[1.78] text-yhan-mid font-medium mx-auto">
      A student-led initiative that believes youth perspectives deserve a seat at the table — and built the organization to make it happen.
    </p>
  </div>
</section>

<section class="px-6 md:px-[60px]">
  <div class="flex flex-col lg:grid lg:grid-cols-[420px_1fr] gap-[40px] md:gap-[72px] items-center py-[60px] md:py-[80px] text-center lg:text-left">
    
    <!-- Founder Image Block -->
    <div class="w-full max-w-[420px] mx-auto aspect-[4/5] bg-yhan-light rounded-[28px] relative overflow-hidden shadow-[0_8px_32px_rgba(35,44,61,0.08)] border-[1.5px] border-yhan-border">
      <img 
        src="/ayra.png" 
        alt="Ayra Dhillon" 
        class="absolute inset-0 w-full h-full object-cover object-top"
      />
    </div>

    <!-- Founder Details Block -->
    <div>

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
    
  </div>
</section>

<WaveTransition topColor="fill-white" bottomColor="bg-yhan-navy" />

<section class="py-[60px] md:py-[80px] px-6 md:px-[60px] bg-yhan-navy text-center relative overflow-hidden">
  <div
    class="absolute inset-0 pointer-events-none"
    style="background: radial-gradient(ellipse 60% 80% at 50% 50%, rgba(233,113,50,.15) 0%, transparent 70%);"
  ></div>
  <div class="relative z-10 max-w-[620px] mx-auto">
    <h2 class="font-serif font-black text-[clamp(1.9rem,3vw,2.8rem)] text-white leading-[1.1] tracking-[-0.02em] mb-[20px]">
      Become a Chapter Ambassador
    </h2>
    <p class="font-sans text-[1rem] text-white/60 leading-[1.75] font-medium mb-[32px]">
      Lead surveys at your school, present findings to your local government, and join a global network of young advocates who are actually changing things.
    </p>
    <a
      href="mailto:ayrasaraidhillon@gmail.com?subject=Ambassador Application"
      class="inline-flex items-center justify-center gap-[8px] py-[15px] px-[32px] rounded-full font-sans font-extrabold text-[0.95rem] no-underline bg-yhan-yellow text-yhan-navy"
    >
      Apply Now →
    </a>
  </div>
</section>

<Footer />
