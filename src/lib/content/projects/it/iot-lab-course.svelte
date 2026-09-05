<div class="flex flex-col gap-[6rem] pb-[4rem] mt-[2rem]">
  
  <!-- HERO -->
  <section class="text-center max-w-[50rem] mx-auto px-[5%] lg:px-0">
    <h2 class="text-[2.5rem] lg:text-[4rem] font-bold tracking-tight mb-[1.5rem] leading-tight dark:text-white">
      Proteggere il passato.<br/>Con la tecnologia del futuro.
    </h2>
    <p class="text-[1.2rem] lg:text-[1.4rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed">
      Smart Museum Case è un sistema IoT distribuito per il monitoraggio e la sicurezza fisica delle opere d'arte. Combina un'infrastruttura decentralizzata con programmazione hardware a basso livello su nodi ESP8266.
    </p>
  </section>

  <!-- 1. IMAGE LEFT -->
  <section class="grid grid-cols-1 md:grid-cols-2 gap-[4rem] items-center px-[5%] lg:px-0">
    <div class="order-2 md:order-1 bg-gray-100 dark:bg-[#1a1a1a] rounded-[2rem] aspect-[4/3] flex items-center justify-center p-[2rem]">
      <span class="text-gray-400 font-medium text-center">Immagine: Sensori ed ESP8266<br/>installati sulla teca</span>
    </div>
    <div class="order-1 md:order-2">
      <h3 class="text-[2rem] font-bold tracking-tight mb-[1.5rem] leading-tight dark:text-white">Il Sistema<br/>e i Sensori</h3>
      <p class="text-[1.1rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed mb-[1.5rem]">
        Come proteggere un reperto storico senza alterare l'estetica di un museo? Il progetto nasce per trasformare qualsiasi teca espositiva in uno scudo intelligente.
      </p>
      <p class="text-[1.1rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed">
        L'hardware è suddiviso in nodi sensore (nascosti nelle teche) dotati di rilevatori di fiamma, moduli giroscopici per rilevare urti o sollevamenti (anti-furto) e fotoresistenze per salvaguardare i pigmenti delle opere. Al centro della sala risiede un nodo Master con schermo LCD e Rotary Encoder per la configurazione locale da parte delle guardie giurate.
      </p>
    </div>
  </section>

  <!-- 2. IMAGE RIGHT -->
  <section class="grid grid-cols-1 md:grid-cols-2 gap-[4rem] items-center px-[5%] lg:px-0">
    <div>
      <h3 class="text-[2rem] font-bold tracking-tight mb-[1.5rem] leading-tight dark:text-white">Architettura<br/>Decentralizzata</h3>
      <p class="text-[1.1rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed mb-[1.5rem]">
        Il sistema ripudia il tradizionale modello client-server per abbracciare il paradigma <strong>Web of Things (WoT)</strong> mediato da un broker MQTT, garantendo tolleranza ai guasti ed eludendo server on-premise costosi.
      </p>
      <ul class="flex flex-col gap-[1.5rem] text-[1.1rem] text-gray-500 dark:text-gray-400 font-light mt-[2rem]">
        <li><strong class="text-gray-900 dark:text-white font-semibold">Dynamic Discovery:</strong> All'accensione, il Master Node interroga la rete. I nodi sensore rispondono inviando un JSON "Thing Description". Il master decodifica le loro capacità autoconfigurandosi in pura logica plug-and-play.</li>
        <li><strong class="text-gray-900 dark:text-white font-semibold">Last Will and Testament:</strong> La connessione sfrutta il QoS 1 di MQTT. Se un nodo viene distrutto, il broker lancia istantaneamente il "testamento" (LWT), isolando la falla e azzerando i falsi allarmi.</li>
      </ul>
    </div>
    <div class="bg-gray-100 dark:bg-[#1a1a1a] rounded-[2rem] aspect-[4/3] flex items-center justify-center p-[2rem]">
      <span class="text-gray-400 font-medium text-center">Immagine: Schema Architettura<br/>(WoT / MQTT)</span>
    </div>
  </section>

  <!-- 3. IMAGE LEFT -->
  <section class="grid grid-cols-1 md:grid-cols-2 gap-[4rem] items-center px-[5%] lg:px-0">
    <div class="order-2 md:order-1 bg-gray-100 dark:bg-[#1a1a1a] rounded-[2rem] aspect-[4/3] flex items-center justify-center p-[2rem]">
      <span class="text-gray-400 font-medium text-center">Immagine: Telegram Chat<br/>& Captive Portal</span>
    </div>
    <div class="order-1 md:order-2">
      <h3 class="text-[2rem] font-bold tracking-tight mb-[1.5rem] leading-tight dark:text-white">Controllo Remoto<br/>& Ecosistema API</h3>
      <p class="text-[1.1rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed mb-[1.5rem]">
        L'interfaccia uomo-macchina (HMI) non si limita allo schermo LCD saldato sul Master Node, espandendosi attivamente sul web.
      </p>
      <ul class="flex flex-col gap-[1.5rem] text-[1.1rem] text-gray-500 dark:text-gray-400 font-light mt-[2rem]">
        <li><strong class="text-gray-900 dark:text-white font-semibold">Bot Telegram Bidirezionale:</strong> Oltre alle allerte push, l'infrastruttura REST permette di chattare col museo per disarmare teche o silenziare allarmi a distanza.</li>
        <li><strong class="text-gray-900 dark:text-white font-semibold">API Meteo:</strong> Il codice incrocia le letture luminose locali con il polling asincrono di API meteo esterne (es. Open-Meteo per i raggi UV reali), allertando in caso di luce dannosa per le tele.</li>
        <li><strong class="text-gray-900 dark:text-white font-semibold">Captive Portal & EEPROM:</strong> Inserimento credenziali "hardcode-free". Alla prima accensione la scheda apre un Access Point per iniettare SSID e Password via smartphone, salvandole permanentemente.</li>
      </ul>
    </div>
  </section>

  <!-- 4. IMAGE RIGHT -->
  <section class="grid grid-cols-1 md:grid-cols-2 gap-[4rem] items-center px-[5%] lg:px-0">
    <div>
      <h3 class="text-[2rem] font-bold tracking-tight mb-[1.5rem] leading-tight dark:text-white">Ottimizzazione<br/>Energetica</h3>
      <p class="text-[1.1rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed mb-[1.5rem]">
        Trattandosi di moduli di sicurezza fisicamente installati su basamenti antichi, l'impiego di cavi di alimentazione è inaccettabile. L'intera flotta di nodi è concepita per massimizzare la vita di minuscole batterie a litio.
      </p>
      <p class="text-[1.1rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed">
        L'implementazione impone aggressive logiche di <strong>Auto Light-Sleep</strong> che silenziano la radio Wi-Fi tra l'invio dei beacon (riducendo i consumi del 75%). I nodi statici entrano in totale <strong>Deep-Sleep (1.5mA)</strong>, risvegliandosi unicamente tramite interrupt hardware in caso di urto o fiamma prolungata.
      </p>
    </div>
    <div class="bg-gray-100 dark:bg-[#1a1a1a] rounded-[2rem] aspect-[4/3] flex items-center justify-center p-[2rem]">
      <span class="text-gray-400 font-medium text-center">Immagine: Grafici Batteria<br/>Deep/Light Sleep</span>
    </div>
  </section>

  <!-- BOX FINALE: SOTTO IL COFANO -->
  <section class="bg-gray-50 dark:bg-[#111] rounded-[2rem] p-[4rem] text-center mt-[2rem]">
    <h3 class="text-[2.5rem] font-bold tracking-tight mb-[1.5rem] dark:text-white">Sfide Hardware</h3>
    <p class="text-[1.2rem] text-gray-500 dark:text-gray-400 font-light max-w-[40rem] mx-auto leading-relaxed mb-[4rem]">
      Sviluppare l'ecosistema in C++ direttamente su microcontrollore impone di padroneggiare la concorrenza hardware per non bloccare mai i sistemi vitali.
    </p>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-x-[4rem] gap-y-[3rem] text-left max-w-[55rem] mx-auto">
      <div>
        <h4 class="text-[1.1rem] font-bold dark:text-white uppercase tracking-widest mb-[0.7rem] text-teal-500">Hardware Interrupts (ISR)</h4>
        <p class="text-[1.05rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed">
          Un semplice polling nel main loop non potrebbe mai registrare l'istante di un urto o lo scatto rapido di un encoder. La lettura di input critici avviene esclusivamente legando routine <strong>ISR (Interrupt Service Routine)</strong> ai pin fisici del chip, assicurando rilevazioni ad altissima priorità.
        </p>
      </div>
      <div>
        <h4 class="text-[1.1rem] font-bold dark:text-white uppercase tracking-widest mb-[0.7rem] text-teal-500">CPU Non-Blocking & Ticker</h4>
        <p class="text-[1.05rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed">
          Le chiamate SSL verso i server di Telegram impiegano svariati secondi, congelando fatalmente il processore single-core. Ho isolato le routine audio e le sirene d'emergenza utilizzando librerie <strong>Ticker (Software Interrupts)</strong> per disaccoppiare l'allarme sonoro dai cicli di rete bloccanti.
        </p>
      </div>
    </div>
  </section>

</div>
