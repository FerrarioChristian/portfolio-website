<script lang="ts">
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import type { PageData } from './$types';

  let { data }: { data: PageData } = $props();
  let project = data.project;
</script>

<svelte:head>
  <title>{project.title} | Christian Ferrario</title>
</svelte:head>

<Header />

<main class="min-h-screen pt-[4vh] lg:mx-[10rem] mx-[5%] box-border mb-[4rem]">
  <a href="/projects" class="interactable text-black dark:text-white hover:underline hover:decoration-gray-300 underline-offset-[0.5rem] transition-all duration-300">
    &larr; Back to all projects
  </a>
  <div class="max-w-[80rem] mx-auto text-center">
    <p class="font-semibold text-[var(--color-brand-gray)] dark:text-gray-300">Project Details</p>
    <h1 class="text-[2rem] lg:text-[3rem] mb-[1rem] dark:text-white">{project.title}</h1>
    
    <div class="flex flex-wrap justify-center gap-[0.5rem] mb-[3rem]">
      {#each project.technologies as tech}
        <span class="px-[1rem] py-[0.5rem] bg-gray-200 dark:bg-[#1a1a1a] rounded-full text-black dark:text-gray-300 border border-transparent dark:border-gray-600">{tech}</span>
      {/each}
    </div>

    <div class="bg-[var(--color-brand-bg)] dark:bg-black rounded-[calc(2rem*var(--brm))] corner-squircle border-[0.1rem] border-[#a3a3a3] dark:border-gray-600 p-[2rem] mb-[3rem] max-w-[50rem] mx-auto">
      <div class="flex justify-center mb-[2rem]">
        <img src={project.imageLight} alt={project.title} class="rounded-[calc(2rem*var(--brm))] corner-squircle w-full block dark:hidden" />
        <img src={project.imageDark} alt={project.title} class="rounded-[calc(2rem*var(--brm))] corner-squircle w-full hidden dark:block" />
      </div>

      <p class="text-[1.2rem] text-[var(--color-brand-gray)] dark:text-gray-300 mb-[2rem]">
        {project.description}
      </p>

      <div class="p-[2rem] bg-gray-100 dark:bg-[#1a1a1a] rounded-[calc(1rem*var(--brm))] corner-squircle mb-[2rem]">
        <h3 class="text-xl font-bold dark:text-white mb-2">Work in Progress</h3>
        <p class="text-gray-600 dark:text-gray-400">Questa è la pagina segnaposto per il progetto. In futuro aggiungeremo qui la presentazione completa, gli screenshot, le feature tecniche e le sfide superate.</p>
      </div>

      <div class="flex justify-center gap-[1rem] flex-wrap sm:flex-nowrap">
        <a
          class="font-semibold transition-all duration-300 p-[1rem] w-[10rem] box-content rounded-[calc(2rem*var(--brm))] corner-squircle border-[0.1rem] border-[#a3a3a3] dark:border-white bg-transparent text-black dark:text-white hover:underline hover:underline-offset-[0.2rem] interactable block"
          href={project.github}
          target="_blank" rel="noopener noreferrer"
        >
          View Source (GitHub)
        </a>
        <a
          class="font-semibold transition-all duration-300 p-[1rem] w-[10rem] box-content rounded-[calc(2rem*var(--brm))] corner-squircle border-[0.1rem] border-[#a3a3a3] dark:border-white bg-transparent text-black dark:text-white hover:underline hover:underline-offset-[0.2rem] interactable block"
          href={project.demo}
          target="_blank" rel="noopener noreferrer"
        >
          Live Demo
        </a>
      </div>
    </div>
    
    <a href="/projects" class="interactable text-black dark:text-white hover:underline hover:decoration-gray-300 underline-offset-[0.5rem] transition-all duration-300">
      &larr; Back to all projects
    </a>
  </div>
</main>

<Footer />
