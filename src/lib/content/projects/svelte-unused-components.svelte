<div class="flex flex-col gap-[6rem] pb-[4rem]">
  <section class="text-center max-w-[50rem] mx-auto px-[5%] lg:px-0">
    <h2 class="text-[2.5rem] lg:text-[4rem] font-bold tracking-tight mb-[1.5rem] leading-tight dark:text-white">
      Meno codice, più performance.
    </h2>
    <p class="text-[1.2rem] lg:text-[1.4rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed">
      Mantenere una codebase pulita in SvelteKit può essere difficile quando i progetti scalano. Ho sviluppato uno strumento CLI in Go progettato per scansionare istantaneamente migliaia di file, individuando componenti <code>.svelte</code> orfani o inutilizzati.
    </p>
  </section>

  <section class="grid grid-cols-1 md:grid-cols-2 gap-[4rem] items-center px-[5%] lg:px-0">
    <div>
      <h3 class="text-[2.5rem] font-bold tracking-tight mb-[1.5rem] leading-tight dark:text-white">Costruito per<br/>la Velocità</h3>
      <p class="text-[1.2rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed mb-[2rem]">
        La scelta di <strong class="text-gray-900 dark:text-white">Go (Golang)</strong> non è casuale. L'esigenza era avere un eseguibile binario, cross-platform e che non dipendesse da pesanti moduli `node_modules`. 
      </p>
      
      <ul class="flex flex-col gap-[1.5rem] text-[1.1rem] text-gray-500 dark:text-gray-400 font-light">
        <li><strong class="text-gray-900 dark:text-white font-semibold">Ricerca Ricorsiva:</strong> Grazie al flag <code>-r</code>, l'algoritmo non si ferma al primo livello, ma scava nell'albero delle dipendenze scovando file che sono importati unicamente da altri file inutilizzati.</li>
        <li><strong class="text-gray-900 dark:text-white font-semibold">Concorrenza:</strong> Il parsing dei file sfrutta le Goroutine per analizzare l'albero delle directory in parallelo, abbattendo i tempi di esecuzione su enormi monorepo.</li>
        <li><strong class="text-gray-900 dark:text-white font-semibold">Flessibilità:</strong> Gestione avanzata tramite flag CLI (es. <code>-i</code> per la blacklist, <code>-np</code> per script CI) per un'integrazione perfetta in qualsiasi ambiente di sviluppo.</li>
      </ul>
    </div>
    <div class="bg-gray-100 dark:bg-[#1a1a1a] rounded-[2rem] aspect-[4/5] flex items-center justify-center p-[2rem]">
      <span class="text-gray-400 font-medium text-center">Output CLI (Terminale)<br/>di svelte-unused-components</span>
    </div>
  </section>

  <section class="bg-gray-50 dark:bg-[#111] rounded-[2rem] p-[4rem] text-center mt-[2rem]">
    <h3 class="text-[2.5rem] font-bold tracking-tight mb-[1.5rem] dark:text-white">Sotto il Cofano</h3>
    <p class="text-[1.2rem] text-gray-500 dark:text-gray-400 font-light max-w-[40rem] mx-auto leading-relaxed mb-[4rem]">
      Come fa l'eseguibile a sapere esattamente cosa è usato e cosa no? La risposta risiede nell'analisi statica dei file sorgenti.
    </p>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-x-[4rem] gap-y-[3rem] text-left max-w-[55rem] mx-auto">
      <div>
        <h4 class="text-[1.1rem] font-bold dark:text-white uppercase tracking-widest mb-[0.7rem] text-cyan-500">File System Traversal</h4>
        <p class="text-[1.05rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed">
          Il motore esplora la cartella <code>/src</code> indicizzando ogni file con estensione <code>.svelte</code>. Costruisce una mappa in memoria, escludendo a priori i file listati in <code>ignore_files.txt</code> (ad esempio layout globali o entry points).
        </p>
      </div>
      <div>
        <h4 class="text-[1.1rem] font-bold dark:text-white uppercase tracking-widest mb-[0.7rem] text-cyan-500">Static Pattern Matching</h4>
        <p class="text-[1.05rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed">
          Ogni file TypeScript, JavaScript o Svelte viene scansionato alla ricerca di pattern di importazione. Invece di istanziare un intero compilatore JS, l'algoritmo effettua un parsing testuale ottimizzato per rilevare riferimenti al nome del file, garantendo performance estreme.
        </p>
      </div>
    </div>
  </section>
</div>
