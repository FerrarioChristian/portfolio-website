<script lang="ts">
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import { projects } from '$lib/data/projects';
</script>

<svelte:head>
  <title>All Projects | Christian Ferrario</title>
</svelte:head>

<Header />

<main class="min-h-screen pt-[4vh] lg:mx-[10rem] mx-[5%] box-border mb-[4rem]">
  <a href="/" class="interactable text-black dark:text-white hover:underline hover:decoration-gray-300 underline-offset-[0.5rem] transition-all duration-300">
    &larr; Back to home
  </a>
  <h1 class="text-[2rem] lg:text-[3rem] text-center mb-[4rem] dark:text-white">All Projects</h1>
  
  <div class="flex flex-col gap-[4rem]">
    <div class="flex gap-[2rem] flex-wrap justify-center">
      {#each projects as project}
        <div class="flex-1 min-w-[17rem] max-w-[25rem] p-[1.5rem] bg-[var(--color-brand-bg)] dark:bg-black rounded-[calc(2rem*var(--brm))] corner-squircle border-[0.1rem] border-[#a3a3a3] dark:border-gray-600 text-center flex flex-col">
          <div class="flex flex-wrap flex-row justify-around">
            <img src={project.imageLight} alt={project.title} class="rounded-[calc(2rem*var(--brm))] corner-squircle w-[90%] h-[90%] block dark:hidden" />
            <img src={project.imageDark} alt={project.title} class="rounded-[calc(2rem*var(--brm))] corner-squircle w-[90%] h-[90%] hidden dark:block" />
          </div>
          <h2 class="text-[1.25rem] sm:text-[1.75rem] font-semibold text-black dark:text-white mt-[1.5rem] mb-[0.5rem]">{project.title}</h2>
          
          <div class="flex flex-wrap justify-center gap-[0.5rem] mb-[1rem]">
            {#each project.technologies as tech}
              <span class="px-[0.75rem] py-[0.25rem] bg-gray-200 dark:bg-[#1a1a1a] text-sm rounded-full text-black dark:text-gray-300 border border-transparent dark:border-gray-600">{tech}</span>
            {/each}
          </div>

          <p class="text-[var(--color-brand-gray)] dark:text-gray-300 mb-[1.5rem] flex-grow text-[0.9rem]">{project.description}</p>
          
          <div class="flex justify-center gap-[1rem] flex-wrap sm:flex-nowrap mt-auto">
            <a
              class="font-semibold transition-all duration-300 p-[0.75rem] w-[8rem] box-content rounded-[calc(2rem*var(--brm))] corner-squircle border-[0.1rem] border-[#a3a3a3] dark:border-white bg-transparent text-black dark:text-white hover:underline hover:underline-offset-[0.2rem] interactable block"
              href={`/projects/${project.slug}`}
            >
              Details
            </a>
            <a
              class="font-semibold transition-all duration-300 p-[0.75rem] w-[8rem] box-content rounded-[calc(2rem*var(--brm))] corner-squircle border-[0.1rem] border-[#a3a3a3] dark:border-white bg-transparent text-black dark:text-white hover:underline hover:underline-offset-[0.2rem] interactable block"
              href={project.github}
              target="_blank" rel="noopener noreferrer"
            >
              Github
            </a>
          </div>
        </div>
      {/each}
    </div>
  </div>
</main>

<Footer />
