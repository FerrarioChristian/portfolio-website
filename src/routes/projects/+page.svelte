<script lang="ts">
  import { onMount } from 'svelte';
  import { page } from '$app/stores';
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import Button from '$lib/components/Button.svelte';
  import ProjectModal from '$lib/components/ProjectModal.svelte';
  import { projects } from '$lib/data/projects';
  import type { Project } from '$lib/data/projects';

  let mainProjects = projects.filter(p => !p.isMinor);
  let minorProjects = projects.filter(p => p.isMinor);

  let selectedProject: Project | null = $state(null);
  let currentCarouselIndex = $state(0);
  
  function handleCarouselScroll(e: Event) {
    const target = e.target as HTMLElement;
    
    if (target.scrollLeft >= target.scrollWidth - target.clientWidth - 5) {
      currentCarouselIndex = minorProjects.length - 1;
      return;
    }
    if (target.scrollLeft <= 5) {
      currentCarouselIndex = 0;
      return;
    }
    
    const containerCenter = target.scrollLeft + (target.clientWidth / 2);
    let closestIndex = 0;
    let minDistance = Infinity;
    
    Array.from(target.children).forEach((child, index) => {
      const el = child as HTMLElement;
      const childCenter = el.offsetLeft - target.offsetLeft + (el.clientWidth / 2);
      const distance = Math.abs(childCenter - containerCenter);
      
      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = index;
      }
    });
    
    currentCarouselIndex = closestIndex;
  }
  
  function scrollCarouselTo(index: number) {
    const el = document.getElementById(`minor-card-${index}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
    }
  }

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
    
    <button
      class="absolute right-[3rem] bottom-[2.5rem] hidden lg:block cursor-pointer transition-all duration-300 hover:scale-110 focus:outline-none"
      onclick={() => location.href=`#${mainProjects[0].slug}`}
      aria-label="Scroll to first project"
    >
      <img src="/assets/arrow.png" alt="" class="h-[2rem] scale-125 dark:invert" />
    </button>
  </section>
  
  <div class="flex flex-col w-full">
    {#each mainProjects as project, i}
      <section id={project.slug} class="relative lg:snap-start w-full lg:h-[100vh] min-h-screen flex items-center justify-center py-[4rem] lg:py-0 px-[5%] lg:px-[5rem]">
        <div class="w-full max-w-[90rem] mx-auto flex flex-col {i % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-[3rem] lg:gap-[6rem] text-left">
          
          <!-- Image -->
          <div class="w-full md:w-1/2 flex justify-center relative group">
            <div class="relative w-full aspect-[4/3] overflow-hidden rounded-[calc(2rem*var(--brm))] corner-squircle shadow-2xl">
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

        {#if i < mainProjects.length - 1}
          <button
            class="absolute right-[3rem] bottom-[2.5rem] hidden lg:block cursor-pointer transition-all duration-300 hover:scale-110 focus:outline-none"
            onclick={() => location.href=`#${mainProjects[i+1].slug}`}
            aria-label="Scroll to next project"
          >
            <img src="/assets/arrow.png" alt="" class="h-[2rem] scale-125 dark:invert" />
          </button>
        {:else if minorProjects.length > 0}
          <button
            class="absolute right-[3rem] bottom-[2.5rem] hidden lg:block cursor-pointer transition-all duration-300 hover:scale-110 focus:outline-none"
            onclick={() => location.href=`#minor-projects`}
            aria-label="Scroll to minor projects"
          >
            <img src="/assets/arrow.png" alt="" class="h-[2rem] scale-125 dark:invert" />
          </button>
        {/if}
      </section>
    {/each}

    {#if minorProjects.length > 0}
      <!-- Minor Projects Section -->
      <section id="minor-projects" class="relative lg:snap-start w-full min-h-screen flex flex-col justify-between pt-[3rem] lg:pt-[4rem] bg-gray-50 dark:bg-black box-border">
        
        <div class="w-full max-w-[100rem] mx-auto px-[5%] lg:px-[5rem] flex-grow flex flex-col justify-center">
          <h2 class="text-[2rem] lg:text-[3.5rem] font-bold text-black dark:text-white mb-[1.5rem] lg:mb-[2rem] tracking-tight">Other Explorations</h2>
          
          <!-- Horizontal Scroll Carousel -->
          <div onscroll={handleCarouselScroll} class="flex overflow-x-auto gap-[1.5rem] pb-[1rem] snap-x snap-mandatory scroll-smooth no-scrollbar items-stretch w-full">
            {#each minorProjects as project, idx}
              <div id={`minor-card-${idx}`} class="w-[280px] md:w-[380px] flex-shrink-0 snap-center lg:snap-start flex flex-col p-[1.8rem] bg-white dark:bg-[#0a0a0a] rounded-[1.5rem] border border-gray-200 dark:border-gray-800">
                <h3 class="text-[1.5rem] font-bold text-black dark:text-white mb-[0.8rem]">{project.title}</h3>
                <p class="text-gray-500 dark:text-gray-400 text-[1rem] font-light leading-relaxed mb-[1.5rem] flex-grow">
                  {project.description}
                </p>
                
                <div class="flex flex-wrap gap-[0.5rem] mb-[2rem]">
                  {#each project.technologies.slice(0, 3) as tech}
                    <span class="px-[0.8rem] py-[0.3rem] bg-gray-100 dark:bg-[#1a1a1a] text-[0.7rem] tracking-widest uppercase rounded-full text-gray-700 dark:text-gray-300 font-semibold">{tech}</span>
                  {/each}
                  {#if project.technologies.length > 3}
                    <span class="px-[0.8rem] py-[0.3rem] text-[0.7rem] tracking-widest uppercase text-gray-500 font-semibold">+{project.technologies.length - 3}</span>
                  {/if}
                </div>
                
                <div class="flex gap-[1rem] flex-wrap mt-auto">
                  <a href={project.github} target="_blank" class="text-[0.95rem] font-bold text-black dark:text-white hover:opacity-70 transition-opacity flex items-center gap-[0.3rem]">
                    <span class="material-symbols-rounded text-[1.1rem]">code</span> GitHub
                  </a>
                  {#if project.demo}
                    <a href={project.demo} target="_blank" class="text-[0.95rem] font-bold text-black dark:text-white hover:opacity-70 transition-opacity flex items-center gap-[0.3rem]">
                      <span class="material-symbols-rounded text-[1.1rem]">open_in_new</span> Demo
                    </a>
                  {/if}
                </div>
              </div>
            {/each}
          </div>

          <!-- Pagination Dots -->
          <div class="flex justify-center items-center mt-[1rem]">
            {#each minorProjects as _, idx}
              <button
                class="px-[0.4rem] py-[0.8rem] cursor-pointer group flex items-center justify-center focus:outline-none"
                onclick={() => scrollCarouselTo(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              >
                <span class="rounded-full transition-all duration-300 {currentCarouselIndex === idx ? 'w-[0.6rem] h-[0.6rem] bg-black dark:bg-white scale-125' : 'w-[0.5rem] h-[0.5rem] bg-gray-300 dark:bg-gray-700 group-hover:bg-gray-400 dark:group-hover:bg-gray-500'}"></span>
              </button>
            {/each}
          </div>
        </div>

        <div class="mt-auto w-full">
          <Footer />
        </div>
      </section>
    {:else}
      <Footer />
    {/if}
  </div>
</main>

{#if selectedProject}
  <ProjectModal project={selectedProject} onClose={() => selectedProject = null} />
{/if}

<style>
  .no-scrollbar::-webkit-scrollbar {
    display: none;
  }
  .no-scrollbar {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  }
</style>
