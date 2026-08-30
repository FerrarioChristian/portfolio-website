<div class="flex flex-col gap-[6rem] pb-[4rem]">
  <section class="text-center max-w-[50rem] mx-auto px-[5%] lg:px-0">
    <h2 class="text-[2.5rem] lg:text-[4rem] font-bold tracking-tight mb-[1.5rem] leading-tight dark:text-white">
      Non solo un gioco.<br/>Una pipeline perfetta.
    </h2>
    <p class="text-[1.2rem] lg:text-[1.4rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed">
      Sotto le spoglie di un classico gioco multiplayer in real-time, Snake nasconde un'infrastruttura di automazione complessa. Sviluppato per un corso universitario, il progetto si concentra sull'adozione di pratiche DevOps, Continuous Integration e Continuous Deployment (CI/CD).
    </p>
  </section>

  <section class="grid grid-cols-1 md:grid-cols-2 gap-[4rem] items-center px-[5%] lg:px-0">
    <div class="order-2 md:order-1 bg-gray-100 dark:bg-[#1a1a1a] rounded-[2rem] aspect-[4/5] flex items-center justify-center p-[2rem]">
      <span class="text-gray-400 font-medium text-center">Schema dell'architettura CI/CD<br/>o Gameplay Multiplayer</span>
    </div>
    <div class="order-1 md:order-2">
      <h3 class="text-[2.5rem] font-bold tracking-tight mb-[1.5rem] leading-tight dark:text-white">Automazione<br/>allo Stato Puro</h3>
      <p class="text-[1.2rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed mb-[2rem]">
        Il ciclo di vita del software è interamente gestito da pipeline automatizzate, garantendo che ogni riga di codice passi attraverso controlli di qualità ferrei prima di raggiungere la produzione.
      </p>
      
      <ul class="flex flex-col gap-[1.5rem] text-[1.1rem] text-gray-500 dark:text-gray-400 font-light">
        <li><strong class="text-gray-900 dark:text-white font-semibold">Continuous Integration:</strong> Ogni Push o Pull Request scatena una serie di GitHub Actions che si occupano di linting, code formatting e avviano l'esecuzione automatica della test suite isolata per il server Node.js.</li>
        <li><strong class="text-gray-900 dark:text-white font-semibold">Containerizzazione:</strong> Se i test passano, la pipeline esegue il build di una nuova immagine Docker multi-stage leggera, ottimizzata per l'ambiente di produzione.</li>
        <li><strong class="text-gray-900 dark:text-white font-semibold">Continuous Deployment:</strong> La pipeline interagisce poi tramite SSH con il server host, scarica l'immagine aggiornata dal container registry e orchestra lo switch-over trasparente riavviando i container.</li>
      </ul>
    </div>
  </section>

  <section class="bg-gray-50 dark:bg-[#111] rounded-[2rem] p-[4rem] text-center mt-[2rem]">
    <h3 class="text-[2.5rem] font-bold tracking-tight mb-[1.5rem] dark:text-white">Il Core Multiplayer</h3>
    <p class="text-[1.2rem] text-gray-500 dark:text-gray-400 font-light max-w-[40rem] mx-auto leading-relaxed mb-[4rem]">
      Nonostante il focus fosse sulla pipeline, l'applicativo distribuito pone non poche sfide a livello ingegneristico per mantenere lo stato di gioco consistente tra decine di client connessi.
    </p>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-x-[4rem] gap-y-[3rem] text-left max-w-[55rem] mx-auto">
      <div>
        <h4 class="text-[1.1rem] font-bold dark:text-white uppercase tracking-widest mb-[0.7rem] text-green-500">WebSockets Real-Time</h4>
        <p class="text-[1.05rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed">
          Sviluppato interamente in <strong class="font-medium text-gray-700 dark:text-gray-300">Node.js</strong> con Socket.io, il backend agisce da arbitro (Autorità di Stato). I client si limitano a inviare input direzionali (UP, DOWN...), mentre il server calcola la fisica e la posizione di tutti i serpenti a 10+ tick al secondo.
        </p>
      </div>
      <div>
        <h4 class="text-[1.1rem] font-bold dark:text-white uppercase tracking-widest mb-[0.7rem] text-green-500">Delta Broadcasting</h4>
        <p class="text-[1.05rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed">
          Per evitare la saturazione della banda di rete durante le partite affollate, il server ottimizza i pacchetti JSON inviando solamente il delta (le coordinate della testa e della coda aggiornate) invece dell'intera matrice di gioco, minimizzando il payload e migliorando la latenza.
        </p>
      </div>
    </div>
  </section>
</div>
