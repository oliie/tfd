<script lang="ts">
	import type { Module } from '$customTypes';
	import { Malachite, Almandine, Cerulean, Rutile, Xantic } from '$assets/socket-type';

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
</script>

<div class="flex justify-center rounded-lg border border-foreground/20">
	<img src={SOCKET_TYPE[module.module_socket_type]} alt={module.module_socket_type} />
	<span>{module.module_name}</span>
</div>
