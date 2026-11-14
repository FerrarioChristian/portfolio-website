<div class="flex flex-col gap-[6rem] pb-[4rem] mt-[2rem]">
  
  <!-- HERO -->
  <section class="text-center max-w-[52rem] mx-auto px-[5%] lg:px-0">
    <h2 class="text-[2.5rem] lg:text-[4rem] font-bold tracking-tight mb-[1.5rem] leading-tight dark:text-white">
      Non solo un retro game.<br/>Un banco di prova per il real-time e il DevOps.
    </h2>
    <p class="text-[1.2rem] lg:text-[1.4rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed">
      Sotto le spoglie di un classico Snake in 2D si nasconde un'architettura distribuita completa. <strong>Snakey</strong> nasce per affrontare le problematiche concrete dei giochi multiplayer competitivi sul web: sincronizzazione dello stato con server autoritativo Node.js, compressione del traffico di rete tramite delta broadcasting, matchmaking a stanze isolate con spettatori live e una pipeline CI/CD con container Docker e deployment continuo a zero downtime.
    </p>
  </section>

  <!-- 1. ARCHITECTURE SHOWCASE (VISUAL CARD LEFT, TEXT RIGHT) -->
  <section class="grid grid-cols-1 md:grid-cols-2 gap-[4rem] items-center px-[5%] lg:px-0">
    <!-- Visual Architecture Diagram Card -->
    <div class="order-2 md:order-1 bg-white dark:bg-black border border-gray-200 dark:border-white/10 rounded-[2rem] corner-squircle p-[2.5rem] flex flex-col gap-[1.75rem]">
      <div class="flex items-center justify-between">
        <span class="text-xs uppercase tracking-widest text-gray-700 dark:text-gray-300 font-semibold font-mono">Server-Authoritative State Engine</span>
        <span class="text-[0.7rem] uppercase tracking-wider text-blue-600 dark:text-blue-400 bg-white dark:bg-black border border-blue-200 dark:border-blue-500/30 px-2 py-0.5 rounded-md font-mono font-semibold">
          10 Hz Tick Loop
        </span>
      </div>

      <!-- Diagram: 2 Clients & Server Authority -->
      <div class="flex flex-col gap-3">
        <!-- Client Inputs Row -->
        <div class="grid grid-cols-2 gap-3">
          <div class="p-3 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-black flex flex-col gap-1">
            <div class="flex items-center justify-between">
              <span class="text-xs font-bold text-blue-600 dark:text-blue-400 font-mono">Giocatore 1</span>
              <span class="w-2 h-2 rounded-full bg-blue-500"></span>
            </div>
            <code class="text-[0.7rem] text-gray-600 dark:text-gray-400 font-mono">emit("playerMoved", "UP")</code>
          </div>
          <div class="p-3 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-black flex flex-col gap-1 text-right">
            <div class="flex items-center justify-between">
              <span class="w-2 h-2 rounded-full bg-red-500"></span>
              <span class="text-xs font-bold text-red-600 dark:text-red-400 font-mono">Giocatore 2</span>
            </div>
            <code class="text-[0.7rem] text-gray-600 dark:text-gray-400 font-mono">emit("playerMoved", "LEFT")</code>
          </div>
        </div>

        <!-- Node.js Authoritative Engine Box -->
        <div class="p-3.5 rounded-xl border border-gray-300 dark:border-white/20 bg-white dark:bg-black flex flex-col gap-2">
          <div class="flex items-center justify-between">
            <span class="text-xs font-mono font-bold text-gray-900 dark:text-white">Node.js Server Authority (Tick 100ms)</span>
            <span class="text-[0.65rem] text-emerald-600 dark:text-emerald-400 font-mono font-semibold">Arbitro Unico</span>
          </div>
          <div class="flex flex-col gap-1 font-mono text-[0.7rem] text-gray-600 dark:text-gray-400">
            <div>• <strong class="text-gray-800 dark:text-gray-200">Anti-Suicidio 180°:</strong> Scarta inversioni accidentali immediate</div>
            <div>• <strong class="text-gray-800 dark:text-gray-200">Matrice Spaziale:</strong> Rileva collisioni bordo, corpo e pareggi</div>
            <div>• <strong class="text-gray-800 dark:text-gray-200">Stato Globale:</strong> Incremento mele e allungamento corpo</div>
          </div>
        </div>

        <!-- Delta Broadcast Comparison Box -->
        <div class="p-3.5 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-black flex flex-col gap-2">
          <div class="flex items-center justify-between">
            <span class="text-xs font-mono font-bold text-purple-600 dark:text-purple-400">Delta Broadcasting vs Full Matrix</span>
            <span class="text-[0.65rem] text-purple-600 dark:text-purple-400 font-mono font-semibold">-97% Payload</span>
          </div>
          <div class="flex items-center justify-between text-[0.75rem] font-mono text-gray-500 dark:text-gray-400 pt-1">
            <span>Matrice intera: <strong class="text-gray-700 dark:text-gray-300">~4.8 KB / tick</strong></span>
            <span>➔</span>
            <span>Delta compresso: <strong class="text-emerald-600 dark:text-emerald-400">~120 B / tick</strong></span>
          </div>
        </div>
      </div>
    </div>

    <!-- Text Right -->
    <div class="order-1 md:order-2">
      <h3 class="text-[2rem] font-bold tracking-tight mb-[1.5rem] leading-tight dark:text-white">
        Architettura Server-Authoritative &<br/>Delta Broadcasting
      </h3>
      <p class="text-[1.1rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed mb-[1.5rem]">
        Nei giochi multiplayer in tempo reale con simulazione demandata ai client, la desincronizzazione della latenza e il rischio di manipolazione della memoria sono problemi endemici. In Snakey l'intera logica di gioco è rigorosamente centralizzata sul backend in <strong>Node.js</strong>.
      </p>
      <p class="text-[1.1rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed mb-[1.5rem]">
        I client agiscono come display passivi: campionano la tastiera o i controlli touch e trasmettono soltanto l'intenzione direzionale. Il server esegue il tick a intervalli deterministici (10 volte al secondo), convalidando la mossa e impedendo qualsiasi exploit sulla velocità o sulle traiettorie.
      </p>
      <ul class="flex flex-col gap-[1rem] text-[1.05rem] text-gray-500 dark:text-gray-400 font-light">
        <li>
          <strong class="text-gray-900 dark:text-white font-semibold">Prevenzione Anti-Suicidio 180°:</strong> Se il serpente viaggia verso destra, un input simultaneo a sinistra viene bloccato dal server prima di calcolare il frame, scongiurando auto-collisioni involontarie durante sterzate rapide.
        </li>
        <li>
          <strong class="text-gray-900 dark:text-white font-semibold">Delta Broadcasting:</strong> Invece di trasmettere l'intera griglia o tutti i segmenti dei corpi a ogni frame, il server invia solo il delta (le coordinate della nuova testa e della coda deallocata), azzerando l'overhead di rete anche su connessioni instabili.
        </li>
      </ul>
    </div>
  </section>

  <!-- 2. ROOM SYSTEM & SPECTATORS (TEXT LEFT, PREVIEW RIGHT) -->
  <section class="grid grid-cols-1 md:grid-cols-2 gap-[4rem] items-center px-[5%] lg:px-0">
    <div>
      <h3 class="text-[2rem] font-bold tracking-tight mb-[1.5rem] leading-tight dark:text-white">
        Matchmaking a Stanze &<br/>Modalità Spettatore
      </h3>
      <p class="text-[1.1rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed mb-[1.5rem]">
        Una delle sfide architetturali principali è stata la transizione da un server a partita singola a un <strong>RoomManager</strong> in-memory modulare, capace di gestire decine di sessioni 1v1 concorrenti senza interferenze reciproche.
      </p>
      <ul class="flex flex-col gap-[1.5rem] text-[1.1rem] text-gray-500 dark:text-gray-400 font-light">
        <li>
          <strong class="text-gray-900 dark:text-white font-semibold">Lobby Pubbliche e Private:</strong> I giocatori possono richiedere il matchmaking rapido in una stanza pubblica libera oppure creare stanze private con codice alfanumerico univoco condivisibile via link diretto (<code class="font-mono text-gray-800 dark:text-gray-200">?room=ABCD12</code>).
        </li>
        <li>
          <strong class="text-gray-900 dark:text-white font-semibold">Spettatori Live Illimitati:</strong> Gli utenti che si collegano a una stanza con partita già al completo (2/2) vengono commutati istantaneamente in modalità spettatore, ricevendo gli aggiornamenti in sola lettura senza impattare sul game loop.
        </li>
        <li>
          <strong class="text-gray-900 dark:text-white font-semibold">Garbage Collection del Game Loop:</strong> Quando tutti i giocatori e gli spettatori abbandonano una stanza, il timer interno del loop viene terminato e la stanza eliminata dalla memoria, garantendo zero leak sul runtime Node.js.
        </li>
      </ul>
    </div>

    <!-- Visual Card: RoomManager Architecture & Lifecycle -->
    <div class="bg-white dark:bg-black border border-gray-200 dark:border-white/10 rounded-[2rem] corner-squircle p-[2.5rem] flex flex-col gap-[1.75rem]">
      <div class="flex items-center justify-between">
        <span class="text-xs uppercase tracking-widest text-gray-700 dark:text-gray-300 font-semibold font-mono">RoomManager Memory Model</span>
        <span class="text-[0.7rem] uppercase tracking-wider text-emerald-600 dark:text-emerald-400 bg-white dark:bg-black border border-emerald-200 dark:border-emerald-500/30 px-2 py-0.5 rounded-md font-mono font-semibold">
          Isolated Runtimes
        </span>
      </div>

      <!-- Diagram of Room Isolation -->
      <div class="flex flex-col gap-3">
        <!-- Room Instance 1 -->
        <div class="p-3.5 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-black flex flex-col gap-2">
          <div class="flex items-center justify-between">
            <span class="font-mono text-xs font-bold text-gray-900 dark:text-white">Stanza #PUB-842 (Pubblica)</span>
            <span class="text-[0.65rem] text-emerald-600 dark:text-emerald-400 font-mono font-semibold">In Corso • 100ms Loop</span>
          </div>
          <div class="grid grid-cols-2 gap-2 text-[0.72rem] font-mono text-gray-600 dark:text-gray-400">
            <div class="p-2 rounded bg-white dark:bg-black border border-gray-200 dark:border-white/10">
              <strong class="text-gray-900 dark:text-white">Giocatori: 2/2</strong><br/>
              Socket P1 ⚔️ Socket P2
            </div>
            <div class="p-2 rounded bg-white dark:bg-black border border-gray-200 dark:border-white/10">
              <strong class="text-purple-600 dark:text-purple-400">Spettatori: 4</strong><br/>
              Stream sola lettura
            </div>
          </div>
        </div>

        <!-- Room Instance 2 -->
        <div class="p-3.5 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-black flex flex-col gap-2">
          <div class="flex items-center justify-between">
            <span class="font-mono text-xs font-bold text-gray-900 dark:text-white">Stanza #PRIV-09 (Privata)</span>
            <span class="text-[0.65rem] text-amber-600 dark:text-amber-400 font-mono font-semibold">In Attesa Match</span>
          </div>
          <div class="text-[0.72rem] font-mono text-gray-600 dark:text-gray-400 p-2 rounded bg-white dark:bg-black border border-gray-200 dark:border-white/10">
            Socket P1 connesso • Accessibile solo tramite codice univoco o link d'invito
          </div>
        </div>

        <!-- Lifecycle GC Note -->
        <div class="p-2.5 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-black flex items-center justify-between text-[0.7rem] font-mono text-gray-500 dark:text-gray-400">
          <span>Lifecycle GC:</span>
          <span class="text-gray-700 dark:text-gray-300">Stanza vuota ➔ clearInterval() ➔ Deallocazione RAM</span>
        </div>
      </div>
    </div>
  </section>

  <!-- 3. DEVOPS & CI/CD PIPELINE (FULL-WIDTH RIGOROUS BLOCK) -->
  <section class="bg-white dark:bg-black border border-gray-200 dark:border-white/10 rounded-[2rem] corner-squircle p-[3rem] lg:p-[4rem]">
    <div class="text-center max-w-[44rem] mx-auto mb-[3.5rem]">
      <h3 class="text-[2.2rem] lg:text-[2.6rem] font-bold tracking-tight mb-[1rem] dark:text-white">
        Ingegneria DevOps & Pipeline CI/CD
      </h3>
      <p class="text-[1.15rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed">
        L'automazione del ciclo di vita del software è il cuore metodologico del progetto: ogni modifica al codice attraversa verifiche di regressione ferree e viene distribuita sul server di produzione senza interruzioni del servizio.
      </p>
    </div>

    <!-- Pipeline Flow Visual (3 Columns with Connectors) -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-[2rem] items-start">
      <!-- Step 1 -->
      <div class="p-[2rem] rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-black flex flex-col gap-3">
        <div class="flex items-center justify-between">
          <span class="font-mono text-xs font-bold text-gray-900 dark:text-white px-2 py-0.5 rounded border border-gray-300 dark:border-white/20">01 • CI</span>
          <span class="text-[0.7rem] font-mono text-emerald-600 dark:text-emerald-400 font-semibold">GitHub Actions</span>
        </div>
        <h4 class="text-[1.2rem] font-bold text-gray-900 dark:text-white">Test & Linting Automatici</h4>
        <p class="text-[0.95rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed">
          Su ogni commit e PR, i runner eseguono controlli di stile con ESLint ed eseguono l'intera test suite isolata con Vitest (25 unit test e 6 integration test), validando collisioni, RoomManager e movimenti prima di consentire il merge.
        </p>
      </div>

      <!-- Step 2 -->
      <div class="p-[2rem] rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-black flex flex-col gap-3">
        <div class="flex items-center justify-between">
          <span class="font-mono text-xs font-bold text-gray-900 dark:text-white px-2 py-0.5 rounded border border-gray-300 dark:border-white/20">02 • BUILD</span>
          <span class="text-[0.7rem] font-mono text-blue-600 dark:text-blue-400 font-semibold">&lt; 100 MB Image</span>
        </div>
        <h4 class="text-[1.2rem] font-bold text-gray-900 dark:text-white">Docker Multi-Stage</h4>
        <p class="text-[0.95rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed">
          La build multi-stadio compila il bundle React con Vite e prepara un'immagine di produzione leggera con Node.js e reverse proxy Nginx. Gestisce nativamente l'upgrade dei WebSocket e la compressione Gzip degli asset statici.
        </p>
      </div>

      <!-- Step 3 -->
      <div class="p-[2rem] rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-black flex flex-col gap-3">
        <div class="flex items-center justify-between">
          <span class="font-mono text-xs font-bold text-gray-900 dark:text-white px-2 py-0.5 rounded border border-gray-300 dark:border-white/20">03 • CD</span>
          <span class="text-[0.7rem] font-mono text-purple-600 dark:text-purple-400 font-semibold">Zero Downtime</span>
        </div>
        <h4 class="text-[1.2rem] font-bold text-gray-900 dark:text-white">Continuous Deployment</h4>
        <p class="text-[0.95rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed">
          Il workflow si connette via SSH sicuro al server Linux remoto, scarica l'immagine aggiornata dal registry ed esegue il riavvio controllato dei container. Il proxy Nginx garantisce la transizione immediata senza interruzioni di servizio.
        </p>
      </div>
    </div>
  </section>

  <!-- 4. FRONTEND CRAFT & MOBILE RESPONSIVENESS (CONCRETE TECHNICAL SCHEMA) -->
  <section class="grid grid-cols-1 md:grid-cols-2 gap-[4rem] items-center px-[5%] lg:px-0">
    <div>
      <h3 class="text-[2rem] font-bold tracking-tight mb-[1.5rem] leading-tight dark:text-white">
        Frontend Reattivo &<br/>Esperienza Mobile 100dvh
      </h3>
      <p class="text-[1.1rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed mb-[1.5rem]">
        Molti giochi basati su canvas soffrono su mobile di latenza tattile, barre di navigazione tagliate e fastidiosi scroll accidentali. Snakey è stato ingegnerizzato con specifici accorgimenti per offrire la stessa fluidità su smartphone e desktop:
      </p>
      <ul class="flex flex-col gap-[1.5rem] text-[1.1rem] text-gray-500 dark:text-gray-400 font-light">
        <li>
          <strong class="text-gray-900 dark:text-white font-semibold">Eliminazione del Ritardo Tattile:</strong> I browser mobile introducono di default 300ms di attesa tra il tocco e il click sintetico per verificare eventuali doppi tocchi. L'adozione di listener nativi <code class="font-mono text-gray-800 dark:text-gray-200">onTouchStart</code> con <code class="font-mono text-gray-800 dark:text-gray-200">preventDefault()</code> azzera la latenza, rendendo la sterzata istantanea.
        </li>
        <li>
          <strong class="text-gray-900 dark:text-white font-semibold">Layout Vincolato a 100dvh:</strong> L'interfaccia si adatta alla Dynamic Viewport Height di iOS e Android: l'header e l'HUD del punteggio occupano altezze fisse minime, mentre l'arena quadrata sfrutta l'intero spazio rimanente, prevenendo qualsiasi overflow verticale.
        </li>
        <li>
          <strong class="text-gray-900 dark:text-white font-semibold">Zero Dipendenze Grafiche Esterne:</strong> Icone vettoriali SVG leggere scritte a mano, canvas HTML5 a 60 FPS e assenza totale di librerie di animazione pesanti per garantire caricamenti istantanei.
        </li>
      </ul>
    </div>

    <!-- Technical Schema: Mobile Viewport Budget & Touch Pipeline -->
    <div class="bg-white dark:bg-black border border-gray-200 dark:border-white/10 rounded-[2rem] corner-squircle p-[2.5rem] flex flex-col gap-[1.75rem]">
      <span class="text-xs uppercase tracking-widest text-gray-700 dark:text-gray-300 font-semibold font-mono">Mobile Viewport Budget & Touch Pipeline</span>

      <!-- Touch Latency Architecture Comparison -->
      <div class="p-3.5 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-black flex flex-col gap-2">
        <span class="text-xs font-mono font-bold text-gray-900 dark:text-white">Pipeline di Input al Tocco</span>
        <div class="flex flex-col gap-1.5 font-mono text-[0.72rem]">
          <div class="p-2 rounded border border-gray-200 dark:border-white/10 text-gray-500 dark:text-gray-400">
            <span class="text-red-500 font-bold">Standard Web:</span> touchstart ➔ attesa 300ms ➔ click sintetico <span class="text-red-400">(Latenza elevata)</span>
          </div>
          <div class="p-2 rounded border border-emerald-300 dark:border-emerald-500/30 text-gray-800 dark:text-gray-200">
            <span class="text-emerald-600 dark:text-emerald-400 font-bold">Snakey Touch:</span> touchstart ➔ preventDefault() ➔ sendMove() <span class="text-emerald-500 font-bold">(0ms latenza)</span>
          </div>
        </div>
      </div>

      <!-- 100dvh Height Allocation Breakdown -->
      <div class="p-3.5 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-black flex flex-col gap-2">
        <div class="flex items-center justify-between">
          <span class="text-xs font-mono font-bold text-gray-900 dark:text-white">Ripartizione Verticale (100dvh)</span>
          <span class="text-[0.65rem] font-mono text-blue-600 dark:text-blue-400 font-semibold">Zero Scroll</span>
        </div>
        <div class="flex flex-col gap-1.5 font-mono text-[0.72rem] text-gray-600 dark:text-gray-400">
          <div class="flex items-center justify-between p-1.5 rounded bg-white dark:bg-black border border-gray-200 dark:border-white/10">
            <span>Header compatto (Logo + Codice Stanza + Azioni)</span>
            <strong class="text-gray-900 dark:text-white">40 px</strong>
          </div>
          <div class="flex items-center justify-between p-1.5 rounded bg-white dark:bg-black border border-gray-200 dark:border-white/10">
            <span>Scoreboard HUD (Orizzontale a riga singola)</span>
            <strong class="text-gray-900 dark:text-white">36 px</strong>
          </div>
          <div class="flex items-center justify-between p-1.5 rounded bg-white dark:bg-black border border-gray-200 dark:border-white/10">
            <span>Arena Canvas (Quadrata, scala automatica 1:1)</span>
            <strong class="text-blue-600 dark:text-blue-400">Flex 1 (Residuo)</strong>
          </div>
          <div class="flex items-center justify-between p-1.5 rounded bg-white dark:bg-black border border-gray-200 dark:border-white/10">
            <span>D-Pad virtuale compatto + gesture swipe</span>
            <strong class="text-gray-900 dark:text-white">138 px</strong>
          </div>
        </div>
      </div>
    </div>
  </section>

</div>
