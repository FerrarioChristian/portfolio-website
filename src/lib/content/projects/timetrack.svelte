<div class="flex flex-col gap-[6rem] pb-[4rem] mt-[2rem]">
  
  <!-- HERO -->
  <section class="text-center max-w-[52rem] mx-auto px-[5%] lg:px-0">
    <h2 class="text-[2.5rem] lg:text-[4rem] font-bold tracking-tight mb-[1.5rem] leading-tight dark:text-white">
      Il tuo tempo,<br/>sotto controllo.
    </h2>
    <p class="text-[1.2rem] lg:text-[1.4rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed">
      Unire rigore architetturale e produttività quotidiana. TimeTrack è una web application full-stack progettata per trasformare la gestione del tempo in una scienza esatta: cronometri in tempo reale, tecnica Pomodoro, target dinamici e una dashboard analitica guidata dai dati, racchiusi in un'interfaccia dark mode minimale e senza distrazioni.
    </p>
  </section>

  <!-- 1. FEATURE: DASHBOARD & ANALYTICS (IMAGE/PREVIEW LEFT, TEXT RIGHT) -->
  <section class="grid grid-cols-1 md:grid-cols-2 gap-[4rem] items-center px-[5%] lg:px-0">
    <div class="order-2 md:order-1 bg-zinc-950 border border-zinc-800 rounded-[2rem] p-[2rem] shadow-2xl flex flex-col gap-5 text-white">
      <!-- Active session pill -->
      <div class="flex items-center justify-between bg-zinc-900 border border-zinc-800/80 rounded-xl px-4 py-3">
        <div class="flex items-center gap-3">
          <span class="relative flex h-2.5 w-2.5">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <div>
            <p class="text-xs uppercase tracking-wider text-zinc-400 font-medium">Sessione Attiva</p>
            <p class="text-sm font-semibold text-zinc-100">Backend Architecture</p>
          </div>
        </div>
        <span class="font-mono text-sm font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 px-2.5 py-1 rounded-md">
          01:24:30
        </span>
      </div>

      <!-- Metrics Row -->
      <div class="grid grid-cols-2 gap-3">
        <div class="bg-zinc-900/60 border border-zinc-800/60 rounded-xl p-3.5">
          <p class="text-xs text-zinc-400 uppercase tracking-wider mb-1">Oggi</p>
          <p class="text-xl font-bold text-zinc-100">03h 45m</p>
          <span class="text-[0.7rem] text-emerald-400 font-medium">In linea con il goal</span>
        </div>
        <div class="bg-zinc-900/60 border border-zinc-800/60 rounded-xl p-3.5">
          <p class="text-xs text-zinc-400 uppercase tracking-wider mb-1">Questa Settimana</p>
          <p class="text-xl font-bold text-zinc-100">24h 10m</p>
          <span class="text-[0.7rem] text-zinc-400">Media 4.8h / giorno</span>
        </div>
      </div>

      <!-- Donut Chart Mockup -->
      <div class="bg-zinc-900/40 border border-zinc-800/60 rounded-xl p-4 flex items-center justify-between">
        <div class="relative w-24 h-24 flex items-center justify-center">
          <svg class="w-full h-full -rotate-90" viewBox="0 0 36 36">
            <!-- Background circle -->
            <path class="text-zinc-800" stroke-width="3.8" stroke="currentColor" fill="none"
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
            <!-- Segment 1: Dev (50%) -->
            <path class="text-emerald-500" stroke-dasharray="50, 100" stroke-width="3.8" stroke="currentColor" fill="none"
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
            <!-- Segment 2: Study (30%) -->
            <path class="text-blue-500" stroke-dasharray="30, 100" stroke-dashoffset="-50" stroke-width="3.8" stroke="currentColor" fill="none"
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
            <!-- Segment 3: Planning (20%) -->
            <path class="text-amber-500" stroke-dasharray="20, 100" stroke-dashoffset="-80" stroke-width="3.8" stroke="currentColor" fill="none"
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
          </svg>
          <span class="absolute text-[0.7rem] font-bold text-zinc-300">Chart.js</span>
        </div>
        <div class="flex flex-col gap-1.5 text-xs text-zinc-400">
          <div class="flex items-center gap-2">
            <span class="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span>Software Dev (50%)</span>
          </div>
          <div class="flex items-center gap-2">
            <span class="w-2 h-2 rounded-full bg-blue-500"></span>
            <span>Ricerca & Studio (30%)</span>
          </div>
          <div class="flex items-center gap-2">
            <span class="w-2 h-2 rounded-full bg-amber-500"></span>
            <span>Planning & Review (20%)</span>
          </div>
        </div>
      </div>
    </div>

    <div class="order-1 md:order-2">
      <h3 class="text-[2rem] font-bold tracking-tight mb-[1.5rem] leading-tight dark:text-white">
        Data Visualization &<br/>Analitiche Istantanee
      </h3>
      <p class="text-[1.1rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed mb-[1.5rem]">
        Il cuore dell'esperienza utente è la dashboard analitica: un unico colpo d'occhio basta per monitorare il volume di ore erogate su base quotidiana e settimanale, con aggregazioni calcolate in tempo reale dal backend.
      </p>
      <p class="text-[1.1rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed mb-[1.5rem]">
        Attraverso i grafici reattivi di <strong>Chart.js</strong>, TimeTrack mappa la suddivisione del lavoro fra le varie categorie, offrendo una rappresentazione chiara delle priorità ed evidenziando eventuali dispersioni di tempo.
      </p>
      <ul class="flex flex-col gap-[1rem] text-[1.05rem] text-gray-500 dark:text-gray-400 font-light">
        <li><strong class="text-gray-900 dark:text-white font-semibold">Monitoraggio Live:</strong> Un banner dedicato in cima alla pagina rileva all'istante l'attività in corso di tracciamento e permette di arrestarla con un singolo click.</li>
        <li><strong class="text-gray-900 dark:text-white font-semibold">Zero Rallentamenti:</strong> L'elaborazione statistica sfrutta query di raggruppamento e proiezioni DTO per minimizzare il payload trasferito.</li>
      </ul>
    </div>
  </section>

  <!-- 2. FEATURE: POMODORO & REAL-TIME TRACKING (TEXT LEFT, IMAGE/PREVIEW RIGHT) -->
  <section class="grid grid-cols-1 md:grid-cols-2 gap-[4rem] items-center px-[5%] lg:px-0">
    <div>
      <h3 class="text-[2rem] font-bold tracking-tight mb-[1.5rem] leading-tight dark:text-white">
        Live Tracking &<br/>Focus Pomodoro
      </h3>
      <p class="text-[1.1rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed mb-[1.5rem]">
        Tracciare il tempo non deve essere un'operazione farraginosa. I cronometri interni gestiscono l'avvio e la chiusura della sessione a livello di server, mantenendo intatta la coerenza dei dati anche in caso di chiusura accidentale del browser.
      </p>
      <ul class="flex flex-col gap-[1.5rem] text-[1.1rem] text-gray-500 dark:text-gray-400 font-light">
        <li>
          <strong class="text-gray-900 dark:text-white font-semibold">Modalità Pomodoro Nativa:</strong>
          Timer integrato a intervalli da 25 minuti per sessioni di "deep work". Un indicatore circolare SVG sincronizzato segnala l'avanzamento con precisione al secondo.
        </li>
        <li>
          <strong class="text-gray-900 dark:text-white font-semibold">Auto-Logging Silenzioso:</strong>
          Al termine dei 25 minuti, la sessione viene chiusa e archiviata automaticamente nel database senza richiedere interventi o distrarre l'utente dalla concentrazione.
        </li>
        <li>
          <strong class="text-gray-900 dark:text-white font-semibold">Controlli Diffusi:</strong>
          I pulsanti di avvio e stop sono accessibili ovunque: nella dashboard, nella lista generale e direttamente nella schermata di dettaglio di ogni attività.
        </li>
      </ul>
    </div>

    <!-- Pomodoro Mockup Card -->
    <div class="bg-zinc-950 border border-zinc-800 rounded-[2rem] p-[2.5rem] shadow-2xl flex flex-col items-center justify-center text-white">
      <div class="flex items-center gap-2 mb-6">
        <span class="w-2 h-2 rounded-full bg-red-500"></span>
        <span class="text-xs uppercase tracking-widest text-zinc-400 font-semibold">Pomodoro Technique</span>
      </div>

      <!-- Circular Timer -->
      <div class="relative w-48 h-48 flex items-center justify-center mb-6">
        <svg class="w-full h-full -rotate-90" viewBox="0 0 100 100">
          <!-- Track -->
          <circle cx="50" cy="50" r="44" stroke="currentColor" stroke-width="5" class="text-zinc-800" fill="transparent" />
          <!-- Progress (75% remaining) -->
          <circle cx="50" cy="50" r="44" stroke="currentColor" stroke-width="5" class="text-red-500 transition-all duration-1000" stroke-linecap="round" fill="transparent" stroke-dasharray="276.46" stroke-dashoffset="69.11" />
        </svg>
        <div class="absolute flex flex-col items-center">
          <span class="font-mono text-3xl font-bold tracking-tight text-zinc-100">18:45</span>
          <span class="text-[0.7rem] uppercase tracking-wider text-zinc-400 mt-1">Deep Focus</span>
        </div>
      </div>

      <p class="text-xs text-zinc-400 text-center max-w-[18rem] mb-6 font-light">
        Task attiva: <strong class="text-zinc-200">Refactoring Service Layer</strong>. Salvataggio automatico allo scadere del tempo.
      </p>

      <div class="flex gap-3 w-full max-w-[18rem]">
        <button class="flex-1 py-2 text-xs font-medium rounded-lg border border-zinc-800 text-zinc-400 hover:text-white transition-colors" disabled>
          Annulla
        </button>
        <button class="flex-1 py-2 text-xs font-semibold rounded-lg bg-zinc-100 text-zinc-900 transition-colors" disabled>
          In Corso
        </button>
      </div>
    </div>
  </section>

  <!-- 3. FEATURE: GOALS & MANUAL EDITING (IMAGE/PREVIEW LEFT, TEXT RIGHT) -->
  <section class="grid grid-cols-1 md:grid-cols-2 gap-[4rem] items-center px-[5%] lg:px-0">
    <div class="order-2 md:order-1 bg-zinc-950 border border-zinc-800 rounded-[2rem] p-[2rem] shadow-2xl flex flex-col gap-5 text-white">
      <div class="flex items-center justify-between border-b border-zinc-800/80 pb-3">
        <h4 class="text-sm font-semibold text-zinc-100">Obiettivi di Tempo (Goals)</h4>
        <span class="text-[0.7rem] uppercase tracking-widest text-emerald-400 font-semibold bg-emerald-950/60 border border-emerald-800/40 px-2 py-0.5 rounded">Settimanale</span>
      </div>

      <!-- Goal Item 1 -->
      <div class="space-y-2">
        <div class="flex justify-between text-xs">
          <span class="font-medium text-zinc-200">Sviluppo Software</span>
          <span class="font-mono text-zinc-400 font-semibold">16.5h / 20.0h</span>
        </div>
        <div class="w-full bg-zinc-900 rounded-full h-2 overflow-hidden border border-zinc-800">
          <div class="bg-emerald-500 h-2 rounded-full" style="width: 82.5%"></div>
        </div>
      </div>

      <!-- Goal Item 2 -->
      <div class="space-y-2">
        <div class="flex justify-between text-xs">
          <span class="font-medium text-zinc-200">Studio & Corsi</span>
          <span class="font-mono text-zinc-400 font-semibold">5.0h / 8.0h</span>
        </div>
        <div class="w-full bg-zinc-900 rounded-full h-2 overflow-hidden border border-zinc-800">
          <div class="bg-blue-500 h-2 rounded-full" style="width: 62.5%"></div>
        </div>
      </div>

      <!-- Edit Session Dialog Snippet -->
      <div class="mt-2 pt-4 border-t border-zinc-800/80 bg-zinc-900/40 rounded-xl p-3.5 border border-zinc-800/60">
        <div class="flex items-center justify-between mb-2">
          <span class="text-xs font-semibold text-zinc-300">Modifica Sessione Passata</span>
          <span class="text-[0.65rem] text-zinc-400 font-mono">ID #104</span>
        </div>
        <div class="grid grid-cols-2 gap-2 text-xs">
          <div class="bg-zinc-950/70 border border-zinc-800 rounded px-2 py-1 text-zinc-300 font-mono">
            14:30 - 28/08
          </div>
          <div class="bg-zinc-950/70 border border-zinc-800 rounded px-2 py-1 text-zinc-300 font-mono">
            16:15 - 28/08
          </div>
        </div>
        <p class="text-[0.7rem] text-zinc-400 mt-2">Correzione retroattiva di data/ora con validazione di coerenza temporale.</p>
      </div>
    </div>

    <div class="order-1 md:order-2">
      <h3 class="text-[2rem] font-bold tracking-tight mb-[1.5rem] leading-tight dark:text-white">
        Time Goals Dinamici &<br/>Editing Manuale
      </h3>
      <p class="text-[1.1rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed mb-[1.5rem]">
        Per gli utenti orientati agli obiettivi, TimeTrack introduce la possibilità di fissare target temporali precisi (`GOAL` di completamento o `MAX_TIME` di spesa massima), impostabili sia su singole attività che sull'intera categoria.
      </p>
      <p class="text-[1.1rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed mb-[1.5rem]">
        Barre di avanzamento reattive segnalano a colpo d'occhio quanto sei vicino a completare la tua deadline settimanale, motivando la costanza nel lavoro quotidiano.
      </p>
      <p class="text-[1.1rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed">
        E in caso di lavoro svolto lontano dalla postazione o di disattenzioni con il cronometro, il tool di <strong>inserimento ed editing manuale</strong> consente di inserire, correggere retroattivamente o eliminare qualsiasi registrazione, garantendo uno storico sempre integro e veritiero.
      </p>
    </div>
  </section>

  <!-- 4. BOX FINALE: SOTTO IL COFANO (ECCELLENZA TECNICA) -->
  <section class="bg-gray-50 dark:bg-[#111] rounded-[2rem] p-[4rem] text-center mt-[2rem]">
    <h3 class="text-[2.5rem] font-bold tracking-tight mb-[1.5rem] dark:text-white">Eccellenza Tecnica</h3>
    <p class="text-[1.2rem] text-gray-500 dark:text-gray-400 font-light max-w-[42rem] mx-auto leading-relaxed mb-[4rem]">
      Un motore software solido costruito su <strong>Java 23</strong> e <strong>Spring Boot 3</strong>, ingegnerizzato secondo i principi della Clean Architecture.
    </p>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-x-[4rem] gap-y-[3rem] text-left max-w-[55rem] mx-auto">
      <div>
        <h4 class="text-[1.1rem] font-bold dark:text-white uppercase tracking-widest mb-[0.7rem] text-emerald-500">Pattern MVC & Clean Code</h4>
        <p class="text-[1.05rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed">
          Netta separazione delle responsabilità: controller web specializzati, service layer transazionale per la business logic isolata e repository JPA per l'interazione con PostgreSQL. Codice rigorosamente commentato e predisposto per javadoc aziendali.
        </p>
      </div>
      <div>
        <h4 class="text-[1.1rem] font-bold dark:text-white uppercase tracking-widest mb-[0.7rem] text-emerald-500">Hardening Spring Security & CSRF</h4>
        <p class="text-[1.05rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed">
          Isolamento logico multi-tenant garantito a livello di service tramite direttive <code>@PreAuthorize</code>, impedendo qualsiasi violazione di accesso (IDOR). Token CSRF iniettati e verificati sistematicamente su tutti i form e le chiamate asincrone JavaScript.
        </p>
      </div>
      <div>
        <h4 class="text-[1.1rem] font-bold dark:text-white uppercase tracking-widest mb-[0.7rem] text-emerald-500">Immutabilità del Tempo (JVM 23)</h4>
        <p class="text-[1.05rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed">
          I calcoli temporali eludono bug di arrotondamento e fusi orari appoggiandosi nativamente alle API <code>java.time.Duration</code> e <code>LocalDateTime</code>. La conversione in formato leggibile (hh:mm:ss) è delegata a Formatter custom dedicati al rendering Thymeleaf.
        </p>
      </div>
      <div>
        <h4 class="text-[1.1rem] font-bold dark:text-white uppercase tracking-widest mb-[0.7rem] text-emerald-500">Dark Design System Shadcn</h4>
        <p class="text-[1.05rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed">
          Abbandonato il pesante bootstrap legacy a favore di un front-end minimale e ultra-reattivo basato su Tailwind CSS. Estetica Dark Mode ispirata a Shadcn UI (palette Zinc e contrasti bilanciati), finestre modali fluide e icone vettoriali Lucide.
        </p>
      </div>
    </div>
  </section>

</div>
