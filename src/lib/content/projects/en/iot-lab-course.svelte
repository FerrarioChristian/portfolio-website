<div class="flex flex-col gap-[6rem] pb-[4rem] mt-[2rem]">
  
  <!-- HERO -->
  <section class="text-center max-w-[50rem] mx-auto px-[5%] lg:px-0">
    <h2 class="text-[2.5rem] lg:text-[4rem] font-bold tracking-tight mb-[1.5rem] leading-tight dark:text-white">
      Protecting the past.<br/>With the technology of the future.
    </h2>
    <p class="text-[1.2rem] lg:text-[1.4rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed">
      Smart Museum Case is a decentralized IoT system engineered for environmental monitoring and physical security of cultural artifacts. It merges a distributed Web of Things architecture with low-level embedded C++ firmware on ESP8266 nodes.
    </p>
  </section>

  <!-- 1. IMAGE LEFT -->
  <section class="grid grid-cols-1 md:grid-cols-2 gap-[4rem] items-center px-[5%] lg:px-0">
    <div class="order-2 md:order-1 bg-gray-100 dark:bg-[#1a1a1a] rounded-[2rem] aspect-[4/3] flex items-center justify-center p-[2rem]">
      <span class="text-gray-400 font-medium text-center">Image: Sensor Node & ESP8266<br/>installed inside display case</span>
    </div>
    <div class="order-1 md:order-2">
      <h3 class="text-[2rem] font-bold tracking-tight mb-[1.5rem] leading-tight dark:text-white">System Architecture<br/>& Sensor Array</h3>
      <p class="text-[1.1rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed mb-[1.5rem]">
        How can cultural treasures be protected without compromising the aesthetics of a museum exhibition? This system transforms conventional glass display cases into autonomous, intelligent sentinels.
      </p>
      <p class="text-[1.1rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed">
        The hardware is partitioned into compact sensor nodes hidden within display enclosures—equipped with optical flame detectors, gyroscopic IMU sensors to identify tampering or lifting, and photoresistors to protect delicate pigments from excessive lux exposure. An exhibition hall Master Node with an LCD screen and rotary encoder provides local administrative controls for security staff.
      </p>
    </div>
  </section>

  <!-- 2. IMAGE RIGHT -->
  <section class="grid grid-cols-1 md:grid-cols-2 gap-[4rem] items-center px-[5%] lg:px-0">
    <div>
      <h3 class="text-[2rem] font-bold tracking-tight mb-[1.5rem] leading-tight dark:text-white">Decentralized<br/>Architecture</h3>
      <p class="text-[1.1rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed mb-[1.5rem]">
        The system rejects brittle client-server bottlenecks in favor of the <strong>Web of Things (WoT)</strong> paradigm mediated by an MQTT broker, guaranteeing fault tolerance without requiring expensive on-premises servers.
      </p>
      <ul class="flex flex-col gap-[1.5rem] text-[1.1rem] text-gray-500 dark:text-gray-400 font-light mt-[2rem]">
        <li><strong class="text-gray-900 dark:text-white font-semibold">Dynamic Discovery:</strong> Upon boot, the Master Node broadcasts an audit query. Sensor nodes respond with structured JSON "Thing Descriptions", allowing the master to configure capabilities dynamically in true plug-and-play fashion.</li>
        <li><strong class="text-gray-900 dark:text-white font-semibold">Last Will and Testament:</strong> Using MQTT QoS 1, if a node is physically compromised or loses battery, the broker immediately executes its registered Last Will and Testament (LWT) message, pinpointing the fault and preventing stale alert states.</li>
      </ul>
    </div>
    <div class="bg-gray-100 dark:bg-[#1a1a1a] rounded-[2rem] aspect-[4/3] flex items-center justify-center p-[2rem]">
      <span class="text-gray-400 font-medium text-center">Image: Architecture Blueprint<br/>(WoT / MQTT Schema)</span>
    </div>
  </section>

  <!-- 3. IMAGE LEFT -->
  <section class="grid grid-cols-1 md:grid-cols-2 gap-[4rem] items-center px-[5%] lg:px-0">
    <div class="order-2 md:order-1 bg-gray-100 dark:bg-[#1a1a1a] rounded-[2rem] aspect-[4/3] flex items-center justify-center p-[2rem]">
      <span class="text-gray-400 font-medium text-center">Image: Telegram Bot Interface<br/>& Captive Portal</span>
    </div>
    <div class="order-1 md:order-2">
      <h3 class="text-[2rem] font-bold tracking-tight mb-[1.5rem] leading-tight dark:text-white">Remote Telemetry<br/>& API Ecosystem</h3>
      <p class="text-[1.1rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed mb-[1.5rem]">
        Human-machine interaction is not confined to the physical LCD mounted on the master node, extending actively into modern web and messaging channels.
      </p>
      <ul class="flex flex-col gap-[1.5rem] text-[1.1rem] text-gray-500 dark:text-gray-400 font-light mt-[2rem]">
        <li><strong class="text-gray-900 dark:text-white font-semibold">Bidirectional Telegram Bot:</strong> In addition to instant push alerts, security personnel can communicate with the museum network to disarm individual cases or silence sirens remotely.</li>
        <li><strong class="text-gray-900 dark:text-white font-semibold">Weather API Integration:</strong> Firmware correlates indoor light readings with asynchronous external weather APIs (evaluating outdoor UV indices) to alert staff when natural illumination threatens artwork integrity.</li>
        <li><strong class="text-gray-900 dark:text-white font-semibold">Captive Portal & EEPROM:</strong> Zero-hardcoding credentials. On initial startup, nodes spawn a Wi-Fi Access Point allowing smartphone configuration, storing SSIDs and keys permanently in non-volatile EEPROM.</li>
      </ul>
    </div>
  </section>

  <!-- 4. IMAGE RIGHT -->
  <section class="grid grid-cols-1 md:grid-cols-2 gap-[4rem] items-center px-[5%] lg:px-0">
    <div>
      <h3 class="text-[2rem] font-bold tracking-tight mb-[1.5rem] leading-tight dark:text-white">Energy<br/>Optimization</h3>
      <p class="text-[1.1rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed mb-[1.5rem]">
        Installed directly on ancient pedestals, power cables are structurally unacceptable. The entire sensor fleet is engineered to maximize operational longevity on small lithium battery cells.
      </p>
      <p class="text-[1.1rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed">
        The firmware executes aggressive <strong>Auto Light-Sleep</strong> routines that disable the Wi-Fi radio between telemetry beacons (cutting power draw by over 75%). Static nodes drop into deep sleep (1.5mA), reawakening exclusively through hardware pin interrupts upon vibration or flame detection.
      </p>
    </div>
    <div class="bg-gray-100 dark:bg-[#1a1a1a] rounded-[2rem] aspect-[4/3] flex items-center justify-center p-[2rem]">
      <span class="text-gray-400 font-medium text-center">Image: Battery Profiles<br/>Deep/Light Sleep Benchmarks</span>
    </div>
  </section>

  <!-- BOX FINALE: UNDER THE HOOD -->
  <section class="bg-gray-50 dark:bg-[#111] rounded-[2rem] p-[4rem] text-center mt-[2rem]">
    <h3 class="text-[2.5rem] font-bold tracking-tight mb-[1.5rem] dark:text-white">Hardware Challenges</h3>
    <p class="text-[1.2rem] text-gray-500 dark:text-gray-400 font-light max-w-[40rem] mx-auto leading-relaxed mb-[4rem]">
      Writing embedded C++ directly for microcontrollers requires mastering hardware concurrency to guarantee safety-critical responsiveness.
    </p>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-x-[4rem] gap-y-[3rem] text-left max-w-[55rem] mx-auto">
      <div>
        <h4 class="text-[1.1rem] font-bold dark:text-white uppercase tracking-widest mb-[0.7rem] text-teal-500">Hardware Interrupts (ISR)</h4>
        <p class="text-[1.05rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed">
          Polling in a standard super-loop risks missing millisecond shock transients or fast encoder detents. Critical sensor events bind <strong>Interrupt Service Routines (ISRs)</strong> directly to physical hardware pins, guaranteeing preemptive, deterministic event handling.
        </p>
      </div>
      <div>
        <h4 class="text-[1.1rem] font-bold dark:text-white uppercase tracking-widest mb-[0.7rem] text-teal-500">Non-Blocking Ticker Routines</h4>
        <p class="text-[1.05rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed">
          TLS handshakes to Telegram servers consume hundreds of milliseconds, which would freeze a single-core processor. I decoupled piezo alarm sound generators and state checks using hardware timer <strong>Ticker interrupts</strong>, keeping life-safety routines independent of blocking network I/O.
        </p>
      </div>
    </div>
  </section>

</div>
