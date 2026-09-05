<script lang="ts">
  import { getLocale, toggleLocale } from '$lib/i18n/locale.svelte';

  let {
    class: className = '',
    compact = false
  }: {
    class?: string;
    compact?: boolean;
  } = $props();

  let locale = $derived(getLocale());
</script>

<button
  type="button"
  class="interactable relative inline-flex items-center p-0.5 rounded-full bg-gray-100 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 cursor-pointer select-none transition-all duration-300 hover:border-gray-400 dark:hover:border-zinc-600 {className}"
  onclick={toggleLocale}
  aria-label={`Current language: ${locale.toUpperCase()}. Click to switch to ${locale === 'it' ? 'EN' : 'IT'}`}
  title={`Switch to ${locale === 'it' ? 'English' : 'Italiano'}`}
>
  <span
    class="rounded-full font-mono font-semibold transition-all duration-200 pointer-events-none
      {compact ? 'px-2 py-0.5 text-[0.7rem]' : 'px-2.5 py-1 text-xs'}
      {locale === 'it'
        ? 'bg-black text-white dark:bg-white dark:text-black shadow-sm'
        : 'text-gray-400 dark:text-zinc-500'}"
  >
    IT
  </span>
  <span
    class="rounded-full font-mono font-semibold transition-all duration-200 pointer-events-none
      {compact ? 'px-2 py-0.5 text-[0.7rem]' : 'px-2.5 py-1 text-xs'}
      {locale === 'en'
        ? 'bg-black text-white dark:bg-white dark:text-black shadow-sm'
        : 'text-gray-400 dark:text-zinc-500'}"
  >
    EN
  </span>
</button>
