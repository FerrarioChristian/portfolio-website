<script lang="ts">
  import { getLocale } from '$lib/i18n/locale.svelte';
  import ItContent from './it/assettocorsa-rpm-led.svelte';
  import EnContent from './en/assettocorsa-rpm-led.svelte';

  let locale = $derived(getLocale());
</script>

{#if locale === 'en'}
  <EnContent />
{:else}
  <ItContent />
{/if}
