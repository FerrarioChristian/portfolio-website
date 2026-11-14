<script lang="ts">
  import VariantSpotlight from './projects-variants/VariantSpotlight.svelte';
</script>

<section
  id="projects"
  class="lg:snap-start relative py-6 lg:py-8 min-h-[85vh] lg:h-[92vh] lg:mx-[10rem] mx-[5%] box-border flex flex-col justify-center"
>
  <VariantSpotlight />

  <!-- Scroll down arrow to contact -->
  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
  <img
    src="/assets/arrow.png"
    alt="Arrow icon"
    class="h-[2rem] absolute right-[1rem] bottom-[2rem] scale-110 interactable hidden lg:block cursor-pointer dark:invert opacity-60 hover:opacity-100 transition-all duration-300"
    data-type="internal"
    onclick={() => {
      const el = document.getElementById('contact');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }}
  />
</section>
