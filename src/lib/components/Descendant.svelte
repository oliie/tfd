<script lang="ts">
	import type { Descendant } from '$components';

	type Props = {
		descendants: Descendant[];
	};

	let { descendants }: Props = $props();

	let chosenDescendant: Descendant | undefined = $state();

	console.log(descendants[0]);
</script>

<div>
	{#if chosenDescendant}
		<img src={chosenDescendant.descendant_image_url} alt={descendants[0].descendant_name} />
	{/if}

	<select bind:value={chosenDescendant} class="w-full bg-foreground/10 p-2 text-foreground">
		{#each descendants as descendant}
			<option value={descendant}>
				{descendant.descendant_name}
			</option>
		{/each}
	</select>
</div>
