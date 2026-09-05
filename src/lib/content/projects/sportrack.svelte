<script lang="ts">
  import { getLocale } from '$lib/i18n/locale.svelte';
  import ItContent from './it/sportrack.svelte';
  import EnContent from './en/sportrack.svelte';

  let locale = $derived(getLocale());
</script>

{#if locale === 'en'}
  <EnContent />
{:else}
  <ItContent />
{/if}
