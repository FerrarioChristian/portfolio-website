<div class="flex flex-col gap-[6rem] pb-[4rem]">
  <section class="text-center max-w-[50rem] mx-auto px-[5%] lg:px-0">
    <h2 class="text-[2.5rem] lg:text-[4rem] font-bold tracking-tight mb-[1.5rem] leading-tight dark:text-white">
      Less code, more performance.
    </h2>
    <p class="text-[1.2rem] lg:text-[1.4rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed">
      Maintaining a clean codebase in SvelteKit becomes challenging as applications scale. I developed a high-throughput CLI tool written in Go engineered to scan thousands of source files in milliseconds, identifying orphaned or unused <code>.svelte</code> components.
    </p>
  </section>

  <section class="grid grid-cols-1 md:grid-cols-2 gap-[4rem] items-center px-[5%] lg:px-0">
    <div>
      <h3 class="text-[2.5rem] font-bold tracking-tight mb-[1.5rem] leading-tight dark:text-white">Engineered for<br/>Throughput</h3>
      <p class="text-[1.2rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed mb-[2rem]">
        The choice of <strong class="text-gray-900 dark:text-white">Go (Golang)</strong> was deliberate. The objective was a single, statically compiled cross-platform binary free of external dependencies or bloated <code>node_modules</code> footprints.
      </p>
      
      <ul class="flex flex-col gap-[1.5rem] text-[1.1rem] text-gray-500 dark:text-gray-400 font-light">
        <li><strong class="text-gray-900 dark:text-white font-semibold">Recursive Dependency Tracing:</strong> Powered by the <code>-r</code> flag, the engine traverses the full import graph, discovering cascading dead code where components are imported exclusively by other orphaned files.</li>
        <li><strong class="text-gray-900 dark:text-white font-semibold">Goroutine Concurrency:</strong> File indexing leverages lightweight Go routines and worker pools to analyze directory trees concurrently, delivering sub-second execution on large monorepos.</li>
        <li><strong class="text-gray-900 dark:text-white font-semibold">CI/CD Ready:</strong> Rich command-line flags (such as <code>-i</code> for ignore rules and <code>-np</code> for non-interactive exit codes) enable seamless pipeline integration as quality gate checks.</li>
      </ul>
    </div>
    <div class="bg-gray-100 dark:bg-[#1a1a1a] rounded-[2rem] aspect-[4/5] flex items-center justify-center p-[2rem]">
      <span class="text-gray-400 font-medium text-center">CLI Terminal Output<br/>svelte-unused-components</span>
    </div>
  </section>

  <section class="bg-gray-50 dark:bg-[#111] rounded-[2rem] p-[4rem] text-center mt-[2rem]">
    <h3 class="text-[2.5rem] font-bold tracking-tight mb-[1.5rem] dark:text-white">Under the Hood</h3>
    <p class="text-[1.2rem] text-gray-500 dark:text-gray-400 font-light max-w-[40rem] mx-auto leading-relaxed mb-[4rem]">
      How does the binary detect referenced components with near-instantaneous execution? Through tailored static source analysis.
    </p>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-x-[4rem] gap-y-[3rem] text-left max-w-[55rem] mx-auto">
      <div>
        <h4 class="text-[1.1rem] font-bold dark:text-white uppercase tracking-widest mb-[0.7rem] text-cyan-500">File System Traversal</h4>
        <p class="text-[1.05rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed">
          The scanner walks the <code>/src</code> directory, indexing every <code>.svelte</code> file and building an in-memory symbol registry while honoring exclusion rules defined in <code>ignore_files.txt</code> (such as layout wrappers or route entry points).
        </p>
      </div>
      <div>
        <h4 class="text-[1.1rem] font-bold dark:text-white uppercase tracking-widest mb-[0.7rem] text-cyan-500">Static Pattern Matching</h4>
        <p class="text-[1.05rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed">
          Every TypeScript, JavaScript, and Svelte file is tokenized to identify import statements and template usages. Rather than spinning up a heavy JavaScript AST runtime, the algorithm uses optimized lexical scanning to match component identifiers with maximal throughput.
        </p>
      </div>
    </div>
  </section>
</div>
