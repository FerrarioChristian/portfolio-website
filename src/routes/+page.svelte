<script lang="ts">
  import Header from '$lib/components/Header.svelte';
  import MouseTrailer from '$lib/components/MouseTrailer.svelte';
  import Profile from '$lib/components/sections/Profile.svelte';
  import About from '$lib/components/sections/About.svelte';
  import Experience from '$lib/components/sections/Experience.svelte';
  import Projects from '$lib/components/sections/Projects.svelte';
  import Contact from '$lib/components/sections/Contact.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import ThemeToggle from '$lib/components/ThemeToggle.svelte';
</script>

<Header />
<MouseTrailer />
<ThemeToggle />
<main>
  <Profile />
  <About />
  <Experience />
  <Projects />
  <Contact />
</main>
<Footer />

<style></style>
