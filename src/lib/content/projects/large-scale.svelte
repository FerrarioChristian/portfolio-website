<div class="flex flex-col gap-[6rem] pb-[4rem]">
  <section class="text-center max-w-[50rem] mx-auto px-[5%] lg:px-0">
    <h2 class="text-[2.5rem] lg:text-[4rem] font-bold tracking-tight mb-[1.5rem] leading-tight dark:text-white">
      Portare ordine nel caos e-commerce.
    </h2>
    <p class="text-[1.2rem] lg:text-[1.4rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed">
      Sviluppo di un Data Warehouse per supportare un'attività di compravendita di videogiochi multi-piattaforma. Un'infrastruttura analitica centralizzata per unificare vendite, acquisti e anagrafiche provenienti da JSON destrutturati e CSV.
    </p>
  </section>

  <section class="bg-gray-50 dark:bg-[#111] rounded-[2rem] p-[4rem] text-center mt-[2rem]">
    <h3 class="text-[2.5rem] font-bold tracking-tight mb-[1.5rem] dark:text-white">Metodologia Kimball & ELT</h3>
    <p class="text-[1.2rem] text-gray-500 dark:text-gray-400 font-light max-w-[40rem] mx-auto leading-relaxed mb-[4rem]">
      La pipeline dati abbandona il tradizionale paradigma ETL in favore dell'approccio ELT orchestrato da <strong>dbt (data build tool)</strong> sul motore colonnare in-process <strong>DuckDB</strong>.
    </p>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-x-[4rem] gap-y-[3rem] text-left max-w-[55rem] mx-auto">
      <div>
        <h4 class="text-[1.1rem] font-bold dark:text-white uppercase tracking-widest mb-[0.7rem] text-blue-500">Pipeline a 3 Livelli</h4>
        <p class="text-[1.05rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed">
          1. <strong>Staging:</strong> Parsing di stringhe, unnest di array JSON complessi (Vinted) e normalizzazione locale.<br/>
          2. <strong>ODS (3NF):</strong> Operational Data Store riconciliato per l'integrazione transazionale multi-sorgente.<br/>
          3. <strong>Data Warehouse:</strong> Denormalizzazione in Star Schema ottimizzata per BI, con fact tables e dimensioni conformi.
        </p>
      </div>
      <div>
        <h4 class="text-[1.1rem] font-bold dark:text-white uppercase tracking-widest mb-[0.7rem] text-blue-500">Integrazione Multi-Sorgente</h4>
        <p class="text-[1.05rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed">
          Incrocio di 5 fonti eterogenee: transazioni Vinted (JSON), vendite eBay (CSV), database PostgreSQL in real-time tramite <code>postgres_scanner</code> e scraping listini concorrenti (CEX) per benchmarking.
        </p>
      </div>
    </div>
  </section>

  <section class="grid grid-cols-1 md:grid-cols-2 gap-[4rem] items-center px-[5%] lg:px-0">
    <div class="order-2 md:order-1 bg-gray-100 dark:bg-[#1a1a1a] rounded-[2rem] aspect-[4/5] flex items-center justify-center p-[2rem]">
      <span class="text-gray-400 font-medium text-center text-[1.2rem]">Star Schema<br/>&<br/>Hash Disambiguation</span>
    </div>
    <div class="order-1 md:order-2">
      <h3 class="text-[2.5rem] font-bold tracking-tight mb-[1.5rem] leading-tight dark:text-white">Qualità e Modelli Dati</h3>
      <p class="text-[1.2rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed mb-[2rem]">
        Una delle sfide più imponenti dell'ELT è stata la standardizzazione del rumore informativo generato dall'unione di piattaforme totalmente disaccoppiate.
      </p>
      
      <ul class="flex flex-col gap-[1.5rem] text-[1.1rem] text-gray-500 dark:text-gray-400 font-light">
        <li><strong class="text-gray-900 dark:text-white font-semibold">Collisione ID:</strong> Vinted ed eBay potevano generare "ID Transazione" identici tra loro. Ho risolto implementando MD5 Hash Keys deterministiche basate sulla tupla (Sorgente, ID Originario), garantendo referenzialità integra senza lookups dispendiosi a runtime.</li>
        <li><strong class="text-gray-900 dark:text-white font-semibold">Allocazione Proporzionale dei Costi:</strong> La Fact Table delle vendite ha granularità di "singolo item". I costi di testata (spedizione e imballaggio) per ordini multi-item sono stati calcolati e disaggregati proporzionalmente al volo.</li>
        <li><strong class="text-gray-900 dark:text-white font-semibold">Caricamento Incrementale:</strong> Tramite dbt, le tabelle più corpose non vengono ricalcolate per intero. Solo i record successivi all'ultimo timestamp (SCD Type 2) vengono inseriti o aggiornati con operazioni differenziali.</li>
      </ul>
    </div>
  </section>

  <section class="grid grid-cols-1 md:grid-cols-2 gap-[4rem] items-center px-[5%] lg:px-0">
    <div>
      <h3 class="text-[2.5rem] font-bold tracking-tight mb-[1.5rem] leading-tight dark:text-white">Business Intelligence</h3>
      <p class="text-[1.2rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed mb-[2rem]">
        Il livello semantico finale (DWH) è direttamente queryabile da tool di Business Intelligence.
      </p>
      <p class="text-[1.1rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed mb-[1.5rem]">
        Il calcolo di <strong>Misure Additive</strong> (come Gross Profit e Net Profit) affiancate a <strong>Misure Semi-Additive</strong> (Days in Inventory) mi ha permesso di creare dashboard Tableau per l'analisi strategica.
      </p>
      <p class="text-[1.1rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed">
        Le dimensioni conformi permettono analisi di <em>Drill-Across</em>, congiungendo il mondo degli acquisti e quello delle vendite, evidenziando trend di redditività, la rotazione di magazzino e il benchmark diretto (opportunità di arbitraggio) contro il competitor leader CEX.
      </p>
    </div>
    <div class="bg-gray-100 dark:bg-[#1a1a1a] rounded-[2rem] aspect-[4/5] flex items-center justify-center p-[2rem]">
      <span class="text-gray-400 font-medium text-center">Tableau<br/>Data Visualization</span>
    </div>
  </section>
</div>
