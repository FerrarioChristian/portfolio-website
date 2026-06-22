<script lang="ts">
  let { 
    href = undefined, 
    variant = 'outline', 
    target = undefined, 
    icon = undefined, 
    class: className = '', 
    padding = 'p-[1rem]',
    onclick = undefined, 
    children,
    ...rest
  } = $props();

  const baseClasses = "interactable font-semibold transition-all duration-300";
  
  let variantClasses = $derived(() => {
    switch(variant) {
      case 'outline':
        return `${padding} text-center box-content rounded-[calc(2rem*var(--brm))] corner-squircle border-[0.1rem] border-[#a3a3a3] dark:border-white bg-transparent text-black dark:text-white hover:underline hover:underline-offset-[0.2rem] hover:bg-gray-200 dark:hover:bg-gray-800 inline-block`;
      case 'filled':
        return `${padding} text-center box-content rounded-[calc(2rem*var(--brm))] corner-squircle border-[0.1rem] border-[#353535] dark:border-white bg-black dark:bg-white text-white dark:text-black hover:underline hover:underline-offset-[0.2rem] inline-block`;
      case 'text':
        return "text-black dark:text-white hover:text-gray-500 dark:hover:text-gray-300 hover:underline hover:decoration-gray-300 underline-offset-[0.5rem] inline-block";
      case 'text-icon':
        return "group flex items-center gap-2 text-black dark:text-white hover:text-gray-500 dark:hover:text-gray-300 w-fit";
      default:
        return "";
    }
  });

  let iconAnimation = $derived(icon === 'north_east' ? 'group-hover:-translate-y-1 group-hover:translate-x-1' : 'group-hover:translate-x-2');
</script>

{#if href}
  <a {href} {target} rel={target === '_blank' ? 'noopener noreferrer' : undefined} class="{baseClasses} {variantClasses()} {className}" {onclick} {...rest}>
    {#if variant === 'text-icon'}
      <span>{@render children()}</span>
      {#if icon}
        <span class="material-symbols-rounded text-[1.2rem] transition-transform duration-300 {iconAnimation}">{icon}</span>
      {/if}
    {:else}
      {@render children()}
    {/if}
  </a>
{:else}
  <button class="{baseClasses} {variantClasses()} {className}" {onclick} {...rest}>
    {#if variant === 'text-icon'}
      <span>{@render children()}</span>
      {#if icon}
        <span class="material-symbols-rounded text-[1.2rem] transition-transform duration-300 {iconAnimation}">{icon}</span>
      {/if}
    {:else}
      {@render children()}
    {/if}
  </button>
{/if}
