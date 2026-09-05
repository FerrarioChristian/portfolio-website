<script lang="ts">
  import { getLocale } from '$lib/i18n/locale.svelte';
  import ItContent from './it/large-scale.svelte';
  import EnContent from './en/large-scale.svelte';

  let locale = $derived(getLocale());
</script>

{#if locale === 'en'}
  <EnContent />
{:else}
  <ItContent />
{/if}
