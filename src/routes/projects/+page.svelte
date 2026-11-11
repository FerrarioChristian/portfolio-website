<script lang="ts">
  import { onMount } from 'svelte';
  import { page } from '$app/stores';
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import Button from '$lib/components/Button.svelte';
  import ProjectModal from '$lib/components/ProjectModal.svelte';
  import { projects } from '$lib/data/projects';
  import type { Project } from '$lib/data/projects';
  import { getLocale, t } from '$lib/i18n/locale.svelte';

  let mainProjects = projects.filter(p => !p.isMinor);
  let minorProjects = projects.filter(p => p.isMinor);

  let selectedProject: Project | null = $state(null);

  import ProjectsHero from '$lib/components/sections/ProjectsHero.svelte';
  import MinorProjects from '$lib/components/sections/MinorProjects.svelte';

  let locale = $derived(getLocale());

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
  <div id="title-section" class="relative w-full">
    <!-- Projects Hero Section -->
    <section
      id="hero"
      class="relative min-h-[85vh] lg:h-[87vh] flex flex-col justify-start items-center px-[5%] text-center pt-2 sm:pt-4 lg:pt-5 pb-4"
    >
      <ProjectsHero />
    </section>

    <button
      class="interactable absolute right-[3rem] bottom-[2.5rem] hidden lg:block transition-all duration-300 hover:scale-110 focus:outline-none"
      data-type="internal"
      onclick={() => { const el = document.getElementById(mainProjects[0]?.slug || 'sportrack'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }}
      aria-label="Scroll to first project"
    >
      <img src="/assets/arrow.png" alt="" class="h-[2rem] scale-125 dark:invert pointer-events-none" />
    </button>
  </div>
  
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

            <p class="text-[var(--color-brand-gray)] dark:text-gray-400 mb-[3rem] text-[1.2rem] leading-relaxed font-light">{t(project.description)}</p>
            
            <div class="flex gap-[2rem] flex-wrap text-[1.1rem]">
              <Button 
                variant="text" 
                data-type="internal"
                onclick={() => selectedProject = project}
                onmouseenter={() => import(`../../lib/content/projects/${getLocale()}/${project.slug}.svelte`).catch(() => {})}
              >
                View Case Study
              </Button>
              <Button variant="text" href={project.github} target="_blank" data-type="external">
                GitHub
              </Button>
              {#if project.demo}
                <Button variant="text" href={project.demo} target="_blank" data-type="external">
                  Live Demo
                </Button>
              {/if}
              {#if project.report}
                <Button variant="text" href={project.report} target="_blank" data-type="external">
                  Read Report
                </Button>
              {/if}
            </div>
          </div>
          
        </div>

        {#if i < mainProjects.length - 1}
          <button
            class="interactable absolute right-[3rem] bottom-[2.5rem] hidden lg:block transition-all duration-300 hover:scale-110 focus:outline-none"
            data-type="internal"
            onclick={() => location.href=`#${mainProjects[i+1].slug}`}
            aria-label="Scroll to next project"
          >
            <img src="/assets/arrow.png" alt="" class="h-[2rem] scale-125 dark:invert pointer-events-none" />
          </button>
        {:else if minorProjects.length > 0}
          <button
            class="interactable absolute right-[3rem] bottom-[2.5rem] hidden lg:block transition-all duration-300 hover:scale-110 focus:outline-none"
            data-type="internal"
            onclick={() => location.href=`#minor-projects`}
            aria-label="Scroll to minor projects"
          >
            <img src="/assets/arrow.png" alt="" class="h-[2rem] scale-125 dark:invert pointer-events-none" />
          </button>
        {/if}
      </section>
    {/each}

    {#if minorProjects.length > 0}
      <!-- Minor Projects Section -->
      <section id="minor-projects" class="relative lg:snap-start w-full min-h-screen lg:h-screen lg:max-h-screen lg:min-h-0 flex flex-col justify-between pt-6 lg:pt-8 pb-3 lg:pb-4 px-[5%] lg:px-[5rem] box-border bg-gray-50 dark:bg-black lg:overflow-hidden">
        <div class="w-full my-auto">
          <MinorProjects />
        </div>
        <div class="mt-auto w-full shrink-0">
          <Footer snap={false} compact={true} />
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


