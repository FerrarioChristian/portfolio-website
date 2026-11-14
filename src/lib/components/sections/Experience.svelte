<script lang="ts">
  import VariantExpLayers from './experience-variants/VariantExpLayers.svelte';
  import VariantExpInspector from './experience-variants/VariantExpInspector.svelte';
  import { getLocale } from '$lib/i18n/locale.svelte';

  let locale = $derived(getLocale());

  const variants = $derived(locale === 'it' ? [
    { id: 'layers', name: '1. Computing Stack', desc: 'I 5 livelli su cui lavoro: dall\'hardware a basso livello fino all\'interfaccia utente' },
    { id: 'inspector', name: '2. Tech Inspector', desc: 'Panoramica interattiva: seleziona un linguaggio o framework per vedere come l\'ho usato' }
  ] : [
    { id: 'layers', name: '1. Computing Stack', desc: 'The 5 layers I work on: from low-level hardware up to the user interface' },
    { id: 'inspector', name: '2. Tech Inspector', desc: 'Interactive overview: pick a language or tool to see how and why I used it' }
  ]);

  // Isolated version is default to save vertical height and avoid breaking layout
  let currentView = $state<string>('layers');
</script>

<!-- Floating / Sticky Sandbox Navigation Bar -->
<div class="sticky top-4 z-30 w-full flex justify-center px-4 pointer-events-none mb-4">
  <div class="pointer-events-auto bg-white/90 dark:bg-black/90 backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-full px-3 py-1.5 shadow-2xl flex items-center gap-1.5 flex-wrap justify-center max-w-[95vw]">
    <span class="text-[0.68rem] font-bold uppercase tracking-wider text-gray-400 dark:text-zinc-500 hidden sm:inline mr-1">
      Experience Lab:
    </span>

    {#each variants as v}
      <button
        class="interactable px-3 py-1 rounded-full text-xs transition-all duration-200
          {currentView === v.id
            ? 'bg-black text-white dark:bg-white dark:text-black font-semibold shadow-sm'
            : 'text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white'}"
        onclick={() => currentView = v.id}
        title={v.desc}
      >
        {v.name}
      </button>
    {/each}
  </div>
</div>

<div id="experience" class="relative">
  <!-- Variante 1: The Computing Stack -->
  {#if currentView === 'layers'}
    <section
      id="exp-variant-layers"
      class="lg:snap-start relative py-6 lg:py-8 min-h-[85vh] lg:h-[92vh] lg:mx-[10rem] mx-[5%] box-border flex flex-col justify-center"
    >
      <VariantExpLayers />

      <!-- Scroll down arrow -->
      <!-- svelte-ignore a11y_click_events_have_key_events -->
      <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
      <img
        src="/assets/arrow.png"
        alt="Arrow icon"
        class="h-[2rem] absolute right-[1rem] bottom-[2rem] scale-110 interactable hidden lg:block cursor-pointer dark:invert opacity-60 hover:opacity-100 transition-all duration-300"
        data-type="internal"
        onclick={() => {
          const el = document.getElementById('projects');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      />
    </section>
  {/if}

  <!-- Variante 2: Tech Inspector -->
  {#if currentView === 'inspector'}
    <section
      id="exp-variant-inspector"
      class="lg:snap-start relative py-6 lg:py-8 min-h-[85vh] lg:h-[92vh] lg:mx-[10rem] mx-[5%] box-border flex flex-col justify-center"
    >
      <VariantExpInspector />

      <!-- Scroll down arrow to projects -->
      <!-- svelte-ignore a11y_click_events_have_key_events -->
      <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
      <img
        src="/assets/arrow.png"
        alt="Arrow icon"
        class="h-[2rem] absolute right-[1rem] bottom-[2rem] scale-110 interactable hidden lg:block cursor-pointer dark:invert opacity-60 hover:opacity-100 transition-all duration-300"
        data-type="internal"
        onclick={() => {
          const el = document.getElementById('projects');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      />
    </section>
  {/if}
</div>
