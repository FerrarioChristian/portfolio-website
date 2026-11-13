<div class="flex flex-col gap-[6rem] pb-[4rem] mt-[2rem]">
  
  <!-- HERO -->
  <section class="text-center max-w-[54rem] mx-auto px-[5%] lg:px-0">
    <h2 class="text-[2.5rem] lg:text-[4rem] font-bold tracking-tight mb-[1.5rem] leading-tight dark:text-white">
      Software Architectures,<br/>at Native Speed.
    </h2>
    <p class="text-[1.2rem] lg:text-[1.4rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed">
      In modern software engineering, architectural complexity hides between language boundaries: Java and Rust backends, Python services, and native C/C++ core engines. <strong>Omnideps</strong> is a high-performance polyglot architectural dependency analyzer written in <strong>Rust</strong>. Powered by official <strong>Tree-sitter</strong> grammars and <strong>Rayon</strong> multi-core parallelism, it extracts, resolves, and unifies all project dependencies into a single interactive multi-graph, embedding a Cytoscape web visualizer directly inside a zero-dependency standalone binary.
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
          Multi-threaded recursive directory traversal. Simultaneous extraction of modules, classes, callables, and syntactical references.
        </p>
      </div>

      <!-- Phase 2: Beta -->
      <div class="bg-zinc-900/60 border border-zinc-800/60 rounded-xl p-3.5 flex flex-col gap-1.5">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-2">
            <span class="text-xs font-mono font-bold bg-blue-500/20 text-blue-400 px-1.5 py-0.5 rounded">Phase β</span>
            <span class="text-xs font-semibold text-zinc-200">Name &amp; Scope Resolution</span>
          </div>
          <span class="text-[0.65rem] text-zinc-400 font-mono">Lexical Scopes</span>
        </div>
        <p class="text-[0.75rem] text-zinc-400 font-light leading-snug">
          Cross-file resolution, receiver binding (<code class="text-zinc-300">this</code> / <code class="text-zinc-300">self</code>), inheritance graphs, and parameterized generic type propagation.
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
          Canonical multi-graph synthesis, serialization into Cytoscape JSON, Raw Intermediate Representation, and CSV metrics.
        </p>
      </div>

      <!-- Bottom Status Pill -->
      <div class="flex items-center justify-between bg-zinc-900/40 border border-zinc-800/60 rounded-xl px-3.5 py-2 text-xs text-zinc-400">
        <span>Analysis Throughput:</span>
        <span class="font-mono text-emerald-400 font-semibold">&gt; 250,000 LOC/s</span>
      </div>
    </div>

    <!-- Text Right -->
    <div class="order-1 md:order-2">
      <h3 class="text-[2rem] font-bold tracking-tight mb-[1.5rem] leading-tight dark:text-white">
        Three-Phase Pipeline:<br/>Rigorous Architectural Precision
      </h3>
      <p class="text-[1.1rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed mb-[1.5rem]">
        Unlike superficial regex-based code checkers, Omnideps formalizes static analysis into a mathematically sound sequential chain: <strong>α &rarr; β &rarr; γ</strong>.
      </p>
      <p class="text-[1.1rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed mb-[1.5rem]">
        During Phase <strong>α</strong>, <strong>Rayon</strong> concurrency shards file parsing across multi-threaded worker pools, processing Concrete Syntax Trees (CST) using official C-based Tree-sitter grammars.
      </p>
      <ul class="flex flex-col gap-[1rem] text-[1.05rem] text-gray-500 dark:text-gray-400 font-light">
        <li>
          <strong class="text-gray-900 dark:text-white font-semibold">Semantic Scope Resolution β:</strong> Links syntactical identifiers to concrete definitions across nested namespaces, transitive re-exports, and polymorphic hierarchies.
        </li>
        <li>
          <strong class="text-gray-900 dark:text-white font-semibold">Dedicated 64MB Stack Pool:</strong> A custom worker thread pool prevents stack overflow exceptions when navigating colossal recursive macro expansions or generated C/C++ lookup tables (such as FFmpeg or Linux headers).
        </li>
      </ul>
    </div>
  </section>

  <!-- 2. FEATURE: UNIFIED POLYGLOT GRAPH & 16 EDGE KINDS (TEXT LEFT, IMAGE/PREVIEW RIGHT) -->
  <section class="grid grid-cols-1 md:grid-cols-2 gap-[4rem] items-center px-[5%] lg:px-0">
    <!-- Text Left -->
    <div>
      <h3 class="text-[2rem] font-bold tracking-tight mb-[1.5rem] leading-tight dark:text-white">
        A Single Unified Graph<br/>Across All Languages
      </h3>
      <p class="text-[1.1rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed mb-[1.5rem]">
        Modern enterprise codebases do not live in isolation. Python microservices wrap C libraries; Java backends invoke Rust high-performance modules over FFI bridges.
      </p>
      <p class="text-[1.1rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed mb-[1.5rem]">
        Omnideps parses <strong>Java, Rust, Python, C, and C++</strong> simultaneously, placing all entities inside the same unified topological coordinate space.
      </p>
      <ul class="flex flex-col gap-[1.5rem] text-[1.1rem] text-gray-500 dark:text-gray-400 font-light">
        <li>
          <strong class="text-gray-900 dark:text-white font-semibold">16 Formal Dependency Edge Kinds:</strong>
          Distinguishes structural relationships (<code class="text-zinc-700 dark:text-zinc-300">IsA</code>, <code class="text-zinc-700 dark:text-zinc-300">Implements</code>, <code class="text-zinc-700 dark:text-zinc-300">UsesFieldType</code>), behavioral invocations (<code class="text-zinc-700 dark:text-zinc-300">Calls</code>, <code class="text-zinc-700 dark:text-zinc-300">Instantiates</code>), and containment hierarchies (<code class="text-zinc-700 dark:text-zinc-300">ModuleContainment</code>).
        </li>
        <li>
          <strong class="text-gray-900 dark:text-white font-semibold">Verified Quantitative Benchmarks:</strong>
          Equipped with an automated testing harness (<code>omnideps benchmark run</code>), extraction accuracy consistently achieves over <strong>99%</strong> precision and recall against ground-truth test suites.
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
          <span class="font-semibold text-zinc-200">Discovered Relations:</span>
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
          <p><span class="text-cyan-400 font-bold">&check;</span> Extracted Nodes: <span class="text-zinc-100 font-bold">1,428</span></p>
          <p><span class="text-cyan-400 font-bold">&check;</span> Typed Edges: <span class="text-zinc-100 font-bold">4,892</span> (Precision: 99.4%)</p>
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
        Zero Runtime Dependencies.<br/>Embedded Web Visualizer.
      </h3>
      <p class="text-[1.1rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed mb-[1.5rem]">
        Distributing developer tooling should never impose heavyweight runtime prerequisites such as Node.js, Python, or the JVM on the target machine.
      </p>
      <p class="text-[1.1rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed mb-[1.5rem]">
        Omnideps compiles into a <strong>single standalone native binary</strong>. Leveraging <code class="text-zinc-700 dark:text-zinc-300">rust-embed</code> and the asynchronous <strong>Axum</strong> web framework, the complete SvelteKit visualizer and Cytoscape physics engine are pre-bundled directly within the executable bytes.
      </p>
      <p class="text-[1.1rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed">
        Executing <code>omnideps serve</code> instantly boots an in-memory HTTP server and launches the default browser, rendering complex dependency networks of tens of thousands of nodes with force-directed physics layouts (fCoSE / CoSE) smoothly at 60 FPS.
      </p>
    </div>
  </section>

  <!-- 4. BOX FINALE: UNDER THE HOOD (TECHNICAL EXCELLENCE) -->
  <section class="bg-white dark:bg-black border border-gray-200 dark:border-white/10 rounded-[2rem] p-[4rem] text-center mt-[2rem]">
    <h3 class="text-[2.5rem] font-bold tracking-tight mb-[1.5rem] dark:text-white">Under the Hood</h3>
    <p class="text-[1.2rem] text-gray-500 dark:text-gray-400 font-light max-w-[44rem] mx-auto leading-relaxed mb-[4rem]">
      Software architecture, algorithmic complexity, and low-level Rust engineering decisions.
    </p>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-x-[4rem] gap-y-[3rem] text-left max-w-[55rem] mx-auto">
      <div>
        <h4 class="text-[1.1rem] font-bold dark:text-white uppercase tracking-widest mb-[0.7rem] text-orange-500">
          Rayon Concurrency &amp; 64MB Stack Pool
        </h4>
        <p class="text-[1.05rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed">
          Fearless data parallelism over directory trees using Rust's zero-cost abstractions. Spawns worker threads with a dedicated 64MB stack pool to eliminate stack overflow panics on massive recursive macros and generated C/C++ lookup arrays.
        </p>
      </div>

      <div>
        <h4 class="text-[1.1rem] font-bold dark:text-white uppercase tracking-widest mb-[0.7rem] text-cyan-500">
          Concrete Syntax Trees (Tree-sitter)
        </h4>
        <p class="text-[1.05rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed">
          Incremental, fault-tolerant syntax parsing powered by official C Tree-sitter grammars. Operates without requiring language compilers or SDKs on the host machine, accurately parsing tokens, comments, and typed annotations across evolving standards.
        </p>
      </div>

      <div>
        <h4 class="text-[1.1rem] font-bold dark:text-white uppercase tracking-widest mb-[0.7rem] text-emerald-500">
          Language Product Line Architecture
        </h4>
        <p class="text-[1.05rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed">
          Avoids hardcoded <code>if language == "x"</code> branches by modeling language behaviors as orthogonal strategy configurations. Module semantics, receiver keywords (<code class="text-zinc-700 dark:text-zinc-300">this</code> / <code class="text-zinc-700 dark:text-zinc-300">self</code>), and import rules are expressed declaratively in JSON.
        </p>
      </div>

      <div>
        <h4 class="text-[1.1rem] font-bold dark:text-white uppercase tracking-widest mb-[0.7rem] text-purple-500">
          Embedded Axum Server &amp; Cytoscape Engine
        </h4>
        <p class="text-[1.05rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed">
          An asynchronous Tokio/Axum microservice compiled into the executable binary. Serves native REST endpoints (<code class="text-zinc-700 dark:text-zinc-300">/api/nodes</code>, <code class="text-zinc-700 dark:text-zinc-300">/api/edges</code>, <code class="text-zinc-700 dark:text-zinc-300">/api/graph</code>) and streams the Cytoscape canvas with smooth force-directed fCoSE layouts at 60 FPS.
        </p>
      </div>
    </div>
  </section>

</div>
