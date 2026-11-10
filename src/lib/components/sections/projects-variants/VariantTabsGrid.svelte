<script lang="ts">
  import { projects } from '$lib/data/projects';
  import Button from '$lib/components/Button.svelte';
  import { t } from '$lib/i18n/locale.svelte';

  const categories = [
    { id: 'all', label: 'Tutti i Top Picks' },
    { id: 'systems', label: 'Sistemi & Embedded' },
    { id: 'fullstack', label: 'Web & Mobile' },
    { id: 'scientific', label: 'Calcolo Scientifico' }
  ];

  let activeTab = $state('all');

  const filteredProjects = $derived.by(() => {
    switch (activeTab) {
      case 'systems':
        return projects.filter(p => p.slug === 'assettocorsa-rpm-led' || p.slug === 'iot-lab-course' || p.slug === 'svelte-unused-components');
      case 'fullstack':
        return projects.filter(p => p.slug === 'sportrack' || p.slug === 'timetrack');
      case 'scientific':
        return projects.filter(p => p.slug === 'jpeg-converter' || p.slug === 'iterative-linear-solver' || p.slug === 'machine-learning');
      default:
        return projects.filter(p => ['sportrack', 'jpeg-converter', 'assettocorsa-rpm-led'].includes(p.slug));
    }
  });
</script>

<div class="w-full max-w-[100rem] mx-auto flex flex-col justify-between">
  <!-- Header -->
  <div class="text-center mb-6 lg:mb-8">
    <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-gray-100 dark:bg-zinc-900 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-zinc-800 mb-2">
      <span class="w-2 h-2 rounded-full bg-rose-500"></span>
      Domain Filter & Rich Cards
    </div>
    <h2 class="text-[2rem] lg:text-[2.75rem] font-bold text-black dark:text-white tracking-tight mb-4">
      Featured by Engineering Domain
    </h2>

    <!-- Category Tabs -->
    <div class="inline-flex flex-wrap justify-center gap-1.5 p-1 bg-gray-100 dark:bg-zinc-900 rounded-full border border-gray-200 dark:border-zinc-800">
      {#each categories as cat}
        <button
          class="interactable px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-300"
          data-type="action"
          class:bg-black={activeTab === cat.id}
          class:text-white={activeTab === cat.id}
          class:dark:bg-white={activeTab === cat.id}
          class:dark:text-black={activeTab === cat.id}
          class:shadow-sm={activeTab === cat.id}
          class:font-semibold={activeTab === cat.id}
          class:text-gray-600={activeTab !== cat.id}
          class:dark:text-gray-400={activeTab !== cat.id}
          class:hover:text-black={activeTab !== cat.id}
          class:dark:hover:text-white={activeTab !== cat.id}
          onclick={() => activeTab = cat.id}
        >
          {cat.label}
        </button>
      {/each}
    </div>
  </div>

  <!-- Cards Grid (3 cards) -->
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
    {#each filteredProjects.slice(0, 3) as project}
      <!-- svelte-ignore a11y_click_events_have_key_events -->
      <!-- svelte-ignore a11y_no_static_element_interactions -->
      <div
        class="interactable bg-[var(--color-brand-bg)] dark:bg-[#0a0a0a] border border-gray-200 dark:border-zinc-800 rounded-[calc(2rem*var(--brm))] corner-squircle p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 hover:border-gray-400 dark:hover:border-zinc-600 hover:-translate-y-1.5 hover:shadow-xl group cursor-pointer"
        data-type="internal"
        onclick={() => location.href = `/projects?scrollTo=${project.slug}`}
      >
        <div>
          <!-- Image -->
          <div class="relative w-full aspect-[16/10] overflow-hidden rounded-[calc(1.25rem*var(--brm))] corner-squircle mb-5 bg-gray-200 dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800">
            <img
              src={project.imageLight}
              alt={project.title}
              class="w-full h-full object-cover block dark:hidden transition-transform duration-700 group-hover:scale-105"
            />
            <img
              src={project.imageDark}
              alt={project.title}
              class="w-full h-full object-cover hidden dark:block transition-transform duration-700 group-hover:scale-105"
            />
            <div class="absolute top-3 left-3 bg-black/70 backdrop-blur-md text-white text-[0.7rem] font-mono px-2.5 py-0.5 rounded-full border border-white/20">
              {project.category || 'Engineering'}
            </div>
          </div>

          <h3 class="text-xl font-bold text-black dark:text-white mb-2 group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors">
            {project.title}
          </h3>

          <p class="text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-light leading-relaxed mb-4 line-clamp-3">
            {t(project.description)}
          </p>
        </div>

        <div>
          <!-- Tech pills -->
          <div class="flex flex-wrap gap-1.5 mb-5 pt-3 border-t border-gray-200 dark:border-zinc-800">
            {#each project.technologies.slice(0, 3) as tech}
              <span class="px-2 py-0.5 text-[0.7rem] rounded-full bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 text-gray-600 dark:text-gray-300 font-medium">
                {tech}
              </span>
            {/each}
          </div>

          <div class="flex items-center justify-between text-xs font-semibold">
            <span class="text-gray-400 group-hover:text-black dark:group-hover:text-white transition-colors">
              Case Study &rarr;
            </span>
            <Button
              variant="outline"
              padding="py-1 px-3"
              href={project.github}
              target="_blank"
              onclick={(e: MouseEvent) => e.stopPropagation()}
              class="text-xs"
            >
              GitHub
            </Button>
          </div>
        </div>
      </div>
    {/each}
  </div>

  <!-- Bottom Bar -->
  <div class="mt-8 pt-5 border-t border-gray-200 dark:border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
    <p class="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
      Trovi tutti i dettagli, architetture e report completi nella pagina dedicata.
    </p>

    <Button
      variant="filled"
      padding="py-2.5 px-6"
      href="/projects"
      data-sveltekit-preload-data="hover"
      class="text-xs sm:text-sm"
    >
      Esplora Tutti i 17 Progetti &rarr;
    </Button>
  </div>
</div>
