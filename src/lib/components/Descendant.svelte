<script lang="ts">
	import type { Descendant, DescendantStatDetail } from '$customTypes';

	type Props = {
		descendants: Descendant[];
	};

	let { descendants }: Props = $props();

	let chosenDescendant: Descendant | undefined = $state();
	let level = $state(40);

	const stats = $derived(chosenDescendant?.descendant_stat.filter((s) => s.level === level)[0]);

	console.log(descendants[0]);
</script>

<div>
	{#if chosenDescendant}
		<img src={chosenDescendant.descendant_image_url} alt={descendants[0].descendant_name} />

		<input type="range" min="1" max="40" bind:value={level} class="w-full range" />

		<ul>
			{#each stats?.stat_detail as DescendantStatDetail[] as stat}
				<li class="text-sm">
					<span class="tracking-tighter">{stat.stat_type}:</span>
					<span class="font-semibold">{stat.stat_value}</span>
				</li>
			{/each}
		</ul>
	{/if}

	<select bind:value={chosenDescendant} class="w-full p-2 bg-foreground/10 text-foreground">
		{#each descendants as descendant}
			<option value={descendant}>
				{descendant.descendant_name}
			</option>
		{/each}
	</select>
</div>
