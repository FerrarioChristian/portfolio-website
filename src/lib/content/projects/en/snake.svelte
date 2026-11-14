<div class="flex flex-col gap-[6rem] pb-[4rem] mt-[2rem]">
  
  <!-- HERO -->
  <section class="text-center max-w-[52rem] mx-auto px-[5%] lg:px-0">
    <h2 class="text-[2.5rem] lg:text-[4rem] font-bold tracking-tight mb-[1.5rem] leading-tight dark:text-white">
      Not just a retro game.<br/>A real-time & DevOps testbed.
    </h2>
    <p class="text-[1.2rem] lg:text-[1.4rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed">
      Beneath the surface of a classic 2D arcade title lies a complete distributed system. <strong>Snakey</strong> was engineered to tackle the core technical challenges of competitive multiplayer gaming: state synchronization over WebSockets via an authoritative Node.js backend, network bandwidth optimization via delta broadcasting, multi-room matchmaking with live spectators, and an automated zero-downtime containerized CI/CD delivery pipeline.
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
              <span class="text-xs font-bold text-blue-600 dark:text-blue-400 font-mono">Player 1</span>
              <span class="w-2 h-2 rounded-full bg-blue-500"></span>
            </div>
            <code class="text-[0.7rem] text-gray-600 dark:text-gray-400 font-mono">emit("playerMoved", "UP")</code>
          </div>
          <div class="p-3 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-black flex flex-col gap-1 text-right">
            <div class="flex items-center justify-between">
              <span class="w-2 h-2 rounded-full bg-red-500"></span>
              <span class="text-xs font-bold text-red-600 dark:text-red-400 font-mono">Player 2</span>
            </div>
            <code class="text-[0.7rem] text-gray-600 dark:text-gray-400 font-mono">emit("playerMoved", "LEFT")</code>
          </div>
        </div>

        <!-- Node.js Authoritative Engine Box -->
        <div class="p-3.5 rounded-xl border border-gray-300 dark:border-white/20 bg-white dark:bg-black flex flex-col gap-2">
          <div class="flex items-center justify-between">
            <span class="text-xs font-mono font-bold text-gray-900 dark:text-white">Node.js Server Authority (100ms Tick)</span>
            <span class="text-[0.65rem] text-emerald-600 dark:text-emerald-400 font-mono font-semibold">Single Arbiter</span>
          </div>
          <div class="flex flex-col gap-1 font-mono text-[0.7rem] text-gray-600 dark:text-gray-400">
            <div>• <strong class="text-gray-800 dark:text-gray-200">180° Anti-Suicide:</strong> Discards instantaneous reverse turns</div>
            <div>• <strong class="text-gray-800 dark:text-gray-200">Spatial Matrix:</strong> Evaluates border, body collisions and draws</div>
            <div>• <strong class="text-gray-800 dark:text-gray-200">Global State:</strong> Manages apple spawns and body extensions</div>
          </div>
        </div>

        <!-- Delta Broadcast Comparison Box -->
        <div class="p-3.5 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-black flex flex-col gap-2">
          <div class="flex items-center justify-between">
            <span class="text-xs font-mono font-bold text-purple-600 dark:text-purple-400">Delta Broadcasting vs Full Matrix</span>
            <span class="text-[0.65rem] text-purple-600 dark:text-purple-400 font-mono font-semibold">-97% Payload</span>
          </div>
          <div class="flex items-center justify-between text-[0.75rem] font-mono text-gray-500 dark:text-gray-400 pt-1">
            <span>Full Matrix: <strong class="text-gray-700 dark:text-gray-300">~4.8 KB / tick</strong></span>
            <span>➔</span>
            <span>Delta Broadcast: <strong class="text-emerald-600 dark:text-emerald-400">~120 B / tick</strong></span>
          </div>
        </div>
      </div>
    </div>

    <!-- Text Right -->
    <div class="order-1 md:order-2">
      <h3 class="text-[2rem] font-bold tracking-tight mb-[1.5rem] leading-tight dark:text-white">
        Server-Authoritative State &<br/>Delta Broadcasting
      </h3>
      <p class="text-[1.1rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed mb-[1.5rem]">
        In peer-to-peer or client-simulated multiplayer architectures, network latency desynchronization and client memory tampering are persistent hazards. In Snakey, all core game logic resides entirely within the <strong>Node.js</strong> backend.
      </p>
      <p class="text-[1.1rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed mb-[1.5rem]">
        Clients serve as visual render targets: they sample keyboard or touch inputs and stream direction intent vectors. The server evaluates the grid at a constant 10 updates per second, ensuring zero possibility of speed exploits or illegal corner-cutting.
      </p>
      <ul class="flex flex-col gap-[1rem] text-[1.05rem] text-gray-500 dark:text-gray-400 font-light">
        <li>
          <strong class="text-gray-900 dark:text-white font-semibold">180° Anti-Suicide Prevention:</strong> If a snake moves right, accidental reverse presses (left arrow) are discarded server-side before execution, preventing self-collisions during rapid turns even over imperfect network connections.
        </li>
        <li>
          <strong class="text-gray-900 dark:text-white font-semibold">Delta Broadcasting:</strong> Rather than serializing whole-snake coordinate arrays every frame, payloads encode strictly mutated cells (new head segment and deallocated tail), cutting network bandwidth by more than 80%.
        </li>
      </ul>
    </div>
  </section>

  <!-- 2. ROOM SYSTEM & SPECTATORS (TEXT LEFT, PREVIEW RIGHT) -->
  <section class="grid grid-cols-1 md:grid-cols-2 gap-[4rem] items-center px-[5%] lg:px-0">
    <div>
      <h3 class="text-[2rem] font-bold tracking-tight mb-[1.5rem] leading-tight dark:text-white">
        Multi-Room Matchmaking &<br/>Live Spectator Mode
      </h3>
      <p class="text-[1.1rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed mb-[1.5rem]">
        One of the major architectural evolutions was transitioning from a single global match server to a modular in-memory <strong>RoomManager</strong>, capable of orchestrating dozens of isolated concurrent 1v1 duels.
      </p>
      <ul class="flex flex-col gap-[1.5rem] text-[1.1rem] text-gray-500 dark:text-gray-400 font-light">
        <li>
          <strong class="text-gray-900 dark:text-white font-semibold">Public & Private Lobbies:</strong> Players can jump into quick matchmaking across public rooms or generate private sessions protected by unique alphanumeric codes (e.g. <code class="font-mono text-gray-800 dark:text-gray-200">?room=ABCD12</code>), sharable with a one-click invite link.
        </li>
        <li>
          <strong class="text-gray-900 dark:text-white font-semibold">Unlimited Live Spectators:</strong> Users joining a full match (2/2 players) are seamlessly assigned spectator status, receiving synchronized game state updates in a dedicated view without impacting active gameplay.
        </li>
        <li>
          <strong class="text-gray-900 dark:text-white font-semibold">Game Loop Garbage Collection:</strong> As soon as all players and spectators vacate a room, the game loop timer is safely cleared and the room instance is deallocated, preventing memory leaks in the Node.js process.
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
            <span class="font-mono text-xs font-bold text-gray-900 dark:text-white">Room #PUB-842 (Public)</span>
            <span class="text-[0.65rem] text-emerald-600 dark:text-emerald-400 font-mono font-semibold">Active • 100ms Loop</span>
          </div>
          <div class="grid grid-cols-2 gap-2 text-[0.72rem] font-mono text-gray-600 dark:text-gray-400">
            <div class="p-2 rounded bg-white dark:bg-black border border-gray-200 dark:border-white/10">
              <strong class="text-gray-900 dark:text-white">Players: 2/2</strong><br/>
              Socket P1 ⚔️ Socket P2
            </div>
            <div class="p-2 rounded bg-white dark:bg-black border border-gray-200 dark:border-white/10">
              <strong class="text-purple-600 dark:text-purple-400">Spectators: 4</strong><br/>
              Read-only stream
            </div>
          </div>
        </div>

        <!-- Room Instance 2 -->
        <div class="p-3.5 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-black flex flex-col gap-2">
          <div class="flex items-center justify-between">
            <span class="font-mono text-xs font-bold text-gray-900 dark:text-white">Room #PRIV-09 (Private)</span>
            <span class="text-[0.65rem] text-amber-600 dark:text-amber-400 font-mono font-semibold">Waiting Match</span>
          </div>
          <div class="text-[0.72rem] font-mono text-gray-600 dark:text-gray-400 p-2 rounded bg-white dark:bg-black border border-gray-200 dark:border-white/10">
            Socket P1 connected • Accessible strictly via unique code or direct invite link
          </div>
        </div>

        <!-- Lifecycle GC Note -->
        <div class="p-2.5 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-black flex items-center justify-between text-[0.7rem] font-mono text-gray-500 dark:text-gray-400">
          <span>Lifecycle GC:</span>
          <span class="text-gray-700 dark:text-gray-300">Room empty ➔ clearInterval() ➔ RAM Deallocated</span>
        </div>
      </div>
    </div>
  </section>

  <!-- 3. DEVOPS & CI/CD PIPELINE (FULL-WIDTH RIGOROUS BLOCK) -->
  <section class="bg-white dark:bg-black border border-gray-200 dark:border-white/10 rounded-[2rem] corner-squircle p-[3rem] lg:p-[4rem]">
    <div class="text-center max-w-[44rem] mx-auto mb-[3.5rem]">
      <h3 class="text-[2.2rem] lg:text-[2.6rem] font-bold tracking-tight mb-[1rem] dark:text-white">
        DevOps Engineering & CI/CD Pipeline
      </h3>
      <p class="text-[1.15rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed">
        Software release automation is the core methodology of the project: every code update goes through rigorous regression verification and ships to production with zero service downtime.
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
        <h4 class="text-[1.2rem] font-bold text-gray-900 dark:text-white">Automated Tests & Linting</h4>
        <p class="text-[0.95rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed">
          On every commit and PR, runners execute ESLint syntax checks and launch an isolated test suite with Vitest (25 unit tests and 6 integration tests), validating collisions, RoomManager, and movements prior to merge approval.
        </p>
      </div>

      <!-- Step 2 -->
      <div class="p-[2rem] rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-black flex flex-col gap-3">
        <div class="flex items-center justify-between">
          <span class="font-mono text-xs font-bold text-gray-900 dark:text-white px-2 py-0.5 rounded border border-gray-300 dark:border-white/20">02 • BUILD</span>
          <span class="text-[0.7rem] font-mono text-blue-600 dark:text-blue-400 font-semibold">&lt; 100 MB Image</span>
        </div>
        <h4 class="text-[1.2rem] font-bold text-gray-900 dark:text-white">Multi-Stage Docker</h4>
        <p class="text-[0.95rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed">
          The multi-stage build compiles the React bundle with Vite and packages a lightweight production image with Node.js and an Nginx reverse proxy, handling WebSocket upgrades and Gzip compression natively.
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
          The pipeline securely connects to the remote Linux server via SSH, pulls updated registry image layers, and executes controlled container replacement with zero service disruption.
        </p>
      </div>
    </div>
  </section>

  <!-- 4. FRONTEND CRAFT & MOBILE RESPONSIVENESS (CONCRETE TECHNICAL SCHEMA) -->
  <section class="grid grid-cols-1 md:grid-cols-2 gap-[4rem] items-center px-[5%] lg:px-0">
    <div>
      <h3 class="text-[2rem] font-bold tracking-tight mb-[1.5rem] leading-tight dark:text-white">
        Reactive Frontend &<br/>100dvh Mobile Experience
      </h3>
      <p class="text-[1.1rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed mb-[1.5rem]">
        Canvas-based mobile web games frequently suffer from touch input lag, cropped navigation bars, and accidental viewport scrolling. Snakey was engineered with targeted solutions to provide identical responsiveness across smartphones and desktops:
      </p>
      <ul class="flex flex-col gap-[1.5rem] text-[1.1rem] text-gray-500 dark:text-gray-400 font-light">
        <li>
          <strong class="text-gray-900 dark:text-white font-semibold">Touch Latency Elimination:</strong> Mobile browsers introduce a 300ms delay between touchstart and simulated click to detect double taps. Implementing native <code class="font-mono text-gray-800 dark:text-gray-200">onTouchStart</code> listeners with <code class="font-mono text-gray-800 dark:text-gray-200">preventDefault()</code> removes the delay completely, delivering 0ms response.
        </li>
        <li>
          <strong class="text-gray-900 dark:text-white font-semibold">100dvh Constrained Viewport:</strong> The interface conforms to Dynamic Viewport Height on iOS and Android: header and scoreboard HUD take minimal fixed heights, while the square arena scales automatically to all remaining space, preventing vertical page overflow.
        </li>
        <li>
          <strong class="text-gray-900 dark:text-white font-semibold">Zero External UI Dependencies:</strong> Handcrafted lightweight SVG vector icons, 60 FPS HTML5 Canvas rendering, and zero heavy animation libraries keep bundle sizes minimal and load times instant.
        </li>
      </ul>
    </div>

    <!-- Technical Schema: Mobile Viewport Budget & Touch Pipeline -->
    <div class="bg-white dark:bg-black border border-gray-200 dark:border-white/10 rounded-[2rem] corner-squircle p-[2.5rem] flex flex-col gap-[1.75rem]">
      <span class="text-xs uppercase tracking-widest text-gray-700 dark:text-gray-300 font-semibold font-mono">Mobile Viewport Budget & Touch Pipeline</span>

      <!-- Touch Latency Architecture Comparison -->
      <div class="p-3.5 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-black flex flex-col gap-2">
        <span class="text-xs font-mono font-bold text-gray-900 dark:text-white">Touch Input Dispatch Pipeline</span>
        <div class="flex flex-col gap-1.5 font-mono text-[0.72rem]">
          <div class="p-2 rounded border border-gray-200 dark:border-white/10 text-gray-500 dark:text-gray-400">
            <span class="text-red-500 font-bold">Standard Web:</span> touchstart ➔ 300ms wait ➔ synthesized click <span class="text-red-400">(Noticeable input lag)</span>
          </div>
          <div class="p-2 rounded border border-emerald-300 dark:border-emerald-500/30 text-gray-800 dark:text-gray-200">
            <span class="text-emerald-600 dark:text-emerald-400 font-bold">Snakey Touch:</span> touchstart ➔ preventDefault() ➔ sendMove() <span class="text-emerald-500 font-bold">(0ms direct latency)</span>
          </div>
        </div>
      </div>

      <!-- 100dvh Height Allocation Breakdown -->
      <div class="p-3.5 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-black flex flex-col gap-2">
        <div class="flex items-center justify-between">
          <span class="text-xs font-mono font-bold text-gray-900 dark:text-white">Vertical Viewport Allocation (100dvh)</span>
          <span class="text-[0.65rem] font-mono text-blue-600 dark:text-blue-400 font-semibold">Zero Scroll</span>
        </div>
        <div class="flex flex-col gap-1.5 font-mono text-[0.72rem] text-gray-600 dark:text-gray-400">
          <div class="flex items-center justify-between p-1.5 rounded bg-white dark:bg-black border border-gray-200 dark:border-white/10">
            <span>Compact Header (Brand + Room Code + Actions)</span>
            <strong class="text-gray-900 dark:text-white">40 px</strong>
          </div>
          <div class="flex items-center justify-between p-1.5 rounded bg-white dark:bg-black border border-gray-200 dark:border-white/10">
            <span>Scoreboard HUD (Horizontal single-row)</span>
            <strong class="text-gray-900 dark:text-white">36 px</strong>
          </div>
          <div class="flex items-center justify-between p-1.5 rounded bg-white dark:bg-black border border-gray-200 dark:border-white/10">
            <span>Arena Canvas (Square, 1:1 auto-scaling)</span>
            <strong class="text-blue-600 dark:text-blue-400">Flex 1 (Remainder)</strong>
          </div>
          <div class="flex items-center justify-between p-1.5 rounded bg-white dark:bg-black border border-gray-200 dark:border-white/10">
            <span>Virtual touch D-Pad + canvas swipe gestures</span>
            <strong class="text-gray-900 dark:text-white">138 px</strong>
          </div>
        </div>
      </div>
    </div>
  </section>

</div>
