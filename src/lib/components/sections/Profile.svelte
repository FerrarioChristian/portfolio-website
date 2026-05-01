<script lang="ts">
</script>

<section id="profile" class="relative flex justify-center lg:gap-[5rem] h-fit lg:h-[80vh] flex-col lg:flex-row mb-[6rem] lg:mb-0 lg:px-[10rem] px-[5%] pt-[4vh] box-border">
  <div class="flex shrink-0 h-[275px] w-[275px] lg:h-[400px] lg:w-[400px] mx-auto lg:mx-0 mb-[2rem] lg:my-auto rounded-full overflow-hidden">
    <img
      class="max-w-none"
      style="scale: 1.23; position: relative; top: 59%; left: 60%; transform: translate(-50%, -50%);"
      src="/assets/profile-pic.png"
      alt="Christian Ferrario profile picture"
    />
  </div>
  <div class="self-center text-center">
    <p class="font-semibold text-[var(--color-brand-gray)] text-center">Hello, I'm</p>
    <h1 class="text-[2rem] lg:text-[3rem] text-center">Christian Ferrario</h1>
    <p class="font-semibold text-[var(--color-brand-gray)] text-[1.25rem] lg:text-[1.75rem] mb-[1rem]">Software Engineer</p>
    <div class="flex justify-center gap-[1rem] flex-wrap lg:flex-nowrap" data-type="link">
      <button
        class="font-semibold transition-all duration-300 p-[1rem] w-[8rem] box-content rounded-[2rem] border-[0.1rem] border-[#353535] bg-black text-white hover:underline hover:underline-offset-[0.2rem] interactable"
        onclick={() => window.open('/assets/CV Christian Ferrario.pdf')}
      >
        Download CV
      </button>
      <button
        class="font-semibold transition-all duration-300 p-[1rem] w-[8rem] box-content rounded-[2rem] border-[0.1rem] border-[#353535] bg-transparent text-black hover:underline hover:underline-offset-[0.2rem] interactable"
        onclick={() => location.href='#contact'}
      >
        Contact Info
      </button>
    </div>
    <div class="flex justify-center mt-[1rem] gap-[1rem]">
      <a
        class="interactable transition-transform duration-300"
        href="https://www.linkedin.com/in/christian-ferrario/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="/assets/linkedin.png"
          alt="My LinkedIn profile"
          class="h-[2rem]"
        />
      </a>

      <a
        class="interactable transition-transform duration-300"
        href="https://github.com/FerrarioChristian/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="/assets/github.png"
          alt="My Github profile"
          class="h-[2rem]"
        />
      </a>
    </div>
  </div>
  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
  <img
    src="/assets/arrow.png"
    alt="Arrow icon"
    class="h-[2rem] absolute right-[3rem] bottom-[2.5rem] scale-125 interactable hidden lg:block cursor-pointer"
    onclick={() => location.href='#about'}
  />
</section>
