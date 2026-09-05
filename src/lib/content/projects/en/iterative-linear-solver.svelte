<div class="flex flex-col gap-[6rem] pb-[4rem] mt-[2rem]">
  
  <!-- HERO -->
  <section class="text-center max-w-[50rem] mx-auto px-[5%] lg:px-0">
    <h2 class="text-[2.5rem] lg:text-[4rem] font-bold tracking-tight mb-[1.5rem] leading-tight dark:text-white">
      Scientific Computing,<br/>at massive scale.
    </h2>
    <p class="text-[1.2rem] lg:text-[1.4rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed">
      A comprehensive Python library for solving high-dimensional sparse linear systems, analyzing matrix topology, and evaluating the convergence dynamics of iterative numerical algorithms.
    </p>
  </section>

  <!-- 1. IMAGE LEFT -->
  <section class="grid grid-cols-1 md:grid-cols-2 gap-[4rem] items-center px-[5%] lg:px-0">
    <div class="order-2 md:order-1 bg-gray-100 dark:bg-[#1a1a1a] rounded-[2rem] aspect-[4/3] flex items-center justify-center p-[2rem]">
      <span class="text-gray-400 font-medium text-center">Image: Structural Analysis<br/>and Spy Plots</span>
    </div>
    <div class="order-1 md:order-2">
      <h3 class="text-[2rem] font-bold tracking-tight mb-[1.5rem] leading-tight dark:text-white">Structural Analysis<br/>& Spy Plots</h3>
      <p class="text-[1.1rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed mb-[1.5rem]">
        Before deploying a solver blindly, understanding the spectral and topological properties of the linear operator is paramount. The dedicated <code>MatrixAnalyzer</code> module evaluates these mathematical invariants.
      </p>
      <p class="text-[1.1rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed">
        Beyond evaluating symmetry, positive definiteness, strict diagonal dominance, and Condition Number heuristics, the module renders 2D vector <strong>Spy Plots</strong>: visual representations mapping non-zero coordinate distributions directly from Matrix Market (<code>.mtx</code>) datasets.
      </p>
    </div>
  </section>

  <!-- 2. IMAGE RIGHT -->
  <section class="grid grid-cols-1 md:grid-cols-2 gap-[4rem] items-center px-[5%] lg:px-0">
    <div>
      <h3 class="text-[2rem] font-bold tracking-tight mb-[1.5rem] leading-tight dark:text-white">The Arsenal of<br/>Iterative Solvers</h3>
      <p class="text-[1.1rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed mb-[1.5rem]">
        The core architecture adopts an extensible object-oriented hierarchy rooted in an abstract <code>BaseSolver</code>, implementing four foundational iterative strategies.
      </p>
      <ul class="flex flex-col gap-[1.5rem] text-[1.1rem] text-gray-500 dark:text-gray-400 font-light mt-[2rem]">
        <li><strong class="text-gray-900 dark:text-white font-semibold">Stationary Splitting:</strong> Jacobi and Gauss-Seidel, straightforward but slowly converging, highly dependent on spectral radius and diagonal dominance.</li>
        <li><strong class="text-gray-900 dark:text-white font-semibold">Krylov / Descent Methods:</strong> Steepest Descent and Conjugate Gradient (CG), which dynamically compute A-orthogonal search directions updated through successive residual projections.</li>
      </ul>
    </div>
    <div class="bg-gray-100 dark:bg-[#1a1a1a] rounded-[2rem] aspect-[4/3] flex items-center justify-center p-[2rem]">
      <span class="text-gray-400 font-medium text-center">Image: Mathematical Formulations<br/>& Solvers Hierarchy</span>
    </div>
  </section>

  <!-- 3. IMAGE LEFT -->
  <section class="grid grid-cols-1 md:grid-cols-2 gap-[4rem] items-center px-[5%] lg:px-0">
    <div class="order-2 md:order-1 bg-gray-100 dark:bg-[#1a1a1a] rounded-[2rem] aspect-[4/3] flex items-center justify-center p-[2rem]">
      <span class="text-gray-400 font-medium text-center">Image: Command Line Interface</span>
    </div>
    <div class="order-1 md:order-2">
      <h3 class="text-[2rem] font-bold tracking-tight mb-[1.5rem] leading-tight dark:text-white">Interactive CLI &<br/>Demo Automation</h3>
      <p class="text-[1.1rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed mb-[1.5rem]">
        To make the toolchain effortless in research clusters and CI scripts, I developed a full-featured Command Line Interface (CLI) to orchestrate runs.
      </p>
      <p class="text-[1.1rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed">
        Through command-line flags (such as <code>-t</code> for stopping tolerance thresholds or <code>--max-iter</code>), users can configure comparative benchmark experiments, outputting structured tabular logs and streaming performance metrics into exportable CSV datasets.
      </p>
    </div>
  </section>

  <!-- 4. IMAGE RIGHT -->
  <section class="grid grid-cols-1 md:grid-cols-2 gap-[4rem] items-center px-[5%] lg:px-0">
    <div>
      <h3 class="text-[2rem] font-bold tracking-tight mb-[1.5rem] leading-tight dark:text-white">Convergence Analysis<br/>& Plotting</h3>
      <p class="text-[1.1rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed mb-[1.5rem]">
        Large-scale computations only provide scientific value when interpreted correctly. The visualization engine uses <strong>Matplotlib</strong> to generate clean, publication-grade figures.
      </p>
      <p class="text-[1.1rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed">
        The generated curves compare relative error decay, compute durations, and iteration steps across decreasing tolerances, demonstrating the decisive superiority of Conjugate Gradient over classical stationary methods on symmetric positive-definite systems.
      </p>
    </div>
    <div class="bg-gray-100 dark:bg-[#1a1a1a] rounded-[2rem] aspect-[4/3] flex items-center justify-center p-[2rem]">
      <span class="text-gray-400 font-medium text-center">Image: Convergence Plots</span>
    </div>
  </section>

  <!-- BOX FINALE: UNDER THE HOOD -->
  <section class="bg-gray-50 dark:bg-[#111] rounded-[2rem] p-[4rem] text-center mt-[2rem]">
    <h3 class="text-[2.5rem] font-bold tracking-tight mb-[1.5rem] dark:text-white">Scientific Rigor</h3>
    <p class="text-[1.2rem] text-gray-500 dark:text-gray-400 font-light max-w-[40rem] mx-auto leading-relaxed mb-[4rem]">
      Manipulating large systems required preventing memory allocation explosions during iterative updates.
    </p>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-x-[4rem] gap-y-[3rem] text-left max-w-[55rem] mx-auto">
      <div>
        <h4 class="text-[1.1rem] font-bold dark:text-white uppercase tracking-widest mb-[0.7rem] text-blue-500">CSR Sparse Formats / SciPy</h4>
        <p class="text-[1.05rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed">
          Standard direct matrix factorizations cause catastrophic memory fill-in. The library executes sparse matrix-vector products strictly in <strong>Compressed Sparse Row (CSR)</strong> representation, storing and operating exclusively on non-zero entries with minimal memory footprint.
        </p>
      </div>
      <div>
        <h4 class="text-[1.1rem] font-bold dark:text-white uppercase tracking-widest mb-[0.7rem] text-blue-500">SuiteSparse Matrix Market Ingestion</h4>
        <p class="text-[1.05rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed">
          With custom parsers for coordinate-format <code>.mtx</code> files, the library benchmarks realistic matrices sourced from academic engineering repositories (such as the SuiteSparse collection), validating algorithm stability against real-world mechanical and thermodynamic models.
        </p>
      </div>
    </div>
  </section>

</div>
