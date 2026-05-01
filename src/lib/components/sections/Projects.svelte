<script lang="ts">
  const projects = [
    { title: 'Project One', image: '/assets/project-wip.jpg', github: 'https://github.com/', demo: 'https://github.com/' },
    { title: 'Project Two', image: '/assets/project-wip.jpg', github: 'https://github.com/', demo: 'https://github.com/' },
    { title: 'Project Three', image: '/assets/project-wip.jpg', github: 'https://github.com/', demo: 'https://github.com/' },
  ];
</script>

<section id="projects" class="relative pt-[4vh] lg:h-[96vh] h-fit lg:mx-[10rem] mx-[5%] box-border mt-[2rem] lg:mt-0">
  <p class="font-semibold text-[var(--color-brand-gray)] text-center">Browse My Recent</p>
  <h1 class="text-[2rem] lg:text-[3rem] text-center mb-[2rem]">Projects</h1>
  <div class="flex mx-auto max-w-[100rem] justify-center flex-col w-full mt-[2rem] lg:mt-0">
    <div class="flex gap-[2rem] mb-[2rem] mt-[2rem] lg:mt-0 flex-col xl:flex-row flex-wrap">
      {#each projects as project}
        <div class="flex-1 min-w-[17rem] p-[1.5rem] bg-[var(--color-brand-bg)] rounded-[2rem] border-[0.1rem] border-[#a3a3a3] text-center">
          <div class="flex flex-wrap flex-row justify-around">
            <img src={project.image} alt={project.title} class="rounded-[2rem] w-[90%] h-[90%]" />
          </div>
          <h2 class="text-[1.25rem] sm:text-[1.75rem] font-semibold text-black m-[1rem]">{project.title}</h2>
          <div class="flex justify-center gap-[1rem] flex-wrap sm:flex-nowrap">
            <button
              class="font-semibold transition-all duration-300 p-[1rem] w-[8rem] box-content rounded-[2rem] border-[0.1rem] border-[#a3a3a3] bg-transparent text-black hover:underline hover:underline-offset-[0.2rem] interactable"
              onclick={() => location.href=project.github}
            >
              Github
            </button>
            <button
              class="font-semibold transition-all duration-300 p-[1rem] w-[8rem] box-content rounded-[2rem] border-[0.1rem] border-[#a3a3a3] bg-transparent text-black hover:underline hover:underline-offset-[0.2rem] interactable"
              onclick={() => location.href=project.demo}
            >
              Live Demo
            </button>
          </div>
        </div>
      {/each}
    </div>
  </div>
  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
  <img
    src="/assets/arrow.png"
    alt="Arrow icon"
    class="h-[2rem] absolute right-[3rem] bottom-[2.5rem] scale-125 interactable hidden lg:block cursor-pointer"
    onclick={() => location.href='#contact'}
  />
</section>
