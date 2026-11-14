<script lang="ts">
  import Button from '$lib/components/Button.svelte';
  import { getLocale } from '$lib/i18n/locale.svelte';

  let locale = $derived(getLocale());

  const layers = $derived(locale === 'it' ? [
    {
      id: 'l4',
      level: 'L4',
      name: 'Frontend & Interfacce',
      tagline: 'Interfacce pulite, reattività compilata e cura visiva',
      challenge: 'Costruire un’interfaccia moderna e veloce senza caricare librerie pesanti, facendo in modo che ogni animazione, cambio tema o interazione risulti immediata e naturale.',
      principles: [
        { label: 'Svelte 5 & Runes:', detail: 'Aggiornamenti mirati del DOM senza il peso del Virtual DOM, per mantenere il codice snello e leggibile.' },
        { label: 'Design e cura dei dettagli:', detail: 'Geometria con curve continue (squircles), tema scuro/chiaro ad alto contrasto e tipografia bilanciata.' },
        { label: 'Performance reali:', detail: 'Tempi di caricamento istantanei, zero scatti nel layout e attenzione all’accessibilità su ogni schermo.' }
      ],
      projectTitle: 'Portfolio Web Platform',
      projectSlug: 'portfolio-website',
      chips: ['Svelte 5 Runes', 'Tailwind v4', 'TypeScript', 'Squircle Geometry']
    },
    {
      id: 'l3',
      level: 'L3',
      name: 'Backend & Dati',
      tagline: 'Architettura ordinata, gestione dati e sicurezza',
      challenge: 'Costruire un’applicazione robusta e facile da mantenere nel tempo, gestendo autenticazione, permessi e database senza pasticci tra i vari livelli dell’applicazione.',
      principles: [
        { label: 'Separazione a strati:', detail: 'Controller snelli per le rotte, logica di dominio isolata nei Service e query delegate al Repository.' },
        { label: 'Integrità dei dati:', detail: 'Schemi relazionali chiari su PostgreSQL, con vincoli dichiarativi e gestione corretta delle transazioni.' },
        { label: 'Sicurezza delle sessioni:', detail: 'Autenticazione affidabile con Spring Security, protezione da CSRF e controllo dei permessi utente.' }
      ],
      projectTitle: 'TimeTrack Enterprise',
      projectSlug: 'timetrack',
      chips: ['Spring Boot 3', 'Java 23', 'PostgreSQL', 'Spring Data JPA']
    },
    {
      id: 'l2',
      level: 'L2',
      name: 'Algoritmi & Calcolo Numerico',
      tagline: 'Matematica applicata, complessità ed efficienza',
      challenge: 'Capire a fondo come funzionano algoritmi complessi implementandoli da zero, facendo attenzione ai tempi di calcolo e alla stabilità dei numeri con dataset grandi.',
      principles: [
        { label: 'Trasformata DCT 2D da zero:', detail: 'Compressione JPEG implementata con trasformata separabile su blocchi 8x8, riducendo drasticamente il costo computazionale.' },
        { label: 'Metodi iterativi per matrici sparse:', detail: 'Risoluzione di sistemi lineari enormi con Jacobi e Gauss-Seidel usando formati compressi (CSR/CSC) per non sprecare memoria.' },
        { label: 'Esplorazione dello spazio degli stati:', detail: 'Algoritmi di ricerca e backtracking (come in Sudoku Solver) con potatura dei rami per evitare esplosioni combinatorie.' }
      ],
      projectTitle: 'DCT Image Compressor',
      projectSlug: 'jpeg-converter',
      chips: ['Python / NumPy', 'C++', 'SciPy', '2D-DCT from Scratch']
    },
    {
      id: 'l1',
      level: 'L1',
      name: 'Networking & Protocolli',
      tagline: 'Latenza minima, pacchetti compatti e sistemi distribuiti',
      challenge: 'Inviare dati in tempo reale senza ritardi evidenti, scegliendo il protocollo giusto (UDP, MQTT, HTTP) in base a cosa serve davvero privilegiare tra velocità e affidabilità.',
      principles: [
        { label: 'Streaming UDP leggero:', detail: 'Pacchetti binari veloci per inviare continuamente la telemetria di gioco, preferendo l’ultimo dato fresco piuttosto che aspettare ritrasmissioni.' },
        { label: 'Architetture Pub/Sub con MQTT:', detail: 'Comunicazione disaccoppiata e leggera tra sensori microcontrollori e server per monitoraggio ambientale.' },
        { label: 'Formati binari diretti:', detail: 'Invio diretto di byte in memoria per evitare l’overhead e il parsing di JSON dove il millisecondo fa la differenza.' }
      ],
      projectTitle: 'Smart Museum Case & Telemetria',
      projectSlug: 'iot-lab-course',
      chips: ['UDP Sockets', 'MQTT Broker', 'InfluxDB', 'WoT Protocol']
    },
    {
      id: 'l0',
      level: 'L0',
      name: 'Basso Livello & Hardware',
      tagline: 'Linguaggi compilati, memoria condivisa e microcontrollori',
      challenge: 'Lavorare a stretto contatto con l’hardware e con la memoria di altri programmi, dove non ci sono garbage collector a fare da paracadute e le risorse sono contate.',
      principles: [
        { label: 'Memoria condivisa (Shared Memory):', detail: 'Lettura diretta della telemetria dalla memoria del simulatore a 60 Hz senza bloccare il gioco o appesantire la CPU.' },
        { label: 'Zero sprechi di memoria:', detail: 'Strutture dati compatte allocate sullo stack per avere tempi di esecuzione stabili e prevedibili.' },
        { label: 'Firmware su microcontrollori:', detail: 'Controllo di pin GPIO, timer hardware e gestione del consumo energetico su schede ESP32 ed ESP8266.' }
      ],
      projectTitle: 'Assetto Corsa RPM LEDs',
      projectSlug: 'assettocorsa-rpm-led',
      chips: ['Rust', 'ESP32 / ESP8266', 'C++', 'Shared Memory Pages']
    }
  ] : [
    {
      id: 'l4',
      level: 'L4',
      name: 'Frontend & UI Engineering',
      tagline: 'Clean interfaces, compiled reactivity & visual polish',
      challenge: 'Building a modern, snappy interface without bloated libraries, ensuring every animation, theme switch, or transition feels effortless and immediate.',
      principles: [
        { label: 'Svelte 5 Runes:', detail: 'Targeted DOM updates without Virtual DOM overhead, keeping the codebase clean, lean, and readable.' },
        { label: 'Thoughtful visual design:', detail: 'Continuous squircle corners, high-contrast dark/light modes, and balanced typography.' },
        { label: 'Real-world performance:', detail: 'Near-instant load times, zero layout shifts, and accessibility across devices.' }
      ],
      projectTitle: 'Portfolio Web Platform',
      projectSlug: 'portfolio-website',
      chips: ['Svelte 5 Runes', 'Tailwind v4', 'TypeScript', 'Squircle Geometry']
    },
    {
      id: 'l3',
      level: 'L3',
      name: 'Backend & Data',
      tagline: 'Clean architecture, data modeling & practical security',
      challenge: 'Designing a structured, maintainable backend while managing authentication, user permissions, and databases without messy coupling between layers.',
      principles: [
        { label: 'Layered separation:', detail: 'Lean controllers for routing, isolated domain logic in Services, and dedicated Repository queries.' },
        { label: 'Relational integrity:', detail: 'Clear relational schemas on PostgreSQL with declarative constraints and dependable transaction boundaries.' },
        { label: 'Sensible security:', detail: 'Solid session authentication with Spring Security, CSRF defense, and role-based access checks.' }
      ],
      projectTitle: 'TimeTrack Enterprise',
      projectSlug: 'timetrack',
      chips: ['Spring Boot 3', 'Java 23', 'PostgreSQL', 'Spring Data JPA']
    },
    {
      id: 'l2',
      level: 'L2',
      name: 'Algorithms & Numerical Computing',
      tagline: 'Applied mathematics, complexity & efficiency',
      challenge: 'Truly understanding complex algorithms by building them from first principles, keeping computational time and numerical stability in check on large datasets.',
      principles: [
        { label: '2D DCT from scratch:', detail: 'JPEG compression using a separable 8x8 block transform, cutting computational costs down drastically.' },
        { label: 'Iterative sparse solvers:', detail: 'Solving large linear systems with Jacobi and Gauss-Seidel using compressed formats (CSR/CSC) to save memory.' },
        { label: 'State-space exploration:', detail: 'Search algorithms and backtracking (like in the Sudoku Solver) with branch pruning to prevent combinatorial explosion.' }
      ],
      projectTitle: 'DCT Image Compressor',
      projectSlug: 'jpeg-converter',
      chips: ['Python / NumPy', 'C++', 'SciPy', '2D-DCT from Scratch']
    },
    {
      id: 'l1',
      level: 'L1',
      name: 'Networking & Protocols',
      tagline: 'Low latency, compact payloads & distributed systems',
      challenge: 'Sending data in real time without noticeable lag, picking the right protocol (UDP, MQTT, HTTP) based on what truly matters between speed and delivery guarantees.',
      principles: [
        { label: 'Lightweight UDP streaming:', detail: 'Fast binary packets for real-time game telemetry, prioritizing fresh data over delayed retransmissions.' },
        { label: 'Pub/Sub with MQTT:', detail: 'Decoupled, lightweight communication between microcontroller sensors and servers for environmental tracking.' },
        { label: 'Direct binary packing:', detail: 'In-memory byte layout bypassing JSON parsing overhead where every millisecond counts.' }
      ],
      projectTitle: 'Smart Museum Case & Telemetry',
      projectSlug: 'iot-lab-course',
      chips: ['UDP Sockets', 'MQTT Broker', 'InfluxDB', 'WoT Protocol']
    },
    {
      id: 'l0',
      level: 'L0',
      name: 'Low-Level & Hardware',
      tagline: 'Compiled code, shared memory & microcontrollers',
      challenge: 'Working close to hardware and other programs\' memory, where there is no garbage collector safety net and physical resources are strictly bounded.',
      principles: [
        { label: 'Shared Memory polling:', detail: 'Reading telemetry directly from racing simulator memory at 60 Hz without stalling the game or hogging CPU.' },
        { label: 'Zero memory waste:', detail: 'Compact stack-allocated structures for predictable, steady execution times.' },
        { label: 'Microcontroller firmware:', detail: 'Hardware timers, GPIO interrupts, and battery power management on ESP32 and ESP8266 boards.' }
      ],
      projectTitle: 'Assetto Corsa RPM LEDs',
      projectSlug: 'assettocorsa-rpm-led',
      chips: ['Rust', 'ESP32 / ESP8266', 'C++', 'Shared Memory Pages']
    }
  ]);

  let selectedId = $state('l0');
  let activeLayer = $derived(layers.find(l => l.id === selectedId) || layers[4]);
</script>

<div class="w-full max-w-[90rem] mx-auto flex flex-col justify-between">
  <!-- Section Header (Aligned with Site Typography) -->
  <div class="text-center mb-4 sm:mb-5 lg:mb-6">
    <p class="font-semibold text-sm sm:text-base text-[var(--color-brand-gray)] dark:text-gray-300 text-center mb-1">
      {locale === 'it' ? 'Esperienza & Ambiti' : 'Experience & Focus Areas'}
    </p>
    <h2 class="text-[2rem] sm:text-[2.4rem] lg:text-[2.85rem] font-bold text-center text-black dark:text-white tracking-tight">
      {locale === 'it' ? 'Lo Stack di Sviluppo' : 'The Computing Stack'}
    </h2>
  </div>

  <!-- Interactive 2-Column Stack (Relaxed Proportions) -->
  <div class="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch">
    <!-- Left: Stack Level Ladder (5 cols) -->
    <div class="lg:col-span-5 flex flex-col justify-center gap-2.5 sm:gap-3">
      {#each layers as item}
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
          <div class="flex items-center gap-3 min-w-0">
            <span class="text-xs font-semibold px-2 py-0.5 rounded-md shrink-0
              {selectedId === item.id
                ? 'bg-white/20 dark:bg-black/20 text-white dark:text-black'
                : 'bg-white dark:bg-black border border-gray-200 dark:border-white/10 text-gray-600 dark:text-zinc-400'}">
              {item.level}
            </span>
            <div class="truncate">
              <h3 class="font-bold text-sm sm:text-base tracking-tight truncate leading-tight">
                {item.name}
              </h3>
              <p class="text-xs opacity-75 truncate mt-0.5 hidden sm:block font-normal">
                {item.tagline}
              </p>
            </div>
          </div>

          <span class="material-symbols-rounded text-base shrink-0 {selectedId === item.id ? 'opacity-100' : 'opacity-40'}">
            chevron_right
          </span>
        </div>
      {/each}
    </div>

    <!-- Right: Layer Deep Dive Dossier (7 cols - Relaxed & Aligned) -->
    <div class="lg:col-span-7 bg-white dark:bg-black border border-gray-200 dark:border-white/10 rounded-[calc(1.8rem*var(--brm))] corner-squircle p-5 sm:p-6 flex flex-col justify-between shadow-sm text-left">
      <div>
        <!-- Dossier Header -->
        <div class="mb-5">
          <div class="flex items-center gap-2.5 mb-1">
            <span class="text-xs font-semibold px-2 py-0.5 rounded-md bg-black text-white dark:bg-white dark:text-black shrink-0">
              {activeLayer.level}
            </span>
            <h3 class="text-xl sm:text-2xl font-bold text-black dark:text-white tracking-tight leading-snug">
              {activeLayer.name}
            </h3>
          </div>
          <p class="text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-normal">
            {activeLayer.tagline}
          </p>
        </div>

        <!-- The Challenge -->
        <div class="mb-5">
          <h4 class="text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-zinc-500 mb-1.5">
            {locale === 'it' ? 'Cosa volevo risolvere' : 'What I wanted to solve'}
          </h4>
          <p class="text-sm sm:text-[0.95rem] text-gray-800 dark:text-gray-200 leading-relaxed font-normal">
            {activeLayer.challenge}
          </p>
        </div>

        <!-- Methodology -->
        <div>
          <h4 class="text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-zinc-500 mb-2">
            {locale === 'it' ? 'Come l\'ho affrontata' : 'How I approached it'}
          </h4>
          <div class="space-y-2.5">
            {#each activeLayer.principles as p}
              <div class="text-xs sm:text-sm leading-relaxed flex items-start gap-2.5">
                <span class="w-1.5 h-1.5 rounded-full bg-black dark:bg-white mt-2 shrink-0 opacity-40"></span>
                <p class="text-gray-600 dark:text-gray-300 font-normal">
                  <strong class="font-medium text-black dark:text-white">{p.label}</strong> {p.detail}
                </p>
              </div>
            {/each}
          </div>
        </div>
      </div>

      <!-- Dossier Bottom Bar: Evidence & Stack -->
      <div class="mt-4 pt-1 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div class="flex flex-wrap items-center gap-1.5">
          {#each activeLayer.chips as chip}
            <span class="text-xs font-mono px-2.5 py-1 rounded-full bg-white dark:bg-black border border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-300">
              {chip}
            </span>
          {/each}
        </div>

        <Button
          variant="outline"
          padding="py-2 px-4"
          href="/projects?scrollTo={activeLayer.projectSlug}"
          class="text-xs sm:text-sm font-medium shrink-0 self-start sm:self-auto"
        >
          {locale === 'it' ? 'Vedi Progetto' : 'View Project'}
        </Button>
      </div>
    </div>
  </div>
</div>
