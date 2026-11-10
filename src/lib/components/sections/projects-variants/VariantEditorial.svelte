<script lang="ts">
  import { projects } from '$lib/data/projects';
  import Button from '$lib/components/Button.svelte';
  import { t } from '$lib/i18n/locale.svelte';

  const editorialSlugs = ['sportrack', 'jpeg-converter', 'timetrack', 'assettocorsa-rpm-led', 'iot-lab-course'];
  const editorialProjects = editorialSlugs
    .map(slug => projects.find(p => p.slug === slug))
    .filter((p): p is NonNullable<typeof p> => p !== undefined);

  let hoveredIndex = $state(0);
  let hoveredProject = $derived(editorialProjects[hoveredIndex] || editorialProjects[0]);
</script>

<div class="w-full max-w-[100rem] mx-auto flex flex-col justify-between">
  <!-- Header -->
  <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6 lg:mb-8 pb-4 border-b border-gray-200 dark:border-zinc-800">
    <div>
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-gray-100 dark:bg-zinc-900 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-zinc-800 mb-2">
        <span class="w-2 h-2 rounded-full bg-amber-500"></span>
        Editorial Studio Rows
      </div>
      <h2 class="text-[2rem] lg:text-[2.75rem] font-bold text-black dark:text-white tracking-tight">
        Index of Key Projects
      </h2>
    </div>

    <p class="text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-mono">
      01 &mdash; 05 / CURATED SELECTION
    </p>
  </div>

  <!-- Editorial Main Layout -->
  <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
    <!-- Rows List (7 cols) -->
    <div class="lg:col-span-7 flex flex-col divide-y divide-gray-200 dark:divide-zinc-800/80">
      {#each editorialProjects as project, idx}
        <!-- svelte-ignore a11y_click_events_have_key_events -->
        <!-- svelte-ignore a11y_no_static_element_interactions -->
        <div
          class="interactable py-4 sm:py-5 flex items-center justify-between gap-4 group cursor-pointer transition-colors duration-200 hover:px-2 rounded-xl"
          data-type="internal"
          onmouseenter={() => hoveredIndex = idx}
          onclick={() => location.href = `/projects?scrollTo=${project.slug}`}
        >
          <div class="flex items-center gap-4 sm:gap-6 min-w-0">
            <span class="font-mono text-xs sm:text-sm text-gray-400 dark:text-zinc-600 group-hover:text-black dark:group-hover:text-white transition-colors">
              /0{idx + 1}
            </span>

            <div class="min-w-0">
              <h3 class="text-lg sm:text-2xl font-bold text-black dark:text-white tracking-tight group-hover:translate-x-1.5 transition-transform duration-300 truncate">
                {project.title}
              </h3>
              <p class="text-xs text-gray-500 dark:text-gray-400 font-mono mt-0.5">
                {project.category || 'Engineering'} &bull; {project.technologies.slice(0, 3).join(', ')}
              </p>
            </div>
          </div>

          <div class="flex items-center gap-3 shrink-0">
            <span class="hidden sm:inline-block text-xs font-medium text-gray-400 group-hover:text-black dark:group-hover:text-white">
              Case Study
            </span>
            <div class="w-8 h-8 rounded-full border border-gray-300 dark:border-zinc-700 flex items-center justify-center group-hover:bg-black group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition-all">
              <span class="material-symbols-rounded text-base group-hover:rotate-45 transition-transform duration-300">
                north_east
              </span>
            </div>
          </div>
        </div>
      {/each}
    </div>

    <!-- Right Live Preview Card (5 cols, hidden on mobile) -->
    <div class="hidden lg:flex lg:col-span-5 flex-col">
      <div class="bg-[var(--color-brand-bg)] dark:bg-[#0a0a0a] border border-gray-200 dark:border-zinc-800 rounded-[calc(2rem*var(--brm))] corner-squircle p-6 shadow-xl relative overflow-hidden transition-all duration-300">
        <!-- Floating Cover Image -->
        <div class="relative w-full aspect-[16/10] overflow-hidden rounded-[calc(1.25rem*var(--brm))] corner-squircle mb-5 bg-gray-200 dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800">
          <img
            src={hoveredProject.imageLight}
            alt={hoveredProject.title}
            class="w-full h-full object-cover block dark:hidden"
          />
          <img
            src={hoveredProject.imageDark}
            alt={hoveredProject.title}
            class="w-full h-full object-cover hidden dark:block"
          />
          <div class="absolute top-3 left-3 bg-black/75 backdrop-blur-md text-white text-[0.7rem] font-mono px-2.5 py-0.5 rounded-full border border-white/20">
            {hoveredProject.category || 'Featured'}
          </div>
        </div>

        <h4 class="text-xl font-bold text-black dark:text-white mb-2">
          {hoveredProject.title}
        </h4>

        <p class="text-xs text-gray-500 dark:text-gray-400 leading-relaxed font-light mb-4 line-clamp-3">
          {t(hoveredProject.description)}
        </p>

        <div class="flex flex-wrap gap-1.5 mb-5">
          {#each hoveredProject.technologies as tech}
            <span class="px-2 py-0.5 text-[0.68rem] rounded-full bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 text-gray-600 dark:text-gray-300 font-medium">
              {tech}
            </span>
          {/each}
        </div>

        <Button
          variant="filled"
          padding="py-2 px-5"
          href={`/projects?scrollTo=${hoveredProject.slug}`}
          data-sveltekit-preload-data="hover"
          class="w-full text-xs"
        >
          Apri Progetto Completo
        </Button>
      </div>
    </div>
  </div>

  <!-- Editorial Footer -->
  <div class="mt-8 pt-5 border-t border-gray-200 dark:border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
    <p class="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
      Vuoi scoprire tutti i progetti universitari e le sperimentazioni open-source?
    </p>

    <Button
      variant="outline"
      padding="py-2 px-6"
      href="/projects"
      data-sveltekit-preload-data="hover"
      class="text-xs sm:text-sm"
    >
      Visualizza l'Archivio Completo (17) &rarr;
    </Button>
  </div>
</div>
