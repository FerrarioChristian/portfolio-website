<script lang="ts">
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';

  onMount(() => {
    goto('/experience', { replaceState: true });
  });
</script>

<div class="min-h-screen flex items-center justify-center bg-white dark:bg-black">
  <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-black dark:border-white"></div>
</div>
