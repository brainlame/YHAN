<script lang="ts">
  const NAVIGATE_LINKS = [
    { label: "Home",     href: "/" },
    { label: "Team",     href: "/team" },
    { label: "Chapters", href: "/chapters" },
    { label: "Contact",  href: "#contact" },
  ];

  const INVOLVE_LINKS = [
    { label: "Apply as Ambassador", href: "mailto:ayra@yhan.org?subject=Ambassador Application" },
    { label: "Start a Chapter",     href: "mailto:ayra@yhan.org?subject=Start a Chapter" },
    { label: "Partner with Us",     href: "mailto:ayra@yhan.org?subject=Partnership Inquiry" },
  ];

  const currentYear = new Date().getFullYear();
</script>

<footer class="bg-yhan-navy px-6 md:px-[60px] pt-[64px] pb-[32px] w-full overflow-hidden">
  <div class="flex flex-col md:grid md:grid-cols-[1.6fr_1fr_1fr] gap-10 md:gap-[56px] mb-[48px]">
    <div>
      <a href="/" class="no-underline block w-full">
        <div class="font-sans font-black text-[0.95rem] text-white mb-[14px]">
          <span class="text-yhan-orange">Youth Health</span> - Accountability
          <div class="font-sans font-bold text-[0.6rem] tracking-[0.18em] uppercase text-white/30 mt-[2px]">
            Network
          </div>
        </div>
      </a>
      <p class="font-sans text-[0.84rem] text-white/40 leading-[1.7] font-medium max-w-[300px]">
        A global student-led movement using youth insight to reshape
        education systems, one policy at a time.
      </p>
    </div>

    <div>
      <h4 class="font-sans font-extrabold text-[0.75rem] text-white tracking-[0.1em] uppercase mb-[16px]">
        Navigate
      </h4>
      <ul class="list-none p-0 m-0 flex flex-col gap-[10px]">
        {#each NAVIGATE_LINKS as { label, href }}
          <li>
            <a {href} class="font-sans text-white/40 no-underline text-[0.85rem] font-semibold">
              {label}
            </a>
          </li>
        {/each}
      </ul>
    </div>

    <div>
      <h4 class="font-sans font-extrabold text-[0.75rem] text-white tracking-[0.1em] uppercase mb-[16px]">
        Get Involved
      </h4>
      <ul class="list-none p-0 m-0 flex flex-col gap-[10px]">
        {#each INVOLVE_LINKS as { label, href }}
          <li>
            <a {href} class="font-sans text-white/40 no-underline text-[0.85rem] font-semibold break-words">
              {label}
            </a>
          </li>
        {/each}
      </ul>
    </div>
  </div>

  <div class="border-t border-white/10 pt-[26px] flex flex-col md:flex-row justify-between gap-4 font-sans text-[0.76rem] text-white/30 font-semibold w-full">
    <span>© {currentYear} Youth Health Accountability Network. All rights reserved.</span>
    <span>Built by students, for students.</span>
  </div>
</footer>
