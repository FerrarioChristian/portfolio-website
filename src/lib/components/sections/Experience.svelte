<script lang="ts">
  import VariantExpLayers from './experience-variants/VariantExpLayers.svelte';
  import VariantExpInspector from './experience-variants/VariantExpInspector.svelte';
  import { getLocale } from '$lib/i18n/locale.svelte';

  let locale = $derived(getLocale());

  const variants = $derived(locale === 'it' ? [
    { id: 'layers', name: '1. Computing Stack', desc: 'I 5 livelli di astrazione dell\'ingegneria software: dal silicio bare-metal all\'interfaccia reattiva' },
    { id: 'inspector', name: '2. Tech Inspector', desc: 'Inspector a 2 pannelli: clicca su una tecnologia per visualizzare la motivazione architetturale' }
  ] : [
    { id: 'layers', name: '1. Computing Stack', desc: 'The 5 vertical abstraction layers: from bare-metal silicon to reactive interfaces' },
    { id: 'inspector', name: '2. Tech Inspector', desc: '2-panel inspector: inspect architectural rationale and concrete benchmarks' }
  ]);

  let currentView = $state<'all' | string>('all');

  function scrollToVariant(id: string) {
    currentView = 'all';
    setTimeout(() => {
      const el = document.getElementById(`exp-variant-${id}`);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 50);
  }
</script>

<!-- Floating / Sticky Sandbox Navigation Bar -->
<div class="sticky top-4 z-30 w-full flex justify-center px-4 pointer-events-none mb-4">
  <div class="pointer-events-auto bg-white/90 dark:bg-black/90 backdrop-blur-xl border border-gray-300 dark:border-zinc-700/80 rounded-full px-3 py-1.5 shadow-2xl flex items-center gap-1.5 flex-wrap justify-center max-w-[95vw]">
    <span class="text-[0.68rem] font-bold uppercase tracking-wider text-gray-400 dark:text-zinc-500 hidden sm:inline mr-1">
      Experience Lab:
    </span>

    <button
      class="interactable px-3 py-1 rounded-full text-xs font-semibold transition-all duration-200
        {currentView === 'all'
          ? 'bg-black text-white dark:bg-white dark:text-black shadow-sm'
          : 'text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white'}"
      onclick={() => { currentView = 'all'; const el = document.getElementById('experience'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }}
    >
      {locale === 'it' ? 'Tutti in Sequenza (2)' : 'All in Sequence (2)'}
    </button>

    <div class="h-4 w-px bg-gray-200 dark:bg-zinc-800 hidden sm:block"></div>

    {#each variants as v}
      <button
        class="interactable px-2.5 py-1 rounded-full text-xs transition-all duration-200
          {currentView === v.id
            ? 'bg-black text-white dark:bg-white dark:text-black font-semibold shadow-sm'
            : 'text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white'}"
        onclick={() => {
          if (currentView === 'all') {
            scrollToVariant(v.id);
          } else {
            currentView = v.id;
          }
        }}
        title={v.desc}
      >
        {v.name}
      </button>
    {/each}
  </div>
</div>

<div id="experience" class="relative">
  <!-- Variante 1: The Computing Stack -->
  {#if currentView === 'all' || currentView === 'layers'}
    <section
      id="exp-variant-layers"
      class="lg:snap-start relative py-6 lg:py-8 min-h-[85vh] lg:h-[92vh] lg:mx-[10rem] mx-[5%] box-border flex flex-col justify-center"
    >
      <div class="mb-3 flex items-center justify-between">
        <span class="px-3 py-0.5 rounded-full text-[0.68rem] font-mono font-bold tracking-wider uppercase bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
          {locale === 'it' ? 'PROPOSTA 1 DI 2' : 'PROPOSAL 1 OF 2'} • THE COMPUTING STACK
        </span>
        <button
          class="interactable text-xs font-mono text-gray-400 hover:text-black dark:hover:text-white underline underline-offset-4"
          onclick={() => currentView = 'layers'}
        >
          {locale === 'it' ? 'Isola questa variante' : 'Isolate this variant'}
        </button>
      </div>

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
          const el = document.getElementById('exp-variant-inspector') || document.getElementById('projects');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      />
    </section>
  {/if}

  <!-- Variante 2: Tech Inspector -->
  {#if currentView === 'all' || currentView === 'inspector'}
    {#if currentView === 'all'}
      <div class="w-full flex items-center justify-center my-6">
        <div class="w-24 h-px bg-gray-200 dark:bg-zinc-800"></div>
      </div>
    {/if}

    <section
      id="exp-variant-inspector"
      class="lg:snap-start relative py-6 lg:py-8 min-h-[85vh] lg:h-[92vh] lg:mx-[10rem] mx-[5%] box-border flex flex-col justify-center"
    >
      <div class="mb-3 flex items-center justify-between">
        <span class="px-3 py-0.5 rounded-full text-[0.68rem] font-mono font-bold tracking-wider uppercase bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
          {locale === 'it' ? 'PROPOSTA 2 DI 2' : 'PROPOSAL 2 OF 2'} • INTERACTIVE TECH INSPECTOR
        </span>
        <button
          class="interactable text-xs font-mono text-gray-400 hover:text-black dark:hover:text-white underline underline-offset-4"
          onclick={() => currentView = 'inspector'}
        >
          {locale === 'it' ? 'Isola questa variante' : 'Isolate this variant'}
        </button>
      </div>

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
