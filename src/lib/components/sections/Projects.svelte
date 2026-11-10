<script lang="ts">
  import VariantSpotlight from './projects-variants/VariantSpotlight.svelte';
  import VariantBento from './projects-variants/VariantBento.svelte';
  import VariantEditorial from './projects-variants/VariantEditorial.svelte';
  import VariantCinematic from './projects-variants/VariantCinematic.svelte';
  import VariantTabsGrid from './projects-variants/VariantTabsGrid.svelte';
  import { getLocale } from '$lib/i18n/locale.svelte';

  let locale = $derived(getLocale());

  const variants = $derived(locale === 'it' ? [
    { id: 'spotlight', name: '1. Spotlight', desc: 'Stage interattivo con lista selettore dinamica' },
    { id: 'bento', name: '2. Bento Grid', desc: 'Gerarchia marcata: 1 Hero flagship + 2 secondari + Archive Portal' },
    { id: 'editorial', name: '3. Editorial Rows', desc: 'Minimalismo contemporaneo stile studio di design e hover live preview' },
    { id: 'cinematic', name: '4. Cinematic Slider', desc: 'Card panoramica ad alto impatto con navigazione a schede' },
    { id: 'tabs', name: '5. Domain Tabs', desc: 'Filtro per ambito ingegneristico (Sistemi, Web/Mobile, Scientifico)' }
  ] : [
    { id: 'spotlight', name: '1. Spotlight', desc: 'Interactive stage with dynamic project selector' },
    { id: 'bento', name: '2. Bento Grid', desc: 'Distinct hierarchy: 1 Flagship hero + 2 secondary + Archive portal' },
    { id: 'editorial', name: '3. Editorial Rows', desc: 'Contemporary minimalist studio aesthetic with live hover previews' },
    { id: 'cinematic', name: '4. Cinematic Slider', desc: 'High-impact panoramic card with tabbed slide navigation' },
    { id: 'tabs', name: '5. Domain Tabs', desc: 'Filter by engineering domain (Systems, Web/Mobile, Scientific)' }
  ]);

  // 'all' means all 5 variants stacked in sequence; otherwise isolate specific variant
  let currentView = $state<'all' | string>('all');

  function scrollToVariant(id: string) {
    currentView = 'all';
    setTimeout(() => {
      const el = document.getElementById(`variant-${id}`);
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
      Redesign Lab:
    </span>

    <button
      class="interactable px-3 py-1 rounded-full text-xs font-semibold transition-all duration-200
        {currentView === 'all'
          ? 'bg-black text-white dark:bg-white dark:text-black shadow-sm'
          : 'text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white'}"
      onclick={() => { currentView = 'all'; const el = document.getElementById('projects'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }}
    >
      {locale === 'it' ? 'Tutti in Sequenza (5)' : 'All in Sequence (5)'}
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

<div id="projects" class="relative">
  {#if currentView === 'all' || currentView === 'spotlight'}
    <!-- Variante 1: Spotlight -->
    <section
      id="variant-spotlight"
      class="lg:snap-start relative py-12 lg:py-16 min-h-[92vh] lg:mx-[10rem] mx-[5%] box-border flex flex-col justify-center"
    >
      <div class="mb-4 flex items-center justify-between">
        <span class="px-3 py-1 rounded-full text-[0.7rem] font-mono font-bold tracking-wider uppercase bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
          {locale === 'it' ? 'PROPOSTA 1 DI 5' : 'PROPOSAL 1 OF 5'} &bull; INTERACTIVE SPOTLIGHT
        </span>
        <button
          class="interactable text-xs font-mono text-gray-400 hover:text-black dark:hover:text-white underline underline-offset-4"
          onclick={() => currentView = 'spotlight'}
        >
          {locale === 'it' ? 'Isola questa variante' : 'Isolate this variant'}
        </button>
      </div>

      <VariantSpotlight />

      <!-- Scroll down arrow (only in desktop snap) -->
      <!-- svelte-ignore a11y_click_events_have_key_events -->
      <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
      <img
        src="/assets/arrow.png"
        alt="Arrow icon"
        class="h-[2rem] absolute right-[1rem] bottom-[2rem] scale-110 interactable hidden lg:block cursor-pointer dark:invert opacity-60 hover:opacity-100 transition-all duration-300"
        data-type="internal"
        onclick={() => {
          const el = document.getElementById('variant-bento') || document.getElementById('contact');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      />
    </section>
  {/if}

  {#if currentView === 'all' || currentView === 'bento'}
    <!-- Separator in sequence view -->
    {#if currentView === 'all'}
      <div class="w-full flex items-center justify-center my-8">
        <div class="w-24 h-px bg-gray-200 dark:bg-zinc-800"></div>
      </div>
    {/if}

    <!-- Variante 2: Bento Grid -->
    <section
      id="variant-bento"
      class="lg:snap-start relative py-12 lg:py-16 min-h-[92vh] lg:mx-[10rem] mx-[5%] box-border flex flex-col justify-center"
    >
      <div class="mb-4 flex items-center justify-between">
        <span class="px-3 py-1 rounded-full text-[0.7rem] font-mono font-bold tracking-wider uppercase bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
          {locale === 'it' ? 'PROPOSTA 2 DI 5' : 'PROPOSAL 2 OF 5'} &bull; ASYMMETRIC BENTO GRID
        </span>
        <button
          class="interactable text-xs font-mono text-gray-400 hover:text-black dark:hover:text-white underline underline-offset-4"
          onclick={() => currentView = 'bento'}
        >
          {locale === 'it' ? 'Isola questa variante' : 'Isolate this variant'}
        </button>
      </div>

      <VariantBento />

      <!-- Scroll down arrow -->
      <!-- svelte-ignore a11y_click_events_have_key_events -->
      <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
      <img
        src="/assets/arrow.png"
        alt="Arrow icon"
        class="h-[2rem] absolute right-[1rem] bottom-[2rem] scale-110 interactable hidden lg:block cursor-pointer dark:invert opacity-60 hover:opacity-100 transition-all duration-300"
        data-type="internal"
        onclick={() => {
          const el = document.getElementById('variant-editorial') || document.getElementById('contact');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      />
    </section>
  {/if}

  {#if currentView === 'all' || currentView === 'editorial'}
    <!-- Separator in sequence view -->
    {#if currentView === 'all'}
      <div class="w-full flex items-center justify-center my-8">
        <div class="w-24 h-px bg-gray-200 dark:bg-zinc-800"></div>
      </div>
    {/if}

    <!-- Variante 3: Editorial Rows -->
    <section
      id="variant-editorial"
      class="lg:snap-start relative py-12 lg:py-16 min-h-[92vh] lg:mx-[10rem] mx-[5%] box-border flex flex-col justify-center"
    >
      <div class="mb-4 flex items-center justify-between">
        <span class="px-3 py-1 rounded-full text-[0.7rem] font-mono font-bold tracking-wider uppercase bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
          {locale === 'it' ? 'PROPOSTA 3 DI 5' : 'PROPOSAL 3 OF 5'} &bull; EDITORIAL STUDIO ROWS
        </span>
        <button
          class="interactable text-xs font-mono text-gray-400 hover:text-black dark:hover:text-white underline underline-offset-4"
          onclick={() => currentView = 'editorial'}
        >
          {locale === 'it' ? 'Isola questa variante' : 'Isolate this variant'}
        </button>
      </div>

      <VariantEditorial />

      <!-- Scroll down arrow -->
      <!-- svelte-ignore a11y_click_events_have_key_events -->
      <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
      <img
        src="/assets/arrow.png"
        alt="Arrow icon"
        class="h-[2rem] absolute right-[1rem] bottom-[2rem] scale-110 interactable hidden lg:block cursor-pointer dark:invert opacity-60 hover:opacity-100 transition-all duration-300"
        data-type="internal"
        onclick={() => {
          const el = document.getElementById('variant-cinematic') || document.getElementById('contact');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      />
    </section>
  {/if}

  {#if currentView === 'all' || currentView === 'cinematic'}
    <!-- Separator in sequence view -->
    {#if currentView === 'all'}
      <div class="w-full flex items-center justify-center my-8">
        <div class="w-24 h-px bg-gray-200 dark:bg-zinc-800"></div>
      </div>
    {/if}

    <!-- Variante 4: Cinematic Slider -->
    <section
      id="variant-cinematic"
      class="lg:snap-start relative py-12 lg:py-16 min-h-[92vh] lg:mx-[10rem] mx-[5%] box-border flex flex-col justify-center"
    >
      <div class="mb-4 flex items-center justify-between">
        <span class="px-3 py-1 rounded-full text-[0.7rem] font-mono font-bold tracking-wider uppercase bg-violet-500/10 text-violet-600 dark:text-violet-400 border border-violet-500/20">
          {locale === 'it' ? 'PROPOSTA 4 DI 5' : 'PROPOSAL 4 OF 5'} &bull; CINEMATIC SHOWCASE SLIDER
        </span>
        <button
          class="interactable text-xs font-mono text-gray-400 hover:text-black dark:hover:text-white underline underline-offset-4"
          onclick={() => currentView = 'cinematic'}
        >
          {locale === 'it' ? 'Isola questa variante' : 'Isolate this variant'}
        </button>
      </div>

      <VariantCinematic />

      <!-- Scroll down arrow -->
      <!-- svelte-ignore a11y_click_events_have_key_events -->
      <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
      <img
        src="/assets/arrow.png"
        alt="Arrow icon"
        class="h-[2rem] absolute right-[1rem] bottom-[2rem] scale-110 interactable hidden lg:block cursor-pointer dark:invert opacity-60 hover:opacity-100 transition-all duration-300"
        data-type="internal"
        onclick={() => {
          const el = document.getElementById('variant-tabs') || document.getElementById('contact');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      />
    </section>
  {/if}

  {#if currentView === 'all' || currentView === 'tabs'}
    <!-- Separator in sequence view -->
    {#if currentView === 'all'}
      <div class="w-full flex items-center justify-center my-8">
        <div class="w-24 h-px bg-gray-200 dark:bg-zinc-800"></div>
      </div>
    {/if}

    <!-- Variante 5: Domain Tabs & Rich Cards -->
    <section
      id="variant-tabs"
      class="lg:snap-start relative py-12 lg:py-16 min-h-[92vh] lg:mx-[10rem] mx-[5%] box-border flex flex-col justify-center"
    >
      <div class="mb-4 flex items-center justify-between">
        <span class="px-3 py-1 rounded-full text-[0.7rem] font-mono font-bold tracking-wider uppercase bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/20">
          {locale === 'it' ? 'PROPOSTA 5 DI 5' : 'PROPOSAL 5 OF 5'} &bull; DOMAIN FILTER & RICH CARDS
        </span>
        <button
          class="interactable text-xs font-mono text-gray-400 hover:text-black dark:hover:text-white underline underline-offset-4"
          onclick={() => currentView = 'tabs'}
        >
          {locale === 'it' ? 'Isola questa variante' : 'Isolate this variant'}
        </button>
      </div>

      <VariantTabsGrid />

      <!-- Scroll down arrow to Contact -->
      <!-- svelte-ignore a11y_click_events_have_key_events -->
      <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
      <img
        src="/assets/arrow.png"
        alt="Arrow icon"
        class="h-[2rem] absolute right-[1rem] bottom-[2rem] scale-110 interactable hidden lg:block cursor-pointer dark:invert opacity-60 hover:opacity-100 transition-all duration-300"
        data-type="internal"
        onclick={() => {
          const el = document.getElementById('contact');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      />
    </section>
  {/if}
</div>
