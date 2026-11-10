<script lang="ts">
  import { projects } from '$lib/data/projects';
  import Button from '$lib/components/Button.svelte';
  import { t } from '$lib/i18n/locale.svelte';

  // Selected proudest projects
  const spotlightSlugs = ['timetrack', 'jpeg-converter', 'sportrack', 'assettocorsa-rpm-led'];
  const spotlightProjects = spotlightSlugs
    .map(slug => projects.find(p => p.slug === slug))
    .filter((p): p is NonNullable<typeof p> => p !== undefined);

  let activeIndex = $state(0);
  let activeProject = $derived(spotlightProjects[activeIndex] || spotlightProjects[0]);
</script>

<div class="w-full max-w-[100rem] mx-auto flex flex-col justify-between">
  <!-- Header -->
  <div class="text-center mb-6 lg:mb-8">
    <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-gray-100 dark:bg-zinc-900 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-zinc-800 mb-2">
      <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
      Interactive Spotlight
    </div>
    <h2 class="text-[2rem] lg:text-[2.75rem] font-bold text-black dark:text-white tracking-tight">
      Selected Works
    </h2>
    <p class="text-sm lg:text-base text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
      Esplora interattivamente alcuni dei progetti di cui sono più fiero, passando con il mouse o cliccando.
    </p>
  </div>

  <!-- Stage Grid -->
  <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
    <!-- Left: Interactive Selector List (5 cols) -->
    <div class="lg:col-span-5 flex flex-col gap-3 justify-center">
      {#each spotlightProjects as project, idx}
        <!-- svelte-ignore a11y_click_events_have_key_events -->
        <!-- svelte-ignore a11y_no_static_element_interactions -->
        <div
          class="interactable text-left p-4 lg:p-5 rounded-[calc(1.5rem*var(--brm))] corner-squircle border transition-all duration-300 cursor-pointer relative overflow-hidden group
            {activeIndex === idx
              ? 'bg-black text-white dark:bg-white dark:text-black border-black dark:border-white shadow-lg scale-[1.01]'
              : 'bg-white dark:bg-[#0a0a0a] text-black dark:text-white border-gray-200 dark:border-zinc-800 hover:border-gray-400 dark:hover:border-zinc-600 hover:bg-gray-50 dark:hover:bg-zinc-900/50'}"
          data-type="action"
          onclick={() => activeIndex = idx}
          onmouseenter={() => activeIndex = idx}
        >
          <div class="flex items-start justify-between gap-4">
            <div class="flex items-center gap-3">
              <span class="font-mono text-xs tracking-widest opacity-60">
                0{idx + 1}
              </span>
              <div>
                <h3 class="font-bold text-base lg:text-lg tracking-tight">
                  {project.title}
                </h3>
                <p class="text-xs tracking-wide opacity-75 mt-0.5">
                  {project.category || 'Software Engineering'}
                </p>
              </div>
            </div>

            <div class="flex items-center gap-1">
              <span class="material-symbols-rounded text-lg transition-transform duration-300 group-hover:translate-x-1">
                arrow_forward
              </span>
            </div>
          </div>

          <!-- Mini tags row in active card -->
          <div class="flex flex-wrap gap-1.5 mt-3 pt-3 border-t {activeIndex === idx ? 'border-white/20 dark:border-black/20' : 'border-gray-100 dark:border-zinc-800/80'}">
            {#each project.technologies.slice(0, 3) as tech}
              <span class="text-[0.68rem] px-2 py-0.5 rounded-full {activeIndex === idx ? 'bg-white/15 dark:bg-black/15' : 'bg-gray-100 dark:bg-zinc-800 text-gray-600 dark:text-gray-300'} font-medium">
                {tech}
              </span>
            {/each}
          </div>
        </div>
      {/each}
    </div>

    <!-- Right: Spotlight Preview Card (7 cols) -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-full bg-[var(--color-brand-bg)] dark:bg-[#080808] border border-gray-200 dark:border-zinc-800 rounded-[calc(2rem*var(--brm))] corner-squircle p-5 sm:p-7 flex flex-col justify-between shadow-xl transition-all duration-500">
        <!-- Visual Cover -->
        <div class="relative w-full aspect-[16/9] overflow-hidden rounded-[calc(1.5rem*var(--brm))] corner-squircle mb-5 group bg-gray-200 dark:bg-zinc-900">
          <img
            src={activeProject.imageLight}
            alt={activeProject.title}
            class="w-full h-full object-cover block dark:hidden transition-transform duration-700 group-hover:scale-105"
          />
          <img
            src={activeProject.imageDark}
            alt={activeProject.title}
            class="w-full h-full object-cover hidden dark:block transition-transform duration-700 group-hover:scale-105"
          />

          <!-- Gradient overlay -->
          <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>

          <!-- Highlight Pill on image -->
          {#if activeProject.highlight}
            <div class="absolute bottom-3 left-3 bg-black/70 backdrop-blur-md text-white text-[0.75rem] font-medium px-3 py-1 rounded-full border border-white/20">
              {t(activeProject.highlight)}
            </div>
          {/if}
        </div>

        <!-- Project Meta & Description -->
        <div class="flex-grow flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between gap-4 mb-2">
              <h3 class="text-xl sm:text-2xl lg:text-3xl font-bold text-black dark:text-white tracking-tight">
                {activeProject.title}
              </h3>
              <span class="text-xs uppercase font-mono tracking-wider px-2.5 py-1 rounded-md bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-zinc-700">
                {activeProject.category || 'Featured'}
              </span>
            </div>

            <p class="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed font-light mb-4 line-clamp-2">
              {t(activeProject.description)}
            </p>

            <!-- Tech Pills -->
            <div class="flex flex-wrap gap-1.5 mb-6">
              {#each activeProject.technologies as tech}
                <span class="px-2.5 py-1 text-xs rounded-full bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 text-gray-700 dark:text-gray-300 font-medium">
                  {tech}
                </span>
              {/each}
            </div>
          </div>

          <!-- Action Buttons -->
          <div class="flex flex-wrap items-center gap-3 pt-4 border-t border-gray-200 dark:border-zinc-800">
            <Button
              variant="filled"
              padding="py-2.5 px-5"
              href={`/projects?scrollTo=${activeProject.slug}`}
              data-sveltekit-preload-data="hover"
              class="text-sm"
            >
              Case Study & Details
            </Button>

            <Button
              variant="outline"
              padding="py-2.5 px-5"
              href={activeProject.github}
              target="_blank"
              class="text-sm"
            >
              GitHub Source
            </Button>

            {#if activeProject.report}
              <Button
                variant="text-icon"
                icon="description"
                href={activeProject.report}
                target="_blank"
                class="text-xs ml-auto"
              >
                Report PDF
              </Button>
            {/if}
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Bottom Archive Teaser -->
  <div class="mt-8 pt-5 border-t border-gray-200 dark:border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
    <div class="flex items-center gap-3">
      <div class="flex -space-x-1">
        <span class="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
        <span class="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
        <span class="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
        <span class="w-2.5 h-2.5 rounded-full bg-purple-500"></span>
      </div>
      <p class="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
        <strong class="text-black dark:text-white font-semibold">17 Progetti in totale</strong> — Sistemi Low-level, Mobile AI, Web Full-Stack e Calcolo Scientifico.
      </p>
    </div>

    <Button
      variant="outline"
      padding="py-2 px-5"
      href="/projects"
      data-sveltekit-preload-data="hover"
      class="text-xs sm:text-sm"
    >
      Visualizza Archivio Completo &rarr;
    </Button>
  </div>
</div>
