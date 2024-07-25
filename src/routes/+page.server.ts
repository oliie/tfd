import type { Module } from '$customTypes';
import { PUBLIC_BASE_API } from '$env/static/public';

export async function load() {
	const response = await fetch(`${PUBLIC_BASE_API}module.json`);
	const modules = (await response.json()) as Module[];

	modules.sort((a, b) => a.module_name.localeCompare(b.module_name));

	return { modules };
}
