<script lang="ts">
  let { activePage } = $props<{ activePage: "home" | "team" | "chapters" }>();

  let isOpen = $state(false);

  const NAV_LINKS = [
    { label: "Home",     href: "/",          page: "home" },
    { label: "Team",     href: "/team",      page: "team" },
    { label: "Chapters", href: "/chapters",  page: "chapters" },
  ];

  function toggleMenu() {
    isOpen = !isOpen;
    if (typeof window !== 'undefined') {
      document.body.style.overflow = isOpen ? 'hidden' : '';
    }
  }

  function handleResize() {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 768 && isOpen) {
        toggleMenu();
      }
    }
  }
</script>

<svelte:window onresize={handleResize} />

<header class={`fixed top-0 left-0 right-0 z-[100] border-b-[1.5px] border-yhan-border transition-colors duration-300 ${isOpen ? 'bg-white' : 'bg-white/95 backdrop-blur-[12px]'}`}>
  <div class="flex items-center justify-between px-5 md:px-[60px] h-[70px]">
    
    <!-- Brand / Logo -->
    <a href="/" class="flex items-center gap-[10px] no-underline relative z-50 shrink-0">
      <div class="leading-[1.1]">
        <div class="font-sans font-black text-[0.85rem] sm:text-[1rem] text-yhan-navy tracking-[-0.01em] flex flex-wrap gap-x-[3px] sm:gap-x-0">
          <span class="text-yhan-orange">Youth Health</span>
          <span class="text-yhan-hyphen hidden sm:inline-block sm:mx-[3px]">-</span>
          <span>Accountability</span>
        </div>
        <div class="font-sans font-bold text-[0.55rem] sm:text-[0.6rem] tracking-[0.18em] uppercase text-yhan-mid mt-0.5">
          Network
        </div>
      </div>
    </a>

    <!-- Desktop Navigation -->
    <nav class="hidden md:flex items-center gap-[28px]">
      <ul class="flex items-center gap-[28px] list-none m-0 p-0">
        {#each NAV_LINKS as { label, href, page }}
          <li>
            <a
              {href}
              class={`font-sans text-[0.9rem] font-bold no-underline transition-colors ${activePage === page ? 'text-yhan-orange' : 'text-yhan-mid hover:text-yhan-navy'}`}
            >
              {label}
            </a>
          </li>
        {/each}
        <li>
          <a
            href="#contact"
            class="font-sans bg-yhan-orange text-white py-[10px] px-[22px] rounded-full font-extrabold text-[0.9rem] no-underline hover:bg-yhan-orange/90 transition-colors shadow-[0_2px_10px_rgba(233,113,50,0.2)]"
          >
            Get in Touch
          </a>
        </li>
      </ul>
    </nav>

    <!-- Mobile Menu Toggle Button -->
    <button 
      class="md:hidden relative z-50 w-10 h-10 flex flex-col justify-center items-end gap-[5px] text-yhan-navy cursor-pointer focus:outline-none"
      aria-label="Toggle mobile menu"
      aria-expanded={isOpen}
      onclick={toggleMenu}
    >
      <span class={`w-6 h-[2.5px] bg-current rounded-full transition-all duration-300 origin-center ${isOpen ? 'translate-y-[7.5px] rotate-45' : ''}`}></span>
      <span class={`h-[2.5px] bg-current rounded-full transition-all duration-300 ${isOpen ? 'opacity-0 -translate-x-2 w-6' : 'w-5'}`}></span>
      <span class={`w-6 h-[2.5px] bg-current rounded-full transition-all duration-300 origin-center ${isOpen ? '-translate-y-[7.5px] -rotate-45' : ''}`}></span>
    </button>
  </div>

  <!-- Mobile Full-Screen Menu Overlay -->
  <div 
    class={`fixed inset-0 top-[70px] bg-white h-[calc(100vh-70px)] z-40 transform transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] md:hidden flex flex-col px-6 py-8 overflow-y-auto ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
  >
    <ul class="flex flex-col list-none m-0 p-0 mb-8 w-full">
      {#each NAV_LINKS as { label, href, page }}
        <li class="border-b-[1.5px] border-yhan-border">
          <a
            {href}
            onclick={toggleMenu}
            class={`font-sans text-[1.5rem] font-black no-underline block py-5 ${activePage === page ? 'text-yhan-orange' : 'text-yhan-navy'}`}
          >
            {label}
          </a>
        </li>
      {/each}
    </ul>
    
    <div class="mt-auto mb-10 w-full flex flex-col gap-4">
      <div class="font-sans font-bold text-[0.7rem] tracking-[0.1em] uppercase text-yhan-mid text-center">
        Have a question?
      </div>
      <a
        href="#contact"
        onclick={toggleMenu}
        class="font-sans bg-yhan-orange text-white py-[16px] px-[28px] rounded-full font-extrabold text-[1.1rem] no-underline text-center shadow-[0_4px_20px_rgba(233,113,50,0.3)] w-full block active:scale-[0.98] transition-transform"
      >
        Get in Touch
      </a>
    </div>
  </div>
</header>
