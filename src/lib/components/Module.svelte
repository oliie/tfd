<script lang="ts">
	import type { Module } from '$customTypes';
	import { Malachite, Almandine, Cerulean, Rutile, Xantic } from '$assets/socket-type';
	import { Descendant, General, HighPower, Impact, Special } from '$assets/runes-class';
	import { tooltip } from '$actions';

	type Props = {
		module: Module;
	};

	let { module }: Props = $props();

	const SOCKET_TYPE: Record<string, string> = {
		Malachite,
		Almandine,
		Cerulean,
		Rutile,
		Xantic
	};

	const RUNES_CLASS: Record<string, string> = {
		Descendant: Descendant,
		'General Rounds': General,
		'High-Power Rounds': HighPower,
		'Impact Rounds': Impact,
		'Special Rounds': Special
	};

	const TIER_COLORS: Record<string, string> = {
		Standard: 'from-cyan-600',
		Rare: 'from-fuchsia-700',
		Ultimate: 'from-yellow-600',
		Transcendent: 'from-red-600'
	};
</script>

<div
	class="flex flex-col gap-2 rounded-lg border border-foreground/20 p-2 transition-colors hover:bg-foreground/10"
	use:tooltip={`${module.module_stat[0].value}`}
>
	<div class="flex flex-1 items-start justify-between">
		<div class="flex items-center gap-1">
			<img
				class="size-4"
				src={SOCKET_TYPE[module.module_socket_type]}
				alt={module.module_socket_type}
			/>
			<span class="font-medium">{module.module_stat[0].module_capacity}</span>
		</div>

		<div>
			<img src={RUNES_CLASS[module.module_class]} alt={module.module_class} />
		</div>
	</div>

	<div
		class="{TIER_COLORS[
			module.module_tier
		]} size-20 self-center bg-gradient-to-br to-transparent to-50%"
	>
		<img src={module.image_url} alt={module.module_name} />
	</div>

	<div class="text-center text-sm font-medium">{module.module_name}</div>

	<div class="mt-2 bg-foreground/5 text-center text-xs text-muted-foreground">
		{module.module_type ? module.module_type : '-'}
	</div>
</div>
