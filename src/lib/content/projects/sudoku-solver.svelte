<div class="flex flex-col gap-[6rem] pb-[4rem]">
  <section class="text-center max-w-[50rem] mx-auto px-[5%] lg:px-0">
    <h2 class="text-[2.5rem] lg:text-[4rem] font-bold tracking-tight mb-[1.5rem] leading-tight dark:text-white">
      Il potere degli algoritmi,<br/>reso visibile.
    </h2>
    <p class="text-[1.2rem] lg:text-[1.4rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed">
      Uno strumento educativo per esplorare la ricerca nello spazio degli stati. L'interfaccia minimale svela il ragionamento ricorsivo dietro alla risoluzione di un Sudoku, rendendo l'astratto visibile e tangibile.
    </p>
  </section>

  <section class="grid grid-cols-1 md:grid-cols-2 gap-[4rem] items-center px-[5%] lg:px-0">
    <div>
      <h3 class="text-[2.5rem] font-bold tracking-tight mb-[1.5rem] leading-tight dark:text-white">L'Algoritmo di<br/>Backtracking</h3>
      <p class="text-[1.2rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed mb-[2rem]">
        Il motore di risoluzione si basa sulla Depth-First Search (DFS). Invece di calcolare la soluzione in background, il sistema "espone" l'intero albero decisionale.
      </p>
      <div class="flex flex-col gap-[1.5rem]">
        <div class="border-l-2 border-gray-200 dark:border-gray-800 pl-[1.5rem]">
          <h4 class="text-[1.1rem] font-bold dark:text-white mb-[0.2rem]">Navigazione Timeline</h4>
          <p class="text-[1.1rem] text-gray-500 dark:text-gray-400 font-light">Controlli di riproduzione per fare play o muoversi step-by-step nell'esecuzione.</p>
        </div>
        <div class="border-l-2 border-gray-200 dark:border-gray-800 pl-[1.5rem]">
          <h4 class="text-[1.1rem] font-bold dark:text-white mb-[0.2rem]">Visualizzazione Vicoli Ciechi</h4>
          <p class="text-[1.1rem] text-gray-500 dark:text-gray-400 font-light">L'utente osserva l'istante in cui l'algoritmo annulla una mossa ed effettua il backtracking.</p>
        </div>
      </div>
    </div>
    <div class="bg-gray-100 dark:bg-[#1a1a1a] rounded-[2rem] aspect-[4/5] flex items-center justify-center p-[2rem]">
      <!-- Sostituisci questo div con una img -->
      <span class="text-gray-400 font-medium">Immagine della GUI Qt</span>
    </div>
  </section>

  <section class="bg-gray-50 dark:bg-[#111] rounded-[2rem] p-[4rem] mt-[2rem]">
    <div class="max-w-[40rem] mx-auto text-center mb-[4rem]">
      <h3 class="text-[2.5rem] font-bold tracking-tight mb-[1.5rem] dark:text-white">Eccellenza in C++ e Qt</h3>
      <p class="text-[1.2rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed">
        Sviluppato in C++ moderno, dimostra una profonda separazione delle responsabilità tra logica ricorsiva e aggiornamento della finestra grafica.
      </p>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-x-[4rem] gap-y-[3rem] text-left max-w-[55rem] mx-auto">
      <div>
        <h4 class="text-[1.1rem] font-bold dark:text-white uppercase tracking-widest mb-[0.7rem] text-purple-500">Paradigma Signal-Slot</h4>
        <p class="text-[1.05rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed">
          Sfruttando i segnali asincroni di Qt, l'algoritmo notifica i cambi di stato della griglia alla UI. Questo garantisce un rendering fluido senza mai causare "freeze", nemmeno sotto pesante carico ricorsivo.
        </p>
      </div>
      <div>
        <h4 class="text-[1.1rem] font-bold dark:text-white uppercase tracking-widest mb-[0.7rem] text-purple-500">Ottimizzazione RAM</h4>
        <p class="text-[1.05rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed">
          Animare la forza bruta genera un carico immenso. La griglia è passata esclusivamente tramite reference e puntatori raw, annullando l'overhead di copia e supportando migliaia di eventi al secondo senza memory leak.
        </p>
      </div>
    </div>
  </section>

</div>
