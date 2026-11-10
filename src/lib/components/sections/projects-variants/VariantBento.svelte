<script lang="ts">
  import { projects } from '$lib/data/projects';
  import Button from '$lib/components/Button.svelte';
  import { t } from '$lib/i18n/locale.svelte';

  const heroProject = projects.find(p => p.slug === 'sportrack') || projects[0];
  const sideProject1 = projects.find(p => p.slug === 'jpeg-converter') || projects[1];
  const sideProject2 = projects.find(p => p.slug === 'assettocorsa-rpm-led') || projects[2];
</script>

<div class="w-full max-w-[100rem] mx-auto flex flex-col justify-between">
  <!-- Header -->
  <div class="text-center mb-6 lg:mb-8">
    <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-gray-100 dark:bg-zinc-900 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-zinc-800 mb-2">
      <span class="w-2 h-2 rounded-full bg-blue-500"></span>
      Asymmetric Bento Grid
    </div>
    <h2 class="text-[2rem] lg:text-[2.75rem] font-bold text-black dark:text-white tracking-tight">
      Curated Work & Architecture
    </h2>
    <p class="text-sm lg:text-base text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
      Una panoramica asimmetrica che dà massima gerarchia ai progetti più ambiziosi.
    </p>
  </div>

  <!-- Bento Grid -->
  <div class="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-stretch">
    <!-- Card 1: Main Flagship Hero (7 cols) -->
    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div
      class="lg:col-span-7 bg-[var(--color-brand-bg)] dark:bg-[#0a0a0a] border border-gray-200 dark:border-zinc-800 rounded-[calc(2rem*var(--brm))] corner-squircle p-6 sm:p-8 flex flex-col justify-between group hover:border-gray-400 dark:hover:border-zinc-600 transition-all duration-300 shadow-lg cursor-pointer interactable"
      data-type="internal"
      onclick={() => location.href = `/projects?scrollTo=${heroProject.slug}`}
    >
      <div>
        <div class="flex items-center justify-between gap-4 mb-4">
          <span class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[0.7rem] font-bold uppercase tracking-widest bg-black text-white dark:bg-white dark:text-black">
            ★ Flagship Project
          </span>
          <span class="text-xs font-mono text-gray-500 dark:text-gray-400">
            {heroProject.category || 'Mobile & AI'}
          </span>
        </div>

        <h3 class="text-2xl sm:text-3xl font-bold text-black dark:text-white tracking-tight mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {heroProject.title}
        </h3>

        <p class="text-sm sm:text-base text-gray-600 dark:text-gray-300 font-light leading-relaxed mb-6 line-clamp-3">
          {t(heroProject.description)}
        </p>

        <!-- Image Container -->
        <div class="relative w-full aspect-[16/9] overflow-hidden rounded-[calc(1.5rem*var(--brm))] corner-squircle mb-6 bg-gray-200 dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800">
          <img
            src={heroProject.imageLight}
            alt={heroProject.title}
            class="w-full h-full object-cover block dark:hidden transition-transform duration-700 group-hover:scale-105"
          />
          <img
            src={heroProject.imageDark}
            alt={heroProject.title}
            class="w-full h-full object-cover hidden dark:block transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      </div>

      <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 border-t border-gray-200 dark:border-zinc-800">
        <div class="flex flex-wrap gap-1.5">
          {#each heroProject.technologies.slice(0, 4) as tech}
            <span class="px-2.5 py-0.5 text-xs rounded-full bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 text-gray-700 dark:text-gray-300 font-medium">
              {tech}
            </span>
          {/each}
        </div>

        <Button
          variant="filled"
          padding="py-2 px-5"
          href={`/projects?scrollTo=${heroProject.slug}`}
          data-sveltekit-preload-data="hover"
          onclick={(e: MouseEvent) => e.stopPropagation()}
          class="text-xs sm:text-sm shrink-0"
        >
          View Case Study &rarr;
        </Button>
      </div>
    </div>

    <!-- Side Column (5 cols) -> 2 Stacked Cards -->
    <div class="lg:col-span-5 flex flex-col gap-5 lg:gap-6">
      <!-- Card 2: DCT Converter -->
      <!-- svelte-ignore a11y_click_events_have_key_events -->
      <!-- svelte-ignore a11y_no_static_element_interactions -->
      <div
        class="flex-1 bg-[var(--color-brand-bg)] dark:bg-[#0a0a0a] border border-gray-200 dark:border-zinc-800 rounded-[calc(2rem*var(--brm))] corner-squircle p-5 sm:p-6 flex flex-col justify-between group hover:border-gray-400 dark:hover:border-zinc-600 transition-all duration-300 shadow-md cursor-pointer interactable"
        data-type="internal"
        onclick={() => location.href = `/projects?scrollTo=${sideProject1.slug}`}
      >
        <div class="flex gap-4 items-start">
          <div class="w-24 sm:w-28 aspect-square rounded-[calc(1rem*var(--brm))] corner-squircle overflow-hidden shrink-0 bg-gray-200 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800">
            <img src={sideProject1.imageLight} alt={sideProject1.title} class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
          </div>
          <div>
            <span class="text-[0.68rem] uppercase font-mono tracking-wider text-purple-600 dark:text-purple-400 font-bold">
              {sideProject1.category || 'Scientific'}
            </span>
            <h4 class="text-lg sm:text-xl font-bold text-black dark:text-white mt-1 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
              {sideProject1.title}
            </h4>
            <p class="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-1 line-clamp-2 font-light">
              {t(sideProject1.description)}
            </p>
          </div>
        </div>

        <div class="flex items-center justify-between mt-4 pt-3 border-t border-gray-200 dark:border-zinc-800 text-xs">
          <span class="font-mono text-gray-400">Python • NumPy • 2D DCT</span>
          <span class="font-semibold text-black dark:text-white group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
            Approfondisci &rarr;
          </span>
        </div>
      </div>

      <!-- Card 3: Assetto Corsa RPM LEDs -->
      <!-- svelte-ignore a11y_click_events_have_key_events -->
      <!-- svelte-ignore a11y_no_static_element_interactions -->
      <div
        class="flex-1 bg-[var(--color-brand-bg)] dark:bg-[#0a0a0a] border border-gray-200 dark:border-zinc-800 rounded-[calc(2rem*var(--brm))] corner-squircle p-5 sm:p-6 flex flex-col justify-between group hover:border-gray-400 dark:hover:border-zinc-600 transition-all duration-300 shadow-md cursor-pointer interactable"
        data-type="internal"
        onclick={() => location.href = `/projects?scrollTo=${sideProject2.slug}`}
      >
        <div class="flex gap-4 items-start">
          <div class="w-24 sm:w-28 aspect-square rounded-[calc(1rem*var(--brm))] corner-squircle overflow-hidden shrink-0 bg-gray-200 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800">
            <img src={sideProject2.imageLight} alt={sideProject2.title} class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
          </div>
          <div>
            <span class="text-[0.68rem] uppercase font-mono tracking-wider text-amber-600 dark:text-amber-400 font-bold">
              {sideProject2.category || 'Embedded'}
            </span>
            <h4 class="text-lg sm:text-xl font-bold text-black dark:text-white mt-1 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
              {sideProject2.title}
            </h4>
            <p class="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-1 line-clamp-2 font-light">
              {t(sideProject2.description)}
            </p>
          </div>
        </div>

        <div class="flex items-center justify-between mt-4 pt-3 border-t border-gray-200 dark:border-zinc-800 text-xs">
          <span class="font-mono text-gray-400">Rust • ESP32 • UDP Telemetry</span>
          <span class="font-semibold text-black dark:text-white group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
            Approfondisci &rarr;
          </span>
        </div>
      </div>
    </div>
  </div>

  <!-- Card 4: The Archive Vault Portal -->
  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <div
    class="mt-6 bg-gradient-to-r from-gray-900 to-black text-white dark:from-zinc-900 dark:to-zinc-950 border border-zinc-800 rounded-[calc(1.75rem*var(--brm))] corner-squircle p-5 sm:p-6 flex flex-col md:flex-row items-center justify-between gap-4 cursor-pointer interactable group hover:border-zinc-600 transition-all shadow-xl"
    data-type="internal"
    onclick={() => location.href = '/projects'}
  >
    <div class="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
      <div class="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center shrink-0">
        <span class="material-symbols-rounded text-2xl text-emerald-400">folder_special</span>
      </div>
      <div>
        <h4 class="text-base sm:text-lg font-bold text-white tracking-tight">
          L'Archivio Completo contiene altri 14 progetti
        </h4>
        <p class="text-xs sm:text-sm text-gray-400 font-light mt-0.5">
          Esplora algoritmi grafici, tool CLI in Go, pipeline ELT e web app full-stack.
        </p>
      </div>
    </div>

    <div class="flex items-center gap-3">
      <span class="hidden xl:inline text-xs font-mono text-zinc-400">
        C++ • Rust • Go • Java • Python • DuckDB
      </span>
      <Button
        variant="filled"
        padding="py-2.5 px-6"
        href="/projects"
        data-sveltekit-preload-data="hover"
        class="bg-white text-black hover:bg-gray-200 border-none text-xs sm:text-sm whitespace-nowrap"
      >
        Entra nell'Archivio &rarr;
      </Button>
    </div>
  </div>
</div>
