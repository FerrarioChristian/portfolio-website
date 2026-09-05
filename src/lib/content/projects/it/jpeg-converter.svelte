<div class="flex flex-col gap-[6rem] pb-[4rem] mt-[2rem]">
  
  <!-- HERO -->
  <section class="text-center max-w-[50rem] mx-auto px-[5%] lg:px-0">
    <h2 class="text-[2.5rem] lg:text-[4rem] font-bold tracking-tight mb-[1.5rem] leading-tight dark:text-white">
      Ricostruire la visione.
    </h2>
    <p class="text-[1.2rem] lg:text-[1.4rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed">
      Le immagini bitmap grezze sprecano enormi quantità di memoria archiviando dettagli e frequenze impercettibili alla vista umana. Sviluppato come case study didattico e scientifico, questo simulatore implementa da zero l'algoritmo di compressione JPEG tramite la Trasformata Discreta del Coseno (DCT2): un ecosistema completo che combina un motore algebrico in Python puro, modelli entropici di Huffman, metriche analitiche in tempo reale e una raffinata interfaccia dark-mode per analizzare e quantificare il degrado qualitativo del segnale.
    </p>
  </section>

  <!-- 1. IMAGE LEFT -->
  <section class="grid grid-cols-1 md:grid-cols-2 gap-[4rem] items-center px-[5%] lg:px-0">
    <img src="/assets/projects/jpeg-converter/dct-basis.png" alt="Basi ortogonali 2D DCT 8x8" class="order-2 md:order-1 w-full h-auto object-cover rounded-[2rem]" />
    <div class="order-1 md:order-2">
      <h3 class="text-[2rem] font-bold tracking-tight mb-[1.5rem] leading-tight dark:text-white">Dallo Spazio<br/>alle Frequenze</h3>
      <p class="text-[1.1rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed mb-[1.5rem]">
        Il fulcro dell'algoritmo non fa uso di librerie pre-compilate. Ho implementato in Python puro la base ortogonale matriciale della <strong>DCT2</strong> partendo dalla formulazione teorica di proiezione del segnale.
      </p>
      <p class="text-[1.1rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed">
        L'immagine di input viene frazionata in blocchi discreti <code>F &times; F</code> (standard 8x8). Per ogni blocco, l'algoritmo isola il coefficiente DC (la luminosità media d'insieme) e distribuisce l'energia visiva lungo i coefficienti AC a frequenza spaziale crescente.
      </p>
    </div>
  </section>

  <!-- 2. IMAGE RIGHT -->
  <section class="grid grid-cols-1 md:grid-cols-2 gap-[4rem] items-center px-[5%] lg:px-0">
    <div>
      <h3 class="text-[2rem] font-bold tracking-tight mb-[1.5rem] leading-tight dark:text-white">Quantizzazione<br/>ed Entropia di Huffman</h3>
      <p class="text-[1.1rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed mb-[1.5rem]">
        Una volta proiettato il blocco nelle frequenze, una maschera diagonale controllata dalla soglia parametrica <code>d</code> (regolabile via slider o digitazione diretta) azzera brutalmente i coefficienti con coordinate <code>k + l &ge; d</code>.
      </p>
      <ul class="flex flex-col gap-[1.5rem] text-[1.1rem] text-gray-500 dark:text-gray-400 font-light mt-[2rem]">
        <li><strong class="text-gray-900 dark:text-white font-semibold">Stima Teorica con Huffman:</strong> Un modulo dedicato in Python puro genera dinamicamente l'albero di Huffman sui coefficienti quantizzati. Attivabile con toggle nella UI, fornisce la stima precisa in byte del file compresso rispetto al file raw <code>.bmp</code>.</li>
        <li><strong class="text-gray-900 dark:text-white font-semibold">Metriche Real-time:</strong> La fedeltà dell'immagine viene monitorata istantaneamente calcolando PSNR (Peak Signal-to-Noise Ratio), MSE (Mean Squared Error) e la percentuale di frequenze mantenute.</li>
      </ul>
    </div>
    <img src="/assets/projects/jpeg-converter/metrics-panel.png" alt="Pannello parametri e metriche di compressione" class="w-full h-auto object-cover rounded-[2rem]" />
  </section>

  <!-- 3. IMAGE LEFT -->
  <section class="grid grid-cols-1 md:grid-cols-2 gap-[4rem] items-center px-[5%] lg:px-0">
    <img src="/assets/projects/jpeg-converter/error-map.png" alt="Heatmap termica della Error Map con legenda colorbar" class="order-2 md:order-1 w-full h-auto object-cover rounded-[2rem]" />
    <div class="order-1 md:order-2">
      <h3 class="text-[2rem] font-bold tracking-tight mb-[1.5rem] leading-tight dark:text-white">Visual<br/>Error Map</h3>
      <p class="text-[1.1rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed mb-[1.5rem]">
        Cosa si perde davvero durante il taglio delle frequenze? La funzione "Show Error Map" genera una <strong>Heatmap termica</strong> (Colormap JET) basata sulla matrice di differenza assoluta tra originale e decompressa.
      </p>
      <p class="text-[1.1rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed">
        Corredata da una legenda cromatica graduata (0-255) ancorata sotto l'immagine, l'Error Map evidenzia con precisione chirurgica quali contorni, gradienti e micro-texture sono stati sacrificati dall'algoritmo di quantizzazione.
      </p>
    </div>
  </section>

  <!-- 4. IMAGE RIGHT -->
  <section class="grid grid-cols-1 md:grid-cols-2 gap-[4rem] items-center px-[5%] lg:px-0">
    <div>
      <h3 class="text-[2rem] font-bold tracking-tight mb-[1.5rem] leading-tight dark:text-white">Zoom Interattivo &<br/>Blocking Artifacts</h3>
      <p class="text-[1.1rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed mb-[1.5rem]">
        Le schermate ad alta risoluzione tendono a mascherare i difetti ottici. Il tool di Zoom dedicato apre una finestra di ispezione ingrandita al <strong>400%</strong> in <em>nearest-neighbor</em> puro, senza filtri o interpolazioni fuorvianti.
      </p>
      <p class="text-[1.1rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed">
        Cliccando e trascinando con il mouse per navigare liberamente l'immagine, l'utente può esplorare da vicino l'insorgenza del noto <strong>"Blocking Artifact"</strong> (le caratteristiche discontinuità quadrettate tra i blocchi 8x8) all'aumentare dell'aggressività di compressione.
      </p>
    </div>
    <img src="/assets/projects/jpeg-converter/zoom-inspection.png" alt="Zoom 400% e analisi dei blocking artifacts" class="w-full h-auto object-cover rounded-[2rem]" />
  </section>

  <!-- 5. IMAGE LEFT -->
  <section class="grid grid-cols-1 md:grid-cols-2 gap-[4rem] items-center px-[5%] lg:px-0">
    <img src="/assets/projects/jpeg-converter/compare-slider.png" alt="Compare Mode con slider verticale prima e dopo" class="order-2 md:order-1 w-full h-auto object-cover rounded-[2rem]" />
    <div class="order-1 md:order-2">
      <h3 class="text-[2rem] font-bold tracking-tight mb-[1.5rem] leading-tight dark:text-white">Compare Slider &<br/>Layout Adattivo</h3>
      <p class="text-[1.1rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed mb-[1.5rem]">
        Per le dimostrazioni dal vivo, la modalità <strong>Compare</strong> proietta l'originale e il risultato compresso a schermo intero con un divisore verticale interattivo che si sposta al passaggio del mouse, rivelando il prima e il dopo con feedback immediato (uscita rapida con tasto ESC).
      </p>
      <p class="text-[1.1rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed">
        Nella vista standard affiancata 50/50, un click su ciascuna immagine ne attiva l'espansione a pieno spazio (Fullscreen Image Toggle) per una comoda ispezione a risoluzione nativa, ottimizzando al massimo lo spazio visivo a disposizione.
      </p>
    </div>
  </section>

  <!-- BOX FINALE: SOTTO IL COFANO -->
  <section class="bg-gray-50 dark:bg-[#111] rounded-[2rem] p-[4rem] text-center mt-[2rem]">
    <h3 class="text-[2.5rem] font-bold tracking-tight mb-[1.5rem] dark:text-white">Sotto il cofano</h3>
    <p class="text-[1.2rem] text-gray-500 dark:text-gray-400 font-light max-w-[40rem] mx-auto leading-relaxed mb-[4rem]">
      Architettura software, complessità computazionale e scelte ingegneristiche di basso livello.
    </p>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-x-[4rem] gap-y-[3rem] text-left max-w-[55rem] mx-auto">
      <div>
        <h4 class="text-[1.1rem] font-bold dark:text-white uppercase tracking-widest mb-[0.7rem] text-orange-500">UI CustomTkinter in stile Shadcn</h4>
        <p class="text-[1.05rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed">
          Sostituita la precedente interfaccia con una raffinata GUI Dark-Mode monocromatica ispirata al design system Shadcn. Integrazione di eventi mouse reattivi per il canvas dello slider e finestre modali non bloccanti (con pulsanti espliciti di chiusura) per evitare lock su ambienti desktop macOS e Linux.
        </p>
      </div>
      <div>
        <h4 class="text-[1.1rem] font-bold dark:text-white uppercase tracking-widest mb-[0.7rem] text-orange-500">Albero di Huffman Custom</h4>
        <p class="text-[1.05rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed">
          Implementazione da zero in Python puro di un codificatore a lunghezza variabile (<code>huffman.py</code>). Costruisce l'albero probabilistico sulle frequenze dei coefficienti quantizzati per calcolare il limite inferiore dell'entropia di Shannon e confrontare la dimensione reale del file rispetto al bitmap <code>.bmp</code> raw.
        </p>
      </div>
      <div>
        <h4 class="text-[1.1rem] font-bold dark:text-white uppercase tracking-widest mb-[0.7rem] text-orange-500">Complessità: Custom O(N³) vs SciPy O(N²logN)</h4>
        <p class="text-[1.05rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed">
          La base ortogonale manuale proietta ciascun blocco tramite prodotto matriciale <code>C &times; X &times; C<sup>T</sup></code> con una complessità spaziale e temporale di <code>O(N³)</code>. Viene contrapposta all'algoritmo Fast Cosine Transform di SciPy, ottimizzato in C tramite FFT con complessità asintotica pari a <code>O(N²logN)</code>.
        </p>
      </div>
      <div>
        <h4 class="text-[1.1rem] font-bold dark:text-white uppercase tracking-widest mb-[0.7rem] text-orange-500">Suite Benchmark & Plot Semilogaritmici</h4>
        <p class="text-[1.05rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed">
          Una suite di testing automatizzata (<code>run-benchmark</code> e <code>run-test</code>) calcola l'impronta computazionale e genera grafici semilogaritmici con Matplotlib, comprovando empiricamente il decadimento prestazionale della formulazione matriciale naive all'aumentare estremo dei pixel.
        </p>
      </div>
    </div>
  </section>

</div>
