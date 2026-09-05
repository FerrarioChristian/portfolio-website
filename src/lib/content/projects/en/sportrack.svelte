<div class="flex flex-col gap-[6rem] pb-[4rem]">
  <section class="text-center max-w-[50rem] mx-auto px-[5%] lg:px-0">
    <h2 class="text-[2.5rem] lg:text-[4rem] font-bold tracking-tight mb-[1.5rem] leading-tight dark:text-white">
      Your personal trainer,<br/>in your pocket.
    </h2>
    <p class="text-[1.2rem] lg:text-[1.4rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed">
      Replacing obsolete paper logs with a seamless mobile experience. SporTrack moves beyond simple exercise tracking, delivering intelligent decision support through integrated artificial intelligence.
    </p>
  </section>

  <section class="grid grid-cols-1 md:grid-cols-2 gap-[4rem] items-center px-[5%] lg:px-0">
    <img src="/assets/projects/sportrack/schedule.png" alt="Workout Schedule Builder" class="w-full h-auto object-cover rounded-4xl" />
    <div class="order-1 md:order-2">
      <h3 class="text-[2.5rem] font-bold tracking-tight mb-[1.5rem] leading-tight dark:text-white">Custom Workout<br/>Routines</h3>
      <p class="text-[1.2rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed mb-[2rem]">
        At the core of the application lies an advanced routine builder querying a remote exercise database provided by API Ninjas.
      </p>
      <ul class="flex flex-col gap-[1.5rem] text-[1.1rem] text-gray-500 dark:text-gray-400 font-light">
        <li><strong class="text-gray-900 dark:text-white font-semibold">Granular Configuration:</strong> Configure sets, target repetitions, and rest periods to tailor routines for progressive overload or metabolic circuits.</li>
        <li><strong class="text-gray-900 dark:text-white font-semibold">Educational Library:</strong> Comprehensive movement execution cues with anatomical highlights for targeted muscle groups.</li>
      </ul>
    </div>
  </section>

  <section class="grid grid-cols-1 md:grid-cols-2 gap-[4rem] items-center px-[5%] lg:px-0">
    <div>
      <h3 class="text-[2.5rem] font-bold tracking-tight mb-[1.5rem] leading-tight dark:text-white">Integrated Timer &<br/>Hybrid Data Sync</h3>
      <p class="text-[1.2rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed mb-[2rem]">
        An intelligent background stopwatch guides the athlete through active sets and recovery intervals with zero cognitive overhead.
      </p>
      
      <div class="border-l-2 border-gray-200 dark:border-gray-800 pl-[1.5rem] py-[0.5rem] flex flex-col gap-[1.5rem]">
        <div>
          <h4 class="text-[1.1rem] font-bold dark:text-white uppercase tracking-widest mb-[0.5rem]">Hybrid Offline-First</h4>
          <p class="text-[1.1rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed">
            Data is persisted locally in <strong class="font-medium text-gray-700 dark:text-gray-300">Room SQLite</strong> to guarantee reliable offline performance in gym environments.
          </p>
        </div>
        <div>
          <h4 class="text-[1.1rem] font-bold dark:text-white uppercase tracking-widest mb-[0.5rem]">Cloud Synchronization</h4>
          <p class="text-[1.1rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed">
            <strong class="font-medium text-gray-700 dark:text-gray-300">Firebase Realtime Database</strong> synchronizes state across devices instantaneously as soon as a network connection is detected.
          </p>
        </div>
      </div>
    </div>
    <img src="/assets/projects/sportrack/timer.png" alt="Workout Interval Timer" class="w-full h-auto object-cover rounded-4xl" />
  </section>

  <section class="grid grid-cols-1 md:grid-cols-2 gap-[4rem] items-center px-[5%] lg:px-0 md:flex-row-reverse">
    <img src="/assets/projects/sportrack/ai_diet.png" alt="AI Diet Plan Generation" class="rounded-4xl w-full h-auto object-cover" />
    <div class="order-1 md:order-2">
      <h3 class="text-[2.5rem] font-bold tracking-tight mb-[1.5rem] leading-tight dark:text-white">AI-Powered Nutrition<br/>Planning</h3>
      <p class="text-[1.2rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed mb-[2rem]">
        Maximizing training outcomes demands dialed-in nutritional strategies. The integrated AI module synthesizes personalized dietary regimens based on user biometrics.
      </p>
      <ul class="flex flex-col gap-[1.5rem] text-[1.1rem] text-gray-500 dark:text-gray-400 font-light">
        <li><strong class="text-gray-900 dark:text-white font-semibold">TDEE Estimation:</strong> Accurate energy expenditure calculations derived from biological sex, age, weight, and physiological goals.</li>
        <li><strong class="text-gray-900 dark:text-white font-semibold">Macronutrient Balancing:</strong> Algorithmic distribution of proteins, carbohydrates, and healthy fats paired with structured meal suggestions.</li>
      </ul>
    </div>
  </section>

  <section class="grid grid-cols-1 md:grid-cols-2 gap-[4rem] items-center px-[5%] lg:px-0">
    <div>
      <h3 class="text-[2.5rem] font-bold tracking-tight mb-[1.5rem] leading-tight dark:text-white">Visual Progress<br/>Dashboard</h3>
      <p class="text-[1.2rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed mb-[2rem]">
        A dynamic heatmap inspired by GitHub contribution graphs welcomes the user, visualizing training consistency across a rolling 35-day window.
      </p>
      <p class="text-[1.1rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed">
        Cells scale chromatically from emerald to gold to psychologically encourage consistency. Complementary charts break down muscle group frequency and cumulative tonnage.
      </p>
    </div>
    <img src="/assets/projects/sportrack/progress.png" alt="Progress Tracking Dashboard" class="rounded-4xl w-full h-auto object-cover" />
  </section>

  <section class="bg-gray-50 dark:bg-[#111] rounded-[2rem] p-[4rem] text-center mt-[2rem]">
    <h3 class="text-[2.5rem] font-bold tracking-tight mb-[1.5rem] dark:text-white">Under the Hood</h3>
    <p class="text-[1.2rem] text-gray-500 dark:text-gray-400 font-light max-w-[40rem] mx-auto leading-relaxed mb-[4rem]">
      Natively built for Android (Java) following Clean Architecture principles and the MVVM design pattern.
    </p>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-x-[4rem] gap-y-[3rem] text-left max-w-[55rem] mx-auto">
      <div>
        <h4 class="text-[1.1rem] font-bold dark:text-white uppercase tracking-widest mb-[0.7rem] text-blue-500">Repository & Single Source of Truth</h4>
        <p class="text-[1.05rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed">
          The Repository layer arbitrates between cloud (Firebase) and local (Room SQLite) storage. The UI layer passively reacts to data streams via observable LiveData, remaining fully agnostic to data ingestion origins.
        </p>
      </div>
      <div>
        <h4 class="text-[1.1rem] font-bold dark:text-white uppercase tracking-widest mb-[0.7rem] text-blue-500">Custom Dependency Injection</h4>
        <p class="text-[1.05rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed">
          To circumvent the weight and setup overhead of Dagger, I engineered a singleton Service Locator and creational ViewModelProvider.Factory implementations to resolve and inject dependencies cleanly at runtime.
        </p>
      </div>
      <div>
        <h4 class="text-[1.1rem] font-bold dark:text-white uppercase tracking-widest mb-[0.7rem] text-blue-500">Robust REST Deserialization</h4>
        <p class="text-[1.05rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed">
          Retrofit integration with API Ninjas is handled via custom Gson JsonDeserializer adapters. Normalization of irregular JSON payloads occurs strictly at the network boundary, shielding domain entity models from schema inconsistencies.
        </p>
      </div>
    </div>
  </section>
</div>
