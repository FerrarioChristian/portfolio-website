<div class="flex flex-col gap-[6rem] pb-[4rem]">
  <section class="text-center max-w-[50rem] mx-auto px-[5%] lg:px-0">
    <h2 class="text-[2.5rem] lg:text-[4rem] font-bold tracking-tight mb-[1.5rem] leading-tight dark:text-white">
      Bringing order to e-commerce chaos.
    </h2>
    <p class="text-[1.2rem] lg:text-[1.4rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed">
      Engineering a multi-platform Data Warehouse to power secondary-market video game analytics. A centralized data pipeline consolidating sales, acquisitions, and inventory catalogs from unstructured JSON feeds and CSV files.
    </p>
  </section>

  <section class="bg-gray-50 dark:bg-[#111] rounded-[2rem] p-[4rem] text-center mt-[2rem]">
    <h3 class="text-[2.5rem] font-bold tracking-tight mb-[1.5rem] dark:text-white">Kimball Methodology & ELT</h3>
    <p class="text-[1.2rem] text-gray-500 dark:text-gray-400 font-light max-w-[40rem] mx-auto leading-relaxed mb-[4rem]">
      The pipeline abandons legacy ETL transformations in favor of modern ELT orchestrated by <strong>dbt (data build tool)</strong> running directly on top of the in-process columnar engine <strong>DuckDB</strong>.
    </p>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-x-[4rem] gap-y-[3rem] text-left max-w-[55rem] mx-auto">
      <div>
        <h4 class="text-[1.1rem] font-bold dark:text-white uppercase tracking-widest mb-[0.7rem] text-blue-500">3-Tier Storage Architecture</h4>
        <p class="text-[1.05rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed">
          1. <strong>Staging:</strong> Schema casting, regex cleaning, and unnesting complex nested JSON arrays.<br/>
          2. <strong>ODS (3NF):</strong> Normalized Operational Data Store reconciling transactional data across sources.<br/>
          3. <strong>Data Warehouse:</strong> Dimensional Star Schema optimized for OLAP analytical queries with conformed dimensions.
        </p>
      </div>
      <div>
        <h4 class="text-[1.1rem] font-bold dark:text-white uppercase tracking-widest mb-[0.7rem] text-blue-500">Multi-Source Consolidation</h4>
        <p class="text-[1.05rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed">
          Unifying 5 heterogeneous streams: Vinted order histories (JSON), eBay commercial sales (CSV), live PostgreSQL tables streamed via <code>postgres_scanner</code>, and market pricing scrapers (CeX) for competitive pricing intelligence.
        </p>
      </div>
    </div>
  </section>

  <section class="grid grid-cols-1 md:grid-cols-2 gap-[4rem] items-center px-[5%] lg:px-0">
    <div class="order-2 md:order-1 bg-gray-100 dark:bg-[#1a1a1a] rounded-[2rem] aspect-[4/5] flex items-center justify-center p-[2rem]">
      <span class="text-gray-400 font-medium text-center text-[1.2rem]">Star Schema<br/>&<br/>Hash Disambiguation</span>
    </div>
    <div class="order-1 md:order-2">
      <h3 class="text-[2.5rem] font-bold tracking-tight mb-[1.5rem] leading-tight dark:text-white">Data Quality &<br/>Dimensional Modeling</h3>
      <p class="text-[1.2rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed mb-[2rem]">
        A primary architectural hurdle in multi-marketplace ELT was reconciling entity identifiers across completely decoupled systems.
      </p>
      
      <ul class="flex flex-col gap-[1.5rem] text-[1.1rem] text-gray-500 dark:text-gray-400 font-light">
        <li><strong class="text-gray-900 dark:text-white font-semibold">Surrogate Hash Keys:</strong> Different platforms frequently generate overlapping numeric IDs. I resolved collisions by synthesizing deterministic MD5 hash keys over the composite key (SourcePlatform, NativeTransactionID), ensuring referential integrity without cross-table lookups.</li>
        <li><strong class="text-gray-900 dark:text-white font-semibold">Proportional Cost Allocation:</strong> Because the sales fact table models individual items, header-level shipping and packaging fees on multi-item baskets are apportioned dynamically based on relative line-item revenue.</li>
        <li><strong class="text-gray-900 dark:text-white font-semibold">Incremental dbt Materializations:</strong> Large transactional ledgers avoid full recomputation; dbt incremental models ingest only records with timestamps newer than the current high-water mark.</li>
      </ul>
    </div>
  </section>

  <section class="grid grid-cols-1 md:grid-cols-2 gap-[4rem] items-center px-[5%] lg:px-0">
    <div>
      <h3 class="text-[2.5rem] font-bold tracking-tight mb-[1.5rem] leading-tight dark:text-white">Business Intelligence</h3>
      <p class="text-[1.2rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed mb-[2rem]">
        The final semantic layer (DWH) serves as a single source of truth queryable by business intelligence tools.
      </p>
      <p class="text-[1.1rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed mb-[1.5rem]">
        Modeling fully <strong>additive measures</strong> (such as Net Revenue and Gross Margin) alongside <strong>semi-additive measures</strong> (Days in Inventory) facilitated the creation of interactive Tableau executive dashboards.
      </p>
      <p class="text-[1.1rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed">
        Conformed dimensions enable powerful <em>drill-across</em> queries bridging acquisition costs with finalized sale prices, highlighting inventory turnover velocity and pinpointing real-time market arbitrage margins against competitor benchmarks.
      </p>
    </div>
    <div class="bg-gray-100 dark:bg-[#1a1a1a] rounded-[2rem] aspect-[4/5] flex items-center justify-center p-[2rem]">
      <span class="text-gray-400 font-medium text-center">Tableau<br/>Data Visualization</span>
    </div>
  </section>
</div>
