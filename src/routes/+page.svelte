<script lang="ts">
	import { Descendant, Module } from '$components';
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

<div class="flex flex-col gap-4">
	<div class="flex gap-4">
		<div class="w-1/4">
			<Descendant descendants={data.descendants} />
		</div>

		<div class="w-3/4">Sockets.svelte</div>
	</div>

	<div>
		<input
			type="search"
			bind:value={query}
			placeholder="Search module"
			class="w-full p-2 my-2 border-green-500 border-1 bg-foreground/10 text-foreground"
		/>

		<div class="grid grid-cols-5 gap-2">
			{#each queriedModules as module (module.module_id)}
				<Module {module} />
			{/each}
		</div>
	</div>
</div>
