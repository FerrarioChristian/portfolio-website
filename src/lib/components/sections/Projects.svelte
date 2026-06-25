<script lang="ts">
  import { projects } from '$lib/data/projects';
  import Button from '$lib/components/Button.svelte';
  const featuredProjects = projects.filter(p => p.isFeatured);
</script>

<section id="projects" class="lg:snap-start relative pt-[4vh] lg:h-[96vh] h-fit lg:mx-[10rem] mx-[5%] box-border mt-[2rem] lg:mt-0">
  <p class="font-semibold text-[var(--color-brand-gray)] dark:text-gray-300 text-center">Browse My Recent</p>
  <h1 class="text-[2rem] lg:text-[3rem] text-center mb-[2rem] dark:text-white">Projects</h1>
  <div class="flex mx-auto max-w-[100rem] justify-center flex-col w-full mt-[2rem] lg:mt-0">
    <div class="flex gap-[2rem] mb-[2rem] mt-[2rem] lg:mt-0 flex-col xl:flex-row">
      {#each featuredProjects as project}
        <!-- svelte-ignore a11y_click_events_have_key_events -->
        <!-- svelte-ignore a11y_no_static_element_interactions -->
        <div 
          class="flex-1 min-w-[17rem] p-[1.5rem] bg-[var(--color-brand-bg)] dark:bg-black rounded-[calc(2rem*var(--brm))] corner-squircle border-[0.1rem] border-[#a3a3a3] dark:border-gray-600 text-center flex flex-col interactable cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-xl dark:hover:shadow-white/5 group"
          onclick={() => location.href=`/projects?scrollTo=${project.slug}`}
        >
          <div class="flex flex-wrap flex-row justify-around h-[70%] aspect-square">
            <img src={project.imageLight} alt={project.title} class="rounded-[calc(2rem*var(--brm))] corner-squircle block dark:hidden object-cover" />
            <img src={project.imageDark} alt={project.title} class="rounded-[calc(2rem*var(--brm))] corner-squircle hidden dark:block object-cover" />
          </div>
          <h2 class="text-[1.25rem] sm:text-[1.5rem] font-semibold text-black dark:text-white mt-4 mb-8 ">{project.title}</h2>
          <div class="flex justify-center mt-auto">
            <Button 
              variant="outline" 
              padding="py-[0.5rem] px-[1rem]"
              href={`/projects?scrollTo=${project.slug}`} 
              data-sveltekit-preload-data="hover"
              onclick={(e: any) => e.stopPropagation()} 
              class="w-[12rem] group-hover:bg-gray-200 dark:group-hover:bg-gray-800"
            >
              Learn More
            </Button>
          </div>
        </div>
      {/each}
    </div>
    <div class="flex justify-center mt-[1rem]">
      <Button variant="outline" padding="py-[0.5rem] px-[1rem]" href="/projects" data-sveltekit-preload-data="hover" class="w-[14rem]">
        View More Projects
      </Button>
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
