<script lang="ts">
  let {
    class: className = '',
    snap = true,
    compact = false
  }: {
    class?: string;
    snap?: boolean;
    compact?: boolean;
  } = $props();
</script>

<footer class="{snap ? 'lg:snap-end' : ''} {compact ? 'h-auto py-3 sm:py-4' : 'h-[40vh] sm:h-[26vh]'} mx-[1rem] flex flex-col justify-center items-center {className}">
  <nav class="h-fit {compact ? 'mb-0' : 'mb-[2rem] sm:mb-0 sm:h-[17vh]'} flex justify-around items-center">
    <div class="nav-links-container">
      <ul class="flex flex-col sm:flex-row gap-2 sm:gap-6 lg:gap-8 text-center list-none {compact ? 'text-[0.95rem] sm:text-[1.05rem]' : 'text-[1.5rem]'}">
        <li><a href="/#about" class="interactable text-black dark:text-white no-underline hover:text-gray-500 dark:hover:text-gray-300 hover:underline hover:decoration-gray-300 underline-offset-[1rem] transition-all duration-300">About</a></li>
        <li><a href="/#experience" class="interactable text-black dark:text-white no-underline hover:text-gray-500 dark:hover:text-gray-300 hover:underline hover:decoration-gray-300 underline-offset-[1rem] transition-all duration-300">Experience</a></li>
        <li><a href="/#projects" class="interactable text-black dark:text-white no-underline hover:text-gray-500 dark:hover:text-gray-300 hover:underline hover:decoration-gray-300 underline-offset-[1rem] transition-all duration-300">Projects</a></li>
        <li><a href="/#contact" class="interactable text-black dark:text-white no-underline hover:text-gray-500 dark:hover:text-gray-300 hover:underline hover:decoration-gray-300 underline-offset-[1rem] transition-all duration-300">Contact</a></li>
      </ul>
    </div>
  </nav>
</footer>
