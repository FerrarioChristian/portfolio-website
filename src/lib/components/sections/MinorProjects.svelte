<script lang="ts">
  import { projects } from '$lib/data/projects';
  import Button from '$lib/components/Button.svelte';
  import { getLocale, t } from '$lib/i18n/locale.svelte';

  const minorProjects = projects.filter(p => p.isMinor);

  const categories = $derived([
    { id: 'all', label: getLocale() === 'it' ? 'Tutti (7)' : 'All (7)' },
    { id: 'compilers', label: getLocale() === 'it' ? 'Compilatori & Logica' : 'Compilers & Logic' },
    { id: 'games', label: getLocale() === 'it' ? 'Giochi & Networking' : 'Games & Networking' },
    { id: 'systems', label: getLocale() === 'it' ? 'Strutture Dati & Tool' : 'Data Structures & Tools' }
  ]);

  let activeTab = $state('all');
  let currentIndex = $state(0);
  let carouselTrack: HTMLElement | null = $state(null);

  const filtered = $derived.by(() => {
    switch (activeTab) {
      case 'compilers':
        return minorProjects.filter(p => ['prolog-json-parser', 'lisp-json-parser'].includes(p.slug));
      case 'games':
        return minorProjects.filter(p => ['snake', 'java-multiplayer-snake'].includes(p.slug));
      case 'systems':
        return minorProjects.filter(p => ['cpp-binarysearchtree', 'python-file-sorter', 'portfolio-website'].includes(p.slug));
      default:
        return minorProjects;
    }
  });

  $effect(() => {
    if (activeTab) {
      currentIndex = 0;
      if (carouselTrack) {
        carouselTrack.scrollTo({ left: 0, behavior: 'smooth' });
      }
    }
  });

  function scrollToIndex(idx: number) {
    if (!carouselTrack) return;
    const cards = carouselTrack.children;
    if (cards[idx]) {
      (cards[idx] as HTMLElement).scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
      currentIndex = idx;
    }
  }

  function next() {
    const nextIdx = Math.min(currentIndex + 1, filtered.length - 1);
    scrollToIndex(nextIdx);
  }

  function prev() {
    const prevIdx = Math.max(currentIndex - 1, 0);
    scrollToIndex(prevIdx);
  }

  function handleTrackScroll(e: Event) {
    const target = e.target as HTMLElement;
    const scrollLeft = target.scrollLeft;
    const cardWidth = target.firstElementChild ? (target.firstElementChild as HTMLElement).offsetWidth + 24 : 350;
    const active = Math.round(scrollLeft / cardWidth);
    currentIndex = Math.min(Math.max(active, 0), filtered.length - 1);
  }
</script>

<div class="w-full max-w-[100rem] mx-auto">
  <!-- Header -->
  <div class="flex flex-col lg:flex-row lg:items-end justify-between gap-5 mb-6 lg:mb-7">
    <div class="max-w-3xl">
      <h2 class="text-[2rem] lg:text-[2.85rem] font-bold text-black dark:text-white tracking-tight mb-2.5">
        Other Explorations & CS Lab
      </h2>
      <p class="text-[1.05rem] lg:text-[1.15rem] text-[var(--color-brand-gray)] dark:text-gray-300 font-light leading-relaxed mb-4 max-w-3xl">
        {getLocale() === 'it'
          ? 'Una selezione di sperimentazioni universitarie, progetti indipendenti e tool focalizzati su paradigmi di programmazione, strutture dati e networking.'
          : 'A curated selection of university experiments, independent projects, and developer tools exploring programming paradigms (logic, functional, object-oriented), advanced data structures, and real-time networking. All projects include verifiable source code on GitHub.'}
      </p>

      <!-- Category Filter Tabs -->
      <div class="inline-flex flex-wrap gap-1.5 p-1.5 bg-gray-100 dark:bg-zinc-900 rounded-full border border-gray-200 dark:border-zinc-800">
        {#each categories as cat}
          <button
            class="interactable px-4 py-2 rounded-full text-sm sm:text-[0.95rem] font-medium transition-all
              {activeTab === cat.id
                ? 'bg-black text-white dark:bg-white dark:text-black font-semibold shadow-sm'
                : 'text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white'}"
            data-type="action"
            onclick={() => activeTab = cat.id}
          >
            {cat.label}
          </button>
        {/each}
      </div>
    </div>

    <!-- Navigation Controls & Dynamic Progress Bar -->
    <div class="flex items-center gap-4 self-start lg:self-end shrink-0">
      <div class="flex items-center gap-2.5">
        <span class="font-mono text-sm sm:text-base text-gray-500 dark:text-zinc-400">0{currentIndex + 1} / 0{filtered.length}</span>
        <div class="w-24 sm:w-28 h-2 bg-gray-200 dark:bg-zinc-800 rounded-full overflow-hidden">
          <div
            class="h-full bg-black dark:bg-white transition-all duration-300"
            style="width: {filtered.length > 0 ? ((currentIndex + 1) / filtered.length) * 100 : 0}%"
          ></div>
        </div>
      </div>

      <div class="flex items-center gap-2">
        <button
          class="interactable w-10 h-10 rounded-full border border-gray-300 dark:border-zinc-700 flex items-center justify-center text-black dark:text-white hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors disabled:opacity-30 disabled:pointer-events-none"
          data-type="action"
          onclick={prev}
          disabled={currentIndex === 0}
          aria-label="Previous slide"
        >
          <span class="material-symbols-rounded text-xl">chevron_left</span>
        </button>
        <button
          class="interactable w-10 h-10 rounded-full border border-gray-300 dark:border-zinc-700 flex items-center justify-center text-black dark:text-white hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors disabled:opacity-30 disabled:pointer-events-none"
          data-type="action"
          onclick={next}
          disabled={currentIndex >= filtered.length - 1}
          aria-label="Next slide"
        >
          <span class="material-symbols-rounded text-xl">chevron_right</span>
        </button>
      </div>
    </div>
  </div>

  <!-- Horizontal Slider Track -->
  <div
    bind:this={carouselTrack}
    onscroll={handleTrackScroll}
    class="flex overflow-x-auto gap-6 pb-4 pt-1 snap-x snap-mandatory scroll-smooth no-scrollbar items-stretch w-full px-1"
  >
    {#each filtered as project, idx}
      <div
        class="w-[320px] sm:w-[380px] lg:w-[420px] shrink-0 snap-start bg-[var(--color-brand-bg)] dark:bg-[#0a0a0a] border border-gray-200 dark:border-zinc-800 rounded-[calc(2rem*var(--brm))] corner-squircle p-6 sm:p-7 flex flex-col justify-between shadow-sm hover:border-gray-400 dark:hover:border-zinc-500 transition-colors duration-200
          {currentIndex === idx ? 'ring-1 ring-black/15 dark:ring-white/20 shadow-md border-gray-300 dark:border-zinc-600' : 'opacity-90 hover:opacity-100'}"
      >
        <div>
          <div class="flex items-center justify-between mb-3 text-sm font-mono text-gray-400 dark:text-zinc-500">
            <span>0{idx + 1}</span>
          </div>

          <h3 class="text-xl sm:text-[1.5rem] font-bold text-black dark:text-white mb-2.5 tracking-tight leading-snug">
            {project.title}
          </h3>

          <p class="text-[0.98rem] sm:text-[1.05rem] text-[var(--color-brand-gray)] dark:text-gray-300 font-light leading-relaxed mb-5 line-clamp-3">
            {t(project.description)}
          </p>
        </div>

        <div>
          <!-- Tech pills -->
          <div class="flex flex-wrap gap-2 mb-4 pt-3.5 border-t border-gray-100 dark:border-zinc-800/80">
            {#each project.technologies as tech}
              <span class="px-3 py-1 text-[0.8rem] rounded-full bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 text-gray-700 dark:text-gray-300 font-medium">
                {tech}
              </span>
            {/each}
          </div>

          <!-- Buttons using Button.svelte -->
          <div class="flex items-center gap-3 pt-1 flex-wrap">
            <Button
              variant="outline"
              padding="py-2 px-4"
              href={project.github}
              target="_blank"
              class="text-sm sm:text-[0.95rem]"
            >
              GitHub Repository
            </Button>

            {#if project.demo}
              <Button
                variant="filled"
                padding="py-2 px-4"
                href={project.demo}
                target="_blank"
                class="text-sm sm:text-[0.95rem]"
              >
                Live Demo
              </Button>
            {/if}
          </div>
        </div>
      </div>
    {/each}
  </div>
</div>

<style>
  .no-scrollbar::-webkit-scrollbar {
    display: none;
  }
  .no-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
</style>
