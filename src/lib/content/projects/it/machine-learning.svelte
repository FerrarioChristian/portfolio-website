<div class="flex flex-col gap-[6rem] pb-[4rem]">
  <section class="text-center max-w-[50rem] mx-auto px-[5%] lg:px-0">
    <h2 class="text-[2.5rem] lg:text-[4rem] font-bold tracking-tight mb-[1.5rem] leading-tight dark:text-white">
      Intelligenza sui Dati. <br/>Dal Rischio Bancario al Rendimento Scolastico.
    </h2>
    <p class="text-[1.2rem] lg:text-[1.4rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed">
      Sviluppo, tuning e valutazione comparativa di modelli di Machine Learning applicati a due problematiche reali: predire la probabilità di default sui pagamenti di carte di credito e prevedere la fascia di GPA (rendimento) degli studenti.
    </p>
  </section>

  <section class="bg-gray-50 dark:bg-[#111] rounded-[2rem] p-[4rem] text-center mt-[2rem]">
    <h3 class="text-[2.5rem] font-bold tracking-tight mb-[1.5rem] dark:text-white">Alberi Decisionali vs. Reti Neurali</h3>
    <p class="text-[1.2rem] text-gray-500 dark:text-gray-400 font-light max-w-[40rem] mx-auto leading-relaxed mb-[4rem]">
      L'obiettivo centrale è il confronto tra un algoritmo altamente interpretabile e leggero (Decision Tree) e un'architettura più complessa e opaca a propensione generalizzante (Multi-layer Perceptron).
    </p>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-x-[4rem] gap-y-[3rem] text-left max-w-[55rem] mx-auto">
      <div>
        <h4 class="text-[1.1rem] font-bold dark:text-white uppercase tracking-widest mb-[0.7rem] text-purple-500">Decision Trees</h4>
        <p class="text-[1.05rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed">
          Un metodo estremamente veloce, valutato tramite Gini/Entropy. Fornisce un output "White Box" essenziale per settori regolamentati come quello bancario, in cui il cliente ha diritto di conoscere i motivi del rifiuto del credito.
        </p>
      </div>
      <div>
        <h4 class="text-[1.1rem] font-bold dark:text-white uppercase tracking-widest mb-[0.7rem] text-purple-500">MLP Neural Networks</h4>
        <p class="text-[1.05rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed">
          Rete neurale multistrato con Backpropagation. Implementata con livello nascosto denso (ReLU) e Softmax in uscita (per classificazione multi-classe). Ha dimostrato accuratezza marginalmente superiore a fronte di un alto onere computazionale.
        </p>
      </div>
    </div>
  </section>

  <section class="grid grid-cols-1 md:grid-cols-2 gap-[4rem] items-center px-[5%] lg:px-0">
    <div class="order-2 md:order-1 bg-gray-100 dark:bg-[#1a1a1a] rounded-[2rem] aspect-[4/5] flex items-center justify-center p-[2rem]">
      <span class="text-gray-400 font-medium text-center text-[1.2rem]">Grid Search CV<br/>&<br/>Confusion Matrices</span>
    </div>
    <div class="order-1 md:order-2">
      <h3 class="text-[2.5rem] font-bold tracking-tight mb-[1.5rem] leading-tight dark:text-white">Sfide e Ottimizzazioni</h3>
      <p class="text-[1.2rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed mb-[2rem]">
        Una fetta massiccia del lavoro si è concentrata sulla preparazione dei dataset, mitigando l'overfitting e gestendo target altamente sbilanciati.
      </p>
      
      <ul class="flex flex-col gap-[1.5rem] text-[1.1rem] text-gray-500 dark:text-gray-400 font-light">
        <li><strong class="text-gray-900 dark:text-white font-semibold">Tuning e Regolarizzazione:</strong> Iperparametri estratti con Grid Search 10-fold CV. Per le reti neurali ho implementato Dropout (20%), Batch Normalization e Early Stopping per troncare il training ai primi segni di overfitting.</li>
        <li><strong class="text-gray-900 dark:text-white font-semibold">Dataset Sbilanciati:</strong> In scenari di default bancario (~80% di non-default), l'Accuracy diventa ingannevole. Le performance sono state guidate dalla metrica <em>F1-Score macro</em> e dall'Area Under Curve (AUC) dalle curve ROC, valutando il trade-off TPR/FPR.</li>
        <li><strong class="text-gray-900 dark:text-white font-semibold">Sviluppo "Fair":</strong> Nel caso del rischio creditizio, i modelli sono stati testati con e senza attributi demografici sensibili (Etnia, Sesso, Educazione, Stato Coniugale) per verificare e quantificare i bias algoritmici intrinseci della rete.</li>
      </ul>
    </div>
  </section>

  <section class="grid grid-cols-1 md:grid-cols-2 gap-[4rem] items-center px-[5%] lg:px-0">
    <div>
      <h3 class="text-[2.5rem] font-bold tracking-tight mb-[1.5rem] leading-tight dark:text-white">Risultati Comparati</h3>
      <p class="text-[1.2rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed mb-[2rem]">
        Nel caso della predizione accademica, l'analisi della matrice di confusione ha evidenziato che la Rete Neurale è in grado di raggruppare quasi tutti i suoi errori su classi <em>contigue</em> (sbagliando la previsione del voto solo della frazione minima).
      </p>
      <p class="text-[1.1rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed mb-[1.5rem]">
        Nel dataset di rischio bancario, invece, l'attributo relativo ai "mesi di ritardo dei pagamenti pregressi" schiacciava il peso specifico delle altre features. 
      </p>
      <p class="text-[1.1rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed">
        <strong>Verdetto:</strong> Non esiste il modello universale. L'albero ha raggiunto oltre l'80% di AUC nel default prediction richiedendo una frazione irrisoria del tempo e memoria della Rete Neurale, diventando di fatto la scelta strategica prioritaria in termini aziendali, pur perdendo un leggero punto percentuale di Recall sulle classi marginali.
      </p>
    </div>
    <div class="bg-gray-100 dark:bg-[#1a1a1a] rounded-[2rem] aspect-[4/5] flex items-center justify-center p-[2rem]">
      <span class="text-gray-400 font-medium text-center">ROC Curves<br/>&<br/>F1-Scores</span>
    </div>
  </section>
</div>
