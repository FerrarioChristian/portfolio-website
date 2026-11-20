<script lang="ts">
  import Header from '$lib/components/Header.svelte';
  import Profile from '$lib/components/sections/Profile.svelte';
  import About from '$lib/components/sections/About.svelte';
  import Experience from '$lib/components/sections/Experience.svelte';
  import Projects from '$lib/components/sections/Projects.svelte';
  import Contact from '$lib/components/sections/Contact.svelte';
  import Footer from '$lib/components/Footer.svelte';
  // Toggle for experience section experiment: hidden on home page while testing dedicated /about page
  const showHomeExperience = false;
</script>

<Header />
<main>
  <Profile />
  <About />
  {#if showHomeExperience}
    <Experience />
  {/if}
  <Projects />
  <Contact />
</main>
<Footer />

<style></style>
