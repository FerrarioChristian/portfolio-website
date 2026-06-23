<script lang="ts">
  import { onMount } from 'svelte';
  import { page } from '$app/stores';
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import Button from '$lib/components/Button.svelte';
  import ProjectModal from '$lib/components/ProjectModal.svelte';
  import { projects } from '$lib/data/projects';
  import type { Project } from '$lib/data/projects';

  let selectedProject: Project | null = $state(null);

  onMount(() => {
    const scrollToId = $page.url.searchParams.get('scrollTo');
    if (scrollToId) {
      setTimeout(() => {
        const el = document.getElementById(scrollToId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 1500); // 600ms delay to let the user see the title screen
    }
  });
</script>

<svelte:head>
  <title>All Projects | Christian Ferrario</title>
</svelte:head>

<Header />

<main class="w-full box-border mb-[4rem] lg:mb-0">
  
  <!-- Title Section: fills the screen alongside the 13vh Header -->
  <section id="title-section" class="relative lg:h-[87vh] flex flex-col justify-center items-center px-[5%] text-center">
    <a href="/" data-sveltekit-preload-data="hover" class="interactable text-black dark:text-white hover:underline hover:decoration-gray-300 underline-offset-[0.5rem] transition-all duration-300 mb-[2rem]">
      &larr; Back to home
    </a>
    <h1 class="text-[3rem] lg:text-[4rem] font-bold dark:text-white tracking-tight">More of my projects</h1>
    <img src="/assets/banner.png" alt="Projects Banner" class="w-[70%] rounded-[calc(1rem*var(--brm))] corner-squircle mt-6 mb-4" />
    <p class="text-[var(--color-brand-gray)] dark:text-gray-400 mt-[1.5rem] text-[1.1rem] lg:text-[1.3rem] max-w-[45rem] leading-relaxed">
      Here you can explore personal projects I've built in my free time, along with select work from my university courses.
    </p>
    
    <img
      src="/assets/arrow.png"
      alt="Arrow icon"
      class="h-[2rem] absolute right-[3rem] bottom-[2.5rem] scale-125 interactable hidden lg:block cursor-pointer dark:invert transition-all duration-300"
      onclick={() => location.href=`#${projects[0].slug}`}
    />
  </section>
  
  <div class="flex flex-col w-full">
    {#each projects as project, i}
      <section id={project.slug} class="relative lg:snap-start w-full lg:h-[100vh] min-h-screen flex items-center justify-center py-[4rem] lg:py-0 px-[5%] lg:px-0">
        <div class="w-full max-w-[80rem] mx-auto flex flex-col {i % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-[3rem] lg:gap-[6rem] text-left">
          
          <!-- Image -->
          <div class="w-full md:w-1/2 flex justify-center relative group">
            <div class="relative w-full aspect-[4/3] overflow-hidden rounded-[calc(2rem*var(--brm))] corner-squircle shadow-2xl dark:shadow-[0_0_40px_rgba(255,255,255,0.07)]">
              <img src={project.imageLight} alt={project.title} class="w-full h-full object-cover block dark:hidden transition-transform duration-700 group-hover:scale-105" />
              <img src={project.imageDark} alt={project.title} class="w-full h-full object-cover hidden dark:block transition-transform duration-700 group-hover:scale-105" />
            </div>
          </div>
          
          <!-- Content -->
          <div class="w-full md:w-1/2 flex flex-col justify-center">
            <h2 class="text-[2rem] sm:text-[3rem] font-bold text-black dark:text-white mb-[1.5rem] leading-tight tracking-tight">{project.title}</h2>
            
            <div class="flex flex-wrap gap-[0.75rem] mb-[2rem]">
              {#each project.technologies as tech}
                <span class="px-[1.2rem] py-[0.4rem] bg-gray-100 dark:bg-[#1a1a1a] text-[0.8rem] tracking-widest uppercase rounded-full text-gray-700 dark:text-gray-300 font-semibold border border-transparent dark:border-gray-700">{tech}</span>
              {/each}
            </div>

            <p class="text-[var(--color-brand-gray)] dark:text-gray-400 mb-[3rem] text-[1.2rem] leading-relaxed font-light">{project.description}</p>
            
            <div class="flex gap-[2rem] flex-wrap text-[1.1rem]">
              <Button 
                variant="text" 
                onclick={() => selectedProject = project}
                onmouseenter={() => import(`../../lib/content/projects/${project.slug}.svelte`).catch(() => {})}
              >
                View Case Study
              </Button>
              <Button variant="text" href={project.github} target="_blank">
                GitHub
              </Button>
              {#if project.demo}
                <Button variant="text" href={project.demo} target="_blank">
                  Live Demo
                </Button>
              {/if}
              {#if project.report}
                <Button variant="text" href={project.report} target="_blank">
                  Download Report
                </Button>
              {/if}
            </div>
          </div>
          
        </div>

        {#if i < projects.length - 1}
          <img
            src="/assets/arrow.png"
            alt="Next project"
            class="h-[2rem] absolute right-[3rem] bottom-[2.5rem] scale-125 interactable hidden lg:block cursor-pointer dark:invert transition-all duration-300"
            onclick={() => location.href=`#${projects[i+1].slug}`}
          />
        {/if}
      </section>
    {/each}
  </div>
</main>

{#if selectedProject}
  <ProjectModal project={selectedProject} onClose={() => selectedProject = null} />
{/if}

<Footer />
