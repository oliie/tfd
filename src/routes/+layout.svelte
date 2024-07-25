<script lang="ts">
	import type { Snippet } from 'svelte';
	import '../app.css';

	type Props = {
		children: Snippet;
	};

	let { children }: Props = $props();
</script>

<div class="container p-8 pb-16">
	<nav class="my-6">NavBar.svelte</nav>

	<main>
		{@render children()}
	</main>
</div>
