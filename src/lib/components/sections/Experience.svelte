<script lang="ts">
  const frontendSkills = [
    { name: 'HTML', level: 'Experienced' },
    { name: 'CSS', level: 'Experienced' },
    { name: 'ReactJS', level: 'Intermediate' },
    { name: 'JavaScript', level: 'Intermediate' },
    { name: 'TypeScript', level: 'Basic' },
    { name: 'Material UI', level: 'Intermediate' }
  ];

  const seSkills = [
    { name: 'Git', level: 'Experienced' },
    { name: 'NodeJS', level: 'Basic' },
    { name: 'MySQL', level: 'Intermediate' },
    { name: 'OOP', level: 'Experienced' },
    { name: 'C++', level: 'Intermediate' },
    { name: 'Java', level: 'Intermediate' }
  ];
</script>

<section id="experience" class="relative pt-[4vh] lg:h-[96vh] h-fit lg:mx-[10rem] mx-[5%] box-border mt-[2rem] lg:mt-0">
  <p class="text-[var(--color-brand-gray)] dark:text-gray-300 text-center">Explore My</p>
  <h1 class="text-[2rem] lg:text-[3rem] text-center mb-[2rem] dark:text-white">Experience</h1>
  <div class="flex mx-auto max-w-[100rem] justify-center flex-col w-full mt-[2rem] lg:mt-0">
    <div class="flex gap-[2rem] mb-[2rem] lg:mt-0 flex-col xl:flex-row flex-wrap">
      
      <!-- Frontend Container -->
      <div class="flex-1 min-w-[17rem] p-[1.5rem] bg-white dark:bg-black rounded-[2rem] border-[0.1rem] border-[#a3a3a3] dark:border-gray-600 text-center">
        <h2 class="text-[1.25rem] sm:text-[1.75rem] font-semibold text-[var(--color-brand-gray)] dark:text-gray-300 mb-[2rem]">Frontend Development</h2>
        <div class="flex flex-row flex-wrap gap-[2.5rem] justify-around text-left">
          {#each frontendSkills as skill}
            <article class="flex w-[10rem] gap-[0.5rem] text-[1rem]">
              <img src="/assets/checkmark.png" alt="Experience icon" class="h-[2rem] dark:invert transition-all duration-300" />
              <div>
                <h3 class="font-bold dark:text-white">{skill.name}</h3>
                <p class="text-[var(--color-brand-gray)] dark:text-gray-300">{skill.level}</p>
              </div>
            </article>
          {/each}
        </div>
      </div>

      <!-- SE Container -->
      <div class="flex-1 min-w-[17rem] p-[1.5rem] bg-white dark:bg-black rounded-[2rem] border-[0.1rem] border-[#a3a3a3] dark:border-gray-600 text-center">
        <h2 class="text-[1.25rem] sm:text-[1.75rem] font-semibold text-[var(--color-brand-gray)] dark:text-gray-300 mb-[2rem]">Software Engineer</h2>
        <div class="flex flex-row flex-wrap gap-[2.5rem] justify-around text-left">
          {#each seSkills as skill}
            <article class="flex w-[10rem] gap-[0.5rem] text-[1rem]">
              <img src="/assets/checkmark.png" alt="Experience icon" class="h-[2rem] dark:invert transition-all duration-300" />
              <div>
                <h3 class="font-bold dark:text-white">{skill.name}</h3>
                <p class="text-[var(--color-brand-gray)] dark:text-gray-300">{skill.level}</p>
              </div>
            </article>
          {/each}
        </div>
      </div>

    </div>
  </div>
  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
  <img
    src="/assets/arrow.png"
    alt="Arrow icon"
    class="h-[2rem] absolute right-[3rem] bottom-[2.5rem] scale-125 interactable hidden lg:block cursor-pointer dark:invert transition-all duration-300"
    onclick={() => location.href='#projects'}
  />
</section>
