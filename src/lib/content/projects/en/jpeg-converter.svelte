<div class="flex flex-col gap-[6rem] pb-[4rem] mt-[2rem]">
  
  <!-- HERO -->
  <section class="text-center max-w-[50rem] mx-auto px-[5%] lg:px-0">
    <h2 class="text-[2.5rem] lg:text-[4rem] font-bold tracking-tight mb-[1.5rem] leading-tight dark:text-white">
      Reconstructing human vision.
    </h2>
    <p class="text-[1.2rem] lg:text-[1.4rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed">
      Raw bitmap images consume massive storage by preserving imperceptible spatial high frequencies. Built as an academic and scientific case study, this simulator implements the JPEG compression algorithm from scratch via the 2D Discrete Cosine Transform (DCT2): an end-to-end ecosystem combining a pure Python algebraic engine, Huffman entropy modeling, real-time quality metrics, and a refined dark-mode GUI to evaluate and quantify signal degradation.
    </p>
  </section>

  <!-- 1. IMAGE LEFT -->
  <section class="grid grid-cols-1 md:grid-cols-2 gap-[4rem] items-center px-[5%] lg:px-0">
    <img src="/assets/projects/jpeg-converter/dct-basis.png" alt="2D DCT 8x8 orthogonal basis functions" class="order-2 md:order-1 w-full h-auto object-cover rounded-[2rem]" />
    <div class="order-1 md:order-2">
      <h3 class="text-[2rem] font-bold tracking-tight mb-[1.5rem] leading-tight dark:text-white">From Spatial Domain<br/>to Frequency Spectra</h3>
      <p class="text-[1.1rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed mb-[1.5rem]">
        The algorithmic foundation avoids pre-compiled black-box libraries. I implemented the orthogonal basis matrix of the <strong>2D DCT</strong> in pure Python starting directly from theoretical signal projection equations.
      </p>
      <p class="text-[1.1rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed">
        The input image is partitioned into discrete <code>F &times; F</code> blocks (standard 8x8). For each block, the engine isolates the DC coefficient (representing overall mean luminance) and distributes visual energy across AC coefficients corresponding to increasing spatial frequencies.
      </p>
    </div>
  </section>

  <!-- 2. IMAGE RIGHT -->
  <section class="grid grid-cols-1 md:grid-cols-2 gap-[4rem] items-center px-[5%] lg:px-0">
    <div>
      <h3 class="text-[2rem] font-bold tracking-tight mb-[1.5rem] leading-tight dark:text-white">Quantization &<br/>Huffman Entropy</h3>
      <p class="text-[1.1rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed mb-[1.5rem]">
        Once mapped into frequency space, a diagonal truncation mask controlled by the parameter threshold <code>d</code> (tunable via interactive slider or numeric input) zeroes out high-frequency coefficients where <code>k + l &ge; d</code>.
      </p>
      <ul class="flex flex-col gap-[1.5rem] text-[1.1rem] text-gray-500 dark:text-gray-400 font-light mt-[2rem]">
        <li><strong class="text-gray-900 dark:text-white font-semibold">Theoretical Huffman Estimation:</strong> A custom pure Python module constructs a prefix tree over quantized coefficients. Enabled via a UI toggle, it calculates precise byte-level entropy estimates compared against the uncompressed raw <code>.bmp</code> file.</li>
        <li><strong class="text-gray-900 dark:text-white font-semibold">Real-Time Analytical Metrics:</strong> Image fidelity is benchmarked instantaneously by computing Peak Signal-to-Noise Ratio (PSNR), Mean Squared Error (MSE), and preserved frequency percentage.</li>
      </ul>
    </div>
    <img src="/assets/projects/jpeg-converter/metrics-panel.png" alt="Compression parameters and metrics panel" class="w-full h-auto object-cover rounded-[2rem]" />
  </section>

  <!-- 3. IMAGE LEFT -->
  <section class="grid grid-cols-1 md:grid-cols-2 gap-[4rem] items-center px-[5%] lg:px-0">
    <img src="/assets/projects/jpeg-converter/error-map.png" alt="Thermal heatmap of the Error Map with colorbar legend" class="order-2 md:order-1 w-full h-auto object-cover rounded-[2rem]" />
    <div class="order-1 md:order-2">
      <h3 class="text-[2rem] font-bold tracking-tight mb-[1.5rem] leading-tight dark:text-white">Visual<br/>Error Map</h3>
      <p class="text-[1.1rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed mb-[1.5rem]">
        What information is truly lost during high-frequency truncation? The "Show Error Map" feature generates a thermal <strong>JET Heatmap</strong> based on the absolute pixel difference matrix between original and reconstructed images.
      </p>
      <p class="text-[1.1rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed">
        Paired with an anchored 0–255 gradient colorbar legend, the Error Map reveals with surgical precision exactly which edges, fine gradients, and micro-textures were discarded by quantization.
      </p>
    </div>
  </section>

  <!-- 4. IMAGE RIGHT -->
  <section class="grid grid-cols-1 md:grid-cols-2 gap-[4rem] items-center px-[5%] lg:px-0">
    <div>
      <h3 class="text-[2rem] font-bold tracking-tight mb-[1.5rem] leading-tight dark:text-white">Interactive Zoom &<br/>Blocking Artifacts</h3>
      <p class="text-[1.1rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed mb-[1.5rem]">
        High-resolution displays often conceal subtle optical degradation. The dedicated Zoom tool provides a <strong>400% magnified inspection window</strong> rendered in pure <em>nearest-neighbor</em> filtering without misleading smoothing interpolations.
      </p>
      <p class="text-[1.1rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed">
        By clicking and panning across the canvas, users can empirically observe the emergence of characteristic <strong>blocking artifacts</strong> (grid boundary discontinuities between adjacent 8x8 blocks) as compression aggressiveness scales up.
      </p>
    </div>
    <img src="/assets/projects/jpeg-converter/zoom-inspection.png" alt="400% zoom and blocking artifact analysis" class="w-full h-auto object-cover rounded-[2rem]" />
  </section>

  <!-- 5. IMAGE LEFT -->
  <section class="grid grid-cols-1 md:grid-cols-2 gap-[4rem] items-center px-[5%] lg:px-0">
    <img src="/assets/projects/jpeg-converter/compare-slider.png" alt="Compare mode with vertical before and after slider" class="order-2 md:order-1 w-full h-auto object-cover rounded-[2rem]" />
    <div class="order-1 md:order-2">
      <h3 class="text-[2rem] font-bold tracking-tight mb-[1.5rem] leading-tight dark:text-white">Compare Slider &<br/>Adaptive Layout</h3>
      <p class="text-[1.1rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed mb-[1.5rem]">
        For live demonstrations, <strong>Compare Mode</strong> renders original and compressed views full-screen with an interactive vertical divider tracking mouse coordinates, revealing before/after differences with instantaneous feedback (quick exit via ESC).
      </p>
      <p class="text-[1.1rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed">
        In the standard 50/50 split view, clicking either canvas activates a Fullscreen Image Toggle for native resolution inspection, optimizing available screen real estate.
      </p>
    </div>
  </section>

  <!-- BOX FINALE: UNDER THE HOOD -->
  <section class="bg-gray-50 dark:bg-[#111] rounded-[2rem] p-[4rem] text-center mt-[2rem]">
    <h3 class="text-[2.5rem] font-bold tracking-tight mb-[1.5rem] dark:text-white">Under the Hood</h3>
    <p class="text-[1.2rem] text-gray-500 dark:text-gray-400 font-light max-w-[40rem] mx-auto leading-relaxed mb-[4rem]">
      Software architecture, computational complexity, and low-level algorithmic engineering.
    </p>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-x-[4rem] gap-y-[3rem] text-left max-w-[55rem] mx-auto">
      <div>
        <h4 class="text-[1.1rem] font-bold dark:text-white uppercase tracking-widest mb-[0.7rem] text-orange-500">Shadcn-Inspired CustomTkinter GUI</h4>
        <p class="text-[1.05rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed">
          Refactored the desktop client with a monochromatic dark-mode UI inspired by the Shadcn design system. Features responsive mouse canvas bindings and non-blocking dialog windows (with explicit dismiss handlers) preventing OS window manager hangs across macOS and Linux environments.
        </p>
      </div>
      <div>
        <h4 class="text-[1.1rem] font-bold dark:text-white uppercase tracking-widest mb-[0.7rem] text-orange-500">Custom Huffman Prefix Tree</h4>
        <p class="text-[1.05rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed">
          Built a variable-length entropy encoder from scratch in pure Python (<code>huffman.py</code>). It constructs priority-queue frequency trees over quantized AC/DC symbols to approximate Shannon entropy bounds and measure true serialized size versus raw <code>.bmp</code> bitmaps.
        </p>
      </div>
      <div>
        <h4 class="text-[1.1rem] font-bold dark:text-white uppercase tracking-widest mb-[0.7rem] text-orange-500">Complexity: Naive O(N³) vs SciPy O(N²logN)</h4>
        <p class="text-[1.05rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed">
          The manual orthogonal basis projects each block via triple matrix products <code>C &times; X &times; C<sup>T</sup></code> at <code>O(N³)</code> complexity. This is contrasted against SciPy's C-optimized Fast Cosine Transform utilizing FFT-based factorizations with asymptotic bound <code>O(N²logN)</code>.
        </p>
      </div>
      <div>
        <h4 class="text-[1.1rem] font-bold dark:text-white uppercase tracking-widest mb-[0.7rem] text-orange-500">Benchmark Suite & Semi-Log Plots</h4>
        <p class="text-[1.05rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed">
          An automated benchmarking pipeline (<code>run-benchmark</code> and <code>run-test</code>) profiles CPU time and memory footprint, generating semilogarithmic Matplotlib curves that empirically validate performance scaling as input dimensions grow.
        </p>
      </div>
    </div>
  </section>

</div>
