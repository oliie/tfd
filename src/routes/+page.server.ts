import type { Descendant, Module } from '$customTypes';
import { PUBLIC_BASE_API } from '$env/static/public';

export async function load() {
	const modules = (await (await fetch(`${PUBLIC_BASE_API}module.json`)).json()) as Module[];
	const descendants = (await (
		await fetch(`${PUBLIC_BASE_API}descendant.json`)
	).json()) as Descendant[];

	modules.sort((a, b) => a.module_name.localeCompare(b.module_name));
	descendants.sort((a, b) => a.descendant_name.localeCompare(b.descendant_name));

	return { modules, descendants };
}
