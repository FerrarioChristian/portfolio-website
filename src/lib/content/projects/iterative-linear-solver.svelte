<div class="flex flex-col gap-[6rem] pb-[4rem] mt-[2rem]">
  
  <!-- HERO -->
  <section class="text-center max-w-[50rem] mx-auto px-[5%] lg:px-0">
    <h2 class="text-[2.5rem] lg:text-[4rem] font-bold tracking-tight mb-[1.5rem] leading-tight dark:text-white">
      Calcolo Scientifico,<br/>su larga scala.
    </h2>
    <p class="text-[1.2rem] lg:text-[1.4rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed">
      Una libreria Python completa per risolvere enormi sistemi lineari sparsi, analizzare la topologia delle matrici e comparare l'efficienza matematica di complessi algoritmi iterativi.
    </p>
  </section>

  <!-- 1. IMAGE LEFT -->
  <section class="grid grid-cols-1 md:grid-cols-2 gap-[4rem] items-center px-[5%] lg:px-0">
    <div class="order-2 md:order-1 bg-gray-100 dark:bg-[#1a1a1a] rounded-[2rem] aspect-[4/3] flex items-center justify-center p-[2rem]">
      <span class="text-gray-400 font-medium text-center">Immagine: Analisi Strutturale<br/>e Spy Plots</span>
    </div>
    <div class="order-1 md:order-2">
      <h3 class="text-[2rem] font-bold tracking-tight mb-[1.5rem] leading-tight dark:text-white">Analisi Strutturale<br/>& Spy Plots</h3>
      <p class="text-[1.1rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed mb-[1.5rem]">
        Prima di lanciare un algoritmo alla cieca, è fondamentale comprendere la natura del problema. Il modulo dedicato <code>MatrixAnalyzer</code> valuta matematicamente la topologia del sistema.
      </p>
      <p class="text-[1.1rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed">
        Oltre a determinare la simmetria, la positività definita, la dominanza diagonale e il Condition Number, l'applicativo genera visivamente eleganti <strong>Spy Plots</strong>: mappe 2D vettoriali che rivelano la distribuzione della sparsità e lo "scheletro" della matrice (formato .mtx).
      </p>
    </div>
  </section>

  <!-- 2. IMAGE RIGHT -->
  <section class="grid grid-cols-1 md:grid-cols-2 gap-[4rem] items-center px-[5%] lg:px-0">
    <div>
      <h3 class="text-[2rem] font-bold tracking-tight mb-[1.5rem] leading-tight dark:text-white">L'Arsenale dei<br/>Risolutori</h3>
      <p class="text-[1.1rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed mb-[1.5rem]">
        Il core dell'engine è basato su una solida architettura Object-Oriented (tramite una solida astrazione con <code>BaseSolver</code>) che implementa accuratamente quattro dei più grandi algoritmi iterativi.
      </p>
      <ul class="flex flex-col gap-[1.5rem] text-[1.1rem] text-gray-500 dark:text-gray-400 font-light mt-[2rem]">
        <li><strong class="text-gray-900 dark:text-white font-semibold">Approcci Stazionari:</strong> Jacobi e Gauss-Seidel, intuitivi ma lenti, molto sensibili alle condizioni della matrice originaria.</li>
        <li><strong class="text-gray-900 dark:text-white font-semibold">Metodi di Discesa:</strong> Discesa del Gradiente e l'ineguagliabile Gradiente Coniugato (CG), capaci di "curvare" dinamicamente la ricerca aggiornando i parametri in base al residuo.</li>
      </ul>
    </div>
    <div class="bg-gray-100 dark:bg-[#1a1a1a] rounded-[2rem] aspect-[4/3] flex items-center justify-center p-[2rem]">
      <span class="text-gray-400 font-medium text-center">Immagine: Formule / Modulo Solvers</span>
    </div>
  </section>

  <!-- 3. IMAGE LEFT -->
  <section class="grid grid-cols-1 md:grid-cols-2 gap-[4rem] items-center px-[5%] lg:px-0">
    <div class="order-2 md:order-1 bg-gray-100 dark:bg-[#1a1a1a] rounded-[2rem] aspect-[4/3] flex items-center justify-center p-[2rem]">
      <span class="text-gray-400 font-medium text-center">Immagine: Command Line Interface</span>
    </div>
    <div class="order-1 md:order-2">
      <h3 class="text-[2rem] font-bold tracking-tight mb-[1.5rem] leading-tight dark:text-white">Interactive CLI &<br/>Demo Mode</h3>
      <p class="text-[1.1rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed mb-[1.5rem]">
        Per rendere la libreria accessibile da ogni ambiente, ho sviluppato un'interfaccia a riga di comando (CLI) apposita per governare le simulazioni. 
      </p>
      <p class="text-[1.1rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed">
        Tramite parametri flag (come <code>-t</code> per impostare le tolleranze alfanumeriche di arresto o <code>--max-iter</code>), l'utente può orchestrare enormi benchmark comparativi demandando i risultati sia sul terminale che, in logica pipeline, su file CSV esportati dinamicamente.
      </p>
    </div>
  </section>

  <!-- 4. IMAGE RIGHT -->
  <section class="grid grid-cols-1 md:grid-cols-2 gap-[4rem] items-center px-[5%] lg:px-0">
    <div>
      <h3 class="text-[2rem] font-bold tracking-tight mb-[1.5rem] leading-tight dark:text-white">Confronto e<br/>Visualizzazione</h3>
      <p class="text-[1.1rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed mb-[1.5rem]">
        Il calcolo massivo ha reale valore solo se è interpretabile. L'engine di plotting utilizza <strong>Matplotlib</strong> per generare visualizzazioni chiare ed espandibili post-esecuzione.
      </p>
      <p class="text-[1.1rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed">
        I grafici generati affiancano l'errore relativo, i tempi di esecuzione e i contatori di iterazione al variare delle tolleranze, dimostrando empiricamente la schiacciante superiorità algoritmica del Gradiente Coniugato sui metodi stazionari classici.
      </p>
    </div>
    <div class="bg-gray-100 dark:bg-[#1a1a1a] rounded-[2rem] aspect-[4/3] flex items-center justify-center p-[2rem]">
      <span class="text-gray-400 font-medium text-center">Immagine: Grafici di Convergenza</span>
    </div>
  </section>

  <!-- BOX FINALE: SOTTO IL COFANO -->
  <section class="bg-gray-50 dark:bg-[#111] rounded-[2rem] p-[4rem] text-center mt-[2rem]">
    <h3 class="text-[2.5rem] font-bold tracking-tight mb-[1.5rem] dark:text-white">Eccellenza Scientifica</h3>
    <p class="text-[1.2rem] text-gray-500 dark:text-gray-400 font-light max-w-[40rem] mx-auto leading-relaxed mb-[4rem]">
      Manipolare matrici di dimensioni spropositate ha richiesto di eludere immensi colli di bottiglia legati alla memoria RAM.
    </p>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-x-[4rem] gap-y-[3rem] text-left max-w-[55rem] mx-auto">
      <div>
        <h4 class="text-[1.1rem] font-bold dark:text-white uppercase tracking-widest mb-[0.7rem] text-blue-500">Strutture CSR / SciPy</h4>
        <p class="text-[1.05rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed">
          I tradizionali metodi diretti (es. Eliminazione di Gauss) provocano fatali esplosioni di memoria ("fill-in"). L'intero progetto ruota attorno alla gestione dei calcoli in formato compresso <strong>Compressed Sparse Row (CSR)</strong> fornito da SciPy, memorizzando e moltiplicando esclusivamente i valori non nulli.
        </p>
      </div>
      <div>
        <h4 class="text-[1.1rem] font-bold dark:text-white uppercase tracking-widest mb-[0.7rem] text-blue-500">Matrix Market Ecosystem</h4>
        <p class="text-[1.05rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed">
          Avendo sviluppato parser nativi per file <code>.mtx</code> (strutture coordinate), è possibile dare in pasto alla libreria matrici colossali provenienti da database accademici internazionali per testare la solidità matematica dei risolutori contro casistiche di fisica reale.
        </p>
      </div>
    </div>
  </section>

</div>
