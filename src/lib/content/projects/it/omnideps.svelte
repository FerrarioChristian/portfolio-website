<div class="flex flex-col gap-[6rem] pb-[4rem] mt-[2rem]">
  
  <!-- HERO -->
  <section class="text-center max-w-[54rem] mx-auto px-[5%] lg:px-0">
    <h2 class="text-[2.5rem] lg:text-[4rem] font-bold tracking-tight mb-[1.5rem] leading-tight dark:text-white">
      Architetture Software,<br/>a Velocità Nativa.
    </h2>
    <p class="text-[1.2rem] lg:text-[1.4rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed">
      Nei moderni sistemi software, la complessità architetturale si nasconde tra linguaggi diversi: backend in Java e Rust, microservizi in Python e librerie native in C e C++. <strong>Omnideps</strong> è un analizzatore architetturale poliglotto ad altissime prestazioni scritto in <strong>Rust</strong>. Alimentato dai parser formali di <strong>Tree-sitter</strong> ed elaborazione multi-core con <strong>Rayon</strong>, estrae, risolve e unifica tutte le dipendenze in un singolo grafo interattivo, integrando un visualizzatore web Cytoscape direttamente all'interno di un binario autonomo a zero dipendenze.
    </p>
  </section>

  <!-- 1. FEATURE: THE 3-PHASE PIPELINE (IMAGE/PREVIEW LEFT, TEXT RIGHT) -->
  <section class="grid grid-cols-1 md:grid-cols-2 gap-[4rem] items-center px-[5%] lg:px-0">
    <!-- Pipeline Visual Card -->
    <div class="order-2 md:order-1 bg-zinc-950 border border-zinc-800 rounded-[2rem] p-[2rem] shadow-2xl flex flex-col gap-4 text-white">
      <div class="flex items-center justify-between border-b border-zinc-800/80 pb-3">
        <div class="flex items-center gap-2">
          <span class="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse"></span>
          <span class="text-xs uppercase tracking-widest text-zinc-400 font-semibold font-mono">Formal Analysis Pipeline</span>
        </div>
        <span class="text-[0.7rem] uppercase tracking-wider text-cyan-400 bg-cyan-950/60 border border-cyan-800/60 px-2 py-0.5 rounded font-mono font-semibold">
          Rayon Core
        </span>
      </div>

      <!-- Phase 1: Alpha -->
      <div class="bg-zinc-900/60 border border-zinc-800/60 rounded-xl p-3.5 flex flex-col gap-1.5">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-2">
            <span class="text-xs font-mono font-bold bg-cyan-500/20 text-cyan-400 px-1.5 py-0.5 rounded">Phase α</span>
            <span class="text-xs font-semibold text-zinc-200">Parallel AST Extraction</span>
          </div>
          <span class="text-[0.65rem] text-zinc-400 font-mono">Tree-sitter CST</span>
        </div>
        <p class="text-[0.75rem] text-zinc-400 font-light leading-snug">
          Scansione ricorsiva multi-thread. Estrazione simultanea di moduli, classi, callable e riferimenti syntattici.
        </p>
      </div>

      <!-- Phase 2: Beta -->
      <div class="bg-zinc-900/60 border border-zinc-800/60 rounded-xl p-3.5 flex flex-col gap-1.5">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-2">
            <span class="text-xs font-mono font-bold bg-blue-500/20 text-blue-400 px-1.5 py-0.5 rounded">Phase β</span>
            <span class="text-xs font-semibold text-zinc-200">Name & Scope Resolution</span>
          </div>
          <span class="text-[0.65rem] text-zinc-400 font-mono">Lexical Scopes</span>
        </div>
        <p class="text-[0.75rem] text-zinc-400 font-light leading-snug">
          Risoluzione cross-file, binding del ricevitore (<code class="text-zinc-300">this</code> / <code class="text-zinc-300">self</code>), gerarchie di ereditarietà e propagazione dei generici.
        </p>
      </div>

      <!-- Phase 3: Gamma -->
      <div class="bg-zinc-900/60 border border-zinc-800/60 rounded-xl p-3.5 flex flex-col gap-1.5">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-2">
            <span class="text-xs font-mono font-bold bg-purple-500/20 text-purple-400 px-1.5 py-0.5 rounded">Phase γ</span>
            <span class="text-xs font-semibold text-zinc-200">Graph Synthesis</span>
          </div>
          <span class="text-[0.65rem] text-zinc-400 font-mono">16 Edge Kinds</span>
        </div>
        <p class="text-[0.75rem] text-zinc-400 font-light leading-snug">
          Costruzione del multigrafo architetturale canonico, serializzazione in Cytoscape JSON, Raw IR e CSV.
        </p>
      </div>

      <!-- Bottom Status Pill -->
      <div class="flex items-center justify-between bg-zinc-900/40 border border-zinc-800/60 rounded-xl px-3.5 py-2 text-xs text-zinc-400">
        <span>Throughput di analisi:</span>
        <span class="font-mono text-emerald-400 font-semibold">&gt; 250.000 LOC/s</span>
      </div>
    </div>

    <!-- Text Right -->
    <div class="order-1 md:order-2">
      <h3 class="text-[2rem] font-bold tracking-tight mb-[1.5rem] leading-tight dark:text-white">
        Pipeline a Tre Fasi:<br/>Precisione Senza Compromessi
      </h3>
      <p class="text-[1.1rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed mb-[1.5rem]">
        A differenza dei linter superficiali basati su espressioni regolari, Omnideps modella il processo di estrazione su una sequenza algebrica rigorosa: <strong>α &rarr; β &rarr; γ</strong>.
      </p>
      <p class="text-[1.1rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed mb-[1.5rem]">
        Nella fase <strong>α</strong>, la concorrenza di <strong>Rayon</strong> distribuisce i file dell'albero su pool di worker dedicati, analizzando i Concrete Syntax Tree (CST) con grammatiche Tree-sitter C-native.
      </p>
      <ul class="flex flex-col gap-[1rem] text-[1.05rem] text-gray-500 dark:text-gray-400 font-light">
        <li>
          <strong class="text-gray-900 dark:text-white font-semibold">Risoluzione Semantica β:</strong> Collega identificatori sintattici a definizioni reali, tracciando namespace complessi, importazioni transitive e tipi parametrici.
        </li>
        <li>
          <strong class="text-gray-900 dark:text-white font-semibold">Stack da 64MB Dedicato:</strong> Un thread worker sovradimensionato scongiura il rischio di stack overflow durante l'attraversamento di macro e tabelle C/C++ massive (come in FFmpeg o nel kernel Linux).
        </li>
      </ul>
    </div>
  </section>

  <!-- 2. FEATURE: UNIFIED POLYGLOT GRAPH & 16 EDGE KINDS (TEXT LEFT, IMAGE/PREVIEW RIGHT) -->
  <section class="grid grid-cols-1 md:grid-cols-2 gap-[4rem] items-center px-[5%] lg:px-0">
    <!-- Text Left -->
    <div>
      <h3 class="text-[2rem] font-bold tracking-tight mb-[1.5rem] leading-tight dark:text-white">
        Un Solo Grafo per<br/>Tutti i Tuoi Linguaggi
      </h3>
      <p class="text-[1.1rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed mb-[1.5rem]">
        I progetti reali non vivono in silos. Un wrapper CFFI Python invoca codice C; una micro-applicazione Java dialoga con un modulo nativo Rust. 
      </p>
      <p class="text-[1.1rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed mb-[1.5rem]">
        Omnideps scansiona insieme <strong>Java, Rust, Python, C e C++</strong>, riversando tutti i componenti all'interno del medesimo spazio di coordinate topologiche.
      </p>
      <ul class="flex flex-col gap-[1.5rem] text-[1.1rem] text-gray-500 dark:text-gray-400 font-light">
        <li>
          <strong class="text-gray-900 dark:text-white font-semibold">16 Tipi di Archi Formali:</strong>
          Distingue relazioni strutturali (<code class="text-zinc-700 dark:text-zinc-300">IsA</code>, <code class="text-zinc-700 dark:text-zinc-300">Implements</code>, <code class="text-zinc-700 dark:text-zinc-300">UsesFieldType</code>), comportamentali (<code class="text-zinc-700 dark:text-zinc-300">Calls</code>, <code class="text-zinc-700 dark:text-zinc-300">Instantiates</code>), e contenitive (<code class="text-zinc-700 dark:text-zinc-300">ModuleContainment</code>).
        </li>
        <li>
          <strong class="text-gray-900 dark:text-white font-semibold">Metriche di Accuratezza Verificate:</strong>
          Grazie alla suite di benchmark integrata (<code>omnideps benchmark run</code>), la precisione dell'estrazione supera il <strong>99%</strong> sui test di conformità architetturale.
        </li>
      </ul>
    </div>

    <!-- Visual Graph Mockup Card -->
    <div class="bg-zinc-950 border border-zinc-800 rounded-[2rem] p-[2rem] shadow-2xl flex flex-col gap-4 text-white">
      <div class="flex items-center justify-between border-b border-zinc-800/80 pb-3">
        <div class="flex items-center gap-2">
          <span class="text-xs uppercase tracking-widest text-zinc-400 font-semibold font-mono">Polyglot Multi-Graph</span>
        </div>
        <div class="flex gap-1.5 text-[0.65rem] font-mono">
          <span class="px-1.5 py-0.5 rounded bg-orange-950/60 border border-orange-800/60 text-orange-400">Java</span>
          <span class="px-1.5 py-0.5 rounded bg-amber-950/60 border border-amber-800/60 text-amber-400">Rust</span>
          <span class="px-1.5 py-0.5 rounded bg-blue-950/60 border border-blue-800/60 text-blue-400">Python</span>
          <span class="px-1.5 py-0.5 rounded bg-cyan-950/60 border border-cyan-800/60 text-cyan-400">C</span>
        </div>
      </div>

      <!-- Graph Canvas Schema -->
      <div class="relative bg-zinc-900/60 border border-zinc-800/60 rounded-xl p-4 h-64 overflow-hidden flex items-center justify-center">
        <!-- SVG Connecting Edges -->
        <svg class="absolute inset-0 w-full h-full pointer-events-none">
          <!-- C to Rust -->
          <line x1="60" y1="50" x2="160" y2="40" stroke="#a1a1aa" stroke-width="1.5" stroke-dasharray="3,3" />
          <!-- Rust to Java -->
          <line x1="160" y1="40" x2="260" y2="100" stroke="#38bdf8" stroke-width="1.8" />
          <!-- Python to Java -->
          <line x1="60" y1="180" x2="260" y2="100" stroke="#38bdf8" stroke-width="1.8" />
          <!-- Java Interface to Impl -->
          <line x1="260" y1="100" x2="350" y2="180" stroke="#4ade80" stroke-width="2" />
        </svg>

        <!-- Node 1: C main -->
        <div class="absolute left-6 top-8 bg-zinc-800 border border-cyan-500/40 rounded-lg px-2.5 py-1.5 text-xs shadow-lg flex flex-col">
          <div class="flex items-center gap-1.5">
            <span class="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
            <span class="font-mono font-semibold text-zinc-100">main()</span>
          </div>
          <span class="text-[0.6rem] text-zinc-400 font-mono">C • native::core</span>
        </div>

        <!-- Node 2: Rust AppRouter -->
        <div class="absolute left-32 top-4 bg-zinc-800 border border-amber-500/40 rounded-lg px-2.5 py-1.5 text-xs shadow-lg flex flex-col">
          <div class="flex items-center gap-1.5">
            <span class="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
            <span class="font-mono font-semibold text-zinc-100">AppRouter</span>
          </div>
          <span class="text-[0.6rem] text-zinc-400 font-mono">Rust • crate::server</span>
        </div>

        <!-- Node 3: Python Service -->
        <div class="absolute left-6 bottom-8 bg-zinc-800 border border-blue-500/40 rounded-lg px-2.5 py-1.5 text-xs shadow-lg flex flex-col">
          <div class="flex items-center gap-1.5">
            <span class="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
            <span class="font-mono font-semibold text-zinc-100">AuthService</span>
          </div>
          <span class="text-[0.6rem] text-zinc-400 font-mono">Python • app.auth</span>
        </div>

        <!-- Node 4: Java Interface (Selected) -->
        <div class="absolute right-28 top-20 bg-zinc-800 border-2 border-emerald-400 rounded-lg px-3 py-2 text-xs shadow-xl ring-2 ring-emerald-500/20 flex flex-col">
          <div class="flex items-center gap-1.5">
            <span class="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span class="font-mono font-bold text-white">DatabaseService</span>
          </div>
          <span class="text-[0.65rem] text-emerald-300 font-mono">Java • &lt;interface&gt;</span>
        </div>

        <!-- Node 5: Java Implementation -->
        <div class="absolute right-6 bottom-6 bg-zinc-800 border border-emerald-500/40 rounded-lg px-2.5 py-1.5 text-xs shadow-lg flex flex-col">
          <div class="flex items-center gap-1.5">
            <span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            <span class="font-mono font-semibold text-zinc-100">PostgresImpl</span>
          </div>
          <span class="text-[0.6rem] text-zinc-400 font-mono">Java • db.pg</span>
        </div>
      </div>

      <!-- Node Inspection Details -->
      <div class="bg-zinc-900/60 border border-zinc-800/60 rounded-xl p-3 flex justify-between items-center text-xs">
        <div class="flex items-center gap-2">
          <span class="font-semibold text-zinc-200">Relazioni Rilevate:</span>
          <span class="text-zinc-400 font-mono">In-Degree: 2 | Out-Degree: 1</span>
        </div>
        <span class="text-emerald-400 font-mono font-medium">Implements &amp; Calls</span>
      </div>
    </div>
  </section>

  <!-- 3. FEATURE: STANDALONE BINARY & EMBEDDED VISUALIZER (IMAGE/PREVIEW LEFT, TEXT RIGHT) -->
  <section class="grid grid-cols-1 md:grid-cols-2 gap-[4rem] items-center px-[5%] lg:px-0">
    <!-- Terminal Preview Card -->
    <div class="order-2 md:order-1 bg-zinc-950 border border-zinc-800 rounded-[2rem] p-[2rem] shadow-2xl flex flex-col gap-4 text-white font-mono">
      <!-- Terminal Header -->
      <div class="flex items-center justify-between border-b border-zinc-800/80 pb-3">
        <div class="flex items-center gap-2">
          <span class="w-3 h-3 rounded-full bg-red-500/80"></span>
          <span class="w-3 h-3 rounded-full bg-yellow-500/80"></span>
          <span class="w-3 h-3 rounded-full bg-green-500/80"></span>
        </div>
        <span class="text-xs text-zinc-400">omnideps-cli — zsh</span>
      </div>

      <!-- Terminal Body -->
      <div class="space-y-2 text-xs leading-relaxed">
        <p class="text-zinc-400">
          <span class="text-emerald-400">&dollar;</span> omnideps analyze ./src -o graph.json --raw -s -c report.csv
        </p>
        <p class="text-zinc-500">[INFO] Language discovery: 412 files across Java, Rust, Python, C</p>
        <p class="text-zinc-500">[INFO] Rayon thread pool: 12 worker threads allocated</p>
        <p class="text-zinc-300">[1/3] Phase α (AST Parse): completed in 42.8ms</p>
        <p class="text-zinc-300">[2/3] Phase β (Symbol Resolution): completed in 81.3ms</p>
        <p class="text-zinc-300">[3/3] Phase γ (Graph Synthesis): completed in 14.2ms</p>
        <div class="mt-2 pt-2 border-t border-zinc-800 text-zinc-400">
          <p><span class="text-cyan-400 font-bold">&check;</span> Nodi Estratti: <span class="text-zinc-100 font-bold">1.428</span></p>
          <p><span class="text-cyan-400 font-bold">&check;</span> Archi Tipizzati: <span class="text-zinc-100 font-bold">4.892</span> (Accuratezza: 99.4%)</p>
          <p class="text-emerald-400 mt-1 font-semibold">&rarr; Cytoscape graph saved: graph.json</p>
          <p class="text-emerald-400 font-semibold">&rarr; Raw IR saved: raw_graph.json</p>
        </div>
      </div>

      <!-- Embedded Axum Command Preview -->
      <div class="bg-zinc-900/60 border border-zinc-800/60 rounded-xl p-3 flex items-center justify-between text-xs">
        <span class="text-zinc-400">Web Visualizer: <code class="text-zinc-200">omnideps serve</code></span>
        <span class="text-emerald-400 font-bold">http://127.0.0.1:3000</span>
      </div>
    </div>

    <!-- Text Right -->
    <div class="order-1 md:order-2">
      <h3 class="text-[2rem] font-bold tracking-tight mb-[1.5rem] leading-tight dark:text-white">
        Zero Dipendenze.<br/>Visualizzatore Web Incorporato.
      </h3>
      <p class="text-[1.1rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed mb-[1.5rem]">
        Distribuire strumenti per sviluppatori non deve tradursi nell'obbligo di installare pesanti runtime esterni come Node.js, Python o JDK sulla macchina target.
      </p>
      <p class="text-[1.1rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed mb-[1.5rem]">
        Omnideps viene compilato come un <strong>singolo binario nativo autonomo</strong>. Grazie a <code class="text-zinc-700 dark:text-zinc-300">rust-embed</code> e al framework asincrono <strong>Axum</strong>, l'intera applicazione SvelteKit e il motore grafico Cytoscape sono compressi ed incorporati direttamente nei byte dell'eseguibile.
      </p>
      <p class="text-[1.1rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed">
        Lanciando <code>omnideps serve</code>, il binario attiva istantaneamente un micro-server HTTP in-memory ed apre automaticamente il browser, consentendo di esplorare con algoritmi fisici (fCoSE / CoSE) grafi complessi composti da decine di migliaia di elementi.
      </p>
    </div>
  </section>

  <!-- 4. BOX FINALE: SOTTO IL COFANO (ECCELLENZA TECNICA) -->
  <section class="bg-white dark:bg-black border border-gray-200 dark:border-white/10 rounded-[2rem] p-[4rem] text-center mt-[2rem]">
    <h3 class="text-[2.5rem] font-bold tracking-tight mb-[1.5rem] dark:text-white">Sotto il Cofano</h3>
    <p class="text-[1.2rem] text-gray-500 dark:text-gray-400 font-light max-w-[44rem] mx-auto leading-relaxed mb-[4rem]">
      Architettura software, complessità computazionale e scelte ingegneristiche di basso livello in Rust.
    </p>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-x-[4rem] gap-y-[3rem] text-left max-w-[55rem] mx-auto">
      <div>
        <h4 class="text-[1.1rem] font-bold dark:text-white uppercase tracking-widest mb-[0.7rem] text-orange-500">
          Concorrenza Rayon &amp; Stack da 64MB
        </h4>
        <p class="text-[1.05rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed">
          Parallelismo ad alte prestazioni senza race condition basato sulle zero-cost abstractions di Rust. Allocazione di un pool thread dedicato con stack da 64MB per eludere stack overflow su codebase monolitiche con macro ricorsive o array autogenerati in C/C++.
        </p>
      </div>

      <div>
        <h4 class="text-[1.1rem] font-bold dark:text-white uppercase tracking-widest mb-[0.7rem] text-cyan-500">
          Concrete Syntax Trees (Tree-sitter)
        </h4>
        <p class="text-[1.05rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed">
          Parsing incrementale a tolleranza d'errore basato su grammatiche C ufficiali. Il parser non necessita di toolchain o compilatori installati sulla macchina host e cattura con precisione token, commenti e annotazioni tipizzate nei diversi dialetti del codice.
        </p>
      </div>

      <div>
        <h4 class="text-[1.1rem] font-bold dark:text-white uppercase tracking-widest mb-[0.7rem] text-emerald-500">
          Language Product Line Architecture
        </h4>
        <p class="text-[1.05rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed">
          Sostituita la fragile proliferazione di controlli <code>if language == "x"</code> con una matrice di strategie ortogonali (Language Product Line). Regole sui moduli, keyword di istanza (<code class="text-zinc-700 dark:text-zinc-300">this</code> / <code class="text-zinc-700 dark:text-zinc-300">self</code>) e importazioni transitive sono configurabili dichiarativamente in JSON.
        </p>
      </div>

      <div>
        <h4 class="text-[1.1rem] font-bold dark:text-white uppercase tracking-widest mb-[0.7rem] text-purple-500">
          Embedded Axum Server &amp; Cytoscape Engine
        </h4>
        <p class="text-[1.05rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed">
          Micro-server asincrono Axum/Tokio compilato nel binario. Espone API REST native (<code class="text-zinc-700 dark:text-zinc-300">/api/nodes</code>, <code class="text-zinc-700 dark:text-zinc-300">/api/edges</code>, <code class="text-zinc-700 dark:text-zinc-300">/api/graph</code>) e serve la GUI Cytoscape con simulazioni force-directed (fCoSE) a 60 FPS e navigazione spaziale reattiva.
        </p>
      </div>
    </div>
  </section>

</div>
