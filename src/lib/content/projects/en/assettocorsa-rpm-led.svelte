<div class="flex flex-col gap-[6rem] pb-[4rem]">
  <section class="text-center max-w-[50rem] mx-auto px-[5%] lg:px-0">
    <h2 class="text-[2.5rem] lg:text-[4rem] font-bold tracking-tight mb-[1.5rem] leading-tight dark:text-white">
      Adrenaline brought to light.
    </h2>
    <p class="text-[1.2rem] lg:text-[1.4rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed">
      Extending the simulator driving experience beyond the screen. This system captures raw Assetto Corsa telemetry in real time and orchestrates an ambient LED matrix, translating engine RPM into immediate, immersive visual feedback.
    </p>
  </section>

  <img src="/assets/projects/assetto-corsa/led.gif" alt="LEDs reacting to engine RPM" class="h-auto object-cover rounded-4xl" />

  <section class="grid grid-cols-1 md:grid-cols-2 gap-[4rem] items-center px-[5%] lg:px-0">
    <div>
      <h3 class="text-[2.5rem] font-bold tracking-tight mb-[1.5rem] leading-tight dark:text-white">From Shared Memory<br/>to Illumination</h3>
      <p class="text-[1.2rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed mb-[2rem]">
        Assetto Corsa does not rely on standard HTTP endpoints for in-game telemetry; instead, it streams physics and mechanical telemetry directly into Windows Shared Memory mapped files at high frequency.
      </p>
    </div>
    <ul class="flex flex-col gap-[1.5rem] text-[1.1rem] text-gray-500 dark:text-gray-400 font-light">
      <li><strong class="text-gray-900 dark:text-white font-semibold">Pointer Mapping:</strong> The application core hooks into these mapped memory pages, casting raw bytes into native C++ structs to read current RPM and rev-limit bounds with zero overhead.</li>
      <li><strong class="text-gray-900 dark:text-white font-semibold">Chromatic Interpolation:</strong> Mathematical normalization maps the RPM band smoothly from cool <strong class="text-green-500">green</strong> through amber to an intense <strong class="text-red-500">red</strong> as the upshift window approaches.</li>
      <li><strong class="text-gray-900 dark:text-white font-semibold">Limiter Strobe:</strong> When the engine reaches the hard limiter cutoff, the system triggers a high-frequency <strong class="text-purple-500">purple strobe</strong> prompting an instant gear shift.</li>
    </ul>
  </section>

  <section class="bg-gray-50 dark:bg-[#111] rounded-[2rem] p-[4rem] text-center mt-[2rem]">
    <h3 class="text-[2.5rem] font-bold tracking-tight mb-[1.5rem] dark:text-white">Performance Evolution</h3>
    <p class="text-[1.2rem] text-gray-500 dark:text-gray-400 font-light max-w-[40rem] mx-auto leading-relaxed mb-[4rem]">
      Originating as a Python proof-of-concept utilizing cloud-based Tuya APIs (which collapsed under rate limits and network latency), the architecture was re-engineered from the ground up for microsecond determinism and high-throughput systems performance.
    </p>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-x-[4rem] gap-y-[3rem] text-left max-w-[55rem] mx-auto">
      <div>
        <h4 class="text-[1.1rem] font-bold dark:text-white uppercase tracking-widest mb-[0.7rem] text-orange-500">Migration to Rust</h4>
        <p class="text-[1.05rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed">
          Rewriting the telemetry client in <strong class="font-medium text-gray-700 dark:text-gray-300">Rust</strong> proved transformative. Rust offers low-level access to OS memory layouts while providing ironclad memory safety guarantees and bare-metal performance. Without garbage collection pauses, telemetry reads eliminate micro-stutter entirely.
        </p>
      </div>
      <div>
        <h4 class="text-[1.1rem] font-bold dark:text-white uppercase tracking-widest mb-[0.7rem] text-orange-500">ESP32 & WLED</h4>
        <p class="text-[1.05rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed">
          Proprietary Wi-Fi controllers were replaced with an <strong class="font-medium text-gray-700 dark:text-gray-300">ESP32</strong> microcontroller running open-source <strong>WLED</strong> firmware. This dedicated hardware drives individual addressable LED channels effortlessly at a rock-solid 60 FPS.
        </p>
      </div>
      <div>
        <h4 class="text-[1.1rem] font-bold dark:text-white uppercase tracking-widest mb-[0.7rem] text-orange-500">UDP Datagram Streaming</h4>
        <p class="text-[1.05rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed">
          Instead of heavy HTTP handshakes, the client streams binary color payloads locally via connectionless <strong class="font-medium text-gray-700 dark:text-gray-300">UDP</strong> sockets (using E1.31 / DMX over IP and WLED sync), yielding sub-millisecond network transit times.
        </p>
      </div>
      <div>
        <h4 class="text-[1.1rem] font-bold dark:text-white uppercase tracking-widest mb-[0.7rem] text-orange-500">Thread Isolation</h4>
        <p class="text-[1.05rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed">
          Aggressive shared memory polling and UDP packet broadcasting run on dedicated worker threads via Rust's <em>fearless concurrency</em> abstractions, preventing any resource contention with the simulation loop on the host machine.
        </p>
      </div>
    </div>
  </section>

</div>
