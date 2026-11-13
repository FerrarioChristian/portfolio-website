<script lang="ts">
  import { getLocale } from '$lib/i18n/locale.svelte';
  import ItContent from './it/omnideps.svelte';
  import EnContent from './en/omnideps.svelte';

  let locale = $derived(getLocale());
</script>

{#if locale === 'en'}
  <EnContent />
{:else}
  <ItContent />
{/if}
