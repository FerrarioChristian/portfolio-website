<script lang="ts">
  import Button from '$lib/components/Button.svelte';
  import type { Project } from '$lib/data/projects';
  import { onMount } from 'svelte';

  let { project, onClose }: { project: Project; onClose: () => void } = $props();

  let CustomContent: any = $state(null);
  let contentError = $state(false);
  let isClosing = $state(false);

  $effect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
      CustomContent = null;
      contentError = false;
      isClosing = false;
      
      import(`../content/projects/${project.slug}.svelte`)
        .then((module) => {
          CustomContent = module.default;
        })
        .catch(() => {
          contentError = true;
        });
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  });

  function handleClose() {
    isClosing = true;
    setTimeout(() => {
      onClose();
    }, 800);
  }

  function handleKeydown(e: KeyboardEvent) {
    if (e.key === 'Escape' && !isClosing) handleClose();
  }
</script>

<svelte:window onkeydown={handleKeydown} />

{#if project}
  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <!-- Backdrop (z-40, sits behind the scrolling container) -->
  <div 
    class="fixed inset-0 bg-white/40 dark:bg-gray-500/20 backdrop-blur-[20px] z-40 {isClosing ? 'animate-fade-out' : 'animate-fade-in'}"
  ></div>

  <!-- Scrollable container (z-50) -->
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <div 
    class="fixed inset-0 z-50 overflow-y-auto overflow-x-hidden"
    onclick={handleClose}
  >
    <div class="relative min-h-screen flex justify-center px-[1%] py-[5vh]">
      <!-- Modal Content -->
      <div 
        class="relative w-full max-w-[100rem] min-h-[90vh] h-fit bg-white dark:bg-black rounded-3xl shadow-[0_-20px_60px_rgba(0,0,0,0.15)] dark:shadow-none {isClosing ? 'animate-slide-down' : 'animate-slide-up'}"
        onclick={(e) => e.stopPropagation()}
      >
        <!-- Sticky zero-height container for the close button -->
        <div class="sticky top-[1.5rem] right-0 z-50 w-full h-0 flex justify-end">
          <button 
            onclick={handleClose}
            class="mr-[1.5rem] mt-[1.5rem] w-[2.5rem] h-[2.5rem] flex items-center justify-center bg-black/10 dark:bg-white/10 hover:bg-black/20 dark:hover:bg-white/20 backdrop-blur-md text-black dark:text-white rounded-full transition-colors"
            aria-label="Close"
          >
            <span class="material-symbols-rounded block">close</span>
          </button>
        </div>

        <!-- Modal Body -->
        <main class="w-full box-border pb-[4rem]">
        
        <!-- Apple-style Hero Image (Top) -->
        <section class="w-full h-[50vh] sm:h-[65vh] relative mb-12 lg:mb-16 rounded-t-3xl overflow-hidden bg-gray-100 dark:bg-black">
          <img src={project.imageLight} alt={project.title} class="w-full h-full object-cover block dark:hidden" />
          <img src={project.imageDark} alt={project.title} class="w-full h-full object-cover hidden dark:block" />
          <!-- Subtle gradient overlay at the bottom to blend with the white/black background -->
          <div class="absolute inset-x-0 bottom-0 h-14 sm:h-20 bg-gradient-to-t from-white dark:from-black to-transparent pointer-events-none"></div>
        </section>

        <!-- Project Title & Info -->
        <section class="w-full max-w-[80rem] mx-auto px-[5%] lg:px-[10rem] pb-[4rem]">
          <div class="flex flex-col gap-[2rem] md:gap-[3rem]">
            <div>
              <p class="font-semibold text-[var(--color-brand-gray)] dark:text-gray-400 mb-[0.5rem] tracking-wider uppercase text-sm">Case Study</p>
              <h1 class="text-[3rem] sm:text-[4rem] lg:text-[5rem] font-bold text-black dark:text-white leading-tight tracking-tight pr-[4rem]">
                {project.title}
              </h1>
            </div>

            <div class="flex flex-wrap gap-[0.75rem]">
              {#each project.technologies as tech}
                <span class="px-[1.2rem] py-[0.4rem] bg-gray-100 dark:bg-[#1a1a1a] text-[0.8rem] tracking-widest uppercase rounded-full text-gray-700 dark:text-gray-300 font-semibold border border-transparent dark:border-gray-700">{tech}</span>
              {/each}
            </div>
            
            <p class="text-[1.2rem] lg:text-[1.5rem] text-[var(--color-brand-gray)] dark:text-gray-300 leading-relaxed font-light max-w-[50rem]">
              {project.description}
            </p>
            
            <div class="flex gap-[1.5rem] flex-wrap mt-[1rem] items-center">
              <Button variant="outline" href={project.github} target="_blank">
                View Source (GitHub)
              </Button>
              {#if project.demo}
                <Button variant="outline" href={project.demo} target="_blank">
                  Live Demo
                </Button>
              {/if}
              {#if project.report}
                <Button variant="text-icon" icon="download" href={project.report} target="_blank">
                  Download Report
                </Button>
              {/if}
            </div>
          </div>
        </section>

        <!-- Custom Content Area -->
        <section class="w-full max-w-[60rem] mx-auto px-[5%] lg:px-0 mb-[6rem]">
          {#if CustomContent}
            <CustomContent />
          {:else if contentError}
            <div class="p-[3rem] bg-gray-50 dark:bg-[#111] rounded-[2rem] border-[0.1rem] border-gray-200 dark:border-gray-800 text-center">
              <h3 class="text-[2rem] font-bold text-black dark:text-white mb-[1rem]">Work in Progress</h3>
              <p class="text-[1.1rem] text-[var(--color-brand-gray)] dark:text-gray-400 font-light leading-relaxed">
                Nessun contenuto personalizzato trovato per questo progetto.<br />
                Crea il file <code>src/lib/content/projects/{project.slug}.svelte</code> per iniziare a scrivere la presentazione!
              </p>
            </div>
          {:else}
            <div class="flex justify-center p-[3rem]">
              <div class="animate-spin rounded-full h-[2rem] w-[2rem] border-b-2 border-black dark:border-white"></div>
            </div>
          {/if}
        </section>

        <!-- Dynamic Tech Stack (Global for all projects) -->
        {#if project.technologies && project.technologies.length > 0}
        <section class="border-t border-gray-200 dark:border-gray-800 pt-[4rem] px-[5%] lg:px-0 max-w-[50rem] mx-auto text-center">
          <h3 class="text-[1rem] font-bold mb-[2rem] dark:text-white uppercase tracking-[0.3em] text-gray-400">Tech Stack</h3>
          <div class="flex flex-wrap justify-center gap-[1rem]">
            {#each project.technologies as tech}
              <span class="px-[1.5rem] py-[0.8rem] bg-gray-100 dark:bg-[#1a1a1a] rounded-full text-[1rem] text-gray-700 dark:text-gray-300 font-medium">{tech}</span>
            {/each}
          </div>
        </section>
        {/if}

      </main>
    </div>
  </div>
</div>
{/if}

<style>
  @keyframes slideUpFade {
    0% { transform: translateY(100vh); opacity: 0; }
    50% { opacity: 1; }
    100% { transform: translateY(0); opacity: 1; }
  }
  @keyframes slideDownFade {
    0% { transform: translateY(0); opacity: 1; }
    50% { opacity: 0; }
    100% { transform: translateY(100vh); opacity: 0; }
  }
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  @keyframes fadeOut {
    from { opacity: 1; }
    to { opacity: 0; }
  }
  .animate-slide-up {
    animation: slideUpFade 0.8s cubic-bezier(0.65, 0, 0.35, 1) forwards;
  }
  .animate-slide-down {
    animation: slideDownFade 0.8s cubic-bezier(0.65, 0, 0.35, 1) forwards;
  }
  .animate-fade-in {
    animation: fadeIn 0.4s cubic-bezier(0.65, 0, 0.35, 1) forwards;
  }
  .animate-fade-out {
    animation: fadeOut 0.4s cubic-bezier(0.65, 0, 0.35, 1) forwards;
  }
</style>
