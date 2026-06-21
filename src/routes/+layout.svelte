<script lang="ts">
	import 'material-symbols/rounded.css';
	import './layout.css';
	import MouseTrailer from '$lib/components/MouseTrailer.svelte';
	import ThemeToggle from '$lib/components/ThemeToggle.svelte';
	let { children } = $props();
</script>

<MouseTrailer />
<ThemeToggle />
{@render children()}
