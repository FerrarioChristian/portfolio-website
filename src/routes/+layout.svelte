<script lang="ts">
	import './layout.css';
	import MouseTrailer from '$lib/components/MouseTrailer.svelte';
	import ThemeToggle from '$lib/components/ThemeToggle.svelte';
	let { children } = $props();
</script>

<MouseTrailer />
<ThemeToggle />
{@render children()}
