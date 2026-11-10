<script lang="ts">
  import Button from '$lib/components/Button.svelte';
  import { getLocale } from '$lib/i18n/locale.svelte';

  let locale = $derived(getLocale());

  const inspectorData = $derived(locale === 'it' ? [
    {
      id: 'rust',
      name: 'Rust',
      category: 'Systems & Embedded',
      role: 'Telemetry Client & Shared Memory',
      why: 'Scelto per la massima garanzia di memory-safety e latenze minime nella lettura della memoria condivisa da simulatori di guida.',
      project: 'Assetto Corsa RPM LEDs',
      slug: 'assettocorsa-rpm-led',
      techs: ['ESP32', 'WLED', 'UDP Sockets', 'Shared Memory'],
      metric: '0 allocazioni a runtime nel loop di telemetria a 60Hz'
    },
    {
      id: 'spring',
      name: 'Spring Boot 3 & Java 23',
      category: 'Backend Architecture',
      role: 'RESTful API, Security & Persistence',
      why: 'Impiegato per realizzare una piattaforma web full-stack complessa, con autenticazione basata su sessioni, Spring Data JPA e template engine modulare.',
      project: 'TimeTrack',
      slug: 'timetrack',
      techs: ['Java 23', 'Spring Security', 'PostgreSQL', 'Thymeleaf', 'Tailwind'],
      metric: 'Architettura a 3 layer (Controller, Service, Repository)'
    },
    {
      id: 'python',
      name: 'Python & NumPy / SciPy',
      category: 'Scientific Computing',
      role: 'Calcolo Matriciale & 2D DCT',
      why: 'Utilizzato per implementare la Discrete Cosine Transform bidimensionale da zero, stima dell\'entropia di Huffman e quantizzazione matriciale.',
      project: 'DCT Image Compressor',
      slug: 'jpeg-converter',
      techs: ['NumPy', 'SciPy', 'CustomTkinter', 'PSNR / MSE'],
      metric: 'Simulazione fedele dello standard JPEG con metriche in tempo reale'
    },
    {
      id: 'cpp',
      name: 'C++ & ESP8266 / Qt',
      category: 'Systems & Algorithms',
      role: 'Firmware Microcontrollori & GUI Desktop',
      why: 'Impiegato sia su microcontrollori per il campionamento sensori a basso consumo, sia per applicazioni desktop con algoritmo di Backtracking DFS.',
      project: 'Smart Museum Case',
      slug: 'iot-lab-course',
      techs: ['ESP8266', 'MQTT', 'InfluxDB', 'WoT', 'Telegram API'],
      metric: 'Autonomia energetica ottimizzata e gestione interrupt hardware'
    },
    {
      id: 'svelte',
      name: 'SvelteKit & Tailwind CSS',
      category: 'Frontend Engineering',
      role: 'Interfacce Reattive & Design System',
      why: 'Scelto per la sua assenza di Virtual DOM, la nuova reattività dei Runes di Svelte 5 e la capacità di creare esperienze utente fluide con angoli squircle personalizzati.',
      project: 'Portfolio Website',
      slug: 'portfolio-website',
      techs: ['Svelte 5', 'Tailwind v4', 'TypeScript', 'Vite'],
      metric: 'Lighthouse score 100/100 per performance e accessibilità'
    },
    {
      id: 'duckdb',
      name: 'DuckDB & dbt',
      category: 'Data Engineering',
      role: 'ELT Pipeline & Data Warehouse',
      why: 'Progettazione di uno Star Schema per l\'analisi delle vendite e-commerce multi-canale, con trasformazioni dbt e testing dei dati.',
      project: 'E-Commerce Data Warehouse',
      slug: 'large-scale',
      techs: ['DuckDB', 'dbt', 'SQL', 'PostgreSQL', 'Tableau'],
      metric: 'Modello analitico multidimensionale con tabelle di fatti e dimensioni'
    }
  ] : [
    {
      id: 'rust',
      name: 'Rust',
      category: 'Systems & Embedded',
      role: 'Telemetry Client & Shared Memory',
      why: 'Chosen for guaranteed memory safety and deterministic sub-millisecond latencies when polling shared memory from racing simulators.',
      project: 'Assetto Corsa RPM LEDs',
      slug: 'assettocorsa-rpm-led',
      techs: ['ESP32', 'WLED', 'UDP Sockets', 'Shared Memory'],
      metric: '0 runtime allocations within the 60Hz telemetry polling loop'
    },
    {
      id: 'spring',
      name: 'Spring Boot 3 & Java 23',
      category: 'Backend Architecture',
      role: 'RESTful API, Security & Persistence',
      why: 'Leveraged to engineer an enterprise-grade full-stack platform featuring session-based authentication, Spring Data JPA, and modular templating.',
      project: 'TimeTrack',
      slug: 'timetrack',
      techs: ['Java 23', 'Spring Security', 'PostgreSQL', 'Thymeleaf', 'Tailwind'],
      metric: 'Strict 3-tier architecture (Controller, Service, Repository)'
    },
    {
      id: 'python',
      name: 'Python & NumPy / SciPy',
      category: 'Scientific Computing',
      role: 'Matrix Computing & 2D DCT',
      why: 'Utilized to build the 2D Discrete Cosine Transform from first mathematical principles, alongside Huffman entropy modeling and quantization.',
      project: 'DCT Image Compressor',
      slug: 'jpeg-converter',
      techs: ['NumPy', 'SciPy', 'CustomTkinter', 'PSNR / MSE'],
      metric: 'Faithful JPEG standard simulation with real-time PSNR/MSE metrics'
    },
    {
      id: 'cpp',
      name: 'C++ & ESP8266 / Qt',
      category: 'Systems & Algorithms',
      role: 'MCU Firmware & Desktop GUI',
      why: 'Employed both on microcontrollers for low-power sensor sampling and on desktop GUI tools exploring animated DFS Backtracking trees.',
      project: 'Smart Museum Case',
      slug: 'iot-lab-course',
      techs: ['ESP8266', 'MQTT', 'InfluxDB', 'WoT', 'Telegram API'],
      metric: 'Optimized energy profile and hardware interrupt service routines'
    },
    {
      id: 'svelte',
      name: 'SvelteKit & Tailwind CSS',
      category: 'Frontend Engineering',
      role: 'Reactive Interfaces & Design Systems',
      why: 'Selected for its zero Virtual DOM overhead, Svelte 5 Runes fine-grained reactivity, and smooth UX styling with custom squircles.',
      project: 'Portfolio Website',
      slug: 'portfolio-website',
      techs: ['Svelte 5', 'Tailwind v4', 'TypeScript', 'Vite'],
      metric: '100/100 Lighthouse audit score for performance and accessibility'
    },
    {
      id: 'duckdb',
      name: 'DuckDB & dbt',
      category: 'Data Engineering',
      role: 'ELT Pipeline & Data Warehouse',
      why: 'Designing a dimensional Star Schema for multi-channel e-commerce sales analytics, featuring dbt data transformation and testing.',
      project: 'E-Commerce Data Warehouse',
      slug: 'large-scale',
      techs: ['DuckDB', 'dbt', 'SQL', 'PostgreSQL', 'Tableau'],
      metric: 'Multidimensional analytical schema with conformed dimensions'
    }
  ]);

  let selectedId = $state('rust');
  let activeItem = $derived(inspectorData.find(d => d.id === selectedId) || inspectorData[0]);
</script>

<div class="w-full max-w-[100rem] mx-auto flex flex-col justify-between">
  <!-- Header (Compact) -->
  <div class="text-center mb-3 sm:mb-4">
    <p class="text-xs uppercase tracking-widest font-mono text-gray-400 dark:text-zinc-500 mb-1">
      {locale === 'it' ? 'ESPERIENZA & TECNOLOGIE' : 'EXPERIENCE & TECHNOLOGIES'}
    </p>
    <h2 class="text-2xl sm:text-3xl lg:text-[2.2rem] font-bold text-black dark:text-white tracking-tight mb-1">
      Tech Stack Inspector
    </h2>
    <p class="text-xs sm:text-sm text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
      {locale === 'it'
        ? 'Seleziona una tecnologia a sinistra per ispezionare il motivo della scelta architetturale e il progetto in cui è applicata.'
        : 'Select a technology on the left to inspect the architectural rationale and its practical implementation.'}
    </p>
  </div>

  <!-- Inspector Layout (Compact) -->
  <div class="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5 items-stretch">
    <!-- Left: Technology Selector (5 cols) -->
    <div class="lg:col-span-5 flex flex-col gap-1.5 sm:gap-2 justify-center">
      {#each inspectorData as item}
        <!-- svelte-ignore a11y_click_events_have_key_events -->
        <!-- svelte-ignore a11y_no_static_element_interactions -->
        <div
          class="interactable p-2.5 sm:p-3 rounded-[calc(1.1rem*var(--brm))] corner-squircle border transition-colors duration-200 cursor-pointer flex items-center justify-between gap-2.5
            {selectedId === item.id
              ? 'bg-black text-white dark:bg-white dark:text-black border-black dark:border-white shadow-sm'
              : 'bg-white dark:bg-[#080808] text-black dark:text-white border-gray-200 dark:border-zinc-800 hover:border-gray-400 dark:hover:border-zinc-600'}"
          data-type="action"
          onclick={() => selectedId = item.id}
          onmouseenter={() => selectedId = item.id}
        >
          <div>
            <h4 class="font-bold text-xs sm:text-sm tracking-tight">
              {item.name}
            </h4>
            <p class="text-[0.68rem] opacity-70 mt-0.5 font-mono">
              {item.category}
            </p>
          </div>

          <div class="flex items-center gap-2">
            <span class="text-[0.68rem] opacity-60 font-mono hidden sm:inline truncate max-w-[8rem]">
              {item.project}
            </span>
            <span class="material-symbols-rounded text-sm opacity-50">
              chevron_right
            </span>
          </div>
        </div>
      {/each}
    </div>

    <!-- Right: Detailed Spec Panel (7 cols) -->
    <div class="lg:col-span-7 bg-[var(--color-brand-bg)] dark:bg-[#0a0a0a] border border-gray-200 dark:border-zinc-800 rounded-[calc(1.5rem*var(--brm))] corner-squircle p-4 sm:p-5 flex flex-col justify-between shadow-sm text-left">
      <div>
        <div class="flex flex-wrap items-center justify-between gap-2 pb-2.5 border-b border-gray-200 dark:border-zinc-800 mb-3">
          <div>
            <span class="text-[0.68rem] font-mono text-gray-400 dark:text-zinc-500 uppercase tracking-wider block">
              {activeItem.category}
            </span>
            <h3 class="text-lg sm:text-xl font-bold text-black dark:text-white tracking-tight">
              {activeItem.name}
            </h3>
          </div>

          <span class="px-2.5 py-0.5 rounded-full text-xs font-mono bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-zinc-700">
            {activeItem.role}
          </span>
        </div>

        <!-- Architectural Rationale -->
        <div class="mb-3">
          <h4 class="text-[0.7rem] font-mono uppercase tracking-wider text-gray-400 dark:text-zinc-500 mb-1">
            {locale === 'it' ? 'Motivazione della scelta architetturale:' : 'Architectural choice rationale:'}
          </h4>
          <p class="text-xs sm:text-[0.85rem] text-gray-700 dark:text-gray-300 font-light leading-relaxed bg-white/70 dark:bg-black/40 border border-gray-200 dark:border-zinc-800/80 rounded-[calc(0.9rem*var(--brm))] corner-squircle p-2.5 sm:p-3">
            {activeItem.why}
          </p>
        </div>

        <!-- Key Metric / Milestone -->
        <div class="mb-3 p-2.5 sm:p-3 rounded-[calc(0.9rem*var(--brm))] corner-squircle bg-white dark:bg-[#080808] border border-gray-200 dark:border-zinc-800">
          <div class="flex items-center gap-1.5 text-[0.68rem] font-mono uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-0.5">
            <span class="material-symbols-rounded text-sm">verified</span>
            <span>{locale === 'it' ? 'Metrica / Risultato Chiave' : 'Key Metric / Benchmark'}</span>
          </div>
          <p class="text-xs sm:text-sm font-semibold text-black dark:text-white">
            {activeItem.metric}
          </p>
        </div>

        <!-- Techs involved -->
        <div>
          <h4 class="text-[0.7rem] font-mono uppercase tracking-wider text-gray-400 dark:text-zinc-500 mb-1.5">
            {locale === 'it' ? 'Ecosistema Tecnologico Correlato' : 'Correlated Tech Ecosystem'}
          </h4>
          <div class="flex flex-wrap gap-1">
            {#each activeItem.techs as tech}
              <span class="text-[0.65rem] font-mono px-2 py-0.5 rounded-full bg-gray-100 dark:bg-zinc-800/80 text-gray-700 dark:text-gray-300 font-medium">
                {tech}
              </span>
            {/each}
          </div>
        </div>
      </div>

      <!-- Footer action: Link to case study -->
      <div class="pt-3 mt-3 border-t border-gray-200 dark:border-zinc-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5">
        <div>
          <span class="text-[0.68rem] font-mono text-gray-400 dark:text-zinc-500 block">
            {locale === 'it' ? 'Progetto Implementativo:' : 'Implementation Project:'}
          </span>
          <span class="text-xs sm:text-sm font-bold text-black dark:text-white">
            {activeItem.project}
          </span>
        </div>

        <Button
          variant="filled"
          padding="py-1 px-3.5"
          href="/projects?scrollTo={activeItem.slug}"
          class="text-xs font-medium"
        >
          {locale === 'it' ? 'Esplora Case Study' : 'View Case Study'}
        </Button>
      </div>
    </div>
  </div>
</div>
