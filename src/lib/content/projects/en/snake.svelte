<div class="flex flex-col gap-[6rem] pb-[4rem]">
  <section class="text-center max-w-[50rem] mx-auto px-[5%] lg:px-0">
    <h2 class="text-[2.5rem] lg:text-[4rem] font-bold tracking-tight mb-[1.5rem] leading-tight dark:text-white">
      Not just a game.<br/>A seamless pipeline.
    </h2>
    <p class="text-[1.2rem] lg:text-[1.4rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed">
      Beneath the surface of a classic real-time multiplayer game, Snake encapsulates an enterprise automation infrastructure. Built for an academic curriculum, the project focuses on DevOps best practices, Continuous Integration, and Continuous Deployment (CI/CD).
    </p>
  </section>

  <section class="grid grid-cols-1 md:grid-cols-2 gap-[4rem] items-center px-[5%] lg:px-0">
    <div class="order-2 md:order-1 bg-gray-100 dark:bg-[#1a1a1a] rounded-[2rem] aspect-[4/5] flex items-center justify-center p-[2rem]">
      <span class="text-gray-400 font-medium text-center">CI/CD Pipeline Diagram<br/>& Real-Time Gameplay</span>
    </div>
    <div class="order-1 md:order-2">
      <h3 class="text-[2.5rem] font-bold tracking-tight mb-[1.5rem] leading-tight dark:text-white">Continuous Delivery<br/>at Every Commit</h3>
      <p class="text-[1.2rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed mb-[2rem]">
        The software release lifecycle is managed end-to-end by automated workflows, guaranteeing that every line of code satisfies rigorous quality and regression checks prior to production deployment.
      </p>
      
      <ul class="flex flex-col gap-[1.5rem] text-[1.1rem] text-gray-500 dark:text-gray-400 font-light">
        <li><strong class="text-gray-900 dark:text-white font-semibold">Continuous Integration:</strong> Every push and pull request triggers GitHub Actions executing linting, formatting enforcement, and automated unit/integration test suites for the Node.js backend.</li>
        <li><strong class="text-gray-900 dark:text-white font-semibold">Multi-Stage Docker Builds:</strong> Verified codebases compile into minimal, secure multi-stage Docker container images tagged and pushed to container registries.</li>
        <li><strong class="text-gray-900 dark:text-white font-semibold">Continuous Deployment:</strong> Pipelines establish encrypted SSH sessions with the production host, pull the latest image layers, and execute seamless container replacement without manual intervention.</li>
      </ul>
    </div>
  </section>

  <section class="bg-gray-50 dark:bg-[#111] rounded-[2rem] p-[4rem] text-center mt-[2rem]">
    <h3 class="text-[2.5rem] font-bold tracking-tight mb-[1.5rem] dark:text-white">The Multiplayer Core</h3>
    <p class="text-[1.2rem] text-gray-500 dark:text-gray-400 font-light max-w-[40rem] mx-auto leading-relaxed mb-[4rem]">
      Beyond pipeline architecture, distributed multiplayer games present real engineering constraints to ensure synchronized authoritative state.
    </p>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-x-[4rem] gap-y-[3rem] text-left max-w-[55rem] mx-auto">
      <div>
        <h4 class="text-[1.1rem] font-bold dark:text-white uppercase tracking-widest mb-[0.7rem] text-green-500">Real-Time WebSockets</h4>
        <p class="text-[1.05rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed">
          Built on <strong class="font-medium text-gray-700 dark:text-gray-300">Node.js</strong> and Socket.io, the backend operates as the authoritative state arbiter. Clients emit simple directional input intents (UP, DOWN, LEFT, RIGHT), while the server tick-loop evaluates spatial collision boundaries at 10+ updates per second.
        </p>
      </div>
      <div>
        <h4 class="text-[1.1rem] font-bold dark:text-white uppercase tracking-widest mb-[0.7rem] text-green-500">Delta Broadcasting</h4>
        <p class="text-[1.05rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed">
          To prevent bandwidth saturation during concurrent matches, the server broadcasts state deltas (transmitting only updated head extensions and tail removals) rather than whole-board matrices, slashing packet size and smoothing latency spikes.
        </p>
      </div>
    </div>
  </section>
</div>
