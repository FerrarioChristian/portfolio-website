<script lang="ts">
  import { projects } from '$lib/data/projects';
  import Button from '$lib/components/Button.svelte';
  import { getLocale, t } from '$lib/i18n/locale.svelte';

  let locale = $derived(getLocale());

  // Selected proudest projects (6 Flagships across Systems, Web, Mobile, Embedded & Scientific Computing)
  const spotlightSlugs = [
    'omnideps',
    'timetrack',
    'jpeg-converter',
    'sportrack',
    'assettocorsa-rpm-led',
    'iterative-linear-solver'
  ];
  const spotlightProjects = spotlightSlugs
    .map(slug => projects.find(p => p.slug === slug))
    .filter((p): p is NonNullable<typeof p> => p !== undefined);

  let activeIndex = $state(0);
  let activeProject = $derived(spotlightProjects[activeIndex] || spotlightProjects[0]);
</script>

<div class="w-full max-w-[92rem] mx-auto flex flex-col justify-between">
  <!-- Header (Aligned with Site Typography: About & Profile) -->
  <div class="text-center mb-4 sm:mb-5 lg:mb-6">
    <p class="font-semibold text-sm sm:text-base text-[var(--color-brand-gray)] dark:text-gray-300 text-center mb-1">
      {locale === 'it' ? 'I Miei Progetti' : 'Browse My Recent'}
    </p>
    <h2 class="text-[2rem] sm:text-[2.4rem] lg:text-[2.85rem] font-bold text-center text-black dark:text-white tracking-tight">
      {locale === 'it' ? 'Progetti in Evidenza' : 'Featured Projects'}
    </h2>
  </div>

  <!-- Stage Grid (Balanced Golden Ratio & Fixed Dimensions) -->
  <div class="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch">
    <!-- Left: Interactive Selector List (5 cols, fixed height matching right card) -->
    <div class="lg:col-span-5 flex flex-col justify-between gap-2 sm:gap-2.5 lg:h-[510px]">
      {#each spotlightProjects as project, idx}
        <!-- svelte-ignore a11y_click_events_have_key_events -->
        <!-- svelte-ignore a11y_no_static_element_interactions -->
        <div
          class="interactable text-left px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-[calc(1.2rem*var(--brm))] corner-squircle border transition-colors duration-200 cursor-pointer flex items-center justify-between gap-3 flex-1
            {activeIndex === idx
              ? 'bg-black text-white dark:bg-white dark:text-black border-black dark:border-white shadow-md'
              : 'bg-white dark:bg-black text-black dark:text-white border-gray-200 dark:border-white/10 hover:border-gray-400 dark:hover:border-white/30'}"
          data-type="action"
          onclick={() => activeIndex = idx}
          onmouseenter={() => activeIndex = idx}
        >
          <div class="flex items-center gap-3 min-w-0">
            <span class="font-mono text-xs font-semibold px-2 py-0.5 rounded-[calc(0.45rem*var(--brm))] corner-squircle shrink-0
              {activeIndex === idx
                ? 'bg-white/20 dark:bg-black/20 text-white dark:text-black'
                : 'bg-white dark:bg-black border border-gray-200 dark:border-white/10 text-gray-600 dark:text-zinc-400'}">
              0{idx + 1}
            </span>
            <div class="truncate">
              <h3 class="font-bold text-sm sm:text-[0.95rem] tracking-tight truncate leading-tight">
                {project.title}
              </h3>
              <p class="text-xs opacity-75 font-mono truncate mt-0.5">
                {project.category || 'Software Engineering'}
              </p>
            </div>
          </div>

          <span class="material-symbols-rounded text-base shrink-0 {activeIndex === idx ? 'opacity-100' : 'opacity-40'}">
            chevron_right
          </span>
        </div>
      {/each}
    </div>

    <!-- Right: Spotlight Preview Card (7 cols - Fixed Height, Rock-Solid Layout) -->
    <div class="lg:col-span-7 bg-white dark:bg-black border border-gray-200 dark:border-white/10 rounded-[calc(1.8rem*var(--brm))] corner-squircle p-5 sm:p-6 lg:p-7 flex flex-col justify-between shadow-sm text-left h-[480px] sm:h-[500px] lg:h-[510px] shrink-0">
      <!-- Visual Cover (Fixed Height) -->
      <div class="relative w-full h-[180px] sm:h-[195px] lg:h-[200px] overflow-hidden rounded-[calc(1.3rem*var(--brm))] corner-squircle mb-4 sm:mb-4.5 bg-gray-200 dark:bg-black border border-transparent dark:border-white/10 shrink-0">
        <img
          src={activeProject.imageLight}
          alt={activeProject.title}
          class="w-full h-full object-cover block dark:hidden"
        />
        <img
          src={activeProject.imageDark}
          alt={activeProject.title}
          class="w-full h-full object-cover hidden dark:block"
        />

        <!-- Gradient overlay -->
        <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-50"></div>

        <!-- Highlight Pill on image -->
        {#if activeProject.highlight}
          <div class="absolute bottom-3 left-3 bg-black/75 backdrop-blur-md text-white text-xs font-medium px-3 py-1 rounded-full border border-white/20">
            {t(activeProject.highlight)}
          </div>
        {/if}
      </div>

      <!-- Project Meta & Description (Fixed Heights for Absolute Stability, Borderless Hierarchy) -->
      <div class="flex-1 min-h-0 flex flex-col justify-between">
        <div>
          <!-- Title row with category badge -->
          <div class="flex items-center justify-between gap-3 mb-2 sm:mb-2.5 shrink-0">
            <h3 class="text-xl sm:text-2xl font-bold text-black dark:text-white tracking-tight leading-snug truncate">
              {activeProject.title}
            </h3>
            <span class="text-xs text-gray-500 dark:text-gray-400 font-medium shrink-0 tracking-wide uppercase">
              {activeProject.category || 'Featured'}
            </span>
          </div>

          <!-- Description paragraph with fixed height container to prevent layout shift -->
          <div class="h-[3.6rem] sm:h-[3.9rem] overflow-hidden mb-3.5 sm:mb-4">
            <p class="text-sm sm:text-[0.95rem] text-gray-600 dark:text-gray-300 leading-relaxed font-light line-clamp-2 sm:line-clamp-3">
              {t(activeProject.description)}
            </p>
          </div>

          <!-- Tech Pills (Strict Single Row, Fixed Height) -->
          <div class="flex items-center gap-1.5 h-[1.85rem] mb-4 sm:mb-5 overflow-hidden flex-nowrap shrink-0">
            {#each activeProject.technologies.slice(0, 4) as tech}
              <span class="px-2.5 py-1 text-xs font-mono rounded-full bg-white dark:bg-black border border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-300 shrink-0 whitespace-nowrap">
                {tech}
              </span>
            {/each}
            {#if activeProject.technologies.length > 4}
              <span
                class="px-2 py-1 text-xs font-mono rounded-full bg-white dark:bg-black border border-gray-200 dark:border-white/10 text-gray-500 dark:text-zinc-400 shrink-0 whitespace-nowrap"
                title={activeProject.technologies.slice(4).join(', ')}
              >
                +{activeProject.technologies.length - 4}
              </span>
            {/if}
          </div>
        </div>

        <!-- Action Buttons (Pinned to bottom of card, separated purely by whitespace) -->
        <div class="flex flex-wrap items-center gap-2.5 pt-2 shrink-0">
          <Button
            variant="filled"
            padding="py-2 px-4"
            href={`/projects?scrollTo=${activeProject.slug}`}
            data-sveltekit-preload-data="hover"
            class="text-xs sm:text-sm font-medium"
          >
            {locale === 'it' ? 'Esplora Case Study' : 'View Case Study'}
          </Button>

          <Button
            variant="outline"
            padding="py-2 px-4"
            href={activeProject.github}
            target="_blank"
            class="text-xs sm:text-sm font-medium"
          >
            GitHub
          </Button>

          {#if activeProject.report}
            <Button
              variant="outline"
              padding="py-2 px-3.5"
              href={activeProject.report}
              target="_blank"
              class="text-xs sm:text-sm font-medium ml-auto"
            >
              Report PDF
            </Button>
          {/if}
        </div>
      </div>
    </div>
  </div>

  <!-- Bottom Archive Teaser (No separating line, emphasized CTA button) -->
  <div class="mt-4 sm:mt-5 lg:mt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
    <div class="flex items-center gap-2.5">
      <div class="flex -space-x-1">
        <span class="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
        <span class="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
        <span class="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
        <span class="w-2.5 h-2.5 rounded-full bg-purple-500"></span>
      </div>
      <p class="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
        <strong class="text-black dark:text-white font-medium">{locale === 'it' ? `${projects.length} Progetti in totale` : `${projects.length} Total Projects`}</strong> — {locale === 'it' ? 'Sistemi Low-level, Mobile, Web e Calcolo Scientifico.' : 'Low-level systems, Mobile, Web, and Scientific Computing.'}
      </p>
    </div>

    <Button
      variant="filled"
      padding="py-2.5 px-5 sm:px-6"
      href="/projects"
      data-sveltekit-preload-data="hover"
      class="text-xs sm:text-sm font-semibold shadow-md shrink-0"
    >
      <span class="flex items-center gap-2">
        <span>{locale === 'it' ? 'Visualizza Tutti i Progetti' : 'View All Projects'}</span>
        <span class="material-symbols-rounded text-base">arrow_forward</span>
      </span>
    </Button>
  </div>
</div>
