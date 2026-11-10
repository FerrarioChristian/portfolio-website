<script lang="ts">
  import Button from '$lib/components/Button.svelte';
  import { getLocale } from '$lib/i18n/locale.svelte';

  let locale = $derived(getLocale());

  const layers = $derived(locale === 'it' ? [
    {
      id: 'l4',
      level: 'L4',
      name: 'UI & Design Engineering',
      tagline: 'Reattività fine-grained, accessibilità e geometria squircle',
      challenge: 'Superare i colli di bottiglia del Virtual DOM diffing per garantire frame rate stabili a 60 FPS con token CSS dinamici e micro-interazioni prive di jank.',
      principles: [
        { label: 'Reattività a Segnali:', detail: 'Runes di Svelte 5 compilati per mutazioni DOM mirate senza ricalcoli a cascata.' },
        { label: 'Design System & Squircles:', detail: 'Geometria continua (superellissi) con tokenizzazione CSS dinamica ad alto contrasto.' },
        { label: 'Zero-Overhead Auditing:', detail: '100/100 Lighthouse score, Cumulative Layout Shift pari a 0 e paint time minimo.' }
      ],
      projectTitle: 'Portfolio Web Platform',
      projectSlug: 'portfolio-website',
      chips: ['Svelte 5 Runes', 'Tailwind v4', 'TypeScript', 'Squircle Geometry']
    },
    {
      id: 'l3',
      level: 'L3',
      name: 'Enterprise & Persistence',
      tagline: 'Architetture transazionali ACID, isolamento a layer e sicurezza',
      challenge: 'Garantire consistenza transazionale a lungo termine, auditing immutabile e manutenibilità del codice senza accoppiamento stretto tra business logic e persistenza.',
      principles: [
        { label: 'Isolamento a 3 Strati:', detail: 'Netta separazione delle responsabilità tra Controller REST, Service di dominio e Repository JPA.' },
        { label: 'Integrità Relazionale:', detail: 'Schemi normalizzati su PostgreSQL con migrazioni versionate e vincoli dichiarativi.' },
        { label: 'Hardened Security:', detail: 'Session management robusto con Spring Security, difese CSRF e controllo accessi basato sui ruoli.' }
      ],
      projectTitle: 'TimeTrack Enterprise',
      projectSlug: 'timetrack',
      chips: ['Spring Boot 3', 'Java 23', 'PostgreSQL', 'Spring Data JPA']
    },
    {
      id: 'l2',
      level: 'L2',
      name: 'Algorithms & Scientific Core',
      tagline: 'Trasformate matriciali, complessità asintotica e calcolo numerico',
      challenge: 'Implementare algoritmi matematici complessi (decomposizioni frequenziali, matrici sparse) da principi primi, ottimizzando la complessità asintotica e minimizzando gli errori numerici.',
      principles: [
        { label: 'Decomposizione 2D DCT:', detail: 'Trasformata ortogonale separabile su blocchi 8x8 con complessità ridotta da O(N⁴) a O(N³).' },
        { label: 'Risolutori Iterativi Lineari:', detail: 'Algoritmi di Jacobi e Gauss-Seidel per matrici sparse con formati CSR/CSC ad alta dimensionalità.' },
        { label: 'Spazio di Stato & Branching:', detail: 'Ricerca esaustiva con Backtracking e DFS con potatura per problemi combinatori complessi.' }
      ],
      projectTitle: 'DCT Image Compressor',
      projectSlug: 'jpeg-converter',
      chips: ['Python / NumPy', 'C++', 'SciPy', '2D-DCT from Scratch']
    },
    {
      id: 'l1',
      level: 'L1',
      name: 'Protocols & Data Transport',
      tagline: 'Comunicazione a bassa latenza, packing binario e architetture IoT',
      challenge: 'Trasmettere telemetria e stati distribuiti su reti locali con latenze sub-millisecondo, evitando il sovraccarico e i buffer di riordino dei protocolli orientati alla connessione.',
      principles: [
        { label: 'UDP Streaming Diretto:', detail: 'Flusso continuo di pacchetti binari a dimensione fissa con scarto selettivo dei frame obsoleti.' },
        { label: 'Pub/Sub Broker MQTT:', detail: 'Distribuzione asincrona e disaccoppiata della telemetria per sensori IoT a basso consumo energetico.' },
        { label: 'Zero-Buffering Serialization:', detail: 'Packing dei byte direttamente in memoria escludendo parser JSON ad alto overhead.' }
      ],
      projectTitle: 'Smart Museum Case & Telemetria',
      projectSlug: 'iot-lab-course',
      chips: ['UDP Sockets', 'MQTT Broker', 'InfluxDB', 'WoT Protocol']
    },
    {
      id: 'l0',
      level: 'L0',
      name: 'Hardware & Bare-Metal',
      tagline: 'Memoria condivisa, assenza di GC e firmware per microcontrollori',
      challenge: 'Interagire direttamente con il silicio e con lo spazio di memoria di altri processi con scadenze temporali deterministiche e tolleranza zero per memory leaks o race conditions.',
      principles: [
        { label: 'Shared Memory Mapping:', detail: 'Mappatura diretta delle pagine di memoria fisica del simulatore per polling a 60 Hz senza lock pesanti.' },
        { label: 'Zero Allocazioni Heap:', detail: 'Strutture dati stack-allocated a dimensione fissa per azzerare le pause del Garbage Collector.' },
        { label: 'Microcontroller Firmware:', detail: 'Gestione interrupt hardware, sleep timer e pilotaggio LED indirizzabili su ESP32 ed ESP8266.' }
      ],
      projectTitle: 'Assetto Corsa RPM LEDs',
      projectSlug: 'assettocorsa-rpm-led',
      chips: ['Rust', 'ESP32 / ESP8266', 'C++', 'Shared Memory Pages']
    }
  ] : [
    {
      id: 'l4',
      level: 'L4',
      name: 'UI & Design Engineering',
      tagline: 'Fine-grained reactivity, accessibility & squircle geometry',
      challenge: 'Overcoming Virtual DOM diffing bottlenecks to maintain stable 60 FPS frame rates with dynamic CSS tokens and zero micro-jank.',
      principles: [
        { label: 'Signal-Based Reactivity:', detail: 'Compiled Svelte 5 Runes for surgically targeted DOM updates without cascade re-renders.' },
        { label: 'Design System & Squircles:', detail: 'Continuous mathematical superellipse geometry with high-contrast dynamic CSS tokens.' },
        { label: 'Zero-Overhead Auditing:', detail: '100/100 Lighthouse score, 0 Cumulative Layout Shift, and minimal paint latency.' }
      ],
      projectTitle: 'Portfolio Web Platform',
      projectSlug: 'portfolio-website',
      chips: ['Svelte 5 Runes', 'Tailwind v4', 'TypeScript', 'Squircle Geometry']
    },
    {
      id: 'l3',
      level: 'L3',
      name: 'Enterprise & Persistence',
      tagline: 'ACID transactional systems, layered isolation & security',
      challenge: 'Ensuring long-term transactional consistency, immutable auditing, and modular code without coupling business logic to database details.',
      principles: [
        { label: '3-Tier Layered Isolation:', detail: 'Strict separation of concerns across REST Controllers, domain Services, and JPA Repositories.' },
        { label: 'Relational Integrity:', detail: 'Normalized PostgreSQL schemas with versioned migrations and declarative constraints.' },
        { label: 'Hardened Security:', detail: 'Robust session management via Spring Security, CSRF defense, and Role-Based Access Control.' }
      ],
      projectTitle: 'TimeTrack Enterprise',
      projectSlug: 'timetrack',
      chips: ['Spring Boot 3', 'Java 23', 'PostgreSQL', 'Spring Data JPA']
    },
    {
      id: 'l2',
      level: 'L2',
      name: 'Algorithms & Scientific Core',
      tagline: 'Matrix transforms, asymptotic complexity & numerical computing',
      challenge: 'Implementing advanced mathematical algorithms (frequency transforms, sparse matrices) from first principles with optimal complexity and numerical precision.',
      principles: [
        { label: '2D DCT Decomposition:', detail: 'Separable orthogonal transform on 8x8 blocks cutting asymptotic cost from O(N⁴) down to O(N³).' },
        { label: 'Iterative Linear Solvers:', detail: 'Jacobi and Gauss-Seidel iterative methods for large-scale sparse matrices using CSR/CSC formats.' },
        { label: 'State-Space Branching:', detail: 'Exhaustive Backtracking and DFS branch-pruning for complex combinatorial search spaces.' }
      ],
      projectTitle: 'DCT Image Compressor',
      projectSlug: 'jpeg-converter',
      chips: ['Python / NumPy', 'C++', 'SciPy', '2D-DCT from Scratch']
    },
    {
      id: 'l1',
      level: 'L1',
      name: 'Protocols & Data Transport',
      tagline: 'Sub-millisecond messaging, binary packing & IoT architectures',
      challenge: 'Streaming telemetry and distributed state across local networks with sub-millisecond latency, bypassing connection-oriented handshakes and buffer stalls.',
      principles: [
        { label: 'Direct UDP Streaming:', detail: 'Continuous stream of fixed-size binary datagrams prioritizing fresh state over stale retransmissions.' },
        { label: 'MQTT Event Broker:', detail: 'Decoupled asynchronous Pub/Sub messaging for low-power distributed microcontrollers.' },
        { label: 'Zero-Buffering Serialization:', detail: 'In-memory byte packing bypassing high-overhead JSON parsers.' }
      ],
      projectTitle: 'Smart Museum Case & Telemetry',
      projectSlug: 'iot-lab-course',
      chips: ['UDP Sockets', 'MQTT Broker', 'InfluxDB', 'WoT Protocol']
    },
    {
      id: 'l0',
      level: 'L0',
      name: 'Hardware & Bare-Metal',
      tagline: 'Shared memory, zero GC jitter & microcontroller firmware',
      challenge: 'Interacting directly with physical silicon and external process memory spaces under deterministic timing constraints with zero tolerance for leaks.',
      principles: [
        { label: 'Shared Memory Mapping:', detail: 'Direct OS physical page mapping for 60Hz telemetry polling without lock contention.' },
        { label: 'Zero Runtime Heap Allocations:', detail: 'Stack-allocated fixed-size buffers eliminating Garbage Collector pause jitter.' },
        { label: 'Microcontroller Firmware:', detail: 'Hardware interrupt timers, low-power sleep cycles, and addressable LED driving on ESP32/ESP8266.' }
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
  <!-- Section Header (Compact) -->
  <div class="text-center mb-4 sm:mb-5">
    <p class="text-xs uppercase tracking-widest font-mono text-gray-400 dark:text-zinc-500 mb-1">
      {locale === 'it' ? 'ESPERIENZA & ARCHITETTURA' : 'EXPERIENCE & ARCHITECTURE'}
    </p>
    <h2 class="text-2xl sm:text-3xl lg:text-[2.2rem] font-bold text-black dark:text-white tracking-tight mb-1">
      {locale === 'it' ? 'Lo Stack Computazionale' : 'The Computing Stack'}
    </h2>
    <p class="text-xs sm:text-sm text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
      {locale === 'it'
        ? 'Una visione ingegneristica verticale: dal silicio e gestione della memoria fisica fino all\'interfaccia utente reattiva.'
        : 'A vertical engineering perspective: from bare-metal silicon and memory constraints up to reactive interfaces.'}
    </p>
  </div>

  <!-- Interactive 2-Column Stack (Compact) -->
  <div class="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5 items-stretch">
    <!-- Left: Stack Level Ladder (5 cols) -->
    <div class="lg:col-span-5 flex flex-col justify-between gap-1.5 sm:gap-2">
      {#each layers as item}
        <!-- svelte-ignore a11y_click_events_have_key_events -->
        <!-- svelte-ignore a11y_no_static_element_interactions -->
        <div
          class="interactable p-2.5 sm:p-3 rounded-[calc(1.1rem*var(--brm))] corner-squircle border transition-colors duration-200 cursor-pointer flex items-center justify-between gap-2.5 text-left
            {selectedId === item.id
              ? 'bg-black text-white dark:bg-white dark:text-black border-black dark:border-white shadow-sm'
              : 'bg-white dark:bg-[#080808] text-black dark:text-white border-gray-200 dark:border-zinc-800 hover:border-gray-400 dark:hover:border-zinc-600'}"
          data-type="action"
          onclick={() => selectedId = item.id}
          onmouseenter={() => selectedId = item.id}
        >
          <div class="flex items-center gap-2.5 sm:gap-3 min-w-0">
            <span class="font-mono text-xs font-bold px-2 py-0.5 rounded-[calc(0.5rem*var(--brm))] corner-squircle shrink-0
              {selectedId === item.id
                ? 'bg-white/20 dark:bg-black/20 text-white dark:text-black'
                : 'bg-gray-100 dark:bg-zinc-800 text-gray-600 dark:text-gray-400'}">
              {item.level}
            </span>
            <div class="truncate">
              <h3 class="font-bold text-xs sm:text-sm tracking-tight truncate leading-tight">
                {item.name}
              </h3>
              <p class="text-[0.68rem] opacity-70 font-mono truncate hidden sm:block">
                {item.tagline}
              </p>
            </div>
          </div>

          <span class="material-symbols-rounded text-sm shrink-0 {selectedId === item.id ? 'opacity-100' : 'opacity-30'}">
            chevron_right
          </span>
        </div>
      {/each}
    </div>

    <!-- Right: Layer Deep Dive Dossier (7 cols) -->
    <div class="lg:col-span-7 bg-[var(--color-brand-bg)] dark:bg-[#0a0a0a] border border-gray-200 dark:border-zinc-800 rounded-[calc(1.5rem*var(--brm))] corner-squircle p-4 sm:p-5 flex flex-col justify-between shadow-sm text-left">
      <div>
        <!-- Dossier Top Bar -->
        <div class="flex items-center justify-between pb-2.5 border-b border-gray-200 dark:border-zinc-800 mb-3">
          <div class="flex items-center gap-2">
            <span class="font-mono text-xs font-bold px-2 py-0.5 rounded-[calc(0.4rem*var(--brm))] corner-squircle bg-black text-white dark:bg-white dark:text-black">
              {activeLayer.level}
            </span>
            <span class="text-sm font-bold text-black dark:text-white tracking-tight">
              {activeLayer.name}
            </span>
          </div>
          <span class="text-[0.68rem] font-mono uppercase tracking-wider text-gray-400 dark:text-zinc-500">
            Architectural Layer
          </span>
        </div>

        <!-- The Engineering Challenge -->
        <div class="mb-3.5">
          <p class="text-[0.7rem] font-mono uppercase tracking-wider text-gray-400 dark:text-zinc-500 mb-1">
            {locale === 'it' ? 'Vincolo & Sfida Ingegneristica' : 'Engineering Constraint & Challenge'}
          </p>
          <p class="text-xs sm:text-[0.85rem] text-black dark:text-white font-light leading-relaxed bg-white/70 dark:bg-black/40 border border-gray-200 dark:border-zinc-800/80 rounded-[calc(0.9rem*var(--brm))] corner-squircle p-2.5 sm:p-3">
            {activeLayer.challenge}
          </p>
        </div>

        <!-- Design Principles & Methodology -->
        <div>
          <p class="text-[0.7rem] font-mono uppercase tracking-wider text-gray-400 dark:text-zinc-500 mb-1.5">
            {locale === 'it' ? 'Principi & Metodologia Applicata' : 'Core Principles & Applied Methodology'}
          </p>
          <div class="space-y-1.5">
            {#each activeLayer.principles as p}
              <div class="text-xs leading-relaxed flex items-start gap-1.5">
                <span class="w-1.5 h-1.5 rounded-full bg-black dark:bg-white mt-1.5 shrink-0 opacity-60"></span>
                <p class="text-gray-700 dark:text-gray-300">
                  <strong class="font-semibold text-black dark:text-white">{p.label}</strong> {p.detail}
                </p>
              </div>
            {/each}
          </div>
        </div>
      </div>

      <!-- Dossier Bottom Bar: Evidence & Stack -->
      <div class="pt-3 mt-3 border-t border-gray-200 dark:border-zinc-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
        <div class="flex flex-wrap items-center gap-1">
          {#each activeLayer.chips as chip}
            <span class="text-[0.65rem] font-mono px-2 py-0.5 rounded-full bg-gray-100 dark:bg-zinc-800/80 text-gray-700 dark:text-gray-300">
              {chip}
            </span>
          {/each}
        </div>

        <Button
          variant="outline"
          padding="py-1 px-3"
          href="/projects?scrollTo={activeLayer.projectSlug}"
          class="text-xs font-medium shrink-0 self-start sm:self-auto"
        >
          {locale === 'it' ? 'Vedi Progetto' : 'View Project'}
        </Button>
      </div>
    </div>
  </div>
</div>
