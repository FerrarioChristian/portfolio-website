<div class="flex flex-col gap-[6rem] pb-[4rem]">
  <section class="text-center max-w-[50rem] mx-auto px-[5%] lg:px-0">
    <h2 class="text-[2.5rem] lg:text-[4rem] font-bold tracking-tight mb-[1.5rem] leading-tight dark:text-white">
      The power of algorithms,<br/>rendered visible.
    </h2>
    <p class="text-[1.2rem] lg:text-[1.4rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed">
      An educational instrument for state-space search exploration. The minimalist user interface unveils the recursive logic underpinning Sudoku constraint satisfaction, transforming theoretical concepts into tangible, visual reality.
    </p>
  </section>

  <section class="grid grid-cols-1 md:grid-cols-2 gap-[4rem] items-center px-[5%] lg:px-0">
    <div>
      <h3 class="text-[2.5rem] font-bold tracking-tight mb-[1.5rem] leading-tight dark:text-white">The Backtracking<br/>Search Algorithm</h3>
      <p class="text-[1.2rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed mb-[2rem]">
        The solver engine implements Depth-First Search (DFS) with constraint satisfaction. Instead of computing solutions in an opaque background thread, the interface exposes the entire decision traversal tree step-by-step.
      </p>
      <div class="flex flex-col gap-[1.5rem]">
        <div class="border-l-2 border-gray-200 dark:border-gray-800 pl-[1.5rem]">
          <h4 class="text-[1.1rem] font-bold dark:text-white mb-[0.2rem]">Timeline Playback Controls</h4>
          <p class="text-[1.1rem] text-gray-500 dark:text-gray-400 font-light">Fine-grained speed controls to play, pause, or step forward incrementally through individual branch decisions.</p>
        </div>
        <div class="border-l-2 border-gray-200 dark:border-gray-800 pl-[1.5rem]">
          <h4 class="text-[1.1rem] font-bold dark:text-white mb-[0.2rem]">Dead-End Visualization</h4>
          <p class="text-[1.1rem] text-gray-500 dark:text-gray-400 font-light">The user visually tracks the precise instant an invalid number triggers backtracking and tree unwinding.</p>
        </div>
      </div>
    </div>
    <div class="bg-gray-100 dark:bg-[#1a1a1a] rounded-[2rem] aspect-[4/5] flex items-center justify-center p-[2rem]">
      <span class="text-gray-400 font-medium">Qt GUI Showcase</span>
    </div>
  </section>

  <section class="bg-gray-50 dark:bg-[#111] rounded-[2rem] p-[4rem] mt-[2rem]">
    <div class="max-w-[40rem] mx-auto text-center mb-[4rem]">
      <h3 class="text-[2.5rem] font-bold tracking-tight mb-[1.5rem] dark:text-white">Excellence in C++ & Qt</h3>
      <p class="text-[1.2rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed">
        Engineered in modern C++, demonstrating clean architectural separation between recursive solver routines and GUI rendering lifecycles.
      </p>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-x-[4rem] gap-y-[3rem] text-left max-w-[55rem] mx-auto">
      <div>
        <h4 class="text-[1.1rem] font-bold dark:text-white uppercase tracking-widest mb-[0.7rem] text-purple-500">Signal-and-Slot Architecture</h4>
        <p class="text-[1.05rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed">
          Leveraging Qt's asynchronous signal-slot mechanism, the solver dispatches board updates to the event loop without locking the main rendering thread. This maintains a fluid interface free of window hangs even under deep recursive branches.
        </p>
      </div>
      <div>
        <h4 class="text-[1.1rem] font-bold dark:text-white uppercase tracking-widest mb-[0.7rem] text-purple-500">Zero-Allocation Memory Profile</h4>
        <p class="text-[1.05rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed">
          Visualizing exhaustive search generates tens of thousands of state mutations. The grid is passed strictly by reference and pointer semantics, eliminating heap allocation churn and preventing memory leaks during rapid search execution.
        </p>
      </div>
    </div>
  </section>

</div>
