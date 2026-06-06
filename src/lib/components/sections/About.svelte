<script lang="ts">
</script>

<section id="about" class="relative pt-[4vh] lg:h-[96vh] h-fit lg:mx-[10rem] mx-[5%] box-border">
  <p class="text-[var(--color-brand-gray)] dark:text-gray-300 text-center">Get To Know More</p>
  <h1 class="text-[2rem] lg:text-[3rem] text-center mb-[2rem] dark:text-white">About Me</h1>
  <div class="flex gap-[4rem] lg:h-[80%] flex-col lg:flex-row h-fit">
    <div class="flex mx-auto max-w-[100rem] justify-center flex-col w-full">
      <div class="flex gap-[2rem] mb-[2rem] mt-[2rem] lg:mt-0 flex-col xl:flex-row flex-wrap">
        <div class="flex-1 min-w-[17rem] p-[1.5rem] bg-white dark:bg-black rounded-[calc(2rem*var(--brm))] corner-squircle border-[0.1rem] border-[#a3a3a3] dark:border-gray-600 text-center">
          <img
            src="/assets/experience.png"
            alt="Experience icon"
            class="h-[2rem] mx-auto mb-2 dark:invert transition-all duration-300"
          />
          <h3 class="text-xl">Experience</h3>
          <br>
          <p class="text-[var(--color-brand-gray)] dark:text-gray-300 text-sm xl:text-base">Frontend Developer</p>
          <br>
          <p class="text-[var(--color-brand-gray)] dark:text-gray-300 text-sm xl:text-base">Software Engineer</p>
        </div>
        <div class="flex-1 min-w-[17rem] p-[1.5rem] bg-white dark:bg-black rounded-[calc(2rem*var(--brm))] corner-squircle border-[0.1rem] border-[#a3a3a3] dark:border-gray-600 text-center">
          <img
            src="/assets/education.png"
            alt="Education icon"
            class="h-[2rem] mx-auto mb-2 dark:invert transition-all duration-300"
          />
          <h3 class="text-xl">Education</h3>
          <br/>
          <p class="text-[var(--color-brand-gray)] dark:text-gray-300 text-sm xl:text-base">
            IIS A. Badoni - Informatica
          </p>
          <br/>
          <p class="text-[var(--color-brand-gray)] dark:text-gray-300 text-sm xl:text-base">Università degli Studi di
            Milano Bicocca - Informatica</p>
        </div>
      </div>
      <div class="text-justify lg:text-left">
        <p class="text-[var(--color-brand-gray)] dark:text-gray-300 text-[1rem]">
         I'm a computer science student with a passion for frontend development. With a strong understanding of web programming languages and modern frontend technologies, I've gained experience in creating intuitive and engaging user interfaces. Through academic projects and professional endeavors, I've honed my skills in responsive design, performance optimization, and effective problem-solving. I'm motivated to continue growing and tackling new challenges in the frontend development realm.
        </p>
      </div>
    </div>
  </div>
  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
  <img
    src="/assets/arrow.png"
    alt="Arrow icon"
    class="h-[2rem] absolute right-[3rem] bottom-[2.5rem] scale-125 interactable hidden lg:block cursor-pointer dark:invert transition-all duration-300"
    onclick={() => location.href='#experience'}
  />
</section>
