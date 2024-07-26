<script lang="ts">
	import { Module } from '$components';
	import type { PageServerData } from './$types';

	type Props = {
		data: PageServerData;
	};

	let { data }: Props = $props();

	let query = $state('');
	let queriedModules = $derived.by(() => {
		if (!query) return data.modules;

		return data.modules.filter((m) => m.module_name.toLowerCase().includes(query.toLowerCase()));
	});
</script>

<h1 class="text-4xl font-semibold tracking-tighter">Modules</h1>

<input type="search" bind:value={query} />

<div class="grid grid-cols-5 gap-2">
	{#each queriedModules as module}
		<Module {module} />
	{/each}
</div>
