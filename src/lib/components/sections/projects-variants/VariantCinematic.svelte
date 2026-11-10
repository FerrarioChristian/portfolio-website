<script lang="ts">
  import { projects } from '$lib/data/projects';
  import Button from '$lib/components/Button.svelte';
  import { t } from '$lib/i18n/locale.svelte';

  const showcaseSlugs = ['sportrack', 'jpeg-converter', 'timetrack', 'assettocorsa-rpm-led'];
  const showcaseProjects = showcaseSlugs
    .map(slug => projects.find(p => p.slug === slug))
    .filter((p): p is NonNullable<typeof p> => p !== undefined);

  let currentIndex = $state(0);
  let currentProject = $derived(showcaseProjects[currentIndex] || showcaseProjects[0]);

  function next() {
    currentIndex = (currentIndex + 1) % showcaseProjects.length;
  }

  function prev() {
    currentIndex = (currentIndex - 1 + showcaseProjects.length) % showcaseProjects.length;
  }
</script>

<div class="w-full max-w-[100rem] mx-auto flex flex-col justify-between">
  <!-- Header with tabs -->
  <div class="flex flex-col items-center text-center mb-6">
    <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-gray-100 dark:bg-zinc-900 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-zinc-800 mb-2">
      <span class="w-2 h-2 rounded-full bg-violet-500"></span>
      Cinematic Showcase Slider
    </div>
    <h2 class="text-[2rem] lg:text-[2.75rem] font-bold text-black dark:text-white tracking-tight mb-4">
      Flagship Showcase
    </h2>

    <!-- Pill Tabs -->
    <div class="flex flex-wrap justify-center gap-2 p-1.5 bg-gray-100 dark:bg-zinc-900/80 rounded-full border border-gray-200 dark:border-zinc-800">
      {#each showcaseProjects as project, idx}
        <button
          class="interactable px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-300
            {currentIndex === idx
              ? 'bg-black text-white dark:bg-white dark:text-black shadow-md'
              : 'text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white'}"
          onclick={() => currentIndex = idx}
        >
          0{idx + 1} &bull; {project.title}
        </button>
      {/each}
    </div>
  </div>

  <!-- Cinematic Card -->
  <div class="relative bg-[var(--color-brand-bg)] dark:bg-[#0a0a0a] border border-gray-200 dark:border-zinc-800 rounded-[calc(2.5rem*var(--brm))] corner-squircle p-6 sm:p-10 shadow-2xl overflow-hidden transition-all duration-500">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
      <!-- Image (6 cols) -->
      <div class="lg:col-span-6 relative group overflow-hidden rounded-[calc(1.75rem*var(--brm))] corner-squircle aspect-[16/10] bg-gray-200 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800">
        <img
          src={currentProject.imageLight}
          alt={currentProject.title}
          class="w-full h-full object-cover block dark:hidden transition-transform duration-700 group-hover:scale-105"
        />
        <img
          src={currentProject.imageDark}
          alt={currentProject.title}
          class="w-full h-full object-cover hidden dark:block transition-transform duration-700 group-hover:scale-105"
        />

        <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-40"></div>

        <div class="absolute top-4 left-4 bg-black/70 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-full border border-white/20">
          {currentProject.category || 'Engineering'}
        </div>
      </div>

      <!-- Content (6 cols) -->
      <div class="lg:col-span-6 flex flex-col justify-between">
        <div>
          <div class="flex items-center gap-3 mb-2">
            <span class="text-xs font-mono text-gray-400">
              PROJECT 0{currentIndex + 1} OF 0{showcaseProjects.length}
            </span>
          </div>

          <h3 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-black dark:text-white tracking-tight mb-4">
            {currentProject.title}
          </h3>

          <p class="text-sm sm:text-base text-gray-600 dark:text-gray-300 font-light leading-relaxed mb-6">
            {t(currentProject.description)}
          </p>

          <!-- Tech stack tags -->
          <div class="flex flex-wrap gap-2 mb-8">
            {#each currentProject.technologies as tech}
              <span class="px-3 py-1 text-xs rounded-full bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 text-gray-700 dark:text-gray-300 font-medium">
                {tech}
              </span>
            {/each}
          </div>
        </div>

        <div class="flex flex-wrap items-center gap-4 pt-4 border-t border-gray-200 dark:border-zinc-800">
          <Button
            variant="filled"
            padding="py-2.5 px-6"
            href={`/projects?scrollTo=${currentProject.slug}`}
            data-sveltekit-preload-data="hover"
            class="text-sm"
          >
            Explore Case Study
          </Button>

          <Button
            variant="outline"
            padding="py-2.5 px-5"
            href={currentProject.github}
            target="_blank"
            class="text-sm"
          >
            Source Code
          </Button>

          <!-- Navigation Arrow controls -->
          <div class="ml-auto flex items-center gap-2">
            <button
              class="interactable w-9 h-9 rounded-full border border-gray-300 dark:border-zinc-700 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-zinc-800 text-black dark:text-white transition-colors"
              onclick={prev}
              aria-label="Previous project"
            >
              <span class="material-symbols-rounded text-lg">arrow_back</span>
            </button>
            <button
              class="interactable w-9 h-9 rounded-full border border-gray-300 dark:border-zinc-700 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-zinc-800 text-black dark:text-white transition-colors"
              onclick={next}
              aria-label="Next project"
            >
              <span class="material-symbols-rounded text-lg">arrow_forward</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Bottom Link -->
  <div class="mt-8 text-center">
    <Button
      variant="text"
      href="/projects"
      data-sveltekit-preload-data="hover"
      class="text-sm font-medium"
    >
      Visualizza tutti i 17 progetti nell'archivio &rarr;
    </Button>
  </div>
</div>
