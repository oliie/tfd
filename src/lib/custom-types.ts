export type Tier = 'Standard' | 'Rare' | 'Ultimate' | 'Transcendant';

export type Class =
	| 'Descendant'
	| 'General Rounds'
	| 'Impact Rounds'
	| 'High-Power Rounds'
	| 'Special Rounds';

export type SocketType = 'Cerulean' | 'Malachite' | 'Xantic' | 'Almandine' | 'Rutile';

export type ModuleType =
	| null
	| 'Attack'
	| 'Battle'
	| 'HP'
	| 'Shield'
	| 'Defense'
	| 'MP'
	| 'Control'
	| 'Resource'
	| 'Guard'
	| 'Cooldown'
	| 'Range'
	| 'Luck'
	| 'Strike'
	| 'Medical'
	| 'Fortitude'
	| 'Support Tech'
	| 'Arche Tech'
	| 'Final Hand'
	| 'Fire Rate'
	| 'Bullet Improvement'
	| 'Rounds Conversion'
	| 'ATK'
	| 'Firearm Critical Hit Damage'
	| 'Attribute ATK'
	| 'Firearm Critical Hit Rate'
	| 'Rounds per Magazine'
	| 'Weak Point Strike'
	| 'Recoil'
	| 'Reload Time Modifier'
	| 'Accuracy'
	| 'Special Mod';

export type ModuleStat = {
	level: number;
	module_capacity: number;
	value: string;
};

export type Module = {
	image_url: string;
	module_class: Class;
	module_id: string;
	module_name: string;
	module_socket_type: SocketType;
	module_stat: ModuleStat[];
	module_tier: Tier;
	module_type: ModuleType;
};
