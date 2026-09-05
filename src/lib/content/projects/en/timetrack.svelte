<div class="flex flex-col gap-[6rem] pb-[4rem] mt-[2rem]">
  
  <!-- HERO -->
  <section class="text-center max-w-[52rem] mx-auto px-[5%] lg:px-0">
    <h2 class="text-[2.5rem] lg:text-[4rem] font-bold tracking-tight mb-[1.5rem] leading-tight dark:text-white">
      Your time,<br/>under control.
    </h2>
    <p class="text-[1.2rem] lg:text-[1.4rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed">
      Uniting architectural rigor with daily productivity. TimeTrack is a full-stack web application engineered to transform time management into an exact science: real-time timers, the Pomodoro technique, dynamic target goals, and a data-driven analytical dashboard—all encased in a distraction-free, minimalist dark mode interface.
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
            <p class="text-xs uppercase tracking-wider text-zinc-400 font-medium">Active Session</p>
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
          <p class="text-xs text-zinc-400 uppercase tracking-wider mb-1">Today</p>
          <p class="text-xl font-bold text-zinc-100">03h 45m</p>
          <span class="text-[0.7rem] text-emerald-400 font-medium">On track with goal</span>
        </div>
        <div class="bg-zinc-900/60 border border-zinc-800/60 rounded-xl p-3.5">
          <p class="text-xs text-zinc-400 uppercase tracking-wider mb-1">This Week</p>
          <p class="text-xl font-bold text-zinc-100">24h 10m</p>
          <span class="text-[0.7rem] text-zinc-400">Avg 4.8h / day</span>
        </div>
      </div>

      <!-- Donut Chart Mockup -->
      <div class="bg-zinc-900/40 border border-zinc-800/60 rounded-xl p-4 flex items-center justify-between">
        <div class="relative w-24 h-24 flex items-center justify-center">
          <svg class="w-full h-full -rotate-90" viewBox="0 0 36 36">
            <path class="text-zinc-800" stroke-width="3.8" stroke="currentColor" fill="none"
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
            <path class="text-emerald-500" stroke-dasharray="50, 100" stroke-width="3.8" stroke="currentColor" fill="none"
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
            <path class="text-blue-500" stroke-dasharray="30, 100" stroke-dashoffset="-50" stroke-width="3.8" stroke="currentColor" fill="none"
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
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
            <span>Research & Study (30%)</span>
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
        Data Visualization &<br/>Instant Analytics
      </h3>
      <p class="text-[1.1rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed mb-[1.5rem]">
        At the core of the user experience sits the analytical dashboard: a single glance is all it takes to monitor the volume of work delivered across daily and weekly horizons, with statistical aggregations evaluated in real time on the server.
      </p>
      <p class="text-[1.1rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed mb-[1.5rem]">
        Through reactive <strong>Chart.js</strong> visualizations, TimeTrack maps time allocation across distinct categories, providing immediate visibility into engineering priorities and pinpointing productivity drains.
      </p>
      <ul class="flex flex-col gap-[1rem] text-[1.05rem] text-gray-500 dark:text-gray-400 font-light">
        <li><strong class="text-gray-900 dark:text-white font-semibold">Live Monitoring:</strong> A dedicated top banner detects active running timers instantaneously and enables single-click stoppage.</li>
        <li><strong class="text-gray-900 dark:text-white font-semibold">Zero Latency Overhead:</strong> Database aggregations leverage SQL grouping projections and lightweight DTOs to minimize network payload.</li>
      </ul>
    </div>
  </section>

  <!-- 2. FEATURE: POMODORO & REAL-TIME TRACKING (TEXT LEFT, IMAGE/PREVIEW RIGHT) -->
  <section class="grid grid-cols-1 md:grid-cols-2 gap-[4rem] items-center px-[5%] lg:px-0">
    <div>
      <h3 class="text-[2rem] font-bold tracking-tight mb-[1.5rem] leading-tight dark:text-white">
        Live Tracking &<br/>Pomodoro Focus
      </h3>
      <p class="text-[1.1rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed mb-[1.5rem]">
        Tracking time must never introduce cognitive friction. Server-side session lifecycles maintain state consistency even across unexpected tab closures or network disruptions.
      </p>
      <ul class="flex flex-col gap-[1.5rem] text-[1.1rem] text-gray-500 dark:text-gray-400 font-light">
        <li>
          <strong class="text-gray-900 dark:text-white font-semibold">Native Pomodoro Mode:</strong>
          Integrated 25-minute interval timer for deep work sprints. A synchronized circular SVG indicator signals progress with second-by-second precision.
        </li>
        <li>
          <strong class="text-gray-900 dark:text-white font-semibold">Silent Auto-Logging:</strong>
          Upon interval completion, the session is committed and indexed in the PostgreSQL database automatically, requiring no user intervention.
        </li>
        <li>
          <strong class="text-gray-900 dark:text-white font-semibold">Omnipresent Controls:</strong>
          Start and stop triggers remain accessible from anywhere: the dashboard, category views, and individual task inspection drawers.
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
          <circle cx="50" cy="50" r="44" stroke="currentColor" stroke-width="5" class="text-zinc-800" fill="transparent" />
          <circle cx="50" cy="50" r="44" stroke="currentColor" stroke-width="5" class="text-red-500 transition-all duration-1000" stroke-linecap="round" fill="transparent" stroke-dasharray="276.46" stroke-dashoffset="69.11" />
        </svg>
        <div class="absolute flex flex-col items-center">
          <span class="font-mono text-3xl font-bold tracking-tight text-zinc-100">18:45</span>
          <span class="text-[0.7rem] uppercase tracking-wider text-zinc-400 mt-1">Deep Focus</span>
        </div>
      </div>

      <p class="text-xs text-zinc-400 text-center max-w-[18rem] mb-6 font-light">
        Active task: <strong class="text-zinc-200">Refactoring Service Layer</strong>. Automatic persistence upon completion.
      </p>

      <div class="flex gap-3 w-full max-w-[18rem]">
        <button class="flex-1 py-2 text-xs font-medium rounded-lg border border-zinc-800 text-zinc-400 hover:text-white transition-colors" disabled>
          Cancel
        </button>
        <button class="flex-1 py-2 text-xs font-semibold rounded-lg bg-zinc-100 text-zinc-900 transition-colors" disabled>
          In Progress
        </button>
      </div>
    </div>
  </section>

  <!-- 3. FEATURE: GOALS & MANUAL EDITING (IMAGE/PREVIEW LEFT, TEXT RIGHT) -->
  <section class="grid grid-cols-1 md:grid-cols-2 gap-[4rem] items-center px-[5%] lg:px-0">
    <div class="order-2 md:order-1 bg-zinc-950 border border-zinc-800 rounded-[2rem] p-[2rem] shadow-2xl flex flex-col gap-5 text-white">
      <div class="flex items-center justify-between border-b border-zinc-800/80 pb-3">
        <h4 class="text-sm font-semibold text-zinc-100">Time Targets (Goals)</h4>
        <span class="text-[0.7rem] uppercase tracking-widest text-emerald-400 font-semibold bg-emerald-950/60 border border-emerald-800/40 px-2 py-0.5 rounded">Weekly</span>
      </div>

      <!-- Goal Item 1 -->
      <div class="space-y-2">
        <div class="flex justify-between text-xs">
          <span class="font-medium text-zinc-200">Software Engineering</span>
          <span class="font-mono text-zinc-400 font-semibold">16.5h / 20.0h</span>
        </div>
        <div class="w-full bg-zinc-900 rounded-full h-2 overflow-hidden border border-zinc-800">
          <div class="bg-emerald-500 h-2 rounded-full" style="width: 82.5%"></div>
        </div>
      </div>

      <!-- Goal Item 2 -->
      <div class="space-y-2">
        <div class="flex justify-between text-xs">
          <span class="font-medium text-zinc-200">Study & Courses</span>
          <span class="font-mono text-zinc-400 font-semibold">5.0h / 8.0h</span>
        </div>
        <div class="w-full bg-zinc-900 rounded-full h-2 overflow-hidden border border-zinc-800">
          <div class="bg-blue-500 h-2 rounded-full" style="width: 62.5%"></div>
        </div>
      </div>

      <!-- Edit Session Dialog Snippet -->
      <div class="mt-2 pt-4 border-t border-zinc-800/80 bg-zinc-900/40 rounded-xl p-3.5 border border-zinc-800/60">
        <div class="flex items-center justify-between mb-2">
          <span class="text-xs font-semibold text-zinc-300">Edit Past Session</span>
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
        <p class="text-[0.7rem] text-zinc-400 mt-2">Retroactive timestamp editing with chronological integrity constraints.</p>
      </div>
    </div>

    <div class="order-1 md:order-2">
      <h3 class="text-[2rem] font-bold tracking-tight mb-[1.5rem] leading-tight dark:text-white">
        Dynamic Time Goals &<br/>Manual Audit Trail
      </h3>
      <p class="text-[1.1rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed mb-[1.5rem]">
        For goal-oriented professionals, TimeTrack enables setting strict duration targets (target `GOAL` or spending cap `MAX_TIME`), configurable for individual activities or broad project categories.
      </p>
      <p class="text-[1.1rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed mb-[1.5rem]">
        Reactive progress indicators visually benchmark proximity to weekly deadlines, sustaining steady momentum across sprints.
      </p>
      <p class="text-[1.1rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed">
        For away-from-keyboard work or missed timers, the <strong>manual entry and editing interface</strong> allows retroactive adjustments or record pruning, preserving an accurate historical ledger.
      </p>
    </div>
  </section>

  <!-- 4. BOX FINALE: UNDER THE HOOD -->
  <section class="bg-gray-50 dark:bg-[#111] rounded-[2rem] p-[4rem] text-center mt-[2rem]">
    <h3 class="text-[2.5rem] font-bold tracking-tight mb-[1.5rem] dark:text-white">Technical Excellence</h3>
    <p class="text-[1.2rem] text-gray-500 dark:text-gray-400 font-light max-w-[42rem] mx-auto leading-relaxed mb-[4rem]">
      A robust software engine engineered with <strong>Java 23</strong> and <strong>Spring Boot 3</strong>, designed strictly according to Clean Architecture principles.
    </p>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-x-[4rem] gap-y-[3rem] text-left max-w-[55rem] mx-auto">
      <div>
        <h4 class="text-[1.1rem] font-bold dark:text-white uppercase tracking-widest mb-[0.7rem] text-emerald-500">MVC Pattern & Clean Code</h4>
        <p class="text-[1.05rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed">
          Clean separation of concerns: specialized web controllers, an isolated transactional service layer for business logic, and JPA repositories interfacing with PostgreSQL. Comprehensive documentation and enterprise-grade code cleanliness.
        </p>
      </div>
      <div>
        <h4 class="text-[1.1rem] font-bold dark:text-white uppercase tracking-widest mb-[0.7rem] text-emerald-500">Spring Security Hardening & CSRF</h4>
        <p class="text-[1.05rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed">
          Multi-tenant logical isolation enforced at the service level via <code>@PreAuthorize</code> expressions, preventing Insecure Direct Object Reference (IDOR) vulnerabilities. Synchronizer CSRF tokens verified across all forms and asynchronous mutations.
        </p>
      </div>
      <div>
        <h4 class="text-[1.1rem] font-bold dark:text-white uppercase tracking-widest mb-[0.7rem] text-emerald-500">Immutable Temporal Math (JVM 23)</h4>
        <p class="text-[1.05rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed">
          Temporal calculations avoid rounding anomalies and timezone pitfalls by relying natively on immutable <code>java.time.Duration</code> and <code>LocalDateTime</code> primitives. Conversion to human-readable strings (hh:mm:ss) is delegated to custom Thymeleaf formatters.
        </p>
      </div>
      <div>
        <h4 class="text-[1.1rem] font-bold dark:text-white uppercase tracking-widest mb-[0.7rem] text-emerald-500">Shadcn Dark Design System</h4>
        <p class="text-[1.05rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed">
          Replaced monolithic legacy frameworks with a lightweight, ultra-reactive Tailwind CSS front end. Features a modern dark aesthetic inspired by Shadcn UI (Zinc palette and balanced contrast ratios), smooth dialog modals, and Lucide vector icons.
        </p>
      </div>
    </div>
  </section>

</div>
