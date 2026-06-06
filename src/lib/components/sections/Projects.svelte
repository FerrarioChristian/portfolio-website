<script lang="ts">
  import { projects } from '$lib/data/projects';
  const featuredProjects = projects.filter(p => p.isFeatured);
</script>

<section id="projects" class="relative pt-[4vh] lg:h-[96vh] h-fit lg:mx-[10rem] mx-[5%] box-border mt-[2rem] lg:mt-0">
  <p class="font-semibold text-[var(--color-brand-gray)] dark:text-gray-300 text-center">Browse My Recent</p>
  <h1 class="text-[2rem] lg:text-[3rem] text-center mb-[2rem] dark:text-white">Projects</h1>
  <div class="flex mx-auto max-w-[100rem] justify-center flex-col w-full mt-[2rem] lg:mt-0">
    <div class="flex gap-[2rem] mb-[2rem] mt-[2rem] lg:mt-0 flex-col xl:flex-row flex-wrap">
      {#each featuredProjects as project}
        <div class="flex-1 min-w-[17rem] p-[1.5rem] bg-[var(--color-brand-bg)] dark:bg-black rounded-[calc(2rem*var(--brm))] corner-squircle border-[0.1rem] border-[#a3a3a3] dark:border-gray-600 text-center">
          <div class="flex flex-wrap flex-row justify-around">
            <img src={project.imageLight} alt={project.title} class="rounded-[calc(2rem*var(--brm))] corner-squircle w-[90%] h-[90%] block dark:hidden" />
            <img src={project.imageDark} alt={project.title} class="rounded-[calc(2rem*var(--brm))] corner-squircle w-[90%] h-[90%] hidden dark:block" />
          </div>
          <h2 class="text-[1.25rem] sm:text-[1.75rem] font-semibold text-black dark:text-white m-[1rem]">{project.title}</h2>
          <div class="flex justify-center gap-[1rem] flex-wrap sm:flex-nowrap">
            <button
              class="font-semibold transition-all duration-300 p-[1rem] w-[8rem] box-content rounded-[calc(2rem*var(--brm))] corner-squircle border-[0.1rem] border-[#a3a3a3] dark:border-white bg-transparent text-black dark:text-white hover:underline hover:underline-offset-[0.2rem] interactable"
              onclick={() => location.href=project.github}
            >
              Github
            </button>
            <button
              class="font-semibold transition-all duration-300 p-[1rem] w-[8rem] box-content rounded-[calc(2rem*var(--brm))] corner-squircle border-[0.1rem] border-[#a3a3a3] dark:border-white bg-transparent text-black dark:text-white hover:underline hover:underline-offset-[0.2rem] interactable"
              onclick={() => location.href=project.demo}
            >
              Live Demo
            </button>
          </div>
        </div>
      {/each}
    </div>
    <div class="flex justify-center mt-[1rem]">
      <a
        href="/projects"
        class="font-semibold transition-all duration-300 p-[1rem] w-[12rem] text-center box-content rounded-[calc(2rem*var(--brm))] corner-squircle border-[0.1rem] border-[#a3a3a3] dark:border-white bg-transparent text-black dark:text-white hover:underline hover:underline-offset-[0.2rem] interactable block"
      >
        View All Projects
      </a>
    </div>
  </div>
  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
  <img
    src="/assets/arrow.png"
    alt="Arrow icon"
    class="h-[2rem] absolute right-[3rem] bottom-[2.5rem] scale-125 interactable hidden lg:block cursor-pointer dark:invert transition-all duration-300"
    onclick={() => location.href='#contact'}
  />
</section>
