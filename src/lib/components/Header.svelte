<script lang="ts">
  let isMenuOpen = $state(false);

  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }
</script>

<!-- DESKTOP NAV -->
<nav id="desktop-nav" class="hidden lg:flex justify-around items-center h-[17vh]">
  <div class="text-[2rem]">Christian Ferrario</div>
  <div>
    <ul class="flex gap-8 list-none text-[1.5rem]">
      <li><a href="#about" class="interactable text-black dark:text-white no-underline hover:text-gray-500 dark:hover:text-gray-300 hover:underline hover:decoration-gray-300 underline-offset-[1rem] transition-all duration-300">About</a></li>
      <li><a href="#experience" class="interactable text-black dark:text-white no-underline hover:text-gray-500 dark:hover:text-gray-300 hover:underline hover:decoration-gray-300 underline-offset-[1rem] transition-all duration-300">Experience</a></li>
      <li><a href="#projects" class="interactable text-black dark:text-white no-underline hover:text-gray-500 dark:hover:text-gray-300 hover:underline hover:decoration-gray-300 underline-offset-[1rem] transition-all duration-300">Projects</a></li>
      <li><a href="#contact" class="interactable text-black dark:text-white no-underline hover:text-gray-500 dark:hover:text-gray-300 hover:underline hover:decoration-gray-300 underline-offset-[1rem] transition-all duration-300">Contact</a></li>
    </ul>
  </div>
</nav>

<!-- HAMBURGER NAV -->
<nav id="hamburger-nav" class="flex lg:hidden justify-around items-center h-[17vh]">
  <div class="text-[2rem]">Christian Ferrario</div>
  <div class="relative inline-block z-[1]">
    <button 
      class="flex flex-col justify-between h-[24px] w-[30px] bg-transparent border-none interactable" 
      onclick={toggleMenu}
      aria-label="Toggle menu"
    >
      <span class="w-full h-[2px] bg-black dark:bg-white transition-all duration-300 ease-in-out {isMenuOpen ? 'rotate-45 translate-y-[11px]' : ''}"></span>
      <span class="w-full h-[2px] bg-black dark:bg-white transition-all duration-300 ease-in-out {isMenuOpen ? 'opacity-0' : 'opacity-100'}"></span>
      <span class="w-full h-[2px] bg-black dark:bg-white transition-all duration-300 ease-in-out {isMenuOpen ? '-rotate-45 -translate-y-[11px]' : ''}"></span>
    </button>
    <div class="absolute top-full right-0 bg-white dark:bg-[#1a1a1a] w-max overflow-hidden transition-all duration-300 ease-in-out {isMenuOpen ? 'max-h-[300px]' : 'max-h-0'}">
      <ul class="list-none p-0 m-0">
        <li><a href="#about" onclick={toggleMenu} class="block p-[10px] text-center text-[1.5rem] text-black dark:text-white no-underline transition-all duration-300 hover:text-gray-500 dark:hover:text-gray-300">About</a></li>
        <li><a href="#experience" onclick={toggleMenu} class="block p-[10px] text-center text-[1.5rem] text-black dark:text-white no-underline transition-all duration-300 hover:text-gray-500 dark:hover:text-gray-300">Experience</a></li>
        <li><a href="#projects" onclick={toggleMenu} class="block p-[10px] text-center text-[1.5rem] text-black dark:text-white no-underline transition-all duration-300 hover:text-gray-500 dark:hover:text-gray-300">Projects</a></li>
        <li><a href="#contact" onclick={toggleMenu} class="block p-[10px] text-center text-[1.5rem] text-black dark:text-white no-underline transition-all duration-300 hover:text-gray-500 dark:hover:text-gray-300">Contact</a></li>
      </ul>
    </div>
  </div>
</nav>

<style>
  /* Base transitions are handled by tailwind classes */
  /* Replicate custom interactable hover behavior */
  :global(a.interactable:hover) {
    transform: scale(1.25);
  }
</style>
