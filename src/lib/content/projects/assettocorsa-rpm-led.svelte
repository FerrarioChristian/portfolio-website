<div class="flex flex-col gap-[6rem] pb-[4rem]">
  <section class="text-center max-w-[50rem] mx-auto px-[5%] lg:px-0">
    <h2 class="text-[2.5rem] lg:text-[4rem] font-bold tracking-tight mb-[1.5rem] leading-tight dark:text-white">
      L'adrenalina prende colore.
    </h2>
    <p class="text-[1.2rem] lg:text-[1.4rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed">
      Portare l'esperienza di guida del simulatore oltre lo schermo. Questo progetto cattura la telemetria grezza di Assetto Corsa in tempo reale e orchestra una stringa LED ambientale, traducendo i giri del motore in un feedback visivo immediato e immersivo.
    </p>
  </section>

    <img src="/assets/projects/assetto-corsa/led.gif" alt="LED che reagiscono ai giri del motore" class="h-auto object-cover rounded-4xl "/>
  <section class="grid grid-cols-1 md:grid-cols-2 gap-[4rem] items-center px-[5%] lg:px-0">
    <div>
      <h3 class="text-[2.5rem] font-bold tracking-tight mb-[1.5rem] leading-tight dark:text-white">Dalla Memoria<br/>Condivisa alla Luce</h3>
      <p class="text-[1.2rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed mb-[2rem]">
        Assetto Corsa non offre semplici API HTTP per i dati di gioco, ma espone la telemetria in presa diretta scrivendola nella memoria condivisa (Shared Memory) di Windows ad altissima frequenza.
      </p>
    </div>
      <ul class="flex flex-col gap-[1.5rem] text-[1.1rem] text-gray-500 dark:text-gray-400 font-light">
        <li><strong class="text-gray-900 dark:text-white font-semibold">Lettura dei Puntatori:</strong> Il core dell'applicazione si aggancia a queste aree di memoria, mappando le strutture dati native del C++ per estrarre il valore esatto degli RPM (giri al minuto) correnti e il massimale dell'auto.</li>
        <li><strong class="text-gray-900 dark:text-white font-semibold">Codifica Cromatica:</strong> La matematica del sistema mappa dinamicamente l'intervallo di giri. Il colore passa morbidamente da un <strong class="text-green-500">verde</strong> per i regimi bassi, scaldandosi verso un <strong class="text-red-500">rosso intenso</strong> all'avvicinarsi della soglia di cambiata.</li>
        <li><strong class="text-gray-900 dark:text-white font-semibold">Il Limitatore:</strong> Se il motore colpisce il limitatore, il sistema sprigiona un violento flash <strong class="text-purple-500">viola</strong> per intimare la cambiata istantanea.</li>
      </ul>
  </section>

  <section class="bg-gray-50 dark:bg-[#111] rounded-[2rem] p-[4rem] text-center mt-[2rem]">
    <h3 class="text-[2.5rem] font-bold tracking-tight mb-[1.5rem] dark:text-white">Evoluzione Hardcore</h3>
    <p class="text-[1.2rem] text-gray-500 dark:text-gray-400 font-light max-w-[40rem] mx-auto leading-relaxed mb-[4rem]">
      Nato come proof-of-concept in Python usando le API Tuya in cloud (le quali collassavano per via del famigerato rate-limiting), il progetto è stato totalmente ingegnerizzato e ripensato per l'azzeramento della latenza e il calcolo ad alte prestazioni.
    </p>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-x-[4rem] gap-y-[3rem] text-left max-w-[55rem] mx-auto">
      <div>
        <h4 class="text-[1.1rem] font-bold dark:text-white uppercase tracking-widest mb-[0.7rem] text-orange-500">Il Passaggio a Rust</h4>
        <p class="text-[1.05rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed">
          Riscrivere il client di telemetria da Python a <strong class="font-medium text-gray-700 dark:text-gray-300">Rust</strong> è stato un game-changer. Rust offre un accesso a bassissimo livello alla memoria di sistema garantendo totale memory safety e performance C-like. Addio Garbage Collector, addio micro-stuttering nella lettura della telemetria.
        </p>
      </div>
      <div>
        <h4 class="text-[1.1rem] font-bold dark:text-white uppercase tracking-widest mb-[0.7rem] text-orange-500">ESP32 & WLED</h4>
        <p class="text-[1.05rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed">
          Il controller commerciale è stato estirpato in favore di un potente microcontrollore <strong class="font-medium text-gray-700 dark:text-gray-300">ESP32</strong> su cui gira il firmware open-source <strong>WLED</strong>. Questo hardware personalizzato orchestra strisce LED indirizzabili senza sudare, a 60 FPS stabili.
        </p>
      </div>
      <div>
        <h4 class="text-[1.1rem] font-bold dark:text-white uppercase tracking-widest mb-[0.7rem] text-orange-500">Protocollo UDP</h4>
        <p class="text-[1.05rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed">
          Invece di lente richieste HTTP al cloud, l'applicazione Rust invia i frame colore al WLED localmente all'interno della rete LAN sfruttando pacchetti <strong class="font-medium text-gray-700 dark:text-gray-300">UDP</strong> (tramite protocolli come E1.31 o WLED UDP sync). Zero latenza di rete e frame-rate istantaneo.
        </p>
      </div>
      <div>
        <h4 class="text-[1.1rem] font-bold dark:text-white uppercase tracking-widest mb-[0.7rem] text-orange-500">Thread Paralleli</h4>
        <p class="text-[1.05rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed">
          Il polling aggressivo della Shared Memory e il broadcasting dei pacchetti di rete viaggiano su thread isolati grazie alle astrazioni <em>fearless concurrency</em> di Rust, per non rubare cicli di clock preziosi al motore del simulatore in esecuzione sulla stessa macchina.
        </p>
      </div>
    </div>
  </section>

</div>
