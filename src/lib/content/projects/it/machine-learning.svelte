<div class="flex flex-col gap-[6rem] pb-[4rem] mt-[2rem]">
  
  <!-- HERO -->
  <section class="text-center max-w-[50rem] mx-auto px-[5%] lg:px-0">
    <h2 class="text-[2.5rem] lg:text-[4rem] font-bold tracking-tight mb-[1.5rem] leading-tight dark:text-white">
      Due Dataset, Due Sfide Reali.<br/>Dall'Insolvenza Creditizia al Rendimento Accademico.
    </h2>
    <p class="text-[1.2rem] lg:text-[1.4rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed">
      Uno studio comparativo tra modelli "White-Box" interpretabili (Alberi Decisionali) e architetture connessioniste ad alta capacità (Reti Neurali Multistrato - MLP). Il lavoro affronta due distinti contesti applicativi con requisiti e vincoli etico-computazionali complementari: la gestione del rischio creditizio bancario e la previsione del rendimento accademico universitario.
    </p>
  </section>

  <!-- 1. PROGETTO 1: RISCHIO CREDITIZIO (IMAGE LEFT) -->
  <section class="grid grid-cols-1 md:grid-cols-2 gap-[4rem] items-center px-[5%] lg:px-0">
    <img 
      src="/assets/projects/machine-learning/credit-feature-importance.png" 
      alt="Feature Importance e determinanti di split nel modello di Rischio Creditizio" 
      class="order-2 md:order-1 w-full h-auto object-cover rounded-[2rem]" 
    />
    <div class="order-1 md:order-2">
      <h3 class="text-[2rem] font-bold tracking-tight mb-[1.5rem] leading-tight dark:text-white">Progetto 1: Rischio di Credito &<br/>Spiegabilità White-Box</h3>
      <p class="text-[1.1rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed mb-[1.5rem]">
        Applicato a un dataset finanziario reale di 30.000 clienti bancari (UCI Taiwan), l'obiettivo è prevedere la probabilità di insolvenza sui pagamenti delle carte di credito.
      </p>
      <ul class="flex flex-col gap-[1.5rem] text-[1.1rem] text-gray-500 dark:text-gray-400 font-light mt-[2rem]">
        <li><strong class="text-gray-900 dark:text-white font-semibold">Sbilanciamento Severo:</strong> Il dataset presenta circa il 78% di clienti solventi contro il 22% in default. L'accuratezza grezza diventa ingannevole: la selezione dei modelli è stata guidata dal punteggio F1 ponderato e dall'analisi dell'area sotto la curva ROC (AUC).</li>
        <li><strong class="text-gray-900 dark:text-white font-semibold">Il Vincolo di Spiegabilità:</strong> Nei mercati bancari regolamentati (GDPR, Fair Credit Reporting Act), un algoritmo opaco non può motivare il diniego di un finanziamento. L'Albero Decisionale offre regole gerarchiche esplicite e interpretabili a costo zero.</li>
        <li><strong class="text-gray-900 dark:text-white font-semibold">Dominanza della Feature PAY_0:</strong> L'analisi di importanza delle variabili rivela che lo storico dei pagamenti recenti (in particolare il ritardo nel mese più recente, <code>PAY_0</code>) governa lo split alla radice dell'albero, pesando per oltre il 68% dell'impurità Gini totale.</li>
      </ul>
    </div>
  </section>

  <!-- 2. FAIRNESS AUDIT (IMAGE RIGHT) -->
  <section class="grid grid-cols-1 md:grid-cols-2 gap-[4rem] items-center px-[5%] lg:px-0">
    <div>
      <h3 class="text-[2rem] font-bold tracking-tight mb-[1.5rem] leading-tight dark:text-white">Fairness Audit &<br/>Mitigazione dei Bias</h3>
      <p class="text-[1.1rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed mb-[1.5rem]">
        I modelli di Machine Learning rischiano di perpetuare discriminazioni storiche se addestrati su dati demografici sensibili. Per quantificare questo rischio, abbiamo condotto un benchmark controllato denominato <strong>"Friendly Setup"</strong>.
      </p>
      <ul class="flex flex-col gap-[1.5rem] text-[1.1rem] text-gray-500 dark:text-gray-400 font-light mt-[2rem]">
        <li><strong class="text-gray-900 dark:text-white font-semibold">Rimozione Attributi Sensibili:</strong> Abbiamo rimosso tutte le covariate anagrafiche non strettamente finanziarie (Sesso, Grado di Istruzione, Stato Coniugale, Età) e riaddestrato i modelli.</li>
        <li><strong class="text-gray-900 dark:text-white font-semibold">Invarianza delle Performance:</strong> L'accuratezza è rimasta immutata all'81.8% vs 82.0% (con F1-score 0.89 e AUC ~0.814 vs 0.816), dimostrando che le abitudini di rimborso oggettive contengono tutto il segnale predittivo necessario.</li>
        <li><strong class="text-gray-900 dark:text-white font-semibold">Valore Operativo:</strong> L'istituto finanziario può adottare una policy etica conforme alle leggi anti-discriminazione senza subire alcun incremento di crediti inesigibili o perdita di redditività.</li>
      </ul>
    </div>
    <img 
      src="/assets/projects/machine-learning/credit-roc.png" 
      alt="Curve ROC e benchmark di fairness per il rischio di credito" 
      class="w-full h-auto object-cover rounded-[2rem]" 
    />
  </section>

  <!-- 3. PROGETTO 2: RENDIMENTO ACCADEMICO (IMAGE LEFT) -->
  <section class="grid grid-cols-1 md:grid-cols-2 gap-[4rem] items-center px-[5%] lg:px-0">
    <img 
      src="/assets/projects/machine-learning/student-correlation.png" 
      alt="Matrice di Correlazione tra Feature Accademiche su 2.392 studenti" 
      class="order-2 md:order-1 w-full h-auto object-cover rounded-[2rem]" 
    />
    <div class="order-1 md:order-2">
      <h3 class="text-[2rem] font-bold tracking-tight mb-[1.5rem] leading-tight dark:text-white">Progetto 2: Performance Accademica &<br/>Analisi di Correlazione</h3>
      <p class="text-[1.1rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed mb-[1.5rem]">
        Il secondo studio analizza un campione di 2.392 studenti universitari con 13 attributi (tempo di studio, assenze, sostegno familiare, attività extracurricolari). Il voto finale (GPA continuo su scala 0–4) è stato discretizzato in 4 fasce di merito accademico.
      </p>
      <ul class="flex flex-col gap-[1.5rem] text-[1.1rem] text-gray-500 dark:text-gray-400 font-light mt-[2rem]">
        <li><strong class="text-gray-900 dark:text-white font-semibold">L'Impatto Devastante dell'Assenteismo:</strong> L'analisi esplorativa della matrice di correlazione ha portato alla luce una relazione negativa schiacciante: le assenze presentano un coefficiente <strong>r = -0.88</strong> con la fascia di GPA (e <em>r = -0.92</em> sul valore continuo), surclassando qualsiasi altra variabile.</li>
        <li><strong class="text-gray-900 dark:text-white font-semibold">Fattori Positivi:</strong> Al contrario, il supporto dei genitori (<em>r = 0.19</em>) e le ore di studio settimanale (<em>r = 0.18</em>) costituiscono i principali driver positivi, mentre le caratteristiche anagrafiche non hanno evidenziato correlazioni degne di nota.</li>
      </ul>
    </div>
  </section>

  <!-- 4. MLP VS DECISION TREE (IMAGE RIGHT) -->
  <section class="grid grid-cols-1 md:grid-cols-2 gap-[4rem] items-center px-[5%] lg:px-0">
    <div>
      <h3 class="text-[2rem] font-bold tracking-tight mb-[1.5rem] leading-tight dark:text-white">MLP vs Decision Tree:<br/>Generalizzazione e Matrice d'Errore</h3>
      <p class="text-[1.1rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed mb-[1.5rem]">
        Nella classificazione multi-classe delle fasce di GPA, la complessità non lineare premia la Rete Neurale Multistrato rispetto alla rigidità a scalino dell'albero decisionale.
      </p>
      <ul class="flex flex-col gap-[1.5rem] text-[1.1rem] text-gray-500 dark:text-gray-400 font-light mt-[2rem]">
        <li><strong class="text-gray-900 dark:text-white font-semibold">Topologia della Rete:</strong> Rete profonda con 12 feature in ingresso, strato nascosto denso da 128 unità con attivazione ReLU, Batch Normalization, regolarizzazione Dropout (20%) e secondo layer a 64 unità prima dell'uscita Softmax a 4 classi.</li>
        <li><strong class="text-gray-900 dark:text-white font-semibold">Vantaggio nel Rendimento (+6.4%):</strong> L'MLP raggiunge l'82.7% di accuratezza sul test set (rispetto al 76.3% dell'albero), con un macro F1 di 0.830 vs 0.758. Nella fascia di voto massimo (Classe 3), l'MLP tocca un F1 di 0.816 contro appena 0.682 dell'albero (+13.4%).</li>
        <li><strong class="text-gray-900 dark:text-white font-semibold">Errore Contiguo e Strutturato:</strong> L'ispezione della matrice di confusione rivela che i pochi errori della rete neurale ricadono rigorosamente sulle classi contigue (ad es. confonde la classe 2 con la 1 o con la 3, mai con la 0), comportandosi da stimatore continuo naturale.</li>
      </ul>
    </div>
    <img 
      src="/assets/projects/machine-learning/student-mlp-architecture.png" 
      alt="Topologia della rete neurale MLP e matrice di confusione multiclasse" 
      class="w-full h-auto object-cover rounded-[2rem]" 
    />
  </section>

  <!-- REPORT SCIENTIFICI COMPLETI CALLOUT -->
  <section class="border border-purple-200 dark:border-purple-900/50 bg-purple-50/50 dark:bg-purple-950/20 rounded-[2rem] p-[3rem] text-center">
    <h3 class="text-[1.8rem] lg:text-[2.2rem] font-bold tracking-tight mb-[1rem] dark:text-white">
      Report Scientifici Dedicati
    </h3>
    <p class="text-[1.1rem] text-gray-600 dark:text-gray-300 font-light max-w-[42rem] mx-auto leading-relaxed mb-[2rem]">
      I dettagli matematici, le tabelle di cross-validation e l'analisi approfondita sono formalizzati nei due paper LaTeX di ricerca (in lingua inglese).
    </p>
    <div class="flex flex-wrap items-center justify-center gap-[1.2rem]">
      <a 
        href="/reports/credit-default.pdf" 
        target="_blank" 
        class="inline-flex items-center gap-[0.6rem] px-[1.6rem] py-[0.9rem] rounded-[1rem] bg-purple-600 hover:bg-purple-700 text-white font-medium text-[1rem] transition-colors shadow-sm"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
        Report Credit Default (PDF)
      </a>
      <a 
        href="/reports/student-performance.pdf" 
        target="_blank" 
        class="inline-flex items-center gap-[0.6rem] px-[1.6rem] py-[0.9rem] rounded-[1rem] bg-purple-600 hover:bg-purple-700 text-white font-medium text-[1rem] transition-colors shadow-sm"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
        Report Student Performance (PDF)
      </a>
    </div>
  </section>

  <!-- BOX FINALE: SOTTO IL COFANO -->
  <section class="bg-white dark:bg-black border border-gray-200 dark:border-white/10 rounded-[2rem] p-[4rem] text-center mt-[2rem]">
    <h3 class="text-[2.5rem] font-bold tracking-tight mb-[1.5rem] dark:text-white">Sotto il cofano</h3>
    <p class="text-[1.2rem] text-gray-500 dark:text-gray-400 font-light max-w-[40rem] mx-auto leading-relaxed mb-[4rem]">
      Metodologia statistica, iperparametri estratti con validazione incrociata e metriche di costo computazionale.
    </p>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-x-[4rem] gap-y-[3rem] text-left max-w-[55rem] mx-auto">
      <div>
        <h4 class="text-[1.1rem] font-bold dark:text-white uppercase tracking-widest mb-[0.7rem] text-purple-500">Cost-Complexity Pruning (CCP Alpha)</h4>
        <p class="text-[1.05rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed">
          Per prevenire la memorizzazione acritica del rumore, la crescita dell'Albero Decisionale è stata controllata con l'algoritmo di potatura minimale basato sul parametro <code>ccp_alpha</code>. La sequenza dei valori candidati è stata valutata in 5-fold cross-validation massimizzando il macro F1-score sul validation set.
        </p>
      </div>
      <div>
        <h4 class="text-[1.1rem] font-bold dark:text-white uppercase tracking-widest mb-[0.7rem] text-purple-500">Benchmark Runtime: 48x - 60x Speedup</h4>
        <p class="text-[1.05rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed">
          Su 30.000 campioni, il Decision Tree conclude l'intero ciclo di fit in appena 0.71–0.76 secondi, a fronte dei 36.5–43.2 secondi richiesti dall'MLP (un fattore di accelerazione compreso tra <strong>48x</strong> e <strong>60x</strong>). In scenari con vincoli stringenti di latenza e budget energetico edge, l'albero rappresenta una scelta aziendale imbattibile.
        </p>
      </div>
      <div>
        <h4 class="text-[1.1rem] font-bold dark:text-white uppercase tracking-widest mb-[0.7rem] text-purple-500">Stratified 5-Fold Grid Search</h4>
        <p class="text-[1.05rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed">
          La suddivisione dei dati è avvenuta tramite campionamento stratificato per mantenere rigorosamente inalterata la proporzione tra le classi di default e di merito accademico. La griglia di ricerca ha ottimizzato criteri di impurità (Gini vs Entropia), soglie di split minime, architetture a layer nascosti e tassi di apprendimento.
        </p>
      </div>
      <div>
        <h4 class="text-[1.1rem] font-bold dark:text-white uppercase tracking-widest mb-[0.7rem] text-purple-500">Regolarizzazione e Early Stopping</h4>
        <p class="text-[1.05rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed">
          Il training della rete neurale ha impiegato la funzione di perdita Categorical Cross-Entropy, combinando Batch Normalization tra i layer densi, Dropout al 20% e una callback di Early Stopping con ripristino dei migliori pesi per interrompere l'ottimizzazione alla prima flessione della validation loss.
        </p>
      </div>
    </div>
  </section>

</div>