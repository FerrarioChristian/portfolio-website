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
      why: 'Volevo uno strumento veloce e sicuro per leggere i dati di gioco in tempo reale senza rallentare il simulatore. Con Rust sono riuscito a mappare direttamente la memoria condivisa di Windows senza allocazioni inutili a runtime.',
      project: 'Assetto Corsa RPM LEDs',
      slug: 'assettocorsa-rpm-led',
      techs: ['ESP32', 'WLED', 'UDP Sockets', 'Shared Memory'],
      metric: 'Loop a 60 Hz stabile con zero allocazioni dinamiche a runtime'
    },
    {
      id: 'spring',
      name: 'Spring Boot 3 & Java 23',
      category: 'Backend & Database',
      role: 'Web Backend, Auth & Database',
      why: 'L\'ho usato per costruire un\'applicazione gestionale completa. Mi è servito per capire come strutturare un backend serio: gestione delle sessioni, sicurezza contro attacchi comuni e un modello dati relazionale pulito con PostgreSQL.',
      project: 'TimeTrack',
      slug: 'timetrack',
      techs: ['Java 23', 'Spring Security', 'PostgreSQL', 'Thymeleaf', 'Tailwind'],
      metric: 'Codice ben organizzato a livelli (Controller, Service e Repository)'
    },
    {
      id: 'python',
      name: 'Python & NumPy / SciPy',
      category: 'Scientific & Numerical',
      role: 'Matematica applicata & Compressione immagini',
      why: 'Volevo capire davvero come funziona la compressione JPEG dietro le quinte. Invece di usare librerie già pronte, ho riscritto la DCT 2D e la quantizzazione da zero con NumPy per analizzare la perdita di qualità e il rate di compressione.',
      project: 'DCT Image Compressor',
      slug: 'jpeg-converter',
      techs: ['NumPy', 'SciPy', 'CustomTkinter', 'PSNR / MSE'],
      metric: 'Pipeline JPEG completa da zero con calcolo di errore PSNR/MSE'
    },
    {
      id: 'cpp',
      name: 'C++ & ESP8266 / Qt',
      category: 'Systems & Algorithms',
      role: 'Microcontrollori IoT & Algoritmi desktop',
      why: 'È il linguaggio con cui ho iniziato ad amare la programmazione a basso livello. L\'ho usato per programmare sensori su ESP8266 ottimizzando il sonno profondo (deep sleep), e per sviluppare un risolutore di Sudoku con interfaccia Qt.',
      project: 'Smart Museum Case',
      slug: 'iot-lab-course',
      techs: ['ESP8266', 'MQTT', 'InfluxDB', 'WoT', 'Telegram API'],
      metric: 'Consumo energetico ridotto su batteria e gestione interrupt hardware'
    },
    {
      id: 'svelte',
      name: 'SvelteKit & Tailwind CSS',
      category: 'Frontend & Web',
      role: 'Sviluppo interfaccia & User Experience',
      why: 'Ho scelto SvelteKit per questo portfolio perché adoro la sua semplicità e la nuova reattività di Svelte 5. Mi ha permesso di curare animazioni, dettagli visivi e curve morbide senza dover caricare bundle enormi.',
      project: 'Portfolio Website',
      slug: 'portfolio-website',
      techs: ['Svelte 5', 'Tailwind v4', 'TypeScript', 'Vite'],
      metric: 'Interfaccia scattante, caricamento istantaneo e 100/100 Lighthouse'
    },
    {
      id: 'duckdb',
      name: 'DuckDB & dbt',
      category: 'Data Engineering',
      role: 'Data Warehouse & Pipeline ELT',
      why: 'Durante il corso di Big Data volevo sperimentare un approccio moderno alle pipeline analitiche. Ho modellato i dati di vendita con uno schema a stella su DuckDB, usando dbt per trasformarli e testare la qualità dei dati.',
      project: 'E-Commerce Data Warehouse',
      slug: 'large-scale',
      techs: ['DuckDB', 'dbt', 'SQL', 'PostgreSQL', 'Tableau'],
      metric: 'Pipeline ELT completa con dati testati e dashboard interattiva'
    }
  ] : [
    {
      id: 'rust',
      name: 'Rust',
      category: 'Systems & Embedded',
      role: 'Telemetry Client & Shared Memory',
      why: 'I wanted a fast, safe tool to read real-time game data without slowing down the simulator. Rust let me map Windows shared memory directly, avoiding unnecessary allocations and memory leaks.',
      project: 'Assetto Corsa RPM LEDs',
      slug: 'assettocorsa-rpm-led',
      techs: ['ESP32', 'WLED', 'UDP Sockets', 'Shared Memory'],
      metric: 'Stable 60Hz loop with zero dynamic runtime allocations'
    },
    {
      id: 'spring',
      name: 'Spring Boot 3 & Java 23',
      category: 'Backend & Database',
      role: 'Web Backend, Auth & Database',
      why: 'Used to build a complete management web app. It helped me learn how to structure a solid backend: session management, standard web security, and clean relational data modeling with PostgreSQL.',
      project: 'TimeTrack',
      slug: 'timetrack',
      techs: ['Java 23', 'Spring Security', 'PostgreSQL', 'Thymeleaf', 'Tailwind'],
      metric: 'Clean layered structure across Controller, Service, and Repository'
    },
    {
      id: 'python',
      name: 'Python & NumPy / SciPy',
      category: 'Scientific & Numerical',
      role: 'Applied Math & Image Compression',
      why: 'I wanted to understand how JPEG compression actually works under the hood. Instead of using black-box libraries, I wrote the 2D DCT and quantization from scratch with NumPy to analyze image quality tradeoffs.',
      project: 'DCT Image Compressor',
      slug: 'jpeg-converter',
      techs: ['NumPy', 'SciPy', 'CustomTkinter', 'PSNR / MSE'],
      metric: 'Full JPEG pipeline from scratch with real-time PSNR/MSE error tracking'
    },
    {
      id: 'cpp',
      name: 'C++ & ESP8266 / Qt',
      category: 'Systems & Algorithms',
      role: 'IoT Microcontrollers & Desktop Tools',
      why: 'The language where I first developed my passion for systems programming. I used it on ESP8266 boards with deep-sleep power management, and to build a graphical Sudoku solver in Qt.',
      project: 'Smart Museum Case',
      slug: 'iot-lab-course',
      techs: ['ESP8266', 'MQTT', 'InfluxDB', 'WoT', 'Telegram API'],
      metric: 'Low-power battery profile with hardware interrupt handling'
    },
    {
      id: 'svelte',
      name: 'SvelteKit & Tailwind CSS',
      category: 'Frontend & Web',
      role: 'UI Engineering & User Experience',
      why: 'I picked SvelteKit for this portfolio because I love its simplicity and Svelte 5\'s new reactivity. It gave me full control over animations, custom squircles, and visual details without loading a massive JavaScript bundle.',
      project: 'Portfolio Website',
      slug: 'portfolio-website',
      techs: ['Svelte 5', 'Tailwind v4', 'TypeScript', 'Vite'],
      metric: 'Instant loading, fluid transitions, and a 100/100 Lighthouse score'
    },
    {
      id: 'duckdb',
      name: 'DuckDB & dbt',
      category: 'Data Engineering',
      role: 'Data Warehouse & Analytical Pipeline',
      why: 'Built during my Big Data coursework to explore modern analytical pipelines. I modeled multi-channel sales data into a star schema on DuckDB, using dbt to transform and validate the datasets.',
      project: 'E-Commerce Data Warehouse',
      slug: 'large-scale',
      techs: ['DuckDB', 'dbt', 'SQL', 'PostgreSQL', 'Tableau'],
      metric: 'Complete ELT pipeline with automated tests and visual dashboard'
    }
  ]);

  let selectedId = $state('rust');
  let activeItem = $derived(inspectorData.find(d => d.id === selectedId) || inspectorData[0]);
</script>

<div class="w-full max-w-[90rem] mx-auto flex flex-col justify-between">
  <!-- Header (Aligned with Site Typography) -->
  <div class="text-center mb-4 sm:mb-5 lg:mb-6">
    <p class="font-semibold text-sm sm:text-base text-[var(--color-brand-gray)] dark:text-gray-300 text-center mb-1">
      {locale === 'it' ? 'Competenze & Tecnologie' : 'Skills & Technologies'}
    </p>
    <h2 class="text-[2rem] sm:text-[2.4rem] lg:text-[2.85rem] font-bold text-center text-black dark:text-white tracking-tight">
      {locale === 'it' ? 'Come Uso le Tecnologie' : 'Tech Stack Inspector'}
    </h2>
  </div>

  <!-- Inspector Layout (Relaxed Proportions) -->
  <div class="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch">
    <!-- Left: Technology Selector (5 cols) -->
    <div class="lg:col-span-5 flex flex-col gap-2.5 sm:gap-3 justify-center">
      {#each inspectorData as item}
        <!-- svelte-ignore a11y_click_events_have_key_events -->
        <!-- svelte-ignore a11y_no_static_element_interactions -->
        <div
          class="interactable p-3 sm:p-3.5 lg:p-4 rounded-[calc(1.25rem*var(--brm))] corner-squircle border transition-colors duration-200 cursor-pointer flex items-center justify-between gap-3 text-left
            {selectedId === item.id
              ? 'bg-black text-white dark:bg-white dark:text-black border-black dark:border-white shadow-md'
              : 'bg-white dark:bg-black text-black dark:text-white border-gray-200 dark:border-white/10 hover:border-gray-400 dark:hover:border-white/30'}"
          data-type="action"
          onclick={() => selectedId = item.id}
          onmouseenter={() => selectedId = item.id}
        >
          <div class="truncate">
            <h4 class="font-bold text-sm sm:text-base tracking-tight truncate leading-tight">
              {item.name}
            </h4>
            <p class="text-xs opacity-75 mt-0.5 truncate font-normal">
              {item.category}
            </p>
          </div>

          <div class="flex items-center gap-2.5 shrink-0">
            <span class="text-xs opacity-60 hidden sm:inline truncate max-w-[8.5rem] font-normal">
              {item.project}
            </span>
            <span class="material-symbols-rounded text-base {selectedId === item.id ? 'opacity-100' : 'opacity-40'}">
              chevron_right
            </span>
          </div>
        </div>
      {/each}
    </div>

    <!-- Right: Detailed Spec Panel (7 cols - Relaxed & Aligned) -->
    <div class="lg:col-span-7 bg-white dark:bg-black border border-gray-200 dark:border-white/10 rounded-[calc(1.8rem*var(--brm))] corner-squircle p-5 sm:p-6 flex flex-col justify-between shadow-sm text-left">
      <div>
        <!-- Tech Header (No top-right chip, cohesive typography) -->
        <div class="mb-5">
          <div class="flex items-baseline justify-between gap-3 mb-1">
            <h3 class="text-xl sm:text-2xl font-bold text-black dark:text-white tracking-tight leading-snug">
              {activeItem.name}
            </h3>
            <span class="text-xs text-gray-500 dark:text-gray-400 font-medium shrink-0">
              {activeItem.category}
            </span>
          </div>
          <p class="text-xs sm:text-sm text-gray-600 dark:text-gray-300 font-normal">
            {activeItem.role}
          </p>
        </div>

        <!-- Why I used it (No matryoshka card, clean typography) -->
        <div class="mb-5">
          <h4 class="text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-zinc-500 mb-1.5">
            {locale === 'it' ? 'Perché l\'ho usato e cosa ci ho fatto' : 'Why I used it & what I built'}
          </h4>
          <p class="text-sm sm:text-[0.95rem] text-gray-800 dark:text-gray-200 leading-relaxed font-normal">
            {activeItem.why}
          </p>
        </div>

        <!-- Key Highlight (No bordered sub-card) -->
        <div class="mb-5">
          <h4 class="text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-zinc-500 mb-1">
            {locale === 'it' ? 'Aspetto chiave del progetto' : 'Key technical highlight'}
          </h4>
          <p class="text-sm sm:text-[0.95rem] font-medium text-black dark:text-white">
            {activeItem.metric}
          </p>
        </div>

        <!-- Techs involved -->
        <div>
          <h4 class="text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-zinc-500 mb-2">
            {locale === 'it' ? 'Strumenti e librerie collegate' : 'Related tools & ecosystem'}
          </h4>
          <div class="flex flex-wrap gap-1.5">
            {#each activeItem.techs as tech}
              <span class="text-xs font-mono px-2.5 py-1 rounded-full bg-white dark:bg-black border border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-300 font-medium">
                {tech}
              </span>
            {/each}
          </div>
        </div>
      </div>

      <!-- Footer action: Link to case study -->
      <div class="mt-4 pt-1 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div>
          <span class="text-xs text-gray-400 dark:text-zinc-500 block">
            {locale === 'it' ? 'Vedi nel progetto:' : 'See in project:'}
          </span>
          <span class="text-sm font-semibold text-black dark:text-white">
            {activeItem.project}
          </span>
        </div>

        <Button
          variant="filled"
          padding="py-2 px-4"
          href="/projects?scrollTo={activeItem.slug}"
          class="text-xs sm:text-sm font-medium"
        >
          {locale === 'it' ? 'Esplora Case Study' : 'View Case Study'}
        </Button>
      </div>
    </div>
  </div>
</div>
