<script lang="ts">
  import Button from '$lib/components/Button.svelte';
  import { getLocale } from '$lib/i18n/locale.svelte';

  let locale = $derived(getLocale());

  function jumpTo(slug: string) {
    const el = document.getElementById(slug);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }

  const projectsIndex = [
    { name: 'Sportrack', tech: 'Android, SQLite & Gemini AI', slug: 'sportrack', icon: 'fitness_center' },
    { name: 'Sudoku Solver', tech: 'C++, Qt Framework & DFS', slug: 'sudoku-solver', icon: 'grid_on' },
    { name: 'Sparse Iterative Solvers', tech: 'Python, SciPy & NumPy', slug: 'iterative-linear-solver', icon: 'functions' },
    { name: 'DCT Image Compressor', tech: 'Python, 2D DCT & Tkinter', slug: 'jpeg-converter', icon: 'compress' },
    { name: 'Timetrack', tech: 'Java 23, Spring Boot 3 & Postgres', slug: 'timetrack', icon: 'schedule' },
    { name: 'Assetto Corsa RPM LEDs', tech: 'Rust, ESP32 & UDP Telemetry', slug: 'assettocorsa-rpm-led', icon: 'speed' },
    { name: 'Svelte Unused Components', tech: 'Go, AST Parser & CLI', slug: 'svelte-unused-components', icon: 'terminal' },
    { name: 'Smart Museum Case', tech: 'C++, ESP8266, MQTT & WoT', slug: 'iot-lab-course', icon: 'sensors' },
    { name: 'E-Commerce Data Warehouse', tech: 'DuckDB, dbt, ELT & SQL', slug: 'large-scale', icon: 'database' },
    { name: 'Machine Learning Models', tech: 'Python, scikit-learn & MLP', slug: 'machine-learning', icon: 'psychology' },
    { name: 'Other Explorations & CS Lab', tech: 'Prolog, Lisp, BST, Snake', slug: 'minor-projects', icon: 'folder_open' }
  ];
</script>

<div class="flex items-center justify-between w-full mb-3 sm:mb-4">
  <a
    href="/"
    data-sveltekit-preload-data="hover"
    class="interactable inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-black dark:text-white hover:text-gray-500 dark:hover:text-gray-300 hover:underline hover:decoration-gray-300 underline-offset-[0.35rem] transition-colors duration-200"
  >
    <span class="material-symbols-rounded text-base">arrow_back</span>
    <span>{locale === 'it' ? 'Torna alla Home' : 'Back to Home'}</span>
  </a>
</div>

<div class="w-full max-w-[85rem] m-auto flex flex-col justify-between pt-1 pb-4">
  <!-- Top navigation line -->


  <!-- Editorial Split with Quick Index on the Right -->
  <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center mb-6">
    <!-- Left: Editorial Statement & Actions (7 cols - Exact Editorial Proportions) -->
    <div class="lg:col-span-7 flex flex-col justify-center text-left">
      <div>
        <h1 class="text-[2.25rem] sm:text-[3.25rem] lg:text-[3.8rem] font-bold text-black dark:text-white tracking-tight leading-[1.08] mb-5">
          {locale === 'it' ? 'Dalla telemetria a basso livello alle moderne piattaforme.' : 'From low-level telemetry to modern platforms.'}
        </h1>

        <p class="text-[1.05rem] lg:text-[1.15rem] text-[var(--color-brand-gray)] dark:text-gray-300 font-light leading-relaxed mb-6 max-w-2xl">
          {locale === 'it'
            ? 'Una raccolta curata di architetture e sistemi software: telemetria real-time in Rust per simulatori, elaborazione scientifica in Python, backend scalabili in Spring Boot 3 e interfacce reattive in SvelteKit.'
            : 'A curated collection of software architectures and systems: real-time telemetry in Rust, scientific processing in Python, scalable Spring Boot 3 backends, and fine-tuned SvelteKit interfaces.'}
        </p>

        <div class="flex flex-wrap items-center gap-4 mb-6">
          <Button
            variant="filled"
            padding="py-2.5 px-6"
            onclick={() => jumpTo('sportrack')}
            class="text-sm font-medium"
          >
            {locale === 'it' ? "Inizia l'Esplorazione ↓" : 'Start Exploring ↓'}
          </Button>

          <Button
            variant="outline"
            padding="py-2.5 px-6"
            href="https://github.com/FerrarioChristian"
            target="_blank"
            class="text-sm font-medium"
          >
            GitHub Profile
          </Button>
        </div>
      </div>

      <!-- Bottom Tech Summary -->
      <div class="pt-4 border-t border-gray-200 dark:border-zinc-800 text-xs font-mono text-gray-500 dark:text-zinc-400">
        <span>Rust &bull; C++ &bull; Java 23 &bull; Python &bull; Go &bull; TypeScript</span>
      </div>
    </div>

    <!-- Right: Quick Project Index (5 cols - Compact & Clean) -->
    <div class="lg:col-span-5 bg-[var(--color-brand-bg)] dark:bg-[#0a0a0a] border border-gray-200 dark:border-zinc-800 rounded-[calc(2rem*var(--brm))] corner-squircle p-4 sm:p-5 shadow-sm flex flex-col justify-between text-left">
      <div>
        <div class="flex items-center justify-between pb-2.5 mb-2.5 border-b border-gray-200 dark:border-zinc-800">
          <div class="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-gray-600 dark:text-zinc-300 font-semibold">
            <span class="material-symbols-rounded text-sm">list_alt</span>
            <span>{locale === 'it' ? 'Indice Rapido Progetti' : 'Quick Project Index'}</span>
          </div>
          <span class="text-[0.68rem] font-mono text-gray-400 dark:text-zinc-500">
            {locale === 'it' ? '10 Progetti + Lab' : '10 Projects + Lab'}
          </span>
        </div>

        <!-- Project Items List -->
        <div class="space-y-1 sm:space-y-1.5 max-h-[340px] sm:max-h-[370px] overflow-y-auto pr-1 no-scrollbar">
          {#each projectsIndex as project}
            <a
              href={`#${project.slug}`}
              class="interactable group py-1.5 sm:py-2 px-3 rounded-[calc(1rem*var(--brm))] corner-squircle bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 hover:border-gray-400 dark:hover:border-zinc-500 transition-colors duration-200 flex items-center justify-between cursor-pointer block"
              data-type="internal"
              onclick={(e) => { e.preventDefault(); jumpTo(project.slug); }}
            >
              <div class="flex items-center gap-2.5 min-w-0">
                <span class="material-symbols-rounded text-lg text-gray-400 dark:text-zinc-500 group-hover:text-black dark:group-hover:text-white transition-colors shrink-0">
                  {project.icon}
                </span>
                <div class="min-w-0">
                  <p class="text-xs sm:text-sm font-semibold text-black dark:text-white truncate">
                    {project.name}
                  </p>
                  <p class="text-[0.68rem] font-mono text-gray-500 dark:text-zinc-400 truncate">
                    {project.tech}
                  </p>
                </div>
              </div>
              <span class="material-symbols-rounded text-sm text-gray-400 group-hover:text-black dark:group-hover:text-white transition-colors shrink-0 ml-2">
                arrow_forward
              </span>
            </a>
          {/each}
        </div>
      </div>
    </div>
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
