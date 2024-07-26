<script lang="ts">
	import { Module } from '$components';
	import type { PageServerData } from './$types';

	type Props = {
		data: PageServerData;
	};

	let { data }: Props = $props();

	let query = $state('');

	// TODO: Do this backend instead
	const descendantModules = $derived(data.modules.filter((m) => m.module_class === 'Descendant'));

	const queriedModules = $derived.by(() => {
		if (!query) return descendantModules;

		return descendantModules.filter((m) =>
			m.module_name.toLowerCase().includes(query.toLowerCase())
		);
	});
</script>

<h1 class="text-4xl font-semibold tracking-tighter">Descendant Builder</h1>

<input
	type="search"
	bind:value={query}
	placeholder="Search module"
	class="border-1 my-2 w-full border-green-500 bg-foreground/10 p-2 text-foreground"
/>

<div class="grid grid-cols-5 gap-2">
	{#each queriedModules as module (module.module_id)}
		<Module {module} />
	{/each}
</div>
