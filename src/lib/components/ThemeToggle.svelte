<script lang="ts">
  import { onMount } from 'svelte';

  type Theme = 'light' | 'dark' | 'system';
  let theme = $state<Theme>('system');

  onMount(() => {
    theme = (localStorage.getItem('theme') as Theme) || 'system';
    
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', updateDOM);
    
    return () => {
      window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', updateDOM);
    };
  });

  function updateDOM() {
    const isDark = theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  function cycleTheme() {
    if (theme === 'system') theme = 'light';
    else if (theme === 'light') theme = 'dark';
    else theme = 'system';

    if (theme === 'system') {
      localStorage.removeItem('theme');
    } else {
      localStorage.setItem('theme', theme);
    }
    
    updateDOM();
  }
</script>

<button
  class="fixed bottom-4 left-4 z-50 p-3 rounded-full bg-white dark:bg-[#1a1a1a] shadow-lg border border-gray-200 dark:border-gray-700 text-black dark:text-white hover:scale-110 transition-transform interactable flex items-center justify-center corner-squircle"
  onclick={cycleTheme}
  aria-label="Toggle Theme"
>
  <span class="material-symbols-rounded">
    {theme === 'system' ? 'brightness_auto' : theme === 'dark' ? 'dark_mode' : 'light_mode'}
  </span>
</button>
