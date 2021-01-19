export const Pokedex: { [speciesid: string]: SpeciesData; } = {
	bulbasaur: {
		num: 1,
		name: "Bulbasaur",
		types: ["Grass", "Poison"],
		genderRatio: { M: 0.875, F: 0.125 },
		baseStats: { hp: 45, atk: 49, def: 49, spa: 65, spd: 65, spe: 45 },
		abilities: { 0: "Overgrow", H: "Chlorophyll" },
		heightm: 0.7,
		weightkg: 6.9,
		color: "Green",
		evos: ["Ivysaur"],
		eggGroups: ["Monster", "Grass"],
	},
	ivysaur: {
		num: 2,
		name: "Ivysaur",
		types: ["Grass", "Poison"],
		genderRatio: { M: 0.875, F: 0.125 },
		baseStats: { hp: 60, atk: 62, def: 63, spa: 80, spd: 80, spe: 60 },
		abilities: { 0: "Overgrow", H: "Chlorophyll" },
		heightm: 1,
		weightkg: 13,
		color: "Green",
		prevo: "Bulbasaur",
		evoLevel: 16,
		evos: ["Venusaur"],
		eggGroups: ["Monster", "Grass"],
	},
	venusaur: {
		num: 3,
		name: "Venusaur",
		types: ["Grass", "Poison"],
		genderRatio: { M: 0.875, F: 0.125 },
		baseStats: { hp: 80, atk: 82, def: 83, spa: 100, spd: 100, spe: 80 },
		abilities: { 0: "Overgrow", H: "Chlorophyll" },
		heightm: 2,
		weightkg: 100,
		color: "Green",
		prevo: "Ivysaur",
		evoLevel: 32,
		eggGroups: ["Monster", "Grass"],
		otherFormes: ["Venusaur-Mega"],
		formeOrder: ["Venusaur", "Venusaur-Mega"],
		canGigantamax: "G-Max Vine Lash",
	},
	venusaurmega: {
		num: 3,
		name: "Venusaur-Mega",
		baseSpecies: "Venusaur",
		forme: "Mega",
		types: ["Grass", "Poison"],
		genderRatio: { M: 0.875, F: 0.125 },
		baseStats: { hp: 80, atk: 100, def: 123, spa: 122, spd: 120, spe: 80 },
		abilities: { 0: "Thick Fat" },
		heightm: 2.4,
		weightkg: 155.5,
		color: "Green",
		eggGroups: ["Monster", "Grass"],
		requiredItem: "Venusaurite",
	},
	venusaurgmax: {
		num: 3,
		name: "Venusaur-Gmax",
		baseSpecies: "Venusaur",
		forme: "Gmax",
		types: ["Grass", "Poison"],
		genderRatio: { M: 0.875, F: 0.125 },
		baseStats: { hp: 80, atk: 82, def: 83, spa: 100, spd: 100, spe: 80 },
		abilities: { 0: "Overgrow", H: "Chlorophyll" },
		heightm: 2,
		weightkg: 0,
		color: "Green",
		eggGroups: ["Monster", "Grass"],
		changesFrom: "Venusaur",
	},
	charmander: {
		num: 4,
		name: "Charmander",
		types: ["Fire"],
		genderRatio: { M: 0.875, F: 0.125 },
		baseStats: { hp: 39, atk: 52, def: 43, spa: 60, spd: 50, spe: 65 },
		abilities: { 0: "Blaze", H: "Solar Power" },
		heightm: 0.6,
		weightkg: 8.5,
		color: "Red",
		evos: ["Charmeleon"],
		eggGroups: ["Monster", "Dragon"],
	},
	charmeleon: {
		num: 5,
		name: "Charmeleon",
		types: ["Fire"],
		genderRatio: { M: 0.875, F: 0.125 },
		baseStats: { hp: 58, atk: 64, def: 58, spa: 80, spd: 65, spe: 80 },
		abilities: { 0: "Blaze", H: "Solar Power" },
		heightm: 1.1,
		weightkg: 19,
		color: "Red",
		prevo: "Charmander",
		evoLevel: 16,
		evos: ["Charizard"],
		eggGroups: ["Monster", "Dragon"],
	},
	charizard: {
		num: 6,
		name: "Charizard",
		types: ["Fire", "Flying"],
		genderRatio: { M: 0.875, F: 0.125 },
		baseStats: { hp: 78, atk: 84, def: 78, spa: 109, spd: 85, spe: 100 },
		abilities: { 0: "Blaze", H: "Solar Power" },
		heightm: 1.7,
		weightkg: 90.5,
		color: "Red",
		prevo: "Charmeleon",
		evoLevel: 36,
		eggGroups: ["Monster", "Dragon"],
		otherFormes: ["Charizard-Mega-X", "Charizard-Mega-Y"],
		formeOrder: ["Charizard", "Charizard-Mega-X", "Charizard-Mega-Y"],
		canGigantamax: "G-Max Wildfire",
	},
	charizardmegax: {
		num: 6,
		name: "Charizard-Mega-X",
		baseSpecies: "Charizard",
		forme: "Mega-X",
		types: ["Fire", "Dragon"],
		genderRatio: { M: 0.875, F: 0.125 },
		baseStats: { hp: 78, atk: 130, def: 111, spa: 130, spd: 85, spe: 100 },
		abilities: { 0: "Tough Claws" },
		heightm: 1.7,
		weightkg: 110.5,
		color: "Black",
		eggGroups: ["Monster", "Dragon"],
		requiredItem: "Charizardite X",
	},
	charizardmegay: {
		num: 6,
		name: "Charizard-Mega-Y",
		baseSpecies: "Charizard",
		forme: "Mega-Y",
		types: ["Fire", "Flying"],
		genderRatio: { M: 0.875, F: 0.125 },
		baseStats: { hp: 78, atk: 104, def: 78, spa: 159, spd: 115, spe: 100 },
		abilities: { 0: "Drought" },
		heightm: 1.7,
		weightkg: 100.5,
		color: "Red",
		eggGroups: ["Monster", "Dragon"],
		requiredItem: "Charizardite Y",
	},
	charizardgmax: {
		num: 6,
		name: "Charizard-Gmax",
		baseSpecies: "Charizard",
		forme: "Gmax",
		types: ["Fire", "Flying"],
		genderRatio: { M: 0.875, F: 0.125 },
		baseStats: { hp: 78, atk: 84, def: 78, spa: 109, spd: 85, spe: 100 },
		abilities: { 0: "Blaze", H: "Solar Power" },
		heightm: 28,
		weightkg: 0,
		color: "Red",
		eggGroups: ["Monster", "Dragon"],
		changesFrom: "Charizard",
	},
	squirtle: {
		num: 7,
		name: "Squirtle",
		types: ["Water"],
		genderRatio: { M: 0.875, F: 0.125 },
		baseStats: { hp: 44, atk: 48, def: 65, spa: 50, spd: 64, spe: 43 },
		abilities: { 0: "Torrent", H: "Rain Dish" },
		heightm: 0.5,
		weightkg: 9,
		color: "Blue",
		evos: ["Wartortle"],
		eggGroups: ["Monster", "Water 1"],
	},
	wartortle: {
		num: 8,
		name: "Wartortle",
		types: ["Water"],
		genderRatio: { M: 0.875, F: 0.125 },
		baseStats: { hp: 59, atk: 63, def: 80, spa: 65, spd: 80, spe: 58 },
		abilities: { 0: "Torrent", H: "Rain Dish" },
		heightm: 1,
		weightkg: 22.5,
		color: "Blue",
		prevo: "Squirtle",
		evoLevel: 16,
		evos: ["Blastoise"],
		eggGroups: ["Monster", "Water 1"],
	},
	blastoise: {
		num: 9,
		name: "Blastoise",
		types: ["Water"],
		genderRatio: { M: 0.875, F: 0.125 },
		baseStats: { hp: 79, atk: 83, def: 100, spa: 85, spd: 105, spe: 78 },
		abilities: { 0: "Torrent", H: "Rain Dish" },
		heightm: 1.6,
		weightkg: 85.5,
		color: "Blue",
		prevo: "Wartortle",
		evoLevel: 36,
		eggGroups: ["Monster", "Water 1"],
		otherFormes: ["Blastoise-Mega"],
		formeOrder: ["Blastoise", "Blastoise-Mega"],
		canGigantamax: "G-Max Cannonade",
	},
	blastoisemega: {
		num: 9,
		name: "Blastoise-Mega",
		baseSpecies: "Blastoise",
		forme: "Mega",
		types: ["Water"],
		genderRatio: { M: 0.875, F: 0.125 },
		baseStats: { hp: 79, atk: 103, def: 120, spa: 135, spd: 115, spe: 78 },
		abilities: { 0: "Mega Launcher" },
		heightm: 1.6,
		weightkg: 101.1,
		color: "Blue",
		eggGroups: ["Monster", "Water 1"],
		requiredItem: "Blastoisinite",
	},
	blastoisegmax: {
		num: 9,
		name: "Blastoise-Gmax",
		baseSpecies: "Blastoise",
		forme: "Gmax",
		types: ["Water"],
		genderRatio: { M: 0.875, F: 0.125 },
		baseStats: { hp: 79, atk: 83, def: 100, spa: 85, spd: 105, spe: 78 },
		abilities: { 0: "Torrent", H: "Rain Dish" },
		heightm: 1.6,
		weightkg: 0,
		color: "Blue",
		eggGroups: ["Monster", "Water 1"],
		changesFrom: "Blastoise",
	},
	caterpie: {
		num: 10,
		name: "Caterpie",
		types: ["Bug"],
		baseStats: { hp: 45, atk: 30, def: 35, spa: 20, spd: 20, spe: 45 },
		abilities: { 0: "Shield Dust", H: "Run Away" },
		heightm: 0.3,
		weightkg: 2.9,
		color: "Green",
		evos: ["Metapod"],
		eggGroups: ["Bug"],
	},
	metapod: {
		num: 11,
		name: "Metapod",
		types: ["Bug"],
		baseStats: { hp: 50, atk: 20, def: 55, spa: 25, spd: 25, spe: 30 },
		abilities: { 0: "Shed Skin" },
		heightm: 0.7,
		weightkg: 9.9,
		color: "Green",
		prevo: "Caterpie",
		evoLevel: 7,
		evos: ["Butterfree"],
		eggGroups: ["Bug"],
	},
	butterfree: {
		num: 12,
		name: "Butterfree",
		types: ["Bug", "Flying"],
		baseStats: { hp: 60, atk: 45, def: 50, spa: 90, spd: 80, spe: 70 },
		abilities: { 0: "Compound Eyes", H: "Tinted Lens" },
		heightm: 1.1,
		weightkg: 32,
		color: "White",
		prevo: "Metapod",
		evoLevel: 10,
		eggGroups: ["Bug"],
		canGigantamax: "G-Max Befuddle",
	},
	butterfreegmax: {
		num: 12,
		name: "Butterfree-Gmax",
		baseSpecies: "Butterfree",
		forme: "Gmax",
		types: ["Bug", "Flying"],
		baseStats: { hp: 60, atk: 45, def: 50, spa: 90, spd: 80, spe: 70 },
		abilities: { 0: "Compound Eyes", H: "Tinted Lens" },
		heightm: 17,
		weightkg: 0,
		color: "White",
		eggGroups: ["Bug"],
		changesFrom: "Butterfree",
	},
	weedle: {
		num: 13,
		name: "Weedle",
		types: ["Bug", "Poison"],
		baseStats: { hp: 40, atk: 35, def: 30, spa: 20, spd: 20, spe: 50 },
		abilities: { 0: "Shield Dust", H: "Run Away" },
		heightm: 0.3,
		weightkg: 3.2,
		color: "Brown",
		evos: ["Kakuna"],
		eggGroups: ["Bug"],
	},
	kakuna: {
		num: 14,
		name: "Kakuna",
		types: ["Bug", "Poison"],
		baseStats: { hp: 45, atk: 25, def: 50, spa: 25, spd: 25, spe: 35 },
		abilities: { 0: "Shed Skin" },
		heightm: 0.6,
		weightkg: 10,
		color: "Yellow",
		prevo: "Weedle",
		evoLevel: 7,
		evos: ["Beedrill"],
		eggGroups: ["Bug"],
	},
	beedrill: {
		num: 15,
		name: "Beedrill",
		types: ["Bug", "Poison"],
		baseStats: { hp: 65, atk: 90, def: 40, spa: 45, spd: 80, spe: 75 },
		abilities: { 0: "Swarm", H: "Sniper" },
		heightm: 1,
		weightkg: 29.5,
		color: "Yellow",
		prevo: "Kakuna",
		evoLevel: 10,
		eggGroups: ["Bug"],
		otherFormes: ["Beedrill-Mega"],
		formeOrder: ["Beedrill", "Beedrill-Mega"],
	},
	beedrillmega: {
		num: 15,
		name: "Beedrill-Mega",
		baseSpecies: "Beedrill",
		forme: "Mega",
		types: ["Bug", "Poison"],
		baseStats: { hp: 65, atk: 150, def: 40, spa: 15, spd: 80, spe: 145 },
		abilities: { 0: "Adaptability" },
		heightm: 1.4,
		weightkg: 40.5,
		color: "Yellow",
		eggGroups: ["Bug"],
		requiredItem: "Beedrillite",
	},
	pidgey: {
		num: 16,
		name: "Pidgey",
		types: ["Normal", "Flying"],
		baseStats: { hp: 40, atk: 45, def: 40, spa: 35, spd: 35, spe: 56 },
		abilities: { 0: "Keen Eye", 1: "Tangled Feet", H: "Big Pecks" },
		heightm: 0.3,
		weightkg: 1.8,
		color: "Brown",
		evos: ["Pidgeotto"],
		eggGroups: ["Flying"],
	},
	pidgeotto: {
		num: 17,
		name: "Pidgeotto",
		types: ["Normal", "Flying"],
		baseStats: { hp: 63, atk: 60, def: 55, spa: 50, spd: 50, spe: 71 },
		abilities: { 0: "Keen Eye", 1: "Tangled Feet", H: "Big Pecks" },
		heightm: 1.1,
		weightkg: 30,
		color: "Brown",
		prevo: "Pidgey",
		evoLevel: 18,
		evos: ["Pidgeot"],
		eggGroups: ["Flying"],
	},
	pidgeot: {
		num: 18,
		name: "Pidgeot",
		types: ["Normal", "Flying"],
		baseStats: { hp: 83, atk: 80, def: 75, spa: 70, spd: 70, spe: 101 },
		abilities: { 0: "Keen Eye", 1: "Tangled Feet", H: "Big Pecks" },
		heightm: 1.5,
		weightkg: 39.5,
		color: "Brown",
		prevo: "Pidgeotto",
		evoLevel: 36,
		eggGroups: ["Flying"],
		otherFormes: ["Pidgeot-Mega"],
		formeOrder: ["Pidgeot", "Pidgeot-Mega"],
	},
	pidgeotmega: {
		num: 18,
		name: "Pidgeot-Mega",
		baseSpecies: "Pidgeot",
		forme: "Mega",
		types: ["Normal", "Flying"],
		baseStats: { hp: 83, atk: 80, def: 80, spa: 135, spd: 80, spe: 121 },
		abilities: { 0: "No Guard" },
		heightm: 2.2,
		weightkg: 50.5,
		color: "Brown",
		eggGroups: ["Flying"],
		requiredItem: "Pidgeotite",
	},
	rattata: {
		num: 19,
		name: "Rattata",
		types: ["Normal"],
		baseStats: { hp: 30, atk: 56, def: 35, spa: 25, spd: 35, spe: 72 },
		abilities: { 0: "Run Away", 1: "Guts", H: "Hustle" },
		heightm: 0.3,
		weightkg: 3.5,
		color: "Purple",
		evos: ["Raticate"],
		eggGroups: ["Field"],
		otherFormes: ["Rattata-Alola"],
		formeOrder: ["Rattata", "Rattata-Alola"],
	},
	rattataalola: {
		num: 19,
		name: "Rattata-Alola",
		baseSpecies: "Rattata",
		forme: "Alola",
		types: ["Dark", "Normal"],
		baseStats: { hp: 30, atk: 56, def: 35, spa: 25, spd: 35, spe: 72 },
		abilities: { 0: "Gluttony", 1: "Hustle", H: "Thick Fat" },
		heightm: 0.3,
		weightkg: 3.8,
		color: "Black",
		evos: ["Raticate-Alola"],
		eggGroups: ["Field"],
	},
	raticate: {
		num: 20,
		name: "Raticate",
		types: ["Normal"],
		baseStats: { hp: 55, atk: 81, def: 60, spa: 50, spd: 70, spe: 97 },
		abilities: { 0: "Run Away", 1: "Guts", H: "Hustle" },
		heightm: 0.7,
		weightkg: 18.5,
		color: "Brown",
		prevo: "Rattata",
		evoLevel: 20,
		eggGroups: ["Field"],
		otherFormes: ["Raticate-Alola", "Raticate-Alola-Totem"],
		formeOrder: ["Raticate", "Raticate-Alola", "Raticate-Alola-Totem"],
	},
	raticatealola: {
		num: 20,
		name: "Raticate-Alola",
		baseSpecies: "Raticate",
		forme: "Alola",
		types: ["Dark", "Normal"],
		baseStats: { hp: 75, atk: 71, def: 70, spa: 40, spd: 80, spe: 77 },
		abilities: { 0: "Gluttony", 1: "Hustle", H: "Thick Fat" },
		heightm: 0.7,
		weightkg: 25.5,
		color: "Black",
		prevo: "Rattata-Alola",
		evoLevel: 20,
		eggGroups: ["Field"],
	},
	raticatealolatotem: {
		num: 20,
		name: "Raticate-Alola-Totem",
		baseSpecies: "Raticate",
		forme: "Alola-Totem",
		types: ["Dark", "Normal"],
		baseStats: { hp: 75, atk: 71, def: 70, spa: 40, spd: 80, spe: 77 },
		abilities: { 0: "Thick Fat" },
		heightm: 1.4,
		weightkg: 105,
		color: "Black",
		eggGroups: ["Field"],
	},
	spearow: {
		num: 21,
		name: "Spearow",
		types: ["Normal", "Flying"],
		baseStats: { hp: 40, atk: 60, def: 30, spa: 31, spd: 31, spe: 70 },
		abilities: { 0: "Keen Eye", H: "Sniper" },
		heightm: 0.3,
		weightkg: 2,
		color: "Brown",
		evos: ["Fearow"],
		eggGroups: ["Flying"],
	},
	fearow: {
		num: 22,
		name: "Fearow",
		types: ["Normal", "Flying"],
		baseStats: { hp: 65, atk: 90, def: 65, spa: 61, spd: 61, spe: 100 },
		abilities: { 0: "Keen Eye", H: "Sniper" },
		heightm: 1.2,
		weightkg: 38,
		color: "Brown",
		prevo: "Spearow",
		evoLevel: 20,
		eggGroups: ["Flying"],
	},
	ekans: {
		num: 23,
		name: "Ekans",
		types: ["Poison"],
		baseStats: { hp: 35, atk: 60, def: 44, spa: 40, spd: 54, spe: 55 },
		abilities: { 0: "Intimidate", 1: "Shed Skin", H: "Unnerve" },
		heightm: 2,
		weightkg: 6.9,
		color: "Purple",
		evos: ["Arbok"],
		eggGroups: ["Field", "Dragon"],
	},
	arbok: {
		num: 24,
		name: "Arbok",
		types: ["Poison"],
		baseStats: { hp: 60, atk: 95, def: 69, spa: 65, spd: 79, spe: 80 },
		abilities: { 0: "Intimidate", 1: "Shed Skin", H: "Unnerve" },
		heightm: 3.5,
		weightkg: 65,
		color: "Purple",
		prevo: "Ekans",
		evoLevel: 22,
		eggGroups: ["Field", "Dragon"],
	},
	pikachu: {
		num: 25,
		name: "Pikachu",
		types: ["Electric"],
		baseStats: { hp: 35, atk: 55, def: 40, spa: 50, spd: 50, spe: 90 },
		abilities: { 0: "Static", H: "Lightning Rod" },
		heightm: 0.4,
		weightkg: 6,
		color: "Yellow",
		prevo: "Pichu",
		evoType: "levelFriendship",
		evos: ["Raichu", "Raichu-Alola"],
		eggGroups: ["Field", "Fairy"],
		otherFormes: ["Pikachu-Cosplay", "Pikachu-Rock-Star", "Pikachu-Belle", "Pikachu-Pop-Star", "Pikachu-PhD", "Pikachu-Libre", "Pikachu-Original", "Pikachu-Hoenn", "Pikachu-Sinnoh", "Pikachu-Unova", "Pikachu-Kalos", "Pikachu-Alola", "Pikachu-Partner", "Pikachu-Starter", "Pikachu-World"],
		formeOrder: [
			"Pikachu",
			"Pikachu-Original", "Pikachu-Hoenn", "Pikachu-Sinnoh", "Pikachu-Unova", "Pikachu-Kalos", "Pikachu-Alola", "Pikachu-Partner", // Gen 7 formes
			"Pikachu-Starter", // forme 8 in LGPE
			"Pikachu-World", // Gen 8 forme (indexed as Pikachu 9 in datamine)
			"Pikachu-Rock-Star", "Pikachu-Belle", "Pikachu-Pop-Star", "Pikachu-PhD", "Pikachu-Libre", "Pikachu-Cosplay", // formes 1-6 from Gen 6
		],
		canGigantamax: "G-Max Volt Crash",
	},
	pikachucosplay: {
		num: 25,
		name: "Pikachu-Cosplay",
		baseSpecies: "Pikachu",
		forme: "Cosplay",
		types: ["Electric"],
		gender: "F",
		baseStats: { hp: 35, atk: 55, def: 40, spa: 50, spd: 50, spe: 90 },
		abilities: { 0: "Lightning Rod" },
		heightm: 0.4,
		weightkg: 6,
		color: "Yellow",
		eggGroups: ["Undiscovered"],
		gen: 6,
	},
	pikachurockstar: {
		num: 25,
		name: "Pikachu-Rock-Star",
		baseSpecies: "Pikachu",
		forme: "Rock-Star",
		types: ["Electric"],
		gender: "F",
		baseStats: { hp: 35, atk: 55, def: 40, spa: 50, spd: 50, spe: 90 },
		abilities: { 0: "Lightning Rod" },
		heightm: 0.4,
		weightkg: 6,
		color: "Yellow",
		eggGroups: ["Undiscovered"],
		changesFrom: "Pikachu-Cosplay",
		gen: 6,
	},
	pikachubelle: {
		num: 25,
		name: "Pikachu-Belle",
		baseSpecies: "Pikachu",
		forme: "Belle",
		types: ["Electric"],
		gender: "F",
		baseStats: { hp: 35, atk: 55, def: 40, spa: 50, spd: 50, spe: 90 },
		abilities: { 0: "Lightning Rod" },
		heightm: 0.4,
		weightkg: 6,
		color: "Yellow",
		eggGroups: ["Undiscovered"],
		changesFrom: "Pikachu-Cosplay",
		gen: 6,
	},
	pikachupopstar: {
		num: 25,
		name: "Pikachu-Pop-Star",
		baseSpecies: "Pikachu",
		forme: "Pop-Star",
		types: ["Electric"],
		gender: "F",
		baseStats: { hp: 35, atk: 55, def: 40, spa: 50, spd: 50, spe: 90 },
		abilities: { 0: "Lightning Rod" },
		heightm: 0.4,
		weightkg: 6,
		color: "Yellow",
		eggGroups: ["Undiscovered"],
		changesFrom: "Pikachu-Cosplay",
		gen: 6,
	},
	pikachuphd: {
		num: 25,
		name: "Pikachu-PhD",
		baseSpecies: "Pikachu",
		forme: "PhD",
		types: ["Electric"],
		gender: "F",
		baseStats: { hp: 35, atk: 55, def: 40, spa: 50, spd: 50, spe: 90 },
		abilities: { 0: "Lightning Rod" },
		heightm: 0.4,
		weightkg: 6,
		color: "Yellow",
		eggGroups: ["Undiscovered"],
		changesFrom: "Pikachu-Cosplay",
		gen: 6,
	},
	pikachulibre: {
		num: 25,
		name: "Pikachu-Libre",
		baseSpecies: "Pikachu",
		forme: "Libre",
		types: ["Electric"],
		gender: "F",
		baseStats: { hp: 35, atk: 55, def: 40, spa: 50, spd: 50, spe: 90 },
		abilities: { 0: "Lightning Rod" },
		heightm: 0.4,
		weightkg: 6,
		color: "Yellow",
		eggGroups: ["Undiscovered"],
		changesFrom: "Pikachu-Cosplay",
		gen: 6,
	},
	pikachuoriginal: {
		num: 25,
		name: "Pikachu-Original",
		baseSpecies: "Pikachu",
		forme: "Original",
		types: ["Electric"],
		gender: "M",
		baseStats: { hp: 35, atk: 55, def: 40, spa: 50, spd: 50, spe: 90 },
		abilities: { 0: "Static", H: "Lightning Rod" },
		heightm: 0.4,
		weightkg: 6,
		color: "Yellow",
		eggGroups: ["Undiscovered"],
		gen: 7,
	},
	pikachuhoenn: {
		num: 25,
		name: "Pikachu-Hoenn",
		baseSpecies: "Pikachu",
		forme: "Hoenn",
		types: ["Electric"],
		gender: "M",
		baseStats: { hp: 35, atk: 55, def: 40, spa: 50, spd: 50, spe: 90 },
		abilities: { 0: "Static", H: "Lightning Rod" },
		heightm: 0.4,
		weightkg: 6,
		color: "Yellow",
		eggGroups: ["Undiscovered"],
		gen: 7,
	},
	pikachusinnoh: {
		num: 25,
		name: "Pikachu-Sinnoh",
		baseSpecies: "Pikachu",
		forme: "Sinnoh",
		types: ["Electric"],
		gender: "M",
		baseStats: { hp: 35, atk: 55, def: 40, spa: 50, spd: 50, spe: 90 },
		abilities: { 0: "Static", H: "Lightning Rod" },
		heightm: 0.4,
		weightkg: 6,
		color: "Yellow",
		eggGroups: ["Undiscovered"],
		gen: 7,
	},
	pikachuunova: {
		num: 25,
		name: "Pikachu-Unova",
		baseSpecies: "Pikachu",
		forme: "Unova",
		types: ["Electric"],
		gender: "M",
		baseStats: { hp: 35, atk: 55, def: 40, spa: 50, spd: 50, spe: 90 },
		abilities: { 0: "Static", H: "Lightning Rod" },
		heightm: 0.4,
		weightkg: 6,
		color: "Yellow",
		eggGroups: ["Undiscovered"],
		gen: 7,
	},
	pikachukalos: {
		num: 25,
		name: "Pikachu-Kalos",
		baseSpecies: "Pikachu",
		forme: "Kalos",
		types: ["Electric"],
		gender: "M",
		baseStats: { hp: 35, atk: 55, def: 40, spa: 50, spd: 50, spe: 90 },
		abilities: { 0: "Static", H: "Lightning Rod" },
		heightm: 0.4,
		weightkg: 6,
		color: "Yellow",
		eggGroups: ["Undiscovered"],
		gen: 7,
	},
	pikachualola: {
		num: 25,
		name: "Pikachu-Alola",
		baseSpecies: "Pikachu",
		forme: "Alola",
		types: ["Electric"],
		gender: "M",
		baseStats: { hp: 35, atk: 55, def: 40, spa: 50, spd: 50, spe: 90 },
		abilities: { 0: "Static", H: "Lightning Rod" },
		heightm: 0.4,
		weightkg: 6,
		color: "Yellow",
		eggGroups: ["Undiscovered"],
		gen: 7,
	},
	pikachupartner: {
		num: 25,
		name: "Pikachu-Partner",
		baseSpecies: "Pikachu",
		forme: "Partner",
		types: ["Electric"],
		gender: "M",
		baseStats: { hp: 35, atk: 55, def: 40, spa: 50, spd: 50, spe: 90 },
		abilities: { 0: "Static", H: "Lightning Rod" },
		heightm: 0.4,
		weightkg: 6,
		color: "Yellow",
		eggGroups: ["Undiscovered"],
		gen: 7,
	},
	pikachustarter: {
		num: 25,
		name: "Pikachu-Starter",
		baseSpecies: "Pikachu",
		forme: "Starter",
		types: ["Electric"],
		baseStats: { hp: 45, atk: 80, def: 50, spa: 75, spd: 60, spe: 120 },
		abilities: { 0: "Static", H: "Lightning Rod" },
		heightm: 0.4,
		weightkg: 6,
		color: "Yellow",
		eggGroups: ["Undiscovered"],
	},
	pikachugmax: {
		num: 25,
		name: "Pikachu-Gmax",
		baseSpecies: "Pikachu",
		forme: "Gmax",
		types: ["Electric"],
		baseStats: { hp: 35, atk: 55, def: 40, spa: 50, spd: 50, spe: 90 },
		abilities: { 0: "Static", H: "Lightning Rod" },
		heightm: 21,
		weightkg: 0,
		color: "Yellow",
		eggGroups: ["Field", "Fairy"],
		changesFrom: "Pikachu",
	},
	pikachuworld: {
		num: 25,
		name: "Pikachu-World",
		baseSpecies: "Pikachu",
		forme: "World",
		types: ["Electric"],
		gender: "M",
		baseStats: { hp: 35, atk: 55, def: 40, spa: 50, spd: 50, spe: 90 },
		abilities: { 0: "Static", H: "Lightning Rod" },
		heightm: 0.4,
		weightkg: 6,
		color: "Yellow",
		eggGroups: ["Undiscovered"],
		gen: 8,
	},
	raichu: {
		num: 26,
		name: "Raichu",
		types: ["Electric"],
		baseStats: { hp: 60, atk: 90, def: 55, spa: 90, spd: 80, spe: 110 },
		abilities: { 0: "Static", H: "Lightning Rod" },
		heightm: 0.8,
		weightkg: 30,
		color: "Yellow",
		prevo: "Pikachu",
		evoType: "useItem",
		evoItem: "Thunder Stone",
		eggGroups: ["Field", "Fairy"],
		otherFormes: ["Raichu-Alola"],
		formeOrder: ["Raichu", "Raichu-Alola"],
	},
	raichualola: {
		num: 26,
		name: "Raichu-Alola",
		baseSpecies: "Raichu",
		forme: "Alola",
		types: ["Electric", "Psychic"],
		baseStats: { hp: 60, atk: 85, def: 50, spa: 95, spd: 85, spe: 110 },
		abilities: { 0: "Surge Surfer" },
		heightm: 0.7,
		weightkg: 21,
		color: "Brown",
		prevo: "Pikachu",
		evoType: "useItem",
		evoItem: "Thunder Stone",
		eggGroups: ["Field", "Fairy"],
	},
	sandshrew: {
		num: 27,
		name: "Sandshrew",
		types: ["Ground"],
		baseStats: { hp: 50, atk: 75, def: 85, spa: 20, spd: 30, spe: 40 },
		abilities: { 0: "Sand Veil", H: "Sand Rush" },
		heightm: 0.6,
		weightkg: 12,
		color: "Yellow",
		evos: ["Sandslash"],
		eggGroups: ["Field"],
		otherFormes: ["Sandshrew-Alola"],
		formeOrder: ["Sandshrew", "Sandshrew-Alola"],
	},
	sandshrewalola: {
		num: 27,
		name: "Sandshrew-Alola",
		baseSpecies: "Sandshrew",
		forme: "Alola",
		types: ["Ice", "Steel"],
		baseStats: { hp: 50, atk: 75, def: 90, spa: 10, spd: 35, spe: 40 },
		abilities: { 0: "Snow Cloak", H: "Slush Rush" },
		heightm: 0.7,
		weightkg: 40,
		color: "White",
		evos: ["Sandslash-Alola"],
		eggGroups: ["Field"],
	},
	sandslash: {
		num: 28,
		name: "Sandslash",
		types: ["Ground"],
		baseStats: { hp: 75, atk: 100, def: 110, spa: 45, spd: 55, spe: 65 },
		abilities: { 0: "Sand Veil", H: "Sand Rush" },
		heightm: 1,
		weightkg: 29.5,
		color: "Yellow",
		prevo: "Sandshrew",
		evoLevel: 22,
		eggGroups: ["Field"],
		otherFormes: ["Sandslash-Alola"],
		formeOrder: ["Sandslash", "Sandslash-Alola"],
	},
	sandslashalola: {
		num: 28,
		name: "Sandslash-Alola",
		baseSpecies: "Sandslash",
		forme: "Alola",
		types: ["Ice", "Steel"],
		baseStats: { hp: 75, atk: 100, def: 120, spa: 25, spd: 65, spe: 65 },
		abilities: { 0: "Snow Cloak", H: "Slush Rush" },
		heightm: 1.2,
		weightkg: 55,
		color: "Blue",
		prevo: "Sandshrew-Alola",
		evoType: "useItem",
		evoItem: "Ice Stone",
		eggGroups: ["Field"],
	},
	nidoranf: {
		num: 29,
		name: "Nidoran-F",
		types: ["Poison"],
		gender: "F",
		baseStats: { hp: 55, atk: 47, def: 52, spa: 40, spd: 40, spe: 41 },
		abilities: { 0: "Poison Point", 1: "Rivalry", H: "Hustle" },
		heightm: 0.4,
		weightkg: 7,
		color: "Blue",
		evos: ["Nidorina"],
		eggGroups: ["Monster", "Field"],
	},
	nidorina: {
		num: 30,
		name: "Nidorina",
		types: ["Poison"],
		gender: "F",
		baseStats: { hp: 70, atk: 62, def: 67, spa: 55, spd: 55, spe: 56 },
		abilities: { 0: "Poison Point", 1: "Rivalry", H: "Hustle" },
		heightm: 0.8,
		weightkg: 20,
		color: "Blue",
		prevo: "Nidoran-F",
		evoLevel: 16,
		evos: ["Nidoqueen"],
		eggGroups: ["Undiscovered"],
	},
	nidoqueen: {
		num: 31,
		name: "Nidoqueen",
		types: ["Poison", "Ground"],
		gender: "F",
		baseStats: { hp: 90, atk: 92, def: 87, spa: 75, spd: 85, spe: 76 },
		abilities: { 0: "Poison Point", 1: "Rivalry", H: "Sheer Force" },
		heightm: 1.3,
		weightkg: 60,
		color: "Blue",
		prevo: "Nidorina",
		evoType: "useItem",
		evoItem: "Moon Stone",
		eggGroups: ["Undiscovered"],
	},
	nidoranm: {
		num: 32,
		name: "Nidoran-M",
		types: ["Poison"],
		gender: "M",
		baseStats: { hp: 46, atk: 57, def: 40, spa: 40, spd: 40, spe: 50 },
		abilities: { 0: "Poison Point", 1: "Rivalry", H: "Hustle" },
		heightm: 0.5,
		weightkg: 9,
		color: "Purple",
		evos: ["Nidorino"],
		eggGroups: ["Monster", "Field"],
	},
	nidorino: {
		num: 33,
		name: "Nidorino",
		types: ["Poison"],
		gender: "M",
		baseStats: { hp: 61, atk: 72, def: 57, spa: 55, spd: 55, spe: 65 },
		abilities: { 0: "Poison Point", 1: "Rivalry", H: "Hustle" },
		heightm: 0.9,
		weightkg: 19.5,
		color: "Purple",
		prevo: "Nidoran-M",
		evoLevel: 16,
		evos: ["Nidoking"],
		eggGroups: ["Monster", "Field"],
	},
	nidoking: {
		num: 34,
		name: "Nidoking",
		types: ["Poison", "Ground"],
		gender: "M",
		baseStats: { hp: 81, atk: 102, def: 77, spa: 85, spd: 75, spe: 85 },
		abilities: { 0: "Poison Point", 1: "Rivalry", H: "Sheer Force" },
		heightm: 1.4,
		weightkg: 62,
		color: "Purple",
		prevo: "Nidorino",
		evoType: "useItem",
		evoItem: "Moon Stone",
		eggGroups: ["Monster", "Field"],
	},
	clefairy: {
		num: 35,
		name: "Clefairy",
		types: ["Fairy"],
		genderRatio: { M: 0.25, F: 0.75 },
		baseStats: { hp: 70, atk: 45, def: 48, spa: 60, spd: 65, spe: 35 },
		abilities: { 0: "Cute Charm", 1: "Magic Guard", H: "Friend Guard" },
		heightm: 0.6,
		weightkg: 7.5,
		color: "Pink",
		prevo: "Cleffa",
		evoType: "levelFriendship",
		evos: ["Clefable"],
		eggGroups: ["Fairy"],
	},
	clefable: {
		num: 36,
		name: "Clefable",
		types: ["Fairy"],
		genderRatio: { M: 0.25, F: 0.75 },
		baseStats: { hp: 95, atk: 70, def: 73, spa: 95, spd: 90, spe: 60 },
		abilities: { 0: "Cute Charm", 1: "Magic Guard", H: "Unaware" },
		heightm: 1.3,
		weightkg: 40,
		color: "Pink",
		prevo: "Clefairy",
		evoType: "useItem",
		evoItem: "Moon Stone",
		eggGroups: ["Fairy"],
	},
	vulpix: {
		num: 37,
		name: "Vulpix",
		types: ["Fire"],
		genderRatio: { M: 0.25, F: 0.75 },
		baseStats: { hp: 38, atk: 41, def: 40, spa: 50, spd: 65, spe: 65 },
		abilities: { 0: "Flash Fire", H: "Drought" },
		heightm: 0.6,
		weightkg: 9.9,
		color: "Brown",
		evos: ["Ninetales"],
		eggGroups: ["Field"],
		otherFormes: ["Vulpix-Alola"],
		formeOrder: ["Vulpix", "Vulpix-Alola"],
	},
	vulpixalola: {
		num: 37,
		name: "Vulpix-Alola",
		baseSpecies: "Vulpix",
		forme: "Alola",
		types: ["Ice"],
		genderRatio: { M: 0.25, F: 0.75 },
		baseStats: { hp: 38, atk: 41, def: 40, spa: 50, spd: 65, spe: 65 },
		abilities: { 0: "Snow Cloak", H: "Snow Warning" },
		heightm: 0.6,
		weightkg: 9.9,
		color: "White",
		evos: ["Ninetales-Alola"],
		eggGroups: ["Field"],
	},
	ninetales: {
		num: 38,
		name: "Ninetales",
		types: ["Fire"],
		genderRatio: { M: 0.25, F: 0.75 },
		baseStats: { hp: 73, atk: 76, def: 75, spa: 81, spd: 100, spe: 100 },
		abilities: { 0: "Flash Fire", H: "Drought" },
		heightm: 1.1,
		weightkg: 19.9,
		color: "Yellow",
		prevo: "Vulpix",
		evoType: "useItem",
		evoItem: "Fire Stone",
		eggGroups: ["Field"],
		otherFormes: ["Ninetales-Alola"],
		formeOrder: ["Ninetales", "Ninetales-Alola"],
	},
	ninetalesalola: {
		num: 38,
		name: "Ninetales-Alola",
		baseSpecies: "Ninetales",
		forme: "Alola",
		types: ["Ice", "Fairy"],
		genderRatio: { M: 0.25, F: 0.75 },
		baseStats: { hp: 73, atk: 67, def: 75, spa: 81, spd: 100, spe: 109 },
		abilities: { 0: "Snow Cloak", H: "Snow Warning" },
		heightm: 1.1,
		weightkg: 19.9,
		color: "Blue",
		prevo: "Vulpix-Alola",
		evoType: "useItem",
		evoItem: "Ice Stone",
		eggGroups: ["Field"],
	},
	jigglypuff: {
		num: 39,
		name: "Jigglypuff",
		types: ["Normal", "Fairy"],
		genderRatio: { M: 0.25, F: 0.75 },
		baseStats: { hp: 115, atk: 45, def: 20, spa: 45, spd: 25, spe: 20 },
		abilities: { 0: "Cute Charm", 1: "Competitive", H: "Friend Guard" },
		heightm: 0.5,
		weightkg: 5.5,
		color: "Pink",
		prevo: "Igglybuff",
		evoType: "levelFriendship",
		evos: ["Wigglytuff"],
		eggGroups: ["Fairy"],
	},
	wigglytuff: {
		num: 40,
		name: "Wigglytuff",
		types: ["Normal", "Fairy"],
		genderRatio: { M: 0.25, F: 0.75 },
		baseStats: { hp: 140, atk: 70, def: 45, spa: 85, spd: 50, spe: 45 },
		abilities: { 0: "Cute Charm", 1: "Competitive", H: "Frisk" },
		heightm: 1,
		weightkg: 12,
		color: "Pink",
		prevo: "Jigglypuff",
		evoType: "useItem",
		evoItem: "Moon Stone",
		eggGroups: ["Fairy"],
	},
	zubat: {
		num: 41,
		name: "Zubat",
		types: ["Poison", "Flying"],
		baseStats: { hp: 40, atk: 45, def: 35, spa: 30, spd: 40, spe: 55 },
		abilities: { 0: "Inner Focus", H: "Infiltrator" },
		heightm: 0.8,
		weightkg: 7.5,
		color: "Purple",
		evos: ["Golbat"],
		eggGroups: ["Flying"],
	},
	golbat: {
		num: 42,
		name: "Golbat",
		types: ["Poison", "Flying"],
		baseStats: { hp: 75, atk: 80, def: 70, spa: 65, spd: 75, spe: 90 },
		abilities: { 0: "Inner Focus", H: "Infiltrator" },
		heightm: 1.6,
		weightkg: 55,
		color: "Purple",
		prevo: "Zubat",
		evoLevel: 22,
		evos: ["Crobat"],
		eggGroups: ["Flying"],
	},
	oddish: {
		num: 43,
		name: "Oddish",
		types: ["Grass", "Poison"],
		baseStats: { hp: 45, atk: 50, def: 55, spa: 75, spd: 65, spe: 30 },
		abilities: { 0: "Chlorophyll", H: "Run Away" },
		heightm: 0.5,
		weightkg: 5.4,
		color: "Blue",
		evos: ["Gloom"],
		eggGroups: ["Grass"],
	},
	gloom: {
		num: 44,
		name: "Gloom",
		types: ["Grass", "Poison"],
		baseStats: { hp: 60, atk: 65, def: 70, spa: 85, spd: 75, spe: 40 },
		abilities: { 0: "Chlorophyll", H: "Stench" },
		heightm: 0.8,
		weightkg: 8.6,
		color: "Blue",
		prevo: "Oddish",
		evoLevel: 21,
		evos: ["Vileplume", "Bellossom"],
		eggGroups: ["Grass"],
	},
	vileplume: {
		num: 45,
		name: "Vileplume",
		types: ["Grass", "Poison"],
		baseStats: { hp: 75, atk: 80, def: 85, spa: 110, spd: 90, spe: 50 },
		abilities: { 0: "Chlorophyll", H: "Effect Spore" },
		heightm: 1.2,
		weightkg: 18.6,
		color: "Red",
		prevo: "Gloom",
		evoType: "useItem",
		evoItem: "Leaf Stone",
		eggGroups: ["Grass"],
	},
	paras: {
		num: 46,
		name: "Paras",
		types: ["Bug", "Grass"],
		baseStats: { hp: 35, atk: 70, def: 55, spa: 45, spd: 55, spe: 25 },
		abilities: { 0: "Effect Spore", 1: "Dry Skin", H: "Damp" },
		heightm: 0.3,
		weightkg: 5.4,
		color: "Red",
		evos: ["Parasect"],
		eggGroups: ["Bug", "Grass"],
	},
	parasect: {
		num: 47,
		name: "Parasect",
		types: ["Bug", "Grass"],
		baseStats: { hp: 60, atk: 95, def: 80, spa: 60, spd: 80, spe: 30 },
		abilities: { 0: "Effect Spore", 1: "Dry Skin", H: "Damp" },
		heightm: 1,
		weightkg: 29.5,
		color: "Red",
		prevo: "Paras",
		evoLevel: 24,
		eggGroups: ["Bug", "Grass"],
	},
	venonat: {
		num: 48,
		name: "Venonat",
		types: ["Bug", "Poison"],
		baseStats: { hp: 60, atk: 55, def: 50, spa: 40, spd: 55, spe: 45 },
		abilities: { 0: "Compound Eyes", 1: "Tinted Lens", H: "Run Away" },
		heightm: 1,
		weightkg: 30,
		color: "Purple",
		evos: ["Venomoth"],
		eggGroups: ["Bug"],
	},
	venomoth: {
		num: 49,
		name: "Venomoth",
		types: ["Bug", "Poison"],
		baseStats: { hp: 70, atk: 65, def: 60, spa: 90, spd: 75, spe: 90 },
		abilities: { 0: "Shield Dust", 1: "Tinted Lens", H: "Wonder Skin" },
		heightm: 1.5,
		weightkg: 12.5,
		color: "Purple",
		prevo: "Venonat",
		evoLevel: 31,
		eggGroups: ["Bug"],
	},
	diglett: {
		num: 50,
		name: "Diglett",
		types: ["Ground"],
		baseStats: { hp: 10, atk: 55, def: 25, spa: 35, spd: 45, spe: 95 },
		abilities: { 0: "Sand Veil", 1: "Arena Trap", H: "Sand Force" },
		heightm: 0.2,
		weightkg: 0.8,
		color: "Brown",
		evos: ["Dugtrio"],
		eggGroups: ["Field"],
		otherFormes: ["Diglett-Alola"],
		formeOrder: ["Diglett", "Diglett-Alola"],
	},
	diglettalola: {
		num: 50,
		name: "Diglett-Alola",
		baseSpecies: "Diglett",
		forme: "Alola",
		types: ["Ground", "Steel"],
		baseStats: { hp: 10, atk: 55, def: 30, spa: 35, spd: 45, spe: 90 },
		abilities: { 0: "Sand Veil", 1: "Tangling Hair", H: "Sand Force" },
		heightm: 0.2,
		weightkg: 1,
		color: "Brown",
		evos: ["Dugtrio-Alola"],
		eggGroups: ["Field"],
	},
	dugtrio: {
		num: 51,
		name: "Dugtrio",
		types: ["Ground"],
		baseStats: { hp: 35, atk: 100, def: 50, spa: 50, spd: 70, spe: 120 },
		abilities: { 0: "Sand Veil", 1: "Arena Trap", H: "Sand Force" },
		heightm: 0.7,
		weightkg: 33.3,
		color: "Brown",
		prevo: "Diglett",
		evoLevel: 26,
		eggGroups: ["Field"],
		otherFormes: ["Dugtrio-Alola"],
		formeOrder: ["Dugtrio", "Dugtrio-Alola"],
	},
	dugtrioalola: {
		num: 51,
		name: "Dugtrio-Alola",
		baseSpecies: "Dugtrio",
		forme: "Alola",
		types: ["Ground", "Steel"],
		baseStats: { hp: 35, atk: 100, def: 60, spa: 50, spd: 70, spe: 110 },
		abilities: { 0: "Sand Veil", 1: "Tangling Hair", H: "Sand Force" },
		heightm: 0.7,
		weightkg: 66.6,
		color: "Brown",
		prevo: "Diglett-Alola",
		evoLevel: 26,
		eggGroups: ["Field"],
	},
	meowth: {
		num: 52,
		name: "Meowth",
		types: ["Normal"],
		baseStats: { hp: 40, atk: 45, def: 35, spa: 40, spd: 40, spe: 90 },
		abilities: { 0: "Pickup", 1: "Technician", H: "Unnerve" },
		heightm: 0.4,
		weightkg: 4.2,
		color: "Yellow",
		evos: ["Persian"],
		eggGroups: ["Field"],
		otherFormes: ["Meowth-Alola", "Meowth-Galar"],
		formeOrder: ["Meowth", "Meowth-Alola", "Meowth-Galar"],
		canGigantamax: "G-Max Gold Rush",
	},
	meowthalola: {
		num: 52,
		name: "Meowth-Alola",
		baseSpecies: "Meowth",
		forme: "Alola",
		types: ["Dark"],
		baseStats: { hp: 40, atk: 35, def: 35, spa: 50, spd: 40, spe: 90 },
		abilities: { 0: "Pickup", 1: "Technician", H: "Rattled" },
		heightm: 0.4,
		weightkg: 4.2,
		color: "Blue",
		evos: ["Persian-Alola"],
		eggGroups: ["Field"],
	},
	meowthgalar: {
		num: 52,
		name: "Meowth-Galar",
		baseSpecies: "Meowth",
		forme: "Galar",
		types: ["Steel"],
		baseStats: { hp: 50, atk: 65, def: 55, spa: 40, spd: 40, spe: 40 },
		abilities: { 0: "Pickup", 1: "Tough Claws", H: "Unnerve" },
		heightm: 0.4,
		weightkg: 7.5,
		color: "Brown",
		evos: ["Perrserker"],
		eggGroups: ["Field"],
	},
	meowthgmax: {
		num: 52,
		name: "Meowth-Gmax",
		baseSpecies: "Meowth",
		forme: "Gmax",
		types: ["Normal"],
		baseStats: { hp: 40, atk: 45, def: 35, spa: 40, spd: 40, spe: 90 },
		abilities: { 0: "Pickup", 1: "Technician", H: "Unnerve" },
		heightm: 33,
		weightkg: 0,
		color: "Yellow",
		eggGroups: ["Field"],
		changesFrom: "Meowth",
	},
	persian: {
		num: 53,
		name: "Persian",
		types: ["Normal"],
		baseStats: { hp: 65, atk: 70, def: 60, spa: 65, spd: 65, spe: 115 },
		abilities: { 0: "Limber", 1: "Technician", H: "Unnerve" },
		heightm: 1,
		weightkg: 32,
		color: "Yellow",
		prevo: "Meowth",
		evoLevel: 28,
		eggGroups: ["Field"],
		otherFormes: ["Persian-Alola"],
		formeOrder: ["Persian", "Persian-Alola"],
	},
	persianalola: {
		num: 53,
		name: "Persian-Alola",
		baseSpecies: "Persian",
		forme: "Alola",
		types: ["Dark"],
		baseStats: { hp: 65, atk: 60, def: 60, spa: 75, spd: 65, spe: 115 },
		abilities: { 0: "Fur Coat", 1: "Technician", H: "Rattled" },
		heightm: 1.1,
		weightkg: 33,
		color: "Blue",
		prevo: "Meowth-Alola",
		evoType: "levelFriendship",
		eggGroups: ["Field"],
	},
	psyduck: {
		num: 54,
		name: "Psyduck",
		types: ["Water"],
		baseStats: { hp: 50, atk: 52, def: 48, spa: 65, spd: 50, spe: 55 },
		abilities: { 0: "Damp", 1: "Cloud Nine", H: "Swift Swim" },
		heightm: 0.8,
		weightkg: 19.6,
		color: "Yellow",
		evos: ["Golduck"],
		eggGroups: ["Water 1", "Field"],
	},
	golduck: {
		num: 55,
		name: "Golduck",
		types: ["Water"],
		baseStats: { hp: 80, atk: 82, def: 78, spa: 95, spd: 80, spe: 85 },
		abilities: { 0: "Damp", 1: "Cloud Nine", H: "Swift Swim" },
		heightm: 1.7,
		weightkg: 76.6,
		color: "Blue",
		prevo: "Psyduck",
		evoLevel: 33,
		eggGroups: ["Water 1", "Field"],
	},
	mankey: {
		num: 56,
		name: "Mankey",
		types: ["Fighting"],
		baseStats: { hp: 40, atk: 80, def: 35, spa: 35, spd: 45, spe: 70 },
		abilities: { 0: "Vital Spirit", 1: "Anger Point", H: "Defiant" },
		heightm: 0.5,
		weightkg: 28,
		color: "Brown",
		evos: ["Primeape"],
		eggGroups: ["Field"],
	},
	primeape: {
		num: 57,
		name: "Primeape",
		types: ["Fighting"],
		baseStats: { hp: 65, atk: 105, def: 60, spa: 60, spd: 70, spe: 95 },
		abilities: { 0: "Vital Spirit", 1: "Anger Point", H: "Defiant" },
		heightm: 1,
		weightkg: 32,
		color: "Brown",
		prevo: "Mankey",
		evoLevel: 28,
		eggGroups: ["Field"],
	},
	growlithe: {
		num: 58,
		name: "Growlithe",
		types: ["Fire"],
		genderRatio: { M: 0.75, F: 0.25 },
		baseStats: { hp: 55, atk: 70, def: 45, spa: 70, spd: 50, spe: 60 },
		abilities: { 0: "Intimidate", 1: "Flash Fire", H: "Justified" },
		heightm: 0.7,
		weightkg: 19,
		color: "Brown",
		evos: ["Arcanine"],
		eggGroups: ["Field"],
	},
	arcanine: {
		num: 59,
		name: "Arcanine",
		types: ["Fire"],
		genderRatio: { M: 0.75, F: 0.25 },
		baseStats: { hp: 90, atk: 110, def: 80, spa: 100, spd: 80, spe: 95 },
		abilities: { 0: "Intimidate", 1: "Flash Fire", H: "Justified" },
		heightm: 1.9,
		weightkg: 155,
		color: "Brown",
		prevo: "Growlithe",
		evoType: "useItem",
		evoItem: "Fire Stone",
		eggGroups: ["Field"],
	},
	poliwag: {
		num: 60,
		name: "Poliwag",
		types: ["Water"],
		baseStats: { hp: 40, atk: 50, def: 40, spa: 40, spd: 40, spe: 90 },
		abilities: { 0: "Water Absorb", 1: "Damp", H: "Swift Swim" },
		heightm: 0.6,
		weightkg: 12.4,
		color: "Blue",
		evos: ["Poliwhirl"],
		eggGroups: ["Water 1"],
	},
	poliwhirl: {
		num: 61,
		name: "Poliwhirl",
		types: ["Water"],
		baseStats: { hp: 65, atk: 65, def: 65, spa: 50, spd: 50, spe: 90 },
		abilities: { 0: "Water Absorb", 1: "Damp", H: "Swift Swim" },
		heightm: 1,
		weightkg: 20,
		color: "Blue",
		prevo: "Poliwag",
		evoLevel: 25,
		evos: ["Poliwrath", "Politoed"],
		eggGroups: ["Water 1"],
	},
	poliwrath: {
		num: 62,
		name: "Poliwrath",
		types: ["Water", "Fighting"],
		baseStats: { hp: 90, atk: 95, def: 95, spa: 70, spd: 90, spe: 70 },
		abilities: { 0: "Water Absorb", 1: "Damp", H: "Swift Swim" },
		heightm: 1.3,
		weightkg: 54,
		color: "Blue",
		prevo: "Poliwhirl",
		evoType: "useItem",
		evoItem: "Water Stone",
		eggGroups: ["Water 1"],
	},
	abra: {
		num: 63,
		name: "Abra",
		types: ["Psychic"],
		genderRatio: { M: 0.75, F: 0.25 },
		baseStats: { hp: 25, atk: 20, def: 15, spa: 105, spd: 55, spe: 90 },
		abilities: { 0: "Synchronize", 1: "Inner Focus", H: "Magic Guard" },
		heightm: 0.9,
		weightkg: 19.5,
		color: "Brown",
		evos: ["Kadabra"],
		eggGroups: ["Human-Like"],
	},
	kadabra: {
		num: 64,
		name: "Kadabra",
		types: ["Psychic"],
		genderRatio: { M: 0.75, F: 0.25 },
		baseStats: { hp: 40, atk: 35, def: 30, spa: 120, spd: 70, spe: 105 },
		abilities: { 0: "Synchronize", 1: "Inner Focus", H: "Magic Guard" },
		heightm: 1.3,
		weightkg: 56.5,
		color: "Brown",
		prevo: "Abra",
		evoLevel: 16,
		evos: ["Alakazam"],
		eggGroups: ["Human-Like"],
	},
	alakazam: {
		num: 65,
		name: "Alakazam",
		types: ["Psychic"],
		genderRatio: { M: 0.75, F: 0.25 },
		baseStats: { hp: 55, atk: 50, def: 45, spa: 135, spd: 95, spe: 120 },
		abilities: { 0: "Synchronize", 1: "Inner Focus", H: "Magic Guard" },
		heightm: 1.5,
		weightkg: 48,
		color: "Brown",
		prevo: "Kadabra",
		evoType: "trade",
		eggGroups: ["Human-Like"],
		otherFormes: ["Alakazam-Mega"],
		formeOrder: ["Alakazam", "Alakazam-Mega"],
	},
	alakazammega: {
		num: 65,
		name: "Alakazam-Mega",
		baseSpecies: "Alakazam",
		forme: "Mega",
		types: ["Psychic"],
		genderRatio: { M: 0.75, F: 0.25 },
		baseStats: { hp: 55, atk: 50, def: 65, spa: 175, spd: 105, spe: 150 },
		abilities: { 0: "Trace" },
		heightm: 1.2,
		weightkg: 48,
		color: "Brown",
		eggGroups: ["Human-Like"],
		requiredItem: "Alakazite",
	},
	machop: {
		num: 66,
		name: "Machop",
		types: ["Fighting"],
		genderRatio: { M: 0.75, F: 0.25 },
		baseStats: { hp: 70, atk: 80, def: 50, spa: 35, spd: 35, spe: 35 },
		abilities: { 0: "Guts", 1: "No Guard", H: "Steadfast" },
		heightm: 0.8,
		weightkg: 19.5,
		color: "Gray",
		evos: ["Machoke"],
		eggGroups: ["Human-Like"],
	},
	machoke: {
		num: 67,
		name: "Machoke",
		types: ["Fighting"],
		genderRatio: { M: 0.75, F: 0.25 },
		baseStats: { hp: 80, atk: 100, def: 70, spa: 50, spd: 60, spe: 45 },
		abilities: { 0: "Guts", 1: "No Guard", H: "Steadfast" },
		heightm: 1.5,
		weightkg: 70.5,
		color: "Gray",
		prevo: "Machop",
		evoLevel: 28,
		evos: ["Machamp"],
		eggGroups: ["Human-Like"],
	},
	machamp: {
		num: 68,
		name: "Machamp",
		types: ["Fighting"],
		genderRatio: { M: 0.75, F: 0.25 },
		baseStats: { hp: 90, atk: 130, def: 80, spa: 65, spd: 85, spe: 55 },
		abilities: { 0: "Guts", 1: "No Guard", H: "Steadfast" },
		heightm: 1.6,
		weightkg: 130,
		color: "Gray",
		prevo: "Machoke",
		evoType: "trade",
		eggGroups: ["Human-Like"],
		canGigantamax: "G-Max Chi Strike",
	},
	machampgmax: {
		num: 68,
		name: "Machamp-Gmax",
		baseSpecies: "Machamp",
		forme: "Gmax",
		types: ["Fighting"],
		genderRatio: { M: 0.75, F: 0.25 },
		baseStats: { hp: 90, atk: 130, def: 80, spa: 65, spd: 85, spe: 55 },
		abilities: { 0: "Guts", 1: "No Guard", H: "Steadfast" },
		heightm: 25,
		weightkg: 0,
		color: "Gray",
		eggGroups: ["Human-Like"],
		changesFrom: "Machamp",
	},
	bellsprout: {
		num: 69,
		name: "Bellsprout",
		types: ["Grass", "Poison"],
		baseStats: { hp: 50, atk: 75, def: 35, spa: 70, spd: 30, spe: 40 },
		abilities: { 0: "Chlorophyll", H: "Gluttony" },
		heightm: 0.7,
		weightkg: 4,
		color: "Green",
		evos: ["Weepinbell"],
		eggGroups: ["Grass"],
	},
	weepinbell: {
		num: 70,
		name: "Weepinbell",
		types: ["Grass", "Poison"],
		baseStats: { hp: 65, atk: 90, def: 50, spa: 85, spd: 45, spe: 55 },
		abilities: { 0: "Chlorophyll", H: "Gluttony" },
		heightm: 1,
		weightkg: 6.4,
		color: "Green",
		prevo: "Bellsprout",
		evoLevel: 21,
		evos: ["Victreebel"],
		eggGroups: ["Grass"],
	},
	victreebel: {
		num: 71,
		name: "Victreebel",
		types: ["Grass", "Poison"],
		baseStats: { hp: 80, atk: 105, def: 65, spa: 100, spd: 70, spe: 70 },
		abilities: { 0: "Chlorophyll", H: "Gluttony" },
		heightm: 1.7,
		weightkg: 15.5,
		color: "Green",
		prevo: "Weepinbell",
		evoType: "useItem",
		evoItem: "Leaf Stone",
		eggGroups: ["Grass"],
	},
	tentacool: {
		num: 72,
		name: "Tentacool",
		types: ["Water", "Poison"],
		baseStats: { hp: 40, atk: 40, def: 35, spa: 50, spd: 100, spe: 70 },
		abilities: { 0: "Clear Body", 1: "Liquid Ooze", H: "Rain Dish" },
		heightm: 0.9,
		weightkg: 45.5,
		color: "Blue",
		evos: ["Tentacruel"],
		eggGroups: ["Water 3"],
	},
	tentacruel: {
		num: 73,
		name: "Tentacruel",
		types: ["Water", "Poison"],
		baseStats: { hp: 80, atk: 70, def: 65, spa: 80, spd: 120, spe: 100 },
		abilities: { 0: "Clear Body", 1: "Liquid Ooze", H: "Rain Dish" },
		heightm: 1.6,
		weightkg: 55,
		color: "Blue",
		prevo: "Tentacool",
		evoLevel: 30,
		eggGroups: ["Water 3"],
	},
	geodude: {
		num: 74,
		name: "Geodude",
		types: ["Rock", "Ground"],
		baseStats: { hp: 40, atk: 80, def: 100, spa: 30, spd: 30, spe: 20 },
		abilities: { 0: "Rock Head", 1: "Sturdy", H: "Sand Veil" },
		heightm: 0.4,
		weightkg: 20,
		color: "Brown",
		evos: ["Graveler"],
		eggGroups: ["Mineral"],
		otherFormes: ["Geodude-Alola"],
		formeOrder: ["Geodude", "Geodude-Alola"],
	},
	geodudealola: {
		num: 74,
		name: "Geodude-Alola",
		baseSpecies: "Geodude",
		forme: "Alola",
		types: ["Rock", "Electric"],
		baseStats: { hp: 40, atk: 80, def: 100, spa: 30, spd: 30, spe: 20 },
		abilities: { 0: "Magnet Pull", 1: "Sturdy", H: "Galvanize" },
		heightm: 0.4,
		weightkg: 20.3,
		color: "Gray",
		evos: ["Graveler-Alola"],
		eggGroups: ["Mineral"],
	},
	graveler: {
		num: 75,
		name: "Graveler",
		types: ["Rock", "Ground"],
		baseStats: { hp: 55, atk: 95, def: 115, spa: 45, spd: 45, spe: 35 },
		abilities: { 0: "Rock Head", 1: "Sturdy", H: "Sand Veil" },
		heightm: 1,
		weightkg: 105,
		color: "Brown",
		prevo: "Geodude",
		evoLevel: 25,
		evos: ["Golem"],
		eggGroups: ["Mineral"],
		otherFormes: ["Graveler-Alola"],
		formeOrder: ["Graveler", "Graveler-Alola"],
	},
	graveleralola: {
		num: 75,
		name: "Graveler-Alola",
		baseSpecies: "Graveler",
		forme: "Alola",
		types: ["Rock", "Electric"],
		baseStats: { hp: 55, atk: 95, def: 115, spa: 45, spd: 45, spe: 35 },
		abilities: { 0: "Magnet Pull", 1: "Sturdy", H: "Galvanize" },
		heightm: 1,
		weightkg: 110,
		color: "Gray",
		prevo: "Geodude-Alola",
		evoLevel: 25,
		evos: ["Golem-Alola"],
		eggGroups: ["Mineral"],
	},
	golem: {
		num: 76,
		name: "Golem",
		types: ["Rock", "Ground"],
		baseStats: { hp: 80, atk: 120, def: 130, spa: 55, spd: 65, spe: 45 },
		abilities: { 0: "Rock Head", 1: "Sturdy", H: "Sand Veil" },
		heightm: 1.4,
		weightkg: 300,
		color: "Brown",
		prevo: "Graveler",
		evoType: "trade",
		eggGroups: ["Mineral"],
		otherFormes: ["Golem-Alola"],
		formeOrder: ["Golem", "Golem-Alola"],
	},
	golemalola: {
		num: 76,
		name: "Golem-Alola",
		baseSpecies: "Golem",
		forme: "Alola",
		types: ["Rock", "Electric"],
		baseStats: { hp: 80, atk: 120, def: 130, spa: 55, spd: 65, spe: 45 },
		abilities: { 0: "Magnet Pull", 1: "Sturdy", H: "Galvanize" },
		heightm: 1.7,
		weightkg: 316,
		color: "Gray",
		prevo: "Graveler-Alola",
		evoType: "trade",
		eggGroups: ["Mineral"],
	},
	ponyta: {
		num: 77,
		name: "Ponyta",
		types: ["Fire"],
		baseStats: { hp: 50, atk: 85, def: 55, spa: 65, spd: 65, spe: 90 },
		abilities: { 0: "Run Away", 1: "Flash Fire", H: "Flame Body" },
		heightm: 1,
		weightkg: 30,
		color: "Yellow",
		evos: ["Rapidash"],
		eggGroups: ["Field"],
		otherFormes: ["Ponyta-Galar"],
		formeOrder: ["Ponyta", "Ponyta-Galar"],
	},
	ponytagalar: {
		num: 77,
		name: "Ponyta-Galar",
		baseSpecies: "Ponyta",
		forme: "Galar",
		types: ["Psychic"],
		baseStats: { hp: 50, atk: 85, def: 55, spa: 65, spd: 65, spe: 90 },
		abilities: { 0: "Run Away", 1: "Pastel Veil", H: "Anticipation" },
		heightm: 0.8,
		weightkg: 24,
		color: "White",
		evos: ["Rapidash-Galar"],
		eggGroups: ["Field"],
	},
	rapidash: {
		num: 78,
		name: "Rapidash",
		types: ["Fire"],
		baseStats: { hp: 65, atk: 100, def: 70, spa: 80, spd: 80, spe: 105 },
		abilities: { 0: "Run Away", 1: "Flash Fire", H: "Flame Body" },
		heightm: 1.7,
		weightkg: 95,
		color: "Yellow",
		prevo: "Ponyta",
		evoLevel: 40,
		eggGroups: ["Field"],
		otherFormes: ["Rapidash-Galar"],
		formeOrder: ["Rapidash", "Rapidash-Galar"],
	},
	rapidashgalar: {
		num: 78,
		name: "Rapidash-Galar",
		baseSpecies: "Rapidash",
		forme: "Galar",
		types: ["Psychic", "Fairy"],
		baseStats: { hp: 65, atk: 100, def: 70, spa: 80, spd: 80, spe: 105 },
		abilities: { 0: "Run Away", 1: "Pastel Veil", H: "Anticipation" },
		heightm: 1.7,
		weightkg: 80,
		color: "White",
		prevo: "Ponyta-Galar",
		evoLevel: 40,
		eggGroups: ["Field"],
	},
	slowpoke: {
		num: 79,
		name: "Slowpoke",
		types: ["Water", "Psychic"],
		baseStats: { hp: 90, atk: 65, def: 65, spa: 40, spd: 40, spe: 15 },
		abilities: { 0: "Oblivious", 1: "Own Tempo", H: "Regenerator" },
		heightm: 1.2,
		weightkg: 36,
		color: "Pink",
		evos: ["Slowbro", "Slowking"],
		eggGroups: ["Monster", "Water 1"],
		otherFormes: ["Slowpoke-Galar"],
		formeOrder: ["Slowpoke", "Slowpoke-Galar"],
	},
	slowpokegalar: {
		num: 79,
		name: "Slowpoke-Galar",
		baseSpecies: "Slowpoke",
		forme: "Galar",
		types: ["Psychic"],
		baseStats: { hp: 90, atk: 65, def: 65, spa: 40, spd: 40, spe: 15 },
		abilities: { 0: "Gluttony", 1: "Own Tempo", H: "Regenerator" },
		heightm: 1.2,
		weightkg: 36,
		color: "Pink",
		evos: ["Slowbro-Galar", "Slowking-Galar"],
		eggGroups: ["Monster", "Water 1"],
	},
	slowbro: {
		num: 80,
		name: "Slowbro",
		types: ["Water", "Psychic"],
		baseStats: { hp: 95, atk: 75, def: 110, spa: 100, spd: 80, spe: 30 },
		abilities: { 0: "Oblivious", 1: "Own Tempo", H: "Regenerator" },
		heightm: 1.6,
		weightkg: 78.5,
		color: "Pink",
		prevo: "Slowpoke",
		evoLevel: 37,
		eggGroups: ["Monster", "Water 1"],
		otherFormes: ["Slowbro-Mega", "Slowbro-Galar"],
		formeOrder: ["Slowbro", "Slowbro-Mega", "Slowbro-Galar"],
	},
	slowbromega: {
		num: 80,
		name: "Slowbro-Mega",
		baseSpecies: "Slowbro",
		forme: "Mega",
		types: ["Water", "Psychic"],
		baseStats: { hp: 95, atk: 75, def: 180, spa: 130, spd: 80, spe: 30 },
		abilities: { 0: "Shell Armor" },
		heightm: 2,
		weightkg: 120,
		color: "Pink",
		eggGroups: ["Monster", "Water 1"],
		requiredItem: "Slowbronite",
	},
	slowbrogalar: {
		num: 80,
		name: "Slowbro-Galar",
		baseSpecies: "Slowbro",
		forme: "Galar",
		types: ["Poison", "Psychic"],
		baseStats: { hp: 95, atk: 100, def: 95, spa: 100, spd: 70, spe: 30 },
		abilities: { 0: "Quick Draw", 1: "Own Tempo", H: "Regenerator" },
		heightm: 1.6,
		weightkg: 70.5,
		color: "Pink",
		prevo: "Slowpoke-Galar",
		evoType: "useItem",
		evoItem: "Galarica Cuff",
		eggGroups: ["Monster", "Water 1"],
	},
	magnemite: {
		num: 81,
		name: "Magnemite",
		types: ["Electric", "Steel"],
		gender: "N",
		baseStats: { hp: 25, atk: 35, def: 70, spa: 95, spd: 55, spe: 45 },
		abilities: { 0: "Magnet Pull", 1: "Sturdy", H: "Analytic" },
		heightm: 0.3,
		weightkg: 6,
		color: "Gray",
		evos: ["Magneton"],
		eggGroups: ["Mineral"],
	},
	magneton: {
		num: 82,
		name: "Magneton",
		types: ["Electric", "Steel"],
		gender: "N",
		baseStats: { hp: 50, atk: 60, def: 95, spa: 120, spd: 70, spe: 70 },
		abilities: { 0: "Magnet Pull", 1: "Sturdy", H: "Analytic" },
		heightm: 1,
		weightkg: 60,
		color: "Gray",
		prevo: "Magnemite",
		evoLevel: 30,
		evos: ["Magnezone"],
		eggGroups: ["Mineral"],
	},
	farfetchd: {
		num: 83,
		name: "Farfetch\u2019d",
		types: ["Normal", "Flying"],
		baseStats: { hp: 52, atk: 90, def: 55, spa: 58, spd: 62, spe: 60 },
		abilities: { 0: "Keen Eye", 1: "Inner Focus", H: "Defiant" },
		heightm: 0.8,
		weightkg: 15,
		color: "Brown",
		eggGroups: ["Flying", "Field"],
		otherFormes: ["Farfetch\u2019d-Galar"],
		formeOrder: ["Farfetch\u2019d", "Farfetch\u2019d-Galar"],
	},
	farfetchdgalar: {
		num: 83,
		name: "Farfetch\u2019d-Galar",
		baseSpecies: "Farfetch\u2019d",
		forme: "Galar",
		types: ["Fighting"],
		baseStats: { hp: 52, atk: 95, def: 55, spa: 58, spd: 62, spe: 55 },
		abilities: { 0: "Steadfast", H: "Scrappy" },
		heightm: 0.8,
		weightkg: 15,
		color: "Brown",
		evos: ["Sirfetch\u2019d"],
		eggGroups: ["Flying", "Field"],
	},
	doduo: {
		num: 84,
		name: "Doduo",
		types: ["Normal", "Flying"],
		baseStats: { hp: 35, atk: 85, def: 45, spa: 35, spd: 35, spe: 75 },
		abilities: { 0: "Run Away", 1: "Early Bird", H: "Tangled Feet" },
		heightm: 1.4,
		weightkg: 39.2,
		color: "Brown",
		evos: ["Dodrio"],
		eggGroups: ["Flying"],
	},
	dodrio: {
		num: 85,
		name: "Dodrio",
		types: ["Normal", "Flying"],
		baseStats: { hp: 60, atk: 110, def: 70, spa: 60, spd: 60, spe: 110 },
		abilities: { 0: "Run Away", 1: "Early Bird", H: "Tangled Feet" },
		heightm: 1.8,
		weightkg: 85.2,
		color: "Brown",
		prevo: "Doduo",
		evoLevel: 31,
		eggGroups: ["Flying"],
	},
	seel: {
		num: 86,
		name: "Seel",
		types: ["Water"],
		baseStats: { hp: 65, atk: 45, def: 55, spa: 45, spd: 70, spe: 45 },
		abilities: { 0: "Thick Fat", 1: "Hydration", H: "Ice Body" },
		heightm: 1.1,
		weightkg: 90,
		color: "White",
		evos: ["Dewgong"],
		eggGroups: ["Water 1", "Field"],
	},
	dewgong: {
		num: 87,
		name: "Dewgong",
		types: ["Water", "Ice"],
		baseStats: { hp: 90, atk: 70, def: 80, spa: 70, spd: 95, spe: 70 },
		abilities: { 0: "Thick Fat", 1: "Hydration", H: "Ice Body" },
		heightm: 1.7,
		weightkg: 120,
		color: "White",
		prevo: "Seel",
		evoLevel: 34,
		eggGroups: ["Water 1", "Field"],
	},
	grimer: {
		num: 88,
		name: "Grimer",
		types: ["Poison"],
		baseStats: { hp: 80, atk: 80, def: 50, spa: 40, spd: 50, spe: 25 },
		abilities: { 0: "Stench", 1: "Sticky Hold", H: "Poison Touch" },
		heightm: 0.9,
		weightkg: 30,
		color: "Purple",
		evos: ["Muk"],
		eggGroups: ["Amorphous"],
		otherFormes: ["Grimer-Alola"],
		formeOrder: ["Grimer", "Grimer-Alola"],
	},
	grimeralola: {
		num: 88,
		name: "Grimer-Alola",
		baseSpecies: "Grimer",
		forme: "Alola",
		types: ["Poison", "Dark"],
		baseStats: { hp: 80, atk: 80, def: 50, spa: 40, spd: 50, spe: 25 },
		abilities: { 0: "Poison Touch", 1: "Gluttony", H: "Power of Alchemy" },
		heightm: 0.7,
		weightkg: 42,
		color: "Green",
		evos: ["Muk-Alola"],
		eggGroups: ["Amorphous"],
	},
	muk: {
		num: 89,
		name: "Muk",
		types: ["Poison"],
		baseStats: { hp: 105, atk: 105, def: 75, spa: 65, spd: 100, spe: 50 },
		abilities: { 0: "Stench", 1: "Sticky Hold", H: "Poison Touch" },
		heightm: 1.2,
		weightkg: 30,
		color: "Purple",
		prevo: "Grimer",
		evoLevel: 38,
		eggGroups: ["Amorphous"],
		otherFormes: ["Muk-Alola"],
		formeOrder: ["Muk", "Muk-Alola"],
	},
	mukalola: {
		num: 89,
		name: "Muk-Alola",
		baseSpecies: "Muk",
		forme: "Alola",
		types: ["Poison", "Dark"],
		baseStats: { hp: 105, atk: 105, def: 75, spa: 65, spd: 100, spe: 50 },
		abilities: { 0: "Poison Touch", 1: "Gluttony", H: "Power of Alchemy" },
		heightm: 1,
		weightkg: 52,
		color: "Green",
		prevo: "Grimer-Alola",
		evoLevel: 38,
		eggGroups: ["Amorphous"],
	},
	shellder: {
		num: 90,
		name: "Shellder",
		types: ["Water"],
		baseStats: { hp: 30, atk: 65, def: 100, spa: 45, spd: 25, spe: 40 },
		abilities: { 0: "Shell Armor", 1: "Skill Link", H: "Overcoat" },
		heightm: 0.3,
		weightkg: 4,
		color: "Purple",
		evos: ["Cloyster"],
		eggGroups: ["Water 3"],
	},
	cloyster: {
		num: 91,
		name: "Cloyster",
		types: ["Water", "Ice"],
		baseStats: { hp: 50, atk: 95, def: 180, spa: 85, spd: 45, spe: 70 },
		abilities: { 0: "Shell Armor", 1: "Skill Link", H: "Overcoat" },
		heightm: 1.5,
		weightkg: 132.5,
		color: "Purple",
		prevo: "Shellder",
		evoType: "useItem",
		evoItem: "Water Stone",
		eggGroups: ["Water 3"],
	},
	gastly: {
		num: 92,
		name: "Gastly",
		types: ["Ghost", "Poison"],
		baseStats: { hp: 30, atk: 35, def: 30, spa: 100, spd: 35, spe: 80 },
		abilities: { 0: "Levitate" },
		heightm: 1.3,
		weightkg: 0.1,
		color: "Purple",
		evos: ["Haunter"],
		eggGroups: ["Amorphous"],
	},
	haunter: {
		num: 93,
		name: "Haunter",
		types: ["Ghost", "Poison"],
		baseStats: { hp: 45, atk: 50, def: 45, spa: 115, spd: 55, spe: 95 },
		abilities: { 0: "Levitate" },
		heightm: 1.6,
		weightkg: 0.1,
		color: "Purple",
		prevo: "Gastly",
		evoLevel: 25,
		evos: ["Gengar"],
		eggGroups: ["Amorphous"],
	},
	gengar: {
		num: 94,
		name: "Gengar",
		types: ["Ghost", "Poison"],
		baseStats: { hp: 60, atk: 65, def: 60, spa: 130, spd: 75, spe: 110 },
		abilities: { 0: "Cursed Body" },
		heightm: 1.5,
		weightkg: 40.5,
		color: "Purple",
		prevo: "Haunter",
		evoType: "trade",
		eggGroups: ["Amorphous"],
		otherFormes: ["Gengar-Mega"],
		formeOrder: ["Gengar", "Gengar-Mega"],
		canGigantamax: "G-Max Terror",
	},
	gengarmega: {
		num: 94,
		name: "Gengar-Mega",
		baseSpecies: "Gengar",
		forme: "Mega",
		types: ["Ghost", "Poison"],
		baseStats: { hp: 60, atk: 65, def: 80, spa: 170, spd: 95, spe: 130 },
		abilities: { 0: "Shadow Tag" },
		heightm: 1.4,
		weightkg: 40.5,
		color: "Purple",
		eggGroups: ["Amorphous"],
		requiredItem: "Gengarite",
	},
	gengargmax: {
		num: 94,
		name: "Gengar-Gmax",
		baseSpecies: "Gengar",
		forme: "Gmax",
		types: ["Ghost", "Poison"],
		baseStats: { hp: 60, atk: 65, def: 60, spa: 130, spd: 75, spe: 110 },
		abilities: { 0: "Cursed Body" },
		heightm: 20,
		weightkg: 0,
		color: "Purple",
		eggGroups: ["Amorphous"],
		changesFrom: "Gengar",
	},
	onix: {
		num: 95,
		name: "Onix",
		types: ["Rock", "Ground"],
		baseStats: { hp: 35, atk: 45, def: 160, spa: 30, spd: 45, spe: 70 },
		abilities: { 0: "Rock Head", 1: "Sturdy", H: "Weak Armor" },
		heightm: 8.8,
		weightkg: 210,
		color: "Gray",
		evos: ["Steelix"],
		eggGroups: ["Mineral"],
	},
	drowzee: {
		num: 96,
		name: "Drowzee",
		types: ["Psychic"],
		baseStats: { hp: 60, atk: 48, def: 45, spa: 43, spd: 90, spe: 42 },
		abilities: { 0: "Insomnia", 1: "Forewarn", H: "Inner Focus" },
		heightm: 1,
		weightkg: 32.4,
		color: "Yellow",
		evos: ["Hypno"],
		eggGroups: ["Human-Like"],
	},
	hypno: {
		num: 97,
		name: "Hypno",
		types: ["Psychic"],
		baseStats: { hp: 85, atk: 73, def: 70, spa: 73, spd: 115, spe: 67 },
		abilities: { 0: "Insomnia", 1: "Forewarn", H: "Inner Focus" },
		heightm: 1.6,
		weightkg: 75.6,
		color: "Yellow",
		prevo: "Drowzee",
		evoLevel: 26,
		eggGroups: ["Human-Like"],
	},
	krabby: {
		num: 98,
		name: "Krabby",
		types: ["Water"],
		baseStats: { hp: 30, atk: 105, def: 90, spa: 25, spd: 25, spe: 50 },
		abilities: { 0: "Hyper Cutter", 1: "Shell Armor", H: "Sheer Force" },
		heightm: 0.4,
		weightkg: 6.5,
		color: "Red",
		evos: ["Kingler"],
		eggGroups: ["Water 3"],
	},
	kingler: {
		num: 99,
		name: "Kingler",
		types: ["Water"],
		baseStats: { hp: 55, atk: 130, def: 115, spa: 50, spd: 50, spe: 75 },
		abilities: { 0: "Hyper Cutter", 1: "Shell Armor", H: "Sheer Force" },
		heightm: 1.3,
		weightkg: 60,
		color: "Red",
		prevo: "Krabby",
		evoLevel: 28,
		eggGroups: ["Water 3"],
		canGigantamax: "G-Max Foam Burst",
	},
	kinglergmax: {
		num: 99,
		name: "Kingler-Gmax",
		baseSpecies: "Kingler",
		forme: "Gmax",
		types: ["Water"],
		baseStats: { hp: 55, atk: 130, def: 115, spa: 50, spd: 50, spe: 75 },
		abilities: { 0: "Hyper Cutter", 1: "Shell Armor", H: "Sheer Force" },
		heightm: 19,
		weightkg: 0,
		color: "Red",
		eggGroups: ["Water 3"],
		changesFrom: "Kingler",
	},
	voltorb: {
		num: 100,
		name: "Voltorb",
		types: ["Electric"],
		gender: "N",
		baseStats: { hp: 40, atk: 30, def: 50, spa: 55, spd: 55, spe: 100 },
		abilities: { 0: "Soundproof", 1: "Static", H: "Aftermath" },
		heightm: 0.5,
		weightkg: 10.4,
		color: "Red",
		evos: ["Electrode"],
		eggGroups: ["Mineral"],
	},
	electrode: {
		num: 101,
		name: "Electrode",
		types: ["Electric"],
		gender: "N",
		baseStats: { hp: 60, atk: 50, def: 70, spa: 80, spd: 80, spe: 150 },
		abilities: { 0: "Soundproof", 1: "Static", H: "Aftermath" },
		heightm: 1.2,
		weightkg: 66.6,
		color: "Red",
		prevo: "Voltorb",
		evoLevel: 30,
		eggGroups: ["Mineral"],
	},
	exeggcute: {
		num: 102,
		name: "Exeggcute",
		types: ["Grass", "Psychic"],
		baseStats: { hp: 60, atk: 40, def: 80, spa: 60, spd: 45, spe: 40 },
		abilities: { 0: "Chlorophyll", H: "Harvest" },
		heightm: 0.4,
		weightkg: 2.5,
		color: "Pink",
		evos: ["Exeggutor", "Exeggutor-Alola"],
		eggGroups: ["Grass"],
	},
	exeggutor: {
		num: 103,
		name: "Exeggutor",
		types: ["Grass", "Psychic"],
		baseStats: { hp: 95, atk: 95, def: 85, spa: 125, spd: 75, spe: 55 },
		abilities: { 0: "Chlorophyll", H: "Harvest" },
		heightm: 2,
		weightkg: 120,
		color: "Yellow",
		prevo: "Exeggcute",
		evoType: "useItem",
		evoItem: "Leaf Stone",
		eggGroups: ["Grass"],
		otherFormes: ["Exeggutor-Alola"],
		formeOrder: ["Exeggutor", "Exeggutor-Alola"],
	},
	exeggutoralola: {
		num: 103,
		name: "Exeggutor-Alola",
		baseSpecies: "Exeggutor",
		forme: "Alola",
		types: ["Grass", "Dragon"],
		baseStats: { hp: 95, atk: 105, def: 85, spa: 125, spd: 75, spe: 45 },
		abilities: { 0: "Frisk", H: "Harvest" },
		heightm: 10.9,
		weightkg: 415.6,
		color: "Yellow",
		prevo: "Exeggcute",
		evoType: "useItem",
		evoItem: "Leaf Stone",
		eggGroups: ["Grass"],
	},
	cubone: {
		num: 104,
		name: "Cubone",
		types: ["Ground"],
		baseStats: { hp: 50, atk: 50, def: 95, spa: 40, spd: 50, spe: 35 },
		abilities: { 0: "Rock Head", 1: "Lightning Rod", H: "Battle Armor" },
		heightm: 0.4,
		weightkg: 6.5,
		color: "Brown",
		evos: ["Marowak", "Marowak-Alola"],
		eggGroups: ["Monster"],
	},
	marowak: {
		num: 105,
		name: "Marowak",
		types: ["Ground"],
		baseStats: { hp: 60, atk: 80, def: 110, spa: 50, spd: 80, spe: 45 },
		abilities: { 0: "Rock Head", 1: "Lightning Rod", H: "Battle Armor" },
		heightm: 1,
		weightkg: 45,
		color: "Brown",
		prevo: "Cubone",
		evoLevel: 28,
		eggGroups: ["Monster"],
		otherFormes: ["Marowak-Alola", "Marowak-Alola-Totem"],
		formeOrder: ["Marowak", "Marowak-Alola", "Marowak-Alola-Totem"],
	},
	marowakalola: {
		num: 105,
		name: "Marowak-Alola",
		baseSpecies: "Marowak",
		forme: "Alola",
		types: ["Fire", "Ghost"],
		baseStats: { hp: 60, atk: 80, def: 110, spa: 50, spd: 80, spe: 45 },
		abilities: { 0: "Cursed Body", 1: "Lightning Rod", H: "Rock Head" },
		heightm: 1,
		weightkg: 34,
		color: "Purple",
		prevo: "Cubone",
		evoLevel: 28,
		eggGroups: ["Monster"],
	},
	marowakalolatotem: {
		num: 105,
		name: "Marowak-Alola-Totem",
		baseSpecies: "Marowak",
		forme: "Alola-Totem",
		types: ["Fire", "Ghost"],
		baseStats: { hp: 60, atk: 80, def: 110, spa: 50, spd: 80, spe: 45 },
		abilities: { 0: "Rock Head" },
		heightm: 1.7,
		weightkg: 98,
		color: "Purple",
		eggGroups: ["Monster"],
	},
	hitmonlee: {
		num: 106,
		name: "Hitmonlee",
		types: ["Fighting"],
		gender: "M",
		baseStats: { hp: 50, atk: 120, def: 53, spa: 35, spd: 110, spe: 87 },
		abilities: { 0: "Limber", 1: "Reckless", H: "Unburden" },
		heightm: 1.5,
		weightkg: 49.8,
		color: "Brown",
		prevo: "Tyrogue",
		evoLevel: 20,
		evoCondition: "with an Atk stat > its Def stat",
		eggGroups: ["Human-Like"],
	},
	hitmonchan: {
		num: 107,
		name: "Hitmonchan",
		types: ["Fighting"],
		gender: "M",
		baseStats: { hp: 50, atk: 105, def: 79, spa: 35, spd: 110, spe: 76 },
		abilities: { 0: "Keen Eye", 1: "Iron Fist", H: "Inner Focus" },
		heightm: 1.4,
		weightkg: 50.2,
		color: "Brown",
		prevo: "Tyrogue",
		evoLevel: 20,
		evoCondition: "with an Atk stat < its Def stat",
		eggGroups: ["Human-Like"],
	},
	lickitung: {
		num: 108,
		name: "Lickitung",
		types: ["Normal"],
		baseStats: { hp: 90, atk: 55, def: 75, spa: 60, spd: 75, spe: 30 },
		abilities: { 0: "Own Tempo", 1: "Oblivious", H: "Cloud Nine" },
		heightm: 1.2,
		weightkg: 65.5,
		color: "Pink",
		evos: ["Lickilicky"],
		eggGroups: ["Monster"],
	},
	koffing: {
		num: 109,
		name: "Koffing",
		types: ["Poison"],
		baseStats: { hp: 40, atk: 65, def: 95, spa: 60, spd: 45, spe: 35 },
		abilities: { 0: "Levitate", 1: "Neutralizing Gas", H: "Stench" },
		heightm: 0.6,
		weightkg: 1,
		color: "Purple",
		evos: ["Weezing", "Weezing-Galar"],
		eggGroups: ["Amorphous"],
	},
	weezing: {
		num: 110,
		name: "Weezing",
		types: ["Poison"],
		baseStats: { hp: 65, atk: 90, def: 120, spa: 85, spd: 70, spe: 60 },
		abilities: { 0: "Levitate", 1: "Neutralizing Gas", H: "Stench" },
		heightm: 1.2,
		weightkg: 9.5,
		color: "Purple",
		prevo: "Koffing",
		evoLevel: 35,
		eggGroups: ["Amorphous"],
		otherFormes: ["Weezing-Galar"],
		formeOrder: ["Weezing", "Weezing-Galar"],
	},
	weezinggalar: {
		num: 110,
		name: "Weezing-Galar",
		baseSpecies: "Weezing",
		forme: "Galar",
		types: ["Poison", "Fairy"],
		baseStats: { hp: 65, atk: 90, def: 120, spa: 85, spd: 70, spe: 60 },
		abilities: { 0: "Levitate", 1: "Neutralizing Gas", H: "Misty Surge" },
		heightm: 3,
		weightkg: 16,
		color: "Gray",
		prevo: "Koffing",
		evoLevel: 35,
		eggGroups: ["Amorphous"],
	},
	rhyhorn: {
		num: 111,
		name: "Rhyhorn",
		types: ["Ground", "Rock"],
		baseStats: { hp: 80, atk: 85, def: 95, spa: 30, spd: 30, spe: 25 },
		abilities: { 0: "Lightning Rod", 1: "Rock Head", H: "Reckless" },
		heightm: 1,
		weightkg: 115,
		color: "Gray",
		evos: ["Rhydon"],
		eggGroups: ["Monster", "Field"],
	},
	rhydon: {
		num: 112,
		name: "Rhydon",
		types: ["Ground", "Rock"],
		baseStats: { hp: 105, atk: 130, def: 120, spa: 45, spd: 45, spe: 40 },
		abilities: { 0: "Lightning Rod", 1: "Rock Head", H: "Reckless" },
		heightm: 1.9,
		weightkg: 120,
		color: "Gray",
		prevo: "Rhyhorn",
		evoLevel: 42,
		evos: ["Rhyperior"],
		eggGroups: ["Monster", "Field"],
	},
	chansey: {
		num: 113,
		name: "Chansey",
		types: ["Normal"],
		gender: "F",
		baseStats: { hp: 250, atk: 5, def: 5, spa: 35, spd: 105, spe: 50 },
		abilities: { 0: "Natural Cure", 1: "Serene Grace", H: "Healer" },
		heightm: 1.1,
		weightkg: 34.6,
		color: "Pink",
		prevo: "Happiny",
		evoType: "levelHold",
		evoItem: "Oval Stone",
		evoCondition: "during the day",
		evos: ["Blissey"],
		eggGroups: ["Fairy"],
		canHatch: true,
	},
	tangela: {
		num: 114,
		name: "Tangela",
		types: ["Grass"],
		baseStats: { hp: 65, atk: 55, def: 115, spa: 100, spd: 40, spe: 60 },
		abilities: { 0: "Chlorophyll", 1: "Leaf Guard", H: "Regenerator" },
		heightm: 1,
		weightkg: 35,
		color: "Blue",
		evos: ["Tangrowth"],
		eggGroups: ["Grass"],
	},
	kangaskhan: {
		num: 115,
		name: "Kangaskhan",
		types: ["Normal"],
		gender: "F",
		baseStats: { hp: 105, atk: 95, def: 80, spa: 40, spd: 80, spe: 90 },
		abilities: { 0: "Early Bird", 1: "Scrappy", H: "Inner Focus" },
		heightm: 2.2,
		weightkg: 80,
		color: "Brown",
		eggGroups: ["Monster"],
		otherFormes: ["Kangaskhan-Mega"],
		formeOrder: ["Kangaskhan", "Kangaskhan-Mega"],
	},
	kangaskhanmega: {
		num: 115,
		name: "Kangaskhan-Mega",
		baseSpecies: "Kangaskhan",
		forme: "Mega",
		types: ["Normal"],
		gender: "F",
		baseStats: { hp: 105, atk: 125, def: 100, spa: 60, spd: 100, spe: 100 },
		abilities: { 0: "Parental Bond" },
		heightm: 2.2,
		weightkg: 100,
		color: "Brown",
		eggGroups: ["Monster"],
		requiredItem: "Kangaskhanite",
	},
	horsea: {
		num: 116,
		name: "Horsea",
		types: ["Water"],
		baseStats: { hp: 30, atk: 40, def: 70, spa: 70, spd: 25, spe: 60 },
		abilities: { 0: "Swift Swim", 1: "Sniper", H: "Damp" },
		heightm: 0.4,
		weightkg: 8,
		color: "Blue",
		evos: ["Seadra"],
		eggGroups: ["Water 1", "Dragon"],
	},
	seadra: {
		num: 117,
		name: "Seadra",
		types: ["Water"],
		baseStats: { hp: 55, atk: 65, def: 95, spa: 95, spd: 45, spe: 85 },
		abilities: { 0: "Poison Point", 1: "Sniper", H: "Damp" },
		heightm: 1.2,
		weightkg: 25,
		color: "Blue",
		prevo: "Horsea",
		evoLevel: 32,
		evos: ["Kingdra"],
		eggGroups: ["Water 1", "Dragon"],
	},
	goldeen: {
		num: 118,
		name: "Goldeen",
		types: ["Water"],
		baseStats: { hp: 45, atk: 67, def: 60, spa: 35, spd: 50, spe: 63 },
		abilities: { 0: "Swift Swim", 1: "Water Veil", H: "Lightning Rod" },
		heightm: 0.6,
		weightkg: 15,
		color: "Red",
		evos: ["Seaking"],
		eggGroups: ["Water 2"],
	},
	seaking: {
		num: 119,
		name: "Seaking",
		types: ["Water"],
		baseStats: { hp: 80, atk: 92, def: 65, spa: 65, spd: 80, spe: 68 },
		abilities: { 0: "Swift Swim", 1: "Water Veil", H: "Lightning Rod" },
		heightm: 1.3,
		weightkg: 39,
		color: "Red",
		prevo: "Goldeen",
		evoLevel: 33,
		eggGroups: ["Water 2"],
	},
	staryu: {
		num: 120,
		name: "Staryu",
		types: ["Water"],
		gender: "N",
		baseStats: { hp: 30, atk: 45, def: 55, spa: 70, spd: 55, spe: 85 },
		abilities: { 0: "Illuminate", 1: "Natural Cure", H: "Analytic" },
		heightm: 0.8,
		weightkg: 34.5,
		color: "Brown",
		evos: ["Starmie"],
		eggGroups: ["Water 3"],
	},
	starmie: {
		num: 121,
		name: "Starmie",
		types: ["Water", "Psychic"],
		gender: "N",
		baseStats: { hp: 60, atk: 75, def: 85, spa: 100, spd: 85, spe: 115 },
		abilities: { 0: "Illuminate", 1: "Natural Cure", H: "Analytic" },
		heightm: 1.1,
		weightkg: 80,
		color: "Purple",
		prevo: "Staryu",
		evoType: "useItem",
		evoItem: "Water Stone",
		eggGroups: ["Water 3"],
	},
	mrmime: {
		num: 122,
		name: "Mr. Mime",
		types: ["Psychic", "Fairy"],
		baseStats: { hp: 40, atk: 45, def: 65, spa: 100, spd: 120, spe: 90 },
		abilities: { 0: "Soundproof", 1: "Filter", H: "Technician" },
		heightm: 1.3,
		weightkg: 54.5,
		color: "Pink",
		prevo: "Mime Jr.",
		evoType: "levelMove",
		evoMove: "Mimic",
		eggGroups: ["Human-Like"],
		canHatch: true,
		otherFormes: ["Mr. Mime-Galar"],
		formeOrder: ["Mr. Mime", "Mr. Mime-Galar"],
	},
	mrmimegalar: {
		num: 122,
		name: "Mr. Mime-Galar",
		baseSpecies: "Mr. Mime",
		forme: "Galar",
		types: ["Ice", "Psychic"],
		baseStats: { hp: 50, atk: 65, def: 65, spa: 90, spd: 90, spe: 100 },
		abilities: { 0: "Vital Spirit", 1: "Screen Cleaner", H: "Ice Body" },
		heightm: 1.4,
		weightkg: 56.8,
		color: "White",
		prevo: "Mime Jr.",
		evoType: "levelMove",
		evoMove: "Mimic",
		evos: ["Mr. Rime"],
		eggGroups: ["Human-Like"],
		canHatch: true,
	},
	scyther: {
		num: 123,
		name: "Scyther",
		types: ["Bug", "Flying"],
		baseStats: { hp: 70, atk: 110, def: 80, spa: 55, spd: 80, spe: 105 },
		abilities: { 0: "Swarm", 1: "Technician", H: "Steadfast" },
		heightm: 1.5,
		weightkg: 56,
		color: "Green",
		evos: ["Scizor"],
		eggGroups: ["Bug"],
	},
	jynx: {
		num: 124,
		name: "Jynx",
		types: ["Ice", "Psychic"],
		gender: "F",
		baseStats: { hp: 65, atk: 50, def: 35, spa: 115, spd: 95, spe: 95 },
		abilities: { 0: "Oblivious", 1: "Forewarn", H: "Dry Skin" },
		heightm: 1.4,
		weightkg: 40.6,
		color: "Red",
		prevo: "Smoochum",
		evoLevel: 30,
		eggGroups: ["Human-Like"],
	},
	electabuzz: {
		num: 125,
		name: "Electabuzz",
		types: ["Electric"],
		genderRatio: { M: 0.75, F: 0.25 },
		baseStats: { hp: 65, atk: 83, def: 57, spa: 95, spd: 85, spe: 105 },
		abilities: { 0: "Static", H: "Vital Spirit" },
		heightm: 1.1,
		weightkg: 30,
		color: "Yellow",
		prevo: "Elekid",
		evoLevel: 30,
		evos: ["Electivire"],
		eggGroups: ["Human-Like"],
	},
	magmar: {
		num: 126,
		name: "Magmar",
		types: ["Fire"],
		genderRatio: { M: 0.75, F: 0.25 },
		baseStats: { hp: 65, atk: 95, def: 57, spa: 100, spd: 85, spe: 93 },
		abilities: { 0: "Flame Body", H: "Vital Spirit" },
		heightm: 1.3,
		weightkg: 44.5,
		color: "Red",
		prevo: "Magby",
		evoLevel: 30,
		evos: ["Magmortar"],
		eggGroups: ["Human-Like"],
	},
	pinsir: {
		num: 127,
		name: "Pinsir",
		types: ["Bug"],
		baseStats: { hp: 65, atk: 125, def: 100, spa: 55, spd: 70, spe: 85 },
		abilities: { 0: "Hyper Cutter", 1: "Mold Breaker", H: "Moxie" },
		heightm: 1.5,
		weightkg: 55,
		color: "Brown",
		eggGroups: ["Bug"],
		otherFormes: ["Pinsir-Mega"],
		formeOrder: ["Pinsir", "Pinsir-Mega"],
	},
	pinsirmega: {
		num: 127,
		name: "Pinsir-Mega",
		baseSpecies: "Pinsir",
		forme: "Mega",
		types: ["Bug", "Flying"],
		baseStats: { hp: 65, atk: 155, def: 120, spa: 65, spd: 90, spe: 105 },
		abilities: { 0: "Aerilate" },
		heightm: 1.7,
		weightkg: 59,
		color: "Brown",
		eggGroups: ["Bug"],
		requiredItem: "Pinsirite",
	},
	tauros: {
		num: 128,
		name: "Tauros",
		types: ["Normal"],
		gender: "M",
		baseStats: { hp: 75, atk: 100, def: 95, spa: 40, spd: 70, spe: 110 },
		abilities: { 0: "Intimidate", 1: "Anger Point", H: "Sheer Force" },
		heightm: 1.4,
		weightkg: 88.4,
		color: "Brown",
		eggGroups: ["Field"],
	},
	magikarp: {
		num: 129,
		name: "Magikarp",
		types: ["Water"],
		baseStats: { hp: 20, atk: 10, def: 55, spa: 15, spd: 20, spe: 80 },
		abilities: { 0: "Swift Swim", H: "Rattled" },
		heightm: 0.9,
		weightkg: 10,
		color: "Red",
		evos: ["Gyarados"],
		eggGroups: ["Water 2", "Dragon"],
	},
	gyarados: {
		num: 130,
		name: "Gyarados",
		types: ["Water", "Flying"],
		baseStats: { hp: 95, atk: 125, def: 79, spa: 60, spd: 100, spe: 81 },
		abilities: { 0: "Intimidate", H: "Moxie" },
		heightm: 6.5,
		weightkg: 235,
		color: "Blue",
		prevo: "Magikarp",
		evoLevel: 20,
		eggGroups: ["Water 2", "Dragon"],
		otherFormes: ["Gyarados-Mega"],
		formeOrder: ["Gyarados", "Gyarados-Mega"],
	},
	gyaradosmega: {
		num: 130,
		name: "Gyarados-Mega",
		baseSpecies: "Gyarados",
		forme: "Mega",
		types: ["Water", "Dark"],
		baseStats: { hp: 95, atk: 155, def: 109, spa: 70, spd: 130, spe: 81 },
		abilities: { 0: "Mold Breaker" },
		heightm: 6.5,
		weightkg: 305,
		color: "Blue",
		eggGroups: ["Water 2", "Dragon"],
		requiredItem: "Gyaradosite",
	},
	lapras: {
		num: 131,
		name: "Lapras",
		types: ["Water", "Ice"],
		baseStats: { hp: 130, atk: 85, def: 80, spa: 85, spd: 95, spe: 60 },
		abilities: { 0: "Water Absorb", 1: "Shell Armor", H: "Hydration" },
		heightm: 2.5,
		weightkg: 220,
		color: "Blue",
		eggGroups: ["Monster", "Water 1"],
		canGigantamax: "G-Max Resonance",
	},
	laprasgmax: {
		num: 131,
		name: "Lapras-Gmax",
		baseSpecies: "Lapras",
		forme: "Gmax",
		types: ["Water", "Ice"],
		baseStats: { hp: 130, atk: 85, def: 80, spa: 85, spd: 95, spe: 60 },
		abilities: { 0: "Water Absorb", 1: "Shell Armor", H: "Hydration" },
		heightm: 24,
		weightkg: 0,
		color: "Blue",
		eggGroups: ["Monster", "Water 1"],
		changesFrom: "Lapras",
	},
	ditto: {
		num: 132,
		name: "Ditto",
		types: ["Normal"],
		gender: "N",
		baseStats: { hp: 48, atk: 48, def: 48, spa: 48, spd: 48, spe: 48 },
		abilities: { 0: "Limber", H: "Imposter" },
		heightm: 0.3,
		weightkg: 4,
		color: "Purple",
		eggGroups: ["Ditto"],
	},
	eevee: {
		num: 133,
		name: "Eevee",
		types: ["Normal"],
		genderRatio: { M: 0.875, F: 0.125 },
		baseStats: { hp: 55, atk: 55, def: 50, spa: 45, spd: 65, spe: 55 },
		abilities: { 0: "Run Away", 1: "Adaptability", H: "Anticipation" },
		heightm: 0.3,
		weightkg: 6.5,
		color: "Brown",
		evos: ["Vaporeon", "Jolteon", "Flareon", "Espeon", "Umbreon", "Leafeon", "Glaceon", "Sylveon"],
		eggGroups: ["Field"],
		otherFormes: ["Eevee-Starter"],
		formeOrder: ["Eevee", "Eevee-Starter"],
		canGigantamax: "G-Max Cuddle",
	},
	eeveestarter: {
		num: 133,
		name: "Eevee-Starter",
		baseSpecies: "Eevee",
		forme: "Starter",
		types: ["Normal"],
		genderRatio: { M: 0.875, F: 0.125 },
		baseStats: { hp: 65, atk: 75, def: 70, spa: 65, spd: 85, spe: 75 },
		abilities: { 0: "Run Away", 1: "Adaptability", H: "Anticipation" },
		heightm: 0.3,
		weightkg: 6.5,
		color: "Brown",
		eggGroups: ["Undiscovered"],
	},
	eeveegmax: {
		num: 133,
		name: "Eevee-Gmax",
		baseSpecies: "Eevee",
		forme: "Gmax",
		types: ["Normal"],
		genderRatio: { M: 0.875, F: 0.125 },
		baseStats: { hp: 55, atk: 55, def: 50, spa: 45, spd: 65, spe: 55 },
		abilities: { 0: "Run Away", 1: "Adaptability", H: "Anticipation" },
		heightm: 18,
		weightkg: 0,
		color: "Brown",
		eggGroups: ["Field"],
		changesFrom: "Eevee",
	},
	vaporeon: {
		num: 134,
		name: "Vaporeon",
		types: ["Water"],
		genderRatio: { M: 0.875, F: 0.125 },
		baseStats: { hp: 130, atk: 65, def: 60, spa: 110, spd: 95, spe: 65 },
		abilities: { 0: "Water Absorb", H: "Hydration" },
		heightm: 1,
		weightkg: 29,
		color: "Blue",
		prevo: "Eevee",
		evoType: "useItem",
		evoItem: "Water Stone",
		eggGroups: ["Field"],
	},
	jolteon: {
		num: 135,
		name: "Jolteon",
		types: ["Electric"],
		genderRatio: { M: 0.875, F: 0.125 },
		baseStats: { hp: 65, atk: 65, def: 60, spa: 110, spd: 95, spe: 130 },
		abilities: { 0: "Volt Absorb", H: "Quick Feet" },
		heightm: 0.8,
		weightkg: 24.5,
		color: "Yellow",
		prevo: "Eevee",
		evoType: "useItem",
		evoItem: "Thunder Stone",
		eggGroups: ["Field"],
	},
	flareon: {
		num: 136,
		name: "Flareon",
		types: ["Fire"],
		genderRatio: { M: 0.875, F: 0.125 },
		baseStats: { hp: 65, atk: 130, def: 60, spa: 95, spd: 110, spe: 65 },
		abilities: { 0: "Flash Fire", H: "Guts" },
		heightm: 0.9,
		weightkg: 25,
		color: "Red",
		prevo: "Eevee",
		evoType: "useItem",
		evoItem: "Fire Stone",
		eggGroups: ["Field"],
	},
	porygon: {
		num: 137,
		name: "Porygon",
		types: ["Normal"],
		gender: "N",
		baseStats: { hp: 65, atk: 60, def: 70, spa: 85, spd: 75, spe: 40 },
		abilities: { 0: "Trace", 1: "Download", H: "Analytic" },
		heightm: 0.8,
		weightkg: 36.5,
		color: "Pink",
		evos: ["Porygon2"],
		eggGroups: ["Mineral"],
	},
	omanyte: {
		num: 138,
		name: "Omanyte",
		types: ["Rock", "Water"],
		genderRatio: { M: 0.875, F: 0.125 },
		baseStats: { hp: 35, atk: 40, def: 100, spa: 90, spd: 55, spe: 35 },
		abilities: { 0: "Swift Swim", 1: "Shell Armor", H: "Weak Armor" },
		heightm: 0.4,
		weightkg: 7.5,
		color: "Blue",
		evos: ["Omastar"],
		eggGroups: ["Water 1", "Water 3"],
	},
	omastar: {
		num: 139,
		name: "Omastar",
		types: ["Rock", "Water"],
		genderRatio: { M: 0.875, F: 0.125 },
		baseStats: { hp: 70, atk: 60, def: 125, spa: 115, spd: 70, spe: 55 },
		abilities: { 0: "Swift Swim", 1: "Shell Armor", H: "Weak Armor" },
		heightm: 1,
		weightkg: 35,
		color: "Blue",
		prevo: "Omanyte",
		evoLevel: 40,
		eggGroups: ["Water 1", "Water 3"],
	},
	kabuto: {
		num: 140,
		name: "Kabuto",
		types: ["Rock", "Water"],
		genderRatio: { M: 0.875, F: 0.125 },
		baseStats: { hp: 30, atk: 80, def: 90, spa: 55, spd: 45, spe: 55 },
		abilities: { 0: "Swift Swim", 1: "Battle Armor", H: "Weak Armor" },
		heightm: 0.5,
		weightkg: 11.5,
		color: "Brown",
		evos: ["Kabutops"],
		eggGroups: ["Water 1", "Water 3"],
	},
	kabutops: {
		num: 141,
		name: "Kabutops",
		types: ["Rock", "Water"],
		genderRatio: { M: 0.875, F: 0.125 },
		baseStats: { hp: 60, atk: 115, def: 105, spa: 65, spd: 70, spe: 80 },
		abilities: { 0: "Swift Swim", 1: "Battle Armor", H: "Weak Armor" },
		heightm: 1.3,
		weightkg: 40.5,
		color: "Brown",
		prevo: "Kabuto",
		evoLevel: 40,
		eggGroups: ["Water 1", "Water 3"],
	},
	aerodactyl: {
		num: 142,
		name: "Aerodactyl",
		types: ["Rock", "Flying"],
		genderRatio: { M: 0.875, F: 0.125 },
		baseStats: { hp: 80, atk: 105, def: 65, spa: 60, spd: 75, spe: 130 },
		abilities: { 0: "Rock Head", 1: "Pressure", H: "Unnerve" },
		heightm: 1.8,
		weightkg: 59,
		color: "Purple",
		eggGroups: ["Flying"],
		otherFormes: ["Aerodactyl-Mega"],
		formeOrder: ["Aerodactyl", "Aerodactyl-Mega"],
	},
	aerodactylmega: {
		num: 142,
		name: "Aerodactyl-Mega",
		baseSpecies: "Aerodactyl",
		forme: "Mega",
		types: ["Rock", "Flying"],
		genderRatio: { M: 0.875, F: 0.125 },
		baseStats: { hp: 80, atk: 135, def: 85, spa: 70, spd: 95, spe: 150 },
		abilities: { 0: "Tough Claws" },
		heightm: 2.1,
		weightkg: 79,
		color: "Purple",
		eggGroups: ["Flying"],
		requiredItem: "Aerodactylite",
	},
	snorlax: {
		num: 143,
		name: "Snorlax",
		types: ["Normal"],
		genderRatio: { M: 0.875, F: 0.125 },
		baseStats: { hp: 160, atk: 110, def: 65, spa: 65, spd: 110, spe: 30 },
		abilities: { 0: "Immunity", 1: "Thick Fat", H: "Gluttony" },
		heightm: 2.1,
		weightkg: 460,
		color: "Black",
		prevo: "Munchlax",
		evoType: "levelFriendship",
		eggGroups: ["Monster"],
		canHatch: true,
		canGigantamax: "G-Max Replenish",
	},
	snorlaxgmax: {
		num: 143,
		name: "Snorlax-Gmax",
		baseSpecies: "Snorlax",
		forme: "Gmax",
		types: ["Normal"],
		genderRatio: { M: 0.875, F: 0.125 },
		baseStats: { hp: 160, atk: 110, def: 65, spa: 65, spd: 110, spe: 30 },
		abilities: { 0: "Immunity", 1: "Thick Fat", H: "Gluttony" },
		heightm: 35,
		weightkg: 0,
		color: "Black",
		eggGroups: ["Monster"],
		changesFrom: "Snorlax",
	},
	articuno: {
		num: 144,
		name: "Articuno",
		types: ["Ice", "Flying"],
		gender: "N",
		baseStats: { hp: 90, atk: 85, def: 100, spa: 95, spd: 125, spe: 85 },
		abilities: { 0: "Pressure", H: "Snow Cloak" },
		heightm: 1.7,
		weightkg: 55.4,
		color: "Blue",
		eggGroups: ["Undiscovered"],
		otherFormes: ["Articuno-Galar"],
		formeOrder: ["Articuno", "Articuno-Galar"],
	},
	articunogalar: {
		num: 144,
		name: "Articuno-Galar",
		baseSpecies: "Articuno",
		forme: "Galar",
		types: ["Psychic", "Flying"],
		gender: "N",
		baseStats: { hp: 90, atk: 85, def: 85, spa: 125, spd: 100, spe: 95 },
		abilities: { 0: "Competitive" },
		heightm: 1.7,
		weightkg: 50.9,
		color: "Purple",
		eggGroups: ["Undiscovered"],
	},
	zapdos: {
		num: 145,
		name: "Zapdos",
		types: ["Electric", "Flying"],
		gender: "N",
		baseStats: { hp: 90, atk: 90, def: 85, spa: 125, spd: 90, spe: 100 },
		abilities: { 0: "Pressure", H: "Static" },
		heightm: 1.6,
		weightkg: 52.6,
		color: "Yellow",
		eggGroups: ["Undiscovered"],
		otherFormes: ["Zapdos-Galar"],
		formeOrder: ["Zapdos", "Zapdos-Galar"],
	},
	zapdosgalar: {
		num: 145,
		name: "Zapdos-Galar",
		baseSpecies: "Zapdos",
		forme: "Galar",
		types: ["Fighting", "Flying"],
		gender: "N",
		baseStats: { hp: 90, atk: 125, def: 90, spa: 85, spd: 90, spe: 100 },
		abilities: { 0: "Defiant" },
		heightm: 1.6,
		weightkg: 58.2,
		color: "Yellow",
		eggGroups: ["Undiscovered"],
	},
	moltres: {
		num: 146,
		name: "Moltres",
		types: ["Fire", "Flying"],
		gender: "N",
		baseStats: { hp: 90, atk: 100, def: 90, spa: 125, spd: 85, spe: 90 },
		abilities: { 0: "Pressure", H: "Flame Body" },
		heightm: 2,
		weightkg: 60,
		color: "Yellow",
		eggGroups: ["Undiscovered"],
		otherFormes: ["Moltres-Galar"],
		formeOrder: ["Moltres", "Moltres-Galar"],
	},
	moltresgalar: {
		num: 146,
		name: "Moltres-Galar",
		baseSpecies: "Moltres",
		forme: "Galar",
		types: ["Dark", "Flying"],
		gender: "N",
		baseStats: { hp: 90, atk: 85, def: 90, spa: 100, spd: 125, spe: 90 },
		abilities: { 0: "Berserk" },
		heightm: 2,
		weightkg: 66,
		color: "Red",
		eggGroups: ["Undiscovered"],
	},
	dratini: {
		num: 147,
		name: "Dratini",
		types: ["Dragon"],
		baseStats: { hp: 41, atk: 64, def: 45, spa: 50, spd: 50, spe: 50 },
		abilities: { 0: "Shed Skin", H: "Marvel Scale" },
		heightm: 1.8,
		weightkg: 3.3,
		color: "Blue",
		evos: ["Dragonair"],
		eggGroups: ["Water 1", "Dragon"],
	},
	dragonair: {
		num: 148,
		name: "Dragonair",
		types: ["Dragon"],
		baseStats: { hp: 61, atk: 84, def: 65, spa: 70, spd: 70, spe: 70 },
		abilities: { 0: "Shed Skin", H: "Marvel Scale" },
		heightm: 4,
		weightkg: 16.5,
		color: "Blue",
		prevo: "Dratini",
		evoLevel: 30,
		evos: ["Dragonite"],
		eggGroups: ["Water 1", "Dragon"],
	},
	dragonite: {
		num: 149,
		name: "Dragonite",
		types: ["Dragon", "Flying"],
		baseStats: { hp: 91, atk: 134, def: 95, spa: 100, spd: 100, spe: 80 },
		abilities: { 0: "Inner Focus", H: "Multiscale" },
		heightm: 2.2,
		weightkg: 210,
		color: "Brown",
		prevo: "Dragonair",
		evoLevel: 55,
		eggGroups: ["Water 1", "Dragon"],
	},
	mewtwo: {
		num: 150,
		name: "Mewtwo",
		types: ["Psychic"],
		gender: "N",
		baseStats: { hp: 106, atk: 110, def: 90, spa: 154, spd: 90, spe: 130 },
		abilities: { 0: "Pressure", H: "Unnerve" },
		heightm: 2,
		weightkg: 122,
		color: "Purple",
		eggGroups: ["Undiscovered"],
		otherFormes: ["Mewtwo-Mega-X", "Mewtwo-Mega-Y"],
		formeOrder: ["Mewtwo", "Mewtwo-Mega-X", "Mewtwo-Mega-Y"],
	},
	mewtwomegax: {
		num: 150,
		name: "Mewtwo-Mega-X",
		baseSpecies: "Mewtwo",
		forme: "Mega-X",
		types: ["Psychic", "Fighting"],
		gender: "N",
		baseStats: { hp: 106, atk: 190, def: 100, spa: 154, spd: 100, spe: 130 },
		abilities: { 0: "Steadfast" },
		heightm: 2.3,
		weightkg: 127,
		color: "Purple",
		eggGroups: ["Undiscovered"],
		requiredItem: "Mewtwonite X",
	},
	mewtwomegay: {
		num: 150,
		name: "Mewtwo-Mega-Y",
		baseSpecies: "Mewtwo",
		forme: "Mega-Y",
		types: ["Psychic"],
		gender: "N",
		baseStats: { hp: 106, atk: 150, def: 70, spa: 194, spd: 120, spe: 140 },
		abilities: { 0: "Insomnia" },
		heightm: 1.5,
		weightkg: 33,
		color: "Purple",
		eggGroups: ["Undiscovered"],
		requiredItem: "Mewtwonite Y",
	},
	mew: {
		num: 151,
		name: "Mew",
		types: ["Psychic"],
		gender: "N",
		baseStats: { hp: 100, atk: 100, def: 100, spa: 100, spd: 100, spe: 100 },
		abilities: { 0: "Synchronize" },
		heightm: 0.4,
		weightkg: 4,
		color: "Pink",
		eggGroups: ["Undiscovered"],
	},
	chikorita: {
		num: 152,
		name: "Chikorita",
		types: ["Grass"],
		genderRatio: { M: 0.875, F: 0.125 },
		baseStats: { hp: 45, atk: 49, def: 65, spa: 49, spd: 65, spe: 45 },
		abilities: { 0: "Overgrow", H: "Leaf Guard" },
		heightm: 0.9,
		weightkg: 6.4,
		color: "Green",
		evos: ["Bayleef"],
		eggGroups: ["Monster", "Grass"],
	},
	bayleef: {
		num: 153,
		name: "Bayleef",
		types: ["Grass"],
		genderRatio: { M: 0.875, F: 0.125 },
		baseStats: { hp: 60, atk: 62, def: 80, spa: 63, spd: 80, spe: 60 },
		abilities: { 0: "Overgrow", H: "Leaf Guard" },
		heightm: 1.2,
		weightkg: 15.8,
		color: "Green",
		prevo: "Chikorita",
		evoLevel: 16,
		evos: ["Meganium"],
		eggGroups: ["Monster", "Grass"],
	},
	meganium: {
		num: 154,
		name: "Meganium",
		types: ["Grass"],
		genderRatio: { M: 0.875, F: 0.125 },
		baseStats: { hp: 80, atk: 82, def: 100, spa: 83, spd: 100, spe: 80 },
		abilities: { 0: "Overgrow", H: "Leaf Guard" },
		heightm: 1.8,
		weightkg: 100.5,
		color: "Green",
		prevo: "Bayleef",
		evoLevel: 32,
		eggGroups: ["Monster", "Grass"],
	},
	cyndaquil: {
		num: 155,
		name: "Cyndaquil",
		types: ["Fire"],
		genderRatio: { M: 0.875, F: 0.125 },
		baseStats: { hp: 39, atk: 52, def: 43, spa: 60, spd: 50, spe: 65 },
		abilities: { 0: "Blaze", H: "Flash Fire" },
		heightm: 0.5,
		weightkg: 7.9,
		color: "Yellow",
		evos: ["Quilava"],
		eggGroups: ["Field"],
	},
	quilava: {
		num: 156,
		name: "Quilava",
		types: ["Fire"],
		genderRatio: { M: 0.875, F: 0.125 },
		baseStats: { hp: 58, atk: 64, def: 58, spa: 80, spd: 65, spe: 80 },
		abilities: { 0: "Blaze", H: "Flash Fire" },
		heightm: 0.9,
		weightkg: 19,
		color: "Yellow",
		prevo: "Cyndaquil",
		evoLevel: 14,
		evos: ["Typhlosion"],
		eggGroups: ["Field"],
	},
	typhlosion: {
		num: 157,
		name: "Typhlosion",
		types: ["Fire"],
		genderRatio: { M: 0.875, F: 0.125 },
		baseStats: { hp: 78, atk: 84, def: 78, spa: 109, spd: 85, spe: 100 },
		abilities: { 0: "Blaze", H: "Flash Fire" },
		heightm: 1.7,
		weightkg: 79.5,
		color: "Yellow",
		prevo: "Quilava",
		evoLevel: 36,
		eggGroups: ["Field"],
	},
	totodile: {
		num: 158,
		name: "Totodile",
		types: ["Water"],
		genderRatio: { M: 0.875, F: 0.125 },
		baseStats: { hp: 50, atk: 65, def: 64, spa: 44, spd: 48, spe: 43 },
		abilities: { 0: "Torrent", H: "Sheer Force" },
		heightm: 0.6,
		weightkg: 9.5,
		color: "Blue",
		evos: ["Croconaw"],
		eggGroups: ["Monster", "Water 1"],
	},
	croconaw: {
		num: 159,
		name: "Croconaw",
		types: ["Water"],
		genderRatio: { M: 0.875, F: 0.125 },
		baseStats: { hp: 65, atk: 80, def: 80, spa: 59, spd: 63, spe: 58 },
		abilities: { 0: "Torrent", H: "Sheer Force" },
		heightm: 1.1,
		weightkg: 25,
		color: "Blue",
		prevo: "Totodile",
		evoLevel: 18,
		evos: ["Feraligatr"],
		eggGroups: ["Monster", "Water 1"],
	},
	feraligatr: {
		num: 160,
		name: "Feraligatr",
		types: ["Water"],
		genderRatio: { M: 0.875, F: 0.125 },
		baseStats: { hp: 85, atk: 105, def: 100, spa: 79, spd: 83, spe: 78 },
		abilities: { 0: "Torrent", H: "Sheer Force" },
		heightm: 2.3,
		weightkg: 88.8,
		color: "Blue",
		prevo: "Croconaw",
		evoLevel: 30,
		eggGroups: ["Monster", "Water 1"],
	},
	sentret: {
		num: 161,
		name: "Sentret",
		types: ["Normal"],
		baseStats: { hp: 35, atk: 46, def: 34, spa: 35, spd: 45, spe: 20 },
		abilities: { 0: "Run Away", 1: "Keen Eye", H: "Frisk" },
		heightm: 0.8,
		weightkg: 6,
		color: "Brown",
		evos: ["Furret"],
		eggGroups: ["Field"],
	},
	furret: {
		num: 162,
		name: "Furret",
		types: ["Normal"],
		baseStats: { hp: 85, atk: 76, def: 64, spa: 45, spd: 55, spe: 90 },
		abilities: { 0: "Run Away", 1: "Keen Eye", H: "Frisk" },
		heightm: 1.8,
		weightkg: 32.5,
		color: "Brown",
		prevo: "Sentret",
		evoLevel: 15,
		eggGroups: ["Field"],
	},
	hoothoot: {
		num: 163,
		name: "Hoothoot",
		types: ["Normal", "Flying"],
		baseStats: { hp: 60, atk: 30, def: 30, spa: 36, spd: 56, spe: 50 },
		abilities: { 0: "Insomnia", 1: "Keen Eye", H: "Tinted Lens" },
		heightm: 0.7,
		weightkg: 21.2,
		color: "Brown",
		evos: ["Noctowl"],
		eggGroups: ["Flying"],
	},
	noctowl: {
		num: 164,
		name: "Noctowl",
		types: ["Normal", "Flying"],
		baseStats: { hp: 100, atk: 50, def: 50, spa: 86, spd: 96, spe: 70 },
		abilities: { 0: "Insomnia", 1: "Keen Eye", H: "Tinted Lens" },
		heightm: 1.6,
		weightkg: 40.8,
		color: "Brown",
		prevo: "Hoothoot",
		evoLevel: 20,
		eggGroups: ["Flying"],
	},
	ledyba: {
		num: 165,
		name: "Ledyba",
		types: ["Bug", "Flying"],
		baseStats: { hp: 40, atk: 20, def: 30, spa: 40, spd: 80, spe: 55 },
		abilities: { 0: "Swarm", 1: "Early Bird", H: "Rattled" },
		heightm: 1,
		weightkg: 10.8,
		color: "Red",
		evos: ["Ledian"],
		eggGroups: ["Bug"],
	},
	ledian: {
		num: 166,
		name: "Ledian",
		types: ["Bug", "Flying"],
		baseStats: { hp: 55, atk: 35, def: 50, spa: 55, spd: 110, spe: 85 },
		abilities: { 0: "Swarm", 1: "Early Bird", H: "Iron Fist" },
		heightm: 1.4,
		weightkg: 35.6,
		color: "Red",
		prevo: "Ledyba",
		evoLevel: 18,
		eggGroups: ["Bug"],
	},
	spinarak: {
		num: 167,
		name: "Spinarak",
		types: ["Bug", "Poison"],
		baseStats: { hp: 40, atk: 60, def: 40, spa: 40, spd: 40, spe: 30 },
		abilities: { 0: "Swarm", 1: "Insomnia", H: "Sniper" },
		heightm: 0.5,
		weightkg: 8.5,
		color: "Green",
		evos: ["Ariados"],
		eggGroups: ["Bug"],
	},
	ariados: {
		num: 168,
		name: "Ariados",
		types: ["Bug", "Poison"],
		baseStats: { hp: 70, atk: 90, def: 70, spa: 60, spd: 70, spe: 40 },
		abilities: { 0: "Swarm", 1: "Insomnia", H: "Sniper" },
		heightm: 1.1,
		weightkg: 33.5,
		color: "Red",
		prevo: "Spinarak",
		evoLevel: 22,
		eggGroups: ["Bug"],
	},
	crobat: {
		num: 169,
		name: "Crobat",
		types: ["Poison", "Flying"],
		baseStats: { hp: 85, atk: 90, def: 80, spa: 70, spd: 80, spe: 130 },
		abilities: { 0: "Inner Focus", H: "Infiltrator" },
		heightm: 1.8,
		weightkg: 75,
		color: "Purple",
		prevo: "Golbat",
		evoType: "levelFriendship",
		eggGroups: ["Flying"],
	},
	chinchou: {
		num: 170,
		name: "Chinchou",
		types: ["Water", "Electric"],
		baseStats: { hp: 75, atk: 38, def: 38, spa: 56, spd: 56, spe: 67 },
		abilities: { 0: "Volt Absorb", 1: "Illuminate", H: "Water Absorb" },
		heightm: 0.5,
		weightkg: 12,
		color: "Blue",
		evos: ["Lanturn"],
		eggGroups: ["Water 2"],
	},
	lanturn: {
		num: 171,
		name: "Lanturn",
		types: ["Water", "Electric"],
		baseStats: { hp: 125, atk: 58, def: 58, spa: 76, spd: 76, spe: 67 },
		abilities: { 0: "Volt Absorb", 1: "Illuminate", H: "Water Absorb" },
		heightm: 1.2,
		weightkg: 22.5,
		color: "Blue",
		prevo: "Chinchou",
		evoLevel: 27,
		eggGroups: ["Water 2"],
	},
	pichu: {
		num: 172,
		name: "Pichu",
		types: ["Electric"],
		baseStats: { hp: 20, atk: 40, def: 15, spa: 35, spd: 35, spe: 60 },
		abilities: { 0: "Static", H: "Lightning Rod" },
		heightm: 0.3,
		weightkg: 2,
		color: "Yellow",
		evos: ["Pikachu"],
		eggGroups: ["Undiscovered"],
		canHatch: true,
		otherFormes: ["Pichu-Spiky-eared"],
		formeOrder: ["Pichu", "Pichu-Spiky-eared"],
	},
	pichuspikyeared: {
		num: 172,
		name: "Pichu-Spiky-eared",
		baseSpecies: "Pichu",
		forme: "Spiky-eared",
		types: ["Electric"],
		baseStats: { hp: 20, atk: 40, def: 15, spa: 35, spd: 35, spe: 60 },
		abilities: { 0: "Static" },
		heightm: 0.3,
		weightkg: 2,
		color: "Yellow",
		eggGroups: ["Undiscovered"],
		gen: 4,
	},
	cleffa: {
		num: 173,
		name: "Cleffa",
		types: ["Fairy"],
		genderRatio: { M: 0.25, F: 0.75 },
		baseStats: { hp: 50, atk: 25, def: 28, spa: 45, spd: 55, spe: 15 },
		abilities: { 0: "Cute Charm", 1: "Magic Guard", H: "Friend Guard" },
		heightm: 0.3,
		weightkg: 3,
		color: "Pink",
		evos: ["Clefairy"],
		eggGroups: ["Undiscovered"],
		canHatch: true,
	},
	igglybuff: {
		num: 174,
		name: "Igglybuff",
		types: ["Normal", "Fairy"],
		genderRatio: { M: 0.25, F: 0.75 },
		baseStats: { hp: 90, atk: 30, def: 15, spa: 40, spd: 20, spe: 15 },
		abilities: { 0: "Cute Charm", 1: "Competitive", H: "Friend Guard" },
		heightm: 0.3,
		weightkg: 1,
		color: "Pink",
		evos: ["Jigglypuff"],
		eggGroups: ["Undiscovered"],
		canHatch: true,
	},
	togepi: {
		num: 175,
		name: "Togepi",
		types: ["Fairy"],
		genderRatio: { M: 0.875, F: 0.125 },
		baseStats: { hp: 35, atk: 20, def: 65, spa: 40, spd: 65, spe: 20 },
		abilities: { 0: "Hustle", 1: "Serene Grace", H: "Super Luck" },
		heightm: 0.3,
		weightkg: 1.5,
		color: "White",
		evos: ["Togetic"],
		eggGroups: ["Undiscovered"],
		canHatch: true,
	},
	togetic: {
		num: 176,
		name: "Togetic",
		types: ["Fairy", "Flying"],
		genderRatio: { M: 0.875, F: 0.125 },
		baseStats: { hp: 55, atk: 40, def: 85, spa: 80, spd: 105, spe: 40 },
		abilities: { 0: "Hustle", 1: "Serene Grace", H: "Super Luck" },
		heightm: 0.6,
		weightkg: 3.2,
		color: "White",
		prevo: "Togepi",
		evoType: "levelFriendship",
		evos: ["Togekiss"],
		eggGroups: ["Flying", "Fairy"],
	},
	natu: {
		num: 177,
		name: "Natu",
		types: ["Psychic", "Flying"],
		baseStats: { hp: 40, atk: 50, def: 45, spa: 70, spd: 45, spe: 70 },
		abilities: { 0: "Synchronize", 1: "Early Bird", H: "Magic Bounce" },
		heightm: 0.2,
		weightkg: 2,
		color: "Green",
		evos: ["Xatu"],
		eggGroups: ["Flying"],
	},
	xatu: {
		num: 178,
		name: "Xatu",
		types: ["Psychic", "Flying"],
		baseStats: { hp: 65, atk: 75, def: 70, spa: 95, spd: 70, spe: 95 },
		abilities: { 0: "Synchronize", 1: "Early Bird", H: "Magic Bounce" },
		heightm: 1.5,
		weightkg: 15,
		color: "Green",
		prevo: "Natu",
		evoLevel: 25,
		eggGroups: ["Flying"],
	},
	mareep: {
		num: 179,
		name: "Mareep",
		types: ["Electric"],
		baseStats: { hp: 55, atk: 40, def: 40, spa: 65, spd: 45, spe: 35 },
		abilities: { 0: "Static", H: "Plus" },
		heightm: 0.6,
		weightkg: 7.8,
		color: "White",
		evos: ["Flaaffy"],
		eggGroups: ["Monster", "Field"],
	},
	flaaffy: {
		num: 180,
		name: "Flaaffy",
		types: ["Electric"],
		baseStats: { hp: 70, atk: 55, def: 55, spa: 80, spd: 60, spe: 45 },
		abilities: { 0: "Static", H: "Plus" },
		heightm: 0.8,
		weightkg: 13.3,
		color: "Pink",
		prevo: "Mareep",
		evoLevel: 15,
		evos: ["Ampharos"],
		eggGroups: ["Monster", "Field"],
	},
	ampharos: {
		num: 181,
		name: "Ampharos",
		types: ["Electric"],
		baseStats: { hp: 90, atk: 75, def: 85, spa: 115, spd: 90, spe: 55 },
		abilities: { 0: "Static", H: "Plus" },
		heightm: 1.4,
		weightkg: 61.5,
		color: "Yellow",
		prevo: "Flaaffy",
		evoLevel: 30,
		eggGroups: ["Monster", "Field"],
		otherFormes: ["Ampharos-Mega"],
		formeOrder: ["Ampharos", "Ampharos-Mega"],
	},
	ampharosmega: {
		num: 181,
		name: "Ampharos-Mega",
		baseSpecies: "Ampharos",
		forme: "Mega",
		types: ["Electric", "Dragon"],
		baseStats: { hp: 90, atk: 95, def: 105, spa: 165, spd: 110, spe: 45 },
		abilities: { 0: "Mold Breaker" },
		heightm: 1.4,
		weightkg: 61.5,
		color: "Yellow",
		eggGroups: ["Monster", "Field"],
		requiredItem: "Ampharosite",
	},
	bellossom: {
		num: 182,
		name: "Bellossom",
		types: ["Grass"],
		baseStats: { hp: 75, atk: 80, def: 95, spa: 90, spd: 100, spe: 50 },
		abilities: { 0: "Chlorophyll", H: "Healer" },
		heightm: 0.4,
		weightkg: 5.8,
		color: "Green",
		prevo: "Gloom",
		evoType: "useItem",
		evoItem: "Sun Stone",
		eggGroups: ["Grass"],
	},
	marill: {
		num: 183,
		name: "Marill",
		types: ["Water", "Fairy"],
		baseStats: { hp: 70, atk: 20, def: 50, spa: 20, spd: 50, spe: 40 },
		abilities: { 0: "Thick Fat", 1: "Huge Power", H: "Sap Sipper" },
		heightm: 0.4,
		weightkg: 8.5,
		color: "Blue",
		prevo: "Azurill",
		evoType: "levelFriendship",
		evos: ["Azumarill"],
		eggGroups: ["Water 1", "Fairy"],
		canHatch: true,
	},
	azumarill: {
		num: 184,
		name: "Azumarill",
		types: ["Water", "Fairy"],
		baseStats: { hp: 100, atk: 50, def: 80, spa: 60, spd: 80, spe: 50 },
		abilities: { 0: "Thick Fat", 1: "Huge Power", H: "Sap Sipper" },
		heightm: 0.8,
		weightkg: 28.5,
		color: "Blue",
		prevo: "Marill",
		evoLevel: 18,
		eggGroups: ["Water 1", "Fairy"],
	},
	sudowoodo: {
		num: 185,
		name: "Sudowoodo",
		types: ["Rock"],
		baseStats: { hp: 70, atk: 100, def: 115, spa: 30, spd: 65, spe: 30 },
		abilities: { 0: "Sturdy", 1: "Rock Head", H: "Rattled" },
		heightm: 1.2,
		weightkg: 38,
		color: "Brown",
		prevo: "Bonsly",
		evoType: "levelMove",
		evoMove: "Mimic",
		eggGroups: ["Mineral"],
		canHatch: true,
	},
	politoed: {
		num: 186,
		name: "Politoed",
		types: ["Water"],
		baseStats: { hp: 90, atk: 75, def: 75, spa: 90, spd: 100, spe: 70 },
		abilities: { 0: "Water Absorb", 1: "Damp", H: "Drizzle" },
		heightm: 1.1,
		weightkg: 33.9,
		color: "Green",
		prevo: "Poliwhirl",
		evoType: "trade",
		evoItem: "King's Rock",
		eggGroups: ["Water 1"],
	},
	hoppip: {
		num: 187,
		name: "Hoppip",
		types: ["Grass", "Flying"],
		baseStats: { hp: 35, atk: 35, def: 40, spa: 35, spd: 55, spe: 50 },
		abilities: { 0: "Chlorophyll", 1: "Leaf Guard", H: "Infiltrator" },
		heightm: 0.4,
		weightkg: 0.5,
		color: "Pink",
		evos: ["Skiploom"],
		eggGroups: ["Fairy", "Grass"],
	},
	skiploom: {
		num: 188,
		name: "Skiploom",
		types: ["Grass", "Flying"],
		baseStats: { hp: 55, atk: 45, def: 50, spa: 45, spd: 65, spe: 80 },
		abilities: { 0: "Chlorophyll", 1: "Leaf Guard", H: "Infiltrator" },
		heightm: 0.6,
		weightkg: 1,
		color: "Green",
		prevo: "Hoppip",
		evoLevel: 18,
		evos: ["Jumpluff"],
		eggGroups: ["Fairy", "Grass"],
	},
	jumpluff: {
		num: 189,
		name: "Jumpluff",
		types: ["Grass", "Flying"],
		baseStats: { hp: 75, atk: 55, def: 70, spa: 55, spd: 95, spe: 110 },
		abilities: { 0: "Chlorophyll", 1: "Leaf Guard", H: "Infiltrator" },
		heightm: 0.8,
		weightkg: 3,
		color: "Blue",
		prevo: "Skiploom",
		evoLevel: 27,
		eggGroups: ["Fairy", "Grass"],
	},
	aipom: {
		num: 190,
		name: "Aipom",
		types: ["Normal"],
		baseStats: { hp: 55, atk: 70, def: 55, spa: 40, spd: 55, spe: 85 },
		abilities: { 0: "Run Away", 1: "Pickup", H: "Skill Link" },
		heightm: 0.8,
		weightkg: 11.5,
		color: "Purple",
		evos: ["Ambipom"],
		eggGroups: ["Field"],
	},
	sunkern: {
		num: 191,
		name: "Sunkern",
		types: ["Grass"],
		baseStats: { hp: 30, atk: 30, def: 30, spa: 30, spd: 30, spe: 30 },
		abilities: { 0: "Chlorophyll", 1: "Solar Power", H: "Early Bird" },
		heightm: 0.3,
		weightkg: 1.8,
		color: "Yellow",
		evos: ["Sunflora"],
		eggGroups: ["Grass"],
	},
	sunflora: {
		num: 192,
		name: "Sunflora",
		types: ["Grass"],
		baseStats: { hp: 75, atk: 75, def: 55, spa: 105, spd: 85, spe: 30 },
		abilities: { 0: "Chlorophyll", 1: "Solar Power", H: "Early Bird" },
		heightm: 0.8,
		weightkg: 8.5,
		color: "Yellow",
		prevo: "Sunkern",
		evoType: "useItem",
		evoItem: "Sun Stone",
		eggGroups: ["Grass"],
	},
	yanma: {
		num: 193,
		name: "Yanma",
		types: ["Bug", "Flying"],
		baseStats: { hp: 65, atk: 65, def: 45, spa: 75, spd: 45, spe: 95 },
		abilities: { 0: "Speed Boost", 1: "Compound Eyes", H: "Frisk" },
		heightm: 1.2,
		weightkg: 38,
		color: "Red",
		evos: ["Yanmega"],
		eggGroups: ["Bug"],
	},
	wooper: {
		num: 194,
		name: "Wooper",
		types: ["Water", "Ground"],
		baseStats: { hp: 55, atk: 45, def: 45, spa: 25, spd: 25, spe: 15 },
		abilities: { 0: "Damp", 1: "Water Absorb", H: "Unaware" },
		heightm: 0.4,
		weightkg: 8.5,
		color: "Blue",
		evos: ["Quagsire"],
		eggGroups: ["Water 1", "Field"],
	},
	quagsire: {
		num: 195,
		name: "Quagsire",
		types: ["Water", "Ground"],
		baseStats: { hp: 95, atk: 85, def: 85, spa: 65, spd: 65, spe: 35 },
		abilities: { 0: "Damp", 1: "Water Absorb", H: "Unaware" },
		heightm: 1.4,
		weightkg: 75,
		color: "Blue",
		prevo: "Wooper",
		evoLevel: 20,
		eggGroups: ["Water 1", "Field"],
	},
	espeon: {
		num: 196,
		name: "Espeon",
		types: ["Psychic"],
		genderRatio: { M: 0.875, F: 0.125 },
		baseStats: { hp: 65, atk: 65, def: 60, spa: 130, spd: 95, spe: 110 },
		abilities: { 0: "Synchronize", H: "Magic Bounce" },
		heightm: 0.9,
		weightkg: 26.5,
		color: "Purple",
		prevo: "Eevee",
		evoType: "levelFriendship",
		evoCondition: "during the day",
		eggGroups: ["Field"],
	},
	umbreon: {
		num: 197,
		name: "Umbreon",
		types: ["Dark"],
		genderRatio: { M: 0.875, F: 0.125 },
		baseStats: { hp: 95, atk: 65, def: 110, spa: 60, spd: 130, spe: 65 },
		abilities: { 0: "Synchronize", H: "Inner Focus" },
		heightm: 1,
		weightkg: 27,
		color: "Black",
		prevo: "Eevee",
		evoType: "levelFriendship",
		evoCondition: "at night",
		eggGroups: ["Field"],
	},
	murkrow: {
		num: 198,
		name: "Murkrow",
		types: ["Dark", "Flying"],
		baseStats: { hp: 60, atk: 85, def: 42, spa: 85, spd: 42, spe: 91 },
		abilities: { 0: "Insomnia", 1: "Super Luck", H: "Prankster" },
		heightm: 0.5,
		weightkg: 2.1,
		color: "Black",
		evos: ["Honchkrow"],
		eggGroups: ["Flying"],
	},
	slowking: {
		num: 199,
		name: "Slowking",
		types: ["Water", "Psychic"],
		baseStats: { hp: 95, atk: 75, def: 80, spa: 100, spd: 110, spe: 30 },
		abilities: { 0: "Oblivious", 1: "Own Tempo", H: "Regenerator" },
		heightm: 2,
		weightkg: 79.5,
		color: "Pink",
		prevo: "Slowpoke",
		evoType: "trade",
		evoItem: "King's Rock",
		eggGroups: ["Monster", "Water 1"],
		otherFormes: ["Slowking-Galar"],
		formeOrder: ["Slowking", "Slowking-Galar"],
	},
	slowkinggalar: {
		num: 199,
		name: "Slowking-Galar",
		baseSpecies: "Slowking",
		forme: "Galar",
		types: ["Poison", "Psychic"],
		baseStats: { hp: 95, atk: 65, def: 80, spa: 110, spd: 110, spe: 30 },
		abilities: { 0: "Curious Medicine", 1: "Own Tempo", H: "Regenerator" },
		heightm: 1.8,
		weightkg: 79.5,
		color: "Pink",
		prevo: "Slowpoke-Galar",
		evoType: "useItem",
		evoItem: "Galarica Wreath",
		eggGroups: ["Monster", "Water 1"],
	},
	misdreavus: {
		num: 200,
		name: "Misdreavus",
		types: ["Ghost"],
		baseStats: { hp: 60, atk: 60, def: 60, spa: 85, spd: 85, spe: 85 },
		abilities: { 0: "Levitate" },
		heightm: 0.7,
		weightkg: 1,
		color: "Gray",
		evos: ["Mismagius"],
		eggGroups: ["Amorphous"],
	},
	unown: {
		num: 201,
		name: "Unown",
		baseForme: "A",
		types: ["Psychic"],
		gender: "N",
		baseStats: { hp: 48, atk: 72, def: 48, spa: 72, spd: 48, spe: 48 },
		abilities: { 0: "Levitate" },
		heightm: 0.5,
		weightkg: 5,
		color: "Black",
		eggGroups: ["Undiscovered"],
		cosmeticFormes: ["Unown-B", "Unown-C", "Unown-D", "Unown-E", "Unown-F", "Unown-G", "Unown-H", "Unown-I", "Unown-J", "Unown-K", "Unown-L", "Unown-M", "Unown-N", "Unown-O", "Unown-P", "Unown-Q", "Unown-R", "Unown-S", "Unown-T", "Unown-U", "Unown-V", "Unown-W", "Unown-X", "Unown-Y", "Unown-Z", "Unown-Exclamation", "Unown-Question"],
		formeOrder: ["Unown", "Unown-B", "Unown-C", "Unown-D", "Unown-E", "Unown-F", "Unown-G", "Unown-H", "Unown-I", "Unown-J", "Unown-K", "Unown-L", "Unown-M", "Unown-N", "Unown-O", "Unown-P", "Unown-Q", "Unown-R", "Unown-S", "Unown-T", "Unown-U", "Unown-V", "Unown-W", "Unown-X", "Unown-Y", "Unown-Z", "Unown-Exclamation", "Unown-Question"],
	},
	wobbuffet: {
		num: 202,
		name: "Wobbuffet",
		types: ["Psychic"],
		baseStats: { hp: 190, atk: 33, def: 58, spa: 33, spd: 58, spe: 33 },
		abilities: { 0: "Shadow Tag", H: "Telepathy" },
		heightm: 1.3,
		weightkg: 28.5,
		color: "Blue",
		prevo: "Wynaut",
		evoLevel: 15,
		eggGroups: ["Amorphous"],
		canHatch: true,
	},
	girafarig: {
		num: 203,
		name: "Girafarig",
		types: ["Normal", "Psychic"],
		baseStats: { hp: 70, atk: 80, def: 65, spa: 90, spd: 65, spe: 85 },
		abilities: { 0: "Inner Focus", 1: "Early Bird", H: "Sap Sipper" },
		heightm: 1.5,
		weightkg: 41.5,
		color: "Yellow",
		eggGroups: ["Field"],
	},
	pineco: {
		num: 204,
		name: "Pineco",
		types: ["Bug"],
		baseStats: { hp: 50, atk: 65, def: 90, spa: 35, spd: 35, spe: 15 },
		abilities: { 0: "Sturdy", H: "Overcoat" },
		heightm: 0.6,
		weightkg: 7.2,
		color: "Gray",
		evos: ["Forretress"],
		eggGroups: ["Bug"],
	},
	forretress: {
		num: 205,
		name: "Forretress",
		types: ["Bug", "Steel"],
		baseStats: { hp: 75, atk: 90, def: 140, spa: 60, spd: 60, spe: 40 },
		abilities: { 0: "Sturdy", H: "Overcoat" },
		heightm: 1.2,
		weightkg: 125.8,
		color: "Purple",
		prevo: "Pineco",
		evoLevel: 31,
		eggGroups: ["Bug"],
	},
	dunsparce: {
		num: 206,
		name: "Dunsparce",
		types: ["Normal"],
		baseStats: { hp: 100, atk: 70, def: 70, spa: 65, spd: 65, spe: 45 },
		abilities: { 0: "Serene Grace", 1: "Run Away", H: "Rattled" },
		heightm: 1.5,
		weightkg: 14,
		color: "Yellow",
		eggGroups: ["Field"],
	},
	gligar: {
		num: 207,
		name: "Gligar",
		types: ["Ground", "Flying"],
		baseStats: { hp: 65, atk: 75, def: 105, spa: 35, spd: 65, spe: 85 },
		abilities: { 0: "Hyper Cutter", 1: "Sand Veil", H: "Immunity" },
		heightm: 1.1,
		weightkg: 64.8,
		color: "Purple",
		evos: ["Gliscor"],
		eggGroups: ["Bug"],
	},
	steelix: {
		num: 208,
		name: "Steelix",
		types: ["Steel", "Ground"],
		baseStats: { hp: 75, atk: 85, def: 200, spa: 55, spd: 65, spe: 30 },
		abilities: { 0: "Rock Head", 1: "Sturdy", H: "Sheer Force" },
		heightm: 9.2,
		weightkg: 400,
		color: "Gray",
		prevo: "Onix",
		evoType: "trade",
		evoItem: "Metal Coat",
		eggGroups: ["Mineral"],
		otherFormes: ["Steelix-Mega"],
		formeOrder: ["Steelix", "Steelix-Mega"],
	},
	steelixmega: {
		num: 208,
		name: "Steelix-Mega",
		baseSpecies: "Steelix",
		forme: "Mega",
		types: ["Steel", "Ground"],
		baseStats: { hp: 75, atk: 125, def: 230, spa: 55, spd: 95, spe: 30 },
		abilities: { 0: "Sand Force" },
		heightm: 10.5,
		weightkg: 740,
		color: "Gray",
		eggGroups: ["Mineral"],
		requiredItem: "Steelixite",
	},
	snubbull: {
		num: 209,
		name: "Snubbull",
		types: ["Fairy"],
		genderRatio: { M: 0.25, F: 0.75 },
		baseStats: { hp: 60, atk: 80, def: 50, spa: 40, spd: 40, spe: 30 },
		abilities: { 0: "Intimidate", 1: "Run Away", H: "Rattled" },
		heightm: 0.6,
		weightkg: 7.8,
		color: "Pink",
		evos: ["Granbull"],
		eggGroups: ["Field", "Fairy"],
	},
	granbull: {
		num: 210,
		name: "Granbull",
		types: ["Fairy"],
		genderRatio: { M: 0.25, F: 0.75 },
		baseStats: { hp: 90, atk: 120, def: 75, spa: 60, spd: 60, spe: 45 },
		abilities: { 0: "Intimidate", 1: "Quick Feet", H: "Rattled" },
		heightm: 1.4,
		weightkg: 48.7,
		color: "Purple",
		prevo: "Snubbull",
		evoLevel: 23,
		eggGroups: ["Field", "Fairy"],
	},
	qwilfish: {
		num: 211,
		name: "Qwilfish",
		types: ["Water", "Poison"],
		baseStats: { hp: 65, atk: 95, def: 85, spa: 55, spd: 55, spe: 85 },
		abilities: { 0: "Poison Point", 1: "Swift Swim", H: "Intimidate" },
		heightm: 0.5,
		weightkg: 3.9,
		color: "Gray",
		eggGroups: ["Water 2"],
	},
	scizor: {
		num: 212,
		name: "Scizor",
		types: ["Bug", "Steel"],
		baseStats: { hp: 70, atk: 130, def: 100, spa: 55, spd: 80, spe: 65 },
		abilities: { 0: "Swarm", 1: "Technician", H: "Light Metal" },
		heightm: 1.8,
		weightkg: 118,
		color: "Red",
		prevo: "Scyther",
		evoType: "trade",
		evoItem: "Metal Coat",
		eggGroups: ["Bug"],
		otherFormes: ["Scizor-Mega"],
		formeOrder: ["Scizor", "Scizor-Mega"],
	},
	scizormega: {
		num: 212,
		name: "Scizor-Mega",
		baseSpecies: "Scizor",
		forme: "Mega",
		types: ["Bug", "Steel"],
		baseStats: { hp: 70, atk: 150, def: 140, spa: 65, spd: 100, spe: 75 },
		abilities: { 0: "Technician" },
		heightm: 2,
		weightkg: 125,
		color: "Red",
		eggGroups: ["Bug"],
		requiredItem: "Scizorite",
	},
	shuckle: {
		num: 213,
		name: "Shuckle",
		types: ["Bug", "Rock"],
		baseStats: { hp: 20, atk: 10, def: 230, spa: 10, spd: 230, spe: 5 },
		abilities: { 0: "Sturdy", 1: "Gluttony", H: "Contrary" },
		heightm: 0.6,
		weightkg: 20.5,
		color: "Yellow",
		eggGroups: ["Bug"],
	},
	heracross: {
		num: 214,
		name: "Heracross",
		types: ["Bug", "Fighting"],
		baseStats: { hp: 80, atk: 125, def: 75, spa: 40, spd: 95, spe: 85 },
		abilities: { 0: "Swarm", 1: "Guts", H: "Moxie" },
		heightm: 1.5,
		weightkg: 54,
		color: "Blue",
		eggGroups: ["Bug"],
		otherFormes: ["Heracross-Mega"],
		formeOrder: ["Heracross", "Heracross-Mega"],
	},
	heracrossmega: {
		num: 214,
		name: "Heracross-Mega",
		baseSpecies: "Heracross",
		forme: "Mega",
		types: ["Bug", "Fighting"],
		baseStats: { hp: 80, atk: 185, def: 115, spa: 40, spd: 105, spe: 75 },
		abilities: { 0: "Skill Link" },
		heightm: 1.7,
		weightkg: 62.5,
		color: "Blue",
		eggGroups: ["Bug"],
		requiredItem: "Heracronite",
	},
	sneasel: {
		num: 215,
		name: "Sneasel",
		types: ["Dark", "Ice"],
		baseStats: { hp: 55, atk: 95, def: 55, spa: 35, spd: 75, spe: 115 },
		abilities: { 0: "Inner Focus", 1: "Keen Eye", H: "Pickpocket" },
		heightm: 0.9,
		weightkg: 28,
		color: "Black",
		evos: ["Weavile"],
		eggGroups: ["Field"],
	},
	teddiursa: {
		num: 216,
		name: "Teddiursa",
		types: ["Normal"],
		baseStats: { hp: 60, atk: 80, def: 50, spa: 50, spd: 50, spe: 40 },
		abilities: { 0: "Pickup", 1: "Quick Feet", H: "Honey Gather" },
		heightm: 0.6,
		weightkg: 8.8,
		color: "Brown",
		evos: ["Ursaring"],
		eggGroups: ["Field"],
	},
	ursaring: {
		num: 217,
		name: "Ursaring",
		types: ["Normal"],
		baseStats: { hp: 90, atk: 130, def: 75, spa: 75, spd: 75, spe: 55 },
		abilities: { 0: "Guts", 1: "Quick Feet", H: "Unnerve" },
		heightm: 1.8,
		weightkg: 125.8,
		color: "Brown",
		prevo: "Teddiursa",
		evoLevel: 30,
		eggGroups: ["Field"],
	},
	slugma: {
		num: 218,
		name: "Slugma",
		types: ["Fire"],
		baseStats: { hp: 40, atk: 40, def: 40, spa: 70, spd: 40, spe: 20 },
		abilities: { 0: "Magma Armor", 1: "Flame Body", H: "Weak Armor" },
		heightm: 0.7,
		weightkg: 35,
		color: "Red",
		evos: ["Magcargo"],
		eggGroups: ["Amorphous"],
	},
	magcargo: {
		num: 219,
		name: "Magcargo",
		types: ["Fire", "Rock"],
		baseStats: { hp: 60, atk: 50, def: 120, spa: 90, spd: 80, spe: 30 },
		abilities: { 0: "Magma Armor", 1: "Flame Body", H: "Weak Armor" },
		heightm: 0.8,
		weightkg: 55,
		color: "Red",
		prevo: "Slugma",
		evoLevel: 38,
		eggGroups: ["Amorphous"],
	},
	swinub: {
		num: 220,
		name: "Swinub",
		types: ["Ice", "Ground"],
		baseStats: { hp: 50, atk: 50, def: 40, spa: 30, spd: 30, spe: 50 },
		abilities: { 0: "Oblivious", 1: "Snow Cloak", H: "Thick Fat" },
		heightm: 0.4,
		weightkg: 6.5,
		color: "Brown",
		evos: ["Piloswine"],
		eggGroups: ["Field"],
	},
	piloswine: {
		num: 221,
		name: "Piloswine",
		types: ["Ice", "Ground"],
		baseStats: { hp: 100, atk: 100, def: 80, spa: 60, spd: 60, spe: 50 },
		abilities: { 0: "Oblivious", 1: "Snow Cloak", H: "Thick Fat" },
		heightm: 1.1,
		weightkg: 55.8,
		color: "Brown",
		prevo: "Swinub",
		evoLevel: 33,
		evos: ["Mamoswine"],
		eggGroups: ["Field"],
	},
	corsola: {
		num: 222,
		name: "Corsola",
		types: ["Water", "Rock"],
		genderRatio: { M: 0.25, F: 0.75 },
		baseStats: { hp: 65, atk: 55, def: 95, spa: 65, spd: 95, spe: 35 },
		abilities: { 0: "Hustle", 1: "Natural Cure", H: "Regenerator" },
		heightm: 0.6,
		weightkg: 5,
		color: "Pink",
		eggGroups: ["Water 1", "Water 3"],
		otherFormes: ["Corsola-Galar"],
		formeOrder: ["Corsola", "Corsola-Galar"],
	},
	corsolagalar: {
		num: 222,
		name: "Corsola-Galar",
		baseSpecies: "Corsola",
		forme: "Galar",
		types: ["Ghost"],
		genderRatio: { M: 0.25, F: 0.75 },
		baseStats: { hp: 60, atk: 55, def: 100, spa: 65, spd: 100, spe: 30 },
		abilities: { 0: "Weak Armor", H: "Cursed Body" },
		heightm: 0.6,
		weightkg: 0.5,
		color: "White",
		evos: ["Cursola"],
		eggGroups: ["Water 1", "Water 3"],
	},
	remoraid: {
		num: 223,
		name: "Remoraid",
		types: ["Water"],
		baseStats: { hp: 35, atk: 65, def: 35, spa: 65, spd: 35, spe: 65 },
		abilities: { 0: "Hustle", 1: "Sniper", H: "Moody" },
		heightm: 0.6,
		weightkg: 12,
		color: "Gray",
		evos: ["Octillery"],
		eggGroups: ["Water 1", "Water 2"],
	},
	octillery: {
		num: 224,
		name: "Octillery",
		types: ["Water"],
		baseStats: { hp: 75, atk: 105, def: 75, spa: 105, spd: 75, spe: 45 },
		abilities: { 0: "Suction Cups", 1: "Sniper", H: "Moody" },
		heightm: 0.9,
		weightkg: 28.5,
		color: "Red",
		prevo: "Remoraid",
		evoLevel: 25,
		eggGroups: ["Water 1", "Water 2"],
	},
	delibird: {
		num: 225,
		name: "Delibird",
		types: ["Ice", "Flying"],
		baseStats: { hp: 45, atk: 55, def: 45, spa: 65, spd: 45, spe: 75 },
		abilities: { 0: "Vital Spirit", 1: "Hustle", H: "Insomnia" },
		heightm: 0.9,
		weightkg: 16,
		color: "Red",
		eggGroups: ["Water 1", "Field"],
	},
	mantine: {
		num: 226,
		name: "Mantine",
		types: ["Water", "Flying"],
		baseStats: { hp: 85, atk: 40, def: 70, spa: 80, spd: 140, spe: 70 },
		abilities: { 0: "Swift Swim", 1: "Water Absorb", H: "Water Veil" },
		heightm: 2.1,
		weightkg: 220,
		color: "Purple",
		prevo: "Mantyke",
		evoType: "levelExtra",
		evoCondition: "with a Remoraid in party",
		eggGroups: ["Water 1"],
		canHatch: true,
	},
	skarmory: {
		num: 227,
		name: "Skarmory",
		types: ["Steel", "Flying"],
		baseStats: { hp: 65, atk: 80, def: 140, spa: 40, spd: 70, spe: 70 },
		abilities: { 0: "Keen Eye", 1: "Sturdy", H: "Weak Armor" },
		heightm: 1.7,
		weightkg: 50.5,
		color: "Gray",
		eggGroups: ["Flying"],
	},
	houndour: {
		num: 228,
		name: "Houndour",
		types: ["Dark", "Fire"],
		baseStats: { hp: 45, atk: 60, def: 30, spa: 80, spd: 50, spe: 65 },
		abilities: { 0: "Early Bird", 1: "Flash Fire", H: "Unnerve" },
		heightm: 0.6,
		weightkg: 10.8,
		color: "Black",
		evos: ["Houndoom"],
		eggGroups: ["Field"],
	},
	houndoom: {
		num: 229,
		name: "Houndoom",
		types: ["Dark", "Fire"],
		baseStats: { hp: 75, atk: 90, def: 50, spa: 110, spd: 80, spe: 95 },
		abilities: { 0: "Early Bird", 1: "Flash Fire", H: "Unnerve" },
		heightm: 1.4,
		weightkg: 35,
		color: "Black",
		prevo: "Houndour",
		evoLevel: 24,
		eggGroups: ["Field"],
		otherFormes: ["Houndoom-Mega"],
		formeOrder: ["Houndoom", "Houndoom-Mega"],
	},
	houndoommega: {
		num: 229,
		name: "Houndoom-Mega",
		baseSpecies: "Houndoom",
		forme: "Mega",
		types: ["Dark", "Fire"],
		baseStats: { hp: 75, atk: 90, def: 90, spa: 140, spd: 90, spe: 115 },
		abilities: { 0: "Solar Power" },
		heightm: 1.9,
		weightkg: 49.5,
		color: "Black",
		eggGroups: ["Field"],
		requiredItem: "Houndoominite",
	},
	kingdra: {
		num: 230,
		name: "Kingdra",
		types: ["Water", "Dragon"],
		baseStats: { hp: 75, atk: 95, def: 95, spa: 95, spd: 95, spe: 85 },
		abilities: { 0: "Swift Swim", 1: "Sniper", H: "Damp" },
		heightm: 1.8,
		weightkg: 152,
		color: "Blue",
		prevo: "Seadra",
		evoType: "trade",
		evoItem: "Dragon Scale",
		eggGroups: ["Water 1", "Dragon"],
	},
	phanpy: {
		num: 231,
		name: "Phanpy",
		types: ["Ground"],
		baseStats: { hp: 90, atk: 60, def: 60, spa: 40, spd: 40, spe: 40 },
		abilities: { 0: "Pickup", H: "Sand Veil" },
		heightm: 0.5,
		weightkg: 33.5,
		color: "Blue",
		evos: ["Donphan"],
		eggGroups: ["Field"],
	},
	donphan: {
		num: 232,
		name: "Donphan",
		types: ["Ground"],
		baseStats: { hp: 90, atk: 120, def: 120, spa: 60, spd: 60, spe: 50 },
		abilities: { 0: "Sturdy", H: "Sand Veil" },
		heightm: 1.1,
		weightkg: 120,
		color: "Gray",
		prevo: "Phanpy",
		evoLevel: 25,
		eggGroups: ["Field"],
	},
	porygon2: {
		num: 233,
		name: "Porygon2",
		types: ["Normal"],
		gender: "N",
		baseStats: { hp: 85, atk: 80, def: 90, spa: 105, spd: 95, spe: 60 },
		abilities: { 0: "Trace", 1: "Download", H: "Analytic" },
		heightm: 0.6,
		weightkg: 32.5,
		color: "Red",
		prevo: "Porygon",
		evoType: "trade",
		evoItem: "Up-Grade",
		evos: ["Porygon-Z"],
		eggGroups: ["Mineral"],
	},
	stantler: {
		num: 234,
		name: "Stantler",
		types: ["Normal"],
		baseStats: { hp: 73, atk: 95, def: 62, spa: 85, spd: 65, spe: 85 },
		abilities: { 0: "Intimidate", 1: "Frisk", H: "Sap Sipper" },
		heightm: 1.4,
		weightkg: 71.2,
		color: "Brown",
		eggGroups: ["Field"],
	},
	smeargle: {
		num: 235,
		name: "Smeargle",
		types: ["Normal"],
		baseStats: { hp: 55, atk: 20, def: 35, spa: 20, spd: 45, spe: 75 },
		abilities: { 0: "Own Tempo", 1: "Technician", H: "Moody" },
		heightm: 1.2,
		weightkg: 58,
		color: "White",
		eggGroups: ["Field"],
	},
	tyrogue: {
		num: 236,
		name: "Tyrogue",
		types: ["Fighting"],
		gender: "M",
		baseStats: { hp: 35, atk: 35, def: 35, spa: 35, spd: 35, spe: 35 },
		abilities: { 0: "Guts", 1: "Steadfast", H: "Vital Spirit" },
		heightm: 0.7,
		weightkg: 21,
		color: "Purple",
		evos: ["Hitmonlee", "Hitmonchan", "Hitmontop"],
		eggGroups: ["Undiscovered"],
		canHatch: true,
	},
	hitmontop: {
		num: 237,
		name: "Hitmontop",
		types: ["Fighting"],
		gender: "M",
		baseStats: { hp: 50, atk: 95, def: 95, spa: 35, spd: 110, spe: 70 },
		abilities: { 0: "Intimidate", 1: "Technician", H: "Steadfast" },
		heightm: 1.4,
		weightkg: 48,
		color: "Brown",
		prevo: "Tyrogue",
		evoLevel: 20,
		evoCondition: "with an Atk stat equal to its Def stat",
		eggGroups: ["Human-Like"],
	},
	smoochum: {
		num: 238,
		name: "Smoochum",
		types: ["Ice", "Psychic"],
		gender: "F",
		baseStats: { hp: 45, atk: 30, def: 15, spa: 85, spd: 65, spe: 65 },
		abilities: { 0: "Oblivious", 1: "Forewarn", H: "Hydration" },
		heightm: 0.4,
		weightkg: 6,
		color: "Pink",
		evos: ["Jynx"],
		eggGroups: ["Undiscovered"],
		canHatch: true,
	},
	elekid: {
		num: 239,
		name: "Elekid",
		types: ["Electric"],
		genderRatio: { M: 0.75, F: 0.25 },
		baseStats: { hp: 45, atk: 63, def: 37, spa: 65, spd: 55, spe: 95 },
		abilities: { 0: "Static", H: "Vital Spirit" },
		heightm: 0.6,
		weightkg: 23.5,
		color: "Yellow",
		evos: ["Electabuzz"],
		eggGroups: ["Undiscovered"],
		canHatch: true,
	},
	magby: {
		num: 240,
		name: "Magby",
		types: ["Fire"],
		genderRatio: { M: 0.75, F: 0.25 },
		baseStats: { hp: 45, atk: 75, def: 37, spa: 70, spd: 55, spe: 83 },
		abilities: { 0: "Flame Body", H: "Vital Spirit" },
		heightm: 0.7,
		weightkg: 21.4,
		color: "Red",
		evos: ["Magmar"],
		eggGroups: ["Undiscovered"],
		canHatch: true,
	},
	miltank: {
		num: 241,
		name: "Miltank",
		types: ["Normal"],
		gender: "F",
		baseStats: { hp: 95, atk: 80, def: 105, spa: 40, spd: 70, spe: 100 },
		abilities: { 0: "Thick Fat", 1: "Scrappy", H: "Sap Sipper" },
		heightm: 1.2,
		weightkg: 75.5,
		color: "Pink",
		eggGroups: ["Field"],
	},
	blissey: {
		num: 242,
		name: "Blissey",
		types: ["Normal"],
		gender: "F",
		baseStats: { hp: 255, atk: 10, def: 10, spa: 75, spd: 135, spe: 55 },
		abilities: { 0: "Natural Cure", 1: "Serene Grace", H: "Healer" },
		heightm: 1.5,
		weightkg: 46.8,
		color: "Pink",
		prevo: "Chansey",
		evoType: "levelFriendship",
		eggGroups: ["Fairy"],
	},
	raikou: {
		num: 243,
		name: "Raikou",
		types: ["Electric"],
		gender: "N",
		baseStats: { hp: 90, atk: 85, def: 75, spa: 115, spd: 100, spe: 115 },
		abilities: { 0: "Pressure", H: "Inner Focus" },
		heightm: 1.9,
		weightkg: 178,
		color: "Yellow",
		eggGroups: ["Undiscovered"],
	},
	entei: {
		num: 244,
		name: "Entei",
		types: ["Fire"],
		gender: "N",
		baseStats: { hp: 115, atk: 115, def: 85, spa: 90, spd: 75, spe: 100 },
		abilities: { 0: "Pressure", H: "Inner Focus" },
		heightm: 2.1,
		weightkg: 198,
		color: "Brown",
		eggGroups: ["Undiscovered"],
	},
	suicune: {
		num: 245,
		name: "Suicune",
		types: ["Water"],
		gender: "N",
		baseStats: { hp: 100, atk: 75, def: 115, spa: 90, spd: 115, spe: 85 },
		abilities: { 0: "Pressure", H: "Inner Focus" },
		heightm: 2,
		weightkg: 187,
		color: "Blue",
		eggGroups: ["Undiscovered"],
	},
	larvitar: {
		num: 246,
		name: "Larvitar",
		types: ["Rock", "Ground"],
		baseStats: { hp: 50, atk: 64, def: 50, spa: 45, spd: 50, spe: 41 },
		abilities: { 0: "Guts", H: "Sand Veil" },
		heightm: 0.6,
		weightkg: 72,
		color: "Green",
		evos: ["Pupitar"],
		eggGroups: ["Monster"],
	},
	pupitar: {
		num: 247,
		name: "Pupitar",
		types: ["Rock", "Ground"],
		baseStats: { hp: 70, atk: 84, def: 70, spa: 65, spd: 70, spe: 51 },
		abilities: { 0: "Shed Skin" },
		heightm: 1.2,
		weightkg: 152,
		color: "Gray",
		prevo: "Larvitar",
		evoLevel: 30,
		evos: ["Tyranitar"],
		eggGroups: ["Monster"],
	},
	tyranitar: {
		num: 248,
		name: "Tyranitar",
		types: ["Rock", "Dark"],
		baseStats: { hp: 100, atk: 134, def: 110, spa: 95, spd: 100, spe: 61 },
		abilities: { 0: "Sand Stream", H: "Unnerve" },
		heightm: 2,
		weightkg: 202,
		color: "Green",
		prevo: "Pupitar",
		evoLevel: 55,
		eggGroups: ["Monster"],
		otherFormes: ["Tyranitar-Mega"],
		formeOrder: ["Tyranitar", "Tyranitar-Mega"],
	},
	tyranitarmega: {
		num: 248,
		name: "Tyranitar-Mega",
		baseSpecies: "Tyranitar",
		forme: "Mega",
		types: ["Rock", "Dark"],
		baseStats: { hp: 100, atk: 164, def: 150, spa: 95, spd: 120, spe: 71 },
		abilities: { 0: "Sand Stream" },
		heightm: 2.5,
		weightkg: 255,
		color: "Green",
		eggGroups: ["Monster"],
		requiredItem: "Tyranitarite",
	},
	lugia: {
		num: 249,
		name: "Lugia",
		types: ["Psychic", "Flying"],
		gender: "N",
		baseStats: { hp: 106, atk: 90, def: 130, spa: 90, spd: 154, spe: 110 },
		abilities: { 0: "Pressure", H: "Multiscale" },
		heightm: 5.2,
		weightkg: 216,
		color: "White",
		eggGroups: ["Undiscovered"],
	},
	hooh: {
		num: 250,
		name: "Ho-Oh",
		types: ["Fire", "Flying"],
		gender: "N",
		baseStats: { hp: 106, atk: 130, def: 90, spa: 110, spd: 154, spe: 90 },
		abilities: { 0: "Pressure", H: "Regenerator" },
		heightm: 3.8,
		weightkg: 199,
		color: "Red",
		eggGroups: ["Undiscovered"],
	},
	celebi: {
		num: 251,
		name: "Celebi",
		types: ["Psychic", "Grass"],
		gender: "N",
		baseStats: { hp: 100, atk: 100, def: 100, spa: 100, spd: 100, spe: 100 },
		abilities: { 0: "Natural Cure" },
		heightm: 0.6,
		weightkg: 5,
		color: "Green",
		eggGroups: ["Undiscovered"],
	},
	treecko: {
		num: 252,
		name: "Treecko",
		types: ["Grass"],
		genderRatio: { M: 0.875, F: 0.125 },
		baseStats: { hp: 40, atk: 45, def: 35, spa: 65, spd: 55, spe: 70 },
		abilities: { 0: "Overgrow", H: "Unburden" },
		heightm: 0.5,
		weightkg: 5,
		color: "Green",
		evos: ["Grovyle"],
		eggGroups: ["Monster", "Dragon"],
	},
	grovyle: {
		num: 253,
		name: "Grovyle",
		types: ["Grass"],
		genderRatio: { M: 0.875, F: 0.125 },
		baseStats: { hp: 50, atk: 65, def: 45, spa: 85, spd: 65, spe: 95 },
		abilities: { 0: "Overgrow", H: "Unburden" },
		heightm: 0.9,
		weightkg: 21.6,
		color: "Green",
		prevo: "Treecko",
		evoLevel: 16,
		evos: ["Sceptile"],
		eggGroups: ["Monster", "Dragon"],
	},
	sceptile: {
		num: 254,
		name: "Sceptile",
		types: ["Grass"],
		genderRatio: { M: 0.875, F: 0.125 },
		baseStats: { hp: 70, atk: 85, def: 65, spa: 105, spd: 85, spe: 120 },
		abilities: { 0: "Overgrow", H: "Unburden" },
		heightm: 1.7,
		weightkg: 52.2,
		color: "Green",
		prevo: "Grovyle",
		evoLevel: 36,
		eggGroups: ["Monster", "Dragon"],
		otherFormes: ["Sceptile-Mega"],
		formeOrder: ["Sceptile", "Sceptile-Mega"],
	},
	sceptilemega: {
		num: 254,
		name: "Sceptile-Mega",
		baseSpecies: "Sceptile",
		forme: "Mega",
		types: ["Grass", "Dragon"],
		genderRatio: { M: 0.875, F: 0.125 },
		baseStats: { hp: 70, atk: 110, def: 75, spa: 145, spd: 85, spe: 145 },
		abilities: { 0: "Lightning Rod" },
		heightm: 1.9,
		weightkg: 55.2,
		color: "Green",
		eggGroups: ["Monster", "Dragon"],
		requiredItem: "Sceptilite",
	},
	torchic: {
		num: 255,
		name: "Torchic",
		types: ["Fire"],
		genderRatio: { M: 0.875, F: 0.125 },
		baseStats: { hp: 45, atk: 60, def: 40, spa: 70, spd: 50, spe: 45 },
		abilities: { 0: "Blaze", H: "Speed Boost" },
		heightm: 0.4,
		weightkg: 2.5,
		color: "Red",
		evos: ["Combusken"],
		eggGroups: ["Field"],
	},
	combusken: {
		num: 256,
		name: "Combusken",
		types: ["Fire", "Fighting"],
		genderRatio: { M: 0.875, F: 0.125 },
		baseStats: { hp: 60, atk: 85, def: 60, spa: 85, spd: 60, spe: 55 },
		abilities: { 0: "Blaze", H: "Speed Boost" },
		heightm: 0.9,
		weightkg: 19.5,
		color: "Red",
		prevo: "Torchic",
		evoLevel: 16,
		evos: ["Blaziken"],
		eggGroups: ["Field"],
	},
	blaziken: {
		num: 257,
		name: "Blaziken",
		types: ["Fire", "Fighting"],
		genderRatio: { M: 0.875, F: 0.125 },
		baseStats: { hp: 80, atk: 120, def: 70, spa: 110, spd: 70, spe: 80 },
		abilities: { 0: "Blaze", H: "Speed Boost" },
		heightm: 1.9,
		weightkg: 52,
		color: "Red",
		prevo: "Combusken",
		evoLevel: 36,
		eggGroups: ["Field"],
		otherFormes: ["Blaziken-Mega"],
		formeOrder: ["Blaziken", "Blaziken-Mega"],
	},
	blazikenmega: {
		num: 257,
		name: "Blaziken-Mega",
		baseSpecies: "Blaziken",
		forme: "Mega",
		types: ["Fire", "Fighting"],
		genderRatio: { M: 0.875, F: 0.125 },
		baseStats: { hp: 80, atk: 160, def: 80, spa: 130, spd: 80, spe: 100 },
		abilities: { 0: "Speed Boost" },
		heightm: 1.9,
		weightkg: 52,
		color: "Red",
		eggGroups: ["Field"],
		requiredItem: "Blazikenite",
	},
	mudkip: {
		num: 258,
		name: "Mudkip",
		types: ["Water"],
		genderRatio: { M: 0.875, F: 0.125 },
		baseStats: { hp: 50, atk: 70, def: 50, spa: 50, spd: 50, spe: 40 },
		abilities: { 0: "Torrent", H: "Damp" },
		heightm: 0.4,
		weightkg: 7.6,
		color: "Blue",
		evos: ["Marshtomp"],
		eggGroups: ["Monster", "Water 1"],
	},
	marshtomp: {
		num: 259,
		name: "Marshtomp",
		types: ["Water", "Ground"],
		genderRatio: { M: 0.875, F: 0.125 },
		baseStats: { hp: 70, atk: 85, def: 70, spa: 60, spd: 70, spe: 50 },
		abilities: { 0: "Torrent", H: "Damp" },
		heightm: 0.7,
		weightkg: 28,
		color: "Blue",
		prevo: "Mudkip",
		evoLevel: 16,
		evos: ["Swampert"],
		eggGroups: ["Monster", "Water 1"],
	},
	swampert: {
		num: 260,
		name: "Swampert",
		types: ["Water", "Ground"],
		genderRatio: { M: 0.875, F: 0.125 },
		baseStats: { hp: 100, atk: 110, def: 90, spa: 85, spd: 90, spe: 60 },
		abilities: { 0: "Torrent", H: "Damp" },
		heightm: 1.5,
		weightkg: 81.9,
		color: "Blue",
		prevo: "Marshtomp",
		evoLevel: 36,
		eggGroups: ["Monster", "Water 1"],
		otherFormes: ["Swampert-Mega"],
		formeOrder: ["Swampert", "Swampert-Mega"],
	},
	swampertmega: {
		num: 260,
		name: "Swampert-Mega",
		baseSpecies: "Swampert",
		forme: "Mega",
		types: ["Water", "Ground"],
		genderRatio: { M: 0.875, F: 0.125 },
		baseStats: { hp: 100, atk: 150, def: 110, spa: 95, spd: 110, spe: 70 },
		abilities: { 0: "Swift Swim" },
		heightm: 1.9,
		weightkg: 102,
		color: "Blue",
		eggGroups: ["Monster", "Water 1"],
		requiredItem: "Swampertite",
	},
	poochyena: {
		num: 261,
		name: "Poochyena",
		types: ["Dark"],
		baseStats: { hp: 35, atk: 55, def: 35, spa: 30, spd: 30, spe: 35 },
		abilities: { 0: "Run Away", 1: "Quick Feet", H: "Rattled" },
		heightm: 0.5,
		weightkg: 13.6,
		color: "Gray",
		evos: ["Mightyena"],
		eggGroups: ["Field"],
	},
	mightyena: {
		num: 262,
		name: "Mightyena",
		types: ["Dark"],
		baseStats: { hp: 70, atk: 90, def: 70, spa: 60, spd: 60, spe: 70 },
		abilities: { 0: "Intimidate", 1: "Quick Feet", H: "Moxie" },
		heightm: 1,
		weightkg: 37,
		color: "Gray",
		prevo: "Poochyena",
		evoLevel: 18,
		eggGroups: ["Field"],
	},
	zigzagoon: {
		num: 263,
		name: "Zigzagoon",
		types: ["Normal"],
		baseStats: { hp: 38, atk: 30, def: 41, spa: 30, spd: 41, spe: 60 },
		abilities: { 0: "Pickup", 1: "Gluttony", H: "Quick Feet" },
		heightm: 0.4,
		weightkg: 17.5,
		color: "Brown",
		evos: ["Linoone"],
		eggGroups: ["Field"],
		otherFormes: ["Zigzagoon-Galar"],
		formeOrder: ["Zigzagoon", "Zigzagoon-Galar"],
	},
	zigzagoongalar: {
		num: 263,
		name: "Zigzagoon-Galar",
		baseSpecies: "Zigzagoon",
		forme: "Galar",
		types: ["Dark", "Normal"],
		baseStats: { hp: 38, atk: 30, def: 41, spa: 30, spd: 41, spe: 60 },
		abilities: { 0: "Pickup", 1: "Gluttony", H: "Quick Feet" },
		heightm: 0.4,
		weightkg: 17.5,
		color: "White",
		evos: ["Linoone-Galar"],
		eggGroups: ["Field"],
	},
	linoone: {
		num: 264,
		name: "Linoone",
		types: ["Normal"],
		baseStats: { hp: 78, atk: 70, def: 61, spa: 50, spd: 61, spe: 100 },
		abilities: { 0: "Pickup", 1: "Gluttony", H: "Quick Feet" },
		heightm: 0.5,
		weightkg: 32.5,
		color: "White",
		prevo: "Zigzagoon",
		evoLevel: 20,
		eggGroups: ["Field"],
		otherFormes: ["Linoone-Galar"],
		formeOrder: ["Linoone", "Linoone-Galar"],
	},
	linoonegalar: {
		num: 264,
		name: "Linoone-Galar",
		baseSpecies: "Linoone",
		forme: "Galar",
		types: ["Dark", "Normal"],
		baseStats: { hp: 78, atk: 70, def: 61, spa: 50, spd: 61, spe: 100 },
		abilities: { 0: "Pickup", 1: "Gluttony", H: "Quick Feet" },
		heightm: 0.5,
		weightkg: 32.5,
		color: "White",
		prevo: "Zigzagoon-Galar",
		evoLevel: 20,
		evos: ["Obstagoon"],
		eggGroups: ["Field"],
	},
	wurmple: {
		num: 265,
		name: "Wurmple",
		types: ["Bug"],
		baseStats: { hp: 45, atk: 45, def: 35, spa: 20, spd: 30, spe: 20 },
		abilities: { 0: "Shield Dust", H: "Run Away" },
		heightm: 0.3,
		weightkg: 3.6,
		color: "Red",
		evos: ["Silcoon", "Cascoon"],
		eggGroups: ["Bug"],
	},
	silcoon: {
		num: 266,
		name: "Silcoon",
		types: ["Bug"],
		baseStats: { hp: 50, atk: 35, def: 55, spa: 25, spd: 25, spe: 15 },
		abilities: { 0: "Shed Skin" },
		heightm: 0.6,
		weightkg: 10,
		color: "White",
		prevo: "Wurmple",
		evoLevel: 7,
		evos: ["Beautifly"],
		eggGroups: ["Bug"],
	},
	beautifly: {
		num: 267,
		name: "Beautifly",
		types: ["Bug", "Flying"],
		baseStats: { hp: 60, atk: 70, def: 50, spa: 100, spd: 50, spe: 65 },
		abilities: { 0: "Swarm", H: "Rivalry" },
		heightm: 1,
		weightkg: 28.4,
		color: "Yellow",
		prevo: "Silcoon",
		evoLevel: 10,
		eggGroups: ["Bug"],
	},
	cascoon: {
		num: 268,
		name: "Cascoon",
		types: ["Bug"],
		baseStats: { hp: 50, atk: 35, def: 55, spa: 25, spd: 25, spe: 15 },
		abilities: { 0: "Shed Skin" },
		heightm: 0.7,
		weightkg: 11.5,
		color: "Purple",
		prevo: "Wurmple",
		evoLevel: 7,
		evos: ["Dustox"],
		eggGroups: ["Bug"],
	},
	dustox: {
		num: 269,
		name: "Dustox",
		types: ["Bug", "Poison"],
		baseStats: { hp: 60, atk: 50, def: 70, spa: 50, spd: 90, spe: 65 },
		abilities: { 0: "Shield Dust", H: "Compound Eyes" },
		heightm: 1.2,
		weightkg: 31.6,
		color: "Green",
		prevo: "Cascoon",
		evoLevel: 10,
		eggGroups: ["Bug"],
	},
	lotad: {
		num: 270,
		name: "Lotad",
		types: ["Water", "Grass"],
		baseStats: { hp: 40, atk: 30, def: 30, spa: 40, spd: 50, spe: 30 },
		abilities: { 0: "Swift Swim", 1: "Rain Dish", H: "Own Tempo" },
		heightm: 0.5,
		weightkg: 2.6,
		color: "Green",
		evos: ["Lombre"],
		eggGroups: ["Water 1", "Grass"],
	},
	lombre: {
		num: 271,
		name: "Lombre",
		types: ["Water", "Grass"],
		baseStats: { hp: 60, atk: 50, def: 50, spa: 60, spd: 70, spe: 50 },
		abilities: { 0: "Swift Swim", 1: "Rain Dish", H: "Own Tempo" },
		heightm: 1.2,
		weightkg: 32.5,
		color: "Green",
		prevo: "Lotad",
		evoLevel: 14,
		evos: ["Ludicolo"],
		eggGroups: ["Water 1", "Grass"],
	},
	ludicolo: {
		num: 272,
		name: "Ludicolo",
		types: ["Water", "Grass"],
		baseStats: { hp: 80, atk: 70, def: 70, spa: 90, spd: 100, spe: 70 },
		abilities: { 0: "Swift Swim", 1: "Rain Dish", H: "Own Tempo" },
		heightm: 1.5,
		weightkg: 55,
		color: "Green",
		prevo: "Lombre",
		evoType: "useItem",
		evoItem: "Water Stone",
		eggGroups: ["Water 1", "Grass"],
	},
	seedot: {
		num: 273,
		name: "Seedot",
		types: ["Grass"],
		baseStats: { hp: 40, atk: 40, def: 50, spa: 30, spd: 30, spe: 30 },
		abilities: { 0: "Chlorophyll", 1: "Early Bird", H: "Pickpocket" },
		heightm: 0.5,
		weightkg: 4,
		color: "Brown",
		evos: ["Nuzleaf"],
		eggGroups: ["Field", "Grass"],
	},
	nuzleaf: {
		num: 274,
		name: "Nuzleaf",
		types: ["Grass", "Dark"],
		baseStats: { hp: 70, atk: 70, def: 40, spa: 60, spd: 40, spe: 60 },
		abilities: { 0: "Chlorophyll", 1: "Early Bird", H: "Pickpocket" },
		heightm: 1,
		weightkg: 28,
		color: "Brown",
		prevo: "Seedot",
		evoLevel: 14,
		evos: ["Shiftry"],
		eggGroups: ["Field", "Grass"],
	},
	shiftry: {
		num: 275,
		name: "Shiftry",
		types: ["Grass", "Dark"],
		baseStats: { hp: 90, atk: 100, def: 60, spa: 90, spd: 60, spe: 80 },
		abilities: { 0: "Chlorophyll", 1: "Early Bird", H: "Pickpocket" },
		heightm: 1.3,
		weightkg: 59.6,
		color: "Brown",
		prevo: "Nuzleaf",
		evoType: "useItem",
		evoItem: "Leaf Stone",
		eggGroups: ["Field", "Grass"],
	},
	taillow: {
		num: 276,
		name: "Taillow",
		types: ["Normal", "Flying"],
		baseStats: { hp: 40, atk: 55, def: 30, spa: 30, spd: 30, spe: 85 },
		abilities: { 0: "Guts", H: "Scrappy" },
		heightm: 0.3,
		weightkg: 2.3,
		color: "Blue",
		evos: ["Swellow"],
		eggGroups: ["Flying"],
	},
	swellow: {
		num: 277,
		name: "Swellow",
		types: ["Normal", "Flying"],
		baseStats: { hp: 60, atk: 85, def: 60, spa: 75, spd: 50, spe: 125 },
		abilities: { 0: "Guts", H: "Scrappy" },
		heightm: 0.7,
		weightkg: 19.8,
		color: "Blue",
		prevo: "Taillow",
		evoLevel: 22,
		eggGroups: ["Flying"],
	},
	wingull: {
		num: 278,
		name: "Wingull",
		types: ["Water", "Flying"],
		baseStats: { hp: 40, atk: 30, def: 30, spa: 55, spd: 30, spe: 85 },
		abilities: { 0: "Keen Eye", 1: "Hydration", H: "Rain Dish" },
		heightm: 0.6,
		weightkg: 9.5,
		color: "White",
		evos: ["Pelipper"],
		eggGroups: ["Water 1", "Flying"],
	},
	pelipper: {
		num: 279,
		name: "Pelipper",
		types: ["Water", "Flying"],
		baseStats: { hp: 60, atk: 50, def: 100, spa: 95, spd: 70, spe: 65 },
		abilities: { 0: "Keen Eye", 1: "Drizzle", H: "Rain Dish" },
		heightm: 1.2,
		weightkg: 28,
		color: "Yellow",
		prevo: "Wingull",
		evoLevel: 25,
		eggGroups: ["Water 1", "Flying"],
	},
	ralts: {
		num: 280,
		name: "Ralts",
		types: ["Psychic", "Fairy"],
		baseStats: { hp: 28, atk: 25, def: 25, spa: 45, spd: 35, spe: 40 },
		abilities: { 0: "Synchronize", 1: "Trace", H: "Telepathy" },
		heightm: 0.4,
		weightkg: 6.6,
		color: "White",
		evos: ["Kirlia"],
		eggGroups: ["Human-Like", "Amorphous"],
	},
	kirlia: {
		num: 281,
		name: "Kirlia",
		types: ["Psychic", "Fairy"],
		baseStats: { hp: 38, atk: 35, def: 35, spa: 65, spd: 55, spe: 50 },
		abilities: { 0: "Synchronize", 1: "Trace", H: "Telepathy" },
		heightm: 0.8,
		weightkg: 20.2,
		color: "White",
		prevo: "Ralts",
		evoLevel: 20,
		evos: ["Gardevoir", "Gallade"],
		eggGroups: ["Human-Like", "Amorphous"],
	},
	gardevoir: {
		num: 282,
		name: "Gardevoir",
		types: ["Psychic", "Fairy"],
		baseStats: { hp: 68, atk: 65, def: 65, spa: 125, spd: 115, spe: 80 },
		abilities: { 0: "Synchronize", 1: "Trace", H: "Telepathy" },
		heightm: 1.6,
		weightkg: 48.4,
		color: "White",
		prevo: "Kirlia",
		evoLevel: 30,
		eggGroups: ["Human-Like", "Amorphous"],
		otherFormes: ["Gardevoir-Mega"],
		formeOrder: ["Gardevoir", "Gardevoir-Mega"],
	},
	gardevoirmega: {
		num: 282,
		name: "Gardevoir-Mega",
		baseSpecies: "Gardevoir",
		forme: "Mega",
		types: ["Psychic", "Fairy"],
		baseStats: { hp: 68, atk: 85, def: 65, spa: 165, spd: 135, spe: 100 },
		abilities: { 0: "Pixilate" },
		heightm: 1.6,
		weightkg: 48.4,
		color: "White",
		eggGroups: ["Amorphous"],
		requiredItem: "Gardevoirite",
	},
	surskit: {
		num: 283,
		name: "Surskit",
		types: ["Bug", "Water"],
		baseStats: { hp: 40, atk: 30, def: 32, spa: 50, spd: 52, spe: 65 },
		abilities: { 0: "Swift Swim", H: "Rain Dish" },
		heightm: 0.5,
		weightkg: 1.7,
		color: "Blue",
		evos: ["Masquerain"],
		eggGroups: ["Water 1", "Bug"],
	},
	masquerain: {
		num: 284,
		name: "Masquerain",
		types: ["Bug", "Flying"],
		baseStats: { hp: 70, atk: 60, def: 62, spa: 100, spd: 82, spe: 80 },
		abilities: { 0: "Intimidate", H: "Unnerve" },
		heightm: 0.8,
		weightkg: 3.6,
		color: "Blue",
		prevo: "Surskit",
		evoLevel: 22,
		eggGroups: ["Water 1", "Bug"],
	},
	shroomish: {
		num: 285,
		name: "Shroomish",
		types: ["Grass"],
		baseStats: { hp: 60, atk: 40, def: 60, spa: 40, spd: 60, spe: 35 },
		abilities: { 0: "Effect Spore", 1: "Poison Heal", H: "Quick Feet" },
		heightm: 0.4,
		weightkg: 4.5,
		color: "Brown",
		evos: ["Breloom"],
		eggGroups: ["Fairy", "Grass"],
	},
	breloom: {
		num: 286,
		name: "Breloom",
		types: ["Grass", "Fighting"],
		baseStats: { hp: 60, atk: 130, def: 80, spa: 60, spd: 60, spe: 70 },
		abilities: { 0: "Effect Spore", 1: "Poison Heal", H: "Technician" },
		heightm: 1.2,
		weightkg: 39.2,
		color: "Green",
		prevo: "Shroomish",
		evoLevel: 23,
		eggGroups: ["Fairy", "Grass"],
	},
	slakoth: {
		num: 287,
		name: "Slakoth",
		types: ["Normal"],
		baseStats: { hp: 60, atk: 60, def: 60, spa: 35, spd: 35, spe: 30 },
		abilities: { 0: "Truant" },
		heightm: 0.8,
		weightkg: 24,
		color: "Brown",
		evos: ["Vigoroth"],
		eggGroups: ["Field"],
	},
	vigoroth: {
		num: 288,
		name: "Vigoroth",
		types: ["Normal"],
		baseStats: { hp: 80, atk: 80, def: 80, spa: 55, spd: 55, spe: 90 },
		abilities: { 0: "Vital Spirit" },
		heightm: 1.4,
		weightkg: 46.5,
		color: "White",
		prevo: "Slakoth",
		evoLevel: 18,
		evos: ["Slaking"],
		eggGroups: ["Field"],
	},
	slaking: {
		num: 289,
		name: "Slaking",
		types: ["Normal"],
		baseStats: { hp: 150, atk: 160, def: 100, spa: 95, spd: 65, spe: 100 },
		abilities: { 0: "Truant" },
		heightm: 2,
		weightkg: 130.5,
		color: "Brown",
		prevo: "Vigoroth",
		evoLevel: 36,
		eggGroups: ["Field"],
	},
	nincada: {
		num: 290,
		name: "Nincada",
		types: ["Bug", "Ground"],
		baseStats: { hp: 31, atk: 45, def: 90, spa: 30, spd: 30, spe: 40 },
		abilities: { 0: "Compound Eyes", H: "Run Away" },
		heightm: 0.5,
		weightkg: 5.5,
		color: "Gray",
		evos: ["Ninjask", "Shedinja"],
		eggGroups: ["Bug"],
	},
	ninjask: {
		num: 291,
		name: "Ninjask",
		types: ["Bug", "Flying"],
		baseStats: { hp: 61, atk: 90, def: 45, spa: 50, spd: 50, spe: 160 },
		abilities: { 0: "Speed Boost", H: "Infiltrator" },
		heightm: 0.8,
		weightkg: 12,
		color: "Yellow",
		prevo: "Nincada",
		evoLevel: 20,
		eggGroups: ["Bug"],
	},
	shedinja: {
		num: 292,
		name: "Shedinja",
		types: ["Bug", "Ghost"],
		gender: "N",
		baseStats: { hp: 1, atk: 90, def: 45, spa: 30, spd: 30, spe: 40 },
		maxHP: 1,
		abilities: { 0: "Wonder Guard" },
		heightm: 0.8,
		weightkg: 1.2,
		color: "Brown",
		prevo: "Nincada",
		evoLevel: 20,
		eggGroups: ["Mineral"],
	},
	whismur: {
		num: 293,
		name: "Whismur",
		types: ["Normal"],
		baseStats: { hp: 64, atk: 51, def: 23, spa: 51, spd: 23, spe: 28 },
		abilities: { 0: "Soundproof", H: "Rattled" },
		heightm: 0.6,
		weightkg: 16.3,
		color: "Pink",
		evos: ["Loudred"],
		eggGroups: ["Monster", "Field"],
	},
	loudred: {
		num: 294,
		name: "Loudred",
		types: ["Normal"],
		baseStats: { hp: 84, atk: 71, def: 43, spa: 71, spd: 43, spe: 48 },
		abilities: { 0: "Soundproof", H: "Scrappy" },
		heightm: 1,
		weightkg: 40.5,
		color: "Blue",
		prevo: "Whismur",
		evoLevel: 20,
		evos: ["Exploud"],
		eggGroups: ["Monster", "Field"],
	},
	exploud: {
		num: 295,
		name: "Exploud",
		types: ["Normal"],
		baseStats: { hp: 104, atk: 91, def: 63, spa: 91, spd: 73, spe: 68 },
		abilities: { 0: "Soundproof", H: "Scrappy" },
		heightm: 1.5,
		weightkg: 84,
		color: "Blue",
		prevo: "Loudred",
		evoLevel: 40,
		eggGroups: ["Monster", "Field"],
	},
	makuhita: {
		num: 296,
		name: "Makuhita",
		types: ["Fighting"],
		genderRatio: { M: 0.75, F: 0.25 },
		baseStats: { hp: 72, atk: 60, def: 30, spa: 20, spd: 30, spe: 25 },
		abilities: { 0: "Thick Fat", 1: "Guts", H: "Sheer Force" },
		heightm: 1,
		weightkg: 86.4,
		color: "Yellow",
		evos: ["Hariyama"],
		eggGroups: ["Human-Like"],
	},
	hariyama: {
		num: 297,
		name: "Hariyama",
		types: ["Fighting"],
		genderRatio: { M: 0.75, F: 0.25 },
		baseStats: { hp: 144, atk: 120, def: 60, spa: 40, spd: 60, spe: 50 },
		abilities: { 0: "Thick Fat", 1: "Guts", H: "Sheer Force" },
		heightm: 2.3,
		weightkg: 253.8,
		color: "Brown",
		prevo: "Makuhita",
		evoLevel: 24,
		eggGroups: ["Human-Like"],
	},
	azurill: {
		num: 298,
		name: "Azurill",
		types: ["Normal", "Fairy"],
		genderRatio: { M: 0.25, F: 0.75 },
		baseStats: { hp: 50, atk: 20, def: 40, spa: 20, spd: 40, spe: 20 },
		abilities: { 0: "Thick Fat", 1: "Huge Power", H: "Sap Sipper" },
		heightm: 0.2,
		weightkg: 2,
		color: "Blue",
		evos: ["Marill"],
		eggGroups: ["Undiscovered"],
		canHatch: true,
	},
	nosepass: {
		num: 299,
		name: "Nosepass",
		types: ["Rock"],
		baseStats: { hp: 30, atk: 45, def: 135, spa: 45, spd: 90, spe: 30 },
		abilities: { 0: "Sturdy", 1: "Magnet Pull", H: "Sand Force" },
		heightm: 1,
		weightkg: 97,
		color: "Gray",
		evos: ["Probopass"],
		eggGroups: ["Mineral"],
	},
	skitty: {
		num: 300,
		name: "Skitty",
		types: ["Normal"],
		genderRatio: { M: 0.25, F: 0.75 },
		baseStats: { hp: 50, atk: 45, def: 45, spa: 35, spd: 35, spe: 50 },
		abilities: { 0: "Cute Charm", 1: "Normalize", H: "Wonder Skin" },
		heightm: 0.6,
		weightkg: 11,
		color: "Pink",
		evos: ["Delcatty"],
		eggGroups: ["Field", "Fairy"],
	},
	delcatty: {
		num: 301,
		name: "Delcatty",
		types: ["Normal"],
		genderRatio: { M: 0.25, F: 0.75 },
		baseStats: { hp: 70, atk: 65, def: 65, spa: 55, spd: 55, spe: 90 },
		abilities: { 0: "Cute Charm", 1: "Normalize", H: "Wonder Skin" },
		heightm: 1.1,
		weightkg: 32.6,
		color: "Purple",
		prevo: "Skitty",
		evoType: "useItem",
		evoItem: "Moon Stone",
		eggGroups: ["Field", "Fairy"],
	},
	sableye: {
		num: 302,
		name: "Sableye",
		types: ["Dark", "Ghost"],
		baseStats: { hp: 50, atk: 75, def: 75, spa: 65, spd: 65, spe: 50 },
		abilities: { 0: "Keen Eye", 1: "Stall", H: "Prankster" },
		heightm: 0.5,
		weightkg: 11,
		color: "Purple",
		eggGroups: ["Human-Like"],
		otherFormes: ["Sableye-Mega"],
		formeOrder: ["Sableye", "Sableye-Mega"],
	},
	sableyemega: {
		num: 302,
		name: "Sableye-Mega",
		baseSpecies: "Sableye",
		forme: "Mega",
		types: ["Dark", "Ghost"],
		baseStats: { hp: 50, atk: 85, def: 125, spa: 85, spd: 115, spe: 20 },
		abilities: { 0: "Magic Bounce" },
		heightm: 0.5,
		weightkg: 161,
		color: "Purple",
		eggGroups: ["Human-Like"],
		requiredItem: "Sablenite",
	},
	mawile: {
		num: 303,
		name: "Mawile",
		types: ["Steel", "Fairy"],
		baseStats: { hp: 50, atk: 85, def: 85, spa: 55, spd: 55, spe: 50 },
		abilities: { 0: "Hyper Cutter", 1: "Intimidate", H: "Sheer Force" },
		heightm: 0.6,
		weightkg: 11.5,
		color: "Black",
		eggGroups: ["Field", "Fairy"],
		otherFormes: ["Mawile-Mega"],
		formeOrder: ["Mawile", "Mawile-Mega"],
	},
	mawilemega: {
		num: 303,
		name: "Mawile-Mega",
		baseSpecies: "Mawile",
		forme: "Mega",
		types: ["Steel", "Fairy"],
		baseStats: { hp: 50, atk: 105, def: 125, spa: 55, spd: 95, spe: 50 },
		abilities: { 0: "Huge Power" },
		heightm: 1,
		weightkg: 23.5,
		color: "Black",
		eggGroups: ["Field", "Fairy"],
		requiredItem: "Mawilite",
	},
	aron: {
		num: 304,
		name: "Aron",
		types: ["Steel", "Rock"],
		baseStats: { hp: 50, atk: 70, def: 100, spa: 40, spd: 40, spe: 30 },
		abilities: { 0: "Sturdy", 1: "Rock Head", H: "Heavy Metal" },
		heightm: 0.4,
		weightkg: 60,
		color: "Gray",
		evos: ["Lairon"],
		eggGroups: ["Monster"],
	},
	lairon: {
		num: 305,
		name: "Lairon",
		types: ["Steel", "Rock"],
		baseStats: { hp: 60, atk: 90, def: 140, spa: 50, spd: 50, spe: 40 },
		abilities: { 0: "Sturdy", 1: "Rock Head", H: "Heavy Metal" },
		heightm: 0.9,
		weightkg: 120,
		color: "Gray",
		prevo: "Aron",
		evoLevel: 32,
		evos: ["Aggron"],
		eggGroups: ["Monster"],
	},
	aggron: {
		num: 306,
		name: "Aggron",
		types: ["Steel", "Rock"],
		baseStats: { hp: 70, atk: 110, def: 180, spa: 60, spd: 60, spe: 50 },
		abilities: { 0: "Sturdy", 1: "Rock Head", H: "Heavy Metal" },
		heightm: 2.1,
		weightkg: 360,
		color: "Gray",
		prevo: "Lairon",
		evoLevel: 42,
		eggGroups: ["Monster"],
		otherFormes: ["Aggron-Mega"],
		formeOrder: ["Aggron", "Aggron-Mega"],
	},
	aggronmega: {
		num: 306,
		name: "Aggron-Mega",
		baseSpecies: "Aggron",
		forme: "Mega",
		types: ["Steel"],
		baseStats: { hp: 70, atk: 140, def: 230, spa: 60, spd: 80, spe: 50 },
		abilities: { 0: "Filter" },
		heightm: 2.2,
		weightkg: 395,
		color: "Gray",
		eggGroups: ["Monster"],
		requiredItem: "Aggronite",
	},
	meditite: {
		num: 307,
		name: "Meditite",
		types: ["Fighting", "Psychic"],
		baseStats: { hp: 30, atk: 40, def: 55, spa: 40, spd: 55, spe: 60 },
		abilities: { 0: "Pure Power", H: "Telepathy" },
		heightm: 0.6,
		weightkg: 11.2,
		color: "Blue",
		evos: ["Medicham"],
		eggGroups: ["Human-Like"],
	},
	medicham: {
		num: 308,
		name: "Medicham",
		types: ["Fighting", "Psychic"],
		baseStats: { hp: 60, atk: 60, def: 75, spa: 60, spd: 75, spe: 80 },
		abilities: { 0: "Pure Power", H: "Telepathy" },
		heightm: 1.3,
		weightkg: 31.5,
		color: "Red",
		prevo: "Meditite",
		evoLevel: 37,
		eggGroups: ["Human-Like"],
		otherFormes: ["Medicham-Mega"],
		formeOrder: ["Medicham", "Medicham-Mega"],
	},
	medichammega: {
		num: 308,
		name: "Medicham-Mega",
		baseSpecies: "Medicham",
		forme: "Mega",
		types: ["Fighting", "Psychic"],
		baseStats: { hp: 60, atk: 100, def: 85, spa: 80, spd: 85, spe: 100 },
		abilities: { 0: "Pure Power" },
		heightm: 1.3,
		weightkg: 31.5,
		color: "Red",
		eggGroups: ["Human-Like"],
		requiredItem: "Medichamite",
	},
	electrike: {
		num: 309,
		name: "Electrike",
		types: ["Electric"],
		baseStats: { hp: 40, atk: 45, def: 40, spa: 65, spd: 40, spe: 65 },
		abilities: { 0: "Static", 1: "Lightning Rod", H: "Minus" },
		heightm: 0.6,
		weightkg: 15.2,
		color: "Green",
		evos: ["Manectric"],
		eggGroups: ["Field"],
	},
	manectric: {
		num: 310,
		name: "Manectric",
		types: ["Electric"],
		baseStats: { hp: 70, atk: 75, def: 60, spa: 105, spd: 60, spe: 105 },
		abilities: { 0: "Static", 1: "Lightning Rod", H: "Minus" },
		heightm: 1.5,
		weightkg: 40.2,
		color: "Yellow",
		prevo: "Electrike",
		evoLevel: 26,
		eggGroups: ["Field"],
		otherFormes: ["Manectric-Mega"],
		formeOrder: ["Manectric", "Manectric-Mega"],
	},
	manectricmega: {
		num: 310,
		name: "Manectric-Mega",
		baseSpecies: "Manectric",
		forme: "Mega",
		types: ["Electric"],
		baseStats: { hp: 70, atk: 75, def: 80, spa: 135, spd: 80, spe: 135 },
		abilities: { 0: "Intimidate" },
		heightm: 1.8,
		weightkg: 44,
		color: "Yellow",
		eggGroups: ["Field"],
		requiredItem: "Manectite",
	},
	plusle: {
		num: 311,
		name: "Plusle",
		types: ["Electric"],
		baseStats: { hp: 60, atk: 50, def: 40, spa: 85, spd: 75, spe: 95 },
		abilities: { 0: "Plus", H: "Lightning Rod" },
		heightm: 0.4,
		weightkg: 4.2,
		color: "Yellow",
		eggGroups: ["Fairy"],
	},
	minun: {
		num: 312,
		name: "Minun",
		types: ["Electric"],
		baseStats: { hp: 60, atk: 40, def: 50, spa: 75, spd: 85, spe: 95 },
		abilities: { 0: "Minus", H: "Volt Absorb" },
		heightm: 0.4,
		weightkg: 4.2,
		color: "Yellow",
		eggGroups: ["Fairy"],
	},
	volbeat: {
		num: 313,
		name: "Volbeat",
		types: ["Bug"],
		gender: "M",
		baseStats: { hp: 65, atk: 73, def: 75, spa: 47, spd: 85, spe: 85 },
		abilities: { 0: "Illuminate", 1: "Swarm", H: "Prankster" },
		heightm: 0.7,
		weightkg: 17.7,
		color: "Gray",
		eggGroups: ["Bug", "Human-Like"],
	},
	illumise: {
		num: 314,
		name: "Illumise",
		types: ["Bug"],
		gender: "F",
		baseStats: { hp: 65, atk: 47, def: 75, spa: 73, spd: 85, spe: 85 },
		abilities: { 0: "Oblivious", 1: "Tinted Lens", H: "Prankster" },
		heightm: 0.6,
		weightkg: 17.7,
		color: "Purple",
		eggGroups: ["Bug", "Human-Like"],
	},
	roselia: {
		num: 315,
		name: "Roselia",
		types: ["Grass", "Poison"],
		baseStats: { hp: 50, atk: 60, def: 45, spa: 100, spd: 80, spe: 65 },
		abilities: { 0: "Natural Cure", 1: "Poison Point", H: "Leaf Guard" },
		heightm: 0.3,
		weightkg: 2,
		color: "Green",
		prevo: "Budew",
		evoType: "levelFriendship",
		evoCondition: "during the day",
		evos: ["Roserade"],
		eggGroups: ["Fairy", "Grass"],
		canHatch: true,
	},
	gulpin: {
		num: 316,
		name: "Gulpin",
		types: ["Poison"],
		baseStats: { hp: 70, atk: 43, def: 53, spa: 43, spd: 53, spe: 40 },
		abilities: { 0: "Liquid Ooze", 1: "Sticky Hold", H: "Gluttony" },
		heightm: 0.4,
		weightkg: 10.3,
		color: "Green",
		evos: ["Swalot"],
		eggGroups: ["Amorphous"],
	},
	swalot: {
		num: 317,
		name: "Swalot",
		types: ["Poison"],
		baseStats: { hp: 100, atk: 73, def: 83, spa: 73, spd: 83, spe: 55 },
		abilities: { 0: "Liquid Ooze", 1: "Sticky Hold", H: "Gluttony" },
		heightm: 1.7,
		weightkg: 80,
		color: "Purple",
		prevo: "Gulpin",
		evoLevel: 26,
		eggGroups: ["Amorphous"],
	},
	carvanha: {
		num: 318,
		name: "Carvanha",
		types: ["Water", "Dark"],
		baseStats: { hp: 45, atk: 90, def: 20, spa: 65, spd: 20, spe: 65 },
		abilities: { 0: "Rough Skin", H: "Speed Boost" },
		heightm: 0.8,
		weightkg: 20.8,
		color: "Red",
		evos: ["Sharpedo"],
		eggGroups: ["Water 2"],
	},
	sharpedo: {
		num: 319,
		name: "Sharpedo",
		types: ["Water", "Dark"],
		baseStats: { hp: 70, atk: 120, def: 40, spa: 95, spd: 40, spe: 95 },
		abilities: { 0: "Rough Skin", H: "Speed Boost" },
		heightm: 1.8,
		weightkg: 88.8,
		color: "Blue",
		prevo: "Carvanha",
		evoLevel: 30,
		eggGroups: ["Water 2"],
		otherFormes: ["Sharpedo-Mega"],
		formeOrder: ["Sharpedo", "Sharpedo-Mega"],
	},
	sharpedomega: {
		num: 319,
		name: "Sharpedo-Mega",
		baseSpecies: "Sharpedo",
		forme: "Mega",
		types: ["Water", "Dark"],
		baseStats: { hp: 70, atk: 140, def: 70, spa: 110, spd: 65, spe: 105 },
		abilities: { 0: "Strong Jaw" },
		heightm: 2.5,
		weightkg: 130.3,
		color: "Blue",
		eggGroups: ["Water 2"],
		requiredItem: "Sharpedonite",
	},
	wailmer: {
		num: 320,
		name: "Wailmer",
		types: ["Water"],
		baseStats: { hp: 130, atk: 70, def: 35, spa: 70, spd: 35, spe: 60 },
		abilities: { 0: "Water Veil", 1: "Oblivious", H: "Pressure" },
		heightm: 2,
		weightkg: 130,
		color: "Blue",
		evos: ["Wailord"],
		eggGroups: ["Field", "Water 2"],
	},
	wailord: {
		num: 321,
		name: "Wailord",
		types: ["Water"],
		baseStats: { hp: 170, atk: 90, def: 45, spa: 90, spd: 45, spe: 60 },
		abilities: { 0: "Water Veil", 1: "Oblivious", H: "Pressure" },
		heightm: 14.5,
		weightkg: 398,
		color: "Blue",
		prevo: "Wailmer",
		evoLevel: 40,
		eggGroups: ["Field", "Water 2"],
	},
	numel: {
		num: 322,
		name: "Numel",
		types: ["Fire", "Ground"],
		baseStats: { hp: 60, atk: 60, def: 40, spa: 65, spd: 45, spe: 35 },
		abilities: { 0: "Oblivious", 1: "Simple", H: "Own Tempo" },
		heightm: 0.7,
		weightkg: 24,
		color: "Yellow",
		evos: ["Camerupt"],
		eggGroups: ["Field"],
	},
	camerupt: {
		num: 323,
		name: "Camerupt",
		types: ["Fire", "Ground"],
		baseStats: { hp: 70, atk: 100, def: 70, spa: 105, spd: 75, spe: 40 },
		abilities: { 0: "Magma Armor", 1: "Solid Rock", H: "Anger Point" },
		heightm: 1.9,
		weightkg: 220,
		color: "Red",
		prevo: "Numel",
		evoLevel: 33,
		eggGroups: ["Field"],
		otherFormes: ["Camerupt-Mega"],
		formeOrder: ["Camerupt", "Camerupt-Mega"],
	},
	cameruptmega: {
		num: 323,
		name: "Camerupt-Mega",
		baseSpecies: "Camerupt",
		forme: "Mega",
		types: ["Fire", "Ground"],
		baseStats: { hp: 70, atk: 120, def: 100, spa: 145, spd: 105, spe: 20 },
		abilities: { 0: "Sheer Force" },
		heightm: 2.5,
		weightkg: 320.5,
		color: "Red",
		eggGroups: ["Field"],
		requiredItem: "Cameruptite",
	},
	torkoal: {
		num: 324,
		name: "Torkoal",
		types: ["Fire"],
		baseStats: { hp: 70, atk: 85, def: 140, spa: 85, spd: 70, spe: 20 },
		abilities: { 0: "White Smoke", 1: "Drought", H: "Shell Armor" },
		heightm: 0.5,
		weightkg: 80.4,
		color: "Brown",
		eggGroups: ["Field"],
	},
	spoink: {
		num: 325,
		name: "Spoink",
		types: ["Psychic"],
		baseStats: { hp: 60, atk: 25, def: 35, spa: 70, spd: 80, spe: 60 },
		abilities: { 0: "Thick Fat", 1: "Own Tempo", H: "Gluttony" },
		heightm: 0.7,
		weightkg: 30.6,
		color: "Black",
		evos: ["Grumpig"],
		eggGroups: ["Field"],
	},
	grumpig: {
		num: 326,
		name: "Grumpig",
		types: ["Psychic"],
		baseStats: { hp: 80, atk: 45, def: 65, spa: 90, spd: 110, spe: 80 },
		abilities: { 0: "Thick Fat", 1: "Own Tempo", H: "Gluttony" },
		heightm: 0.9,
		weightkg: 71.5,
		color: "Purple",
		prevo: "Spoink",
		evoLevel: 32,
		eggGroups: ["Field"],
	},
	spinda: {
		num: 327,
		name: "Spinda",
		types: ["Normal"],
		baseStats: { hp: 60, atk: 60, def: 60, spa: 60, spd: 60, spe: 60 },
		abilities: { 0: "Own Tempo", 1: "Tangled Feet", H: "Contrary" },
		heightm: 1.1,
		weightkg: 5,
		color: "Brown",
		eggGroups: ["Field", "Human-Like"],
	},
	trapinch: {
		num: 328,
		name: "Trapinch",
		types: ["Ground"],
		baseStats: { hp: 45, atk: 100, def: 45, spa: 45, spd: 45, spe: 10 },
		abilities: { 0: "Hyper Cutter", 1: "Arena Trap", H: "Sheer Force" },
		heightm: 0.7,
		weightkg: 15,
		color: "Brown",
		evos: ["Vibrava"],
		eggGroups: ["Bug", "Dragon"],
	},
	vibrava: {
		num: 329,
		name: "Vibrava",
		types: ["Ground", "Dragon"],
		baseStats: { hp: 50, atk: 70, def: 50, spa: 50, spd: 50, spe: 70 },
		abilities: { 0: "Levitate" },
		heightm: 1.1,
		weightkg: 15.3,
		color: "Green",
		prevo: "Trapinch",
		evoLevel: 35,
		evos: ["Flygon"],
		eggGroups: ["Bug", "Dragon"],
	},
	flygon: {
		num: 330,
		name: "Flygon",
		types: ["Ground", "Dragon"],
		baseStats: { hp: 80, atk: 100, def: 80, spa: 80, spd: 80, spe: 100 },
		abilities: { 0: "Levitate" },
		heightm: 2,
		weightkg: 82,
		color: "Green",
		prevo: "Vibrava",
		evoLevel: 45,
		eggGroups: ["Bug", "Dragon"],
	},
	cacnea: {
		num: 331,
		name: "Cacnea",
		types: ["Grass"],
		baseStats: { hp: 50, atk: 85, def: 40, spa: 85, spd: 40, spe: 35 },
		abilities: { 0: "Sand Veil", H: "Water Absorb" },
		heightm: 0.4,
		weightkg: 51.3,
		color: "Green",
		evos: ["Cacturne"],
		eggGroups: ["Grass", "Human-Like"],
	},
	cacturne: {
		num: 332,
		name: "Cacturne",
		types: ["Grass", "Dark"],
		baseStats: { hp: 70, atk: 115, def: 60, spa: 115, spd: 60, spe: 55 },
		abilities: { 0: "Sand Veil", H: "Water Absorb" },
		heightm: 1.3,
		weightkg: 77.4,
		color: "Green",
		prevo: "Cacnea",
		evoLevel: 32,
		eggGroups: ["Grass", "Human-Like"],
	},
	swablu: {
		num: 333,
		name: "Swablu",
		types: ["Normal", "Flying"],
		baseStats: { hp: 45, atk: 40, def: 60, spa: 40, spd: 75, spe: 50 },
		abilities: { 0: "Natural Cure", H: "Cloud Nine" },
		heightm: 0.4,
		weightkg: 1.2,
		color: "Blue",
		evos: ["Altaria"],
		eggGroups: ["Flying", "Dragon"],
	},
	altaria: {
		num: 334,
		name: "Altaria",
		types: ["Dragon", "Flying"],
		baseStats: { hp: 75, atk: 70, def: 90, spa: 70, spd: 105, spe: 80 },
		abilities: { 0: "Natural Cure", H: "Cloud Nine" },
		heightm: 1.1,
		weightkg: 20.6,
		color: "Blue",
		prevo: "Swablu",
		evoLevel: 35,
		eggGroups: ["Flying", "Dragon"],
		otherFormes: ["Altaria-Mega"],
		formeOrder: ["Altaria", "Altaria-Mega"],
	},
	altariamega: {
		num: 334,
		name: "Altaria-Mega",
		baseSpecies: "Altaria",
		forme: "Mega",
		types: ["Dragon", "Fairy"],
		baseStats: { hp: 75, atk: 110, def: 110, spa: 110, spd: 105, spe: 80 },
		abilities: { 0: "Pixilate" },
		heightm: 1.5,
		weightkg: 20.6,
		color: "Blue",
		eggGroups: ["Flying", "Dragon"],
		requiredItem: "Altarianite",
	},
	zangoose: {
		num: 335,
		name: "Zangoose",
		types: ["Normal"],
		baseStats: { hp: 73, atk: 115, def: 60, spa: 60, spd: 60, spe: 90 },
		abilities: { 0: "Immunity", H: "Toxic Boost" },
		heightm: 1.3,
		weightkg: 40.3,
		color: "White",
		eggGroups: ["Field"],
	},
	seviper: {
		num: 336,
		name: "Seviper",
		types: ["Poison"],
		baseStats: { hp: 73, atk: 100, def: 60, spa: 100, spd: 60, spe: 65 },
		abilities: { 0: "Shed Skin", H: "Infiltrator" },
		heightm: 2.7,
		weightkg: 52.5,
		color: "Black",
		eggGroups: ["Field", "Dragon"],
	},
	lunatone: {
		num: 337,
		name: "Lunatone",
		types: ["Rock", "Psychic"],
		gender: "N",
		baseStats: { hp: 90, atk: 55, def: 65, spa: 95, spd: 85, spe: 70 },
		abilities: { 0: "Levitate" },
		heightm: 1,
		weightkg: 168,
		color: "Yellow",
		eggGroups: ["Mineral"],
	},
	solrock: {
		num: 338,
		name: "Solrock",
		types: ["Rock", "Psychic"],
		gender: "N",
		baseStats: { hp: 90, atk: 95, def: 85, spa: 55, spd: 65, spe: 70 },
		abilities: { 0: "Levitate" },
		heightm: 1.2,
		weightkg: 154,
		color: "Red",
		eggGroups: ["Mineral"],
	},
	barboach: {
		num: 339,
		name: "Barboach",
		types: ["Water", "Ground"],
		baseStats: { hp: 50, atk: 48, def: 43, spa: 46, spd: 41, spe: 60 },
		abilities: { 0: "Oblivious", 1: "Anticipation", H: "Hydration" },
		heightm: 0.4,
		weightkg: 1.9,
		color: "Gray",
		evos: ["Whiscash"],
		eggGroups: ["Water 2"],
	},
	whiscash: {
		num: 340,
		name: "Whiscash",
		types: ["Water", "Ground"],
		baseStats: { hp: 110, atk: 78, def: 73, spa: 76, spd: 71, spe: 60 },
		abilities: { 0: "Oblivious", 1: "Anticipation", H: "Hydration" },
		heightm: 0.9,
		weightkg: 23.6,
		color: "Blue",
		prevo: "Barboach",
		evoLevel: 30,
		eggGroups: ["Water 2"],
	},
	corphish: {
		num: 341,
		name: "Corphish",
		types: ["Water"],
		baseStats: { hp: 43, atk: 80, def: 65, spa: 50, spd: 35, spe: 35 },
		abilities: { 0: "Hyper Cutter", 1: "Shell Armor", H: "Adaptability" },
		heightm: 0.6,
		weightkg: 11.5,
		color: "Red",
		evos: ["Crawdaunt"],
		eggGroups: ["Water 1", "Water 3"],
	},
	crawdaunt: {
		num: 342,
		name: "Crawdaunt",
		types: ["Water", "Dark"],
		baseStats: { hp: 63, atk: 120, def: 85, spa: 90, spd: 55, spe: 55 },
		abilities: { 0: "Hyper Cutter", 1: "Shell Armor", H: "Adaptability" },
		heightm: 1.1,
		weightkg: 32.8,
		color: "Red",
		prevo: "Corphish",
		evoLevel: 30,
		eggGroups: ["Water 1", "Water 3"],
	},
	baltoy: {
		num: 343,
		name: "Baltoy",
		types: ["Ground", "Psychic"],
		gender: "N",
		baseStats: { hp: 40, atk: 40, def: 55, spa: 40, spd: 70, spe: 55 },
		abilities: { 0: "Levitate" },
		heightm: 0.5,
		weightkg: 21.5,
		color: "Brown",
		evos: ["Claydol"],
		eggGroups: ["Mineral"],
	},
	claydol: {
		num: 344,
		name: "Claydol",
		types: ["Ground", "Psychic"],
		gender: "N",
		baseStats: { hp: 60, atk: 70, def: 105, spa: 70, spd: 120, spe: 75 },
		abilities: { 0: "Levitate" },
		heightm: 1.5,
		weightkg: 108,
		color: "Black",
		prevo: "Baltoy",
		evoLevel: 36,
		eggGroups: ["Mineral"],
	},
	lileep: {
		num: 345,
		name: "Lileep",
		types: ["Rock", "Grass"],
		genderRatio: { M: 0.875, F: 0.125 },
		baseStats: { hp: 66, atk: 41, def: 77, spa: 61, spd: 87, spe: 23 },
		abilities: { 0: "Suction Cups", H: "Storm Drain" },
		heightm: 1,
		weightkg: 23.8,
		color: "Purple",
		evos: ["Cradily"],
		eggGroups: ["Water 3"],
	},
	cradily: {
		num: 346,
		name: "Cradily",
		types: ["Rock", "Grass"],
		genderRatio: { M: 0.875, F: 0.125 },
		baseStats: { hp: 86, atk: 81, def: 97, spa: 81, spd: 107, spe: 43 },
		abilities: { 0: "Suction Cups", H: "Storm Drain" },
		heightm: 1.5,
		weightkg: 60.4,
		color: "Green",
		prevo: "Lileep",
		evoLevel: 40,
		eggGroups: ["Water 3"],
	},
	anorith: {
		num: 347,
		name: "Anorith",
		types: ["Rock", "Bug"],
		genderRatio: { M: 0.875, F: 0.125 },
		baseStats: { hp: 45, atk: 95, def: 50, spa: 40, spd: 50, spe: 75 },
		abilities: { 0: "Battle Armor", H: "Swift Swim" },
		heightm: 0.7,
		weightkg: 12.5,
		color: "Gray",
		evos: ["Armaldo"],
		eggGroups: ["Water 3"],
	},
	armaldo: {
		num: 348,
		name: "Armaldo",
		types: ["Rock", "Bug"],
		genderRatio: { M: 0.875, F: 0.125 },
		baseStats: { hp: 75, atk: 125, def: 100, spa: 70, spd: 80, spe: 45 },
		abilities: { 0: "Battle Armor", H: "Swift Swim" },
		heightm: 1.5,
		weightkg: 68.2,
		color: "Gray",
		prevo: "Anorith",
		evoLevel: 40,
		eggGroups: ["Water 3"],
	},
	feebas: {
		num: 349,
		name: "Feebas",
		types: ["Water"],
		baseStats: { hp: 20, atk: 15, def: 20, spa: 10, spd: 55, spe: 80 },
		abilities: { 0: "Swift Swim", 1: "Oblivious", H: "Adaptability" },
		heightm: 0.6,
		weightkg: 7.4,
		color: "Brown",
		evos: ["Milotic"],
		eggGroups: ["Water 1", "Dragon"],
	},
	milotic: {
		num: 350,
		name: "Milotic",
		types: ["Water"],
		baseStats: { hp: 95, atk: 60, def: 79, spa: 100, spd: 125, spe: 81 },
		abilities: { 0: "Marvel Scale", 1: "Competitive", H: "Cute Charm" },
		heightm: 6.2,
		weightkg: 162,
		color: "Pink",
		prevo: "Feebas",
		evoType: "trade",
		evoItem: "Prism Scale",
		eggGroups: ["Water 1", "Dragon"],
	},
	castform: {
		num: 351,
		name: "Castform",
		types: ["Normal"],
		baseStats: { hp: 70, atk: 70, def: 70, spa: 70, spd: 70, spe: 70 },
		abilities: { 0: "Forecast" },
		heightm: 0.3,
		weightkg: 0.8,
		color: "Gray",
		eggGroups: ["Fairy", "Amorphous"],
		otherFormes: ["Castform-Sunny", "Castform-Rainy", "Castform-Snowy"],
		formeOrder: ["Castform", "Castform-Sunny", "Castform-Rainy", "Castform-Snowy"],
	},
	castformsunny: {
		num: 351,
		name: "Castform-Sunny",
		baseSpecies: "Castform",
		forme: "Sunny",
		types: ["Fire"],
		baseStats: { hp: 70, atk: 70, def: 70, spa: 70, spd: 70, spe: 70 },
		abilities: { 0: "Forecast" },
		heightm: 0.3,
		weightkg: 0.8,
		color: "Red",
		eggGroups: ["Fairy", "Amorphous"],
		requiredAbility: "Forecast",
		battleOnly: "Castform",
	},
	castformrainy: {
		num: 351,
		name: "Castform-Rainy",
		baseSpecies: "Castform",
		forme: "Rainy",
		types: ["Water"],
		baseStats: { hp: 70, atk: 70, def: 70, spa: 70, spd: 70, spe: 70 },
		abilities: { 0: "Forecast" },
		heightm: 0.3,
		weightkg: 0.8,
		color: "Blue",
		eggGroups: ["Fairy", "Amorphous"],
		requiredAbility: "Forecast",
		battleOnly: "Castform",
	},
	castformsnowy: {
		num: 351,
		name: "Castform-Snowy",
		baseSpecies: "Castform",
		forme: "Snowy",
		types: ["Ice"],
		baseStats: { hp: 70, atk: 70, def: 70, spa: 70, spd: 70, spe: 70 },
		abilities: { 0: "Forecast" },
		heightm: 0.3,
		weightkg: 0.8,
		color: "White",
		eggGroups: ["Fairy", "Amorphous"],
		requiredAbility: "Forecast",
		battleOnly: "Castform",
	},
	kecleon: {
		num: 352,
		name: "Kecleon",
		types: ["Normal"],
		baseStats: { hp: 60, atk: 90, def: 70, spa: 60, spd: 120, spe: 40 },
		abilities: { 0: "Color Change", H: "Protean" },
		heightm: 1,
		weightkg: 22,
		color: "Green",
		eggGroups: ["Field"],
	},
	shuppet: {
		num: 353,
		name: "Shuppet",
		types: ["Ghost"],
		baseStats: { hp: 44, atk: 75, def: 35, spa: 63, spd: 33, spe: 45 },
		abilities: { 0: "Insomnia", 1: "Frisk", H: "Cursed Body" },
		heightm: 0.6,
		weightkg: 2.3,
		color: "Black",
		evos: ["Banette"],
		eggGroups: ["Amorphous"],
	},
	banette: {
		num: 354,
		name: "Banette",
		types: ["Ghost"],
		baseStats: { hp: 64, atk: 115, def: 65, spa: 83, spd: 63, spe: 65 },
		abilities: { 0: "Insomnia", 1: "Frisk", H: "Cursed Body" },
		heightm: 1.1,
		weightkg: 12.5,
		color: "Black",
		prevo: "Shuppet",
		evoLevel: 37,
		eggGroups: ["Amorphous"],
		otherFormes: ["Banette-Mega"],
		formeOrder: ["Banette", "Banette-Mega"],
	},
	banettemega: {
		num: 354,
		name: "Banette-Mega",
		baseSpecies: "Banette",
		forme: "Mega",
		types: ["Ghost"],
		baseStats: { hp: 64, atk: 165, def: 75, spa: 93, spd: 83, spe: 75 },
		abilities: { 0: "Prankster" },
		heightm: 1.2,
		weightkg: 13,
		color: "Black",
		eggGroups: ["Amorphous"],
		requiredItem: "Banettite",
	},
	duskull: {
		num: 355,
		name: "Duskull",
		types: ["Ghost"],
		baseStats: { hp: 20, atk: 40, def: 90, spa: 30, spd: 90, spe: 25 },
		abilities: { 0: "Levitate", H: "Frisk" },
		heightm: 0.8,
		weightkg: 15,
		color: "Black",
		evos: ["Dusclops"],
		eggGroups: ["Amorphous"],
	},
	dusclops: {
		num: 356,
		name: "Dusclops",
		types: ["Ghost"],
		baseStats: { hp: 40, atk: 70, def: 130, spa: 60, spd: 130, spe: 25 },
		abilities: { 0: "Pressure", H: "Frisk" },
		heightm: 1.6,
		weightkg: 30.6,
		color: "Black",
		prevo: "Duskull",
		evoLevel: 37,
		evos: ["Dusknoir"],
		eggGroups: ["Amorphous"],
	},
	tropius: {
		num: 357,
		name: "Tropius",
		types: ["Grass", "Flying"],
		baseStats: { hp: 99, atk: 68, def: 83, spa: 72, spd: 87, spe: 51 },
		abilities: { 0: "Chlorophyll", 1: "Solar Power", H: "Harvest" },
		heightm: 2,
		weightkg: 100,
		color: "Green",
		eggGroups: ["Monster", "Grass"],
	},
	chimecho: {
		num: 358,
		name: "Chimecho",
		types: ["Psychic"],
		baseStats: { hp: 75, atk: 50, def: 80, spa: 95, spd: 90, spe: 65 },
		abilities: { 0: "Levitate" },
		heightm: 0.6,
		weightkg: 1,
		color: "Blue",
		prevo: "Chingling",
		evoType: "levelFriendship",
		evoCondition: "at night",
		eggGroups: ["Amorphous"],
		canHatch: true,
	},
	absol: {
		num: 359,
		name: "Absol",
		types: ["Dark"],
		baseStats: { hp: 65, atk: 130, def: 60, spa: 75, spd: 60, spe: 75 },
		abilities: { 0: "Pressure", 1: "Super Luck", H: "Justified" },
		heightm: 1.2,
		weightkg: 47,
		color: "White",
		eggGroups: ["Field"],
		otherFormes: ["Absol-Mega"],
		formeOrder: ["Absol", "Absol-Mega"],
	},
	absolmega: {
		num: 359,
		name: "Absol-Mega",
		baseSpecies: "Absol",
		forme: "Mega",
		types: ["Dark"],
		baseStats: { hp: 65, atk: 150, def: 60, spa: 115, spd: 60, spe: 115 },
		abilities: { 0: "Magic Bounce" },
		heightm: 1.2,
		weightkg: 49,
		color: "White",
		eggGroups: ["Field"],
		requiredItem: "Absolite",
	},
	wynaut: {
		num: 360,
		name: "Wynaut",
		types: ["Psychic"],
		baseStats: { hp: 95, atk: 23, def: 48, spa: 23, spd: 48, spe: 23 },
		abilities: { 0: "Shadow Tag", H: "Telepathy" },
		heightm: 0.6,
		weightkg: 14,
		color: "Blue",
		evos: ["Wobbuffet"],
		eggGroups: ["Undiscovered"],
		canHatch: true,
	},
	snorunt: {
		num: 361,
		name: "Snorunt",
		types: ["Ice"],
		baseStats: { hp: 50, atk: 50, def: 50, spa: 50, spd: 50, spe: 50 },
		abilities: { 0: "Inner Focus", 1: "Ice Body", H: "Moody" },
		heightm: 0.7,
		weightkg: 16.8,
		color: "Gray",
		evos: ["Glalie", "Froslass"],
		eggGroups: ["Fairy", "Mineral"],
	},
	glalie: {
		num: 362,
		name: "Glalie",
		types: ["Ice"],
		baseStats: { hp: 80, atk: 80, def: 80, spa: 80, spd: 80, spe: 80 },
		abilities: { 0: "Inner Focus", 1: "Ice Body", H: "Moody" },
		heightm: 1.5,
		weightkg: 256.5,
		color: "Gray",
		prevo: "Snorunt",
		evoLevel: 42,
		eggGroups: ["Fairy", "Mineral"],
		otherFormes: ["Glalie-Mega"],
		formeOrder: ["Glalie", "Glalie-Mega"],
	},
	glaliemega: {
		num: 362,
		name: "Glalie-Mega",
		baseSpecies: "Glalie",
		forme: "Mega",
		types: ["Ice"],
		baseStats: { hp: 80, atk: 120, def: 80, spa: 120, spd: 80, spe: 100 },
		abilities: { 0: "Refrigerate" },
		heightm: 2.1,
		weightkg: 350.2,
		color: "Gray",
		eggGroups: ["Fairy", "Mineral"],
		requiredItem: "Glalitite",
	},
	spheal: {
		num: 363,
		name: "Spheal",
		types: ["Ice", "Water"],
		baseStats: { hp: 70, atk: 40, def: 50, spa: 55, spd: 50, spe: 25 },
		abilities: { 0: "Thick Fat", 1: "Ice Body", H: "Oblivious" },
		heightm: 0.8,
		weightkg: 39.5,
		color: "Blue",
		evos: ["Sealeo"],
		eggGroups: ["Water 1", "Field"],
	},
	sealeo: {
		num: 364,
		name: "Sealeo",
		types: ["Ice", "Water"],
		baseStats: { hp: 90, atk: 60, def: 70, spa: 75, spd: 70, spe: 45 },
		abilities: { 0: "Thick Fat", 1: "Ice Body", H: "Oblivious" },
		heightm: 1.1,
		weightkg: 87.6,
		color: "Blue",
		prevo: "Spheal",
		evoLevel: 32,
		evos: ["Walrein"],
		eggGroups: ["Water 1", "Field"],
	},
	walrein: {
		num: 365,
		name: "Walrein",
		types: ["Ice", "Water"],
		baseStats: { hp: 110, atk: 80, def: 90, spa: 95, spd: 90, spe: 65 },
		abilities: { 0: "Thick Fat", 1: "Ice Body", H: "Oblivious" },
		heightm: 1.4,
		weightkg: 150.6,
		color: "Blue",
		prevo: "Sealeo",
		evoLevel: 44,
		eggGroups: ["Water 1", "Field"],
	},
	clamperl: {
		num: 366,
		name: "Clamperl",
		types: ["Water"],
		baseStats: { hp: 35, atk: 64, def: 85, spa: 74, spd: 55, spe: 32 },
		abilities: { 0: "Shell Armor", H: "Rattled" },
		heightm: 0.4,
		weightkg: 52.5,
		color: "Blue",
		evos: ["Huntail", "Gorebyss"],
		eggGroups: ["Water 1"],
	},
	huntail: {
		num: 367,
		name: "Huntail",
		types: ["Water"],
		baseStats: { hp: 55, atk: 104, def: 105, spa: 94, spd: 75, spe: 52 },
		abilities: { 0: "Swift Swim", H: "Water Veil" },
		heightm: 1.7,
		weightkg: 27,
		color: "Blue",
		prevo: "Clamperl",
		evoType: "trade",
		evoItem: "Deep Sea Tooth",
		eggGroups: ["Water 1"],
	},
	gorebyss: {
		num: 368,
		name: "Gorebyss",
		types: ["Water"],
		baseStats: { hp: 55, atk: 84, def: 105, spa: 114, spd: 75, spe: 52 },
		abilities: { 0: "Swift Swim", H: "Hydration" },
		heightm: 1.8,
		weightkg: 22.6,
		color: "Pink",
		prevo: "Clamperl",
		evoType: "trade",
		evoItem: "Deep Sea Scale",
		eggGroups: ["Water 1"],
	},
	relicanth: {
		num: 369,
		name: "Relicanth",
		types: ["Water", "Rock"],
		genderRatio: { M: 0.875, F: 0.125 },
		baseStats: { hp: 100, atk: 90, def: 130, spa: 45, spd: 65, spe: 55 },
		abilities: { 0: "Swift Swim", 1: "Rock Head", H: "Sturdy" },
		heightm: 1,
		weightkg: 23.4,
		color: "Gray",
		eggGroups: ["Water 1", "Water 2"],
	},
	luvdisc: {
		num: 370,
		name: "Luvdisc",
		types: ["Water"],
		genderRatio: { M: 0.25, F: 0.75 },
		baseStats: { hp: 43, atk: 30, def: 55, spa: 40, spd: 65, spe: 97 },
		abilities: { 0: "Swift Swim", H: "Hydration" },
		heightm: 0.6,
		weightkg: 8.7,
		color: "Pink",
		eggGroups: ["Water 2"],
	},
	bagon: {
		num: 371,
		name: "Bagon",
		types: ["Dragon"],
		baseStats: { hp: 45, atk: 75, def: 60, spa: 40, spd: 30, spe: 50 },
		abilities: { 0: "Rock Head", H: "Sheer Force" },
		heightm: 0.6,
		weightkg: 42.1,
		color: "Blue",
		evos: ["Shelgon"],
		eggGroups: ["Dragon"],
	},
	shelgon: {
		num: 372,
		name: "Shelgon",
		types: ["Dragon"],
		baseStats: { hp: 65, atk: 95, def: 100, spa: 60, spd: 50, spe: 50 },
		abilities: { 0: "Rock Head", H: "Overcoat" },
		heightm: 1.1,
		weightkg: 110.5,
		color: "White",
		prevo: "Bagon",
		evoLevel: 30,
		evos: ["Salamence"],
		eggGroups: ["Dragon"],
	},
	salamence: {
		num: 373,
		name: "Salamence",
		types: ["Dragon", "Flying"],
		baseStats: { hp: 95, atk: 135, def: 80, spa: 110, spd: 80, spe: 100 },
		abilities: { 0: "Intimidate", H: "Moxie" },
		heightm: 1.5,
		weightkg: 102.6,
		color: "Blue",
		prevo: "Shelgon",
		evoLevel: 50,
		eggGroups: ["Dragon"],
		otherFormes: ["Salamence-Mega"],
		formeOrder: ["Salamence", "Salamence-Mega"],
	},
	salamencemega: {
		num: 373,
		name: "Salamence-Mega",
		baseSpecies: "Salamence",
		forme: "Mega",
		types: ["Dragon", "Flying"],
		baseStats: { hp: 95, atk: 145, def: 130, spa: 120, spd: 90, spe: 120 },
		abilities: { 0: "Aerilate" },
		heightm: 1.8,
		weightkg: 112.6,
		color: "Blue",
		eggGroups: ["Dragon"],
		requiredItem: "Salamencite",
	},
	beldum: {
		num: 374,
		name: "Beldum",
		types: ["Steel", "Psychic"],
		gender: "N",
		baseStats: { hp: 40, atk: 55, def: 80, spa: 35, spd: 60, spe: 30 },
		abilities: { 0: "Clear Body", H: "Light Metal" },
		heightm: 0.6,
		weightkg: 95.2,
		color: "Blue",
		evos: ["Metang"],
		eggGroups: ["Mineral"],
	},
	metang: {
		num: 375,
		name: "Metang",
		types: ["Steel", "Psychic"],
		gender: "N",
		baseStats: { hp: 60, atk: 75, def: 100, spa: 55, spd: 80, spe: 50 },
		abilities: { 0: "Clear Body", H: "Light Metal" },
		heightm: 1.2,
		weightkg: 202.5,
		color: "Blue",
		prevo: "Beldum",
		evoLevel: 20,
		evos: ["Metagross"],
		eggGroups: ["Mineral"],
	},
	metagross: {
		num: 376,
		name: "Metagross",
		types: ["Steel", "Psychic"],
		gender: "N",
		baseStats: { hp: 80, atk: 135, def: 130, spa: 95, spd: 90, spe: 70 },
		abilities: { 0: "Clear Body", H: "Light Metal" },
		heightm: 1.6,
		weightkg: 550,
		color: "Blue",
		prevo: "Metang",
		evoLevel: 45,
		eggGroups: ["Mineral"],
		otherFormes: ["Metagross-Mega"],
		formeOrder: ["Metagross", "Metagross-Mega"],
	},
	metagrossmega: {
		num: 376,
		name: "Metagross-Mega",
		baseSpecies: "Metagross",
		forme: "Mega",
		types: ["Steel", "Psychic"],
		gender: "N",
		baseStats: { hp: 80, atk: 145, def: 150, spa: 105, spd: 110, spe: 110 },
		abilities: { 0: "Tough Claws" },
		heightm: 2.5,
		weightkg: 942.9,
		color: "Blue",
		eggGroups: ["Mineral"],
		requiredItem: "Metagrossite",
	},
	regirock: {
		num: 377,
		name: "Regirock",
		types: ["Rock"],
		gender: "N",
		baseStats: { hp: 80, atk: 100, def: 200, spa: 50, spd: 100, spe: 50 },
		abilities: { 0: "Clear Body", H: "Sturdy" },
		heightm: 1.7,
		weightkg: 230,
		color: "Brown",
		eggGroups: ["Undiscovered"],
	},
	regice: {
		num: 378,
		name: "Regice",
		types: ["Ice"],
		gender: "N",
		baseStats: { hp: 80, atk: 50, def: 100, spa: 100, spd: 200, spe: 50 },
		abilities: { 0: "Clear Body", H: "Ice Body" },
		heightm: 1.8,
		weightkg: 175,
		color: "Blue",
		eggGroups: ["Undiscovered"],
	},
	registeel: {
		num: 379,
		name: "Registeel",
		types: ["Steel"],
		gender: "N",
		baseStats: { hp: 80, atk: 75, def: 150, spa: 75, spd: 150, spe: 50 },
		abilities: { 0: "Clear Body", H: "Light Metal" },
		heightm: 1.9,
		weightkg: 205,
		color: "Gray",
		eggGroups: ["Undiscovered"],
	},
	latias: {
		num: 380,
		name: "Latias",
		types: ["Dragon", "Psychic"],
		gender: "F",
		baseStats: { hp: 80, atk: 80, def: 90, spa: 110, spd: 130, spe: 110 },
		abilities: { 0: "Levitate" },
		heightm: 1.4,
		weightkg: 40,
		color: "Red",
		eggGroups: ["Undiscovered"],
		otherFormes: ["Latias-Mega"],
		formeOrder: ["Latias", "Latias-Mega"],
	},
	latiasmega: {
		num: 380,
		name: "Latias-Mega",
		baseSpecies: "Latias",
		forme: "Mega",
		types: ["Dragon", "Psychic"],
		gender: "F",
		baseStats: { hp: 80, atk: 100, def: 120, spa: 140, spd: 150, spe: 110 },
		abilities: { 0: "Levitate" },
		heightm: 1.8,
		weightkg: 52,
		color: "Purple",
		eggGroups: ["Undiscovered"],
		requiredItem: "Latiasite",
	},
	latios: {
		num: 381,
		name: "Latios",
		types: ["Dragon", "Psychic"],
		gender: "M",
		baseStats: { hp: 80, atk: 90, def: 80, spa: 130, spd: 110, spe: 110 },
		abilities: { 0: "Levitate" },
		heightm: 2,
		weightkg: 60,
		color: "Blue",
		eggGroups: ["Undiscovered"],
		otherFormes: ["Latios-Mega"],
		formeOrder: ["Latios", "Latios-Mega"],
	},
	latiosmega: {
		num: 381,
		name: "Latios-Mega",
		baseSpecies: "Latios",
		forme: "Mega",
		types: ["Dragon", "Psychic"],
		gender: "M",
		baseStats: { hp: 80, atk: 130, def: 100, spa: 160, spd: 120, spe: 110 },
		abilities: { 0: "Levitate" },
		heightm: 2.3,
		weightkg: 70,
		color: "Purple",
		eggGroups: ["Undiscovered"],
		requiredItem: "Latiosite",
	},
	kyogre: {
		num: 382,
		name: "Kyogre",
		types: ["Water"],
		gender: "N",
		baseStats: { hp: 100, atk: 100, def: 90, spa: 150, spd: 140, spe: 90 },
		abilities: { 0: "Drizzle" },
		heightm: 4.5,
		weightkg: 352,
		color: "Blue",
		eggGroups: ["Undiscovered"],
		otherFormes: ["Kyogre-Primal"],
		formeOrder: ["Kyogre", "Kyogre-Primal"],
	},
	kyogreprimal: {
		num: 382,
		name: "Kyogre-Primal",
		baseSpecies: "Kyogre",
		forme: "Primal",
		types: ["Water"],
		gender: "N",
		baseStats: { hp: 100, atk: 150, def: 90, spa: 180, spd: 160, spe: 90 },
		abilities: { 0: "Primordial Sea" },
		heightm: 9.8,
		weightkg: 430,
		color: "Blue",
		eggGroups: ["Undiscovered"],
		requiredItem: "Blue Orb",
	},
	groudon: {
		num: 383,
		name: "Groudon",
		types: ["Ground"],
		gender: "N",
		baseStats: { hp: 100, atk: 150, def: 140, spa: 100, spd: 90, spe: 90 },
		abilities: { 0: "Drought" },
		heightm: 3.5,
		weightkg: 950,
		color: "Red",
		eggGroups: ["Undiscovered"],
		otherFormes: ["Groudon-Primal"],
		formeOrder: ["Groudon", "Groudon-Primal"],
	},
	groudonprimal: {
		num: 383,
		name: "Groudon-Primal",
		baseSpecies: "Groudon",
		forme: "Primal",
		types: ["Ground", "Fire"],
		gender: "N",
		baseStats: { hp: 100, atk: 180, def: 160, spa: 150, spd: 90, spe: 90 },
		abilities: { 0: "Desolate Land" },
		heightm: 5,
		weightkg: 999.7,
		color: "Red",
		eggGroups: ["Undiscovered"],
		requiredItem: "Red Orb",
	},
	rayquaza: {
		num: 384,
		name: "Rayquaza",
		types: ["Dragon", "Flying"],
		gender: "N",
		baseStats: { hp: 105, atk: 150, def: 90, spa: 150, spd: 90, spe: 95 },
		abilities: { 0: "Air Lock" },
		heightm: 7,
		weightkg: 206.5,
		color: "Green",
		eggGroups: ["Undiscovered"],
		otherFormes: ["Rayquaza-Mega"],
		formeOrder: ["Rayquaza", "Rayquaza-Mega"],
	},
	rayquazamega: {
		num: 384,
		name: "Rayquaza-Mega",
		baseSpecies: "Rayquaza",
		forme: "Mega",
		types: ["Dragon", "Flying"],
		gender: "N",
		baseStats: { hp: 105, atk: 180, def: 100, spa: 180, spd: 100, spe: 115 },
		abilities: { 0: "Delta Stream" },
		heightm: 10.8,
		weightkg: 392,
		color: "Green",
		eggGroups: ["Undiscovered"],
		requiredMove: "Dragon Ascent",
	},
	jirachi: {
		num: 385,
		name: "Jirachi",
		types: ["Steel", "Psychic"],
		gender: "N",
		baseStats: { hp: 100, atk: 100, def: 100, spa: 100, spd: 100, spe: 100 },
		abilities: { 0: "Serene Grace" },
		heightm: 0.3,
		weightkg: 1.1,
		color: "Yellow",
		eggGroups: ["Undiscovered"],
	},
	deoxys: {
		num: 386,
		name: "Deoxys",
		baseForme: "Normal",
		types: ["Psychic"],
		gender: "N",
		baseStats: { hp: 50, atk: 150, def: 50, spa: 150, spd: 50, spe: 150 },
		abilities: { 0: "Pressure" },
		heightm: 1.7,
		weightkg: 60.8,
		color: "Red",
		eggGroups: ["Undiscovered"],
		otherFormes: ["Deoxys-Attack", "Deoxys-Defense", "Deoxys-Speed"],
		formeOrder: ["Deoxys", "Deoxys-Attack", "Deoxys-Defense", "Deoxys-Speed"],
	},
	deoxysattack: {
		num: 386,
		name: "Deoxys-Attack",
		baseSpecies: "Deoxys",
		forme: "Attack",
		types: ["Psychic"],
		gender: "N",
		baseStats: { hp: 50, atk: 180, def: 20, spa: 180, spd: 20, spe: 150 },
		abilities: { 0: "Pressure" },
		heightm: 1.7,
		weightkg: 60.8,
		color: "Red",
		eggGroups: ["Undiscovered"],
		changesFrom: "Deoxys",
	},
	deoxysdefense: {
		num: 386,
		name: "Deoxys-Defense",
		baseSpecies: "Deoxys",
		forme: "Defense",
		types: ["Psychic"],
		gender: "N",
		baseStats: { hp: 50, atk: 70, def: 160, spa: 70, spd: 160, spe: 90 },
		abilities: { 0: "Pressure" },
		heightm: 1.7,
		weightkg: 60.8,
		color: "Red",
		eggGroups: ["Undiscovered"],
		changesFrom: "Deoxys",
	},
	deoxysspeed: {
		num: 386,
		name: "Deoxys-Speed",
		baseSpecies: "Deoxys",
		forme: "Speed",
		types: ["Psychic"],
		gender: "N",
		baseStats: { hp: 50, atk: 95, def: 90, spa: 95, spd: 90, spe: 180 },
		abilities: { 0: "Pressure" },
		heightm: 1.7,
		weightkg: 60.8,
		color: "Red",
		eggGroups: ["Undiscovered"],
		changesFrom: "Deoxys",
	},
	turtwig: {
		num: 387,
		name: "Turtwig",
		types: ["Grass"],
		genderRatio: { M: 0.875, F: 0.125 },
		baseStats: { hp: 55, atk: 68, def: 64, spa: 45, spd: 55, spe: 31 },
		abilities: { 0: "Overgrow", H: "Shell Armor" },
		heightm: 0.4,
		weightkg: 10.2,
		color: "Green",
		evos: ["Grotle"],
		eggGroups: ["Monster", "Grass"],
	},
	grotle: {
		num: 388,
		name: "Grotle",
		types: ["Grass"],
		genderRatio: { M: 0.875, F: 0.125 },
		baseStats: { hp: 75, atk: 89, def: 85, spa: 55, spd: 65, spe: 36 },
		abilities: { 0: "Overgrow", H: "Shell Armor" },
		heightm: 1.1,
		weightkg: 97,
		color: "Green",
		prevo: "Turtwig",
		evoLevel: 18,
		evos: ["Torterra"],
		eggGroups: ["Monster", "Grass"],
	},
	torterra: {
		num: 389,
		name: "Torterra",
		types: ["Grass", "Ground"],
		genderRatio: { M: 0.875, F: 0.125 },
		baseStats: { hp: 95, atk: 109, def: 105, spa: 75, spd: 85, spe: 56 },
		abilities: { 0: "Overgrow", H: "Shell Armor" },
		heightm: 2.2,
		weightkg: 310,
		color: "Green",
		prevo: "Grotle",
		evoLevel: 32,
		eggGroups: ["Monster", "Grass"],
	},
	chimchar: {
		num: 390,
		name: "Chimchar",
		types: ["Fire"],
		genderRatio: { M: 0.875, F: 0.125 },
		baseStats: { hp: 44, atk: 58, def: 44, spa: 58, spd: 44, spe: 61 },
		abilities: { 0: "Blaze", H: "Iron Fist" },
		heightm: 0.5,
		weightkg: 6.2,
		color: "Brown",
		evos: ["Monferno"],
		eggGroups: ["Field", "Human-Like"],
	},
	monferno: {
		num: 391,
		name: "Monferno",
		types: ["Fire", "Fighting"],
		genderRatio: { M: 0.875, F: 0.125 },
		baseStats: { hp: 64, atk: 78, def: 52, spa: 78, spd: 52, spe: 81 },
		abilities: { 0: "Blaze", H: "Iron Fist" },
		heightm: 0.9,
		weightkg: 22,
		color: "Brown",
		prevo: "Chimchar",
		evoLevel: 14,
		evos: ["Infernape"],
		eggGroups: ["Field", "Human-Like"],
	},
	infernape: {
		num: 392,
		name: "Infernape",
		types: ["Fire", "Fighting"],
		genderRatio: { M: 0.875, F: 0.125 },
		baseStats: { hp: 76, atk: 104, def: 71, spa: 104, spd: 71, spe: 108 },
		abilities: { 0: "Blaze", H: "Iron Fist" },
		heightm: 1.2,
		weightkg: 55,
		color: "Brown",
		prevo: "Monferno",
		evoLevel: 36,
		eggGroups: ["Field", "Human-Like"],
	},
	piplup: {
		num: 393,
		name: "Piplup",
		types: ["Water"],
		genderRatio: { M: 0.875, F: 0.125 },
		baseStats: { hp: 53, atk: 51, def: 53, spa: 61, spd: 56, spe: 40 },
		abilities: { 0: "Torrent", H: "Defiant" },
		heightm: 0.4,
		weightkg: 5.2,
		color: "Blue",
		evos: ["Prinplup"],
		eggGroups: ["Water 1", "Field"],
	},
	prinplup: {
		num: 394,
		name: "Prinplup",
		types: ["Water"],
		genderRatio: { M: 0.875, F: 0.125 },
		baseStats: { hp: 64, atk: 66, def: 68, spa: 81, spd: 76, spe: 50 },
		abilities: { 0: "Torrent", H: "Defiant" },
		heightm: 0.8,
		weightkg: 23,
		color: "Blue",
		prevo: "Piplup",
		evoLevel: 16,
		evos: ["Empoleon"],
		eggGroups: ["Water 1", "Field"],
	},
	empoleon: {
		num: 395,
		name: "Empoleon",
		types: ["Water", "Steel"],
		genderRatio: { M: 0.875, F: 0.125 },
		baseStats: { hp: 84, atk: 86, def: 88, spa: 111, spd: 101, spe: 60 },
		abilities: { 0: "Torrent", H: "Defiant" },
		heightm: 1.7,
		weightkg: 84.5,
		color: "Blue",
		prevo: "Prinplup",
		evoLevel: 36,
		eggGroups: ["Water 1", "Field"],
	},
	starly: {
		num: 396,
		name: "Starly",
		types: ["Normal", "Flying"],
		baseStats: { hp: 40, atk: 55, def: 30, spa: 30, spd: 30, spe: 60 },
		abilities: { 0: "Keen Eye", H: "Reckless" },
		heightm: 0.3,
		weightkg: 2,
		color: "Brown",
		evos: ["Staravia"],
		eggGroups: ["Flying"],
	},
	staravia: {
		num: 397,
		name: "Staravia",
		types: ["Normal", "Flying"],
		baseStats: { hp: 55, atk: 75, def: 50, spa: 40, spd: 40, spe: 80 },
		abilities: { 0: "Intimidate", H: "Reckless" },
		heightm: 0.6,
		weightkg: 15.5,
		color: "Brown",
		prevo: "Starly",
		evoLevel: 14,
		evos: ["Staraptor"],
		eggGroups: ["Flying"],
	},
	staraptor: {
		num: 398,
		name: "Staraptor",
		types: ["Normal", "Flying"],
		baseStats: { hp: 85, atk: 120, def: 70, spa: 50, spd: 60, spe: 100 },
		abilities: { 0: "Intimidate", H: "Reckless" },
		heightm: 1.2,
		weightkg: 24.9,
		color: "Brown",
		prevo: "Staravia",
		evoLevel: 34,
		eggGroups: ["Flying"],
	},
	bidoof: {
		num: 399,
		name: "Bidoof",
		types: ["Normal"],
		baseStats: { hp: 59, atk: 45, def: 40, spa: 35, spd: 40, spe: 31 },
		abilities: { 0: "Simple", 1: "Unaware", H: "Moody" },
		heightm: 0.5,
		weightkg: 20,
		color: "Brown",
		evos: ["Bibarel"],
		eggGroups: ["Water 1", "Field"],
	},
	bibarel: {
		num: 400,
		name: "Bibarel",
		types: ["Normal", "Water"],
		baseStats: { hp: 79, atk: 85, def: 60, spa: 55, spd: 60, spe: 71 },
		abilities: { 0: "Simple", 1: "Unaware", H: "Moody" },
		heightm: 1,
		weightkg: 31.5,
		color: "Brown",
		prevo: "Bidoof",
		evoLevel: 15,
		eggGroups: ["Water 1", "Field"],
	},
	kricketot: {
		num: 401,
		name: "Kricketot",
		types: ["Bug"],
		baseStats: { hp: 37, atk: 25, def: 41, spa: 25, spd: 41, spe: 25 },
		abilities: { 0: "Shed Skin", H: "Run Away" },
		heightm: 0.3,
		weightkg: 2.2,
		color: "Red",
		evos: ["Kricketune"],
		eggGroups: ["Bug"],
	},
	kricketune: {
		num: 402,
		name: "Kricketune",
		types: ["Bug"],
		baseStats: { hp: 77, atk: 85, def: 51, spa: 55, spd: 51, spe: 65 },
		abilities: { 0: "Swarm", H: "Technician" },
		heightm: 1,
		weightkg: 25.5,
		color: "Red",
		prevo: "Kricketot",
		evoLevel: 10,
		eggGroups: ["Bug"],
	},
	shinx: {
		num: 403,
		name: "Shinx",
		types: ["Electric"],
		baseStats: { hp: 45, atk: 65, def: 34, spa: 40, spd: 34, spe: 45 },
		abilities: { 0: "Rivalry", 1: "Intimidate", H: "Guts" },
		heightm: 0.5,
		weightkg: 9.5,
		color: "Blue",
		evos: ["Luxio"],
		eggGroups: ["Field"],
	},
	luxio: {
		num: 404,
		name: "Luxio",
		types: ["Electric"],
		baseStats: { hp: 60, atk: 85, def: 49, spa: 60, spd: 49, spe: 60 },
		abilities: { 0: "Rivalry", 1: "Intimidate", H: "Guts" },
		heightm: 0.9,
		weightkg: 30.5,
		color: "Blue",
		prevo: "Shinx",
		evoLevel: 15,
		evos: ["Luxray"],
		eggGroups: ["Field"],
	},
	luxray: {
		num: 405,
		name: "Luxray",
		types: ["Electric"],
		baseStats: { hp: 80, atk: 120, def: 79, spa: 95, spd: 79, spe: 70 },
		abilities: { 0: "Rivalry", 1: "Intimidate", H: "Guts" },
		heightm: 1.4,
		weightkg: 42,
		color: "Blue",
		prevo: "Luxio",
		evoLevel: 30,
		eggGroups: ["Field"],
	},
	budew: {
		num: 406,
		name: "Budew",
		types: ["Grass", "Poison"],
		baseStats: { hp: 40, atk: 30, def: 35, spa: 50, spd: 70, spe: 55 },
		abilities: { 0: "Natural Cure", 1: "Poison Point", H: "Leaf Guard" },
		heightm: 0.2,
		weightkg: 1.2,
		color: "Green",
		evos: ["Roselia"],
		eggGroups: ["Undiscovered"],
		canHatch: true,
	},
	roserade: {
		num: 407,
		name: "Roserade",
		types: ["Grass", "Poison"],
		baseStats: { hp: 60, atk: 70, def: 65, spa: 125, spd: 105, spe: 90 },
		abilities: { 0: "Natural Cure", 1: "Poison Point", H: "Technician" },
		heightm: 0.9,
		weightkg: 14.5,
		color: "Green",
		prevo: "Roselia",
		evoType: "useItem",
		evoItem: "Shiny Stone",
		eggGroups: ["Fairy", "Grass"],
	},
	cranidos: {
		num: 408,
		name: "Cranidos",
		types: ["Rock"],
		genderRatio: { M: 0.875, F: 0.125 },
		baseStats: { hp: 67, atk: 125, def: 40, spa: 30, spd: 30, spe: 58 },
		abilities: { 0: "Mold Breaker", H: "Sheer Force" },
		heightm: 0.9,
		weightkg: 31.5,
		color: "Blue",
		evos: ["Rampardos"],
		eggGroups: ["Monster"],
	},
	rampardos: {
		num: 409,
		name: "Rampardos",
		types: ["Rock"],
		genderRatio: { M: 0.875, F: 0.125 },
		baseStats: { hp: 97, atk: 165, def: 60, spa: 65, spd: 50, spe: 58 },
		abilities: { 0: "Mold Breaker", H: "Sheer Force" },
		heightm: 1.6,
		weightkg: 102.5,
		color: "Blue",
		prevo: "Cranidos",
		evoLevel: 30,
		eggGroups: ["Monster"],
	},
	shieldon: {
		num: 410,
		name: "Shieldon",
		types: ["Rock", "Steel"],
		genderRatio: { M: 0.875, F: 0.125 },
		baseStats: { hp: 30, atk: 42, def: 118, spa: 42, spd: 88, spe: 30 },
		abilities: { 0: "Sturdy", H: "Soundproof" },
		heightm: 0.5,
		weightkg: 57,
		color: "Gray",
		evos: ["Bastiodon"],
		eggGroups: ["Monster"],
	},
	bastiodon: {
		num: 411,
		name: "Bastiodon",
		types: ["Rock", "Steel"],
		genderRatio: { M: 0.875, F: 0.125 },
		baseStats: { hp: 60, atk: 52, def: 168, spa: 47, spd: 138, spe: 30 },
		abilities: { 0: "Sturdy", H: "Soundproof" },
		heightm: 1.3,
		weightkg: 149.5,
		color: "Gray",
		prevo: "Shieldon",
		evoLevel: 30,
		eggGroups: ["Monster"],
	},
	burmy: {
		num: 412,
		name: "Burmy",
		baseForme: "Plant",
		types: ["Bug"],
		baseStats: { hp: 40, atk: 29, def: 45, spa: 29, spd: 45, spe: 36 },
		abilities: { 0: "Shed Skin", H: "Overcoat" },
		heightm: 0.2,
		weightkg: 3.4,
		color: "Green",
		evos: ["Wormadam", "Wormadam-Sandy", "Wormadam-Trash", "Mothim"],
		eggGroups: ["Bug"],
		cosmeticFormes: ["Burmy-Sandy", "Burmy-Trash"],
		formeOrder: ["Burmy", "Burmy-Sandy", "Burmy-Trash"],
	},
	wormadam: {
		num: 413,
		name: "Wormadam",
		baseForme: "Plant",
		types: ["Bug", "Grass"],
		gender: "F",
		baseStats: { hp: 60, atk: 59, def: 85, spa: 79, spd: 105, spe: 36 },
		abilities: { 0: "Anticipation", H: "Overcoat" },
		heightm: 0.5,
		weightkg: 6.5,
		color: "Green",
		prevo: "Burmy",
		evoLevel: 20,
		eggGroups: ["Bug"],
		otherFormes: ["Wormadam-Sandy", "Wormadam-Trash"],
		formeOrder: ["Wormadam", "Wormadam-Sandy", "Wormadam-Trash"],
	},
	wormadamsandy: {
		num: 413,
		name: "Wormadam-Sandy",
		baseSpecies: "Wormadam",
		forme: "Sandy",
		types: ["Bug", "Ground"],
		gender: "F",
		baseStats: { hp: 60, atk: 79, def: 105, spa: 59, spd: 85, spe: 36 },
		abilities: { 0: "Anticipation", H: "Overcoat" },
		heightm: 0.5,
		weightkg: 6.5,
		color: "Brown",
		prevo: "Burmy",
		evoLevel: 20,
		eggGroups: ["Bug"],
	},
	wormadamtrash: {
		num: 413,
		name: "Wormadam-Trash",
		baseSpecies: "Wormadam",
		forme: "Trash",
		types: ["Bug", "Steel"],
		gender: "F",
		baseStats: { hp: 60, atk: 69, def: 95, spa: 69, spd: 95, spe: 36 },
		abilities: { 0: "Anticipation", H: "Overcoat" },
		heightm: 0.5,
		weightkg: 6.5,
		color: "Red",
		prevo: "Burmy",
		evoLevel: 20,
		eggGroups: ["Bug"],
	},
	mothim: {
		num: 414,
		name: "Mothim",
		types: ["Bug", "Flying"],
		gender: "M",
		baseStats: { hp: 70, atk: 94, def: 50, spa: 94, spd: 50, spe: 66 },
		abilities: { 0: "Swarm", H: "Tinted Lens" },
		heightm: 0.9,
		weightkg: 23.3,
		color: "Yellow",
		prevo: "Burmy",
		evoLevel: 20,
		eggGroups: ["Bug"],
	},
	combee: {
		num: 415,
		name: "Combee",
		types: ["Bug", "Flying"],
		genderRatio: { M: 0.875, F: 0.125 },
		baseStats: { hp: 30, atk: 30, def: 42, spa: 30, spd: 42, spe: 70 },
		abilities: { 0: "Honey Gather", H: "Hustle" },
		heightm: 0.3,
		weightkg: 5.5,
		color: "Yellow",
		evos: ["Vespiquen"],
		eggGroups: ["Bug"],
	},
	vespiquen: {
		num: 416,
		name: "Vespiquen",
		types: ["Bug", "Flying"],
		gender: "F",
		baseStats: { hp: 70, atk: 80, def: 102, spa: 80, spd: 102, spe: 40 },
		abilities: { 0: "Pressure", H: "Unnerve" },
		heightm: 1.2,
		weightkg: 38.5,
		color: "Yellow",
		prevo: "Combee",
		evoLevel: 21,
		eggGroups: ["Bug"],
	},
	pachirisu: {
		num: 417,
		name: "Pachirisu",
		types: ["Electric"],
		baseStats: { hp: 60, atk: 45, def: 70, spa: 45, spd: 90, spe: 95 },
		abilities: { 0: "Run Away", 1: "Pickup", H: "Volt Absorb" },
		heightm: 0.4,
		weightkg: 3.9,
		color: "White",
		eggGroups: ["Field", "Fairy"],
	},
	buizel: {
		num: 418,
		name: "Buizel",
		types: ["Water"],
		baseStats: { hp: 55, atk: 65, def: 35, spa: 60, spd: 30, spe: 85 },
		abilities: { 0: "Swift Swim", H: "Water Veil" },
		heightm: 0.7,
		weightkg: 29.5,
		color: "Brown",
		evos: ["Floatzel"],
		eggGroups: ["Water 1", "Field"],
	},
	floatzel: {
		num: 419,
		name: "Floatzel",
		types: ["Water"],
		baseStats: { hp: 85, atk: 105, def: 55, spa: 85, spd: 50, spe: 115 },
		abilities: { 0: "Swift Swim", H: "Water Veil" },
		heightm: 1.1,
		weightkg: 33.5,
		color: "Brown",
		prevo: "Buizel",
		evoLevel: 26,
		eggGroups: ["Water 1", "Field"],
	},
	cherubi: {
		num: 420,
		name: "Cherubi",
		types: ["Grass"],
		baseStats: { hp: 45, atk: 35, def: 45, spa: 62, spd: 53, spe: 35 },
		abilities: { 0: "Chlorophyll" },
		heightm: 0.4,
		weightkg: 3.3,
		color: "Pink",
		evos: ["Cherrim"],
		eggGroups: ["Fairy", "Grass"],
	},
	cherrim: {
		num: 421,
		name: "Cherrim",
		baseForme: "Overcast",
		types: ["Grass"],
		baseStats: { hp: 70, atk: 60, def: 70, spa: 87, spd: 78, spe: 85 },
		abilities: { 0: "Flower Gift" },
		heightm: 0.5,
		weightkg: 9.3,
		color: "Purple",
		prevo: "Cherubi",
		evoLevel: 25,
		eggGroups: ["Fairy", "Grass"],
		otherFormes: ["Cherrim-Sunshine"],
		formeOrder: ["Cherrim", "Cherrim-Sunshine"],
	},
	cherrimsunshine: {
		num: 421,
		name: "Cherrim-Sunshine",
		baseSpecies: "Cherrim",
		forme: "Sunshine",
		types: ["Grass"],
		baseStats: { hp: 70, atk: 60, def: 70, spa: 87, spd: 78, spe: 85 },
		abilities: { 0: "Flower Gift" },
		heightm: 0.5,
		weightkg: 9.3,
		color: "Pink",
		eggGroups: ["Fairy", "Grass"],
		requiredAbility: "Flower Gift",
		battleOnly: "Cherrim",
	},
	shellos: {
		num: 422,
		name: "Shellos",
		baseForme: "West",
		types: ["Water"],
		baseStats: { hp: 76, atk: 48, def: 48, spa: 57, spd: 62, spe: 34 },
		abilities: { 0: "Sticky Hold", 1: "Storm Drain", H: "Sand Force" },
		heightm: 0.3,
		weightkg: 6.3,
		color: "Purple",
		evos: ["Gastrodon"],
		eggGroups: ["Water 1", "Amorphous"],
		cosmeticFormes: ["Shellos-East"],
		formeOrder: ["Shellos", "Shellos-East"],
	},
	gastrodon: {
		num: 423,
		name: "Gastrodon",
		baseForme: "West",
		types: ["Water", "Ground"],
		baseStats: { hp: 111, atk: 83, def: 68, spa: 92, spd: 82, spe: 39 },
		abilities: { 0: "Sticky Hold", 1: "Storm Drain", H: "Sand Force" },
		heightm: 0.9,
		weightkg: 29.9,
		color: "Purple",
		prevo: "Shellos",
		evoLevel: 30,
		eggGroups: ["Water 1", "Amorphous"],
		cosmeticFormes: ["Gastrodon-East"],
		formeOrder: ["Gastrodon", "Gastrodon-East"],
	},
	ambipom: {
		num: 424,
		name: "Ambipom",
		types: ["Normal"],
		baseStats: { hp: 75, atk: 100, def: 66, spa: 60, spd: 66, spe: 115 },
		abilities: { 0: "Technician", 1: "Pickup", H: "Skill Link" },
		heightm: 1.2,
		weightkg: 20.3,
		color: "Purple",
		prevo: "Aipom",
		evoType: "levelMove",
		evoMove: "Double Hit",
		eggGroups: ["Field"],
	},
	drifloon: {
		num: 425,
		name: "Drifloon",
		types: ["Ghost", "Flying"],
		baseStats: { hp: 90, atk: 50, def: 34, spa: 60, spd: 44, spe: 70 },
		abilities: { 0: "Aftermath", 1: "Unburden", H: "Flare Boost" },
		heightm: 0.4,
		weightkg: 1.2,
		color: "Purple",
		evos: ["Drifblim"],
		eggGroups: ["Amorphous"],
	},
	drifblim: {
		num: 426,
		name: "Drifblim",
		types: ["Ghost", "Flying"],
		baseStats: { hp: 150, atk: 80, def: 44, spa: 90, spd: 54, spe: 80 },
		abilities: { 0: "Aftermath", 1: "Unburden", H: "Flare Boost" },
		heightm: 1.2,
		weightkg: 15,
		color: "Purple",
		prevo: "Drifloon",
		evoLevel: 28,
		eggGroups: ["Amorphous"],
	},
	buneary: {
		num: 427,
		name: "Buneary",
		types: ["Normal"],
		baseStats: { hp: 55, atk: 66, def: 44, spa: 44, spd: 56, spe: 85 },
		abilities: { 0: "Run Away", 1: "Klutz", H: "Limber" },
		heightm: 0.4,
		weightkg: 5.5,
		color: "Brown",
		evos: ["Lopunny"],
		eggGroups: ["Field", "Human-Like"],
	},
	lopunny: {
		num: 428,
		name: "Lopunny",
		types: ["Normal"],
		baseStats: { hp: 65, atk: 76, def: 84, spa: 54, spd: 96, spe: 105 },
		abilities: { 0: "Cute Charm", 1: "Klutz", H: "Limber" },
		heightm: 1.2,
		weightkg: 33.3,
		color: "Brown",
		prevo: "Buneary",
		evoType: "levelFriendship",
		eggGroups: ["Field", "Human-Like"],
		otherFormes: ["Lopunny-Mega"],
		formeOrder: ["Lopunny", "Lopunny-Mega"],
	},
	lopunnymega: {
		num: 428,
		name: "Lopunny-Mega",
		baseSpecies: "Lopunny",
		forme: "Mega",
		types: ["Normal", "Fighting"],
		baseStats: { hp: 65, atk: 136, def: 94, spa: 54, spd: 96, spe: 135 },
		abilities: { 0: "Scrappy" },
		heightm: 1.3,
		weightkg: 28.3,
		color: "Brown",
		eggGroups: ["Field", "Human-Like"],
		requiredItem: "Lopunnite",
	},
	mismagius: {
		num: 429,
		name: "Mismagius",
		types: ["Ghost"],
		baseStats: { hp: 60, atk: 60, def: 60, spa: 105, spd: 105, spe: 105 },
		abilities: { 0: "Levitate" },
		heightm: 0.9,
		weightkg: 4.4,
		color: "Purple",
		prevo: "Misdreavus",
		evoType: "useItem",
		evoItem: "Dusk Stone",
		eggGroups: ["Amorphous"],
	},
	honchkrow: {
		num: 430,
		name: "Honchkrow",
		types: ["Dark", "Flying"],
		baseStats: { hp: 100, atk: 125, def: 52, spa: 105, spd: 52, spe: 71 },
		abilities: { 0: "Insomnia", 1: "Super Luck", H: "Moxie" },
		heightm: 0.9,
		weightkg: 27.3,
		color: "Black",
		prevo: "Murkrow",
		evoType: "useItem",
		evoItem: "Dusk Stone",
		eggGroups: ["Flying"],
	},
	glameow: {
		num: 431,
		name: "Glameow",
		types: ["Normal"],
		genderRatio: { M: 0.25, F: 0.75 },
		baseStats: { hp: 49, atk: 55, def: 42, spa: 42, spd: 37, spe: 85 },
		abilities: { 0: "Limber", 1: "Own Tempo", H: "Keen Eye" },
		heightm: 0.5,
		weightkg: 3.9,
		color: "Gray",
		evos: ["Purugly"],
		eggGroups: ["Field"],
	},
	purugly: {
		num: 432,
		name: "Purugly",
		types: ["Normal"],
		genderRatio: { M: 0.25, F: 0.75 },
		baseStats: { hp: 71, atk: 82, def: 64, spa: 64, spd: 59, spe: 112 },
		abilities: { 0: "Thick Fat", 1: "Own Tempo", H: "Defiant" },
		heightm: 1,
		weightkg: 43.8,
		color: "Gray",
		prevo: "Glameow",
		evoLevel: 38,
		eggGroups: ["Field"],
	},
	chingling: {
		num: 433,
		name: "Chingling",
		types: ["Psychic"],
		baseStats: { hp: 45, atk: 30, def: 50, spa: 65, spd: 50, spe: 45 },
		abilities: { 0: "Levitate" },
		heightm: 0.2,
		weightkg: 0.6,
		color: "Yellow",
		evos: ["Chimecho"],
		eggGroups: ["Undiscovered"],
		canHatch: true,
	},
	stunky: {
		num: 434,
		name: "Stunky",
		types: ["Poison", "Dark"],
		baseStats: { hp: 63, atk: 63, def: 47, spa: 41, spd: 41, spe: 74 },
		abilities: { 0: "Stench", 1: "Aftermath", H: "Keen Eye" },
		heightm: 0.4,
		weightkg: 19.2,
		color: "Purple",
		evos: ["Skuntank"],
		eggGroups: ["Field"],
	},
	skuntank: {
		num: 435,
		name: "Skuntank",
		types: ["Poison", "Dark"],
		baseStats: { hp: 103, atk: 93, def: 67, spa: 71, spd: 61, spe: 84 },
		abilities: { 0: "Stench", 1: "Aftermath", H: "Keen Eye" },
		heightm: 1,
		weightkg: 38,
		color: "Purple",
		prevo: "Stunky",
		evoLevel: 34,
		eggGroups: ["Field"],
	},
	bronzor: {
		num: 436,
		name: "Bronzor",
		types: ["Steel", "Psychic"],
		gender: "N",
		baseStats: { hp: 57, atk: 24, def: 86, spa: 24, spd: 86, spe: 23 },
		abilities: { 0: "Levitate", 1: "Heatproof", H: "Heavy Metal" },
		heightm: 0.5,
		weightkg: 60.5,
		color: "Green",
		evos: ["Bronzong"],
		eggGroups: ["Mineral"],
	},
	bronzong: {
		num: 437,
		name: "Bronzong",
		types: ["Steel", "Psychic"],
		gender: "N",
		baseStats: { hp: 67, atk: 89, def: 116, spa: 79, spd: 116, spe: 33 },
		abilities: { 0: "Levitate", 1: "Heatproof", H: "Heavy Metal" },
		heightm: 1.3,
		weightkg: 187,
		color: "Green",
		prevo: "Bronzor",
		evoLevel: 33,
		eggGroups: ["Mineral"],
	},
	bonsly: {
		num: 438,
		name: "Bonsly",
		types: ["Rock"],
		baseStats: { hp: 50, atk: 80, def: 95, spa: 10, spd: 45, spe: 10 },
		abilities: { 0: "Sturdy", 1: "Rock Head", H: "Rattled" },
		heightm: 0.5,
		weightkg: 15,
		color: "Brown",
		evos: ["Sudowoodo"],
		eggGroups: ["Undiscovered"],
		canHatch: true,
	},
	mimejr: {
		num: 439,
		name: "Mime Jr.",
		types: ["Psychic", "Fairy"],
		baseStats: { hp: 20, atk: 25, def: 45, spa: 70, spd: 90, spe: 60 },
		abilities: { 0: "Soundproof", 1: "Filter", H: "Technician" },
		heightm: 0.6,
		weightkg: 13,
		color: "Pink",
		evos: ["Mr. Mime", "Mr. Mime-Galar"],
		eggGroups: ["Undiscovered"],
		canHatch: true,
	},
	happiny: {
		num: 440,
		name: "Happiny",
		types: ["Normal"],
		gender: "F",
		baseStats: { hp: 100, atk: 5, def: 5, spa: 15, spd: 65, spe: 30 },
		abilities: { 0: "Natural Cure", 1: "Serene Grace", H: "Friend Guard" },
		heightm: 0.6,
		weightkg: 24.4,
		color: "Pink",
		evos: ["Chansey"],
		eggGroups: ["Undiscovered"],
		canHatch: true,
	},
	chatot: {
		num: 441,
		name: "Chatot",
		types: ["Normal", "Flying"],
		baseStats: { hp: 76, atk: 65, def: 45, spa: 92, spd: 42, spe: 91 },
		abilities: { 0: "Keen Eye", 1: "Tangled Feet", H: "Big Pecks" },
		heightm: 0.5,
		weightkg: 1.9,
		color: "Black",
		eggGroups: ["Flying"],
	},
	spiritomb: {
		num: 442,
		name: "Spiritomb",
		types: ["Ghost", "Dark"],
		baseStats: { hp: 50, atk: 92, def: 108, spa: 92, spd: 108, spe: 35 },
		abilities: { 0: "Pressure", H: "Infiltrator" },
		heightm: 1,
		weightkg: 108,
		color: "Purple",
		eggGroups: ["Amorphous"],
	},
	gible: {
		num: 443,
		name: "Gible",
		types: ["Dragon", "Ground"],
		baseStats: { hp: 58, atk: 70, def: 45, spa: 40, spd: 45, spe: 42 },
		abilities: { 0: "Sand Veil", H: "Rough Skin" },
		heightm: 0.7,
		weightkg: 20.5,
		color: "Blue",
		evos: ["Gabite"],
		eggGroups: ["Monster", "Dragon"],
	},
	gabite: {
		num: 444,
		name: "Gabite",
		types: ["Dragon", "Ground"],
		baseStats: { hp: 68, atk: 90, def: 65, spa: 50, spd: 55, spe: 82 },
		abilities: { 0: "Sand Veil", H: "Rough Skin" },
		heightm: 1.4,
		weightkg: 56,
		color: "Blue",
		prevo: "Gible",
		evoLevel: 24,
		evos: ["Garchomp"],
		eggGroups: ["Monster", "Dragon"],
	},
	garchomp: {
		num: 445,
		name: "Garchomp",
		types: ["Dragon", "Ground"],
		baseStats: { hp: 108, atk: 130, def: 95, spa: 80, spd: 85, spe: 102 },
		abilities: { 0: "Sand Veil", H: "Rough Skin" },
		heightm: 1.9,
		weightkg: 95,
		color: "Blue",
		prevo: "Gabite",
		evoLevel: 48,
		eggGroups: ["Monster", "Dragon"],
		otherFormes: ["Garchomp-Mega"],
		formeOrder: ["Garchomp", "Garchomp-Mega"],
	},
	garchompmega: {
		num: 445,
		name: "Garchomp-Mega",
		baseSpecies: "Garchomp",
		forme: "Mega",
		types: ["Dragon", "Ground"],
		baseStats: { hp: 108, atk: 170, def: 115, spa: 120, spd: 95, spe: 92 },
		abilities: { 0: "Sand Force" },
		heightm: 1.9,
		weightkg: 95,
		color: "Blue",
		eggGroups: ["Monster", "Dragon"],
		requiredItem: "Garchompite",
	},
	munchlax: {
		num: 446,
		name: "Munchlax",
		types: ["Normal"],
		genderRatio: { M: 0.875, F: 0.125 },
		baseStats: { hp: 135, atk: 85, def: 40, spa: 40, spd: 85, spe: 5 },
		abilities: { 0: "Pickup", 1: "Thick Fat", H: "Gluttony" },
		heightm: 0.6,
		weightkg: 105,
		color: "Black",
		evos: ["Snorlax"],
		eggGroups: ["Undiscovered"],
		canHatch: true,
	},
	riolu: {
		num: 447,
		name: "Riolu",
		types: ["Fighting"],
		genderRatio: { M: 0.875, F: 0.125 },
		baseStats: { hp: 40, atk: 70, def: 40, spa: 35, spd: 40, spe: 60 },
		abilities: { 0: "Steadfast", 1: "Inner Focus", H: "Prankster" },
		heightm: 0.7,
		weightkg: 20.2,
		color: "Blue",
		evos: ["Lucario"],
		eggGroups: ["Undiscovered"],
		canHatch: true,
	},
	lucario: {
		num: 448,
		name: "Lucario",
		types: ["Fighting", "Steel"],
		genderRatio: { M: 0.875, F: 0.125 },
		baseStats: { hp: 70, atk: 110, def: 70, spa: 115, spd: 70, spe: 90 },
		abilities: { 0: "Steadfast", 1: "Inner Focus", H: "Justified" },
		heightm: 1.2,
		weightkg: 54,
		color: "Blue",
		prevo: "Riolu",
		evoType: "levelFriendship",
		evoCondition: "during the day",
		eggGroups: ["Field", "Human-Like"],
		otherFormes: ["Lucario-Mega"],
		formeOrder: ["Lucario", "Lucario-Mega"],
	},
	lucariomega: {
		num: 448,
		name: "Lucario-Mega",
		baseSpecies: "Lucario",
		forme: "Mega",
		types: ["Fighting", "Steel"],
		genderRatio: { M: 0.875, F: 0.125 },
		baseStats: { hp: 70, atk: 145, def: 88, spa: 140, spd: 70, spe: 112 },
		abilities: { 0: "Adaptability" },
		heightm: 1.3,
		weightkg: 57.5,
		color: "Blue",
		eggGroups: ["Field", "Human-Like"],
		requiredItem: "Lucarionite",
	},
	hippopotas: {
		num: 449,
		name: "Hippopotas",
		types: ["Ground"],
		baseStats: { hp: 68, atk: 72, def: 78, spa: 38, spd: 42, spe: 32 },
		abilities: { 0: "Sand Stream", H: "Sand Force" },
		heightm: 0.8,
		weightkg: 49.5,
		color: "Brown",
		evos: ["Hippowdon"],
		eggGroups: ["Field"],
	},
	hippowdon: {
		num: 450,
		name: "Hippowdon",
		types: ["Ground"],
		baseStats: { hp: 108, atk: 112, def: 118, spa: 68, spd: 72, spe: 47 },
		abilities: { 0: "Sand Stream", H: "Sand Force" },
		heightm: 2,
		weightkg: 300,
		color: "Brown",
		prevo: "Hippopotas",
		evoLevel: 34,
		eggGroups: ["Field"],
	},
	skorupi: {
		num: 451,
		name: "Skorupi",
		types: ["Poison", "Bug"],
		baseStats: { hp: 40, atk: 50, def: 90, spa: 30, spd: 55, spe: 65 },
		abilities: { 0: "Battle Armor", 1: "Sniper", H: "Keen Eye" },
		heightm: 0.8,
		weightkg: 12,
		color: "Purple",
		evos: ["Drapion"],
		eggGroups: ["Bug", "Water 3"],
	},
	drapion: {
		num: 452,
		name: "Drapion",
		types: ["Poison", "Dark"],
		baseStats: { hp: 70, atk: 90, def: 110, spa: 60, spd: 75, spe: 95 },
		abilities: { 0: "Battle Armor", 1: "Sniper", H: "Keen Eye" },
		heightm: 1.3,
		weightkg: 61.5,
		color: "Purple",
		prevo: "Skorupi",
		evoLevel: 40,
		eggGroups: ["Bug", "Water 3"],
	},
	croagunk: {
		num: 453,
		name: "Croagunk",
		types: ["Poison", "Fighting"],
		baseStats: { hp: 48, atk: 61, def: 40, spa: 61, spd: 40, spe: 50 },
		abilities: { 0: "Anticipation", 1: "Dry Skin", H: "Poison Touch" },
		heightm: 0.7,
		weightkg: 23,
		color: "Blue",
		evos: ["Toxicroak"],
		eggGroups: ["Human-Like"],
	},
	toxicroak: {
		num: 454,
		name: "Toxicroak",
		types: ["Poison", "Fighting"],
		baseStats: { hp: 83, atk: 106, def: 65, spa: 86, spd: 65, spe: 85 },
		abilities: { 0: "Anticipation", 1: "Dry Skin", H: "Poison Touch" },
		heightm: 1.3,
		weightkg: 44.4,
		color: "Blue",
		prevo: "Croagunk",
		evoLevel: 37,
		eggGroups: ["Human-Like"],
	},
	carnivine: {
		num: 455,
		name: "Carnivine",
		types: ["Grass"],
		baseStats: { hp: 74, atk: 100, def: 72, spa: 90, spd: 72, spe: 46 },
		abilities: { 0: "Levitate" },
		heightm: 1.4,
		weightkg: 27,
		color: "Green",
		eggGroups: ["Grass"],
	},
	finneon: {
		num: 456,
		name: "Finneon",
		types: ["Water"],
		baseStats: { hp: 49, atk: 49, def: 56, spa: 49, spd: 61, spe: 66 },
		abilities: { 0: "Swift Swim", 1: "Storm Drain", H: "Water Veil" },
		heightm: 0.4,
		weightkg: 7,
		color: "Blue",
		evos: ["Lumineon"],
		eggGroups: ["Water 2"],
	},
	lumineon: {
		num: 457,
		name: "Lumineon",
		types: ["Water"],
		baseStats: { hp: 69, atk: 69, def: 76, spa: 69, spd: 86, spe: 91 },
		abilities: { 0: "Swift Swim", 1: "Storm Drain", H: "Water Veil" },
		heightm: 1.2,
		weightkg: 24,
		color: "Blue",
		prevo: "Finneon",
		evoLevel: 31,
		eggGroups: ["Water 2"],
	},
	mantyke: {
		num: 458,
		name: "Mantyke",
		types: ["Water", "Flying"],
		baseStats: { hp: 45, atk: 20, def: 50, spa: 60, spd: 120, spe: 50 },
		abilities: { 0: "Swift Swim", 1: "Water Absorb", H: "Water Veil" },
		heightm: 1,
		weightkg: 65,
		color: "Blue",
		evos: ["Mantine"],
		eggGroups: ["Undiscovered"],
		canHatch: true,
	},
	snover: {
		num: 459,
		name: "Snover",
		types: ["Grass", "Ice"],
		baseStats: { hp: 60, atk: 62, def: 50, spa: 62, spd: 60, spe: 40 },
		abilities: { 0: "Snow Warning", H: "Soundproof" },
		heightm: 1,
		weightkg: 50.5,
		color: "White",
		evos: ["Abomasnow"],
		eggGroups: ["Monster", "Grass"],
	},
	abomasnow: {
		num: 460,
		name: "Abomasnow",
		types: ["Grass", "Ice"],
		baseStats: { hp: 90, atk: 92, def: 75, spa: 92, spd: 85, spe: 60 },
		abilities: { 0: "Snow Warning", H: "Soundproof" },
		heightm: 2.2,
		weightkg: 135.5,
		color: "White",
		prevo: "Snover",
		evoLevel: 40,
		eggGroups: ["Monster", "Grass"],
		otherFormes: ["Abomasnow-Mega"],
		formeOrder: ["Abomasnow", "Abomasnow-Mega"],
	},
	abomasnowmega: {
		num: 460,
		name: "Abomasnow-Mega",
		baseSpecies: "Abomasnow",
		forme: "Mega",
		types: ["Grass", "Ice"],
		baseStats: { hp: 90, atk: 132, def: 105, spa: 132, spd: 105, spe: 30 },
		abilities: { 0: "Snow Warning" },
		heightm: 2.7,
		weightkg: 185,
		color: "White",
		eggGroups: ["Monster", "Grass"],
		requiredItem: "Abomasite",
	},
	weavile: {
		num: 461,
		name: "Weavile",
		types: ["Dark", "Ice"],
		baseStats: { hp: 70, atk: 120, def: 65, spa: 45, spd: 85, spe: 125 },
		abilities: { 0: "Pressure", H: "Pickpocket" },
		heightm: 1.1,
		weightkg: 34,
		color: "Black",
		prevo: "Sneasel",
		evoType: "levelHold",
		evoItem: "Razor Claw",
		eggGroups: ["Field"],
	},
	magnezone: {
		num: 462,
		name: "Magnezone",
		types: ["Electric", "Steel"],
		gender: "N",
		baseStats: { hp: 70, atk: 70, def: 115, spa: 130, spd: 90, spe: 60 },
		abilities: { 0: "Magnet Pull", 1: "Sturdy", H: "Analytic" },
		heightm: 1.2,
		weightkg: 180,
		color: "Gray",
		prevo: "Magneton",
		evoType: "useItem",
		evoItem: "Thunder Stone",
		eggGroups: ["Mineral"],
	},
	lickilicky: {
		num: 463,
		name: "Lickilicky",
		types: ["Normal"],
		baseStats: { hp: 110, atk: 85, def: 95, spa: 80, spd: 95, spe: 50 },
		abilities: { 0: "Own Tempo", 1: "Oblivious", H: "Cloud Nine" },
		heightm: 1.7,
		weightkg: 140,
		color: "Pink",
		prevo: "Lickitung",
		evoType: "levelMove",
		evoMove: "Rollout",
		eggGroups: ["Monster"],
	},
	rhyperior: {
		num: 464,
		name: "Rhyperior",
		types: ["Ground", "Rock"],
		baseStats: { hp: 115, atk: 140, def: 130, spa: 55, spd: 55, spe: 40 },
		abilities: { 0: "Lightning Rod", 1: "Solid Rock", H: "Reckless" },
		heightm: 2.4,
		weightkg: 282.8,
		color: "Gray",
		prevo: "Rhydon",
		evoType: "trade",
		evoItem: "Protector",
		eggGroups: ["Monster", "Field"],
	},
	tangrowth: {
		num: 465,
		name: "Tangrowth",
		types: ["Grass"],
		baseStats: { hp: 100, atk: 100, def: 125, spa: 110, spd: 50, spe: 50 },
		abilities: { 0: "Chlorophyll", 1: "Leaf Guard", H: "Regenerator" },
		heightm: 2,
		weightkg: 128.6,
		color: "Blue",
		prevo: "Tangela",
		evoType: "levelMove",
		evoMove: "Ancient Power",
		eggGroups: ["Grass"],
	},
	electivire: {
		num: 466,
		name: "Electivire",
		types: ["Electric"],
		genderRatio: { M: 0.75, F: 0.25 },
		baseStats: { hp: 75, atk: 123, def: 67, spa: 95, spd: 85, spe: 95 },
		abilities: { 0: "Motor Drive", H: "Vital Spirit" },
		heightm: 1.8,
		weightkg: 138.6,
		color: "Yellow",
		prevo: "Electabuzz",
		evoType: "trade",
		evoItem: "Electirizer",
		eggGroups: ["Human-Like"],
	},
	magmortar: {
		num: 467,
		name: "Magmortar",
		types: ["Fire"],
		genderRatio: { M: 0.75, F: 0.25 },
		baseStats: { hp: 75, atk: 95, def: 67, spa: 125, spd: 95, spe: 83 },
		abilities: { 0: "Flame Body", H: "Vital Spirit" },
		heightm: 1.6,
		weightkg: 68,
		color: "Red",
		prevo: "Magmar",
		evoType: "trade",
		evoItem: "Magmarizer",
		eggGroups: ["Human-Like"],
	},
	togekiss: {
		num: 468,
		name: "Togekiss",
		types: ["Fairy", "Flying"],
		genderRatio: { M: 0.875, F: 0.125 },
		baseStats: { hp: 85, atk: 50, def: 95, spa: 120, spd: 115, spe: 80 },
		abilities: { 0: "Hustle", 1: "Serene Grace", H: "Super Luck" },
		heightm: 1.5,
		weightkg: 38,
		color: "White",
		prevo: "Togetic",
		evoType: "useItem",
		evoItem: "Shiny Stone",
		eggGroups: ["Flying", "Fairy"],
	},
	yanmega: {
		num: 469,
		name: "Yanmega",
		types: ["Bug", "Flying"],
		baseStats: { hp: 86, atk: 76, def: 86, spa: 116, spd: 56, spe: 95 },
		abilities: { 0: "Speed Boost", 1: "Tinted Lens", H: "Frisk" },
		heightm: 1.9,
		weightkg: 51.5,
		color: "Green",
		prevo: "Yanma",
		evoType: "levelMove",
		evoMove: "Ancient Power",
		eggGroups: ["Bug"],
	},
	leafeon: {
		num: 470,
		name: "Leafeon",
		types: ["Grass"],
		genderRatio: { M: 0.875, F: 0.125 },
		baseStats: { hp: 65, atk: 110, def: 130, spa: 60, spd: 65, spe: 95 },
		abilities: { 0: "Leaf Guard", H: "Chlorophyll" },
		heightm: 1,
		weightkg: 25.5,
		color: "Green",
		prevo: "Eevee",
		evoType: "useItem",
		evoItem: "Leaf Stone",
		eggGroups: ["Field"],
	},
	glaceon: {
		num: 471,
		name: "Glaceon",
		types: ["Ice"],
		genderRatio: { M: 0.875, F: 0.125 },
		baseStats: { hp: 65, atk: 60, def: 110, spa: 130, spd: 95, spe: 65 },
		abilities: { 0: "Snow Cloak", H: "Ice Body" },
		heightm: 0.8,
		weightkg: 25.9,
		color: "Blue",
		prevo: "Eevee",
		evoType: "useItem",
		evoItem: "Ice Stone",
		eggGroups: ["Field"],
	},
	gliscor: {
		num: 472,
		name: "Gliscor",
		types: ["Ground", "Flying"],
		baseStats: { hp: 75, atk: 95, def: 125, spa: 45, spd: 75, spe: 95 },
		abilities: { 0: "Hyper Cutter", 1: "Sand Veil", H: "Poison Heal" },
		heightm: 2,
		weightkg: 42.5,
		color: "Purple",
		prevo: "Gligar",
		evoType: "levelHold",
		evoItem: "Razor Fang",
		evoCondition: "at night",
		eggGroups: ["Bug"],
	},
	mamoswine: {
		num: 473,
		name: "Mamoswine",
		types: ["Ice", "Ground"],
		baseStats: { hp: 110, atk: 130, def: 80, spa: 70, spd: 60, spe: 80 },
		abilities: { 0: "Oblivious", 1: "Snow Cloak", H: "Thick Fat" },
		heightm: 2.5,
		weightkg: 291,
		color: "Brown",
		prevo: "Piloswine",
		evoType: "levelMove",
		evoMove: "Ancient Power",
		eggGroups: ["Field"],
	},
	porygonz: {
		num: 474,
		name: "Porygon-Z",
		types: ["Normal"],
		gender: "N",
		baseStats: { hp: 85, atk: 80, def: 70, spa: 135, spd: 75, spe: 90 },
		abilities: { 0: "Adaptability", 1: "Download", H: "Analytic" },
		heightm: 0.9,
		weightkg: 34,
		color: "Red",
		prevo: "Porygon2",
		evoType: "trade",
		evoItem: "Dubious Disc",
		eggGroups: ["Mineral"],
	},
	gallade: {
		num: 475,
		name: "Gallade",
		types: ["Psychic", "Fighting"],
		gender: "M",
		baseStats: { hp: 68, atk: 125, def: 65, spa: 65, spd: 115, spe: 80 },
		abilities: { 0: "Steadfast", H: "Justified" },
		heightm: 1.6,
		weightkg: 52,
		color: "White",
		prevo: "Kirlia",
		evoType: "useItem",
		evoItem: "Dawn Stone",
		eggGroups: ["Human-Like", "Amorphous"],
		otherFormes: ["Gallade-Mega"],
		formeOrder: ["Gallade", "Gallade-Mega"],
	},
	gallademega: {
		num: 475,
		name: "Gallade-Mega",
		baseSpecies: "Gallade",
		forme: "Mega",
		types: ["Psychic", "Fighting"],
		gender: "M",
		baseStats: { hp: 68, atk: 165, def: 95, spa: 65, spd: 115, spe: 110 },
		abilities: { 0: "Inner Focus" },
		heightm: 1.6,
		weightkg: 56.4,
		color: "White",
		eggGroups: ["Amorphous"],
		requiredItem: "Galladite",
	},
	probopass: {
		num: 476,
		name: "Probopass",
		types: ["Rock", "Steel"],
		baseStats: { hp: 60, atk: 55, def: 145, spa: 75, spd: 150, spe: 40 },
		abilities: { 0: "Sturdy", 1: "Magnet Pull", H: "Sand Force" },
		heightm: 1.4,
		weightkg: 340,
		color: "Gray",
		prevo: "Nosepass",
		evoType: "levelExtra",
		evoCondition: "near a special magnetic field",
		eggGroups: ["Mineral"],
	},
	dusknoir: {
		num: 477,
		name: "Dusknoir",
		types: ["Ghost"],
		baseStats: { hp: 45, atk: 100, def: 135, spa: 65, spd: 135, spe: 45 },
		abilities: { 0: "Pressure", H: "Frisk" },
		heightm: 2.2,
		weightkg: 106.6,
		color: "Black",
		prevo: "Dusclops",
		evoType: "trade",
		evoItem: "Reaper Cloth",
		eggGroups: ["Amorphous"],
	},
	froslass: {
		num: 478,
		name: "Froslass",
		types: ["Ice", "Ghost"],
		gender: "F",
		baseStats: { hp: 70, atk: 80, def: 70, spa: 80, spd: 70, spe: 110 },
		abilities: { 0: "Snow Cloak", H: "Cursed Body" },
		heightm: 1.3,
		weightkg: 26.6,
		color: "White",
		prevo: "Snorunt",
		evoType: "useItem",
		evoItem: "Dawn Stone",
		eggGroups: ["Fairy", "Mineral"],
	},
	rotom: {
		num: 479,
		name: "Rotom",
		types: ["Electric", "Ghost"],
		gender: "N",
		baseStats: { hp: 50, atk: 50, def: 77, spa: 95, spd: 77, spe: 91 },
		abilities: { 0: "Levitate" },
		heightm: 0.3,
		weightkg: 0.3,
		color: "Red",
		eggGroups: ["Amorphous"],
		otherFormes: ["Rotom-Heat", "Rotom-Wash", "Rotom-Frost", "Rotom-Fan", "Rotom-Mow"],
		formeOrder: ["Rotom", "Rotom-Heat", "Rotom-Wash", "Rotom-Frost", "Rotom-Fan", "Rotom-Mow"],
	},
	rotomheat: {
		num: 479,
		name: "Rotom-Heat",
		baseSpecies: "Rotom",
		forme: "Heat",
		types: ["Electric", "Fire"],
		gender: "N",
		baseStats: { hp: 50, atk: 65, def: 107, spa: 105, spd: 107, spe: 86 },
		abilities: { 0: "Levitate" },
		heightm: 0.3,
		weightkg: 0.3,
		color: "Red",
		eggGroups: ["Amorphous"],
		changesFrom: "Rotom",
	},
	rotomwash: {
		num: 479,
		name: "Rotom-Wash",
		baseSpecies: "Rotom",
		forme: "Wash",
		types: ["Electric", "Water"],
		gender: "N",
		baseStats: { hp: 50, atk: 65, def: 107, spa: 105, spd: 107, spe: 86 },
		abilities: { 0: "Levitate" },
		heightm: 0.3,
		weightkg: 0.3,
		color: "Red",
		eggGroups: ["Amorphous"],
		changesFrom: "Rotom",
	},
	rotomfrost: {
		num: 479,
		name: "Rotom-Frost",
		baseSpecies: "Rotom",
		forme: "Frost",
		types: ["Electric", "Ice"],
		gender: "N",
		baseStats: { hp: 50, atk: 65, def: 107, spa: 105, spd: 107, spe: 86 },
		abilities: { 0: "Levitate" },
		heightm: 0.3,
		weightkg: 0.3,
		color: "Red",
		eggGroups: ["Amorphous"],
		changesFrom: "Rotom",
	},
	rotomfan: {
		num: 479,
		name: "Rotom-Fan",
		baseSpecies: "Rotom",
		forme: "Fan",
		types: ["Electric", "Flying"],
		gender: "N",
		baseStats: { hp: 50, atk: 65, def: 107, spa: 105, spd: 107, spe: 86 },
		abilities: { 0: "Levitate" },
		heightm: 0.3,
		weightkg: 0.3,
		color: "Red",
		eggGroups: ["Amorphous"],
		changesFrom: "Rotom",
	},
	rotommow: {
		num: 479,
		name: "Rotom-Mow",
		baseSpecies: "Rotom",
		forme: "Mow",
		types: ["Electric", "Grass"],
		gender: "N",
		baseStats: { hp: 50, atk: 65, def: 107, spa: 105, spd: 107, spe: 86 },
		abilities: { 0: "Levitate" },
		heightm: 0.3,
		weightkg: 0.3,
		color: "Red",
		eggGroups: ["Amorphous"],
		changesFrom: "Rotom",
	},
	uxie: {
		num: 480,
		name: "Uxie",
		types: ["Psychic"],
		gender: "N",
		baseStats: { hp: 75, atk: 75, def: 130, spa: 75, spd: 130, spe: 95 },
		abilities: { 0: "Levitate" },
		heightm: 0.3,
		weightkg: 0.3,
		color: "Yellow",
		eggGroups: ["Undiscovered"],
	},
	mesprit: {
		num: 481,
		name: "Mesprit",
		types: ["Psychic"],
		gender: "N",
		baseStats: { hp: 80, atk: 105, def: 105, spa: 105, spd: 105, spe: 80 },
		abilities: { 0: "Levitate" },
		heightm: 0.3,
		weightkg: 0.3,
		color: "Pink",
		eggGroups: ["Undiscovered"],
	},
	azelf: {
		num: 482,
		name: "Azelf",
		types: ["Psychic"],
		gender: "N",
		baseStats: { hp: 75, atk: 125, def: 70, spa: 125, spd: 70, spe: 115 },
		abilities: { 0: "Levitate" },
		heightm: 0.3,
		weightkg: 0.3,
		color: "Blue",
		eggGroups: ["Undiscovered"],
	},
	dialga: {
		num: 483,
		name: "Dialga",
		types: ["Steel", "Dragon"],
		gender: "N",
		baseStats: { hp: 100, atk: 120, def: 120, spa: 150, spd: 100, spe: 90 },
		abilities: { 0: "Pressure", H: "Telepathy" },
		heightm: 5.4,
		weightkg: 683,
		color: "White",
		eggGroups: ["Undiscovered"],
	},
	palkia: {
		num: 484,
		name: "Palkia",
		types: ["Water", "Dragon"],
		gender: "N",
		baseStats: { hp: 90, atk: 120, def: 100, spa: 150, spd: 120, spe: 100 },
		abilities: { 0: "Pressure", H: "Telepathy" },
		heightm: 4.2,
		weightkg: 336,
		color: "Purple",
		eggGroups: ["Undiscovered"],
	},
	heatran: {
		num: 485,
		name: "Heatran",
		types: ["Fire", "Steel"],
		baseStats: { hp: 91, atk: 90, def: 106, spa: 130, spd: 106, spe: 77 },
		abilities: { 0: "Flash Fire", H: "Flame Body" },
		heightm: 1.7,
		weightkg: 430,
		color: "Brown",
		eggGroups: ["Undiscovered"],
	},
	regigigas: {
		num: 486,
		name: "Regigigas",
		types: ["Normal"],
		gender: "N",
		baseStats: { hp: 110, atk: 160, def: 110, spa: 80, spd: 110, spe: 100 },
		abilities: { 0: "Slow Start" },
		heightm: 3.7,
		weightkg: 420,
		color: "White",
		eggGroups: ["Undiscovered"],
	},
	giratina: {
		num: 487,
		name: "Giratina",
		baseForme: "Altered",
		types: ["Ghost", "Dragon"],
		gender: "N",
		baseStats: { hp: 150, atk: 100, def: 120, spa: 100, spd: 120, spe: 90 },
		abilities: { 0: "Pressure", H: "Telepathy" },
		heightm: 4.5,
		weightkg: 750,
		color: "Black",
		eggGroups: ["Undiscovered"],
		otherFormes: ["Giratina-Origin"],
		formeOrder: ["Giratina", "Giratina-Origin"],
	},
	giratinaorigin: {
		num: 487,
		name: "Giratina-Origin",
		baseSpecies: "Giratina",
		forme: "Origin",
		types: ["Ghost", "Dragon"],
		gender: "N",
		baseStats: { hp: 150, atk: 120, def: 100, spa: 120, spd: 100, spe: 90 },
		abilities: { 0: "Levitate" },
		heightm: 6.9,
		weightkg: 650,
		color: "Black",
		eggGroups: ["Undiscovered"],
		requiredItem: "Griseous Orb",
		changesFrom: "Giratina",
	},
	cresselia: {
		num: 488,
		name: "Cresselia",
		types: ["Psychic"],
		gender: "F",
		baseStats: { hp: 120, atk: 70, def: 120, spa: 75, spd: 130, spe: 85 },
		abilities: { 0: "Levitate" },
		heightm: 1.5,
		weightkg: 85.6,
		color: "Yellow",
		eggGroups: ["Undiscovered"],
	},
	phione: {
		num: 489,
		name: "Phione",
		types: ["Water"],
		gender: "N",
		baseStats: { hp: 80, atk: 80, def: 80, spa: 80, spd: 80, spe: 80 },
		abilities: { 0: "Hydration" },
		heightm: 0.4,
		weightkg: 3.1,
		color: "Blue",
		eggGroups: ["Water 1", "Fairy"],
	},
	manaphy: {
		num: 490,
		name: "Manaphy",
		types: ["Water"],
		gender: "N",
		baseStats: { hp: 100, atk: 100, def: 100, spa: 100, spd: 100, spe: 100 },
		abilities: { 0: "Hydration" },
		heightm: 0.3,
		weightkg: 1.4,
		color: "Blue",
		eggGroups: ["Water 1", "Fairy"],
	},
	darkrai: {
		num: 491,
		name: "Darkrai",
		types: ["Dark"],
		gender: "N",
		baseStats: { hp: 70, atk: 90, def: 90, spa: 135, spd: 90, spe: 125 },
		abilities: { 0: "Bad Dreams" },
		heightm: 1.5,
		weightkg: 50.5,
		color: "Black",
		eggGroups: ["Undiscovered"],
	},
	shaymin: {
		num: 492,
		name: "Shaymin",
		baseForme: "Land",
		types: ["Grass"],
		gender: "N",
		baseStats: { hp: 100, atk: 100, def: 100, spa: 100, spd: 100, spe: 100 },
		abilities: { 0: "Natural Cure" },
		heightm: 0.2,
		weightkg: 2.1,
		color: "Green",
		eggGroups: ["Undiscovered"],
		otherFormes: ["Shaymin-Sky"],
		formeOrder: ["Shaymin", "Shaymin-Sky"],
	},
	shayminsky: {
		num: 492,
		name: "Shaymin-Sky",
		baseSpecies: "Shaymin",
		forme: "Sky",
		types: ["Grass", "Flying"],
		gender: "N",
		baseStats: { hp: 100, atk: 103, def: 75, spa: 120, spd: 75, spe: 127 },
		abilities: { 0: "Serene Grace" },
		heightm: 0.4,
		weightkg: 5.2,
		color: "Green",
		eggGroups: ["Undiscovered"],
		changesFrom: "Shaymin",
	},
	arceus: {
		num: 493,
		name: "Arceus",
		baseForme: "Normal",
		types: ["Normal"],
		gender: "N",
		baseStats: { hp: 120, atk: 120, def: 120, spa: 120, spd: 120, spe: 120 },
		abilities: { 0: "Multitype" },
		heightm: 3.2,
		weightkg: 320,
		color: "White",
		eggGroups: ["Undiscovered"],
		otherFormes: ["Arceus-Bug", "Arceus-Dark", "Arceus-Dragon", "Arceus-Electric", "Arceus-Fairy", "Arceus-Fighting", "Arceus-Fire", "Arceus-Flying", "Arceus-Ghost", "Arceus-Grass", "Arceus-Ground", "Arceus-Ice", "Arceus-Poison", "Arceus-Psychic", "Arceus-Rock", "Arceus-Steel", "Arceus-Water"],
		formeOrder: [
			"Arceus", "Arceus-Fighting", "Arceus-Flying", "Arceus-Poison", "Arceus-Ground", "Arceus-Rock", "Arceus-Bug", "Arceus-Ghost", "Arceus-Steel",
			"Arceus-Fire", "Arceus-Water", "Arceus-Grass", "Arceus-Electric", "Arceus-Psychic", "Arceus-Ice", "Arceus-Dragon", "Arceus-Dark", "Arceus-Fairy",
		],
	},
	arceusbug: {
		num: 493,
		name: "Arceus-Bug",
		baseSpecies: "Arceus",
		forme: "Bug",
		types: ["Bug"],
		gender: "N",
		baseStats: { hp: 120, atk: 120, def: 120, spa: 120, spd: 120, spe: 120 },
		abilities: { 0: "Multitype" },
		heightm: 3.2,
		weightkg: 320,
		color: "White",
		eggGroups: ["Undiscovered"],
		requiredItems: ["Insect Plate", "Buginium Z"],
		changesFrom: "Arceus",
	},
	arceusdark: {
		num: 493,
		name: "Arceus-Dark",
		baseSpecies: "Arceus",
		forme: "Dark",
		types: ["Dark"],
		gender: "N",
		baseStats: { hp: 120, atk: 120, def: 120, spa: 120, spd: 120, spe: 120 },
		abilities: { 0: "Multitype" },
		heightm: 3.2,
		weightkg: 320,
		color: "White",
		eggGroups: ["Undiscovered"],
		requiredItems: ["Dread Plate", "Darkinium Z"],
		changesFrom: "Arceus",
	},
	arceusdragon: {
		num: 493,
		name: "Arceus-Dragon",
		baseSpecies: "Arceus",
		forme: "Dragon",
		types: ["Dragon"],
		gender: "N",
		baseStats: { hp: 120, atk: 120, def: 120, spa: 120, spd: 120, spe: 120 },
		abilities: { 0: "Multitype" },
		heightm: 3.2,
		weightkg: 320,
		color: "White",
		eggGroups: ["Undiscovered"],
		requiredItems: ["Draco Plate", "Dragonium Z"],
		changesFrom: "Arceus",
	},
	arceuselectric: {
		num: 493,
		name: "Arceus-Electric",
		baseSpecies: "Arceus",
		forme: "Electric",
		types: ["Electric"],
		gender: "N",
		baseStats: { hp: 120, atk: 120, def: 120, spa: 120, spd: 120, spe: 120 },
		abilities: { 0: "Multitype" },
		heightm: 3.2,
		weightkg: 320,
		color: "White",
		eggGroups: ["Undiscovered"],
		requiredItems: ["Zap Plate", "Electrium Z"],
		changesFrom: "Arceus",
	},
	arceusfairy: {
		num: 493,
		name: "Arceus-Fairy",
		baseSpecies: "Arceus",
		forme: "Fairy",
		types: ["Fairy"],
		gender: "N",
		baseStats: { hp: 120, atk: 120, def: 120, spa: 120, spd: 120, spe: 120 },
		abilities: { 0: "Multitype" },
		heightm: 3.2,
		weightkg: 320,
		color: "White",
		eggGroups: ["Undiscovered"],
		requiredItems: ["Pixie Plate", "Fairium Z"],
		changesFrom: "Arceus",
		gen: 6,
	},
	arceusfighting: {
		num: 493,
		name: "Arceus-Fighting",
		baseSpecies: "Arceus",
		forme: "Fighting",
		types: ["Fighting"],
		gender: "N",
		baseStats: { hp: 120, atk: 120, def: 120, spa: 120, spd: 120, spe: 120 },
		abilities: { 0: "Multitype" },
		heightm: 3.2,
		weightkg: 320,
		color: "White",
		eggGroups: ["Undiscovered"],
		requiredItems: ["Fist Plate", "Fightinium Z"],
		changesFrom: "Arceus",
	},
	arceusfire: {
		num: 493,
		name: "Arceus-Fire",
		baseSpecies: "Arceus",
		forme: "Fire",
		types: ["Fire"],
		gender: "N",
		baseStats: { hp: 120, atk: 120, def: 120, spa: 120, spd: 120, spe: 120 },
		abilities: { 0: "Multitype" },
		heightm: 3.2,
		weightkg: 320,
		color: "White",
		eggGroups: ["Undiscovered"],
		requiredItems: ["Flame Plate", "Firium Z"],
		changesFrom: "Arceus",
	},
	arceusflying: {
		num: 493,
		name: "Arceus-Flying",
		baseSpecies: "Arceus",
		forme: "Flying",
		types: ["Flying"],
		gender: "N",
		baseStats: { hp: 120, atk: 120, def: 120, spa: 120, spd: 120, spe: 120 },
		abilities: { 0: "Multitype" },
		heightm: 3.2,
		weightkg: 320,
		color: "White",
		eggGroups: ["Undiscovered"],
		requiredItems: ["Sky Plate", "Flyinium Z"],
		changesFrom: "Arceus",
	},
	arceusghost: {
		num: 493,
		name: "Arceus-Ghost",
		baseSpecies: "Arceus",
		forme: "Ghost",
		types: ["Ghost"],
		gender: "N",
		baseStats: { hp: 120, atk: 120, def: 120, spa: 120, spd: 120, spe: 120 },
		abilities: { 0: "Multitype" },
		heightm: 3.2,
		weightkg: 320,
		color: "White",
		eggGroups: ["Undiscovered"],
		requiredItems: ["Spooky Plate", "Ghostium Z"],
		changesFrom: "Arceus",
	},
	arceusgrass: {
		num: 493,
		name: "Arceus-Grass",
		baseSpecies: "Arceus",
		forme: "Grass",
		types: ["Grass"],
		gender: "N",
		baseStats: { hp: 120, atk: 120, def: 120, spa: 120, spd: 120, spe: 120 },
		abilities: { 0: "Multitype" },
		heightm: 3.2,
		weightkg: 320,
		color: "White",
		eggGroups: ["Undiscovered"],
		requiredItems: ["Meadow Plate", "Grassium Z"],
		changesFrom: "Arceus",
	},
	arceusground: {
		num: 493,
		name: "Arceus-Ground",
		baseSpecies: "Arceus",
		forme: "Ground",
		types: ["Ground"],
		gender: "N",
		baseStats: { hp: 120, atk: 120, def: 120, spa: 120, spd: 120, spe: 120 },
		abilities: { 0: "Multitype" },
		heightm: 3.2,
		weightkg: 320,
		color: "White",
		eggGroups: ["Undiscovered"],
		requiredItems: ["Earth Plate", "Groundium Z"],
		changesFrom: "Arceus",
	},
	arceusice: {
		num: 493,
		name: "Arceus-Ice",
		baseSpecies: "Arceus",
		forme: "Ice",
		types: ["Ice"],
		gender: "N",
		baseStats: { hp: 120, atk: 120, def: 120, spa: 120, spd: 120, spe: 120 },
		abilities: { 0: "Multitype" },
		heightm: 3.2,
		weightkg: 320,
		color: "White",
		eggGroups: ["Undiscovered"],
		requiredItems: ["Icicle Plate", "Icium Z"],
		changesFrom: "Arceus",
	},
	arceuspoison: {
		num: 493,
		name: "Arceus-Poison",
		baseSpecies: "Arceus",
		forme: "Poison",
		types: ["Poison"],
		gender: "N",
		baseStats: { hp: 120, atk: 120, def: 120, spa: 120, spd: 120, spe: 120 },
		abilities: { 0: "Multitype" },
		heightm: 3.2,
		weightkg: 320,
		color: "White",
		eggGroups: ["Undiscovered"],
		requiredItems: ["Toxic Plate", "Poisonium Z"],
		changesFrom: "Arceus",
	},
	arceuspsychic: {
		num: 493,
		name: "Arceus-Psychic",
		baseSpecies: "Arceus",
		forme: "Psychic",
		types: ["Psychic"],
		gender: "N",
		baseStats: { hp: 120, atk: 120, def: 120, spa: 120, spd: 120, spe: 120 },
		abilities: { 0: "Multitype" },
		heightm: 3.2,
		weightkg: 320,
		color: "White",
		eggGroups: ["Undiscovered"],
		requiredItems: ["Mind Plate", "Psychium Z"],
		changesFrom: "Arceus",
	},
	arceusrock: {
		num: 493,
		name: "Arceus-Rock",
		baseSpecies: "Arceus",
		forme: "Rock",
		types: ["Rock"],
		gender: "N",
		baseStats: { hp: 120, atk: 120, def: 120, spa: 120, spd: 120, spe: 120 },
		abilities: { 0: "Multitype" },
		heightm: 3.2,
		weightkg: 320,
		color: "White",
		eggGroups: ["Undiscovered"],
		requiredItems: ["Stone Plate", "Rockium Z"],
		changesFrom: "Arceus",
	},
	arceussteel: {
		num: 493,
		name: "Arceus-Steel",
		baseSpecies: "Arceus",
		forme: "Steel",
		types: ["Steel"],
		gender: "N",
		baseStats: { hp: 120, atk: 120, def: 120, spa: 120, spd: 120, spe: 120 },
		abilities: { 0: "Multitype" },
		heightm: 3.2,
		weightkg: 320,
		color: "White",
		eggGroups: ["Undiscovered"],
		requiredItems: ["Iron Plate", "Steelium Z"],
		changesFrom: "Arceus",
	},
	arceuswater: {
		num: 493,
		name: "Arceus-Water",
		baseSpecies: "Arceus",
		forme: "Water",
		types: ["Water"],
		gender: "N",
		baseStats: { hp: 120, atk: 120, def: 120, spa: 120, spd: 120, spe: 120 },
		abilities: { 0: "Multitype" },
		heightm: 3.2,
		weightkg: 320,
		color: "White",
		eggGroups: ["Undiscovered"],
		requiredItems: ["Splash Plate", "Waterium Z"],
		changesFrom: "Arceus",
	},
	victini: {
		num: 494,
		name: "Victini",
		types: ["Psychic", "Fire"],
		gender: "N",
		baseStats: { hp: 100, atk: 100, def: 100, spa: 100, spd: 100, spe: 100 },
		abilities: { 0: "Victory Star" },
		heightm: 0.4,
		weightkg: 4,
		color: "Yellow",
		eggGroups: ["Undiscovered"],
	},
	snivy: {
		num: 495,
		name: "Snivy",
		types: ["Grass"],
		genderRatio: { M: 0.875, F: 0.125 },
		baseStats: { hp: 45, atk: 45, def: 55, spa: 45, spd: 55, spe: 63 },
		abilities: { 0: "Overgrow", H: "Contrary" },
		heightm: 0.6,
		weightkg: 8.1,
		color: "Green",
		evos: ["Servine"],
		eggGroups: ["Field", "Grass"],
	},
	servine: {
		num: 496,
		name: "Servine",
		types: ["Grass"],
		genderRatio: { M: 0.875, F: 0.125 },
		baseStats: { hp: 60, atk: 60, def: 75, spa: 60, spd: 75, spe: 83 },
		abilities: { 0: "Overgrow", H: "Contrary" },
		heightm: 0.8,
		weightkg: 16,
		color: "Green",
		prevo: "Snivy",
		evoLevel: 17,
		evos: ["Serperior"],
		eggGroups: ["Field", "Grass"],
	},
	serperior: {
		num: 497,
		name: "Serperior",
		types: ["Grass"],
		genderRatio: { M: 0.875, F: 0.125 },
		baseStats: { hp: 75, atk: 75, def: 95, spa: 75, spd: 95, spe: 113 },
		abilities: { 0: "Overgrow", H: "Contrary" },
		heightm: 3.3,
		weightkg: 63,
		color: "Green",
		prevo: "Servine",
		evoLevel: 36,
		eggGroups: ["Field", "Grass"],
	},
	tepig: {
		num: 498,
		name: "Tepig",
		types: ["Fire"],
		genderRatio: { M: 0.875, F: 0.125 },
		baseStats: { hp: 65, atk: 63, def: 45, spa: 45, spd: 45, spe: 45 },
		abilities: { 0: "Blaze", H: "Thick Fat" },
		heightm: 0.5,
		weightkg: 9.9,
		color: "Red",
		evos: ["Pignite"],
		eggGroups: ["Field"],
	},
	pignite: {
		num: 499,
		name: "Pignite",
		types: ["Fire", "Fighting"],
		genderRatio: { M: 0.875, F: 0.125 },
		baseStats: { hp: 90, atk: 93, def: 55, spa: 70, spd: 55, spe: 55 },
		abilities: { 0: "Blaze", H: "Thick Fat" },
		heightm: 1,
		weightkg: 55.5,
		color: "Red",
		prevo: "Tepig",
		evoLevel: 17,
		evos: ["Emboar"],
		eggGroups: ["Field"],
	},
	emboar: {
		num: 500,
		name: "Emboar",
		types: ["Fire", "Fighting"],
		genderRatio: { M: 0.875, F: 0.125 },
		baseStats: { hp: 110, atk: 123, def: 65, spa: 100, spd: 65, spe: 65 },
		abilities: { 0: "Blaze", H: "Reckless" },
		heightm: 1.6,
		weightkg: 150,
		color: "Red",
		prevo: "Pignite",
		evoLevel: 36,
		eggGroups: ["Field"],
	},
	oshawott: {
		num: 501,
		name: "Oshawott",
		types: ["Water"],
		genderRatio: { M: 0.875, F: 0.125 },
		baseStats: { hp: 55, atk: 55, def: 45, spa: 63, spd: 45, spe: 45 },
		abilities: { 0: "Torrent", H: "Shell Armor" },
		heightm: 0.5,
		weightkg: 5.9,
		color: "Blue",
		evos: ["Dewott"],
		eggGroups: ["Field"],
	},
	dewott: {
		num: 502,
		name: "Dewott",
		types: ["Water"],
		genderRatio: { M: 0.875, F: 0.125 },
		baseStats: { hp: 75, atk: 75, def: 60, spa: 83, spd: 60, spe: 60 },
		abilities: { 0: "Torrent", H: "Shell Armor" },
		heightm: 0.8,
		weightkg: 24.5,
		color: "Blue",
		prevo: "Oshawott",
		evoLevel: 17,
		evos: ["Samurott"],
		eggGroups: ["Field"],
	},
	samurott: {
		num: 503,
		name: "Samurott",
		types: ["Water"],
		genderRatio: { M: 0.875, F: 0.125 },
		baseStats: { hp: 95, atk: 100, def: 85, spa: 108, spd: 70, spe: 70 },
		abilities: { 0: "Torrent", H: "Shell Armor" },
		heightm: 1.5,
		weightkg: 94.6,
		color: "Blue",
		prevo: "Dewott",
		evoLevel: 36,
		eggGroups: ["Field"],
	},
	patrat: {
		num: 504,
		name: "Patrat",
		types: ["Normal"],
		baseStats: { hp: 45, atk: 55, def: 39, spa: 35, spd: 39, spe: 42 },
		abilities: { 0: "Run Away", 1: "Keen Eye", H: "Analytic" },
		heightm: 0.5,
		weightkg: 11.6,
		color: "Brown",
		evos: ["Watchog"],
		eggGroups: ["Field"],
	},
	watchog: {
		num: 505,
		name: "Watchog",
		types: ["Normal"],
		baseStats: { hp: 60, atk: 85, def: 69, spa: 60, spd: 69, spe: 77 },
		abilities: { 0: "Illuminate", 1: "Keen Eye", H: "Analytic" },
		heightm: 1.1,
		weightkg: 27,
		color: "Brown",
		prevo: "Patrat",
		evoLevel: 20,
		eggGroups: ["Field"],
	},
	lillipup: {
		num: 506,
		name: "Lillipup",
		types: ["Normal"],
		baseStats: { hp: 45, atk: 60, def: 45, spa: 25, spd: 45, spe: 55 },
		abilities: { 0: "Vital Spirit", 1: "Pickup", H: "Run Away" },
		heightm: 0.4,
		weightkg: 4.1,
		color: "Brown",
		evos: ["Herdier"],
		eggGroups: ["Field"],
	},
	herdier: {
		num: 507,
		name: "Herdier",
		types: ["Normal"],
		baseStats: { hp: 65, atk: 80, def: 65, spa: 35, spd: 65, spe: 60 },
		abilities: { 0: "Intimidate", 1: "Sand Rush", H: "Scrappy" },
		heightm: 0.9,
		weightkg: 14.7,
		color: "Gray",
		prevo: "Lillipup",
		evoLevel: 16,
		evos: ["Stoutland"],
		eggGroups: ["Field"],
	},
	stoutland: {
		num: 508,
		name: "Stoutland",
		types: ["Normal"],
		baseStats: { hp: 85, atk: 110, def: 90, spa: 45, spd: 90, spe: 80 },
		abilities: { 0: "Intimidate", 1: "Sand Rush", H: "Scrappy" },
		heightm: 1.2,
		weightkg: 61,
		color: "Gray",
		prevo: "Herdier",
		evoLevel: 32,
		eggGroups: ["Field"],
	},
	purrloin: {
		num: 509,
		name: "Purrloin",
		types: ["Dark"],
		baseStats: { hp: 41, atk: 50, def: 37, spa: 50, spd: 37, spe: 66 },
		abilities: { 0: "Limber", 1: "Unburden", H: "Prankster" },
		heightm: 0.4,
		weightkg: 10.1,
		color: "Purple",
		evos: ["Liepard"],
		eggGroups: ["Field"],
	},
	liepard: {
		num: 510,
		name: "Liepard",
		types: ["Dark"],
		baseStats: { hp: 64, atk: 88, def: 50, spa: 88, spd: 50, spe: 106 },
		abilities: { 0: "Limber", 1: "Unburden", H: "Prankster" },
		heightm: 1.1,
		weightkg: 37.5,
		color: "Purple",
		prevo: "Purrloin",
		evoLevel: 20,
		eggGroups: ["Field"],
	},
	pansage: {
		num: 511,
		name: "Pansage",
		types: ["Grass"],
		genderRatio: { M: 0.875, F: 0.125 },
		baseStats: { hp: 50, atk: 53, def: 48, spa: 53, spd: 48, spe: 64 },
		abilities: { 0: "Gluttony", H: "Overgrow" },
		heightm: 0.6,
		weightkg: 10.5,
		color: "Green",
		evos: ["Simisage"],
		eggGroups: ["Field"],
	},
	simisage: {
		num: 512,
		name: "Simisage",
		types: ["Grass"],
		genderRatio: { M: 0.875, F: 0.125 },
		baseStats: { hp: 75, atk: 98, def: 63, spa: 98, spd: 63, spe: 101 },
		abilities: { 0: "Gluttony", H: "Overgrow" },
		heightm: 1.1,
		weightkg: 30.5,
		color: "Green",
		prevo: "Pansage",
		evoType: "useItem",
		evoItem: "Leaf Stone",
		eggGroups: ["Field"],
	},
	pansear: {
		num: 513,
		name: "Pansear",
		types: ["Fire"],
		genderRatio: { M: 0.875, F: 0.125 },
		baseStats: { hp: 50, atk: 53, def: 48, spa: 53, spd: 48, spe: 64 },
		abilities: { 0: "Gluttony", H: "Blaze" },
		heightm: 0.6,
		weightkg: 11,
		color: "Red",
		evos: ["Simisear"],
		eggGroups: ["Field"],
	},
	simisear: {
		num: 514,
		name: "Simisear",
		types: ["Fire"],
		genderRatio: { M: 0.875, F: 0.125 },
		baseStats: { hp: 75, atk: 98, def: 63, spa: 98, spd: 63, spe: 101 },
		abilities: { 0: "Gluttony", H: "Blaze" },
		heightm: 1,
		weightkg: 28,
		color: "Red",
		prevo: "Pansear",
		evoType: "useItem",
		evoItem: "Fire Stone",
		eggGroups: ["Field"],
	},
	panpour: {
		num: 515,
		name: "Panpour",
		types: ["Water"],
		genderRatio: { M: 0.875, F: 0.125 },
		baseStats: { hp: 50, atk: 53, def: 48, spa: 53, spd: 48, spe: 64 },
		abilities: { 0: "Gluttony", H: "Torrent" },
		heightm: 0.6,
		weightkg: 13.5,
		color: "Blue",
		evos: ["Simipour"],
		eggGroups: ["Field"],
	},
	simipour: {
		num: 516,
		name: "Simipour",
		types: ["Water"],
		genderRatio: { M: 0.875, F: 0.125 },
		baseStats: { hp: 75, atk: 98, def: 63, spa: 98, spd: 63, spe: 101 },
		abilities: { 0: "Gluttony", H: "Torrent" },
		heightm: 1,
		weightkg: 29,
		color: "Blue",
		prevo: "Panpour",
		evoType: "useItem",
		evoItem: "Water Stone",
		eggGroups: ["Field"],
	},
	munna: {
		num: 517,
		name: "Munna",
		types: ["Psychic"],
		baseStats: { hp: 76, atk: 25, def: 45, spa: 67, spd: 55, spe: 24 },
		abilities: { 0: "Forewarn", 1: "Synchronize", H: "Telepathy" },
		heightm: 0.6,
		weightkg: 23.3,
		color: "Pink",
		evos: ["Musharna"],
		eggGroups: ["Field"],
	},
	musharna: {
		num: 518,
		name: "Musharna",
		types: ["Psychic"],
		baseStats: { hp: 116, atk: 55, def: 85, spa: 107, spd: 95, spe: 29 },
		abilities: { 0: "Forewarn", 1: "Synchronize", H: "Telepathy" },
		heightm: 1.1,
		weightkg: 60.5,
		color: "Pink",
		prevo: "Munna",
		evoType: "useItem",
		evoItem: "Moon Stone",
		eggGroups: ["Field"],
	},
	pidove: {
		num: 519,
		name: "Pidove",
		types: ["Normal", "Flying"],
		baseStats: { hp: 50, atk: 55, def: 50, spa: 36, spd: 30, spe: 43 },
		abilities: { 0: "Big Pecks", 1: "Super Luck", H: "Rivalry" },
		heightm: 0.3,
		weightkg: 2.1,
		color: "Gray",
		evos: ["Tranquill"],
		eggGroups: ["Flying"],
	},
	tranquill: {
		num: 520,
		name: "Tranquill",
		types: ["Normal", "Flying"],
		baseStats: { hp: 62, atk: 77, def: 62, spa: 50, spd: 42, spe: 65 },
		abilities: { 0: "Big Pecks", 1: "Super Luck", H: "Rivalry" },
		heightm: 0.6,
		weightkg: 15,
		color: "Gray",
		prevo: "Pidove",
		evoLevel: 21,
		evos: ["Unfezant"],
		eggGroups: ["Flying"],
	},
	unfezant: {
		num: 521,
		name: "Unfezant",
		types: ["Normal", "Flying"],
		baseStats: { hp: 80, atk: 115, def: 80, spa: 65, spd: 55, spe: 93 },
		abilities: { 0: "Big Pecks", 1: "Super Luck", H: "Rivalry" },
		heightm: 1.2,
		weightkg: 29,
		color: "Gray",
		prevo: "Tranquill",
		evoLevel: 32,
		eggGroups: ["Flying"],
	},
	blitzle: {
		num: 522,
		name: "Blitzle",
		types: ["Electric"],
		baseStats: { hp: 45, atk: 60, def: 32, spa: 50, spd: 32, spe: 76 },
		abilities: { 0: "Lightning Rod", 1: "Motor Drive", H: "Sap Sipper" },
		heightm: 0.8,
		weightkg: 29.8,
		color: "Black",
		evos: ["Zebstrika"],
		eggGroups: ["Field"],
	},
	zebstrika: {
		num: 523,
		name: "Zebstrika",
		types: ["Electric"],
		baseStats: { hp: 75, atk: 100, def: 63, spa: 80, spd: 63, spe: 116 },
		abilities: { 0: "Lightning Rod", 1: "Motor Drive", H: "Sap Sipper" },
		heightm: 1.6,
		weightkg: 79.5,
		color: "Black",
		prevo: "Blitzle",
		evoLevel: 27,
		eggGroups: ["Field"],
	},
	roggenrola: {
		num: 524,
		name: "Roggenrola",
		types: ["Rock"],
		baseStats: { hp: 55, atk: 75, def: 85, spa: 25, spd: 25, spe: 15 },
		abilities: { 0: "Sturdy", 1: "Weak Armor", H: "Sand Force" },
		heightm: 0.4,
		weightkg: 18,
		color: "Blue",
		evos: ["Boldore"],
		eggGroups: ["Mineral"],
	},
	boldore: {
		num: 525,
		name: "Boldore",
		types: ["Rock"],
		baseStats: { hp: 70, atk: 105, def: 105, spa: 50, spd: 40, spe: 20 },
		abilities: { 0: "Sturdy", 1: "Weak Armor", H: "Sand Force" },
		heightm: 0.9,
		weightkg: 102,
		color: "Blue",
		prevo: "Roggenrola",
		evoLevel: 25,
		evos: ["Gigalith"],
		eggGroups: ["Mineral"],
	},
	gigalith: {
		num: 526,
		name: "Gigalith",
		types: ["Rock"],
		baseStats: { hp: 85, atk: 135, def: 130, spa: 60, spd: 80, spe: 25 },
		abilities: { 0: "Sturdy", 1: "Sand Stream", H: "Sand Force" },
		heightm: 1.7,
		weightkg: 260,
		color: "Blue",
		prevo: "Boldore",
		evoType: "trade",
		eggGroups: ["Mineral"],
	},
	woobat: {
		num: 527,
		name: "Woobat",
		types: ["Psychic", "Flying"],
		baseStats: { hp: 65, atk: 45, def: 43, spa: 55, spd: 43, spe: 72 },
		abilities: { 0: "Unaware", 1: "Klutz", H: "Simple" },
		heightm: 0.4,
		weightkg: 2.1,
		color: "Blue",
		evos: ["Swoobat"],
		eggGroups: ["Flying", "Field"],
	},
	swoobat: {
		num: 528,
		name: "Swoobat",
		types: ["Psychic", "Flying"],
		baseStats: { hp: 67, atk: 57, def: 55, spa: 77, spd: 55, spe: 114 },
		abilities: { 0: "Unaware", 1: "Klutz", H: "Simple" },
		heightm: 0.9,
		weightkg: 10.5,
		color: "Blue",
		prevo: "Woobat",
		evoType: "levelFriendship",
		eggGroups: ["Flying", "Field"],
	},
	drilbur: {
		num: 529,
		name: "Drilbur",
		types: ["Ground"],
		baseStats: { hp: 60, atk: 85, def: 40, spa: 30, spd: 45, spe: 68 },
		abilities: { 0: "Sand Rush", 1: "Sand Force", H: "Mold Breaker" },
		heightm: 0.3,
		weightkg: 8.5,
		color: "Gray",
		evos: ["Excadrill"],
		eggGroups: ["Field"],
	},
	excadrill: {
		num: 530,
		name: "Excadrill",
		types: ["Ground", "Steel"],
		baseStats: { hp: 110, atk: 135, def: 60, spa: 50, spd: 65, spe: 88 },
		abilities: { 0: "Sand Rush", 1: "Sand Force", H: "Mold Breaker" },
		heightm: 0.7,
		weightkg: 40.4,
		color: "Gray",
		prevo: "Drilbur",
		evoLevel: 31,
		eggGroups: ["Field"],
	},
	audino: {
		num: 531,
		name: "Audino",
		types: ["Normal"],
		baseStats: { hp: 103, atk: 60, def: 86, spa: 60, spd: 86, spe: 50 },
		abilities: { 0: "Healer", 1: "Regenerator", H: "Klutz" },
		heightm: 1.1,
		weightkg: 31,
		color: "Pink",
		eggGroups: ["Fairy"],
		otherFormes: ["Audino-Mega"],
		formeOrder: ["Audino", "Audino-Mega"],
	},
	audinomega: {
		num: 531,
		name: "Audino-Mega",
		baseSpecies: "Audino",
		forme: "Mega",
		types: ["Normal", "Fairy"],
		baseStats: { hp: 103, atk: 60, def: 126, spa: 80, spd: 126, spe: 50 },
		abilities: { 0: "Healer" },
		heightm: 1.5,
		weightkg: 32,
		color: "White",
		eggGroups: ["Fairy"],
		requiredItem: "Audinite",
	},
	timburr: {
		num: 532,
		name: "Timburr",
		types: ["Fighting"],
		genderRatio: { M: 0.75, F: 0.25 },
		baseStats: { hp: 75, atk: 80, def: 55, spa: 25, spd: 35, spe: 35 },
		abilities: { 0: "Guts", 1: "Sheer Force", H: "Iron Fist" },
		heightm: 0.6,
		weightkg: 12.5,
		color: "Gray",
		evos: ["Gurdurr"],
		eggGroups: ["Human-Like"],
	},
	gurdurr: {
		num: 533,
		name: "Gurdurr",
		types: ["Fighting"],
		genderRatio: { M: 0.75, F: 0.25 },
		baseStats: { hp: 85, atk: 105, def: 85, spa: 40, spd: 50, spe: 40 },
		abilities: { 0: "Guts", 1: "Sheer Force", H: "Iron Fist" },
		heightm: 1.2,
		weightkg: 40,
		color: "Gray",
		prevo: "Timburr",
		evoLevel: 25,
		evos: ["Conkeldurr"],
		eggGroups: ["Human-Like"],
	},
	conkeldurr: {
		num: 534,
		name: "Conkeldurr",
		types: ["Fighting"],
		genderRatio: { M: 0.75, F: 0.25 },
		baseStats: { hp: 105, atk: 140, def: 95, spa: 55, spd: 65, spe: 45 },
		abilities: { 0: "Guts", 1: "Sheer Force", H: "Iron Fist" },
		heightm: 1.4,
		weightkg: 87,
		color: "Brown",
		prevo: "Gurdurr",
		evoType: "trade",
		eggGroups: ["Human-Like"],
	},
	tympole: {
		num: 535,
		name: "Tympole",
		types: ["Water"],
		baseStats: { hp: 50, atk: 50, def: 40, spa: 50, spd: 40, spe: 64 },
		abilities: { 0: "Swift Swim", 1: "Hydration", H: "Water Absorb" },
		heightm: 0.5,
		weightkg: 4.5,
		color: "Blue",
		evos: ["Palpitoad"],
		eggGroups: ["Water 1"],
	},
	palpitoad: {
		num: 536,
		name: "Palpitoad",
		types: ["Water", "Ground"],
		baseStats: { hp: 75, atk: 65, def: 55, spa: 65, spd: 55, spe: 69 },
		abilities: { 0: "Swift Swim", 1: "Hydration", H: "Water Absorb" },
		heightm: 0.8,
		weightkg: 17,
		color: "Blue",
		prevo: "Tympole",
		evoLevel: 25,
		evos: ["Seismitoad"],
		eggGroups: ["Water 1"],
	},
	seismitoad: {
		num: 537,
		name: "Seismitoad",
		types: ["Water", "Ground"],
		baseStats: { hp: 105, atk: 95, def: 75, spa: 85, spd: 75, spe: 74 },
		abilities: { 0: "Swift Swim", 1: "Poison Touch", H: "Water Absorb" },
		heightm: 1.5,
		weightkg: 62,
		color: "Blue",
		prevo: "Palpitoad",
		evoLevel: 36,
		eggGroups: ["Water 1"],
	},
	throh: {
		num: 538,
		name: "Throh",
		types: ["Fighting"],
		gender: "M",
		baseStats: { hp: 120, atk: 100, def: 85, spa: 30, spd: 85, spe: 45 },
		abilities: { 0: "Guts", 1: "Inner Focus", H: "Mold Breaker" },
		heightm: 1.3,
		weightkg: 55.5,
		color: "Red",
		eggGroups: ["Human-Like"],
	},
	sawk: {
		num: 539,
		name: "Sawk",
		types: ["Fighting"],
		gender: "M",
		baseStats: { hp: 75, atk: 125, def: 75, spa: 30, spd: 75, spe: 85 },
		abilities: { 0: "Sturdy", 1: "Inner Focus", H: "Mold Breaker" },
		heightm: 1.4,
		weightkg: 51,
		color: "Blue",
		eggGroups: ["Human-Like"],
	},
	sewaddle: {
		num: 540,
		name: "Sewaddle",
		types: ["Bug", "Grass"],
		baseStats: { hp: 45, atk: 53, def: 70, spa: 40, spd: 60, spe: 42 },
		abilities: { 0: "Swarm", 1: "Chlorophyll", H: "Overcoat" },
		heightm: 0.3,
		weightkg: 2.5,
		color: "Yellow",
		evos: ["Swadloon"],
		eggGroups: ["Bug"],
	},
	swadloon: {
		num: 541,
		name: "Swadloon",
		types: ["Bug", "Grass"],
		baseStats: { hp: 55, atk: 63, def: 90, spa: 50, spd: 80, spe: 42 },
		abilities: { 0: "Leaf Guard", 1: "Chlorophyll", H: "Overcoat" },
		heightm: 0.5,
		weightkg: 7.3,
		color: "Green",
		prevo: "Sewaddle",
		evoLevel: 20,
		evos: ["Leavanny"],
		eggGroups: ["Bug"],
	},
	leavanny: {
		num: 542,
		name: "Leavanny",
		types: ["Bug", "Grass"],
		baseStats: { hp: 75, atk: 103, def: 80, spa: 70, spd: 80, spe: 92 },
		abilities: { 0: "Swarm", 1: "Chlorophyll", H: "Overcoat" },
		heightm: 1.2,
		weightkg: 20.5,
		color: "Yellow",
		prevo: "Swadloon",
		evoType: "levelFriendship",
		eggGroups: ["Bug"],
	},
	venipede: {
		num: 543,
		name: "Venipede",
		types: ["Bug", "Poison"],
		baseStats: { hp: 30, atk: 45, def: 59, spa: 30, spd: 39, spe: 57 },
		abilities: { 0: "Poison Point", 1: "Swarm", H: "Speed Boost" },
		heightm: 0.4,
		weightkg: 5.3,
		color: "Red",
		evos: ["Whirlipede"],
		eggGroups: ["Bug"],
	},
	whirlipede: {
		num: 544,
		name: "Whirlipede",
		types: ["Bug", "Poison"],
		baseStats: { hp: 40, atk: 55, def: 99, spa: 40, spd: 79, spe: 47 },
		abilities: { 0: "Poison Point", 1: "Swarm", H: "Speed Boost" },
		heightm: 1.2,
		weightkg: 58.5,
		color: "Gray",
		prevo: "Venipede",
		evoLevel: 22,
		evos: ["Scolipede"],
		eggGroups: ["Bug"],
	},
	scolipede: {
		num: 545,
		name: "Scolipede",
		types: ["Bug", "Poison"],
		baseStats: { hp: 60, atk: 100, def: 89, spa: 55, spd: 69, spe: 112 },
		abilities: { 0: "Poison Point", 1: "Swarm", H: "Speed Boost" },
		heightm: 2.5,
		weightkg: 200.5,
		color: "Red",
		prevo: "Whirlipede",
		evoLevel: 30,
		eggGroups: ["Bug"],
	},
	cottonee: {
		num: 546,
		name: "Cottonee",
		types: ["Grass", "Fairy"],
		baseStats: { hp: 40, atk: 27, def: 60, spa: 37, spd: 50, spe: 66 },
		abilities: { 0: "Prankster", 1: "Infiltrator", H: "Chlorophyll" },
		heightm: 0.3,
		weightkg: 0.6,
		color: "Green",
		evos: ["Whimsicott"],
		eggGroups: ["Fairy", "Grass"],
	},
	whimsicott: {
		num: 547,
		name: "Whimsicott",
		types: ["Grass", "Fairy"],
		baseStats: { hp: 60, atk: 67, def: 85, spa: 77, spd: 75, spe: 116 },
		abilities: { 0: "Prankster", 1: "Infiltrator", H: "Chlorophyll" },
		heightm: 0.7,
		weightkg: 6.6,
		color: "Green",
		prevo: "Cottonee",
		evoType: "useItem",
		evoItem: "Sun Stone",
		eggGroups: ["Fairy", "Grass"],
	},
	petilil: {
		num: 548,
		name: "Petilil",
		types: ["Grass"],
		gender: "F",
		baseStats: { hp: 45, atk: 35, def: 50, spa: 70, spd: 50, spe: 30 },
		abilities: { 0: "Chlorophyll", 1: "Own Tempo", H: "Leaf Guard" },
		heightm: 0.5,
		weightkg: 6.6,
		color: "Green",
		evos: ["Lilligant"],
		eggGroups: ["Grass"],
	},
	lilligant: {
		num: 549,
		name: "Lilligant",
		types: ["Grass"],
		gender: "F",
		baseStats: { hp: 70, atk: 60, def: 75, spa: 110, spd: 75, spe: 90 },
		abilities: { 0: "Chlorophyll", 1: "Own Tempo", H: "Leaf Guard" },
		heightm: 1.1,
		weightkg: 16.3,
		color: "Green",
		prevo: "Petilil",
		evoType: "useItem",
		evoItem: "Sun Stone",
		eggGroups: ["Grass"],
	},
	basculin: {
		num: 550,
		name: "Basculin",
		baseForme: "Red-Striped",
		types: ["Water"],
		baseStats: { hp: 70, atk: 92, def: 65, spa: 80, spd: 55, spe: 98 },
		abilities: { 0: "Reckless", 1: "Adaptability", H: "Mold Breaker" },
		heightm: 1,
		weightkg: 18,
		color: "Green",
		eggGroups: ["Water 2"],
		otherFormes: ["Basculin-Blue-Striped"],
		formeOrder: ["Basculin", "Basculin-Blue-Striped"],
	},
	basculinbluestriped: {
		num: 550,
		name: "Basculin-Blue-Striped",
		baseSpecies: "Basculin",
		forme: "Blue-Striped",
		types: ["Water"],
		baseStats: { hp: 70, atk: 92, def: 65, spa: 80, spd: 55, spe: 98 },
		abilities: { 0: "Rock Head", 1: "Adaptability", H: "Mold Breaker" },
		heightm: 1,
		weightkg: 18,
		color: "Green",
		eggGroups: ["Water 2"],
	},
	sandile: {
		num: 551,
		name: "Sandile",
		types: ["Ground", "Dark"],
		baseStats: { hp: 50, atk: 72, def: 35, spa: 35, spd: 35, spe: 65 },
		abilities: { 0: "Intimidate", 1: "Moxie", H: "Anger Point" },
		heightm: 0.7,
		weightkg: 15.2,
		color: "Brown",
		evos: ["Krokorok"],
		eggGroups: ["Field"],
	},
	krokorok: {
		num: 552,
		name: "Krokorok",
		types: ["Ground", "Dark"],
		baseStats: { hp: 60, atk: 82, def: 45, spa: 45, spd: 45, spe: 74 },
		abilities: { 0: "Intimidate", 1: "Moxie", H: "Anger Point" },
		heightm: 1,
		weightkg: 33.4,
		color: "Brown",
		prevo: "Sandile",
		evoLevel: 29,
		evos: ["Krookodile"],
		eggGroups: ["Field"],
	},
	krookodile: {
		num: 553,
		name: "Krookodile",
		types: ["Ground", "Dark"],
		baseStats: { hp: 95, atk: 117, def: 80, spa: 65, spd: 70, spe: 92 },
		abilities: { 0: "Intimidate", 1: "Moxie", H: "Anger Point" },
		heightm: 1.5,
		weightkg: 96.3,
		color: "Red",
		prevo: "Krokorok",
		evoLevel: 40,
		eggGroups: ["Field"],
	},
	darumaka: {
		num: 554,
		name: "Darumaka",
		types: ["Fire"],
		baseStats: { hp: 70, atk: 90, def: 45, spa: 15, spd: 45, spe: 50 },
		abilities: { 0: "Hustle", H: "Inner Focus" },
		heightm: 0.6,
		weightkg: 37.5,
		color: "Red",
		evos: ["Darmanitan"],
		eggGroups: ["Field"],
		otherFormes: ["Darumaka-Galar"],
		formeOrder: ["Darumaka", "Darumaka-Galar"],
	},
	darumakagalar: {
		num: 554,
		name: "Darumaka-Galar",
		baseSpecies: "Darumaka",
		forme: "Galar",
		types: ["Ice"],
		baseStats: { hp: 70, atk: 90, def: 45, spa: 15, spd: 45, spe: 50 },
		abilities: { 0: "Hustle", H: "Inner Focus" },
		heightm: 0.7,
		weightkg: 40,
		color: "White",
		evos: ["Darmanitan-Galar"],
		eggGroups: ["Field"],
	},
	darmanitan: {
		num: 555,
		name: "Darmanitan",
		baseForme: "Standard",
		types: ["Fire"],
		baseStats: { hp: 105, atk: 140, def: 55, spa: 30, spd: 55, spe: 95 },
		abilities: { 0: "Sheer Force", H: "Zen Mode" },
		heightm: 1.3,
		weightkg: 92.9,
		color: "Red",
		prevo: "Darumaka",
		evoLevel: 35,
		eggGroups: ["Field"],
		otherFormes: ["Darmanitan-Zen", "Darmanitan-Galar", "Darmanitan-Galar-Zen"],
		formeOrder: ["Darmanitan", "Darmanitan-Zen", "Darmanitan-Galar", "Darmanitan-Galar-Zen"],
	},
	darmanitanzen: {
		num: 555,
		name: "Darmanitan-Zen",
		baseSpecies: "Darmanitan",
		forme: "Zen",
		types: ["Fire", "Psychic"],
		baseStats: { hp: 105, atk: 30, def: 105, spa: 140, spd: 105, spe: 55 },
		abilities: { 0: "Zen Mode" },
		heightm: 1.3,
		weightkg: 92.9,
		color: "Blue",
		eggGroups: ["Field"],
		requiredAbility: "Zen Mode",
		battleOnly: "Darmanitan",
	},
	darmanitangalar: {
		num: 555,
		name: "Darmanitan-Galar",
		baseSpecies: "Darmanitan",
		forme: "Galar",
		types: ["Ice"],
		baseStats: { hp: 105, atk: 140, def: 55, spa: 30, spd: 55, spe: 95 },
		abilities: { 0: "Gorilla Tactics", H: "Zen Mode" },
		heightm: 1.7,
		weightkg: 120,
		color: "White",
		prevo: "Darumaka-Galar",
		evoType: "useItem",
		evoItem: "Ice Stone",
		eggGroups: ["Field"],
	},
	darmanitangalarzen: {
		num: 555,
		name: "Darmanitan-Galar-Zen",
		baseSpecies: "Darmanitan",
		forme: "Galar-Zen",
		types: ["Ice", "Fire"],
		baseStats: { hp: 105, atk: 160, def: 55, spa: 30, spd: 55, spe: 135 },
		abilities: { 0: "Zen Mode" },
		heightm: 1.7,
		weightkg: 120,
		color: "White",
		eggGroups: ["Field"],
		requiredAbility: "Zen Mode",
		battleOnly: "Darmanitan-Galar",
	},
	maractus: {
		num: 556,
		name: "Maractus",
		types: ["Grass"],
		baseStats: { hp: 75, atk: 86, def: 67, spa: 106, spd: 67, spe: 60 },
		abilities: { 0: "Water Absorb", 1: "Chlorophyll", H: "Storm Drain" },
		heightm: 1,
		weightkg: 28,
		color: "Green",
		eggGroups: ["Grass"],
	},
	dwebble: {
		num: 557,
		name: "Dwebble",
		types: ["Bug", "Rock"],
		baseStats: { hp: 50, atk: 65, def: 85, spa: 35, spd: 35, spe: 55 },
		abilities: { 0: "Sturdy", 1: "Shell Armor", H: "Weak Armor" },
		heightm: 0.3,
		weightkg: 14.5,
		color: "Red",
		evos: ["Crustle"],
		eggGroups: ["Bug", "Mineral"],
	},
	crustle: {
		num: 558,
		name: "Crustle",
		types: ["Bug", "Rock"],
		baseStats: { hp: 70, atk: 105, def: 125, spa: 65, spd: 75, spe: 45 },
		abilities: { 0: "Sturdy", 1: "Shell Armor", H: "Weak Armor" },
		heightm: 1.4,
		weightkg: 200,
		color: "Red",
		prevo: "Dwebble",
		evoLevel: 34,
		eggGroups: ["Bug", "Mineral"],
	},
	scraggy: {
		num: 559,
		name: "Scraggy",
		types: ["Dark", "Fighting"],
		baseStats: { hp: 50, atk: 75, def: 70, spa: 35, spd: 70, spe: 48 },
		abilities: { 0: "Shed Skin", 1: "Moxie", H: "Intimidate" },
		heightm: 0.6,
		weightkg: 11.8,
		color: "Yellow",
		evos: ["Scrafty"],
		eggGroups: ["Field", "Dragon"],
	},
	scrafty: {
		num: 560,
		name: "Scrafty",
		types: ["Dark", "Fighting"],
		baseStats: { hp: 65, atk: 90, def: 115, spa: 45, spd: 115, spe: 58 },
		abilities: { 0: "Shed Skin", 1: "Moxie", H: "Intimidate" },
		heightm: 1.1,
		weightkg: 30,
		color: "Red",
		prevo: "Scraggy",
		evoLevel: 39,
		eggGroups: ["Field", "Dragon"],
	},
	sigilyph: {
		num: 561,
		name: "Sigilyph",
		types: ["Psychic", "Flying"],
		baseStats: { hp: 72, atk: 58, def: 80, spa: 103, spd: 80, spe: 97 },
		abilities: { 0: "Wonder Skin", 1: "Magic Guard", H: "Tinted Lens" },
		heightm: 1.4,
		weightkg: 14,
		color: "Black",
		eggGroups: ["Flying"],
	},
	yamask: {
		num: 562,
		name: "Yamask",
		types: ["Ghost"],
		baseStats: { hp: 38, atk: 30, def: 85, spa: 55, spd: 65, spe: 30 },
		abilities: { 0: "Mummy" },
		heightm: 0.5,
		weightkg: 1.5,
		color: "Black",
		evos: ["Cofagrigus"],
		eggGroups: ["Mineral", "Amorphous"],
		otherFormes: ["Yamask-Galar"],
		formeOrder: ["Yamask", "Yamask-Galar"],
	},
	yamaskgalar: {
		num: 562,
		name: "Yamask-Galar",
		baseSpecies: "Yamask",
		forme: "Galar",
		types: ["Ground", "Ghost"],
		baseStats: { hp: 38, atk: 55, def: 85, spa: 30, spd: 65, spe: 30 },
		abilities: { 0: "Wandering Spirit" },
		heightm: 0.5,
		weightkg: 1.5,
		color: "Black",
		evos: ["Runerigus"],
		eggGroups: ["Mineral", "Amorphous"],
	},
	cofagrigus: {
		num: 563,
		name: "Cofagrigus",
		types: ["Ghost"],
		baseStats: { hp: 58, atk: 50, def: 145, spa: 95, spd: 105, spe: 30 },
		abilities: { 0: "Mummy" },
		heightm: 1.7,
		weightkg: 76.5,
		color: "Yellow",
		prevo: "Yamask",
		evoLevel: 34,
		eggGroups: ["Mineral", "Amorphous"],
	},
	tirtouga: {
		num: 564,
		name: "Tirtouga",
		types: ["Water", "Rock"],
		genderRatio: { M: 0.875, F: 0.125 },
		baseStats: { hp: 54, atk: 78, def: 103, spa: 53, spd: 45, spe: 22 },
		abilities: { 0: "Solid Rock", 1: "Sturdy", H: "Swift Swim" },
		heightm: 0.7,
		weightkg: 16.5,
		color: "Blue",
		evos: ["Carracosta"],
		eggGroups: ["Water 1", "Water 3"],
	},
	carracosta: {
		num: 565,
		name: "Carracosta",
		types: ["Water", "Rock"],
		genderRatio: { M: 0.875, F: 0.125 },
		baseStats: { hp: 74, atk: 108, def: 133, spa: 83, spd: 65, spe: 32 },
		abilities: { 0: "Solid Rock", 1: "Sturdy", H: "Swift Swim" },
		heightm: 1.2,
		weightkg: 81,
		color: "Blue",
		prevo: "Tirtouga",
		evoLevel: 37,
		eggGroups: ["Water 1", "Water 3"],
	},
	archen: {
		num: 566,
		name: "Archen",
		types: ["Rock", "Flying"],
		genderRatio: { M: 0.875, F: 0.125 },
		baseStats: { hp: 55, atk: 112, def: 45, spa: 74, spd: 45, spe: 70 },
		abilities: { 0: "Defeatist" },
		heightm: 0.5,
		weightkg: 9.5,
		color: "Yellow",
		evos: ["Archeops"],
		eggGroups: ["Flying", "Water 3"],
	},
	archeops: {
		num: 567,
		name: "Archeops",
		types: ["Rock", "Flying"],
		genderRatio: { M: 0.875, F: 0.125 },
		baseStats: { hp: 75, atk: 140, def: 65, spa: 112, spd: 65, spe: 110 },
		abilities: { 0: "Defeatist" },
		heightm: 1.4,
		weightkg: 32,
		color: "Yellow",
		prevo: "Archen",
		evoLevel: 37,
		eggGroups: ["Flying", "Water 3"],
	},
	trubbish: {
		num: 568,
		name: "Trubbish",
		types: ["Poison"],
		baseStats: { hp: 50, atk: 50, def: 62, spa: 40, spd: 62, spe: 65 },
		abilities: { 0: "Stench", 1: "Sticky Hold", H: "Aftermath" },
		heightm: 0.6,
		weightkg: 31,
		color: "Green",
		evos: ["Garbodor"],
		eggGroups: ["Mineral"],
	},
	garbodor: {
		num: 569,
		name: "Garbodor",
		types: ["Poison"],
		baseStats: { hp: 80, atk: 95, def: 82, spa: 60, spd: 82, spe: 75 },
		abilities: { 0: "Stench", 1: "Weak Armor", H: "Aftermath" },
		heightm: 1.9,
		weightkg: 107.3,
		color: "Green",
		prevo: "Trubbish",
		evoLevel: 36,
		eggGroups: ["Mineral"],
		canGigantamax: "G-Max Malodor",
	},
	garbodorgmax: {
		num: 569,
		name: "Garbodor-Gmax",
		baseSpecies: "Garbodor",
		forme: "Gmax",
		types: ["Poison"],
		baseStats: { hp: 80, atk: 95, def: 82, spa: 60, spd: 82, spe: 75 },
		abilities: { 0: "Stench", 1: "Weak Armor", H: "Aftermath" },
		heightm: 21,
		weightkg: 0,
		color: "Green",
		eggGroups: ["Mineral"],
		changesFrom: "Garbodor",
	},
	zorua: {
		num: 570,
		name: "Zorua",
		types: ["Dark"],
		genderRatio: { M: 0.875, F: 0.125 },
		baseStats: { hp: 40, atk: 65, def: 40, spa: 80, spd: 40, spe: 65 },
		abilities: { 0: "Illusion" },
		heightm: 0.7,
		weightkg: 12.5,
		color: "Gray",
		evos: ["Zoroark"],
		eggGroups: ["Field"],
	},
	zoroark: {
		num: 571,
		name: "Zoroark",
		types: ["Dark"],
		genderRatio: { M: 0.875, F: 0.125 },
		baseStats: { hp: 60, atk: 105, def: 60, spa: 120, spd: 60, spe: 105 },
		abilities: { 0: "Illusion" },
		heightm: 1.6,
		weightkg: 81.1,
		color: "Gray",
		prevo: "Zorua",
		evoLevel: 30,
		eggGroups: ["Field"],
	},
	minccino: {
		num: 572,
		name: "Minccino",
		types: ["Normal"],
		genderRatio: { M: 0.25, F: 0.75 },
		baseStats: { hp: 55, atk: 50, def: 40, spa: 40, spd: 40, spe: 75 },
		abilities: { 0: "Cute Charm", 1: "Technician", H: "Skill Link" },
		heightm: 0.4,
		weightkg: 5.8,
		color: "Gray",
		evos: ["Cinccino"],
		eggGroups: ["Field"],
	},
	cinccino: {
		num: 573,
		name: "Cinccino",
		types: ["Normal"],
		genderRatio: { M: 0.25, F: 0.75 },
		baseStats: { hp: 75, atk: 95, def: 60, spa: 65, spd: 60, spe: 115 },
		abilities: { 0: "Cute Charm", 1: "Technician", H: "Skill Link" },
		heightm: 0.5,
		weightkg: 7.5,
		color: "Gray",
		prevo: "Minccino",
		evoType: "useItem",
		evoItem: "Shiny Stone",
		eggGroups: ["Field"],
	},
	gothita: {
		num: 574,
		name: "Gothita",
		types: ["Psychic"],
		genderRatio: { M: 0.25, F: 0.75 },
		baseStats: { hp: 45, atk: 30, def: 50, spa: 55, spd: 65, spe: 45 },
		abilities: { 0: "Frisk", 1: "Competitive", H: "Shadow Tag" },
		heightm: 0.4,
		weightkg: 5.8,
		color: "Purple",
		evos: ["Gothorita"],
		eggGroups: ["Human-Like"],
	},
	gothorita: {
		num: 575,
		name: "Gothorita",
		types: ["Psychic"],
		genderRatio: { M: 0.25, F: 0.75 },
		baseStats: { hp: 60, atk: 45, def: 70, spa: 75, spd: 85, spe: 55 },
		abilities: { 0: "Frisk", 1: "Competitive", H: "Shadow Tag" },
		heightm: 0.7,
		weightkg: 18,
		color: "Purple",
		prevo: "Gothita",
		evoLevel: 32,
		evos: ["Gothitelle"],
		eggGroups: ["Human-Like"],
	},
	gothitelle: {
		num: 576,
		name: "Gothitelle",
		types: ["Psychic"],
		genderRatio: { M: 0.25, F: 0.75 },
		baseStats: { hp: 70, atk: 55, def: 95, spa: 95, spd: 110, spe: 65 },
		abilities: { 0: "Frisk", 1: "Competitive", H: "Shadow Tag" },
		heightm: 1.5,
		weightkg: 44,
		color: "Purple",
		prevo: "Gothorita",
		evoLevel: 41,
		eggGroups: ["Human-Like"],
	},
	solosis: {
		num: 577,
		name: "Solosis",
		types: ["Psychic"],
		baseStats: { hp: 45, atk: 30, def: 40, spa: 105, spd: 50, spe: 20 },
		abilities: { 0: "Overcoat", 1: "Magic Guard", H: "Regenerator" },
		heightm: 0.3,
		weightkg: 1,
		color: "Green",
		evos: ["Duosion"],
		eggGroups: ["Amorphous"],
	},
	duosion: {
		num: 578,
		name: "Duosion",
		types: ["Psychic"],
		baseStats: { hp: 65, atk: 40, def: 50, spa: 125, spd: 60, spe: 30 },
		abilities: { 0: "Overcoat", 1: "Magic Guard", H: "Regenerator" },
		heightm: 0.6,
		weightkg: 8,
		color: "Green",
		prevo: "Solosis",
		evoLevel: 32,
		evos: ["Reuniclus"],
		eggGroups: ["Amorphous"],
	},
	reuniclus: {
		num: 579,
		name: "Reuniclus",
		types: ["Psychic"],
		baseStats: { hp: 110, atk: 65, def: 75, spa: 125, spd: 85, spe: 30 },
		abilities: { 0: "Overcoat", 1: "Magic Guard", H: "Regenerator" },
		heightm: 1,
		weightkg: 20.1,
		color: "Green",
		prevo: "Duosion",
		evoLevel: 41,
		eggGroups: ["Amorphous"],
	},
	ducklett: {
		num: 580,
		name: "Ducklett",
		types: ["Water", "Flying"],
		baseStats: { hp: 62, atk: 44, def: 50, spa: 44, spd: 50, spe: 55 },
		abilities: { 0: "Keen Eye", 1: "Big Pecks", H: "Hydration" },
		heightm: 0.5,
		weightkg: 5.5,
		color: "Blue",
		evos: ["Swanna"],
		eggGroups: ["Water 1", "Flying"],
	},
	swanna: {
		num: 581,
		name: "Swanna",
		types: ["Water", "Flying"],
		baseStats: { hp: 75, atk: 87, def: 63, spa: 87, spd: 63, spe: 98 },
		abilities: { 0: "Keen Eye", 1: "Big Pecks", H: "Hydration" },
		heightm: 1.3,
		weightkg: 24.2,
		color: "White",
		prevo: "Ducklett",
		evoLevel: 35,
		eggGroups: ["Water 1", "Flying"],
	},
	vanillite: {
		num: 582,
		name: "Vanillite",
		types: ["Ice"],
		baseStats: { hp: 36, atk: 50, def: 50, spa: 65, spd: 60, spe: 44 },
		abilities: { 0: "Ice Body", 1: "Snow Cloak", H: "Weak Armor" },
		heightm: 0.4,
		weightkg: 5.7,
		color: "White",
		evos: ["Vanillish"],
		eggGroups: ["Mineral"],
	},
	vanillish: {
		num: 583,
		name: "Vanillish",
		types: ["Ice"],
		baseStats: { hp: 51, atk: 65, def: 65, spa: 80, spd: 75, spe: 59 },
		abilities: { 0: "Ice Body", 1: "Snow Cloak", H: "Weak Armor" },
		heightm: 1.1,
		weightkg: 41,
		color: "White",
		prevo: "Vanillite",
		evoLevel: 35,
		evos: ["Vanilluxe"],
		eggGroups: ["Mineral"],
	},
	vanilluxe: {
		num: 584,
		name: "Vanilluxe",
		types: ["Ice"],
		baseStats: { hp: 71, atk: 95, def: 85, spa: 110, spd: 95, spe: 79 },
		abilities: { 0: "Ice Body", 1: "Snow Warning", H: "Weak Armor" },
		heightm: 1.3,
		weightkg: 57.5,
		color: "White",
		prevo: "Vanillish",
		evoLevel: 47,
		eggGroups: ["Mineral"],
	},
	deerling: {
		num: 585,
		name: "Deerling",
		baseForme: "Spring",
		types: ["Normal", "Grass"],
		baseStats: { hp: 60, atk: 60, def: 50, spa: 40, spd: 50, spe: 75 },
		abilities: { 0: "Chlorophyll", 1: "Sap Sipper", H: "Serene Grace" },
		heightm: 0.6,
		weightkg: 19.5,
		color: "Pink",
		evos: ["Sawsbuck"],
		eggGroups: ["Field"],
		cosmeticFormes: ["Deerling-Summer", "Deerling-Autumn", "Deerling-Winter"],
		formeOrder: ["Deerling", "Deerling-Summer", "Deerling-Autumn", "Deerling-Winter"],
	},
	sawsbuck: {
		num: 586,
		name: "Sawsbuck",
		baseForme: "Spring",
		types: ["Normal", "Grass"],
		baseStats: { hp: 80, atk: 100, def: 70, spa: 60, spd: 70, spe: 95 },
		abilities: { 0: "Chlorophyll", 1: "Sap Sipper", H: "Serene Grace" },
		heightm: 1.9,
		weightkg: 92.5,
		color: "Brown",
		prevo: "Deerling",
		evoLevel: 34,
		eggGroups: ["Field"],
		cosmeticFormes: ["Sawsbuck-Summer", "Sawsbuck-Autumn", "Sawsbuck-Winter"],
		formeOrder: ["Sawsbuck", "Sawsbuck-Summer", "Sawsbuck-Autumn", "Sawsbuck-Winter"],
	},
	emolga: {
		num: 587,
		name: "Emolga",
		types: ["Electric", "Flying"],
		baseStats: { hp: 55, atk: 75, def: 60, spa: 75, spd: 60, spe: 103 },
		abilities: { 0: "Static", H: "Motor Drive" },
		heightm: 0.4,
		weightkg: 5,
		color: "White",
		eggGroups: ["Field"],
	},
	karrablast: {
		num: 588,
		name: "Karrablast",
		types: ["Bug"],
		baseStats: { hp: 50, atk: 75, def: 45, spa: 40, spd: 45, spe: 60 },
		abilities: { 0: "Swarm", 1: "Shed Skin", H: "No Guard" },
		heightm: 0.5,
		weightkg: 5.9,
		color: "Blue",
		evos: ["Escavalier"],
		eggGroups: ["Bug"],
	},
	escavalier: {
		num: 589,
		name: "Escavalier",
		types: ["Bug", "Steel"],
		baseStats: { hp: 70, atk: 135, def: 105, spa: 60, spd: 105, spe: 20 },
		abilities: { 0: "Swarm", 1: "Shell Armor", H: "Overcoat" },
		heightm: 1,
		weightkg: 33,
		color: "Gray",
		prevo: "Karrablast",
		evoType: "trade",
		evoCondition: "with a Shelmet",
		eggGroups: ["Bug"],
	},
	foongus: {
		num: 590,
		name: "Foongus",
		types: ["Grass", "Poison"],
		baseStats: { hp: 69, atk: 55, def: 45, spa: 55, spd: 55, spe: 15 },
		abilities: { 0: "Effect Spore", H: "Regenerator" },
		heightm: 0.2,
		weightkg: 1,
		color: "White",
		evos: ["Amoonguss"],
		eggGroups: ["Grass"],
	},
	amoonguss: {
		num: 591,
		name: "Amoonguss",
		types: ["Grass", "Poison"],
		baseStats: { hp: 114, atk: 85, def: 70, spa: 85, spd: 80, spe: 30 },
		abilities: { 0: "Effect Spore", H: "Regenerator" },
		heightm: 0.6,
		weightkg: 10.5,
		color: "White",
		prevo: "Foongus",
		evoLevel: 39,
		eggGroups: ["Grass"],
	},
	frillish: {
		num: 592,
		name: "Frillish",
		types: ["Water", "Ghost"],
		baseStats: { hp: 55, atk: 40, def: 50, spa: 65, spd: 85, spe: 40 },
		abilities: { 0: "Water Absorb", 1: "Cursed Body", H: "Damp" },
		heightm: 1.2,
		weightkg: 33,
		color: "White",
		evos: ["Jellicent"],
		eggGroups: ["Amorphous"],
	},
	jellicent: {
		num: 593,
		name: "Jellicent",
		types: ["Water", "Ghost"],
		baseStats: { hp: 100, atk: 60, def: 70, spa: 85, spd: 105, spe: 60 },
		abilities: { 0: "Water Absorb", 1: "Cursed Body", H: "Damp" },
		heightm: 2.2,
		weightkg: 135,
		color: "White",
		prevo: "Frillish",
		evoLevel: 40,
		eggGroups: ["Amorphous"],
	},
	alomomola: {
		num: 594,
		name: "Alomomola",
		types: ["Water"],
		baseStats: { hp: 165, atk: 75, def: 80, spa: 40, spd: 45, spe: 65 },
		abilities: { 0: "Healer", 1: "Hydration", H: "Regenerator" },
		heightm: 1.2,
		weightkg: 31.6,
		color: "Pink",
		eggGroups: ["Water 1", "Water 2"],
	},
	joltik: {
		num: 595,
		name: "Joltik",
		types: ["Bug", "Electric"],
		baseStats: { hp: 50, atk: 47, def: 50, spa: 57, spd: 50, spe: 65 },
		abilities: { 0: "Compound Eyes", 1: "Unnerve", H: "Swarm" },
		heightm: 0.1,
		weightkg: 0.6,
		color: "Yellow",
		evos: ["Galvantula"],
		eggGroups: ["Bug"],
	},
	galvantula: {
		num: 596,
		name: "Galvantula",
		types: ["Bug", "Electric"],
		baseStats: { hp: 70, atk: 77, def: 60, spa: 97, spd: 60, spe: 108 },
		abilities: { 0: "Compound Eyes", 1: "Unnerve", H: "Swarm" },
		heightm: 0.8,
		weightkg: 14.3,
		color: "Yellow",
		prevo: "Joltik",
		evoLevel: 36,
		eggGroups: ["Bug"],
	},
	ferroseed: {
		num: 597,
		name: "Ferroseed",
		types: ["Grass", "Steel"],
		baseStats: { hp: 44, atk: 50, def: 91, spa: 24, spd: 86, spe: 10 },
		abilities: { 0: "Iron Barbs" },
		heightm: 0.6,
		weightkg: 18.8,
		color: "Gray",
		evos: ["Ferrothorn"],
		eggGroups: ["Grass", "Mineral"],
	},
	ferrothorn: {
		num: 598,
		name: "Ferrothorn",
		types: ["Grass", "Steel"],
		baseStats: { hp: 74, atk: 94, def: 131, spa: 54, spd: 116, spe: 20 },
		abilities: { 0: "Iron Barbs", H: "Anticipation" },
		heightm: 1,
		weightkg: 110,
		color: "Gray",
		prevo: "Ferroseed",
		evoLevel: 40,
		eggGroups: ["Grass", "Mineral"],
	},
	klink: {
		num: 599,
		name: "Klink",
		types: ["Steel"],
		gender: "N",
		baseStats: { hp: 40, atk: 55, def: 70, spa: 45, spd: 60, spe: 30 },
		abilities: { 0: "Plus", 1: "Minus", H: "Clear Body" },
		heightm: 0.3,
		weightkg: 21,
		color: "Gray",
		evos: ["Klang"],
		eggGroups: ["Mineral"],
	},
	klang: {
		num: 600,
		name: "Klang",
		types: ["Steel"],
		gender: "N",
		baseStats: { hp: 60, atk: 80, def: 95, spa: 70, spd: 85, spe: 50 },
		abilities: { 0: "Plus", 1: "Minus", H: "Clear Body" },
		heightm: 0.6,
		weightkg: 51,
		color: "Gray",
		prevo: "Klink",
		evoLevel: 38,
		evos: ["Klinklang"],
		eggGroups: ["Mineral"],
	},
	klinklang: {
		num: 601,
		name: "Klinklang",
		types: ["Steel"],
		gender: "N",
		baseStats: { hp: 60, atk: 100, def: 115, spa: 70, spd: 85, spe: 90 },
		abilities: { 0: "Plus", 1: "Minus", H: "Clear Body" },
		heightm: 0.6,
		weightkg: 81,
		color: "Gray",
		prevo: "Klang",
		evoLevel: 49,
		eggGroups: ["Mineral"],
	},
	tynamo: {
		num: 602,
		name: "Tynamo",
		types: ["Electric"],
		baseStats: { hp: 35, atk: 55, def: 40, spa: 45, spd: 40, spe: 60 },
		abilities: { 0: "Levitate" },
		heightm: 0.2,
		weightkg: 0.3,
		color: "White",
		evos: ["Eelektrik"],
		eggGroups: ["Amorphous"],
	},
	eelektrik: {
		num: 603,
		name: "Eelektrik",
		types: ["Electric"],
		baseStats: { hp: 65, atk: 85, def: 70, spa: 75, spd: 70, spe: 40 },
		abilities: { 0: "Levitate" },
		heightm: 1.2,
		weightkg: 22,
		color: "Blue",
		prevo: "Tynamo",
		evoLevel: 39,
		evos: ["Eelektross"],
		eggGroups: ["Amorphous"],
	},
	eelektross: {
		num: 604,
		name: "Eelektross",
		types: ["Electric"],
		baseStats: { hp: 85, atk: 115, def: 80, spa: 105, spd: 80, spe: 50 },
		abilities: { 0: "Levitate" },
		heightm: 2.1,
		weightkg: 80.5,
		color: "Blue",
		prevo: "Eelektrik",
		evoType: "useItem",
		evoItem: "Thunder Stone",
		eggGroups: ["Amorphous"],
	},
	elgyem: {
		num: 605,
		name: "Elgyem",
		types: ["Psychic"],
		baseStats: { hp: 55, atk: 55, def: 55, spa: 85, spd: 55, spe: 30 },
		abilities: { 0: "Telepathy", 1: "Synchronize", H: "Analytic" },
		heightm: 0.5,
		weightkg: 9,
		color: "Blue",
		evos: ["Beheeyem"],
		eggGroups: ["Human-Like"],
	},
	beheeyem: {
		num: 606,
		name: "Beheeyem",
		types: ["Psychic"],
		baseStats: { hp: 75, atk: 75, def: 75, spa: 125, spd: 95, spe: 40 },
		abilities: { 0: "Telepathy", 1: "Synchronize", H: "Analytic" },
		heightm: 1,
		weightkg: 34.5,
		color: "Brown",
		prevo: "Elgyem",
		evoLevel: 42,
		eggGroups: ["Human-Like"],
	},
	litwick: {
		num: 607,
		name: "Litwick",
		types: ["Ghost", "Fire"],
		baseStats: { hp: 50, atk: 30, def: 55, spa: 65, spd: 55, spe: 20 },
		abilities: { 0: "Flash Fire", 1: "Flame Body", H: "Infiltrator" },
		heightm: 0.3,
		weightkg: 3.1,
		color: "White",
		evos: ["Lampent"],
		eggGroups: ["Amorphous"],
	},
	lampent: {
		num: 608,
		name: "Lampent",
		types: ["Ghost", "Fire"],
		baseStats: { hp: 60, atk: 40, def: 60, spa: 95, spd: 60, spe: 55 },
		abilities: { 0: "Flash Fire", 1: "Flame Body", H: "Infiltrator" },
		heightm: 0.6,
		weightkg: 13,
		color: "Black",
		prevo: "Litwick",
		evoLevel: 41,
		evos: ["Chandelure"],
		eggGroups: ["Amorphous"],
	},
	chandelure: {
		num: 609,
		name: "Chandelure",
		types: ["Ghost", "Fire"],
		baseStats: { hp: 60, atk: 55, def: 90, spa: 145, spd: 90, spe: 80 },
		abilities: { 0: "Flash Fire", 1: "Flame Body", H: "Infiltrator" },
		heightm: 1,
		weightkg: 34.3,
		color: "Black",
		prevo: "Lampent",
		evoType: "useItem",
		evoItem: "Dusk Stone",
		eggGroups: ["Amorphous"],
	},
	axew: {
		num: 610,
		name: "Axew",
		types: ["Dragon"],
		baseStats: { hp: 46, atk: 87, def: 60, spa: 30, spd: 40, spe: 57 },
		abilities: { 0: "Rivalry", 1: "Mold Breaker", H: "Unnerve" },
		heightm: 0.6,
		weightkg: 18,
		color: "Green",
		evos: ["Fraxure"],
		eggGroups: ["Monster", "Dragon"],
	},
	fraxure: {
		num: 611,
		name: "Fraxure",
		types: ["Dragon"],
		baseStats: { hp: 66, atk: 117, def: 70, spa: 40, spd: 50, spe: 67 },
		abilities: { 0: "Rivalry", 1: "Mold Breaker", H: "Unnerve" },
		heightm: 1,
		weightkg: 36,
		color: "Green",
		prevo: "Axew",
		evoLevel: 38,
		evos: ["Haxorus"],
		eggGroups: ["Monster", "Dragon"],
	},
	haxorus: {
		num: 612,
		name: "Haxorus",
		types: ["Dragon"],
		baseStats: { hp: 76, atk: 147, def: 90, spa: 60, spd: 70, spe: 97 },
		abilities: { 0: "Rivalry", 1: "Mold Breaker", H: "Unnerve" },
		heightm: 1.8,
		weightkg: 105.5,
		color: "Yellow",
		prevo: "Fraxure",
		evoLevel: 48,
		eggGroups: ["Monster", "Dragon"],
	},
	cubchoo: {
		num: 613,
		name: "Cubchoo",
		types: ["Ice"],
		baseStats: { hp: 55, atk: 70, def: 40, spa: 60, spd: 40, spe: 40 },
		abilities: { 0: "Snow Cloak", 1: "Slush Rush", H: "Rattled" },
		heightm: 0.5,
		weightkg: 8.5,
		color: "White",
		evos: ["Beartic"],
		eggGroups: ["Field"],
	},
	beartic: {
		num: 614,
		name: "Beartic",
		types: ["Ice"],
		baseStats: { hp: 95, atk: 130, def: 80, spa: 70, spd: 80, spe: 50 },
		abilities: { 0: "Snow Cloak", 1: "Slush Rush", H: "Swift Swim" },
		heightm: 2.6,
		weightkg: 260,
		color: "White",
		prevo: "Cubchoo",
		evoLevel: 37,
		eggGroups: ["Field"],
	},
	cryogonal: {
		num: 615,
		name: "Cryogonal",
		types: ["Ice"],
		gender: "N",
		baseStats: { hp: 80, atk: 50, def: 50, spa: 95, spd: 135, spe: 105 },
		abilities: { 0: "Levitate" },
		heightm: 1.1,
		weightkg: 148,
		color: "Blue",
		eggGroups: ["Mineral"],
	},
	shelmet: {
		num: 616,
		name: "Shelmet",
		types: ["Bug"],
		baseStats: { hp: 50, atk: 40, def: 85, spa: 40, spd: 65, spe: 25 },
		abilities: { 0: "Hydration", 1: "Shell Armor", H: "Overcoat" },
		heightm: 0.4,
		weightkg: 7.7,
		color: "Red",
		evos: ["Accelgor"],
		eggGroups: ["Bug"],
	},
	accelgor: {
		num: 617,
		name: "Accelgor",
		types: ["Bug"],
		baseStats: { hp: 80, atk: 70, def: 40, spa: 100, spd: 60, spe: 145 },
		abilities: { 0: "Hydration", 1: "Sticky Hold", H: "Unburden" },
		heightm: 0.8,
		weightkg: 25.3,
		color: "Red",
		prevo: "Shelmet",
		evoType: "trade",
		evoCondition: "with a Karrablast",
		eggGroups: ["Bug"],
	},
	stunfisk: {
		num: 618,
		name: "Stunfisk",
		types: ["Ground", "Electric"],
		baseStats: { hp: 109, atk: 66, def: 84, spa: 81, spd: 99, spe: 32 },
		abilities: { 0: "Static", 1: "Limber", H: "Sand Veil" },
		heightm: 0.7,
		weightkg: 11,
		color: "Brown",
		eggGroups: ["Water 1", "Amorphous"],
		otherFormes: ["Stunfisk-Galar"],
		formeOrder: ["Stunfisk", "Stunfisk-Galar"],
	},
	stunfiskgalar: {
		num: 618,
		name: "Stunfisk-Galar",
		baseSpecies: "Stunfisk",
		forme: "Galar",
		types: ["Ground", "Steel"],
		baseStats: { hp: 109, atk: 81, def: 99, spa: 66, spd: 84, spe: 32 },
		abilities: { 0: "Mimicry" },
		heightm: 0.7,
		weightkg: 20.5,
		color: "Green",
		eggGroups: ["Water 1", "Amorphous"],
	},
	mienfoo: {
		num: 619,
		name: "Mienfoo",
		types: ["Fighting"],
		baseStats: { hp: 45, atk: 85, def: 50, spa: 55, spd: 50, spe: 65 },
		abilities: { 0: "Inner Focus", 1: "Regenerator", H: "Reckless" },
		heightm: 0.9,
		weightkg: 20,
		color: "Yellow",
		evos: ["Mienshao"],
		eggGroups: ["Field", "Human-Like"],
	},
	mienshao: {
		num: 620,
		name: "Mienshao",
		types: ["Fighting"],
		baseStats: { hp: 65, atk: 125, def: 60, spa: 95, spd: 60, spe: 105 },
		abilities: { 0: "Inner Focus", 1: "Regenerator", H: "Reckless" },
		heightm: 1.4,
		weightkg: 35.5,
		color: "Purple",
		prevo: "Mienfoo",
		evoLevel: 50,
		eggGroups: ["Field", "Human-Like"],
	},
	druddigon: {
		num: 621,
		name: "Druddigon",
		types: ["Dragon"],
		baseStats: { hp: 77, atk: 120, def: 90, spa: 60, spd: 90, spe: 48 },
		abilities: { 0: "Rough Skin", 1: "Sheer Force", H: "Mold Breaker" },
		heightm: 1.6,
		weightkg: 139,
		color: "Red",
		eggGroups: ["Monster", "Dragon"],
	},
	golett: {
		num: 622,
		name: "Golett",
		types: ["Ground", "Ghost"],
		gender: "N",
		baseStats: { hp: 59, atk: 74, def: 50, spa: 35, spd: 50, spe: 35 },
		abilities: { 0: "Iron Fist", 1: "Klutz", H: "No Guard" },
		heightm: 1,
		weightkg: 92,
		color: "Green",
		evos: ["Golurk"],
		eggGroups: ["Mineral"],
	},
	golurk: {
		num: 623,
		name: "Golurk",
		types: ["Ground", "Ghost"],
		gender: "N",
		baseStats: { hp: 89, atk: 124, def: 80, spa: 55, spd: 80, spe: 55 },
		abilities: { 0: "Iron Fist", 1: "Klutz", H: "No Guard" },
		heightm: 2.8,
		weightkg: 330,
		color: "Green",
		prevo: "Golett",
		evoLevel: 43,
		eggGroups: ["Mineral"],
	},
	pawniard: {
		num: 624,
		name: "Pawniard",
		types: ["Dark", "Steel"],
		baseStats: { hp: 45, atk: 85, def: 70, spa: 40, spd: 40, spe: 60 },
		abilities: { 0: "Defiant", 1: "Inner Focus", H: "Pressure" },
		heightm: 0.5,
		weightkg: 10.2,
		color: "Red",
		evos: ["Bisharp"],
		eggGroups: ["Human-Like"],
	},
	bisharp: {
		num: 625,
		name: "Bisharp",
		types: ["Dark", "Steel"],
		baseStats: { hp: 65, atk: 125, def: 100, spa: 60, spd: 70, spe: 70 },
		abilities: { 0: "Defiant", 1: "Inner Focus", H: "Pressure" },
		heightm: 1.6,
		weightkg: 70,
		color: "Red",
		prevo: "Pawniard",
		evoLevel: 52,
		eggGroups: ["Human-Like"],
	},
	bouffalant: {
		num: 626,
		name: "Bouffalant",
		types: ["Normal"],
		baseStats: { hp: 95, atk: 110, def: 95, spa: 40, spd: 95, spe: 55 },
		abilities: { 0: "Reckless", 1: "Sap Sipper", H: "Soundproof" },
		heightm: 1.6,
		weightkg: 94.6,
		color: "Brown",
		eggGroups: ["Field"],
	},
	rufflet: {
		num: 627,
		name: "Rufflet",
		types: ["Normal", "Flying"],
		gender: "M",
		baseStats: { hp: 70, atk: 83, def: 50, spa: 37, spd: 50, spe: 60 },
		abilities: { 0: "Keen Eye", 1: "Sheer Force", H: "Hustle" },
		heightm: 0.5,
		weightkg: 10.5,
		color: "White",
		evos: ["Braviary"],
		eggGroups: ["Flying"],
	},
	braviary: {
		num: 628,
		name: "Braviary",
		types: ["Normal", "Flying"],
		gender: "M",
		baseStats: { hp: 100, atk: 123, def: 75, spa: 57, spd: 75, spe: 80 },
		abilities: { 0: "Keen Eye", 1: "Sheer Force", H: "Defiant" },
		heightm: 1.5,
		weightkg: 41,
		color: "Red",
		prevo: "Rufflet",
		evoLevel: 54,
		eggGroups: ["Flying"],
	},
	vullaby: {
		num: 629,
		name: "Vullaby",
		types: ["Dark", "Flying"],
		gender: "F",
		baseStats: { hp: 70, atk: 55, def: 75, spa: 45, spd: 65, spe: 60 },
		abilities: { 0: "Big Pecks", 1: "Overcoat", H: "Weak Armor" },
		heightm: 0.5,
		weightkg: 9,
		color: "Brown",
		evos: ["Mandibuzz"],
		eggGroups: ["Flying"],
	},
	mandibuzz: {
		num: 630,
		name: "Mandibuzz",
		types: ["Dark", "Flying"],
		gender: "F",
		baseStats: { hp: 110, atk: 65, def: 105, spa: 55, spd: 95, spe: 80 },
		abilities: { 0: "Big Pecks", 1: "Overcoat", H: "Weak Armor" },
		heightm: 1.2,
		weightkg: 39.5,
		color: "Brown",
		prevo: "Vullaby",
		evoLevel: 54,
		eggGroups: ["Flying"],
	},
	heatmor: {
		num: 631,
		name: "Heatmor",
		types: ["Fire"],
		baseStats: { hp: 85, atk: 97, def: 66, spa: 105, spd: 66, spe: 65 },
		abilities: { 0: "Gluttony", 1: "Flash Fire", H: "White Smoke" },
		heightm: 1.4,
		weightkg: 58,
		color: "Red",
		eggGroups: ["Field"],
	},
	durant: {
		num: 632,
		name: "Durant",
		types: ["Bug", "Steel"],
		baseStats: { hp: 58, atk: 109, def: 112, spa: 48, spd: 48, spe: 109 },
		abilities: { 0: "Swarm", 1: "Hustle", H: "Truant" },
		heightm: 0.3,
		weightkg: 33,
		color: "Gray",
		eggGroups: ["Bug"],
	},
	deino: {
		num: 633,
		name: "Deino",
		types: ["Dark", "Dragon"],
		baseStats: { hp: 52, atk: 65, def: 50, spa: 45, spd: 50, spe: 38 },
		abilities: { 0: "Hustle" },
		heightm: 0.8,
		weightkg: 17.3,
		color: "Blue",
		evos: ["Zweilous"],
		eggGroups: ["Dragon"],
	},
	zweilous: {
		num: 634,
		name: "Zweilous",
		types: ["Dark", "Dragon"],
		baseStats: { hp: 72, atk: 85, def: 70, spa: 65, spd: 70, spe: 58 },
		abilities: { 0: "Hustle" },
		heightm: 1.4,
		weightkg: 50,
		color: "Blue",
		prevo: "Deino",
		evoLevel: 50,
		evos: ["Hydreigon"],
		eggGroups: ["Dragon"],
	},
	hydreigon: {
		num: 635,
		name: "Hydreigon",
		types: ["Dark", "Dragon"],
		baseStats: { hp: 92, atk: 105, def: 90, spa: 125, spd: 90, spe: 98 },
		abilities: { 0: "Levitate" },
		heightm: 1.8,
		weightkg: 160,
		color: "Blue",
		prevo: "Zweilous",
		evoLevel: 64,
		eggGroups: ["Dragon"],
	},
	larvesta: {
		num: 636,
		name: "Larvesta",
		types: ["Bug", "Fire"],
		baseStats: { hp: 55, atk: 85, def: 55, spa: 50, spd: 55, spe: 60 },
		abilities: { 0: "Flame Body", H: "Swarm" },
		heightm: 1.1,
		weightkg: 28.8,
		color: "White",
		evos: ["Volcarona"],
		eggGroups: ["Bug"],
	},
	volcarona: {
		num: 637,
		name: "Volcarona",
		types: ["Bug", "Fire"],
		baseStats: { hp: 85, atk: 60, def: 65, spa: 135, spd: 105, spe: 100 },
		abilities: { 0: "Flame Body", H: "Swarm" },
		heightm: 1.6,
		weightkg: 46,
		color: "White",
		prevo: "Larvesta",
		evoLevel: 59,
		eggGroups: ["Bug"],
	},
	cobalion: {
		num: 638,
		name: "Cobalion",
		types: ["Steel", "Fighting"],
		gender: "N",
		baseStats: { hp: 91, atk: 90, def: 129, spa: 90, spd: 72, spe: 108 },
		abilities: { 0: "Justified" },
		heightm: 2.1,
		weightkg: 250,
		color: "Blue",
		eggGroups: ["Undiscovered"],
	},
	terrakion: {
		num: 639,
		name: "Terrakion",
		types: ["Rock", "Fighting"],
		gender: "N",
		baseStats: { hp: 91, atk: 129, def: 90, spa: 72, spd: 90, spe: 108 },
		abilities: { 0: "Justified" },
		heightm: 1.9,
		weightkg: 260,
		color: "Gray",
		eggGroups: ["Undiscovered"],
	},
	virizion: {
		num: 640,
		name: "Virizion",
		types: ["Grass", "Fighting"],
		gender: "N",
		baseStats: { hp: 91, atk: 90, def: 72, spa: 90, spd: 129, spe: 108 },
		abilities: { 0: "Justified" },
		heightm: 2,
		weightkg: 200,
		color: "Green",
		eggGroups: ["Undiscovered"],
	},
	tornadus: {
		num: 641,
		name: "Tornadus",
		baseForme: "Incarnate",
		types: ["Flying"],
		gender: "M",
		baseStats: { hp: 79, atk: 115, def: 70, spa: 125, spd: 80, spe: 111 },
		abilities: { 0: "Prankster", H: "Defiant" },
		heightm: 1.5,
		weightkg: 63,
		color: "Green",
		eggGroups: ["Undiscovered"],
		otherFormes: ["Tornadus-Therian"],
		formeOrder: ["Tornadus", "Tornadus-Therian"],
	},
	tornadustherian: {
		num: 641,
		name: "Tornadus-Therian",
		baseSpecies: "Tornadus",
		forme: "Therian",
		types: ["Flying"],
		gender: "M",
		baseStats: { hp: 79, atk: 100, def: 80, spa: 110, spd: 90, spe: 121 },
		abilities: { 0: "Regenerator" },
		heightm: 1.4,
		weightkg: 63,
		color: "Green",
		eggGroups: ["Undiscovered"],
		changesFrom: "Tornadus",
	},
	thundurus: {
		num: 642,
		name: "Thundurus",
		baseForme: "Incarnate",
		types: ["Electric", "Flying"],
		gender: "M",
		baseStats: { hp: 79, atk: 115, def: 70, spa: 125, spd: 80, spe: 111 },
		abilities: { 0: "Prankster", H: "Defiant" },
		heightm: 1.5,
		weightkg: 61,
		color: "Blue",
		eggGroups: ["Undiscovered"],
		otherFormes: ["Thundurus-Therian"],
		formeOrder: ["Thundurus", "Thundurus-Therian"],
	},
	thundurustherian: {
		num: 642,
		name: "Thundurus-Therian",
		baseSpecies: "Thundurus",
		forme: "Therian",
		types: ["Electric", "Flying"],
		gender: "M",
		baseStats: { hp: 79, atk: 105, def: 70, spa: 145, spd: 80, spe: 101 },
		abilities: { 0: "Volt Absorb" },
		heightm: 3,
		weightkg: 61,
		color: "Blue",
		eggGroups: ["Undiscovered"],
		changesFrom: "Thundurus",
	},
	reshiram: {
		num: 643,
		name: "Reshiram",
		types: ["Dragon", "Fire"],
		gender: "N",
		baseStats: { hp: 100, atk: 120, def: 100, spa: 150, spd: 120, spe: 90 },
		abilities: { 0: "Turboblaze" },
		heightm: 3.2,
		weightkg: 330,
		color: "White",
		eggGroups: ["Undiscovered"],
	},
	zekrom: {
		num: 644,
		name: "Zekrom",
		types: ["Dragon", "Electric"],
		gender: "N",
		baseStats: { hp: 100, atk: 150, def: 120, spa: 120, spd: 100, spe: 90 },
		abilities: { 0: "Teravolt" },
		heightm: 2.9,
		weightkg: 345,
		color: "Black",
		eggGroups: ["Undiscovered"],
	},
	landorus: {
		num: 645,
		name: "Landorus",
		baseForme: "Incarnate",
		types: ["Ground", "Flying"],
		gender: "M",
		baseStats: { hp: 89, atk: 125, def: 90, spa: 115, spd: 80, spe: 101 },
		abilities: { 0: "Sand Force", H: "Sheer Force" },
		heightm: 1.5,
		weightkg: 68,
		color: "Brown",
		eggGroups: ["Undiscovered"],
		otherFormes: ["Landorus-Therian"],
		formeOrder: ["Landorus", "Landorus-Therian"],
	},
	landorustherian: {
		num: 645,
		name: "Landorus-Therian",
		baseSpecies: "Landorus",
		forme: "Therian",
		types: ["Ground", "Flying"],
		gender: "M",
		baseStats: { hp: 89, atk: 145, def: 90, spa: 105, spd: 80, spe: 91 },
		abilities: { 0: "Intimidate" },
		heightm: 1.3,
		weightkg: 68,
		color: "Brown",
		eggGroups: ["Undiscovered"],
		changesFrom: "Landorus",
	},
	kyurem: {
		num: 646,
		name: "Kyurem",
		types: ["Dragon", "Ice"],
		gender: "N",
		baseStats: { hp: 125, atk: 130, def: 90, spa: 130, spd: 90, spe: 95 },
		abilities: { 0: "Pressure" },
		heightm: 3,
		weightkg: 325,
		color: "Gray",
		eggGroups: ["Undiscovered"],
		otherFormes: ["Kyurem-Black", "Kyurem-White"],
		formeOrder: ["Kyurem", "Kyurem-White", "Kyurem-Black"],
	},
	kyuremblack: {
		num: 646,
		name: "Kyurem-Black",
		baseSpecies: "Kyurem",
		forme: "Black",
		types: ["Dragon", "Ice"],
		gender: "N",
		baseStats: { hp: 125, atk: 170, def: 100, spa: 120, spd: 90, spe: 95 },
		abilities: { 0: "Teravolt" },
		heightm: 3.3,
		weightkg: 325,
		color: "Gray",
		eggGroups: ["Undiscovered"],
		changesFrom: "Kyurem",
	},
	kyuremwhite: {
		num: 646,
		name: "Kyurem-White",
		baseSpecies: "Kyurem",
		forme: "White",
		types: ["Dragon", "Ice"],
		gender: "N",
		baseStats: { hp: 125, atk: 120, def: 90, spa: 170, spd: 100, spe: 95 },
		abilities: { 0: "Turboblaze" },
		heightm: 3.6,
		weightkg: 325,
		color: "Gray",
		eggGroups: ["Undiscovered"],
		changesFrom: "Kyurem",
	},
	keldeo: {
		num: 647,
		name: "Keldeo",
		baseForme: "Ordinary",
		types: ["Water", "Fighting"],
		gender: "N",
		baseStats: { hp: 91, atk: 72, def: 90, spa: 129, spd: 90, spe: 108 },
		abilities: { 0: "Justified" },
		heightm: 1.4,
		weightkg: 48.5,
		color: "Yellow",
		eggGroups: ["Undiscovered"],
		otherFormes: ["Keldeo-Resolute"],
		formeOrder: ["Keldeo", "Keldeo-Resolute"],
	},
	keldeoresolute: {
		num: 647,
		name: "Keldeo-Resolute",
		baseSpecies: "Keldeo",
		forme: "Resolute",
		types: ["Water", "Fighting"],
		gender: "N",
		baseStats: { hp: 91, atk: 72, def: 90, spa: 129, spd: 90, spe: 108 },
		abilities: { 0: "Justified" },
		heightm: 1.4,
		weightkg: 48.5,
		color: "Yellow",
		eggGroups: ["Undiscovered"],
		requiredMove: "Secret Sword",
		changesFrom: "Keldeo",
	},
	meloetta: {
		num: 648,
		name: "Meloetta",
		baseForme: "Aria",
		types: ["Normal", "Psychic"],
		gender: "N",
		baseStats: { hp: 100, atk: 77, def: 77, spa: 128, spd: 128, spe: 90 },
		abilities: { 0: "Serene Grace" },
		heightm: 0.6,
		weightkg: 6.5,
		color: "White",
		eggGroups: ["Undiscovered"],
		otherFormes: ["Meloetta-Pirouette"],
		formeOrder: ["Meloetta", "Meloetta-Pirouette"],
	},
	meloettapirouette: {
		num: 648,
		name: "Meloetta-Pirouette",
		baseSpecies: "Meloetta",
		forme: "Pirouette",
		types: ["Normal", "Fighting"],
		gender: "N",
		baseStats: { hp: 100, atk: 128, def: 90, spa: 77, spd: 77, spe: 128 },
		abilities: { 0: "Serene Grace" },
		heightm: 0.6,
		weightkg: 6.5,
		color: "White",
		eggGroups: ["Undiscovered"],
		requiredMove: "Relic Song",
		battleOnly: "Meloetta",
	},
	genesect: {
		num: 649,
		name: "Genesect",
		types: ["Bug", "Steel"],
		gender: "N",
		baseStats: { hp: 71, atk: 120, def: 95, spa: 120, spd: 95, spe: 99 },
		abilities: { 0: "Download" },
		heightm: 1.5,
		weightkg: 82.5,
		color: "Purple",
		eggGroups: ["Undiscovered"],
		otherFormes: ["Genesect-Douse", "Genesect-Shock", "Genesect-Burn", "Genesect-Chill"],
		formeOrder: ["Genesect", "Genesect-Douse", "Genesect-Shock", "Genesect-Burn", "Genesect-Chill"],
	},
	genesectdouse: {
		num: 649,
		name: "Genesect-Douse",
		baseSpecies: "Genesect",
		forme: "Douse",
		types: ["Bug", "Steel"],
		gender: "N",
		baseStats: { hp: 71, atk: 120, def: 95, spa: 120, spd: 95, spe: 99 },
		abilities: { 0: "Download" },
		heightm: 1.5,
		weightkg: 82.5,
		color: "Purple",
		eggGroups: ["Undiscovered"],
		requiredItem: "Douse Drive",
		changesFrom: "Genesect",
	},
	genesectshock: {
		num: 649,
		name: "Genesect-Shock",
		baseSpecies: "Genesect",
		forme: "Shock",
		types: ["Bug", "Steel"],
		gender: "N",
		baseStats: { hp: 71, atk: 120, def: 95, spa: 120, spd: 95, spe: 99 },
		abilities: { 0: "Download" },
		heightm: 1.5,
		weightkg: 82.5,
		color: "Purple",
		eggGroups: ["Undiscovered"],
		requiredItem: "Shock Drive",
		changesFrom: "Genesect",
	},
	genesectburn: {
		num: 649,
		name: "Genesect-Burn",
		baseSpecies: "Genesect",
		forme: "Burn",
		types: ["Bug", "Steel"],
		gender: "N",
		baseStats: { hp: 71, atk: 120, def: 95, spa: 120, spd: 95, spe: 99 },
		abilities: { 0: "Download" },
		heightm: 1.5,
		weightkg: 82.5,
		color: "Purple",
		eggGroups: ["Undiscovered"],
		requiredItem: "Burn Drive",
		changesFrom: "Genesect",
	},
	genesectchill: {
		num: 649,
		name: "Genesect-Chill",
		baseSpecies: "Genesect",
		forme: "Chill",
		types: ["Bug", "Steel"],
		gender: "N",
		baseStats: { hp: 71, atk: 120, def: 95, spa: 120, spd: 95, spe: 99 },
		abilities: { 0: "Download" },
		heightm: 1.5,
		weightkg: 82.5,
		color: "Purple",
		eggGroups: ["Undiscovered"],
		requiredItem: "Chill Drive",
		changesFrom: "Genesect",
	},
	chespin: {
		num: 650,
		name: "Chespin",
		types: ["Grass"],
		genderRatio: { M: 0.875, F: 0.125 },
		baseStats: { hp: 56, atk: 61, def: 65, spa: 48, spd: 45, spe: 38 },
		abilities: { 0: "Overgrow", H: "Bulletproof" },
		heightm: 0.4,
		weightkg: 9,
		color: "Green",
		evos: ["Quilladin"],
		eggGroups: ["Field"],
	},
	quilladin: {
		num: 651,
		name: "Quilladin",
		types: ["Grass"],
		genderRatio: { M: 0.875, F: 0.125 },
		baseStats: { hp: 61, atk: 78, def: 95, spa: 56, spd: 58, spe: 57 },
		abilities: { 0: "Overgrow", H: "Bulletproof" },
		heightm: 0.7,
		weightkg: 29,
		color: "Green",
		prevo: "Chespin",
		evoLevel: 16,
		evos: ["Chesnaught"],
		eggGroups: ["Field"],
	},
	chesnaught: {
		num: 652,
		name: "Chesnaught",
		types: ["Grass", "Fighting"],
		genderRatio: { M: 0.875, F: 0.125 },
		baseStats: { hp: 88, atk: 107, def: 122, spa: 74, spd: 75, spe: 64 },
		abilities: { 0: "Overgrow", H: "Bulletproof" },
		heightm: 1.6,
		weightkg: 90,
		color: "Green",
		prevo: "Quilladin",
		evoLevel: 36,
		eggGroups: ["Field"],
	},
	fennekin: {
		num: 653,
		name: "Fennekin",
		types: ["Fire"],
		genderRatio: { M: 0.875, F: 0.125 },
		baseStats: { hp: 40, atk: 45, def: 40, spa: 62, spd: 60, spe: 60 },
		abilities: { 0: "Blaze", H: "Magician" },
		heightm: 0.4,
		weightkg: 9.4,
		color: "Red",
		evos: ["Braixen"],
		eggGroups: ["Field"],
	},
	braixen: {
		num: 654,
		name: "Braixen",
		types: ["Fire"],
		genderRatio: { M: 0.875, F: 0.125 },
		baseStats: { hp: 59, atk: 59, def: 58, spa: 90, spd: 70, spe: 73 },
		abilities: { 0: "Blaze", H: "Magician" },
		heightm: 1,
		weightkg: 14.5,
		color: "Red",
		prevo: "Fennekin",
		evoLevel: 16,
		evos: ["Delphox"],
		eggGroups: ["Field"],
	},
	delphox: {
		num: 655,
		name: "Delphox",
		types: ["Fire", "Psychic"],
		genderRatio: { M: 0.875, F: 0.125 },
		baseStats: { hp: 75, atk: 69, def: 72, spa: 114, spd: 100, spe: 104 },
		abilities: { 0: "Blaze", H: "Magician" },
		heightm: 1.5,
		weightkg: 39,
		color: "Red",
		prevo: "Braixen",
		evoLevel: 36,
		eggGroups: ["Field"],
	},
	froakie: {
		num: 656,
		name: "Froakie",
		types: ["Water"],
		genderRatio: { M: 0.875, F: 0.125 },
		baseStats: { hp: 41, atk: 56, def: 40, spa: 62, spd: 44, spe: 71 },
		abilities: { 0: "Torrent", H: "Protean" },
		heightm: 0.3,
		weightkg: 7,
		color: "Blue",
		evos: ["Frogadier"],
		eggGroups: ["Water 1"],
	},
	frogadier: {
		num: 657,
		name: "Frogadier",
		types: ["Water"],
		genderRatio: { M: 0.875, F: 0.125 },
		baseStats: { hp: 54, atk: 63, def: 52, spa: 83, spd: 56, spe: 97 },
		abilities: { 0: "Torrent", H: "Protean" },
		heightm: 0.6,
		weightkg: 10.9,
		color: "Blue",
		prevo: "Froakie",
		evoLevel: 16,
		evos: ["Greninja"],
		eggGroups: ["Water 1"],
	},
	greninja: {
		num: 658,
		name: "Greninja",
		types: ["Water", "Dark"],
		genderRatio: { M: 0.875, F: 0.125 },
		baseStats: { hp: 72, atk: 95, def: 67, spa: 103, spd: 71, spe: 122 },
		abilities: { 0: "Torrent", H: "Protean", S: "Battle Bond" },
		heightm: 1.5,
		weightkg: 40,
		color: "Blue",
		prevo: "Frogadier",
		evoLevel: 36,
		eggGroups: ["Water 1"],
		otherFormes: ["Greninja-Ash"],
		// non-activated Greninja-Ash is forme 1, but PS does not currently distinguish it
		formeOrder: ["Greninja", "Greninja", "Greninja-Ash"],
	},
	greninjaash: {
		num: 658,
		name: "Greninja-Ash",
		baseSpecies: "Greninja",
		forme: "Ash",
		types: ["Water", "Dark"],
		gender: "M",
		baseStats: { hp: 72, atk: 145, def: 67, spa: 153, spd: 71, spe: 132 },
		abilities: { 0: "Battle Bond" },
		heightm: 1.5,
		weightkg: 40,
		color: "Blue",
		eggGroups: ["Undiscovered"],
		requiredAbility: "Battle Bond",
		battleOnly: "Greninja",
		gen: 7,
	},
	bunnelby: {
		num: 659,
		name: "Bunnelby",
		types: ["Normal"],
		baseStats: { hp: 38, atk: 36, def: 38, spa: 32, spd: 36, spe: 57 },
		abilities: { 0: "Pickup", 1: "Cheek Pouch", H: "Huge Power" },
		heightm: 0.4,
		weightkg: 5,
		color: "Brown",
		evos: ["Diggersby"],
		eggGroups: ["Field"],
	},
	diggersby: {
		num: 660,
		name: "Diggersby",
		types: ["Normal", "Ground"],
		baseStats: { hp: 85, atk: 56, def: 77, spa: 50, spd: 77, spe: 78 },
		abilities: { 0: "Pickup", 1: "Cheek Pouch", H: "Huge Power" },
		heightm: 1,
		weightkg: 42.4,
		color: "Brown",
		prevo: "Bunnelby",
		evoLevel: 20,
		eggGroups: ["Field"],
	},
	fletchling: {
		num: 661,
		name: "Fletchling",
		types: ["Normal", "Flying"],
		baseStats: { hp: 45, atk: 50, def: 43, spa: 40, spd: 38, spe: 62 },
		abilities: { 0: "Big Pecks", H: "Gale Wings" },
		heightm: 0.3,
		weightkg: 1.7,
		color: "Red",
		evos: ["Fletchinder"],
		eggGroups: ["Flying"],
	},
	fletchinder: {
		num: 662,
		name: "Fletchinder",
		types: ["Fire", "Flying"],
		baseStats: { hp: 62, atk: 73, def: 55, spa: 56, spd: 52, spe: 84 },
		abilities: { 0: "Flame Body", H: "Gale Wings" },
		heightm: 0.7,
		weightkg: 16,
		color: "Red",
		prevo: "Fletchling",
		evoLevel: 17,
		evos: ["Talonflame"],
		eggGroups: ["Flying"],
	},
	talonflame: {
		num: 663,
		name: "Talonflame",
		types: ["Fire", "Flying"],
		baseStats: { hp: 78, atk: 81, def: 71, spa: 74, spd: 69, spe: 126 },
		abilities: { 0: "Flame Body", H: "Gale Wings" },
		heightm: 1.2,
		weightkg: 24.5,
		color: "Red",
		prevo: "Fletchinder",
		evoLevel: 35,
		eggGroups: ["Flying"],
	},
	scatterbug: {
		num: 664,
		name: "Scatterbug",
		types: ["Bug"],
		baseStats: { hp: 38, atk: 35, def: 40, spa: 27, spd: 25, spe: 35 },
		abilities: { 0: "Shield Dust", 1: "Compound Eyes", H: "Friend Guard" },
		heightm: 0.3,
		weightkg: 2.5,
		color: "Black",
		evos: ["Spewpa"],
		eggGroups: ["Bug"],
		// TODO: Scatterbug technically has the same number of formes as Vivillon
	},
	spewpa: {
		num: 665,
		name: "Spewpa",
		types: ["Bug"],
		baseStats: { hp: 45, atk: 22, def: 60, spa: 27, spd: 30, spe: 29 },
		abilities: { 0: "Shed Skin", H: "Friend Guard" },
		heightm: 0.3,
		weightkg: 8.4,
		color: "Black",
		prevo: "Scatterbug",
		evoLevel: 9,
		evos: ["Vivillon"],
		eggGroups: ["Bug"],
		// TODO: Spewpa technically has the same number of formes as Vivillon
	},
	vivillon: {
		num: 666,
		name: "Vivillon",
		baseForme: "Meadow", // TODO: actual base forme is Icy Snow, not Meadow
		types: ["Bug", "Flying"],
		baseStats: { hp: 80, atk: 52, def: 50, spa: 90, spd: 50, spe: 89 },
		abilities: { 0: "Shield Dust", 1: "Compound Eyes", H: "Friend Guard" },
		heightm: 1.2,
		weightkg: 17,
		color: "White",
		prevo: "Spewpa",
		evoLevel: 12,
		eggGroups: ["Bug"],
		otherFormes: ["Vivillon-Fancy", "Vivillon-Pokeball"],
		cosmeticFormes: ["Vivillon-Archipelago", "Vivillon-Continental", "Vivillon-Elegant", "Vivillon-Garden", "Vivillon-High Plains", "Vivillon-Icy Snow", "Vivillon-Jungle", "Vivillon-Marine", "Vivillon-Modern", "Vivillon-Monsoon", "Vivillon-Ocean", "Vivillon-Polar", "Vivillon-River", "Vivillon-Sandstorm", "Vivillon-Savanna", "Vivillon-Sun", "Vivillon-Tundra"],
		formeOrder: [
			"Vivillon-Icy Snow",
			"Vivillon-Polar",
			"Vivillon-Tundra",
			"Vivillon-Continental",
			"Vivillon-Garden",
			"Vivillon-Elegant",
			"Vivillon", // Meadow
			"Vivillon-Modern",
			"Vivillon-Marine",
			"Vivillon-Archipelago",
			"Vivillon-High Plains",
			"Vivillon-Sandstorm",
			"Vivillon-River",
			"Vivillon-Monsoon",
			"Vivillon-Savanna",
			"Vivillon-Sun",
			"Vivillon-Ocean",
			"Vivillon-Jungle",
			"Vivillon-Fancy",
			"Vivillon-Pokeball",
		],
	},
	vivillonfancy: {
		num: 666,
		name: "Vivillon-Fancy",
		baseSpecies: "Vivillon",
		forme: "Fancy",
		types: ["Bug", "Flying"],
		baseStats: { hp: 80, atk: 52, def: 50, spa: 90, spd: 50, spe: 89 },
		abilities: { 0: "Shield Dust", 1: "Compound Eyes" },
		heightm: 1.2,
		weightkg: 17,
		color: "Black",
		eggGroups: ["Bug"],
	},
	vivillonpokeball: {
		num: 666,
		name: "Vivillon-Pokeball",
		baseSpecies: "Vivillon",
		forme: "Pokeball",
		types: ["Bug", "Flying"],
		baseStats: { hp: 80, atk: 52, def: 50, spa: 90, spd: 50, spe: 89 },
		abilities: { 0: "Shield Dust", 1: "Compound Eyes" },
		heightm: 1.2,
		weightkg: 17,
		color: "Black",
		eggGroups: ["Bug"],
	},
	litleo: {
		num: 667,
		name: "Litleo",
		types: ["Fire", "Normal"],
		genderRatio: { M: 0.125, F: 0.875 },
		baseStats: { hp: 62, atk: 50, def: 58, spa: 73, spd: 54, spe: 72 },
		abilities: { 0: "Rivalry", 1: "Unnerve", H: "Moxie" },
		heightm: 0.6,
		weightkg: 13.5,
		color: "Brown",
		evos: ["Pyroar"],
		eggGroups: ["Field"],
	},
	pyroar: {
		num: 668,
		name: "Pyroar",
		types: ["Fire", "Normal"],
		genderRatio: { M: 0.125, F: 0.875 },
		baseStats: { hp: 86, atk: 68, def: 72, spa: 109, spd: 66, spe: 106 },
		abilities: { 0: "Rivalry", 1: "Unnerve", H: "Moxie" },
		heightm: 1.5,
		weightkg: 81.5,
		color: "Brown",
		prevo: "Litleo",
		evoLevel: 35,
		eggGroups: ["Field"],
	},
	flabebe: {
		num: 669,
		name: "Flabe\u0301be\u0301",
		baseForme: "Red",
		types: ["Fairy"],
		gender: "F",
		baseStats: { hp: 44, atk: 38, def: 39, spa: 61, spd: 79, spe: 42 },
		abilities: { 0: "Flower Veil", H: "Symbiosis" },
		heightm: 0.1,
		weightkg: 0.1,
		color: "White",
		evos: ["Floette"],
		eggGroups: ["Fairy"],
		cosmeticFormes: ["Flabe\u0301be\u0301-Blue", "Flabe\u0301be\u0301-Orange", "Flabe\u0301be\u0301-White", "Flabe\u0301be\u0301-Yellow"],
		formeOrder: ["Flabe\u0301be\u0301", "Flabe\u0301be\u0301-Blue", "Flabe\u0301be\u0301-Orange", "Flabe\u0301be\u0301-White", "Flabe\u0301be\u0301-Yellow"],
	},
	floette: {
		num: 670,
		name: "Floette",
		baseForme: "Red",
		types: ["Fairy"],
		gender: "F",
		baseStats: { hp: 54, atk: 45, def: 47, spa: 75, spd: 98, spe: 52 },
		abilities: { 0: "Flower Veil", H: "Symbiosis" },
		heightm: 0.2,
		weightkg: 0.9,
		color: "White",
		prevo: "Flabe\u0301be\u0301",
		evoLevel: 19,
		evos: ["Florges"],
		eggGroups: ["Fairy"],
		otherFormes: ["Floette-Eternal"],
		cosmeticFormes: ["Floette-Blue", "Floette-Orange", "Floette-White", "Floette-Yellow"],
		formeOrder: ["Floette", "Floette-Blue", "Floette-Orange", "Floette-White", "Floette-Yellow", "Floette-Eternal"],
	},
	floetteeternal: {
		num: 670,
		name: "Floette-Eternal",
		baseSpecies: "Floette",
		forme: "Eternal",
		types: ["Fairy"],
		gender: "F",
		baseStats: { hp: 74, atk: 65, def: 67, spa: 125, spd: 128, spe: 92 },
		abilities: { 0: "Flower Veil" },
		heightm: 0.2,
		weightkg: 0.9,
		color: "White",
		eggGroups: ["Undiscovered"],
	},
	florges: {
		num: 671,
		name: "Florges",
		baseForme: "Red",
		types: ["Fairy"],
		gender: "F",
		baseStats: { hp: 78, atk: 65, def: 68, spa: 112, spd: 154, spe: 75 },
		abilities: { 0: "Flower Veil", H: "Symbiosis" },
		heightm: 1.1,
		weightkg: 10,
		color: "White",
		prevo: "Floette",
		evoType: "useItem",
		evoItem: "Shiny Stone",
		eggGroups: ["Fairy"],
		cosmeticFormes: ["Florges-Blue", "Florges-Orange", "Florges-White", "Florges-Yellow"],
		formeOrder: ["Florges", "Florges-Blue", "Florges-Orange", "Florges-White", "Florges-Yellow"],
	},
	skiddo: {
		num: 672,
		name: "Skiddo",
		types: ["Grass"],
		baseStats: { hp: 66, atk: 65, def: 48, spa: 62, spd: 57, spe: 52 },
		abilities: { 0: "Sap Sipper", H: "Grass Pelt" },
		heightm: 0.9,
		weightkg: 31,
		color: "Brown",
		evos: ["Gogoat"],
		eggGroups: ["Field"],
	},
	gogoat: {
		num: 673,
		name: "Gogoat",
		types: ["Grass"],
		baseStats: { hp: 123, atk: 100, def: 62, spa: 97, spd: 81, spe: 68 },
		abilities: { 0: "Sap Sipper", H: "Grass Pelt" },
		heightm: 1.7,
		weightkg: 91,
		color: "Brown",
		prevo: "Skiddo",
		evoLevel: 32,
		eggGroups: ["Field"],
	},
	pancham: {
		num: 674,
		name: "Pancham",
		types: ["Fighting"],
		baseStats: { hp: 67, atk: 82, def: 62, spa: 46, spd: 48, spe: 43 },
		abilities: { 0: "Iron Fist", 1: "Mold Breaker", H: "Scrappy" },
		heightm: 0.6,
		weightkg: 8,
		color: "White",
		evos: ["Pangoro"],
		eggGroups: ["Field", "Human-Like"],
	},
	pangoro: {
		num: 675,
		name: "Pangoro",
		types: ["Fighting", "Dark"],
		baseStats: { hp: 95, atk: 124, def: 78, spa: 69, spd: 71, spe: 58 },
		abilities: { 0: "Iron Fist", 1: "Mold Breaker", H: "Scrappy" },
		heightm: 2.1,
		weightkg: 136,
		color: "White",
		prevo: "Pancham",
		evoLevel: 32,
		evoCondition: "with a Dark-type in the party",
		eggGroups: ["Field", "Human-Like"],
	},
	furfrou: {
		num: 676,
		name: "Furfrou",
		baseForme: "Natural",
		types: ["Normal"],
		baseStats: { hp: 75, atk: 80, def: 60, spa: 65, spd: 90, spe: 102 },
		abilities: { 0: "Fur Coat" },
		heightm: 1.2,
		weightkg: 28,
		color: "White",
		eggGroups: ["Field"],
		cosmeticFormes: ["Furfrou-Dandy", "Furfrou-Debutante", "Furfrou-Diamond", "Furfrou-Heart", "Furfrou-Kabuki", "Furfrou-La Reine", "Furfrou-Matron", "Furfrou-Pharaoh", "Furfrou-Star"],
		formeOrder: [
			"Furfrou",
			"Furfrou-Heart",
			"Furfrou-Star",
			"Furfrou-Diamond",
			"Furfrou-Debutante",
			"Furfrou-Matron",
			"Furfrou-Dandy",
			"Furfrou-La Reine",
			"Furfrou-Kabuki",
			"Furfrou-Pharaoh",
		],
	},
	espurr: {
		num: 677,
		name: "Espurr",
		types: ["Psychic"],
		baseStats: { hp: 62, atk: 48, def: 54, spa: 63, spd: 60, spe: 68 },
		abilities: { 0: "Keen Eye", 1: "Infiltrator", H: "Own Tempo" },
		heightm: 0.3,
		weightkg: 3.5,
		color: "Gray",
		evos: ["Meowstic", "Meowstic-F"],
		eggGroups: ["Field"],
	},
	meowstic: {
		num: 678,
		name: "Meowstic",
		baseForme: "M",
		types: ["Psychic"],
		gender: "M",
		baseStats: { hp: 74, atk: 48, def: 76, spa: 83, spd: 81, spe: 104 },
		abilities: { 0: "Keen Eye", 1: "Infiltrator", H: "Prankster" },
		heightm: 0.6,
		weightkg: 8.5,
		color: "Blue",
		prevo: "Espurr",
		evoLevel: 25,
		eggGroups: ["Field"],
		otherFormes: ["Meowstic-F"],
		formeOrder: ["Meowstic", "Meowstic-F"],
	},
	meowsticf: {
		num: 678,
		name: "Meowstic-F",
		baseSpecies: "Meowstic",
		forme: "F",
		types: ["Psychic"],
		gender: "F",
		baseStats: { hp: 74, atk: 48, def: 76, spa: 83, spd: 81, spe: 104 },
		abilities: { 0: "Keen Eye", 1: "Infiltrator", H: "Competitive" },
		heightm: 0.6,
		weightkg: 8.5,
		color: "White",
		prevo: "Espurr",
		evoLevel: 25,
		eggGroups: ["Field"],
	},
	honedge: {
		num: 679,
		name: "Honedge",
		types: ["Steel", "Ghost"],
		baseStats: { hp: 45, atk: 80, def: 100, spa: 35, spd: 37, spe: 28 },
		abilities: { 0: "No Guard" },
		heightm: 0.8,
		weightkg: 2,
		color: "Brown",
		evos: ["Doublade"],
		eggGroups: ["Mineral"],
	},
	doublade: {
		num: 680,
		name: "Doublade",
		types: ["Steel", "Ghost"],
		baseStats: { hp: 59, atk: 110, def: 150, spa: 45, spd: 49, spe: 35 },
		abilities: { 0: "No Guard" },
		heightm: 0.8,
		weightkg: 4.5,
		color: "Brown",
		prevo: "Honedge",
		evoLevel: 35,
		evos: ["Aegislash"],
		eggGroups: ["Mineral"],
	},
	aegislash: {
		num: 681,
		name: "Aegislash",
		baseForme: "Shield",
		types: ["Steel", "Ghost"],
		baseStats: { hp: 60, atk: 50, def: 140, spa: 50, spd: 140, spe: 60 },
		abilities: { 0: "Stance Change" },
		heightm: 1.7,
		weightkg: 53,
		color: "Brown",
		prevo: "Doublade",
		evoType: "useItem",
		evoItem: "Dusk Stone",
		eggGroups: ["Mineral"],
		otherFormes: ["Aegislash-Blade"],
		formeOrder: ["Aegislash", "Aegislash-Blade"],
	},
	aegislashblade: {
		num: 681,
		name: "Aegislash-Blade",
		baseSpecies: "Aegislash",
		forme: "Blade",
		types: ["Steel", "Ghost"],
		baseStats: { hp: 60, atk: 140, def: 50, spa: 140, spd: 50, spe: 60 },
		abilities: { 0: "Stance Change" },
		heightm: 1.7,
		weightkg: 53,
		color: "Brown",
		eggGroups: ["Mineral"],
		requiredAbility: "Stance Change",
		battleOnly: "Aegislash",
	},
	spritzee: {
		num: 682,
		name: "Spritzee",
		types: ["Fairy"],
		baseStats: { hp: 78, atk: 52, def: 60, spa: 63, spd: 65, spe: 23 },
		abilities: { 0: "Healer", H: "Aroma Veil" },
		heightm: 0.2,
		weightkg: 0.5,
		color: "Pink",
		evos: ["Aromatisse"],
		eggGroups: ["Fairy"],
	},
	aromatisse: {
		num: 683,
		name: "Aromatisse",
		types: ["Fairy"],
		baseStats: { hp: 101, atk: 72, def: 72, spa: 99, spd: 89, spe: 29 },
		abilities: { 0: "Healer", H: "Aroma Veil" },
		heightm: 0.8,
		weightkg: 15.5,
		color: "Pink",
		prevo: "Spritzee",
		evoType: "trade",
		evoItem: "Sachet",
		eggGroups: ["Fairy"],
	},
	swirlix: {
		num: 684,
		name: "Swirlix",
		types: ["Fairy"],
		baseStats: { hp: 62, atk: 48, def: 66, spa: 59, spd: 57, spe: 49 },
		abilities: { 0: "Sweet Veil", H: "Unburden" },
		heightm: 0.4,
		weightkg: 3.5,
		color: "White",
		evos: ["Slurpuff"],
		eggGroups: ["Fairy"],
	},
	slurpuff: {
		num: 685,
		name: "Slurpuff",
		types: ["Fairy"],
		baseStats: { hp: 82, atk: 80, def: 86, spa: 85, spd: 75, spe: 72 },
		abilities: { 0: "Sweet Veil", H: "Unburden" },
		heightm: 0.8,
		weightkg: 5,
		color: "White",
		prevo: "Swirlix",
		evoType: "trade",
		evoItem: "Whipped Dream",
		eggGroups: ["Fairy"],
	},
	inkay: {
		num: 686,
		name: "Inkay",
		types: ["Dark", "Psychic"],
		baseStats: { hp: 53, atk: 54, def: 53, spa: 37, spd: 46, spe: 45 },
		abilities: { 0: "Contrary", 1: "Suction Cups", H: "Infiltrator" },
		heightm: 0.4,
		weightkg: 3.5,
		color: "Blue",
		evos: ["Malamar"],
		eggGroups: ["Water 1", "Water 2"],
	},
	malamar: {
		num: 687,
		name: "Malamar",
		types: ["Dark", "Psychic"],
		baseStats: { hp: 86, atk: 92, def: 88, spa: 68, spd: 75, spe: 73 },
		abilities: { 0: "Contrary", 1: "Suction Cups", H: "Infiltrator" },
		heightm: 1.5,
		weightkg: 47,
		color: "Blue",
		prevo: "Inkay",
		evoLevel: 30,
		evoCondition: "with the console turned upside-down",
		eggGroups: ["Water 1", "Water 2"],
	},
	binacle: {
		num: 688,
		name: "Binacle",
		types: ["Rock", "Water"],
		baseStats: { hp: 42, atk: 52, def: 67, spa: 39, spd: 56, spe: 50 },
		abilities: { 0: "Tough Claws", 1: "Sniper", H: "Pickpocket" },
		heightm: 0.5,
		weightkg: 31,
		color: "Brown",
		evos: ["Barbaracle"],
		eggGroups: ["Water 3"],
	},
	barbaracle: {
		num: 689,
		name: "Barbaracle",
		types: ["Rock", "Water"],
		baseStats: { hp: 72, atk: 105, def: 115, spa: 54, spd: 86, spe: 68 },
		abilities: { 0: "Tough Claws", 1: "Sniper", H: "Pickpocket" },
		heightm: 1.3,
		weightkg: 96,
		color: "Brown",
		prevo: "Binacle",
		evoLevel: 39,
		eggGroups: ["Water 3"],
	},
	skrelp: {
		num: 690,
		name: "Skrelp",
		types: ["Poison", "Water"],
		baseStats: { hp: 50, atk: 60, def: 60, spa: 60, spd: 60, spe: 30 },
		abilities: { 0: "Poison Point", 1: "Poison Touch", H: "Adaptability" },
		heightm: 0.5,
		weightkg: 7.3,
		color: "Brown",
		evos: ["Dragalge"],
		eggGroups: ["Water 1", "Dragon"],
	},
	dragalge: {
		num: 691,
		name: "Dragalge",
		types: ["Poison", "Dragon"],
		baseStats: { hp: 65, atk: 75, def: 90, spa: 97, spd: 123, spe: 44 },
		abilities: { 0: "Poison Point", 1: "Poison Touch", H: "Adaptability" },
		heightm: 1.8,
		weightkg: 81.5,
		color: "Brown",
		prevo: "Skrelp",
		evoLevel: 48,
		eggGroups: ["Water 1", "Dragon"],
	},
	clauncher: {
		num: 692,
		name: "Clauncher",
		types: ["Water"],
		baseStats: { hp: 50, atk: 53, def: 62, spa: 58, spd: 63, spe: 44 },
		abilities: { 0: "Mega Launcher" },
		heightm: 0.5,
		weightkg: 8.3,
		color: "Blue",
		evos: ["Clawitzer"],
		eggGroups: ["Water 1", "Water 3"],
	},
	clawitzer: {
		num: 693,
		name: "Clawitzer",
		types: ["Water"],
		baseStats: { hp: 71, atk: 73, def: 88, spa: 120, spd: 89, spe: 59 },
		abilities: { 0: "Mega Launcher" },
		heightm: 1.3,
		weightkg: 35.3,
		color: "Blue",
		prevo: "Clauncher",
		evoLevel: 37,
		eggGroups: ["Water 1", "Water 3"],
	},
	helioptile: {
		num: 694,
		name: "Helioptile",
		types: ["Electric", "Normal"],
		baseStats: { hp: 44, atk: 38, def: 33, spa: 61, spd: 43, spe: 70 },
		abilities: { 0: "Dry Skin", 1: "Sand Veil", H: "Solar Power" },
		heightm: 0.5,
		weightkg: 6,
		color: "Yellow",
		evos: ["Heliolisk"],
		eggGroups: ["Monster", "Dragon"],
	},
	heliolisk: {
		num: 695,
		name: "Heliolisk",
		types: ["Electric", "Normal"],
		baseStats: { hp: 62, atk: 55, def: 52, spa: 109, spd: 94, spe: 109 },
		abilities: { 0: "Dry Skin", 1: "Sand Veil", H: "Solar Power" },
		heightm: 1,
		weightkg: 21,
		color: "Yellow",
		prevo: "Helioptile",
		evoType: "useItem",
		evoItem: "Sun Stone",
		eggGroups: ["Monster", "Dragon"],
	},
	tyrunt: {
		num: 696,
		name: "Tyrunt",
		types: ["Rock", "Dragon"],
		genderRatio: { M: 0.875, F: 0.125 },
		baseStats: { hp: 58, atk: 89, def: 77, spa: 45, spd: 45, spe: 48 },
		abilities: { 0: "Strong Jaw", H: "Sturdy" },
		heightm: 0.8,
		weightkg: 26,
		color: "Brown",
		evos: ["Tyrantrum"],
		eggGroups: ["Monster", "Dragon"],
	},
	tyrantrum: {
		num: 697,
		name: "Tyrantrum",
		types: ["Rock", "Dragon"],
		genderRatio: { M: 0.875, F: 0.125 },
		baseStats: { hp: 82, atk: 121, def: 119, spa: 69, spd: 59, spe: 71 },
		abilities: { 0: "Strong Jaw", H: "Rock Head" },
		heightm: 2.5,
		weightkg: 270,
		color: "Red",
		prevo: "Tyrunt",
		evoLevel: 39,
		eggGroups: ["Monster", "Dragon"],
	},
	amaura: {
		num: 698,
		name: "Amaura",
		types: ["Rock", "Ice"],
		genderRatio: { M: 0.875, F: 0.125 },
		baseStats: { hp: 77, atk: 59, def: 50, spa: 67, spd: 63, spe: 46 },
		abilities: { 0: "Refrigerate", H: "Snow Warning" },
		heightm: 1.3,
		weightkg: 25.2,
		color: "Blue",
		evos: ["Aurorus"],
		eggGroups: ["Monster"],
	},
	aurorus: {
		num: 699,
		name: "Aurorus",
		types: ["Rock", "Ice"],
		genderRatio: { M: 0.875, F: 0.125 },
		baseStats: { hp: 123, atk: 77, def: 72, spa: 99, spd: 92, spe: 58 },
		abilities: { 0: "Refrigerate", H: "Snow Warning" },
		heightm: 2.7,
		weightkg: 225,
		color: "Blue",
		prevo: "Amaura",
		evoLevel: 39,
		eggGroups: ["Monster"],
	},
	sylveon: {
		num: 700,
		name: "Sylveon",
		types: ["Fairy"],
		genderRatio: { M: 0.875, F: 0.125 },
		baseStats: { hp: 95, atk: 65, def: 65, spa: 110, spd: 130, spe: 60 },
		abilities: { 0: "Cute Charm", H: "Pixilate" },
		heightm: 1,
		weightkg: 23.5,
		color: "Pink",
		prevo: "Eevee",
		evoType: "levelExtra",
		evoCondition: "with a Fairy-type move and two levels of Affection",
		eggGroups: ["Field"],
	},
	hawlucha: {
		num: 701,
		name: "Hawlucha",
		types: ["Fighting", "Flying"],
		baseStats: { hp: 78, atk: 92, def: 75, spa: 74, spd: 63, spe: 118 },
		abilities: { 0: "Limber", 1: "Unburden", H: "Mold Breaker" },
		heightm: 0.8,
		weightkg: 21.5,
		color: "Green",
		eggGroups: ["Flying", "Human-Like"],
	},
	dedenne: {
		num: 702,
		name: "Dedenne",
		types: ["Electric", "Fairy"],
		baseStats: { hp: 67, atk: 58, def: 57, spa: 81, spd: 67, spe: 101 },
		abilities: { 0: "Cheek Pouch", 1: "Pickup", H: "Plus" },
		heightm: 0.2,
		weightkg: 2.2,
		color: "Yellow",
		eggGroups: ["Field", "Fairy"],
	},
	carbink: {
		num: 703,
		name: "Carbink",
		types: ["Rock", "Fairy"],
		gender: "N",
		baseStats: { hp: 50, atk: 50, def: 150, spa: 50, spd: 150, spe: 50 },
		abilities: { 0: "Clear Body", H: "Sturdy" },
		heightm: 0.3,
		weightkg: 5.7,
		color: "Gray",
		eggGroups: ["Fairy", "Mineral"],
	},
	goomy: {
		num: 704,
		name: "Goomy",
		types: ["Dragon"],
		baseStats: { hp: 45, atk: 50, def: 35, spa: 55, spd: 75, spe: 40 },
		abilities: { 0: "Sap Sipper", 1: "Hydration", H: "Gooey" },
		heightm: 0.3,
		weightkg: 2.8,
		color: "Purple",
		evos: ["Sliggoo"],
		eggGroups: ["Dragon"],
	},
	sliggoo: {
		num: 705,
		name: "Sliggoo",
		types: ["Dragon"],
		baseStats: { hp: 68, atk: 75, def: 53, spa: 83, spd: 113, spe: 60 },
		abilities: { 0: "Sap Sipper", 1: "Hydration", H: "Gooey" },
		heightm: 0.8,
		weightkg: 17.5,
		color: "Purple",
		prevo: "Goomy",
		evoLevel: 40,
		evos: ["Goodra"],
		eggGroups: ["Dragon"],
	},
	goodra: {
		num: 706,
		name: "Goodra",
		types: ["Dragon"],
		baseStats: { hp: 90, atk: 100, def: 70, spa: 110, spd: 150, spe: 80 },
		abilities: { 0: "Sap Sipper", 1: "Hydration", H: "Gooey" },
		heightm: 2,
		weightkg: 150.5,
		color: "Purple",
		prevo: "Sliggoo",
		evoLevel: 50,
		eggGroups: ["Dragon"],
	},
	klefki: {
		num: 707,
		name: "Klefki",
		types: ["Steel", "Fairy"],
		baseStats: { hp: 57, atk: 80, def: 91, spa: 80, spd: 87, spe: 75 },
		abilities: { 0: "Prankster", H: "Magician" },
		heightm: 0.2,
		weightkg: 3,
		color: "Gray",
		eggGroups: ["Mineral"],
	},
	phantump: {
		num: 708,
		name: "Phantump",
		types: ["Ghost", "Grass"],
		baseStats: { hp: 43, atk: 70, def: 48, spa: 50, spd: 60, spe: 38 },
		abilities: { 0: "Natural Cure", 1: "Frisk", H: "Harvest" },
		heightm: 0.4,
		weightkg: 7,
		color: "Brown",
		evos: ["Trevenant"],
		eggGroups: ["Grass", "Amorphous"],
	},
	trevenant: {
		num: 709,
		name: "Trevenant",
		types: ["Ghost", "Grass"],
		baseStats: { hp: 85, atk: 110, def: 76, spa: 65, spd: 82, spe: 56 },
		abilities: { 0: "Natural Cure", 1: "Frisk", H: "Harvest" },
		heightm: 1.5,
		weightkg: 71,
		color: "Brown",
		prevo: "Phantump",
		evoType: "trade",
		eggGroups: ["Grass", "Amorphous"],
	},
	pumpkaboo: {
		num: 710,
		name: "Pumpkaboo",
		baseForme: "Average",
		types: ["Ghost", "Grass"],
		baseStats: { hp: 49, atk: 66, def: 70, spa: 44, spd: 55, spe: 51 },
		abilities: { 0: "Pickup", 1: "Frisk", H: "Insomnia" },
		heightm: 0.4,
		weightkg: 5,
		color: "Brown",
		evos: ["Gourgeist"],
		eggGroups: ["Amorphous"],
		otherFormes: ["Pumpkaboo-Small", "Pumpkaboo-Large", "Pumpkaboo-Super"],
		formeOrder: ["Pumpkaboo", "Pumpkaboo-Small", "Pumpkaboo-Large", "Pumpkaboo-Super"],
	},
	pumpkaboosmall: {
		num: 710,
		name: "Pumpkaboo-Small",
		baseSpecies: "Pumpkaboo",
		forme: "Small",
		types: ["Ghost", "Grass"],
		baseStats: { hp: 44, atk: 66, def: 70, spa: 44, spd: 55, spe: 56 },
		abilities: { 0: "Pickup", 1: "Frisk", H: "Insomnia" },
		heightm: 0.3,
		weightkg: 3.5,
		color: "Brown",
		evos: ["Gourgeist-Small"],
		eggGroups: ["Amorphous"],
	},
	pumpkaboolarge: {
		num: 710,
		name: "Pumpkaboo-Large",
		baseSpecies: "Pumpkaboo",
		forme: "Large",
		types: ["Ghost", "Grass"],
		baseStats: { hp: 54, atk: 66, def: 70, spa: 44, spd: 55, spe: 46 },
		abilities: { 0: "Pickup", 1: "Frisk", H: "Insomnia" },
		heightm: 0.5,
		weightkg: 7.5,
		color: "Brown",
		evos: ["Gourgeist-Large"],
		eggGroups: ["Amorphous"],
	},
	pumpkaboosuper: {
		num: 710,
		name: "Pumpkaboo-Super",
		baseSpecies: "Pumpkaboo",
		forme: "Super",
		types: ["Ghost", "Grass"],
		baseStats: { hp: 59, atk: 66, def: 70, spa: 44, spd: 55, spe: 41 },
		abilities: { 0: "Pickup", 1: "Frisk", H: "Insomnia" },
		heightm: 0.8,
		weightkg: 15,
		color: "Brown",
		evos: ["Gourgeist-Super"],
		eggGroups: ["Amorphous"],
	},
	gourgeist: {
		num: 711,
		name: "Gourgeist",
		baseForme: "Average",
		types: ["Ghost", "Grass"],
		baseStats: { hp: 65, atk: 90, def: 122, spa: 58, spd: 75, spe: 84 },
		abilities: { 0: "Pickup", 1: "Frisk", H: "Insomnia" },
		heightm: 0.9,
		weightkg: 12.5,
		color: "Brown",
		prevo: "Pumpkaboo",
		evoType: "trade",
		eggGroups: ["Amorphous"],
		otherFormes: ["Gourgeist-Small", "Gourgeist-Large", "Gourgeist-Super"],
		formeOrder: ["Gourgeist", "Gourgeist-Small", "Gourgeist-Large", "Gourgeist-Super"],
	},
	gourgeistsmall: {
		num: 711,
		name: "Gourgeist-Small",
		baseSpecies: "Gourgeist",
		forme: "Small",
		types: ["Ghost", "Grass"],
		baseStats: { hp: 55, atk: 85, def: 122, spa: 58, spd: 75, spe: 99 },
		abilities: { 0: "Pickup", 1: "Frisk", H: "Insomnia" },
		heightm: 0.7,
		weightkg: 9.5,
		color: "Brown",
		prevo: "Pumpkaboo-Small",
		evoType: "trade",
		eggGroups: ["Amorphous"],
	},
	gourgeistlarge: {
		num: 711,
		name: "Gourgeist-Large",
		baseSpecies: "Gourgeist",
		forme: "Large",
		types: ["Ghost", "Grass"],
		baseStats: { hp: 75, atk: 95, def: 122, spa: 58, spd: 75, spe: 69 },
		abilities: { 0: "Pickup", 1: "Frisk", H: "Insomnia" },
		heightm: 1.1,
		weightkg: 14,
		color: "Brown",
		prevo: "Pumpkaboo-Large",
		evoType: "trade",
		eggGroups: ["Amorphous"],
	},
	gourgeistsuper: {
		num: 711,
		name: "Gourgeist-Super",
		baseSpecies: "Gourgeist",
		forme: "Super",
		types: ["Ghost", "Grass"],
		baseStats: { hp: 85, atk: 100, def: 122, spa: 58, spd: 75, spe: 54 },
		abilities: { 0: "Pickup", 1: "Frisk", H: "Insomnia" },
		heightm: 1.7,
		weightkg: 39,
		color: "Brown",
		prevo: "Pumpkaboo-Super",
		evoType: "trade",
		eggGroups: ["Amorphous"],
	},
	bergmite: {
		num: 712,
		name: "Bergmite",
		types: ["Ice"],
		baseStats: { hp: 55, atk: 69, def: 85, spa: 32, spd: 35, spe: 28 },
		abilities: { 0: "Own Tempo", 1: "Ice Body", H: "Sturdy" },
		heightm: 1,
		weightkg: 99.5,
		color: "Blue",
		evos: ["Avalugg"],
		eggGroups: ["Monster", "Mineral"],
	},
	avalugg: {
		num: 713,
		name: "Avalugg",
		types: ["Ice"],
		baseStats: { hp: 95, atk: 117, def: 184, spa: 44, spd: 46, spe: 28 },
		abilities: { 0: "Own Tempo", 1: "Ice Body", H: "Sturdy" },
		heightm: 2,
		weightkg: 505,
		color: "Blue",
		prevo: "Bergmite",
		evoLevel: 37,
		eggGroups: ["Monster", "Mineral"],
	},
	noibat: {
		num: 714,
		name: "Noibat",
		types: ["Flying", "Dragon"],
		baseStats: { hp: 40, atk: 30, def: 35, spa: 45, spd: 40, spe: 55 },
		abilities: { 0: "Frisk", 1: "Infiltrator", H: "Telepathy" },
		heightm: 0.5,
		weightkg: 8,
		color: "Purple",
		evos: ["Noivern"],
		eggGroups: ["Flying", "Dragon"],
	},
	noivern: {
		num: 715,
		name: "Noivern",
		types: ["Flying", "Dragon"],
		baseStats: { hp: 85, atk: 70, def: 80, spa: 97, spd: 80, spe: 123 },
		abilities: { 0: "Frisk", 1: "Infiltrator", H: "Telepathy" },
		heightm: 1.5,
		weightkg: 85,
		color: "Purple",
		prevo: "Noibat",
		evoLevel: 48,
		eggGroups: ["Flying", "Dragon"],
	},
	xerneas: {
		num: 716,
		name: "Xerneas",
		baseForme: "Active", // Neutral is technically the base, but it can't be used in battle
		types: ["Fairy"],
		gender: "N",
		baseStats: { hp: 126, atk: 131, def: 95, spa: 131, spd: 98, spe: 99 },
		abilities: { 0: "Fairy Aura" },
		heightm: 3,
		weightkg: 215,
		color: "Blue",
		eggGroups: ["Undiscovered"],
		otherFormes: ["Xerneas-Neutral"],
		formeOrder: ["Xerneas-Neutral", "Xerneas"],
	},
	xerneasneutral: {
		num: 716,
		name: "Xerneas-Neutral",
		baseSpecies: "Xerneas",
		forme: "Neutral",
		types: ["Fairy"],
		gender: "N",
		baseStats: { hp: 126, atk: 131, def: 95, spa: 131, spd: 98, spe: 99 },
		abilities: { 0: "Fairy Aura" },
		heightm: 3,
		weightkg: 215,
		color: "Blue",
		eggGroups: ["Undiscovered"],
	},
	yveltal: {
		num: 717,
		name: "Yveltal",
		types: ["Dark", "Flying"],
		gender: "N",
		baseStats: { hp: 126, atk: 131, def: 95, spa: 131, spd: 98, spe: 99 },
		abilities: { 0: "Dark Aura" },
		heightm: 5.8,
		weightkg: 203,
		color: "Red",
		eggGroups: ["Undiscovered"],
	},
	zygarde: {
		num: 718,
		name: "Zygarde",
		baseForme: "50%",
		types: ["Dragon", "Ground"],
		gender: "N",
		baseStats: { hp: 108, atk: 100, def: 121, spa: 81, spd: 95, spe: 95 },
		abilities: { 0: "Aura Break", S: "Power Construct" },
		heightm: 5,
		weightkg: 305,
		color: "Green",
		eggGroups: ["Undiscovered"],
		otherFormes: ["Zygarde-10%", "Zygarde-Complete"],
		// forme 2 = 10% with Power Constructor ,forme 3 = 50% with Power Construct
		formeOrder: ["Zygarde", "Zygarde-10%", "Zygarde-10%", "Zygarde", "Zygarde-Complete"],
	},
	zygarde10: {
		num: 718,
		name: "Zygarde-10%",
		baseSpecies: "Zygarde",
		forme: "10%",
		types: ["Dragon", "Ground"],
		gender: "N",
		baseStats: { hp: 54, atk: 100, def: 71, spa: 61, spd: 85, spe: 115 },
		abilities: { 0: "Aura Break", S: "Power Construct" },
		heightm: 1.2,
		weightkg: 33.5,
		color: "Black",
		eggGroups: ["Undiscovered"],
		changesFrom: "Zygarde",
		gen: 7,
	},
	zygardecomplete: {
		num: 718,
		name: "Zygarde-Complete",
		baseSpecies: "Zygarde",
		forme: "Complete",
		types: ["Dragon", "Ground"],
		gender: "N",
		baseStats: { hp: 216, atk: 100, def: 121, spa: 91, spd: 95, spe: 85 },
		abilities: { 0: "Power Construct" },
		heightm: 4.5,
		weightkg: 610,
		color: "Black",
		eggGroups: ["Undiscovered"],
		requiredAbility: "Power Construct",
		battleOnly: ["Zygarde", "Zygarde-10%"],
		gen: 7,
	},
	diancie: {
		num: 719,
		name: "Diancie",
		types: ["Rock", "Fairy"],
		gender: "N",
		baseStats: { hp: 50, atk: 100, def: 150, spa: 100, spd: 150, spe: 50 },
		abilities: { 0: "Clear Body" },
		heightm: 0.7,
		weightkg: 8.8,
		color: "Pink",
		eggGroups: ["Undiscovered"],
		otherFormes: ["Diancie-Mega"],
		formeOrder: ["Diancie", "Diancie-Mega"],
	},
	dianciemega: {
		num: 719,
		name: "Diancie-Mega",
		baseSpecies: "Diancie",
		forme: "Mega",
		types: ["Rock", "Fairy"],
		gender: "N",
		baseStats: { hp: 50, atk: 160, def: 110, spa: 160, spd: 110, spe: 110 },
		abilities: { 0: "Magic Bounce" },
		heightm: 1.1,
		weightkg: 27.8,
		color: "Pink",
		eggGroups: ["Undiscovered"],
		requiredItem: "Diancite",
	},
	hoopa: {
		num: 720,
		name: "Hoopa",
		baseForme: "Confined",
		types: ["Psychic", "Ghost"],
		gender: "N",
		baseStats: { hp: 80, atk: 110, def: 60, spa: 150, spd: 130, spe: 70 },
		abilities: { 0: "Magician" },
		heightm: 0.5,
		weightkg: 9,
		color: "Purple",
		eggGroups: ["Undiscovered"],
		otherFormes: ["Hoopa-Unbound"],
		formeOrder: ["Hoopa", "Hoopa-Unbound"],
	},
	hoopaunbound: {
		num: 720,
		name: "Hoopa-Unbound",
		baseSpecies: "Hoopa",
		forme: "Unbound",
		types: ["Psychic", "Dark"],
		gender: "N",
		baseStats: { hp: 80, atk: 160, def: 60, spa: 170, spd: 130, spe: 80 },
		abilities: { 0: "Magician" },
		heightm: 6.5,
		weightkg: 490,
		color: "Purple",
		eggGroups: ["Undiscovered"],
		changesFrom: "Hoopa",
	},
	volcanion: {
		num: 721,
		name: "Volcanion",
		types: ["Fire", "Water"],
		gender: "N",
		baseStats: { hp: 80, atk: 110, def: 120, spa: 130, spd: 90, spe: 70 },
		abilities: { 0: "Water Absorb" },
		heightm: 1.7,
		weightkg: 195,
		color: "Brown",
		eggGroups: ["Undiscovered"],
	},
	rowlet: {
		num: 722,
		name: "Rowlet",
		types: ["Grass", "Flying"],
		genderRatio: { M: 0.875, F: 0.125 },
		baseStats: { hp: 68, atk: 55, def: 55, spa: 50, spd: 50, spe: 42 },
		abilities: { 0: "Overgrow", H: "Long Reach" },
		heightm: 0.3,
		weightkg: 1.5,
		color: "Brown",
		evos: ["Dartrix"],
		eggGroups: ["Flying"],
	},
	dartrix: {
		num: 723,
		name: "Dartrix",
		types: ["Grass", "Flying"],
		genderRatio: { M: 0.875, F: 0.125 },
		baseStats: { hp: 78, atk: 75, def: 75, spa: 70, spd: 70, spe: 52 },
		abilities: { 0: "Overgrow", H: "Long Reach" },
		heightm: 0.7,
		weightkg: 16,
		color: "Brown",
		prevo: "Rowlet",
		evoLevel: 17,
		evos: ["Decidueye"],
		eggGroups: ["Flying"],
	},
	decidueye: {
		num: 724,
		name: "Decidueye",
		types: ["Grass", "Ghost"],
		genderRatio: { M: 0.875, F: 0.125 },
		baseStats: { hp: 78, atk: 107, def: 75, spa: 100, spd: 100, spe: 70 },
		abilities: { 0: "Overgrow", H: "Long Reach" },
		heightm: 1.6,
		weightkg: 36.6,
		color: "Brown",
		prevo: "Dartrix",
		evoLevel: 34,
		eggGroups: ["Flying"],
	},
	litten: {
		num: 725,
		name: "Litten",
		types: ["Fire"],
		genderRatio: { M: 0.875, F: 0.125 },
		baseStats: { hp: 45, atk: 65, def: 40, spa: 60, spd: 40, spe: 70 },
		abilities: { 0: "Blaze", H: "Intimidate" },
		heightm: 0.4,
		weightkg: 4.3,
		color: "Red",
		evos: ["Torracat"],
		eggGroups: ["Field"],
	},
	torracat: {
		num: 726,
		name: "Torracat",
		types: ["Fire"],
		genderRatio: { M: 0.875, F: 0.125 },
		baseStats: { hp: 65, atk: 85, def: 50, spa: 80, spd: 50, spe: 90 },
		abilities: { 0: "Blaze", H: "Intimidate" },
		heightm: 0.7,
		weightkg: 25,
		color: "Red",
		prevo: "Litten",
		evoLevel: 17,
		evos: ["Incineroar"],
		eggGroups: ["Field"],
	},
	incineroar: {
		num: 727,
		name: "Incineroar",
		types: ["Fire", "Dark"],
		genderRatio: { M: 0.875, F: 0.125 },
		baseStats: { hp: 95, atk: 115, def: 90, spa: 80, spd: 90, spe: 60 },
		abilities: { 0: "Blaze", H: "Intimidate" },
		heightm: 1.8,
		weightkg: 83,
		color: "Red",
		prevo: "Torracat",
		evoLevel: 34,
		eggGroups: ["Field"],
	},
	popplio: {
		num: 728,
		name: "Popplio",
		types: ["Water"],
		genderRatio: { M: 0.875, F: 0.125 },
		baseStats: { hp: 50, atk: 54, def: 54, spa: 66, spd: 56, spe: 40 },
		abilities: { 0: "Torrent", H: "Liquid Voice" },
		heightm: 0.4,
		weightkg: 7.5,
		color: "Blue",
		evos: ["Brionne"],
		eggGroups: ["Water 1", "Field"],
	},
	brionne: {
		num: 729,
		name: "Brionne",
		types: ["Water"],
		genderRatio: { M: 0.875, F: 0.125 },
		baseStats: { hp: 60, atk: 69, def: 69, spa: 91, spd: 81, spe: 50 },
		abilities: { 0: "Torrent", H: "Liquid Voice" },
		heightm: 0.6,
		weightkg: 17.5,
		color: "Blue",
		prevo: "Popplio",
		evoLevel: 17,
		evos: ["Primarina"],
		eggGroups: ["Water 1", "Field"],
	},
	primarina: {
		num: 730,
		name: "Primarina",
		types: ["Water", "Fairy"],
		genderRatio: { M: 0.875, F: 0.125 },
		baseStats: { hp: 80, atk: 74, def: 74, spa: 126, spd: 116, spe: 60 },
		abilities: { 0: "Torrent", H: "Liquid Voice" },
		heightm: 1.8,
		weightkg: 44,
		color: "Blue",
		prevo: "Brionne",
		evoLevel: 34,
		eggGroups: ["Water 1", "Field"],
	},
	pikipek: {
		num: 731,
		name: "Pikipek",
		types: ["Normal", "Flying"],
		baseStats: { hp: 35, atk: 75, def: 30, spa: 30, spd: 30, spe: 65 },
		abilities: { 0: "Keen Eye", 1: "Skill Link", H: "Pickup" },
		heightm: 0.3,
		weightkg: 1.2,
		color: "Black",
		evos: ["Trumbeak"],
		eggGroups: ["Flying"],
	},
	trumbeak: {
		num: 732,
		name: "Trumbeak",
		types: ["Normal", "Flying"],
		baseStats: { hp: 55, atk: 85, def: 50, spa: 40, spd: 50, spe: 75 },
		abilities: { 0: "Keen Eye", 1: "Skill Link", H: "Pickup" },
		heightm: 0.6,
		weightkg: 14.8,
		color: "Black",
		prevo: "Pikipek",
		evoLevel: 14,
		evos: ["Toucannon"],
		eggGroups: ["Flying"],
	},
	toucannon: {
		num: 733,
		name: "Toucannon",
		types: ["Normal", "Flying"],
		baseStats: { hp: 80, atk: 120, def: 75, spa: 75, spd: 75, spe: 60 },
		abilities: { 0: "Keen Eye", 1: "Skill Link", H: "Sheer Force" },
		heightm: 1.1,
		weightkg: 26,
		color: "Black",
		prevo: "Trumbeak",
		evoLevel: 28,
		eggGroups: ["Flying"],
	},
	yungoos: {
		num: 734,
		name: "Yungoos",
		types: ["Normal"],
		baseStats: { hp: 48, atk: 70, def: 30, spa: 30, spd: 30, spe: 45 },
		abilities: { 0: "Stakeout", 1: "Strong Jaw", H: "Adaptability" },
		heightm: 0.4,
		weightkg: 6,
		color: "Brown",
		evos: ["Gumshoos"],
		eggGroups: ["Field"],
	},
	gumshoos: {
		num: 735,
		name: "Gumshoos",
		types: ["Normal"],
		baseStats: { hp: 88, atk: 110, def: 60, spa: 55, spd: 60, spe: 45 },
		abilities: { 0: "Stakeout", 1: "Strong Jaw", H: "Adaptability" },
		heightm: 0.7,
		weightkg: 14.2,
		color: "Brown",
		prevo: "Yungoos",
		evoLevel: 20,
		eggGroups: ["Field"],
		otherFormes: ["Gumshoos-Totem"],
		formeOrder: ["Gumshoos", "Gumshoos-Totem"],
	},
	gumshoostotem: {
		num: 735,
		name: "Gumshoos-Totem",
		baseSpecies: "Gumshoos",
		forme: "Totem",
		types: ["Normal"],
		baseStats: { hp: 88, atk: 110, def: 60, spa: 55, spd: 60, spe: 45 },
		abilities: { 0: "Adaptability" },
		heightm: 1.4,
		weightkg: 60,
		color: "Brown",
		eggGroups: ["Field"],
	},
	grubbin: {
		num: 736,
		name: "Grubbin",
		types: ["Bug"],
		baseStats: { hp: 47, atk: 62, def: 45, spa: 55, spd: 45, spe: 46 },
		abilities: { 0: "Swarm" },
		heightm: 0.4,
		weightkg: 4.4,
		color: "Gray",
		evos: ["Charjabug"],
		eggGroups: ["Bug"],
	},
	charjabug: {
		num: 737,
		name: "Charjabug",
		types: ["Bug", "Electric"],
		baseStats: { hp: 57, atk: 82, def: 95, spa: 55, spd: 75, spe: 36 },
		abilities: { 0: "Battery" },
		heightm: 0.5,
		weightkg: 10.5,
		color: "Green",
		prevo: "Grubbin",
		evoLevel: 20,
		evos: ["Vikavolt"],
		eggGroups: ["Bug"],
	},
	vikavolt: {
		num: 738,
		name: "Vikavolt",
		types: ["Bug", "Electric"],
		baseStats: { hp: 77, atk: 70, def: 90, spa: 145, spd: 75, spe: 43 },
		abilities: { 0: "Levitate" },
		heightm: 1.5,
		weightkg: 45,
		color: "Blue",
		prevo: "Charjabug",
		evoType: "useItem",
		evoItem: "Thunder Stone",
		eggGroups: ["Bug"],
		otherFormes: ["Vikavolt-Totem"],
		formeOrder: ["Vikavolt", "Vikavolt-Totem"],
	},
	vikavolttotem: {
		num: 738,
		name: "Vikavolt-Totem",
		baseSpecies: "Vikavolt",
		forme: "Totem",
		types: ["Bug", "Electric"],
		baseStats: { hp: 77, atk: 70, def: 90, spa: 145, spd: 75, spe: 43 },
		abilities: { 0: "Levitate" },
		heightm: 2.6,
		weightkg: 147.5,
		color: "Blue",
		eggGroups: ["Bug"],
	},
	crabrawler: {
		num: 739,
		name: "Crabrawler",
		types: ["Fighting"],
		baseStats: { hp: 47, atk: 82, def: 57, spa: 42, spd: 47, spe: 63 },
		abilities: { 0: "Hyper Cutter", 1: "Iron Fist", H: "Anger Point" },
		heightm: 0.6,
		weightkg: 7,
		color: "Purple",
		evos: ["Crabominable"],
		eggGroups: ["Water 3"],
	},
	crabominable: {
		num: 740,
		name: "Crabominable",
		types: ["Fighting", "Ice"],
		baseStats: { hp: 97, atk: 132, def: 77, spa: 62, spd: 67, spe: 43 },
		abilities: { 0: "Hyper Cutter", 1: "Iron Fist", H: "Anger Point" },
		heightm: 1.7,
		weightkg: 180,
		color: "White",
		prevo: "Crabrawler",
		evoType: "levelExtra",
		evoCondition: "at Mount Lanakila",
		eggGroups: ["Water 3"],
	},
	oricorio: {
		num: 741,
		name: "Oricorio",
		baseForme: "Baile",
		types: ["Fire", "Flying"],
		genderRatio: { M: 0.25, F: 0.75 },
		baseStats: { hp: 75, atk: 70, def: 70, spa: 98, spd: 70, spe: 93 },
		abilities: { 0: "Dancer" },
		heightm: 0.6,
		weightkg: 3.4,
		color: "Red",
		eggGroups: ["Flying"],
		otherFormes: ["Oricorio-Pom-Pom", "Oricorio-Pa'u", "Oricorio-Sensu"],
		formeOrder: ["Oricorio", "Oricorio-Pom-Pom", "Oricorio-Pa'u", "Oricorio-Sensu"],
	},
	oricoriopompom: {
		num: 741,
		name: "Oricorio-Pom-Pom",
		baseSpecies: "Oricorio",
		forme: "Pom-Pom",
		types: ["Electric", "Flying"],
		genderRatio: { M: 0.25, F: 0.75 },
		baseStats: { hp: 75, atk: 70, def: 70, spa: 98, spd: 70, spe: 93 },
		abilities: { 0: "Dancer" },
		heightm: 0.6,
		weightkg: 3.4,
		color: "Yellow",
		eggGroups: ["Flying"],
		changesFrom: "Oricorio",
	},
	oricoriopau: {
		num: 741,
		name: "Oricorio-Pa'u",
		baseSpecies: "Oricorio",
		forme: "Pa'u",
		types: ["Psychic", "Flying"],
		genderRatio: { M: 0.25, F: 0.75 },
		baseStats: { hp: 75, atk: 70, def: 70, spa: 98, spd: 70, spe: 93 },
		abilities: { 0: "Dancer" },
		heightm: 0.6,
		weightkg: 3.4,
		color: "Pink",
		eggGroups: ["Flying"],
		changesFrom: "Oricorio",
	},
	oricoriosensu: {
		num: 741,
		name: "Oricorio-Sensu",
		baseSpecies: "Oricorio",
		forme: "Sensu",
		types: ["Ghost", "Flying"],
		genderRatio: { M: 0.25, F: 0.75 },
		baseStats: { hp: 75, atk: 70, def: 70, spa: 98, spd: 70, spe: 93 },
		abilities: { 0: "Dancer" },
		heightm: 0.6,
		weightkg: 3.4,
		color: "Purple",
		eggGroups: ["Flying"],
		changesFrom: "Oricorio",
	},
	cutiefly: {
		num: 742,
		name: "Cutiefly",
		types: ["Bug", "Fairy"],
		baseStats: { hp: 40, atk: 45, def: 40, spa: 55, spd: 40, spe: 84 },
		abilities: { 0: "Honey Gather", 1: "Shield Dust", H: "Sweet Veil" },
		heightm: 0.1,
		weightkg: 0.2,
		color: "Yellow",
		evos: ["Ribombee"],
		eggGroups: ["Bug", "Fairy"],
	},
	ribombee: {
		num: 743,
		name: "Ribombee",
		types: ["Bug", "Fairy"],
		baseStats: { hp: 60, atk: 55, def: 60, spa: 95, spd: 70, spe: 124 },
		abilities: { 0: "Honey Gather", 1: "Shield Dust", H: "Sweet Veil" },
		heightm: 0.2,
		weightkg: 0.5,
		color: "Yellow",
		prevo: "Cutiefly",
		evoLevel: 25,
		eggGroups: ["Bug", "Fairy"],
		otherFormes: ["Ribombee-Totem"],
		formeOrder: ["Ribombee", "Ribombee-Totem"],
	},
	ribombeetotem: {
		num: 743,
		name: "Ribombee-Totem",
		baseSpecies: "Ribombee",
		forme: "Totem",
		types: ["Bug", "Fairy"],
		baseStats: { hp: 60, atk: 55, def: 60, spa: 95, spd: 70, spe: 124 },
		abilities: { 0: "Sweet Veil" },
		heightm: 0.4,
		weightkg: 2,
		color: "Yellow",
		eggGroups: ["Bug", "Fairy"],
	},
	rockruff: {
		num: 744,
		name: "Rockruff",
		baseForme: "Midday",
		types: ["Rock"],
		baseStats: { hp: 45, atk: 65, def: 40, spa: 30, spd: 40, spe: 60 },
		abilities: { 0: "Keen Eye", 1: "Vital Spirit", H: "Steadfast", S: "Own Tempo" },
		heightm: 0.5,
		weightkg: 9.2,
		color: "Brown",
		evos: ["Lycanroc", "Lycanroc-Midnight", "Lycanroc-Dusk"],
		eggGroups: ["Field"],
		formeOrder: ["Rockruff", "Rockruff"], // TODO: Rockruff-Dusk
	},
	lycanroc: {
		num: 745,
		name: "Lycanroc",
		baseForme: "Midday",
		types: ["Rock"],
		baseStats: { hp: 75, atk: 115, def: 65, spa: 55, spd: 65, spe: 112 },
		abilities: { 0: "Keen Eye", 1: "Sand Rush", H: "Steadfast" },
		heightm: 0.8,
		weightkg: 25,
		color: "Brown",
		prevo: "Rockruff",
		evoLevel: 25,
		evoCondition: "during the day",
		eggGroups: ["Field"],
		otherFormes: ["Lycanroc-Midnight", "Lycanroc-Dusk"],
		formeOrder: ["Lycanroc", "Lycanroc-Midnight", "Lycanroc-Dusk"],
	},
	lycanrocmidnight: {
		num: 745,
		name: "Lycanroc-Midnight",
		baseSpecies: "Lycanroc",
		forme: "Midnight",
		types: ["Rock"],
		baseStats: { hp: 85, atk: 115, def: 75, spa: 55, spd: 75, spe: 82 },
		abilities: { 0: "Keen Eye", 1: "Vital Spirit", H: "No Guard" },
		heightm: 1.1,
		weightkg: 25,
		color: "Red",
		prevo: "Rockruff",
		evoLevel: 25,
		evoCondition: "during the night",
		eggGroups: ["Field"],
	},
	lycanrocdusk: {
		num: 745,
		name: "Lycanroc-Dusk",
		baseSpecies: "Lycanroc",
		forme: "Dusk",
		types: ["Rock"],
		baseStats: { hp: 75, atk: 117, def: 65, spa: 55, spd: 65, spe: 110 },
		abilities: { 0: "Tough Claws" },
		heightm: 0.8,
		weightkg: 25,
		color: "Brown",
		prevo: "Rockruff",
		evoLevel: 25,
		evoCondition: "from a special Rockruff",
		eggGroups: ["Field"],
	},
	wishiwashi: {
		num: 746,
		name: "Wishiwashi",
		baseForme: "Solo",
		types: ["Water"],
		baseStats: { hp: 45, atk: 20, def: 20, spa: 25, spd: 25, spe: 40 },
		abilities: { 0: "Schooling" },
		heightm: 0.2,
		weightkg: 0.3,
		color: "Blue",
		eggGroups: ["Water 2"],
		otherFormes: ["Wishiwashi-School"],
		formeOrder: ["Wishiwashi", "Wishiwashi-School"],
	},
	wishiwashischool: {
		num: 746,
		name: "Wishiwashi-School",
		baseSpecies: "Wishiwashi",
		forme: "School",
		types: ["Water"],
		baseStats: { hp: 45, atk: 140, def: 130, spa: 140, spd: 135, spe: 30 },
		abilities: { 0: "Schooling" },
		heightm: 8.2,
		weightkg: 78.6,
		color: "Blue",
		eggGroups: ["Water 2"],
		requiredAbility: "Schooling",
		battleOnly: "Wishiwashi",
	},
	mareanie: {
		num: 747,
		name: "Mareanie",
		types: ["Poison", "Water"],
		baseStats: { hp: 50, atk: 53, def: 62, spa: 43, spd: 52, spe: 45 },
		abilities: { 0: "Merciless", 1: "Limber", H: "Regenerator" },
		heightm: 0.4,
		weightkg: 8,
		color: "Blue",
		evos: ["Toxapex"],
		eggGroups: ["Water 1"],
	},
	toxapex: {
		num: 748,
		name: "Toxapex",
		types: ["Poison", "Water"],
		baseStats: { hp: 50, atk: 63, def: 152, spa: 53, spd: 142, spe: 35 },
		abilities: { 0: "Merciless", 1: "Limber", H: "Regenerator" },
		heightm: 0.7,
		weightkg: 14.5,
		color: "Blue",
		prevo: "Mareanie",
		evoLevel: 38,
		eggGroups: ["Water 1"],
	},
	mudbray: {
		num: 749,
		name: "Mudbray",
		types: ["Ground"],
		baseStats: { hp: 70, atk: 100, def: 70, spa: 45, spd: 55, spe: 45 },
		abilities: { 0: "Own Tempo", 1: "Stamina", H: "Inner Focus" },
		heightm: 1,
		weightkg: 110,
		color: "Brown",
		evos: ["Mudsdale"],
		eggGroups: ["Field"],
	},
	mudsdale: {
		num: 750,
		name: "Mudsdale",
		types: ["Ground"],
		baseStats: { hp: 100, atk: 125, def: 100, spa: 55, spd: 85, spe: 35 },
		abilities: { 0: "Own Tempo", 1: "Stamina", H: "Inner Focus" },
		heightm: 2.5,
		weightkg: 920,
		color: "Brown",
		prevo: "Mudbray",
		evoLevel: 30,
		eggGroups: ["Field"],
	},
	dewpider: {
		num: 751,
		name: "Dewpider",
		types: ["Water", "Bug"],
		baseStats: { hp: 38, atk: 40, def: 52, spa: 40, spd: 72, spe: 27 },
		abilities: { 0: "Water Bubble", H: "Water Absorb" },
		heightm: 0.3,
		weightkg: 4,
		color: "Green",
		evos: ["Araquanid"],
		eggGroups: ["Water 1", "Bug"],
	},
	araquanid: {
		num: 752,
		name: "Araquanid",
		types: ["Water", "Bug"],
		baseStats: { hp: 68, atk: 70, def: 92, spa: 50, spd: 132, spe: 42 },
		abilities: { 0: "Water Bubble", H: "Water Absorb" },
		heightm: 1.8,
		weightkg: 82,
		color: "Green",
		prevo: "Dewpider",
		evoLevel: 22,
		eggGroups: ["Water 1", "Bug"],
		otherFormes: ["Araquanid-Totem"],
		formeOrder: ["Araquanid", "Araquanid-Totem"],
	},
	araquanidtotem: {
		num: 752,
		name: "Araquanid-Totem",
		baseSpecies: "Araquanid",
		forme: "Totem",
		types: ["Water", "Bug"],
		baseStats: { hp: 68, atk: 70, def: 92, spa: 50, spd: 132, spe: 42 },
		abilities: { 0: "Water Bubble" },
		heightm: 3.1,
		weightkg: 217.5,
		color: "Green",
		eggGroups: ["Water 1", "Bug"],
	},
	fomantis: {
		num: 753,
		name: "Fomantis",
		types: ["Grass"],
		baseStats: { hp: 40, atk: 55, def: 35, spa: 50, spd: 35, spe: 35 },
		abilities: { 0: "Leaf Guard", H: "Contrary" },
		heightm: 0.3,
		weightkg: 1.5,
		color: "Pink",
		evos: ["Lurantis"],
		eggGroups: ["Grass"],
	},
	lurantis: {
		num: 754,
		name: "Lurantis",
		types: ["Grass"],
		baseStats: { hp: 70, atk: 105, def: 90, spa: 80, spd: 90, spe: 45 },
		abilities: { 0: "Leaf Guard", H: "Contrary" },
		heightm: 0.9,
		weightkg: 18.5,
		color: "Pink",
		prevo: "Fomantis",
		evoLevel: 34,
		eggGroups: ["Grass"],
		otherFormes: ["Lurantis-Totem"],
		formeOrder: ["Lurantis", "Lurantis-Totem"],
	},
	lurantistotem: {
		num: 754,
		name: "Lurantis-Totem",
		baseSpecies: "Lurantis",
		forme: "Totem",
		types: ["Grass"],
		baseStats: { hp: 70, atk: 105, def: 90, spa: 80, spd: 90, spe: 45 },
		abilities: { 0: "Leaf Guard" },
		heightm: 1.5,
		weightkg: 58,
		color: "Pink",
		eggGroups: ["Grass"],
	},
	morelull: {
		num: 755,
		name: "Morelull",
		types: ["Grass", "Fairy"],
		baseStats: { hp: 40, atk: 35, def: 55, spa: 65, spd: 75, spe: 15 },
		abilities: { 0: "Illuminate", 1: "Effect Spore", H: "Rain Dish" },
		heightm: 0.2,
		weightkg: 1.5,
		color: "Purple",
		evos: ["Shiinotic"],
		eggGroups: ["Grass"],
	},
	shiinotic: {
		num: 756,
		name: "Shiinotic",
		types: ["Grass", "Fairy"],
		baseStats: { hp: 60, atk: 45, def: 80, spa: 90, spd: 100, spe: 30 },
		abilities: { 0: "Illuminate", 1: "Effect Spore", H: "Rain Dish" },
		heightm: 1,
		weightkg: 11.5,
		color: "Purple",
		prevo: "Morelull",
		evoLevel: 24,
		eggGroups: ["Grass"],
	},
	salandit: {
		num: 757,
		name: "Salandit",
		types: ["Poison", "Fire"],
		genderRatio: { M: 0.875, F: 0.125 },
		baseStats: { hp: 48, atk: 44, def: 40, spa: 71, spd: 40, spe: 77 },
		abilities: { 0: "Corrosion", H: "Oblivious" },
		heightm: 0.6,
		weightkg: 4.8,
		color: "Black",
		evos: ["Salazzle"],
		eggGroups: ["Monster", "Dragon"],
	},
	salazzle: {
		num: 758,
		name: "Salazzle",
		types: ["Poison", "Fire"],
		gender: "F",
		baseStats: { hp: 68, atk: 64, def: 60, spa: 111, spd: 60, spe: 117 },
		abilities: { 0: "Corrosion", H: "Oblivious" },
		heightm: 1.2,
		weightkg: 22.2,
		color: "Black",
		prevo: "Salandit",
		evoLevel: 33,
		eggGroups: ["Monster", "Dragon"],
		otherFormes: ["Salazzle-Totem"],
		formeOrder: ["Salazzle", "Salazzle-Totem"],
	},
	salazzletotem: {
		num: 758,
		name: "Salazzle-Totem",
		baseSpecies: "Salazzle",
		forme: "Totem",
		types: ["Poison", "Fire"],
		gender: "F",
		baseStats: { hp: 68, atk: 64, def: 60, spa: 111, spd: 60, spe: 117 },
		abilities: { 0: "Corrosion" },
		heightm: 2.1,
		weightkg: 81,
		color: "Black",
		eggGroups: ["Monster", "Dragon"],
	},
	stufful: {
		num: 759,
		name: "Stufful",
		types: ["Normal", "Fighting"],
		baseStats: { hp: 70, atk: 75, def: 50, spa: 45, spd: 50, spe: 50 },
		abilities: { 0: "Fluffy", 1: "Klutz", H: "Cute Charm" },
		heightm: 0.5,
		weightkg: 6.8,
		color: "Pink",
		evos: ["Bewear"],
		eggGroups: ["Field"],
	},
	bewear: {
		num: 760,
		name: "Bewear",
		types: ["Normal", "Fighting"],
		baseStats: { hp: 120, atk: 125, def: 80, spa: 55, spd: 60, spe: 60 },
		abilities: { 0: "Fluffy", 1: "Klutz", H: "Unnerve" },
		heightm: 2.1,
		weightkg: 135,
		color: "Pink",
		prevo: "Stufful",
		evoLevel: 27,
		eggGroups: ["Field"],
	},
	bounsweet: {
		num: 761,
		name: "Bounsweet",
		types: ["Grass"],
		gender: "F",
		baseStats: { hp: 42, atk: 30, def: 38, spa: 30, spd: 38, spe: 32 },
		abilities: { 0: "Leaf Guard", 1: "Oblivious", H: "Sweet Veil" },
		heightm: 0.3,
		weightkg: 3.2,
		color: "Purple",
		evos: ["Steenee"],
		eggGroups: ["Grass"],
	},
	steenee: {
		num: 762,
		name: "Steenee",
		types: ["Grass"],
		gender: "F",
		baseStats: { hp: 52, atk: 40, def: 48, spa: 40, spd: 48, spe: 62 },
		abilities: { 0: "Leaf Guard", 1: "Oblivious", H: "Sweet Veil" },
		heightm: 0.7,
		weightkg: 8.2,
		color: "Purple",
		prevo: "Bounsweet",
		evoLevel: 18,
		evos: ["Tsareena"],
		eggGroups: ["Grass"],
	},
	tsareena: {
		num: 763,
		name: "Tsareena",
		types: ["Grass"],
		gender: "F",
		baseStats: { hp: 72, atk: 120, def: 98, spa: 50, spd: 98, spe: 72 },
		abilities: { 0: "Leaf Guard", 1: "Queenly Majesty", H: "Sweet Veil" },
		heightm: 1.2,
		weightkg: 21.4,
		color: "Purple",
		prevo: "Steenee",
		evoType: "levelMove",
		evoMove: "Stomp",
		eggGroups: ["Grass"],
	},
	comfey: {
		num: 764,
		name: "Comfey",
		types: ["Fairy"],
		genderRatio: { M: 0.25, F: 0.75 },
		baseStats: { hp: 51, atk: 52, def: 90, spa: 82, spd: 110, spe: 100 },
		abilities: { 0: "Flower Veil", 1: "Triage", H: "Natural Cure" },
		heightm: 0.1,
		weightkg: 0.3,
		color: "Green",
		eggGroups: ["Grass"],
	},
	oranguru: {
		num: 765,
		name: "Oranguru",
		types: ["Normal", "Psychic"],
		baseStats: { hp: 90, atk: 60, def: 80, spa: 90, spd: 110, spe: 60 },
		abilities: { 0: "Inner Focus", 1: "Telepathy", H: "Symbiosis" },
		heightm: 1.5,
		weightkg: 76,
		color: "White",
		eggGroups: ["Field"],
	},
	passimian: {
		num: 766,
		name: "Passimian",
		types: ["Fighting"],
		baseStats: { hp: 100, atk: 120, def: 90, spa: 40, spd: 60, spe: 80 },
		abilities: { 0: "Receiver", H: "Defiant" },
		heightm: 2,
		weightkg: 82.8,
		color: "White",
		eggGroups: ["Field"],
	},
	wimpod: {
		num: 767,
		name: "Wimpod",
		types: ["Bug", "Water"],
		baseStats: { hp: 25, atk: 35, def: 40, spa: 20, spd: 30, spe: 80 },
		abilities: { 0: "Wimp Out" },
		heightm: 0.5,
		weightkg: 12,
		color: "Gray",
		evos: ["Golisopod"],
		eggGroups: ["Bug", "Water 3"],
	},
	golisopod: {
		num: 768,
		name: "Golisopod",
		types: ["Bug", "Water"],
		baseStats: { hp: 75, atk: 125, def: 140, spa: 60, spd: 90, spe: 40 },
		abilities: { 0: "Emergency Exit" },
		heightm: 2,
		weightkg: 108,
		color: "Gray",
		prevo: "Wimpod",
		evoLevel: 30,
		eggGroups: ["Bug", "Water 3"],
	},
	sandygast: {
		num: 769,
		name: "Sandygast",
		types: ["Ghost", "Ground"],
		baseStats: { hp: 55, atk: 55, def: 80, spa: 70, spd: 45, spe: 15 },
		abilities: { 0: "Water Compaction", H: "Sand Veil" },
		heightm: 0.5,
		weightkg: 70,
		color: "Brown",
		evos: ["Palossand"],
		eggGroups: ["Amorphous"],
	},
	palossand: {
		num: 770,
		name: "Palossand",
		types: ["Ghost", "Ground"],
		baseStats: { hp: 85, atk: 75, def: 110, spa: 100, spd: 75, spe: 35 },
		abilities: { 0: "Water Compaction", H: "Sand Veil" },
		heightm: 1.3,
		weightkg: 250,
		color: "Brown",
		prevo: "Sandygast",
		evoLevel: 42,
		eggGroups: ["Amorphous"],
	},
	pyukumuku: {
		num: 771,
		name: "Pyukumuku",
		types: ["Water"],
		baseStats: { hp: 55, atk: 60, def: 130, spa: 30, spd: 130, spe: 5 },
		abilities: { 0: "Innards Out", H: "Unaware" },
		heightm: 0.3,
		weightkg: 1.2,
		color: "Black",
		eggGroups: ["Water 1"],
	},
	typenull: {
		num: 772,
		name: "Type: Null",
		types: ["Normal"],
		gender: "N",
		baseStats: { hp: 95, atk: 95, def: 95, spa: 95, spd: 95, spe: 59 },
		abilities: { 0: "Battle Armor" },
		heightm: 1.9,
		weightkg: 120.5,
		color: "Gray",
		evos: ["Silvally"],
		eggGroups: ["Undiscovered"],
	},
	silvally: {
		num: 773,
		name: "Silvally",
		types: ["Normal"],
		gender: "N",
		baseStats: { hp: 95, atk: 95, def: 95, spa: 95, spd: 95, spe: 95 },
		abilities: { 0: "RKS System" },
		heightm: 2.3,
		weightkg: 100.5,
		color: "Gray",
		prevo: "Type: Null",
		evoType: "levelFriendship",
		eggGroups: ["Undiscovered"],
		otherFormes: ["Silvally-Bug", "Silvally-Dark", "Silvally-Dragon", "Silvally-Electric", "Silvally-Fairy", "Silvally-Fighting", "Silvally-Fire", "Silvally-Flying", "Silvally-Ghost", "Silvally-Grass", "Silvally-Ground", "Silvally-Ice", "Silvally-Poison", "Silvally-Psychic", "Silvally-Rock", "Silvally-Steel", "Silvally-Water"],
		formeOrder: [
			"Silvally", "Silvally-Fighting", "Silvally-Flying", "Silvally-Poison", "Silvally-Ground", "Silvally-Rock", "Silvally-Bug", "Silvally-Ghost", "Silvally-Steel",
			"Silvally-Fire", "Silvally-Water", "Silvally-Grass", "Silvally-Electric", "Silvally-Psychic", "Silvally-Ice", "Silvally-Dragon", "Silvally-Dark", "Silvally-Fairy",
		],
	},
	silvallybug: {
		num: 773,
		name: "Silvally-Bug",
		baseSpecies: "Silvally",
		forme: "Bug",
		types: ["Bug"],
		gender: "N",
		baseStats: { hp: 95, atk: 95, def: 95, spa: 95, spd: 95, spe: 95 },
		abilities: { 0: "RKS System" },
		heightm: 2.3,
		weightkg: 100.5,
		color: "Gray",
		eggGroups: ["Undiscovered"],
		requiredItem: "Bug Memory",
		changesFrom: "Silvally",
	},
	silvallydark: {
		num: 773,
		name: "Silvally-Dark",
		baseSpecies: "Silvally",
		forme: "Dark",
		types: ["Dark"],
		gender: "N",
		baseStats: { hp: 95, atk: 95, def: 95, spa: 95, spd: 95, spe: 95 },
		abilities: { 0: "RKS System" },
		heightm: 2.3,
		weightkg: 100.5,
		color: "Gray",
		eggGroups: ["Undiscovered"],
		requiredItem: "Dark Memory",
		changesFrom: "Silvally",
	},
	silvallydragon: {
		num: 773,
		name: "Silvally-Dragon",
		baseSpecies: "Silvally",
		forme: "Dragon",
		types: ["Dragon"],
		gender: "N",
		baseStats: { hp: 95, atk: 95, def: 95, spa: 95, spd: 95, spe: 95 },
		abilities: { 0: "RKS System" },
		heightm: 2.3,
		weightkg: 100.5,
		color: "Gray",
		eggGroups: ["Undiscovered"],
		requiredItem: "Dragon Memory",
		changesFrom: "Silvally",
	},
	silvallyelectric: {
		num: 773,
		name: "Silvally-Electric",
		baseSpecies: "Silvally",
		forme: "Electric",
		types: ["Electric"],
		gender: "N",
		baseStats: { hp: 95, atk: 95, def: 95, spa: 95, spd: 95, spe: 95 },
		abilities: { 0: "RKS System" },
		heightm: 2.3,
		weightkg: 100.5,
		color: "Gray",
		eggGroups: ["Undiscovered"],
		requiredItem: "Electric Memory",
		changesFrom: "Silvally",
	},
	silvallyfairy: {
		num: 773,
		name: "Silvally-Fairy",
		baseSpecies: "Silvally",
		forme: "Fairy",
		types: ["Fairy"],
		gender: "N",
		baseStats: { hp: 95, atk: 95, def: 95, spa: 95, spd: 95, spe: 95 },
		abilities: { 0: "RKS System" },
		heightm: 2.3,
		weightkg: 100.5,
		color: "Gray",
		eggGroups: ["Undiscovered"],
		requiredItem: "Fairy Memory",
		changesFrom: "Silvally",
	},
	silvallyfighting: {
		num: 773,
		name: "Silvally-Fighting",
		baseSpecies: "Silvally",
		forme: "Fighting",
		types: ["Fighting"],
		gender: "N",
		baseStats: { hp: 95, atk: 95, def: 95, spa: 95, spd: 95, spe: 95 },
		abilities: { 0: "RKS System" },
		heightm: 2.3,
		weightkg: 100.5,
		color: "Gray",
		eggGroups: ["Undiscovered"],
		requiredItem: "Fighting Memory",
		changesFrom: "Silvally",
	},
	silvallyfire: {
		num: 773,
		name: "Silvally-Fire",
		baseSpecies: "Silvally",
		forme: "Fire",
		types: ["Fire"],
		gender: "N",
		baseStats: { hp: 95, atk: 95, def: 95, spa: 95, spd: 95, spe: 95 },
		abilities: { 0: "RKS System" },
		heightm: 2.3,
		weightkg: 100.5,
		color: "Gray",
		eggGroups: ["Undiscovered"],
		requiredItem: "Fire Memory",
		changesFrom: "Silvally",
	},
	silvallyflying: {
		num: 773,
		name: "Silvally-Flying",
		baseSpecies: "Silvally",
		forme: "Flying",
		types: ["Flying"],
		gender: "N",
		baseStats: { hp: 95, atk: 95, def: 95, spa: 95, spd: 95, spe: 95 },
		abilities: { 0: "RKS System" },
		heightm: 2.3,
		weightkg: 100.5,
		color: "Gray",
		eggGroups: ["Undiscovered"],
		requiredItem: "Flying Memory",
		changesFrom: "Silvally",
	},
	silvallyghost: {
		num: 773,
		name: "Silvally-Ghost",
		baseSpecies: "Silvally",
		forme: "Ghost",
		types: ["Ghost"],
		gender: "N",
		baseStats: { hp: 95, atk: 95, def: 95, spa: 95, spd: 95, spe: 95 },
		abilities: { 0: "RKS System" },
		heightm: 2.3,
		weightkg: 100.5,
		color: "Gray",
		eggGroups: ["Undiscovered"],
		requiredItem: "Ghost Memory",
		changesFrom: "Silvally",
	},
	silvallygrass: {
		num: 773,
		name: "Silvally-Grass",
		baseSpecies: "Silvally",
		forme: "Grass",
		types: ["Grass"],
		gender: "N",
		baseStats: { hp: 95, atk: 95, def: 95, spa: 95, spd: 95, spe: 95 },
		abilities: { 0: "RKS System" },
		heightm: 2.3,
		weightkg: 100.5,
		color: "Gray",
		eggGroups: ["Undiscovered"],
		requiredItem: "Grass Memory",
		changesFrom: "Silvally",
	},
	silvallyground: {
		num: 773,
		name: "Silvally-Ground",
		baseSpecies: "Silvally",
		forme: "Ground",
		types: ["Ground"],
		gender: "N",
		baseStats: { hp: 95, atk: 95, def: 95, spa: 95, spd: 95, spe: 95 },
		abilities: { 0: "RKS System" },
		heightm: 2.3,
		weightkg: 100.5,
		color: "Gray",
		eggGroups: ["Undiscovered"],
		requiredItem: "Ground Memory",
		changesFrom: "Silvally",
	},
	silvallyice: {
		num: 773,
		name: "Silvally-Ice",
		baseSpecies: "Silvally",
		forme: "Ice",
		types: ["Ice"],
		gender: "N",
		baseStats: { hp: 95, atk: 95, def: 95, spa: 95, spd: 95, spe: 95 },
		abilities: { 0: "RKS System" },
		heightm: 2.3,
		weightkg: 100.5,
		color: "Gray",
		eggGroups: ["Undiscovered"],
		requiredItem: "Ice Memory",
		changesFrom: "Silvally",
	},
	silvallypoison: {
		num: 773,
		name: "Silvally-Poison",
		baseSpecies: "Silvally",
		forme: "Poison",
		types: ["Poison"],
		gender: "N",
		baseStats: { hp: 95, atk: 95, def: 95, spa: 95, spd: 95, spe: 95 },
		abilities: { 0: "RKS System" },
		heightm: 2.3,
		weightkg: 100.5,
		color: "Gray",
		eggGroups: ["Undiscovered"],
		requiredItem: "Poison Memory",
		changesFrom: "Silvally",
	},
	silvallypsychic: {
		num: 773,
		name: "Silvally-Psychic",
		baseSpecies: "Silvally",
		forme: "Psychic",
		types: ["Psychic"],
		gender: "N",
		baseStats: { hp: 95, atk: 95, def: 95, spa: 95, spd: 95, spe: 95 },
		abilities: { 0: "RKS System" },
		heightm: 2.3,
		weightkg: 100.5,
		color: "Gray",
		eggGroups: ["Undiscovered"],
		requiredItem: "Psychic Memory",
		changesFrom: "Silvally",
	},
	silvallyrock: {
		num: 773,
		name: "Silvally-Rock",
		baseSpecies: "Silvally",
		forme: "Rock",
		types: ["Rock"],
		gender: "N",
		baseStats: { hp: 95, atk: 95, def: 95, spa: 95, spd: 95, spe: 95 },
		abilities: { 0: "RKS System" },
		heightm: 2.3,
		weightkg: 100.5,
		color: "Gray",
		eggGroups: ["Undiscovered"],
		requiredItem: "Rock Memory",
		changesFrom: "Silvally",
	},
	silvallysteel: {
		num: 773,
		name: "Silvally-Steel",
		baseSpecies: "Silvally",
		forme: "Steel",
		types: ["Steel"],
		gender: "N",
		baseStats: { hp: 95, atk: 95, def: 95, spa: 95, spd: 95, spe: 95 },
		abilities: { 0: "RKS System" },
		heightm: 2.3,
		weightkg: 100.5,
		color: "Gray",
		eggGroups: ["Undiscovered"],
		requiredItem: "Steel Memory",
		changesFrom: "Silvally",
	},
	silvallywater: {
		num: 773,
		name: "Silvally-Water",
		baseSpecies: "Silvally",
		forme: "Water",
		types: ["Water"],
		gender: "N",
		baseStats: { hp: 95, atk: 95, def: 95, spa: 95, spd: 95, spe: 95 },
		abilities: { 0: "RKS System" },
		heightm: 2.3,
		weightkg: 100.5,
		color: "Gray",
		eggGroups: ["Undiscovered"],
		requiredItem: "Water Memory",
		changesFrom: "Silvally",
	},
	minior: {
		num: 774,
		name: "Minior",
		baseForme: "Red",
		types: ["Rock", "Flying"],
		gender: "N",
		baseStats: { hp: 60, atk: 100, def: 60, spa: 100, spd: 60, spe: 120 },
		abilities: { 0: "Shields Down" },
		heightm: 0.3,
		weightkg: 0.3,
		color: "Red",
		eggGroups: ["Mineral"],
		otherFormes: ["Minior-Meteor"],
		cosmeticFormes: ["Minior-Orange", "Minior-Yellow", "Minior-Green", "Minior-Blue", "Minior-Indigo", "Minior-Violet"],
		formeOrder: [
			// All of the colored Minior Meteor formes (unsupported by PS) are numbers 0-6
			"Minior-Meteor", "Minior-Meteor", "Minior-Meteor", "Minior-Meteor", "Minior-Meteor", "Minior-Meteor", "Minior-Meteor",
			"Minior", "Minior-Orange", "Minior-Yellow", "Minior-Green", "Minior-Blue", "Minior-Indigo", "Minior-Violet",
		],
	},
	miniormeteor: {
		num: 774,
		name: "Minior-Meteor",
		baseSpecies: "Minior",
		forme: "Meteor",
		types: ["Rock", "Flying"],
		gender: "N",
		baseStats: { hp: 60, atk: 60, def: 100, spa: 60, spd: 100, spe: 60 },
		abilities: { 0: "Shields Down" },
		heightm: 0.3,
		weightkg: 40,
		color: "Brown",
		eggGroups: ["Mineral"],
		requiredAbility: "Shields Down",
		battleOnly: "Minior",
	},
	komala: {
		num: 775,
		name: "Komala",
		types: ["Normal"],
		baseStats: { hp: 65, atk: 115, def: 65, spa: 75, spd: 95, spe: 65 },
		abilities: { 0: "Comatose" },
		heightm: 0.4,
		weightkg: 19.9,
		color: "Blue",
		eggGroups: ["Field"],
	},
	turtonator: {
		num: 776,
		name: "Turtonator",
		types: ["Fire", "Dragon"],
		baseStats: { hp: 60, atk: 78, def: 135, spa: 91, spd: 85, spe: 36 },
		abilities: { 0: "Shell Armor" },
		heightm: 2,
		weightkg: 212,
		color: "Red",
		eggGroups: ["Monster", "Dragon"],
	},
	togedemaru: {
		num: 777,
		name: "Togedemaru",
		types: ["Electric", "Steel"],
		baseStats: { hp: 65, atk: 98, def: 63, spa: 40, spd: 73, spe: 96 },
		abilities: { 0: "Iron Barbs", 1: "Lightning Rod", H: "Sturdy" },
		heightm: 0.3,
		weightkg: 3.3,
		color: "Gray",
		eggGroups: ["Field", "Fairy"],
		otherFormes: ["Togedemaru-Totem"],
		formeOrder: ["Togedemaru", "Togedemaru-Totem"],
	},
	togedemarutotem: {
		num: 777,
		name: "Togedemaru-Totem",
		baseSpecies: "Togedemaru",
		forme: "Totem",
		types: ["Electric", "Steel"],
		baseStats: { hp: 65, atk: 98, def: 63, spa: 40, spd: 73, spe: 96 },
		abilities: { 0: "Sturdy" },
		heightm: 0.6,
		weightkg: 13,
		color: "Gray",
		eggGroups: ["Field", "Fairy"],
	},
	mimikyu: {
		num: 778,
		name: "Mimikyu",
		baseForme: "Disguised",
		types: ["Ghost", "Fairy"],
		baseStats: { hp: 55, atk: 90, def: 80, spa: 50, spd: 105, spe: 96 },
		abilities: { 0: "Disguise" },
		heightm: 0.2,
		weightkg: 0.7,
		color: "Yellow",
		eggGroups: ["Amorphous"],
		otherFormes: ["Mimikyu-Busted", "Mimikyu-Totem", "Mimikyu-Busted-Totem"],
		formeOrder: ["Mimikyu", "Mimikyu-Busted", "Mimikyu-Totem", "Mimikyu-Busted-Totem"],
	},
	mimikyubusted: {
		num: 778,
		name: "Mimikyu-Busted",
		baseSpecies: "Mimikyu",
		forme: "Busted",
		types: ["Ghost", "Fairy"],
		baseStats: { hp: 55, atk: 90, def: 80, spa: 50, spd: 105, spe: 96 },
		abilities: { 0: "Disguise" },
		heightm: 0.2,
		weightkg: 0.7,
		color: "Yellow",
		eggGroups: ["Amorphous"],
		requiredAbility: "Disguise",
		battleOnly: "Mimikyu",
	},
	mimikyutotem: {
		num: 778,
		name: "Mimikyu-Totem",
		baseSpecies: "Mimikyu",
		forme: "Totem",
		types: ["Ghost", "Fairy"],
		baseStats: { hp: 55, atk: 90, def: 80, spa: 50, spd: 105, spe: 96 },
		abilities: { 0: "Disguise" },
		heightm: 0.4,
		weightkg: 2.8,
		color: "Yellow",
		eggGroups: ["Amorphous"],
	},
	mimikyubustedtotem: {
		num: 778,
		name: "Mimikyu-Busted-Totem",
		baseSpecies: "Mimikyu",
		forme: "Busted-Totem",
		types: ["Ghost", "Fairy"],
		baseStats: { hp: 55, atk: 90, def: 80, spa: 50, spd: 105, spe: 96 },
		abilities: { 0: "Disguise" },
		heightm: 0.4,
		weightkg: 2.8,
		color: "Yellow",
		eggGroups: ["Amorphous"],
		requiredAbility: "Disguise",
		battleOnly: "Mimikyu-Totem",
	},
	bruxish: {
		num: 779,
		name: "Bruxish",
		types: ["Water", "Psychic"],
		baseStats: { hp: 68, atk: 105, def: 70, spa: 70, spd: 70, spe: 92 },
		abilities: { 0: "Dazzling", 1: "Strong Jaw", H: "Wonder Skin" },
		heightm: 0.9,
		weightkg: 19,
		color: "Pink",
		eggGroups: ["Water 2"],
	},
	drampa: {
		num: 780,
		name: "Drampa",
		types: ["Normal", "Dragon"],
		baseStats: { hp: 78, atk: 60, def: 85, spa: 135, spd: 91, spe: 36 },
		abilities: { 0: "Berserk", 1: "Sap Sipper", H: "Cloud Nine" },
		heightm: 3,
		weightkg: 185,
		color: "White",
		eggGroups: ["Monster", "Dragon"],
	},
	dhelmise: {
		num: 781,
		name: "Dhelmise",
		types: ["Ghost", "Grass"],
		gender: "N",
		baseStats: { hp: 70, atk: 131, def: 100, spa: 86, spd: 90, spe: 40 },
		abilities: { 0: "Steelworker" },
		heightm: 3.9,
		weightkg: 210,
		color: "Green",
		eggGroups: ["Mineral"],
	},
	jangmoo: {
		num: 782,
		name: "Jangmo-o",
		types: ["Dragon"],
		baseStats: { hp: 45, atk: 55, def: 65, spa: 45, spd: 45, spe: 45 },
		abilities: { 0: "Bulletproof", 1: "Soundproof", H: "Overcoat" },
		heightm: 0.6,
		weightkg: 29.7,
		color: "Gray",
		evos: ["Hakamo-o"],
		eggGroups: ["Dragon"],
	},
	hakamoo: {
		num: 783,
		name: "Hakamo-o",
		types: ["Dragon", "Fighting"],
		baseStats: { hp: 55, atk: 75, def: 90, spa: 65, spd: 70, spe: 65 },
		abilities: { 0: "Bulletproof", 1: "Soundproof", H: "Overcoat" },
		heightm: 1.2,
		weightkg: 47,
		color: "Gray",
		prevo: "Jangmo-o",
		evoLevel: 35,
		evos: ["Kommo-o"],
		eggGroups: ["Dragon"],
	},
	kommoo: {
		num: 784,
		name: "Kommo-o",
		types: ["Dragon", "Fighting"],
		baseStats: { hp: 75, atk: 110, def: 125, spa: 100, spd: 105, spe: 85 },
		abilities: { 0: "Bulletproof", 1: "Soundproof", H: "Overcoat" },
		heightm: 1.6,
		weightkg: 78.2,
		color: "Gray",
		prevo: "Hakamo-o",
		evoLevel: 45,
		eggGroups: ["Dragon"],
		otherFormes: ["Kommo-o-Totem"],
		formeOrder: ["Kommo-o", "Kommo-o-Totem"],
	},
	kommoototem: {
		num: 784,
		name: "Kommo-o-Totem",
		baseSpecies: "Kommo-o",
		forme: "Totem",
		types: ["Dragon", "Fighting"],
		baseStats: { hp: 75, atk: 110, def: 125, spa: 100, spd: 105, spe: 85 },
		abilities: { 0: "Overcoat" },
		heightm: 2.4,
		weightkg: 207.5,
		color: "Gray",
		eggGroups: ["Dragon"],
	},
	tapukoko: {
		num: 785,
		name: "Tapu Koko",
		types: ["Electric", "Fairy"],
		gender: "N",
		baseStats: { hp: 70, atk: 115, def: 85, spa: 95, spd: 75, spe: 130 },
		abilities: { 0: "Electric Surge", H: "Telepathy" },
		heightm: 1.8,
		weightkg: 20.5,
		color: "Yellow",
		eggGroups: ["Undiscovered"],
	},
	tapulele: {
		num: 786,
		name: "Tapu Lele",
		types: ["Psychic", "Fairy"],
		gender: "N",
		baseStats: { hp: 70, atk: 85, def: 75, spa: 130, spd: 115, spe: 95 },
		abilities: { 0: "Psychic Surge", H: "Telepathy" },
		heightm: 1.2,
		weightkg: 18.6,
		color: "Pink",
		eggGroups: ["Undiscovered"],
	},
	tapubulu: {
		num: 787,
		name: "Tapu Bulu",
		types: ["Grass", "Fairy"],
		gender: "N",
		baseStats: { hp: 70, atk: 130, def: 115, spa: 85, spd: 95, spe: 75 },
		abilities: { 0: "Grassy Surge", H: "Telepathy" },
		heightm: 1.9,
		weightkg: 45.5,
		color: "Red",
		eggGroups: ["Undiscovered"],
	},
	tapufini: {
		num: 788,
		name: "Tapu Fini",
		types: ["Water", "Fairy"],
		gender: "N",
		baseStats: { hp: 70, atk: 75, def: 115, spa: 95, spd: 130, spe: 85 },
		abilities: { 0: "Misty Surge", H: "Telepathy" },
		heightm: 1.3,
		weightkg: 21.2,
		color: "Purple",
		eggGroups: ["Undiscovered"],
	},
	cosmog: {
		num: 789,
		name: "Cosmog",
		types: ["Psychic"],
		gender: "N",
		baseStats: { hp: 43, atk: 29, def: 31, spa: 29, spd: 31, spe: 37 },
		abilities: { 0: "Unaware" },
		heightm: 0.2,
		weightkg: 0.1,
		color: "Blue",
		evos: ["Cosmoem"],
		eggGroups: ["Undiscovered"],
	},
	cosmoem: {
		num: 790,
		name: "Cosmoem",
		types: ["Psychic"],
		gender: "N",
		baseStats: { hp: 43, atk: 29, def: 131, spa: 29, spd: 131, spe: 37 },
		abilities: { 0: "Sturdy" },
		heightm: 0.1,
		weightkg: 999.9,
		color: "Blue",
		prevo: "Cosmog",
		evoLevel: 43,
		evos: ["Solgaleo", "Lunala"],
		eggGroups: ["Undiscovered"],
	},
	solgaleo: {
		num: 791,
		name: "Solgaleo",
		types: ["Psychic", "Steel"],
		gender: "N",
		baseStats: { hp: 137, atk: 137, def: 107, spa: 113, spd: 89, spe: 97 },
		abilities: { 0: "Full Metal Body" },
		heightm: 3.4,
		weightkg: 230,
		color: "White",
		prevo: "Cosmoem",
		evoLevel: 53,
		eggGroups: ["Undiscovered"],
	},
	lunala: {
		num: 792,
		name: "Lunala",
		types: ["Psychic", "Ghost"],
		gender: "N",
		baseStats: { hp: 137, atk: 113, def: 89, spa: 137, spd: 107, spe: 97 },
		abilities: { 0: "Shadow Shield" },
		heightm: 4,
		weightkg: 120,
		color: "Purple",
		prevo: "Cosmoem",
		evoLevel: 53,
		eggGroups: ["Undiscovered"],
	},
	nihilego: {
		num: 793,
		name: "Nihilego",
		types: ["Rock", "Poison"],
		gender: "N",
		baseStats: { hp: 109, atk: 53, def: 47, spa: 127, spd: 131, spe: 103 },
		abilities: { 0: "Beast Boost" },
		heightm: 1.2,
		weightkg: 55.5,
		color: "White",
		eggGroups: ["Undiscovered"],
	},
	buzzwole: {
		num: 794,
		name: "Buzzwole",
		types: ["Bug", "Fighting"],
		gender: "N",
		baseStats: { hp: 107, atk: 139, def: 139, spa: 53, spd: 53, spe: 79 },
		abilities: { 0: "Beast Boost" },
		heightm: 2.4,
		weightkg: 333.6,
		color: "Red",
		eggGroups: ["Undiscovered"],
	},
	pheromosa: {
		num: 795,
		name: "Pheromosa",
		types: ["Bug", "Fighting"],
		gender: "N",
		baseStats: { hp: 71, atk: 137, def: 37, spa: 137, spd: 37, spe: 151 },
		abilities: { 0: "Beast Boost" },
		heightm: 1.8,
		weightkg: 25,
		color: "White",
		eggGroups: ["Undiscovered"],
	},
	xurkitree: {
		num: 796,
		name: "Xurkitree",
		types: ["Electric"],
		gender: "N",
		baseStats: { hp: 83, atk: 89, def: 71, spa: 173, spd: 71, spe: 83 },
		abilities: { 0: "Beast Boost" },
		heightm: 3.8,
		weightkg: 100,
		color: "Black",
		eggGroups: ["Undiscovered"],
	},
	celesteela: {
		num: 797,
		name: "Celesteela",
		types: ["Steel", "Flying"],
		gender: "N",
		baseStats: { hp: 97, atk: 101, def: 103, spa: 107, spd: 101, spe: 61 },
		abilities: { 0: "Beast Boost" },
		heightm: 9.2,
		weightkg: 999.9,
		color: "Green",
		eggGroups: ["Undiscovered"],
	},
	kartana: {
		num: 798,
		name: "Kartana",
		types: ["Grass", "Steel"],
		gender: "N",
		baseStats: { hp: 59, atk: 181, def: 131, spa: 59, spd: 31, spe: 109 },
		abilities: { 0: "Beast Boost" },
		heightm: 0.3,
		weightkg: 0.1,
		color: "White",
		eggGroups: ["Undiscovered"],
	},
	guzzlord: {
		num: 799,
		name: "Guzzlord",
		types: ["Dark", "Dragon"],
		gender: "N",
		baseStats: { hp: 223, atk: 101, def: 53, spa: 97, spd: 53, spe: 43 },
		abilities: { 0: "Beast Boost" },
		heightm: 5.5,
		weightkg: 888,
		color: "Black",
		eggGroups: ["Undiscovered"],
	},
	necrozma: {
		num: 800,
		name: "Necrozma",
		types: ["Psychic"],
		gender: "N",
		baseStats: { hp: 97, atk: 107, def: 101, spa: 127, spd: 89, spe: 79 },
		abilities: { 0: "Prism Armor" },
		heightm: 2.4,
		weightkg: 230,
		color: "Black",
		eggGroups: ["Undiscovered"],
		otherFormes: ["Necrozma-Dusk-Mane", "Necrozma-Dawn-Wings", "Necrozma-Ultra"],
		formeOrder: ["Necrozma", "Necrozma-Dusk-Mane", "Necrozma-Dawn-Wings", "Necrozma-Ultra"],
	},
	necrozmaduskmane: {
		num: 800,
		name: "Necrozma-Dusk-Mane",
		baseSpecies: "Necrozma",
		forme: "Dusk-Mane",
		types: ["Psychic", "Steel"],
		gender: "N",
		baseStats: { hp: 97, atk: 157, def: 127, spa: 113, spd: 109, spe: 77 },
		abilities: { 0: "Prism Armor" },
		heightm: 3.8,
		weightkg: 460,
		color: "Yellow",
		eggGroups: ["Undiscovered"],
		changesFrom: "Necrozma",
	},
	necrozmadawnwings: {
		num: 800,
		name: "Necrozma-Dawn-Wings",
		baseSpecies: "Necrozma",
		forme: "Dawn-Wings",
		types: ["Psychic", "Ghost"],
		gender: "N",
		baseStats: { hp: 97, atk: 113, def: 109, spa: 157, spd: 127, spe: 77 },
		abilities: { 0: "Prism Armor" },
		heightm: 4.2,
		weightkg: 350,
		color: "Blue",
		eggGroups: ["Undiscovered"],
		changesFrom: "Necrozma",
	},
	necrozmaultra: {
		num: 800,
		name: "Necrozma-Ultra",
		baseSpecies: "Necrozma",
		forme: "Ultra",
		types: ["Psychic", "Dragon"],
		gender: "N",
		baseStats: { hp: 97, atk: 167, def: 97, spa: 167, spd: 97, spe: 129 },
		abilities: { 0: "Neuroforce" },
		heightm: 7.5,
		weightkg: 230,
		color: "Yellow",
		eggGroups: ["Undiscovered"],
		requiredItem: "Ultranecrozium Z",
		battleOnly: ["Necrozma-Dawn-Wings", "Necrozma-Dusk-Mane"],
	},
	magearna: {
		num: 801,
		name: "Magearna",
		types: ["Steel", "Fairy"],
		gender: "N",
		baseStats: { hp: 80, atk: 95, def: 115, spa: 130, spd: 115, spe: 65 },
		abilities: { 0: "Soul-Heart" },
		heightm: 1,
		weightkg: 80.5,
		color: "Gray",
		eggGroups: ["Undiscovered"],
		otherFormes: ["Magearna-Original"],
		formeOrder: ["Magearna", "Magearna-Original"],
	},
	magearnaoriginal: {
		num: 801,
		name: "Magearna-Original",
		baseSpecies: "Magearna",
		forme: "Original",
		types: ["Steel", "Fairy"],
		gender: "N",
		baseStats: { hp: 80, atk: 95, def: 115, spa: 130, spd: 115, spe: 65 },
		abilities: { 0: "Soul-Heart" },
		heightm: 1,
		weightkg: 80.5,
		color: "Red",
		eggGroups: ["Undiscovered"],
	},
	marshadow: {
		num: 802,
		name: "Marshadow",
		types: ["Fighting", "Ghost"],
		gender: "N",
		baseStats: { hp: 90, atk: 125, def: 80, spa: 90, spd: 90, spe: 125 },
		abilities: { 0: "Technician" },
		heightm: 0.7,
		weightkg: 22.2,
		color: "Gray",
		eggGroups: ["Undiscovered"],
	},
	poipole: {
		num: 803,
		name: "Poipole",
		types: ["Poison"],
		gender: "N",
		baseStats: { hp: 67, atk: 73, def: 67, spa: 73, spd: 67, spe: 73 },
		abilities: { 0: "Beast Boost" },
		heightm: 0.6,
		weightkg: 1.8,
		color: "Purple",
		evos: ["Naganadel"],
		eggGroups: ["Undiscovered"],
	},
	naganadel: {
		num: 804,
		name: "Naganadel",
		types: ["Poison", "Dragon"],
		gender: "N",
		baseStats: { hp: 73, atk: 73, def: 73, spa: 127, spd: 73, spe: 121 },
		abilities: { 0: "Beast Boost" },
		heightm: 3.6,
		weightkg: 150,
		color: "Purple",
		prevo: "Poipole",
		evoType: "levelMove",
		evoMove: "Dragon Pulse",
		eggGroups: ["Undiscovered"],
	},
	stakataka: {
		num: 805,
		name: "Stakataka",
		types: ["Rock", "Steel"],
		gender: "N",
		baseStats: { hp: 61, atk: 131, def: 211, spa: 53, spd: 101, spe: 13 },
		abilities: { 0: "Beast Boost" },
		heightm: 5.5,
		weightkg: 820,
		color: "Gray",
		eggGroups: ["Undiscovered"],
	},
	blacephalon: {
		num: 806,
		name: "Blacephalon",
		types: ["Fire", "Ghost"],
		gender: "N",
		baseStats: { hp: 53, atk: 127, def: 53, spa: 151, spd: 79, spe: 107 },
		abilities: { 0: "Beast Boost" },
		heightm: 1.8,
		weightkg: 13,
		color: "White",
		eggGroups: ["Undiscovered"],
	},
	zeraora: {
		num: 807,
		name: "Zeraora",
		types: ["Electric"],
		gender: "N",
		baseStats: { hp: 88, atk: 112, def: 75, spa: 102, spd: 80, spe: 143 },
		abilities: { 0: "Volt Absorb" },
		heightm: 1.5,
		weightkg: 44.5,
		color: "Yellow",
		eggGroups: ["Undiscovered"],
	},
	meltan: {
		num: 808,
		name: "Meltan",
		types: ["Steel"],
		gender: "N",
		baseStats: { hp: 46, atk: 65, def: 65, spa: 55, spd: 35, spe: 34 },
		abilities: { 0: "Magnet Pull" },
		heightm: 0.2,
		weightkg: 8,
		color: "Gray",
		eggGroups: ["Undiscovered"],
	},
	melmetal: {
		num: 809,
		name: "Melmetal",
		types: ["Steel"],
		gender: "N",
		baseStats: { hp: 135, atk: 143, def: 143, spa: 80, spd: 65, spe: 34 },
		abilities: { 0: "Iron Fist" },
		heightm: 2.5,
		weightkg: 800,
		color: "Gray",
		eggGroups: ["Undiscovered"],
		canGigantamax: "G-Max Meltdown",
	},
	melmetalgmax: {
		num: 809,
		name: "Melmetal-Gmax",
		baseSpecies: "Melmetal",
		forme: "Gmax",
		types: ["Steel"],
		gender: "N",
		baseStats: { hp: 135, atk: 143, def: 143, spa: 80, spd: 65, spe: 34 },
		abilities: { 0: "Iron Fist" },
		heightm: 25,
		weightkg: 0,
		color: "Gray",
		eggGroups: ["Undiscovered"],
		changesFrom: "Melmetal",
	},
	grookey: {
		num: 810,
		name: "Grookey",
		types: ["Grass"],
		genderRatio: { M: 0.875, F: 0.125 },
		baseStats: { hp: 50, atk: 65, def: 50, spa: 40, spd: 40, spe: 65 },
		abilities: { 0: "Overgrow", H: "Grassy Surge" },
		heightm: 0.3,
		weightkg: 5,
		color: "Green",
		evos: ["Thwackey"],
		eggGroups: ["Field", "Grass"],
	},
	thwackey: {
		num: 811,
		name: "Thwackey",
		types: ["Grass"],
		genderRatio: { M: 0.875, F: 0.125 },
		baseStats: { hp: 70, atk: 85, def: 70, spa: 55, spd: 60, spe: 80 },
		abilities: { 0: "Overgrow", H: "Grassy Surge" },
		heightm: 0.7,
		weightkg: 14,
		color: "Green",
		prevo: "Grookey",
		evoLevel: 16,
		evos: ["Rillaboom"],
		eggGroups: ["Field", "Grass"],
	},
	rillaboom: {
		num: 812,
		name: "Rillaboom",
		types: ["Grass"],
		genderRatio: { M: 0.875, F: 0.125 },
		baseStats: { hp: 100, atk: 125, def: 90, spa: 60, spd: 70, spe: 85 },
		abilities: { 0: "Overgrow", H: "Grassy Surge" },
		heightm: 2.1,
		weightkg: 90,
		color: "Green",
		prevo: "Thwackey",
		evoLevel: 35,
		eggGroups: ["Field", "Grass"],
		canGigantamax: "G-Max Drum Solo",
	},
	rillaboomgmax: {
		num: 812,
		name: "Rillaboom-Gmax",
		baseSpecies: "Rillaboom",
		forme: "Gmax",
		types: ["Grass"],
		genderRatio: { M: 0.875, F: 0.125 },
		baseStats: { hp: 100, atk: 125, def: 90, spa: 60, spd: 70, spe: 85 },
		abilities: { 0: "Overgrow", H: "Grassy Surge" },
		heightm: 3,
		weightkg: 0,
		color: "Green",
		eggGroups: ["Field", "Grass"],
		changesFrom: "Rillaboom",
	},
	scorbunny: {
		num: 813,
		name: "Scorbunny",
		types: ["Fire"],
		genderRatio: { M: 0.875, F: 0.125 },
		baseStats: { hp: 50, atk: 71, def: 40, spa: 40, spd: 40, spe: 69 },
		abilities: { 0: "Blaze", H: "Libero" },
		heightm: 0.3,
		weightkg: 4.5,
		color: "White",
		evos: ["Raboot"],
		eggGroups: ["Field", "Human-Like"],
	},
	raboot: {
		num: 814,
		name: "Raboot",
		types: ["Fire"],
		genderRatio: { M: 0.875, F: 0.125 },
		baseStats: { hp: 65, atk: 86, def: 60, spa: 55, spd: 60, spe: 94 },
		abilities: { 0: "Blaze", H: "Libero" },
		heightm: 0.6,
		weightkg: 9,
		color: "Gray",
		prevo: "Scorbunny",
		evoLevel: 16,
		evos: ["Cinderace"],
		eggGroups: ["Field", "Human-Like"],
	},
	cinderace: {
		num: 815,
		name: "Cinderace",
		types: ["Fire"],
		genderRatio: { M: 0.875, F: 0.125 },
		baseStats: { hp: 80, atk: 116, def: 75, spa: 65, spd: 75, spe: 119 },
		abilities: { 0: "Blaze", H: "Libero" },
		heightm: 1.4,
		weightkg: 33,
		color: "White",
		prevo: "Raboot",
		evoLevel: 35,
		eggGroups: ["Field", "Human-Like"],
		canGigantamax: "G-Max Fireball",
	},
	cinderacegmax: {
		num: 815,
		name: "Cinderace-Gmax",
		baseSpecies: "Cinderace",
		forme: "Gmax",
		types: ["Fire"],
		genderRatio: { M: 0.875, F: 0.125 },
		baseStats: { hp: 80, atk: 116, def: 75, spa: 65, spd: 75, spe: 119 },
		abilities: { 0: "Blaze", H: "Libero" },
		heightm: 3,
		weightkg: 0,
		color: "White",
		eggGroups: ["Field", "Human-Like"],
		changesFrom: "Cinderace",
	},
	sobble: {
		num: 816,
		name: "Sobble",
		types: ["Water"],
		genderRatio: { M: 0.875, F: 0.125 },
		baseStats: { hp: 50, atk: 40, def: 40, spa: 70, spd: 40, spe: 70 },
		abilities: { 0: "Torrent", H: "Sniper" },
		heightm: 0.3,
		weightkg: 4,
		color: "Blue",
		evos: ["Drizzile"],
		eggGroups: ["Water 1", "Field"],
	},
	drizzile: {
		num: 817,
		name: "Drizzile",
		types: ["Water"],
		genderRatio: { M: 0.875, F: 0.125 },
		baseStats: { hp: 65, atk: 60, def: 55, spa: 95, spd: 55, spe: 90 },
		abilities: { 0: "Torrent", H: "Sniper" },
		heightm: 0.7,
		weightkg: 11.5,
		color: "Blue",
		prevo: "Sobble",
		evoLevel: 16,
		evos: ["Inteleon"],
		eggGroups: ["Water 1", "Field"],
	},
	inteleon: {
		num: 818,
		name: "Inteleon",
		types: ["Water"],
		genderRatio: { M: 0.875, F: 0.125 },
		baseStats: { hp: 70, atk: 85, def: 65, spa: 125, spd: 65, spe: 120 },
		abilities: { 0: "Torrent", H: "Sniper" },
		heightm: 1.9,
		weightkg: 45.2,
		color: "Blue",
		prevo: "Drizzile",
		evoLevel: 35,
		eggGroups: ["Water 1", "Field"],
		canGigantamax: "G-Max Hydrosnipe",
	},
	inteleongmax: {
		num: 818,
		name: "Inteleon-Gmax",
		baseSpecies: "Inteleon",
		forme: "Gmax",
		types: ["Water"],
		genderRatio: { M: 0.875, F: 0.125 },
		baseStats: { hp: 70, atk: 85, def: 65, spa: 125, spd: 65, spe: 120 },
		abilities: { 0: "Torrent", H: "Sniper" },
		heightm: 3,
		weightkg: 0,
		color: "Blue",
		eggGroups: ["Water 1", "Field"],
		changesFrom: "Inteleon",
	},
	skwovet: {
		num: 819,
		name: "Skwovet",
		types: ["Normal"],
		baseStats: { hp: 70, atk: 55, def: 55, spa: 35, spd: 35, spe: 25 },
		abilities: { 0: "Cheek Pouch", H: "Gluttony" },
		heightm: 0.3,
		weightkg: 2.5,
		color: "Brown",
		evos: ["Greedent"],
		eggGroups: ["Field"],
	},
	greedent: {
		num: 820,
		name: "Greedent",
		types: ["Normal"],
		baseStats: { hp: 120, atk: 95, def: 95, spa: 55, spd: 75, spe: 20 },
		abilities: { 0: "Cheek Pouch", H: "Gluttony" },
		heightm: 0.6,
		weightkg: 6,
		color: "Brown",
		prevo: "Skwovet",
		evoLevel: 24,
		eggGroups: ["Field"],
	},
	rookidee: {
		num: 821,
		name: "Rookidee",
		types: ["Flying"],
		baseStats: { hp: 38, atk: 47, def: 35, spa: 33, spd: 35, spe: 57 },
		abilities: { 0: "Keen Eye", 1: "Unnerve", H: "Big Pecks" },
		heightm: 0.2,
		weightkg: 1.8,
		color: "Blue",
		evos: ["Corvisquire"],
		eggGroups: ["Flying"],
	},
	corvisquire: {
		num: 822,
		name: "Corvisquire",
		types: ["Flying"],
		baseStats: { hp: 68, atk: 67, def: 55, spa: 43, spd: 55, spe: 77 },
		abilities: { 0: "Keen Eye", 1: "Unnerve", H: "Big Pecks" },
		heightm: 0.8,
		weightkg: 16,
		color: "Blue",
		prevo: "Rookidee",
		evoLevel: 18,
		evos: ["Corviknight"],
		eggGroups: ["Flying"],
	},
	corviknight: {
		num: 823,
		name: "Corviknight",
		types: ["Flying", "Steel"],
		baseStats: { hp: 98, atk: 87, def: 105, spa: 53, spd: 85, spe: 67 },
		abilities: { 0: "Pressure", 1: "Unnerve", H: "Mirror Armor" },
		heightm: 2.2,
		weightkg: 75,
		color: "Purple",
		prevo: "Corvisquire",
		evoLevel: 38,
		eggGroups: ["Flying"],
		canGigantamax: "G-Max Wind Rage",
	},
	corviknightgmax: {
		num: 823,
		name: "Corviknight-Gmax",
		baseSpecies: "Corviknight",
		forme: "Gmax",
		types: ["Flying", "Steel"],
		baseStats: { hp: 98, atk: 87, def: 105, spa: 53, spd: 85, spe: 67 },
		abilities: { 0: "Pressure", 1: "Unnerve", H: "Mirror Armor" },
		heightm: 14,
		weightkg: 0,
		color: "Purple",
		eggGroups: ["Flying"],
		changesFrom: "Corviknight",
	},
	blipbug: {
		num: 824,
		name: "Blipbug",
		types: ["Bug"],
		baseStats: { hp: 25, atk: 20, def: 20, spa: 25, spd: 45, spe: 45 },
		abilities: { 0: "Swarm", 1: "Compound Eyes", H: "Telepathy" },
		heightm: 0.4,
		weightkg: 8,
		color: "Blue",
		evos: ["Dottler"],
		eggGroups: ["Bug"],
	},
	dottler: {
		num: 825,
		name: "Dottler",
		types: ["Bug", "Psychic"],
		baseStats: { hp: 50, atk: 35, def: 80, spa: 50, spd: 90, spe: 30 },
		abilities: { 0: "Swarm", 1: "Compound Eyes", H: "Telepathy" },
		heightm: 0.4,
		weightkg: 19.5,
		color: "Yellow",
		prevo: "Blipbug",
		evoLevel: 10,
		evos: ["Orbeetle"],
		eggGroups: ["Bug"],
	},
	orbeetle: {
		num: 826,
		name: "Orbeetle",
		types: ["Bug", "Psychic"],
		baseStats: { hp: 60, atk: 45, def: 110, spa: 80, spd: 120, spe: 90 },
		abilities: { 0: "Swarm", 1: "Frisk", H: "Telepathy" },
		heightm: 0.4,
		weightkg: 40.8,
		color: "Red",
		prevo: "Dottler",
		evoLevel: 30,
		eggGroups: ["Bug"],
		canGigantamax: "G-Max Gravitas",
	},
	orbeetlegmax: {
		num: 826,
		name: "Orbeetle-Gmax",
		baseSpecies: "Orbeetle",
		forme: "Gmax",
		types: ["Bug", "Psychic"],
		baseStats: { hp: 60, atk: 45, def: 110, spa: 80, spd: 120, spe: 90 },
		abilities: { 0: "Swarm", 1: "Frisk", H: "Telepathy" },
		heightm: 14,
		weightkg: 0,
		color: "Red",
		eggGroups: ["Bug"],
		changesFrom: "Orbeetle",
	},
	nickit: {
		num: 827,
		name: "Nickit",
		types: ["Dark"],
		baseStats: { hp: 40, atk: 28, def: 28, spa: 47, spd: 52, spe: 50 },
		abilities: { 0: "Run Away", 1: "Unburden", H: "Stakeout" },
		heightm: 0.6,
		weightkg: 8.9,
		color: "Brown",
		evos: ["Thievul"],
		eggGroups: ["Field"],
	},
	thievul: {
		num: 828,
		name: "Thievul",
		types: ["Dark"],
		baseStats: { hp: 70, atk: 58, def: 58, spa: 87, spd: 92, spe: 90 },
		abilities: { 0: "Run Away", 1: "Unburden", H: "Stakeout" },
		heightm: 1.2,
		weightkg: 19.9,
		color: "Brown",
		prevo: "Nickit",
		evoLevel: 18,
		eggGroups: ["Field"],
	},
	gossifleur: {
		num: 829,
		name: "Gossifleur",
		types: ["Grass"],
		baseStats: { hp: 40, atk: 40, def: 60, spa: 40, spd: 60, spe: 10 },
		abilities: { 0: "Cotton Down", 1: "Regenerator", H: "Effect Spore" },
		heightm: 0.4,
		weightkg: 2.2,
		color: "Green",
		evos: ["Eldegoss"],
		eggGroups: ["Grass"],
	},
	eldegoss: {
		num: 830,
		name: "Eldegoss",
		types: ["Grass"],
		baseStats: { hp: 60, atk: 50, def: 90, spa: 80, spd: 120, spe: 60 },
		abilities: { 0: "Cotton Down", 1: "Regenerator", H: "Effect Spore" },
		heightm: 0.5,
		weightkg: 2.5,
		color: "Green",
		prevo: "Gossifleur",
		evoLevel: 20,
		eggGroups: ["Grass"],
	},
	wooloo: {
		num: 831,
		name: "Wooloo",
		types: ["Normal"],
		baseStats: { hp: 42, atk: 40, def: 55, spa: 40, spd: 45, spe: 48 },
		abilities: { 0: "Fluffy", 1: "Run Away", H: "Bulletproof" },
		heightm: 0.6,
		weightkg: 6,
		color: "White",
		evos: ["Dubwool"],
		eggGroups: ["Field"],
	},
	dubwool: {
		num: 832,
		name: "Dubwool",
		types: ["Normal"],
		baseStats: { hp: 72, atk: 80, def: 100, spa: 60, spd: 90, spe: 88 },
		abilities: { 0: "Fluffy", 1: "Steadfast", H: "Bulletproof" },
		heightm: 1.3,
		weightkg: 43,
		color: "White",
		prevo: "Wooloo",
		evoLevel: 24,
		eggGroups: ["Field"],
	},
	chewtle: {
		num: 833,
		name: "Chewtle",
		types: ["Water"],
		baseStats: { hp: 50, atk: 64, def: 50, spa: 38, spd: 38, spe: 44 },
		abilities: { 0: "Strong Jaw", 1: "Shell Armor", H: "Swift Swim" },
		heightm: 0.3,
		weightkg: 8.5,
		color: "Green",
		evos: ["Drednaw"],
		eggGroups: ["Monster", "Water 1"],
	},
	drednaw: {
		num: 834,
		name: "Drednaw",
		types: ["Water", "Rock"],
		baseStats: { hp: 90, atk: 115, def: 90, spa: 48, spd: 68, spe: 74 },
		abilities: { 0: "Strong Jaw", 1: "Shell Armor", H: "Swift Swim" },
		heightm: 1,
		weightkg: 115.5,
		color: "Green",
		prevo: "Chewtle",
		evoLevel: 22,
		eggGroups: ["Monster", "Water 1"],
		canGigantamax: "G-Max Stonesurge",
	},
	drednawgmax: {
		num: 834,
		name: "Drednaw-Gmax",
		baseSpecies: "Drednaw",
		forme: "Gmax",
		types: ["Water", "Rock"],
		baseStats: { hp: 90, atk: 115, def: 90, spa: 48, spd: 68, spe: 74 },
		abilities: { 0: "Strong Jaw", 1: "Shell Armor", H: "Swift Swim" },
		heightm: 24,
		weightkg: 0,
		color: "Green",
		eggGroups: ["Monster", "Water 1"],
		changesFrom: "Drednaw",
	},
	yamper: {
		num: 835,
		name: "Yamper",
		types: ["Electric"],
		baseStats: { hp: 59, atk: 45, def: 50, spa: 40, spd: 50, spe: 26 },
		abilities: { 0: "Ball Fetch", H: "Rattled" },
		heightm: 0.3,
		weightkg: 13.5,
		color: "Yellow",
		evos: ["Boltund"],
		eggGroups: ["Field"],
	},
	boltund: {
		num: 836,
		name: "Boltund",
		types: ["Electric"],
		baseStats: { hp: 69, atk: 90, def: 60, spa: 90, spd: 60, spe: 121 },
		abilities: { 0: "Strong Jaw", H: "Competitive" },
		heightm: 1,
		weightkg: 34,
		color: "Yellow",
		prevo: "Yamper",
		evoLevel: 25,
		eggGroups: ["Field"],
	},
	rolycoly: {
		num: 837,
		name: "Rolycoly",
		types: ["Rock"],
		baseStats: { hp: 30, atk: 40, def: 50, spa: 40, spd: 50, spe: 30 },
		abilities: { 0: "Steam Engine", 1: "Heatproof", H: "Flash Fire" },
		heightm: 0.3,
		weightkg: 12,
		color: "Black",
		evos: ["Carkol"],
		eggGroups: ["Mineral"],
	},
	carkol: {
		num: 838,
		name: "Carkol",
		types: ["Rock", "Fire"],
		baseStats: { hp: 80, atk: 60, def: 90, spa: 60, spd: 70, spe: 50 },
		abilities: { 0: "Steam Engine", 1: "Flame Body", H: "Flash Fire" },
		heightm: 1.1,
		weightkg: 78,
		color: "Black",
		prevo: "Rolycoly",
		evoLevel: 18,
		evos: ["Coalossal"],
		eggGroups: ["Mineral"],
	},
	coalossal: {
		num: 839,
		name: "Coalossal",
		types: ["Rock", "Fire"],
		baseStats: { hp: 110, atk: 80, def: 120, spa: 80, spd: 90, spe: 30 },
		abilities: { 0: "Steam Engine", 1: "Flame Body", H: "Flash Fire" },
		heightm: 2.8,
		weightkg: 310.5,
		color: "Black",
		prevo: "Carkol",
		evoLevel: 34,
		eggGroups: ["Mineral"],
		canGigantamax: "G-Max Volcalith",
	},
	coalossalgmax: {
		num: 839,
		name: "Coalossal-Gmax",
		baseSpecies: "Coalossal",
		forme: "Gmax",
		types: ["Rock", "Fire"],
		baseStats: { hp: 110, atk: 80, def: 120, spa: 80, spd: 90, spe: 30 },
		abilities: { 0: "Steam Engine", 1: "Flame Body", H: "Flash Fire" },
		heightm: 42,
		weightkg: 0,
		color: "Black",
		eggGroups: ["Mineral"],
		changesFrom: "Coalossal",
	},
	applin: {
		num: 840,
		name: "Applin",
		types: ["Grass", "Dragon"],
		baseStats: { hp: 40, atk: 40, def: 80, spa: 40, spd: 40, spe: 20 },
		abilities: { 0: "Ripen", 1: "Gluttony", H: "Bulletproof" },
		heightm: 0.2,
		weightkg: 0.5,
		color: "Green",
		evos: ["Flapple", "Appletun"],
		eggGroups: ["Grass", "Dragon"],
	},
	flapple: {
		num: 841,
		name: "Flapple",
		types: ["Grass", "Dragon"],
		baseStats: { hp: 70, atk: 110, def: 80, spa: 95, spd: 60, spe: 70 },
		abilities: { 0: "Ripen", 1: "Gluttony", H: "Hustle" },
		heightm: 0.3,
		weightkg: 1,
		color: "Green",
		prevo: "Applin",
		evoType: "useItem",
		evoItem: "Tart Apple",
		eggGroups: ["Grass", "Dragon"],
		canGigantamax: "G-Max Tartness",
	},
	flapplegmax: {
		num: 841,
		name: "Flapple-Gmax",
		baseSpecies: "Flapple",
		forme: "Gmax",
		types: ["Grass", "Dragon"],
		baseStats: { hp: 70, atk: 110, def: 80, spa: 95, spd: 60, spe: 70 },
		abilities: { 0: "Ripen", 1: "Gluttony", H: "Hustle" },
		heightm: 24,
		weightkg: 0,
		color: "Green",
		eggGroups: ["Grass", "Dragon"],
		changesFrom: "Flapple",
	},
	appletun: {
		num: 842,
		name: "Appletun",
		types: ["Grass", "Dragon"],
		baseStats: { hp: 110, atk: 85, def: 80, spa: 100, spd: 80, spe: 30 },
		abilities: { 0: "Ripen", 1: "Gluttony", H: "Thick Fat" },
		heightm: 0.4,
		weightkg: 13,
		color: "Green",
		prevo: "Applin",
		evoType: "useItem",
		evoItem: "Sweet Apple",
		eggGroups: ["Grass", "Dragon"],
		canGigantamax: "G-Max Sweetness",
	},
	appletungmax: {
		num: 842,
		name: "Appletun-Gmax",
		baseSpecies: "Appletun",
		forme: "Gmax",
		types: ["Grass", "Dragon"],
		baseStats: { hp: 110, atk: 85, def: 80, spa: 100, spd: 80, spe: 30 },
		abilities: { 0: "Ripen", 1: "Gluttony", H: "Thick Fat" },
		heightm: 24,
		weightkg: 0,
		color: "Green",
		eggGroups: ["Grass", "Dragon"],
		changesFrom: "Appletun",
	},
	silicobra: {
		num: 843,
		name: "Silicobra",
		types: ["Ground"],
		baseStats: { hp: 52, atk: 57, def: 75, spa: 35, spd: 50, spe: 46 },
		abilities: { 0: "Sand Spit", 1: "Shed Skin", H: "Sand Veil" },
		heightm: 2.2,
		weightkg: 7.6,
		color: "Green",
		evos: ["Sandaconda"],
		eggGroups: ["Field", "Dragon"],
	},
	sandaconda: {
		num: 844,
		name: "Sandaconda",
		types: ["Ground"],
		baseStats: { hp: 72, atk: 107, def: 125, spa: 65, spd: 70, spe: 71 },
		abilities: { 0: "Sand Spit", 1: "Shed Skin", H: "Sand Veil" },
		heightm: 3.8,
		weightkg: 65.5,
		color: "Green",
		prevo: "Silicobra",
		evoLevel: 36,
		eggGroups: ["Field", "Dragon"],
		canGigantamax: "G-Max Sandblast",
	},
	sandacondagmax: {
		num: 844,
		name: "Sandaconda-Gmax",
		baseSpecies: "Sandaconda",
		forme: "Gmax",
		types: ["Ground"],
		baseStats: { hp: 72, atk: 107, def: 125, spa: 65, spd: 70, spe: 71 },
		abilities: { 0: "Sand Spit", 1: "Shed Skin", H: "Sand Veil" },
		heightm: 22,
		weightkg: 0,
		color: "Green",
		eggGroups: ["Field", "Dragon"],
		changesFrom: "Sandaconda",
	},
	cramorant: {
		num: 845,
		name: "Cramorant",
		types: ["Flying", "Water"],
		baseStats: { hp: 70, atk: 85, def: 55, spa: 85, spd: 95, spe: 85 },
		abilities: { 0: "Gulp Missile" },
		heightm: 0.8,
		weightkg: 18,
		color: "Blue",
		eggGroups: ["Water 1", "Flying"],
		otherFormes: ["Cramorant-Gulping", "Cramorant-Gorging"],
		formeOrder: ["Cramorant", "Cramorant-Gulping", "Cramorant-Gorging"],
	},
	cramorantgulping: {
		num: 845,
		name: "Cramorant-Gulping",
		baseSpecies: "Cramorant",
		forme: "Gulping",
		types: ["Flying", "Water"],
		baseStats: { hp: 70, atk: 85, def: 55, spa: 85, spd: 95, spe: 85 },
		abilities: { 0: "Gulp Missile" },
		heightm: 0.8,
		weightkg: 18,
		color: "Blue",
		eggGroups: ["Water 1", "Flying"],
		requiredAbility: "Gulp Missile",
		battleOnly: "Cramorant",
	},
	cramorantgorging: {
		num: 845,
		name: "Cramorant-Gorging",
		baseSpecies: "Cramorant",
		forme: "Gorging",
		types: ["Flying", "Water"],
		baseStats: { hp: 70, atk: 85, def: 55, spa: 85, spd: 95, spe: 85 },
		abilities: { 0: "Gulp Missile" },
		heightm: 0.8,
		weightkg: 18,
		color: "Blue",
		eggGroups: ["Water 1", "Flying"],
		requiredAbility: "Gulp Missile",
		battleOnly: "Cramorant",
	},
	arrokuda: {
		num: 846,
		name: "Arrokuda",
		types: ["Water"],
		baseStats: { hp: 41, atk: 63, def: 40, spa: 40, spd: 30, spe: 66 },
		abilities: { 0: "Swift Swim", H: "Propeller Tail" },
		heightm: 0.5,
		weightkg: 1,
		color: "Brown",
		evos: ["Barraskewda"],
		eggGroups: ["Water 2"],
	},
	barraskewda: {
		num: 847,
		name: "Barraskewda",
		types: ["Water"],
		baseStats: { hp: 61, atk: 123, def: 60, spa: 60, spd: 50, spe: 136 },
		abilities: { 0: "Swift Swim", H: "Propeller Tail" },
		heightm: 1.3,
		weightkg: 30,
		color: "Brown",
		prevo: "Arrokuda",
		evoLevel: 26,
		eggGroups: ["Water 2"],
	},
	toxel: {
		num: 848,
		name: "Toxel",
		types: ["Electric", "Poison"],
		baseStats: { hp: 40, atk: 38, def: 35, spa: 54, spd: 35, spe: 40 },
		abilities: { 0: "Rattled", 1: "Static", H: "Klutz" },
		heightm: 0.4,
		weightkg: 11,
		color: "Purple",
		evos: ["Toxtricity", "Toxtricity-Low-Key"],
		eggGroups: ["Undiscovered"],
		canHatch: true,
	},
	toxtricity: {
		num: 849,
		name: "Toxtricity",
		baseForme: "Amped",
		types: ["Electric", "Poison"],
		baseStats: { hp: 75, atk: 98, def: 70, spa: 114, spd: 70, spe: 75 },
		abilities: { 0: "Punk Rock", 1: "Plus", H: "Technician" },
		heightm: 1.6,
		weightkg: 40,
		color: "Purple",
		prevo: "Toxel",
		evoLevel: 30,
		eggGroups: ["Human-Like"],
		otherFormes: ["Toxtricity-Low-Key"],
		formeOrder: ["Toxtricity", "Toxtricity-Low-Key"],
		canGigantamax: "G-Max Stun Shock",
	},
	toxtricitylowkey: {
		num: 849,
		name: "Toxtricity-Low-Key",
		baseSpecies: "Toxtricity",
		forme: "Low-Key",
		types: ["Electric", "Poison"],
		baseStats: { hp: 75, atk: 98, def: 70, spa: 114, spd: 70, spe: 75 },
		abilities: { 0: "Punk Rock", 1: "Minus", H: "Technician" },
		heightm: 1.6,
		weightkg: 40,
		color: "Purple",
		prevo: "Toxel",
		evoLevel: 30,
		eggGroups: ["Human-Like"],
		canGigantamax: "G-Max Stun Shock",
	},
	toxtricitygmax: {
		num: 849,
		name: "Toxtricity-Gmax",
		baseSpecies: "Toxtricity",
		forme: "Gmax",
		types: ["Electric", "Poison"],
		baseStats: { hp: 75, atk: 98, def: 70, spa: 114, spd: 70, spe: 75 },
		abilities: { 0: "Punk Rock", 1: "Plus", H: "Technician" },
		heightm: 24,
		weightkg: 0,
		color: "Purple",
		eggGroups: ["Human-Like"],
		changesFrom: "Toxtricity",
	},
	toxtricitylowkeygmax: {
		num: 849,
		name: "Toxtricity-Low-Key-Gmax",
		baseSpecies: "Toxtricity",
		forme: "Low-Key-Gmax",
		types: ["Electric", "Poison"],
		baseStats: { hp: 75, atk: 98, def: 70, spa: 114, spd: 70, spe: 75 },
		abilities: { 0: "Punk Rock", 1: "Minus", H: "Technician" },
		heightm: 24,
		weightkg: 0,
		color: "Purple",
		eggGroups: ["Human-Like"],
		battleOnly: "Toxtricity-Low-Key",
		changesFrom: "Toxtricity-Low-Key",
	},
	sizzlipede: {
		num: 850,
		name: "Sizzlipede",
		types: ["Fire", "Bug"],
		baseStats: { hp: 50, atk: 65, def: 45, spa: 50, spd: 50, spe: 45 },
		abilities: { 0: "Flash Fire", 1: "White Smoke", H: "Flame Body" },
		heightm: 0.7,
		weightkg: 1,
		color: "Red",
		evos: ["Centiskorch"],
		eggGroups: ["Bug"],
	},
	centiskorch: {
		num: 851,
		name: "Centiskorch",
		types: ["Fire", "Bug"],
		baseStats: { hp: 100, atk: 115, def: 65, spa: 90, spd: 90, spe: 65 },
		abilities: { 0: "Flash Fire", 1: "White Smoke", H: "Flame Body" },
		heightm: 3,
		weightkg: 120,
		color: "Red",
		prevo: "Sizzlipede",
		evoLevel: 28,
		eggGroups: ["Bug"],
		canGigantamax: "G-Max Centiferno",
	},
	centiskorchgmax: {
		num: 851,
		name: "Centiskorch-Gmax",
		baseSpecies: "Centiskorch",
		forme: "Gmax",
		types: ["Fire", "Bug"],
		baseStats: { hp: 100, atk: 115, def: 65, spa: 90, spd: 90, spe: 65 },
		abilities: { 0: "Flash Fire", 1: "White Smoke", H: "Flame Body" },
		heightm: 75,
		weightkg: 0,
		color: "Red",
		eggGroups: ["Bug"],
		changesFrom: "Centiskorch",
	},
	clobbopus: {
		num: 852,
		name: "Clobbopus",
		types: ["Fighting"],
		baseStats: { hp: 50, atk: 68, def: 60, spa: 50, spd: 50, spe: 32 },
		abilities: { 0: "Limber", H: "Technician" },
		heightm: 0.6,
		weightkg: 4,
		color: "Brown",
		evos: ["Grapploct"],
		eggGroups: ["Water 1", "Human-Like"],
	},
	grapploct: {
		num: 853,
		name: "Grapploct",
		types: ["Fighting"],
		baseStats: { hp: 80, atk: 118, def: 90, spa: 70, spd: 80, spe: 42 },
		abilities: { 0: "Limber", H: "Technician" },
		heightm: 1.6,
		weightkg: 39,
		color: "Blue",
		prevo: "Clobbopus",
		evoType: "levelMove",
		evoMove: "Taunt",
		eggGroups: ["Water 1", "Human-Like"],
	},
	sinistea: {
		num: 854,
		name: "Sinistea",
		baseForme: "Phony",
		types: ["Ghost"],
		gender: "N",
		baseStats: { hp: 40, atk: 45, def: 45, spa: 74, spd: 54, spe: 50 },
		abilities: { 0: "Weak Armor", H: "Cursed Body" },
		heightm: 0.1,
		weightkg: 0.2,
		color: "Purple",
		evos: ["Polteageist"],
		eggGroups: ["Mineral", "Amorphous"],
		otherFormes: ["Sinistea-Antique"],
		formeOrder: ["Sinistea", "Sinistea-Antique"],
	},
	sinisteaantique: {
		num: 854,
		name: "Sinistea-Antique",
		baseSpecies: "Sinistea",
		forme: "Antique",
		types: ["Ghost"],
		gender: "N",
		baseStats: { hp: 40, atk: 45, def: 45, spa: 74, spd: 54, spe: 50 },
		abilities: { 0: "Weak Armor", H: "Cursed Body" },
		heightm: 0.1,
		weightkg: 0.2,
		color: "Purple",
		evos: ["Polteageist-Antique"],
		eggGroups: ["Undiscovered"],
	},
	polteageist: {
		num: 855,
		name: "Polteageist",
		baseForme: "Phony",
		types: ["Ghost"],
		gender: "N",
		baseStats: { hp: 60, atk: 65, def: 65, spa: 134, spd: 114, spe: 70 },
		abilities: { 0: "Weak Armor", H: "Cursed Body" },
		heightm: 0.2,
		weightkg: 0.4,
		color: "Purple",
		prevo: "Sinistea",
		evoType: "useItem",
		evoItem: "Cracked Pot",
		eggGroups: ["Mineral", "Amorphous"],
		otherFormes: ["Polteageist-Antique"],
		formeOrder: ["Polteageist", "Polteageist-Antique"],
	},
	polteageistantique: {
		num: 855,
		name: "Polteageist-Antique",
		baseSpecies: "Polteageist",
		forme: "Antique",
		types: ["Ghost"],
		gender: "N",
		baseStats: { hp: 60, atk: 65, def: 65, spa: 134, spd: 114, spe: 70 },
		abilities: { 0: "Weak Armor", H: "Cursed Body" },
		heightm: 0.2,
		weightkg: 0.4,
		color: "Purple",
		prevo: "Sinistea-Antique",
		evoType: "useItem",
		evoItem: "Chipped Pot",
		eggGroups: ["Undiscovered"],
	},
	hatenna: {
		num: 856,
		name: "Hatenna",
		types: ["Psychic"],
		gender: "F",
		baseStats: { hp: 42, atk: 30, def: 45, spa: 56, spd: 53, spe: 39 },
		abilities: { 0: "Healer", 1: "Anticipation", H: "Magic Bounce" },
		heightm: 0.4,
		weightkg: 3.4,
		color: "Pink",
		evos: ["Hattrem"],
		eggGroups: ["Fairy"],
	},
	hattrem: {
		num: 857,
		name: "Hattrem",
		types: ["Psychic"],
		gender: "F",
		baseStats: { hp: 57, atk: 40, def: 65, spa: 86, spd: 73, spe: 49 },
		abilities: { 0: "Healer", 1: "Anticipation", H: "Magic Bounce" },
		heightm: 0.6,
		weightkg: 4.8,
		color: "Pink",
		prevo: "Hatenna",
		evoLevel: 32,
		evos: ["Hatterene"],
		eggGroups: ["Fairy"],
	},
	hatterene: {
		num: 858,
		name: "Hatterene",
		types: ["Psychic", "Fairy"],
		gender: "F",
		baseStats: { hp: 57, atk: 90, def: 95, spa: 136, spd: 103, spe: 29 },
		abilities: { 0: "Healer", 1: "Anticipation", H: "Magic Bounce" },
		heightm: 2.1,
		weightkg: 5.1,
		color: "Pink",
		prevo: "Hattrem",
		evoLevel: 42,
		eggGroups: ["Fairy"],
		canGigantamax: "G-Max Smite",
	},
	hatterenegmax: {
		num: 858,
		name: "Hatterene-Gmax",
		baseSpecies: "Hatterene",
		forme: "Gmax",
		types: ["Psychic", "Fairy"],
		gender: "F",
		baseStats: { hp: 57, atk: 90, def: 95, spa: 136, spd: 103, spe: 29 },
		abilities: { 0: "Healer", 1: "Anticipation", H: "Magic Bounce" },
		heightm: 26,
		weightkg: 0,
		color: "Pink",
		eggGroups: ["Fairy"],
		changesFrom: "Hatterene",
	},
	impidimp: {
		num: 859,
		name: "Impidimp",
		types: ["Dark", "Fairy"],
		gender: "M",
		baseStats: { hp: 45, atk: 45, def: 30, spa: 55, spd: 40, spe: 50 },
		abilities: { 0: "Prankster", 1: "Frisk", H: "Pickpocket" },
		heightm: 0.4,
		weightkg: 5.5,
		color: "Pink",
		evos: ["Morgrem"],
		eggGroups: ["Fairy", "Human-Like"],
	},
	morgrem: {
		num: 860,
		name: "Morgrem",
		types: ["Dark", "Fairy"],
		gender: "M",
		baseStats: { hp: 65, atk: 60, def: 45, spa: 75, spd: 55, spe: 70 },
		abilities: { 0: "Prankster", 1: "Frisk", H: "Pickpocket" },
		heightm: 0.8,
		weightkg: 12.5,
		color: "Pink",
		prevo: "Impidimp",
		evoLevel: 32,
		evos: ["Grimmsnarl"],
		eggGroups: ["Fairy", "Human-Like"],
	},
	grimmsnarl: {
		num: 861,
		name: "Grimmsnarl",
		types: ["Dark", "Fairy"],
		gender: "M",
		baseStats: { hp: 95, atk: 120, def: 65, spa: 95, spd: 75, spe: 60 },
		abilities: { 0: "Prankster", 1: "Frisk", H: "Pickpocket" },
		heightm: 1.5,
		weightkg: 61,
		color: "Purple",
		prevo: "Morgrem",
		evoLevel: 42,
		eggGroups: ["Fairy", "Human-Like"],
		canGigantamax: "G-Max Snooze",
	},
	grimmsnarlgmax: {
		num: 861,
		name: "Grimmsnarl-Gmax",
		baseSpecies: "Grimmsnarl",
		forme: "Gmax",
		types: ["Dark", "Fairy"],
		gender: "M",
		baseStats: { hp: 95, atk: 120, def: 65, spa: 95, spd: 75, spe: 60 },
		abilities: { 0: "Prankster", 1: "Frisk", H: "Pickpocket" },
		heightm: 32,
		weightkg: 0,
		color: "Purple",
		eggGroups: ["Fairy", "Human-Like"],
		changesFrom: "Grimmsnarl",
	},
	obstagoon: {
		num: 862,
		name: "Obstagoon",
		types: ["Dark", "Normal"],
		baseStats: { hp: 93, atk: 90, def: 101, spa: 60, spd: 81, spe: 95 },
		abilities: { 0: "Reckless", 1: "Guts", H: "Defiant" },
		heightm: 1.6,
		weightkg: 46,
		color: "Gray",
		prevo: "Linoone-Galar",
		evoLevel: 35,
		evoCondition: "at night",
		eggGroups: ["Field"],
	},
	perrserker: {
		num: 863,
		name: "Perrserker",
		types: ["Steel"],
		baseStats: { hp: 70, atk: 110, def: 100, spa: 50, spd: 60, spe: 50 },
		abilities: { 0: "Battle Armor", 1: "Tough Claws", H: "Steely Spirit" },
		heightm: 0.8,
		weightkg: 28,
		color: "Brown",
		prevo: "Meowth-Galar",
		evoLevel: 28,
		eggGroups: ["Field"],
	},
	cursola: {
		num: 864,
		name: "Cursola",
		types: ["Ghost"],
		genderRatio: { M: 0.25, F: 0.75 },
		baseStats: { hp: 60, atk: 95, def: 50, spa: 145, spd: 130, spe: 30 },
		abilities: { 0: "Weak Armor", H: "Perish Body" },
		heightm: 1,
		weightkg: 0.4,
		color: "White",
		prevo: "Corsola-Galar",
		evoLevel: 38,
		eggGroups: ["Water 1", "Water 3"],
	},
	sirfetchd: {
		num: 865,
		name: "Sirfetch\u2019d",
		types: ["Fighting"],
		baseStats: { hp: 62, atk: 135, def: 95, spa: 68, spd: 82, spe: 65 },
		abilities: { 0: "Steadfast", H: "Scrappy" },
		heightm: 0.8,
		weightkg: 117,
		color: "White",
		prevo: "Farfetch\u2019d-Galar",
		evoType: "other",
		evoCondition: "Land 3 critical hits in 1 battle",
		eggGroups: ["Flying", "Field"],
	},
	mrrime: {
		num: 866,
		name: "Mr. Rime",
		types: ["Ice", "Psychic"],
		baseStats: { hp: 80, atk: 85, def: 75, spa: 110, spd: 100, spe: 70 },
		abilities: { 0: "Tangled Feet", 1: "Screen Cleaner", H: "Ice Body" },
		heightm: 1.5,
		weightkg: 58.2,
		color: "Purple",
		prevo: "Mr. Mime-Galar",
		evoLevel: 42,
		eggGroups: ["Human-Like"],
	},
	runerigus: {
		num: 867,
		name: "Runerigus",
		types: ["Ground", "Ghost"],
		baseStats: { hp: 58, atk: 95, def: 145, spa: 50, spd: 105, spe: 30 },
		abilities: { 0: "Wandering Spirit" },
		heightm: 1.6,
		weightkg: 66.6,
		color: "Gray",
		prevo: "Yamask-Galar",
		evoType: "other",
		evoCondition: "Have 49+ HP lost and walk under stone sculpture in Dusty Bowl",
		eggGroups: ["Mineral", "Amorphous"],
	},
	milcery: {
		num: 868,
		name: "Milcery",
		types: ["Fairy"],
		gender: "F",
		baseStats: { hp: 45, atk: 40, def: 40, spa: 50, spd: 61, spe: 34 },
		abilities: { 0: "Sweet Veil", H: "Aroma Veil" },
		heightm: 0.2,
		weightkg: 0.3,
		color: "White",
		evos: ["Alcremie"],
		eggGroups: ["Fairy", "Amorphous"],
	},
	alcremie: {
		num: 869,
		name: "Alcremie",
		baseForme: "Vanilla Cream",
		types: ["Fairy"],
		gender: "F",
		baseStats: { hp: 65, atk: 60, def: 75, spa: 110, spd: 121, spe: 64 },
		abilities: { 0: "Sweet Veil", H: "Aroma Veil" },
		heightm: 0.3,
		weightkg: 0.5,
		color: "White",
		prevo: "Milcery",
		evoType: "other",
		evoCondition: "spin while holding a Sweet",
		eggGroups: ["Fairy", "Amorphous"],
		cosmeticFormes: ["Alcremie-Ruby-Cream", "Alcremie-Matcha-Cream", "Alcremie-Mint-Cream", "Alcremie-Lemon-Cream", "Alcremie-Salted-Cream", "Alcremie-Ruby-Swirl", "Alcremie-Caramel-Swirl", "Alcremie-Rainbow-Swirl"],
		formeOrder: ["Alcremie", "Alcremie-Ruby-Cream", "Alcremie-Matcha-Cream", "Alcremie-Mint-Cream", "Alcremie-Lemon-Cream", "Alcremie-Salted-Cream", "Alcremie-Ruby-Swirl", "Alcremie-Caramel-Swirl", "Alcremie-Rainbow-Swirl"],
		canGigantamax: "G-Max Finale",
	},
	alcremiegmax: {
		num: 869,
		name: "Alcremie-Gmax",
		baseSpecies: "Alcremie",
		forme: "Gmax",
		types: ["Fairy"],
		gender: "F",
		baseStats: { hp: 65, atk: 60, def: 75, spa: 110, spd: 121, spe: 64 },
		abilities: { 0: "Sweet Veil", H: "Aroma Veil" },
		heightm: 30,
		weightkg: 0,
		color: "White",
		eggGroups: ["Fairy", "Amorphous"],
		changesFrom: "Alcremie",
	},
	falinks: {
		num: 870,
		name: "Falinks",
		types: ["Fighting"],
		gender: "N",
		baseStats: { hp: 65, atk: 100, def: 100, spa: 70, spd: 60, spe: 75 },
		abilities: { 0: "Battle Armor", H: "Defiant" },
		heightm: 3,
		weightkg: 62,
		color: "Yellow",
		eggGroups: ["Fairy", "Mineral"],
	},
	pincurchin: {
		num: 871,
		name: "Pincurchin",
		types: ["Electric"],
		baseStats: { hp: 48, atk: 101, def: 95, spa: 91, spd: 85, spe: 15 },
		abilities: { 0: "Lightning Rod", H: "Electric Surge" },
		heightm: 0.3,
		weightkg: 1,
		color: "Purple",
		eggGroups: ["Water 1", "Amorphous"],
	},
	snom: {
		num: 872,
		name: "Snom",
		types: ["Ice", "Bug"],
		baseStats: { hp: 30, atk: 25, def: 35, spa: 45, spd: 30, spe: 20 },
		abilities: { 0: "Shield Dust", H: "Ice Scales" },
		heightm: 0.3,
		weightkg: 3.8,
		color: "White",
		evos: ["Frosmoth"],
		eggGroups: ["Bug"],
	},
	frosmoth: {
		num: 873,
		name: "Frosmoth",
		types: ["Ice", "Bug"],
		baseStats: { hp: 70, atk: 65, def: 60, spa: 125, spd: 90, spe: 65 },
		abilities: { 0: "Shield Dust", H: "Ice Scales" },
		heightm: 1.3,
		weightkg: 42,
		color: "White",
		prevo: "Snom",
		evoType: "levelFriendship",
		evoCondition: "at night",
		eggGroups: ["Bug"],
	},
	stonjourner: {
		num: 874,
		name: "Stonjourner",
		types: ["Rock"],
		baseStats: { hp: 100, atk: 125, def: 135, spa: 20, spd: 20, spe: 70 },
		abilities: { 0: "Power Spot" },
		heightm: 2.5,
		weightkg: 520,
		color: "Gray",
		eggGroups: ["Mineral"],
	},
	eiscue: {
		num: 875,
		name: "Eiscue",
		types: ["Ice"],
		baseStats: { hp: 75, atk: 80, def: 110, spa: 65, spd: 90, spe: 50 },
		abilities: { 0: "Ice Face" },
		heightm: 1.4,
		weightkg: 89,
		color: "Blue",
		eggGroups: ["Water 1", "Field"],
		otherFormes: ["Eiscue-Noice"],
		formeOrder: ["Eiscue", "Eiscue-Noice"],
	},
	eiscuenoice: {
		num: 875,
		name: "Eiscue-Noice",
		baseSpecies: "Eiscue",
		forme: "Noice",
		types: ["Ice"],
		baseStats: { hp: 75, atk: 80, def: 70, spa: 65, spd: 50, spe: 130 },
		abilities: { 0: "Ice Face" },
		heightm: 1.4,
		weightkg: 89,
		color: "Blue",
		eggGroups: ["Water 1", "Field"],
		requiredAbility: "Ice Face",
		battleOnly: "Eiscue",
	},
	indeedee: {
		num: 876,
		name: "Indeedee",
		baseForme: "M",
		types: ["Psychic", "Normal"],
		gender: "M",
		baseStats: { hp: 60, atk: 65, def: 55, spa: 105, spd: 95, spe: 95 },
		abilities: { 0: "Inner Focus", 1: "Synchronize", H: "Psychic Surge" },
		heightm: 0.9,
		weightkg: 28,
		color: "Purple",
		eggGroups: ["Fairy"],
		otherFormes: ["Indeedee-F"],
		formeOrder: ["Indeedee", "Indeedee-F"],
	},
	indeedeef: {
		num: 876,
		name: "Indeedee-F",
		baseSpecies: "Indeedee",
		forme: "F",
		types: ["Psychic", "Normal"],
		gender: "F",
		baseStats: { hp: 70, atk: 55, def: 65, spa: 95, spd: 105, spe: 85 },
		abilities: { 0: "Own Tempo", 1: "Synchronize", H: "Psychic Surge" },
		heightm: 0.9,
		weightkg: 28,
		color: "Purple",
		eggGroups: ["Fairy"],
	},
	morpeko: {
		num: 877,
		name: "Morpeko",
		types: ["Electric", "Dark"],
		baseStats: { hp: 58, atk: 95, def: 58, spa: 70, spd: 58, spe: 97 },
		abilities: { 0: "Hunger Switch" },
		heightm: 0.3,
		weightkg: 3,
		color: "Yellow",
		eggGroups: ["Field", "Fairy"],
		otherFormes: ["Morpeko-Hangry"],
		formeOrder: ["Morpeko", "Morpeko-Hangry"],
	},
	morpekohangry: {
		num: 877,
		name: "Morpeko-Hangry",
		baseSpecies: "Morpeko",
		forme: "Hangry",
		types: ["Electric", "Dark"],
		baseStats: { hp: 58, atk: 95, def: 58, spa: 70, spd: 58, spe: 97 },
		abilities: { 0: "Hunger Switch" },
		heightm: 0.3,
		weightkg: 3,
		color: "Yellow",
		eggGroups: ["Field", "Fairy"],
		requiredAbility: "Hunger Switch",
		battleOnly: "Morpeko",
	},
	cufant: {
		num: 878,
		name: "Cufant",
		types: ["Steel"],
		baseStats: { hp: 72, atk: 80, def: 49, spa: 40, spd: 49, spe: 40 },
		abilities: { 0: "Sheer Force", H: "Heavy Metal" },
		heightm: 1.2,
		weightkg: 100,
		color: "Yellow",
		evos: ["Copperajah"],
		eggGroups: ["Field", "Mineral"],
	},
	copperajah: {
		num: 879,
		name: "Copperajah",
		types: ["Steel"],
		baseStats: { hp: 122, atk: 130, def: 69, spa: 80, spd: 69, spe: 30 },
		abilities: { 0: "Sheer Force", H: "Heavy Metal" },
		heightm: 3,
		weightkg: 650,
		color: "Green",
		prevo: "Cufant",
		evoLevel: 34,
		eggGroups: ["Field", "Mineral"],
		canGigantamax: "G-Max Steelsurge",
	},
	copperajahgmax: {
		num: 879,
		name: "Copperajah-Gmax",
		baseSpecies: "Copperajah",
		forme: "Gmax",
		types: ["Steel"],
		baseStats: { hp: 122, atk: 130, def: 69, spa: 80, spd: 69, spe: 30 },
		abilities: { 0: "Sheer Force", H: "Heavy Metal" },
		heightm: 23,
		weightkg: 0,
		color: "Green",
		eggGroups: ["Field", "Mineral"],
		changesFrom: "Copperajah",
	},
	dracozolt: {
		num: 880,
		name: "Dracozolt",
		types: ["Electric", "Dragon"],
		gender: "N",
		baseStats: { hp: 90, atk: 100, def: 90, spa: 80, spd: 70, spe: 75 },
		abilities: { 0: "Volt Absorb", 1: "Hustle", H: "Sand Rush" },
		heightm: 1.8,
		weightkg: 190,
		color: "Green",
		eggGroups: ["Undiscovered"],
	},
	arctozolt: {
		num: 881,
		name: "Arctozolt",
		types: ["Electric", "Ice"],
		gender: "N",
		baseStats: { hp: 90, atk: 100, def: 90, spa: 90, spd: 80, spe: 55 },
		abilities: { 0: "Volt Absorb", 1: "Static", H: "Slush Rush" },
		heightm: 2.3,
		weightkg: 150,
		color: "Blue",
		eggGroups: ["Undiscovered"],
	},
	dracovish: {
		num: 882,
		name: "Dracovish",
		types: ["Water", "Dragon"],
		gender: "N",
		baseStats: { hp: 90, atk: 90, def: 100, spa: 70, spd: 80, spe: 75 },
		abilities: { 0: "Water Absorb", 1: "Strong Jaw", H: "Sand Rush" },
		heightm: 2.3,
		weightkg: 215,
		color: "Green",
		eggGroups: ["Undiscovered"],
	},
	arctovish: {
		num: 883,
		name: "Arctovish",
		types: ["Water", "Ice"],
		gender: "N",
		baseStats: { hp: 90, atk: 90, def: 100, spa: 80, spd: 90, spe: 55 },
		abilities: { 0: "Water Absorb", 1: "Ice Body", H: "Slush Rush" },
		heightm: 2,
		weightkg: 175,
		color: "Blue",
		eggGroups: ["Undiscovered"],
	},
	duraludon: {
		num: 884,
		name: "Duraludon",
		types: ["Steel", "Dragon"],
		baseStats: { hp: 70, atk: 95, def: 115, spa: 120, spd: 50, spe: 85 },
		abilities: { 0: "Light Metal", 1: "Heavy Metal", H: "Stalwart" },
		heightm: 1.8,
		weightkg: 40,
		color: "White",
		eggGroups: ["Mineral", "Dragon"],
		canGigantamax: "G-Max Depletion",
	},
	duraludongmax: {
		num: 884,
		name: "Duraludon-Gmax",
		baseSpecies: "Duraludon",
		forme: "Gmax",
		types: ["Steel", "Dragon"],
		baseStats: { hp: 70, atk: 95, def: 115, spa: 120, spd: 50, spe: 85 },
		abilities: { 0: "Light Metal", 1: "Heavy Metal", H: "Stalwart" },
		heightm: 43,
		weightkg: 0,
		color: "White",
		eggGroups: ["Mineral", "Dragon"],
		changesFrom: "Duraludon",
	},
	dreepy: {
		num: 885,
		name: "Dreepy",
		types: ["Dragon", "Ghost"],
		baseStats: { hp: 28, atk: 60, def: 30, spa: 40, spd: 30, spe: 82 },
		abilities: { 0: "Clear Body", 1: "Infiltrator", H: "Cursed Body" },
		heightm: 0.5,
		weightkg: 2,
		color: "Green",
		evos: ["Drakloak"],
		eggGroups: ["Amorphous", "Dragon"],
	},
	drakloak: {
		num: 886,
		name: "Drakloak",
		types: ["Dragon", "Ghost"],
		baseStats: { hp: 68, atk: 80, def: 50, spa: 60, spd: 50, spe: 102 },
		abilities: { 0: "Clear Body", 1: "Infiltrator", H: "Cursed Body" },
		heightm: 1.4,
		weightkg: 11,
		color: "Green",
		prevo: "Dreepy",
		evoLevel: 50,
		evos: ["Dragapult"],
		eggGroups: ["Amorphous", "Dragon"],
	},
	dragapult: {
		num: 887,
		name: "Dragapult",
		types: ["Dragon", "Ghost"],
		baseStats: { hp: 88, atk: 120, def: 75, spa: 100, spd: 75, spe: 142 },
		abilities: { 0: "Clear Body", 1: "Infiltrator", H: "Cursed Body" },
		heightm: 3,
		weightkg: 50,
		color: "Green",
		prevo: "Drakloak",
		evoLevel: 60,
		eggGroups: ["Amorphous", "Dragon"],
	},
	zacian: {
		num: 888,
		name: "Zacian",
		types: ["Fairy"],
		gender: "N",
		baseStats: { hp: 92, atk: 130, def: 115, spa: 80, spd: 115, spe: 138 },
		abilities: { 0: "Intrepid Sword" },
		heightm: 2.8,
		weightkg: 110,
		color: "Blue",
		eggGroups: ["Undiscovered"],
		otherFormes: ["Zacian-Crowned"],
		formeOrder: ["Zacian", "Zacian-Crowned"],
		cannotDynamax: true,
	},
	zaciancrowned: {
		num: 888,
		name: "Zacian-Crowned",
		baseSpecies: "Zacian",
		forme: "Crowned",
		types: ["Fairy", "Steel"],
		gender: "N",
		baseStats: { hp: 92, atk: 170, def: 115, spa: 80, spd: 115, spe: 148 },
		abilities: { 0: "Intrepid Sword" },
		heightm: 2.8,
		weightkg: 355,
		color: "Blue",
		eggGroups: ["Undiscovered"],
		requiredItem: "Rusted Sword",
		changesFrom: "Zacian",
		cannotDynamax: true,
	},
	zamazenta: {
		num: 889,
		name: "Zamazenta",
		types: ["Fighting"],
		gender: "N",
		baseStats: { hp: 92, atk: 130, def: 115, spa: 80, spd: 115, spe: 138 },
		abilities: { 0: "Dauntless Shield" },
		heightm: 2.9,
		weightkg: 210,
		color: "Red",
		eggGroups: ["Undiscovered"],
		otherFormes: ["Zamazenta-Crowned"],
		formeOrder: ["Zamazenta", "Zamazenta-Crowned"],
		cannotDynamax: true,
	},
	zamazentacrowned: {
		num: 889,
		name: "Zamazenta-Crowned",
		baseSpecies: "Zamazenta",
		forme: "Crowned",
		types: ["Fighting", "Steel"],
		gender: "N",
		baseStats: { hp: 92, atk: 130, def: 145, spa: 80, spd: 145, spe: 128 },
		abilities: { 0: "Dauntless Shield" },
		heightm: 2.9,
		weightkg: 785,
		color: "Red",
		eggGroups: ["Undiscovered"],
		requiredItem: "Rusted Shield",
		changesFrom: "Zamazenta",
		cannotDynamax: true,
	},
	eternatus: {
		num: 890,
		name: "Eternatus",
		types: ["Poison", "Dragon"],
		gender: "N",
		baseStats: { hp: 140, atk: 85, def: 95, spa: 145, spd: 95, spe: 130 },
		abilities: { 0: "Pressure" },
		heightm: 20,
		weightkg: 950,
		color: "Purple",
		eggGroups: ["Undiscovered"],
		otherFormes: ["Eternatus-Eternamax"],
		formeOrder: ["Eternatus", "Eternatus-Eternamax"],
		cannotDynamax: true,
	},
	eternatuseternamax: {
		num: 890,
		name: "Eternatus-Eternamax",
		baseSpecies: "Eternatus",
		forme: "Eternamax",
		types: ["Poison", "Dragon"],
		gender: "N",
		baseStats: { hp: 255, atk: 115, def: 250, spa: 125, spd: 250, spe: 130 },
		abilities: { 0: "Pressure" },
		heightm: 100,
		weightkg: 0,
		color: "Purple",
		eggGroups: ["Undiscovered"],
		cannotDynamax: true,
	},
	kubfu: {
		num: 891,
		name: "Kubfu",
		types: ["Fighting"],
		genderRatio: { M: 0.875, F: 0.125 },
		baseStats: { hp: 60, atk: 90, def: 60, spa: 53, spd: 50, spe: 72 },
		abilities: { 0: "Inner Focus" },
		heightm: 0.6,
		weightkg: 12,
		color: "Gray",
		evos: ["Urshifu", "Urshifu-Rapid-Strike"],
		eggGroups: ["Undiscovered"],
	},
	urshifu: {
		num: 892,
		name: "Urshifu",
		baseForme: "Single-Strike",
		types: ["Fighting", "Dark"],
		genderRatio: { M: 0.875, F: 0.125 },
		baseStats: { hp: 100, atk: 130, def: 100, spa: 63, spd: 60, spe: 97 },
		abilities: { 0: "Unseen Fist" },
		heightm: 1.9,
		weightkg: 105,
		color: "Gray",
		prevo: "Kubfu",
		evoType: "other",
		evoCondition: "Defeat the Single Strike Tower",
		eggGroups: ["Undiscovered"],
		otherFormes: ["Urshifu-Rapid-Strike"],
		formeOrder: ["Urshifu", "Urshifu-Rapid-Strike"],
		canGigantamax: "G-Max One Blow",
	},
	urshifurapidstrike: {
		num: 892,
		name: "Urshifu-Rapid-Strike",
		baseSpecies: "Urshifu",
		forme: "Rapid-Strike",
		types: ["Fighting", "Water"],
		genderRatio: { M: 0.875, F: 0.125 },
		baseStats: { hp: 100, atk: 130, def: 100, spa: 63, spd: 60, spe: 97 },
		abilities: { 0: "Unseen Fist" },
		heightm: 1.9,
		weightkg: 105,
		color: "Gray",
		prevo: "Kubfu",
		evoType: "other",
		evoCondition: "Defeat the Rapid Strike Tower",
		eggGroups: ["Undiscovered"],
		canGigantamax: "G-Max Rapid Flow",
	},
	urshifugmax: {
		num: 892,
		name: "Urshifu-Gmax",
		baseSpecies: "Urshifu",
		forme: "Gmax",
		types: ["Fighting", "Dark"],
		genderRatio: { M: 0.875, F: 0.125 },
		baseStats: { hp: 100, atk: 130, def: 100, spa: 63, spd: 60, spe: 97 },
		abilities: { 0: "Unseen Fist" },
		heightm: 3,
		weightkg: 0,
		color: "Gray",
		eggGroups: ["Undiscovered"],
		changesFrom: "Urshifu",
	},
	urshifurapidstrikegmax: {
		num: 892,
		name: "Urshifu-Rapid-Strike-Gmax",
		baseSpecies: "Urshifu",
		forme: "Rapid-Strike-Gmax",
		types: ["Fighting", "Water"],
		genderRatio: { M: 0.875, F: 0.125 },
		baseStats: { hp: 100, atk: 130, def: 100, spa: 63, spd: 60, spe: 97 },
		abilities: { 0: "Unseen Fist" },
		heightm: 1.9,
		weightkg: 105,
		color: "Gray",
		eggGroups: ["Undiscovered"],
		battleOnly: "Urshifu-Rapid-Strike",
		changesFrom: "Urshifu-Rapid-Strike",
	},
	zarude: {
		num: 893,
		name: "Zarude",
		types: ["Dark", "Grass"],
		gender: "N",
		baseStats: { hp: 105, atk: 120, def: 105, spa: 70, spd: 95, spe: 105 },
		abilities: { 0: "Leaf Guard" },
		heightm: 1.8,
		weightkg: 70,
		color: "Black",
		eggGroups: ["Undiscovered"],
		otherFormes: ["Zarude-Dada"],
		formeOrder: ["Zarude", "Zarude-Dada"],
	},
	zarudedada: {
		num: 893,
		name: "Zarude-Dada",
		baseSpecies: "Zarude",
		forme: "Dada",
		types: ["Dark", "Grass"],
		gender: "N",
		baseStats: { hp: 105, atk: 120, def: 105, spa: 70, spd: 95, spe: 105 },
		abilities: { 0: "Leaf Guard" },
		heightm: 1.8,
		weightkg: 70,
		color: "Black",
		eggGroups: ["Undiscovered"],
	},
	regieleki: {
		num: 894,
		name: "Regieleki",
		types: ["Electric"],
		gender: "N",
		baseStats: { hp: 80, atk: 100, def: 50, spa: 100, spd: 50, spe: 200 },
		abilities: { 0: "Transistor" },
		heightm: 1.2,
		weightkg: 145,
		color: "Yellow",
		eggGroups: ["Undiscovered"],
	},
	regidrago: {
		num: 895,
		name: "Regidrago",
		types: ["Dragon"],
		gender: "N",
		baseStats: { hp: 200, atk: 100, def: 50, spa: 100, spd: 50, spe: 80 },
		abilities: { 0: "Dragon's Maw" },
		heightm: 2.1,
		weightkg: 200,
		color: "Green",
		eggGroups: ["Undiscovered"],
	},
	glastrier: {
		num: 896,
		name: "Glastrier",
		types: ["Ice"],
		gender: "N",
		baseStats: { hp: 100, atk: 145, def: 130, spa: 65, spd: 110, spe: 30 },
		abilities: { 0: "Chilling Neigh" },
		heightm: 2.2,
		weightkg: 800,
		color: "White",
		eggGroups: ["Undiscovered"],
	},
	spectrier: {
		num: 897,
		name: "Spectrier",
		types: ["Ghost"],
		gender: "N",
		baseStats: { hp: 100, atk: 65, def: 60, spa: 145, spd: 80, spe: 130 },
		abilities: { 0: "Grim Neigh" },
		heightm: 2,
		weightkg: 44.5,
		color: "Black",
		eggGroups: ["Undiscovered"],
	},
	calyrex: {
		num: 898,
		name: "Calyrex",
		types: ["Psychic", "Grass"],
		gender: "N",
		baseStats: { hp: 100, atk: 80, def: 80, spa: 80, spd: 80, spe: 80 },
		abilities: { 0: "Unnerve" },
		heightm: 1.1,
		weightkg: 7.7,
		color: "Green",
		eggGroups: ["Undiscovered"],
		otherFormes: ["Calyrex-Ice", "Calyrex-Shadow"],
		formeOrder: ["Calyrex", "Calyrex-Ice", "Calyrex-Shadow"],
	},
	calyrexice: {
		num: 898,
		name: "Calyrex-Ice",
		baseSpecies: "Calyrex",
		forme: "Ice",
		types: ["Psychic", "Ice"],
		gender: "N",
		baseStats: { hp: 100, atk: 165, def: 150, spa: 85, spd: 130, spe: 50 },
		abilities: { 0: "As One (Glastrier)" },
		heightm: 2.4,
		weightkg: 809.1,
		color: "White",
		eggGroups: ["Undiscovered"],
		changesFrom: "Calyrex",
	},
	calyrexshadow: {
		num: 898,
		name: "Calyrex-Shadow",
		baseSpecies: "Calyrex",
		forme: "Shadow",
		types: ["Psychic", "Ghost"],
		gender: "N",
		baseStats: { hp: 100, atk: 85, def: 80, spa: 165, spd: 100, spe: 150 },
		abilities: { 0: "As One (Spectrier)" },
		heightm: 2.4,
		weightkg: 53.6,
		color: "Black",
		eggGroups: ["Undiscovered"],
		changesFrom: "Calyrex",
	},
	missingno: {
		num: 0,
		name: "MissingNo.",
		types: ["Bird", "Normal"],
		baseStats: { hp: 33, atk: 136, def: 0, spa: 6, spd: 6, spe: 29 },
		abilities: { 0: "" },
		heightm: 3,
		weightkg: 1590.8,
		color: "Gray",
		eggGroups: ["Undiscovered"],
	},
	syclar: {
		num: -1,
		name: "Syclar",
		types: ["Ice", "Bug"],
		baseStats: { hp: 40, atk: 76, def: 45, spa: 74, spd: 39, spe: 91 },
		abilities: { 0: "Compound Eyes", 1: "Snow Cloak", H: "Ice Body" },
		heightm: 0.2,
		weightkg: 4,
		color: "Blue",
		evos: ["Syclant"],
		eggGroups: ["Bug"],
		gen: 4,
	},
	syclant: {
		num: -2,
		name: "Syclant",
		types: ["Ice", "Bug"],
		baseStats: { hp: 70, atk: 116, def: 70, spa: 114, spd: 64, spe: 121 },
		abilities: { 0: "Compound Eyes", 1: "Mountaineer", H: "Ice Body" },
		heightm: 1.7,
		weightkg: 52,
		color: "Blue",
		prevo: "Syclar",
		evoLevel: 30,
		eggGroups: ["Bug"],
		gen: 4,
	},
	revenankh: {
		num: -3,
		name: "Revenankh",
		types: ["Ghost", "Fighting"],
		baseStats: { hp: 90, atk: 105, def: 90, spa: 65, spd: 110, spe: 65 },
		abilities: { 0: "Shed Skin", 1: "Air Lock", H: "Triage" },
		heightm: 1.8,
		weightkg: 44,
		color: "White",
		eggGroups: ["Amorphous", "Human-Like"],
		gen: 4,
	},
	embirch: {
		num: -4,
		name: "Embirch",
		types: ["Fire", "Grass"],
		baseStats: { hp: 60, atk: 40, def: 55, spa: 65, spd: 40, spe: 60 },
		abilities: { 0: "Reckless", 1: "Leaf Guard", H: "Chlorophyll" },
		heightm: 0.6,
		weightkg: 15,
		color: "Brown",
		evos: ["Flarelm"],
		eggGroups: ["Monster", "Dragon"],
		gen: 4,
	},
	flarelm: {
		num: -5,
		name: "Flarelm",
		types: ["Fire", "Grass"],
		baseStats: { hp: 90, atk: 50, def: 95, spa: 75, spd: 70, spe: 40 },
		abilities: { 0: "Rock Head", 1: "Battle Armor", H: "White Smoke" },
		heightm: 1.4,
		weightkg: 73,
		color: "Brown",
		prevo: "Embirch",
		evoLevel: 24,
		evos: ["Pyroak"],
		eggGroups: ["Monster", "Dragon"],
		gen: 4,
	},
	pyroak: {
		num: -6,
		name: "Pyroak",
		types: ["Fire", "Grass"],
		baseStats: { hp: 120, atk: 70, def: 105, spa: 95, spd: 90, spe: 60 },
		abilities: { 0: "Rock Head", 1: "Battle Armor", H: "White Smoke" },
		heightm: 2.1,
		weightkg: 168,
		color: "Brown",
		prevo: "Flarelm",
		evoLevel: 38,
		eggGroups: ["Monster", "Dragon"],
		gen: 4,
	},
	breezi: {
		num: -7,
		name: "Breezi",
		types: ["Poison", "Flying"],
		baseStats: { hp: 50, atk: 46, def: 69, spa: 60, spd: 50, spe: 75 },
		abilities: { 0: "Unburden", 1: "Own Tempo", H: "Frisk" },
		heightm: 0.4,
		weightkg: 0.6,
		color: "Purple",
		evos: ["Fidgit"],
		eggGroups: ["Field"],
		gen: 4,
	},
	fidgit: {
		num: -8,
		name: "Fidgit",
		types: ["Poison", "Ground"],
		baseStats: { hp: 95, atk: 76, def: 109, spa: 90, spd: 80, spe: 105 },
		abilities: { 0: "Persistent", 1: "Vital Spirit", H: "Frisk" },
		heightm: 0.9,
		weightkg: 53,
		color: "Purple",
		prevo: "Breezi",
		evoLevel: 33,
		eggGroups: ["Field"],
		gen: 4,
	},
	rebble: {
		num: -9,
		name: "Rebble",
		types: ["Rock"],
		gender: "N",
		baseStats: { hp: 45, atk: 25, def: 65, spa: 75, spd: 55, spe: 80 },
		abilities: { 0: "Levitate", 1: "Solid Rock", H: "Sniper" },
		heightm: 0.3,
		weightkg: 7,
		color: "Gray",
		evos: ["Tactite"],
		eggGroups: ["Undiscovered"],
		gen: 4,
	},
	tactite: {
		num: -10,
		name: "Tactite",
		types: ["Rock"],
		gender: "N",
		baseStats: { hp: 70, atk: 40, def: 65, spa: 100, spd: 65, spe: 95 },
		abilities: { 0: "Levitate", 1: "Technician", H: "Sniper" },
		heightm: 0.6,
		weightkg: 16,
		color: "Gray",
		prevo: "Rebble",
		evoLevel: 28,
		evos: ["Stratagem"],
		eggGroups: ["Undiscovered"],
		gen: 4,
	},
	stratagem: {
		num: -11,
		name: "Stratagem",
		types: ["Rock"],
		gender: "N",
		baseStats: { hp: 90, atk: 60, def: 65, spa: 120, spd: 70, spe: 130 },
		abilities: { 0: "Levitate", 1: "Technician", H: "Sniper" },
		heightm: 0.9,
		weightkg: 45,
		color: "Gray",
		prevo: "Tactite",
		evoType: "trade",
		eggGroups: ["Undiscovered"],
		gen: 4,
	},
	privatyke: {
		num: -12,
		name: "Privatyke",
		types: ["Water", "Fighting"],
		baseStats: { hp: 65, atk: 75, def: 65, spa: 40, spd: 60, spe: 45 },
		abilities: { 0: "Unaware", H: "Technician" },
		heightm: 1,
		weightkg: 35,
		color: "Green",
		evos: ["Arghonaut"],
		eggGroups: ["Water 1", "Water 3"],
		gen: 4,
	},
	arghonaut: {
		num: -13,
		name: "Arghonaut",
		types: ["Water", "Fighting"],
		baseStats: { hp: 105, atk: 110, def: 95, spa: 70, spd: 100, spe: 75 },
		abilities: { 0: "Unaware", H: "Technician" },
		heightm: 1.7,
		weightkg: 151,
		color: "Green",
		prevo: "Privatyke",
		evoLevel: 37,
		eggGroups: ["Water 1", "Water 3"],
		gen: 4,
	},
	kitsunoh: {
		num: -14,
		name: "Kitsunoh",
		types: ["Ghost", "Steel"],
		baseStats: { hp: 80, atk: 103, def: 85, spa: 55, spd: 80, spe: 110 },
		abilities: { 0: "Frisk", 1: "Limber", H: "Iron Fist" },
		heightm: 1.1,
		weightkg: 51,
		color: "Gray",
		eggGroups: ["Field"],
		gen: 4,
	},
	cyclohm: {
		num: -15,
		name: "Cyclohm",
		types: ["Electric", "Dragon"],
		baseStats: { hp: 108, atk: 60, def: 118, spa: 112, spd: 70, spe: 80 },
		abilities: { 0: "Shield Dust", 1: "Static", H: "Damp" },
		heightm: 1.6,
		weightkg: 59,
		color: "Yellow",
		eggGroups: ["Dragon", "Monster"],
		gen: 4,
	},
	colossoil: {
		num: -16,
		name: "Colossoil",
		types: ["Dark", "Ground"],
		baseStats: { hp: 133, atk: 122, def: 72, spa: 71, spd: 72, spe: 95 },
		abilities: { 0: "Rebound", 1: "Guts", H: "Unnerve" },
		heightm: 2.6,
		weightkg: 683.6,
		color: "Brown",
		eggGroups: ["Water 2", "Field"],
		gen: 4,
	},
	krilowatt: {
		num: -17,
		name: "Krilowatt",
		types: ["Electric", "Water"],
		baseStats: { hp: 151, atk: 84, def: 73, spa: 83, spd: 74, spe: 105 },
		abilities: { 0: "Trace", 1: "Magic Guard", H: "Minus" },
		heightm: 0.7,
		weightkg: 10.6,
		color: "Red",
		eggGroups: ["Water 1", "Fairy"],
		gen: 4,
	},
	voodoll: {
		num: -18,
		name: "Voodoll",
		types: ["Normal", "Dark"],
		baseStats: { hp: 55, atk: 40, def: 55, spa: 75, spd: 50, spe: 70 },
		abilities: { 0: "Volt Absorb", 1: "Lightning Rod", H: "Cursed Body" },
		heightm: 1,
		weightkg: 25,
		color: "Brown",
		evos: ["Voodoom"],
		eggGroups: ["Human-Like", "Field"],
		gen: 4,
	},
	voodoom: {
		num: -19,
		name: "Voodoom",
		types: ["Fighting", "Dark"],
		baseStats: { hp: 90, atk: 85, def: 80, spa: 105, spd: 80, spe: 110 },
		abilities: { 0: "Volt Absorb", 1: "Lightning Rod", H: "Cursed Body" },
		heightm: 2,
		weightkg: 75.5,
		color: "Brown",
		prevo: "Voodoll",
		evoLevel: 32,
		eggGroups: ["Human-Like", "Field"],
		gen: 4,
	},
	scratchet: {
		num: -20,
		name: "Scratchet",
		types: ["Normal", "Fighting"],
		baseStats: { hp: 55, atk: 85, def: 80, spa: 20, spd: 70, spe: 40 },
		abilities: { 0: "Scrappy", 1: "Prankster", H: "Vital Spirit" },
		heightm: 0.5,
		weightkg: 20,
		color: "Brown",
		evos: ["Tomohawk"],
		eggGroups: ["Field", "Flying"],
		gen: 5,
	},
	tomohawk: {
		num: -21,
		name: "Tomohawk",
		types: ["Flying", "Fighting"],
		baseStats: { hp: 105, atk: 60, def: 90, spa: 115, spd: 80, spe: 85 },
		abilities: { 0: "Intimidate", 1: "Prankster", H: "Justified" },
		heightm: 1.27,
		weightkg: 37.2,
		color: "Red",
		prevo: "Scratchet",
		evoLevel: 23,
		eggGroups: ["Field", "Flying"],
		gen: 5,
	},
	necturine: {
		num: -22,
		name: "Necturine",
		types: ["Grass", "Ghost"],
		gender: "F",
		baseStats: { hp: 49, atk: 55, def: 60, spa: 50, spd: 75, spe: 51 },
		abilities: { 0: "Anticipation", H: "Telepathy" },
		heightm: 0.3,
		weightkg: 1.8,
		color: "White",
		evos: ["Necturna"],
		eggGroups: ["Grass", "Field"],
		gen: 5,
	},
	necturna: {
		num: -23,
		name: "Necturna",
		types: ["Grass", "Ghost"],
		gender: "F",
		baseStats: { hp: 64, atk: 120, def: 100, spa: 85, spd: 120, spe: 58 },
		abilities: { 0: "Forewarn", H: "Telepathy" },
		heightm: 1.65,
		weightkg: 49.6,
		color: "Black",
		prevo: "Necturine",
		evoLevel: 31,
		eggGroups: ["Grass", "Field"],
		gen: 5,
	},
	mollux: {
		num: -24,
		name: "Mollux",
		types: ["Fire", "Poison"],
		baseStats: { hp: 95, atk: 45, def: 83, spa: 131, spd: 105, spe: 76 },
		abilities: { 0: "Dry Skin", H: "Illuminate" },
		heightm: 1.2,
		weightkg: 41,
		color: "Pink",
		eggGroups: ["Fairy", "Field"],
		gen: 5,
	},
	cupra: {
		num: -25,
		name: "Cupra",
		types: ["Bug", "Psychic"],
		baseStats: { hp: 50, atk: 60, def: 49, spa: 67, spd: 30, spe: 44 },
		abilities: { 0: "Shield Dust", 1: "Keen Eye", H: "Magic Guard" },
		heightm: 0.5,
		weightkg: 4.8,
		color: "Brown",
		evos: ["Argalis"],
		eggGroups: ["Bug"],
		gen: 5,
	},
	argalis: {
		num: -26,
		name: "Argalis",
		types: ["Bug", "Psychic"],
		baseStats: { hp: 60, atk: 90, def: 89, spa: 87, spd: 40, spe: 54 },
		abilities: { 0: "Shed Skin", 1: "Compound Eyes", H: "Overcoat" },
		heightm: 1.3,
		weightkg: 341.4,
		color: "Gray",
		prevo: "Cupra",
		evoLevel: 30,
		evos: ["Aurumoth"],
		eggGroups: ["Bug"],
		gen: 5,
	},
	aurumoth: {
		num: -27,
		name: "Aurumoth",
		types: ["Bug", "Psychic"],
		baseStats: { hp: 110, atk: 120, def: 99, spa: 117, spd: 60, spe: 94 },
		abilities: { 0: "Weak Armor", 1: "No Guard", H: "Light Metal" },
		heightm: 2.1,
		weightkg: 193,
		color: "Purple",
		prevo: "Argalis",
		evoLevel: 50,
		eggGroups: ["Bug"],
		gen: 5,
	},
	brattler: {
		num: -28,
		name: "Brattler",
		types: ["Dark", "Grass"],
		baseStats: { hp: 80, atk: 70, def: 40, spa: 20, spd: 90, spe: 30 },
		abilities: { 0: "Harvest", 1: "Infiltrator", H: "Rattled" },
		heightm: 1.8,
		weightkg: 11.5,
		color: "Brown",
		evos: ["Malaconda"],
		eggGroups: ["Grass", "Dragon"],
		gen: 5,
	},
	malaconda: {
		num: -29,
		name: "Malaconda",
		types: ["Dark", "Grass"],
		baseStats: { hp: 115, atk: 100, def: 60, spa: 40, spd: 130, spe: 55 },
		abilities: { 0: "Harvest", 1: "Infiltrator", H: "Drought" },
		heightm: 5.5,
		weightkg: 108.8,
		color: "Brown",
		prevo: "Brattler",
		evoLevel: 33,
		eggGroups: ["Grass", "Dragon"],
		gen: 5,
	},
	cawdet: {
		num: -30,
		name: "Cawdet",
		types: ["Steel", "Flying"],
		baseStats: { hp: 35, atk: 72, def: 85, spa: 40, spd: 55, spe: 88 },
		abilities: { 0: "Keen Eye", 1: "Volt Absorb", H: "Big Pecks" },
		heightm: 0.76,
		weightkg: 25,
		color: "Gray",
		evos: ["Cawmodore"],
		eggGroups: ["Flying"],
		gen: 5,
	},
	cawmodore: {
		num: -31,
		name: "Cawmodore",
		types: ["Steel", "Flying"],
		baseStats: { hp: 50, atk: 92, def: 130, spa: 65, spd: 75, spe: 118 },
		abilities: { 0: "Intimidate", 1: "Volt Absorb", H: "Big Pecks" },
		heightm: 1.7,
		weightkg: 37,
		color: "Black",
		prevo: "Cawdet",
		evoLevel: 33,
		eggGroups: ["Flying"],
		gen: 5,
	},
	volkritter: {
		num: -32,
		name: "Volkritter",
		types: ["Water", "Fire"],
		baseStats: { hp: 60, atk: 30, def: 50, spa: 80, spd: 60, spe: 70 },
		abilities: { 0: "Anticipation", 1: "Infiltrator", H: "Unnerve" },
		heightm: 0.3,
		weightkg: 15,
		color: "Red",
		evos: ["Volkraken"],
		eggGroups: ["Water 1", "Water 2"],
		gen: 6,
	},
	volkraken: {
		num: -33,
		name: "Volkraken",
		types: ["Water", "Fire"],
		baseStats: { hp: 100, atk: 45, def: 80, spa: 135, spd: 100, spe: 95 },
		abilities: { 0: "Analytic", 1: "Infiltrator", H: "Pressure" },
		heightm: 1.3,
		weightkg: 44.5,
		color: "Red",
		prevo: "Volkritter",
		evoLevel: 34,
		eggGroups: ["Water 1", "Water 2"],
		gen: 6,
	},
	snugglow: {
		num: -34,
		name: "Snugglow",
		types: ["Electric", "Poison"],
		baseStats: { hp: 40, atk: 37, def: 79, spa: 91, spd: 68, spe: 70 },
		abilities: { 0: "Storm Drain", 1: "Vital Spirit", H: "Telepathy" },
		heightm: 1.2,
		weightkg: 6,
		color: "Purple",
		evos: ["Plasmanta"],
		eggGroups: ["Water 1", "Water 2"],
		gen: 6,
	},
	plasmanta: {
		num: -35,
		name: "Plasmanta",
		types: ["Electric", "Poison"],
		baseStats: { hp: 60, atk: 57, def: 119, spa: 131, spd: 98, spe: 100 },
		abilities: { 0: "Storm Drain", 1: "Vital Spirit", H: "Telepathy" },
		heightm: 7,
		weightkg: 460,
		color: "Purple",
		prevo: "Snugglow",
		evoLevel: 29,
		eggGroups: ["Water 1", "Water 2"],
		gen: 6,
	},
	floatoy: {
		num: -36,
		name: "Floatoy",
		types: ["Water"],
		baseStats: { hp: 48, atk: 70, def: 40, spa: 70, spd: 30, spe: 77 },
		abilities: { 0: "Water Veil", 1: "Heatproof", H: "Swift Swim" },
		heightm: 0.8,
		weightkg: 1.9,
		color: "White",
		evos: ["Caimanoe"],
		eggGroups: ["Water 1", "Field"],
		gen: 6,
	},
	caimanoe: {
		num: -37,
		name: "Caimanoe",
		types: ["Water", "Steel"],
		baseStats: { hp: 73, atk: 85, def: 65, spa: 80, spd: 40, spe: 87 },
		abilities: { 0: "Water Veil", 1: "Heatproof", H: "Light Metal" },
		heightm: 1.4,
		weightkg: 72.5,
		color: "Gray",
		prevo: "Floatoy",
		evoLevel: 21,
		evos: ["Naviathan"],
		eggGroups: ["Water 1", "Field"],
		gen: 6,
	},
	naviathan: {
		num: -38,
		name: "Naviathan",
		types: ["Water", "Steel"],
		baseStats: { hp: 103, atk: 110, def: 90, spa: 95, spd: 65, spe: 97 },
		abilities: { 0: "Guts", 1: "Heatproof", H: "Light Metal" },
		heightm: 3,
		weightkg: 510,
		color: "Gray",
		prevo: "Caimanoe",
		evoLevel: 40,
		eggGroups: ["Water 1", "Field"],
		gen: 6,
	},
	crucibelle: {
		num: -39,
		name: "Crucibelle",
		types: ["Rock", "Poison"],
		genderRatio: { M: 0.25, F: 0.75 },
		baseStats: { hp: 106, atk: 105, def: 65, spa: 75, spd: 85, spe: 104 },
		abilities: { 0: "Regenerator", 1: "Mold Breaker", H: "Liquid Ooze" },
		heightm: 1.3,
		weightkg: 23.6,
		color: "Purple",
		eggGroups: ["Amorphous", "Mineral"],
		otherFormes: ["Crucibelle-Mega"],
		formeOrder: ["Crucibelle", "Crucibelle-Mega"],
		gen: 6,
	},
	crucibellemega: {
		num: -39,
		name: "Crucibelle-Mega",
		baseSpecies: "Crucibelle",
		forme: "Mega",
		types: ["Rock", "Poison"],
		genderRatio: { M: 0.25, F: 0.75 },
		baseStats: { hp: 106, atk: 135, def: 75, spa: 91, spd: 125, spe: 108 },
		abilities: { 0: "Magic Guard" },
		heightm: 1.4,
		weightkg: 22.5,
		color: "Purple",
		eggGroups: ["Amorphous", "Mineral"],
		requiredItem: "Crucibellite",
		gen: 6,
	},
	pluffle: {
		num: -40,
		name: "Pluffle",
		types: ["Fairy"],
		baseStats: { hp: 74, atk: 38, def: 51, spa: 65, spd: 78, spe: 49 },
		abilities: { 0: "Natural Cure", 1: "Aroma Veil", H: "Friend Guard" },
		heightm: 0.8,
		weightkg: 1.8,
		color: "Pink",
		evos: ["Kerfluffle"],
		eggGroups: ["Fairy", "Human-Like"],
		gen: 6,
	},
	kerfluffle: {
		num: -41,
		name: "Kerfluffle",
		types: ["Fairy", "Fighting"],
		baseStats: { hp: 84, atk: 78, def: 86, spa: 115, spd: 88, spe: 119 },
		abilities: { 0: "Natural Cure", 1: "Aroma Veil", H: "Friend Guard" },
		heightm: 2.1,
		weightkg: 24.2,
		color: "Pink",
		prevo: "Pluffle",
		evoType: "levelExtra",
		eggGroups: ["Fairy", "Human-Like"],
		gen: 6,
	},
	pajantom: {
		num: -42,
		name: "Pajantom",
		types: ["Dragon", "Ghost"],
		baseStats: { hp: 84, atk: 133, def: 71, spa: 51, spd: 111, spe: 101 },
		abilities: { 0: "Comatose" },
		heightm: 1.1,
		weightkg: 3.1,
		color: "Purple",
		eggGroups: ["Dragon", "Monster"],
		gen: 7,
	},
	mumbao: {
		num: -43,
		name: "Mumbao",
		types: ["Grass", "Fairy"],
		baseStats: { hp: 55, atk: 30, def: 64, spa: 87, spd: 73, spe: 66 },
		abilities: { 0: "Solar Power", 1: "Trace", H: "Overcoat" },
		heightm: 1,
		weightkg: 250,
		color: "Brown",
		evos: ["Jumbao"],
		eggGroups: ["Grass"],
		gen: 7,
	},
	jumbao: {
		num: -44,
		name: "Jumbao",
		types: ["Grass", "Fairy"],
		baseStats: { hp: 92, atk: 63, def: 97, spa: 124, spd: 104, spe: 96 },
		abilities: { 0: "Drought", 1: "Trace", H: "Overcoat" },
		heightm: 2.4,
		weightkg: 600,
		color: "Brown",
		prevo: "Mumbao",
		evoType: "levelExtra",
		eggGroups: ["Grass"],
		gen: 7,
	},
	fawnifer: {
		num: -45,
		name: "Fawnifer",
		types: ["Grass"],
		genderRatio: { M: 0.875, F: 0.125 },
		baseStats: { hp: 49, atk: 61, def: 42, spa: 52, spd: 40, spe: 76 },
		abilities: { 0: "Overgrow", H: "Lightning Rod" },
		heightm: 0.7,
		weightkg: 6.9,
		color: "Green",
		evos: ["Electrelk"],
		eggGroups: ["Field"],
		gen: 7,
	},
	electrelk: {
		num: -46,
		name: "Electrelk",
		types: ["Grass", "Electric"],
		genderRatio: { M: 0.875, F: 0.125 },
		baseStats: { hp: 59, atk: 81, def: 67, spa: 57, spd: 55, spe: 101 },
		abilities: { 0: "Overgrow", H: "Galvanize" },
		heightm: 1.4,
		weightkg: 41.5,
		color: "Green",
		prevo: "Fawnifer",
		evoLevel: 17,
		evos: ["Caribolt"],
		eggGroups: ["Field"],
		gen: 7,
	},
	caribolt: {
		num: -47,
		name: "Caribolt",
		types: ["Grass", "Electric"],
		genderRatio: { M: 0.875, F: 0.125 },
		baseStats: { hp: 84, atk: 106, def: 82, spa: 77, spd: 80, spe: 106 },
		abilities: { 0: "Overgrow", H: "Galvanize" },
		heightm: 2.5,
		weightkg: 140,
		color: "Green",
		prevo: "Electrelk",
		evoLevel: 34,
		eggGroups: ["Field"],
		gen: 7,
	},
	smogecko: {
		num: -48,
		name: "Smogecko",
		types: ["Fire"],
		genderRatio: { M: 0.875, F: 0.125 },
		baseStats: { hp: 48, atk: 66, def: 43, spa: 58, spd: 48, spe: 56 },
		abilities: { 0: "Blaze", H: "Technician" },
		heightm: 0.5,
		weightkg: 8.5,
		color: "Red",
		evos: ["Smoguana"],
		eggGroups: ["Field", "Monster"],
		gen: 7,
	},
	smoguana: {
		num: -49,
		name: "Smoguana",
		types: ["Fire", "Ground"],
		genderRatio: { M: 0.875, F: 0.125 },
		baseStats: { hp: 68, atk: 86, def: 53, spa: 68, spd: 68, spe: 76 },
		abilities: { 0: "Blaze", H: "Technician" },
		heightm: 1.5,
		weightkg: 22.2,
		color: "Red",
		prevo: "Smogecko",
		evoLevel: 15,
		evos: ["Smokomodo"],
		eggGroups: ["Field", "Monster"],
		gen: 7,
	},
	smokomodo: {
		num: -50,
		name: "Smokomodo",
		types: ["Fire", "Ground"],
		genderRatio: { M: 0.875, F: 0.125 },
		baseStats: { hp: 88, atk: 116, def: 67, spa: 88, spd: 78, spe: 97 },
		abilities: { 0: "Blaze", H: "Technician" },
		heightm: 2.2,
		weightkg: 205,
		color: "Red",
		prevo: "Smoguana",
		evoLevel: 36,
		eggGroups: ["Field", "Monster"],
		gen: 7,
	},
	swirlpool: {
		num: -51,
		name: "Swirlpool",
		types: ["Water"],
		genderRatio: { M: 0.875, F: 0.125 },
		baseStats: { hp: 61, atk: 49, def: 70, spa: 50, spd: 62, spe: 28 },
		abilities: { 0: "Torrent", H: "Poison Heal" },
		heightm: 0.5,
		weightkg: 7,
		color: "Blue",
		evos: ["Coribalis"],
		eggGroups: ["Water 1", "Fairy"],
		gen: 7,
	},
	coribalis: {
		num: -52,
		name: "Coribalis",
		types: ["Water", "Bug"],
		genderRatio: { M: 0.875, F: 0.125 },
		baseStats: { hp: 76, atk: 69, def: 90, spa: 65, spd: 77, spe: 43 },
		abilities: { 0: "Torrent", H: "Poison Heal" },
		heightm: 1.4,
		weightkg: 24.5,
		color: "Blue",
		prevo: "Swirlpool",
		evoLevel: 17,
		evos: ["Snaelstrom"],
		eggGroups: ["Water 1", "Fairy"],
		gen: 7,
	},
	snaelstrom: {
		num: -53,
		name: "Snaelstrom",
		types: ["Water", "Bug"],
		genderRatio: { M: 0.875, F: 0.125 },
		baseStats: { hp: 91, atk: 94, def: 110, spa: 80, spd: 97, spe: 63 },
		abilities: { 0: "Torrent", H: "Poison Heal" },
		heightm: 2,
		weightkg: 120,
		color: "Blue",
		prevo: "Coribalis",
		evoLevel: 34,
		eggGroups: ["Water 1", "Fairy"],
		gen: 7,
	},
	justyke: {
		num: -54,
		name: "Justyke",
		types: ["Steel", "Ground"],
		gender: "N",
		baseStats: { hp: 72, atk: 70, def: 56, spa: 83, spd: 68, spe: 30 },
		abilities: { 0: "Levitate", 1: "Stalwart", H: "Justified" },
		heightm: 0.4,
		weightkg: 36.5,
		color: "Brown",
		evos: ["Equilibra"],
		eggGroups: ["Mineral"],
		gen: 7,
	},
	equilibra: {
		num: -55,
		name: "Equilibra",
		types: ["Steel", "Ground"],
		gender: "N",
		baseStats: { hp: 102, atk: 50, def: 96, spa: 121, spd: 118, spe: 60 },
		abilities: { 0: "Levitate", 1: "Stalwart", H: "Justified" },
		heightm: 0.8,
		weightkg: 51.3,
		color: "Brown",
		prevo: "Justyke",
		evoLevel: 32,
		eggGroups: ["Mineral"],
		gen: 7,
	},
	solotl: {
		num: -56,
		name: "Solotl",
		types: ["Fire", "Dragon"],
		baseStats: { hp: 68, atk: 48, def: 34, spa: 72, spd: 24, spe: 84 },
		abilities: { 0: "Regenerator", 1: "Vital Spirit", H: "Magician" },
		heightm: 0.6,
		weightkg: 11.8,
		color: "Red",
		evos: ["Astrolotl"],
		eggGroups: ["Dragon", "Fairy"],
		gen: 8,
	},
	astrolotl: {
		num: -57,
		name: "Astrolotl",
		types: ["Fire", "Dragon"],
		baseStats: { hp: 108, atk: 108, def: 74, spa: 92, spd: 64, spe: 114 },
		abilities: { 0: "Regenerator", 1: "Vital Spirit", H: "Magician" },
		heightm: 1.9,
		weightkg: 50,
		color: "Red",
		prevo: "Solotl",
		evoLevel: 36,
		eggGroups: ["Dragon", "Fairy"],
		gen: 8,
	},
	miasmite: {
		num: -58,
		name: "Miasmite",
		types: ["Bug", "Dragon"],
		baseStats: { hp: 40, atk: 85, def: 60, spa: 52, spd: 52, spe: 44 },
		abilities: { 0: "Neutralizing Gas", 1: "Hyper Cutter", H: "Compound Eyes" },
		heightm: 0.6,
		weightkg: 10.1,
		color: "Green",
		evos: ["Miasmaw"],
		eggGroups: ["Bug", "Dragon"],
		gen: 8,
	},
	miasmaw: {
		num: -59,
		name: "Miasmaw",
		types: ["Bug", "Dragon"],
		baseStats: { hp: 85, atk: 135, def: 60, spa: 115, spd: 85, spe: 92 },
		abilities: { 0: "Neutralizing Gas", 1: "Hyper Cutter", H: "Compound Eyes" },
		heightm: 1.2,
		weightkg: 57,
		color: "Green",
		prevo: "Miasmite",
		evoLevel: 30,
		eggGroups: ["Bug", "Dragon"],
		gen: 8,
	},
	// NOTE: PokeStar "formes" are not actually formes and thus do not have a formeOrder
	pokestarsmeargle: {
		num: -5000,
		name: "Pokestar Smeargle",
		types: ["Normal"],
		baseStats: { hp: 55, atk: 20, def: 35, spa: 20, spd: 45, spe: 75 },
		abilities: { 0: "Own Tempo", 1: "Technician", H: "Moody" },
		heightm: 1.5,
		weightkg: 61,
		color: "White",
		eggGroups: ["Field"],
		gen: 5,
	},
	pokestarufo: {
		num: -5001,
		name: "Pokestar UFO",
		types: ["Flying", "Electric"],
		gender: "N",
		baseStats: { hp: 100, atk: 100, def: 100, spa: 100, spd: 100, spe: 100 },
		abilities: { 0: "Levitate" },
		heightm: 1.5,
		weightkg: 61,
		color: "White",
		eggGroups: ["Undiscovered"],
		otherFormes: ["Pokestar UFO-2", "Pokestar UFO-PropU2"],
		cosmeticFormes: ["Pokestar UFO-PropU1"],
		gen: 5,
	},
	pokestarufo2: {
		num: -5001,
		name: "Pokestar UFO-2",
		baseSpecies: "Pokestar UFO",
		forme: "2",
		types: ["Psychic", "Electric"],
		gender: "N",
		baseStats: { hp: 100, atk: 100, def: 100, spa: 100, spd: 100, spe: 100 },
		abilities: { 0: "Levitate" },
		heightm: 1.5,
		weightkg: 61,
		color: "White",
		eggGroups: ["Undiscovered"],
		gen: 5,
	},
	pokestarbrycenman: {
		num: -5002,
		name: "Pokestar Brycen-Man",
		types: ["Dark", "Psychic"],
		gender: "M",
		baseStats: { hp: 100, atk: 100, def: 100, spa: 100, spd: 100, spe: 100 },
		abilities: { 0: "Levitate" },
		heightm: 1.5,
		weightkg: 61,
		color: "White",
		eggGroups: ["Undiscovered"],
		cosmeticFormes: ["Pokestar Brycen-Man-Prop"],
		gen: 5,
	},
	pokestarmt: {
		num: -5003,
		name: "Pokestar MT",
		types: ["Steel"],
		gender: "N",
		baseStats: { hp: 100, atk: 100, def: 100, spa: 100, spd: 100, spe: 100 },
		abilities: { 0: "Analytic" },
		heightm: 1.5,
		weightkg: 61,
		color: "White",
		eggGroups: ["Undiscovered"],
		cosmeticFormes: ["Pokestar MT-Prop"],
		gen: 5,
	},
	pokestarmt2: {
		num: -5004,
		name: "Pokestar MT2",
		types: ["Steel", "Electric"],
		gender: "N",
		baseStats: { hp: 100, atk: 100, def: 100, spa: 100, spd: 100, spe: 100 },
		abilities: { 0: "Flash Fire" },
		heightm: 1.5,
		weightkg: 61,
		color: "White",
		eggGroups: ["Undiscovered"],
		cosmeticFormes: ["Pokestar MT2-Prop"],
		gen: 5,
	},
	pokestartransport: {
		num: -5005,
		name: "Pokestar Transport",
		types: ["Steel"],
		gender: "N",
		baseStats: { hp: 100, atk: 100, def: 100, spa: 100, spd: 100, spe: 100 },
		abilities: { 0: "Motor Drive" },
		heightm: 1.5,
		weightkg: 61,
		color: "White",
		eggGroups: ["Undiscovered"],
		cosmeticFormes: ["Pokestar Transport-Prop"],
		gen: 5,
	},
	pokestargiant: {
		num: -5006,
		name: "Pokestar Giant",
		types: ["Normal"],
		gender: "F",
		baseStats: { hp: 100, atk: 100, def: 100, spa: 100, spd: 100, spe: 100 },
		abilities: { 0: "Huge Power" },
		heightm: 1.5,
		weightkg: 61,
		color: "White",
		eggGroups: ["Undiscovered"],
		cosmeticFormes: ["Pokestar Giant-2", "Pokestar Giant-PropO1", "Pokestar Giant-PropO2"],
		gen: 5,
	},
	pokestarhumanoid: {
		num: -5007,
		name: "Pokestar Humanoid",
		types: ["Normal"],
		baseStats: { hp: 100, atk: 100, def: 100, spa: 100, spd: 100, spe: 100 },
		abilities: { 0: "Insomnia" },
		heightm: 1.5,
		weightkg: 61,
		color: "White",
		eggGroups: ["Undiscovered"],
		cosmeticFormes: ["Pokestar Humanoid-Prop"],
		gen: 5,
	},
	pokestarmonster: {
		num: -5008,
		name: "Pokestar Monster",
		types: ["Dark"],
		baseStats: { hp: 100, atk: 100, def: 100, spa: 100, spd: 100, spe: 100 },
		abilities: { 0: "Pressure" },
		heightm: 1.5,
		weightkg: 61,
		color: "White",
		eggGroups: ["Undiscovered"],
		cosmeticFormes: ["Pokestar Monster-Prop"],
		gen: 5,
	},
	pokestarf00: {
		num: -5009,
		name: "Pokestar F-00",
		types: ["Steel", "Normal"],
		baseStats: { hp: 100, atk: 100, def: 100, spa: 100, spd: 100, spe: 100 },
		abilities: { 0: "Volt Absorb" },
		heightm: 1.5,
		weightkg: 61,
		color: "White",
		eggGroups: ["Undiscovered"],
		cosmeticFormes: ["Pokestar F-00-Prop"],
		gen: 5,
	},
	pokestarf002: {
		num: -5010,
		name: "Pokestar F-002",
		types: ["Steel", "Normal"],
		baseStats: { hp: 100, atk: 100, def: 100, spa: 100, spd: 100, spe: 100 },
		abilities: { 0: "Reckless" },
		heightm: 1.5,
		weightkg: 61,
		color: "White",
		eggGroups: ["Undiscovered"],
		cosmeticFormes: ["Pokestar F-002-Prop"],
		gen: 5,
	},
	pokestarspirit: {
		num: -5011,
		name: "Pokestar Spirit",
		types: ["Dark", "Ghost"],
		baseStats: { hp: 100, atk: 100, def: 100, spa: 100, spd: 100, spe: 100 },
		abilities: { 0: "Wonder Guard" },
		heightm: 1.5,
		weightkg: 61,
		color: "White",
		eggGroups: ["Undiscovered"],
		cosmeticFormes: ["Pokestar Spirit-Prop"],
		gen: 5,
	},
	pokestarblackdoor: {
		num: -5012,
		name: "Pokestar Black Door",
		types: ["Grass"],
		gender: "F",
		baseStats: { hp: 100, atk: 100, def: 100, spa: 100, spd: 100, spe: 100 },
		abilities: { 0: "Early Bird" },
		heightm: 1.5,
		weightkg: 61,
		color: "White",
		eggGroups: ["Undiscovered"],
		cosmeticFormes: ["Pokestar Black Door-Prop"],
		gen: 5,
	},
	pokestarwhitedoor: {
		num: -5013,
		name: "Pokestar White Door",
		types: ["Fire"],
		gender: "M",
		baseStats: { hp: 100, atk: 100, def: 100, spa: 100, spd: 100, spe: 100 },
		abilities: { 0: "Blaze" },
		heightm: 1.5,
		weightkg: 61,
		color: "White",
		eggGroups: ["Undiscovered"],
		cosmeticFormes: ["Pokestar White Door-Prop"],
		gen: 5,
	},
	pokestarblackbelt: {
		num: -5014,
		name: "Pokestar Black Belt",
		types: ["Fighting"],
		gender: "M",
		baseStats: { hp: 100, atk: 100, def: 100, spa: 100, spd: 100, spe: 100 },
		abilities: { 0: "Huge Power" },
		heightm: 1.5,
		weightkg: 61,
		color: "White",
		eggGroups: ["Undiscovered"],
		cosmeticFormes: ["Pokestar Black Belt-Prop"],
		gen: 5,
	},
	pokestarufopropu2: {
		num: -5001,
		name: "Pokestar UFO-PropU2",
		baseSpecies: "Pokestar UFO",
		forme: "PropU2",
		types: ["Psychic", "Electric"],
		gender: "N",
		baseStats: { hp: 100, atk: 100, def: 100, spa: 100, spd: 100, spe: 100 },
		abilities: { 0: "Levitate" },
		heightm: 1.5,
		weightkg: 61,
		color: "White",
		eggGroups: ["Undiscovered"],
		gen: 5,
	},
	/* Clovermons */
	grasshole: {
		num: 69001,
		name: "Grasshole",
		types: [
			"Grass"
		],
		genderRatio: {
			M: 0.875,
			F: 0.125
		},
		baseStats: {
			hp: 56,
			atk: 60,
			def: 55,
			spa: 47,
			spd: 50,
			spe: 50
		},
		abilities: {
			0: "Overgrow",
			H: "Cheek Pouch",
			S: "Analytic"
		},
		heightm: 0.7,
		weightkg: 6.9,
		color: "Gray",
		evos: [
			"Analgae"
		],
		eggGroups: [
			"Grass",
			"Monster"
		],
		gen: 8
	},
	analgae: {
		num: 69002,
		name: "Analgae",
		types: [
			"Grass",
			"Ground"
		],
		genderRatio: {
			M: 0.875,
			F: 0.125
		},
		baseStats: {
			hp: 70,
			atk: 80,
			def: 80,
			spa: 55,
			spd: 60,
			spe: 60
		},
		abilities: {
			0: "Overgrow",
			H: "Cheek Pouch",
			S: "Analytic"
		},
		heightm: 1,
		weightkg: 28,
		color: "Gray",
		prevo: "Grasshole",
		evoLevel: 16,
		evos: [
			"Rectreem"
		],
		eggGroups: [
			"Grass",
			"Monster"
		],
		gen: 8
	},
	rectreem: {
		num: 69003,
		name: "Rectreem",
		types: [
			"Grass",
			"Ground"
		],
		genderRatio: {
			M: 0.875,
			F: 0.125
		},
		baseStats: {
			hp: 90,
			atk: 120,
			def: 95,
			spa: 70,
			spd: 70,
			spe: 80
		},
		abilities: {
			0: "Overgrow",
			H: "Cheek Pouch",
			S: "Analytic"
		},
		heightm: 2,
		weightkg: 100,
		color: "Gray",
		prevo: "Analgae",
		evoLevel: 36,
		eggGroups: [
			"Grass",
			"Monster"
		],
		gen: 8
	},
	arabomb: {
		num: 69004,
		name: "Arabomb",
		types: [
			"Fire"
		],
		genderRatio: {
			M: 0.875,
			F: 0.125
		},
		baseStats: {
			hp: 47,
			atk: 49,
			def: 50,
			spa: 65,
			spd: 45,
			spe: 62
		},
		abilities: {
			0: "Blaze",
			H: "Aftermath",
			S: "Sand Veil"
		},
		heightm: 0.6,
		weightkg: 8.5,
		color: "Gray",
		evos: [
			"Iguallah"
		],
		eggGroups: [
			"Dragon",
			"Monster"
		],
		gen: 8
	},
	iguallah: {
		num: 69005,
		name: "Iguallah",
		types: [
			"Fire",
			"Dark"
		],
		genderRatio: {
			M: 0.875,
			F: 0.125
		},
		baseStats: {
			hp: 65,
			atk: 75,
			def: 55,
			spa: 85,
			spd: 50,
			spe: 75
		},
		abilities: {
			0: "Blaze",
			H: "Aftermath",
			S: "Sand Veil"
		},
		heightm: 1.1,
		weightkg: 19,
		color: "Gray",
		prevo: "Arabomb",
		evoLevel: 16,
		evos: [
			"Lizakbar"
		],
		eggGroups: [
			"Dragon",
			"Monster"
		],
		gen: 8
	},
	lizakbar: {
		num: 69006,
		name: "Lizakbar",
		types: [
			"Fire",
			"Dark"
		],
		genderRatio: {
			M: 0.875,
			F: 0.125
		},
		baseStats: {
			hp: 85,
			atk: 90,
			def: 65,
			spa: 120,
			spd: 65,
			spe: 100
		},
		abilities: {
			0: "Blaze",
			H: "Aftermath",
			S: "Sand Veil"
		},
		heightm: 1.7,
		weightkg: 90.5,
		color: "Gray",
		prevo: "Iguallah",
		evoLevel: 36,
		eggGroups: [
			"Dragon",
			"Monster"
		],
		gen: 8
	},
	ejacasm: {
		num: 69007,
		name: "Ejacasm",
		types: [
			"Water"
		],
		genderRatio: {
			M: 0.875,
			F: 0.125
		},
		baseStats: {
			hp: 60,
			atk: 50,
			def: 50,
			spa: 50,
			spd: 63,
			spe: 45
		},
		abilities: {
			0: "Torrent",
			H: "Water Veil",
			S: "Unaware"
		},
		heightm: 0.5,
		weightkg: 9,
		color: "Blue",
		evos: [
			"Hosajack"
		],
		eggGroups: [
			"Water 1",
			"Monster"
		],
		gen: 8
	},
	hosajack: {
		num: 69008,
		name: "Hosajack",
		types: [
			"Water",
			"Poison"
		],
		genderRatio: {
			M: 0.875,
			F: 0.125
		},
		baseStats: {
			hp: 85,
			atk: 55,
			def: 60,
			spa: 64,
			spd: 77,
			spe: 64
		},
		abilities: {
			0: "Torrent",
			H: "Water Veil",
			S: "Unaware"
		},
		heightm: 1,
		weightkg: 22.5,
		color: "Blue",
		prevo: "Ejacasm",
		evoLevel: 16,
		evos: [
			"Condoom"
		],
		eggGroups: [
			"Water 1",
			"Monster"
		],
		gen: 8
	},
	condoom: {
		num: 69009,
		name: "Condoom",
		types: [
			"Water",
			"Poison"
		],
		genderRatio: {
			M: 0.875,
			F: 0.125
		},
		baseStats: {
			hp: 120,
			atk: 60,
			def: 85,
			spa: 85,
			spd: 100,
			spe: 75
		},
		abilities: {
			0: "Torrent",
			H: "Water Veil",
			S: "Unaware"
		},
		heightm: 1.6,
		weightkg: 85.5,
		color: "Blue",
		prevo: "Hosajack",
		evoLevel: 36,
		eggGroups: [
			"Water 1",
			"Monster"
		],
		gen: 8
	},
	squirrap: {
		num: 69010,
		name: "Squirrap",
		types: [
			"Normal"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 40,
			atk: 53,
			def: 39,
			spa: 43,
			spd: 44,
			spe: 58
		},
		abilities: {
			0: "Soundproof",
			H: "Boombox",
			S: "Moxie"
		},
		heightm: 0.3,
		weightkg: 3.5,
		color: "Brown",
		evos: [
			"Gampster"
		],
		eggGroups: [
			"Field"
		],
		gen: 8
	},
	gampster: {
		num: 69011,
		name: "Gampster",
		types: [
			"Normal"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 89,
			atk: 85,
			def: 51,
			spa: 79,
			spd: 54,
			spe: 87
		},
		abilities: {
			0: "Soundproof",
			H: "Boombox",
			S: "Moxie"
		},
		heightm: 1,
		weightkg: 25.2,
		color: "Brown",
		prevo: "Squirrap",
		evoLevel: 17,
		eggGroups: [
			"Field"
		],
		gen: 8
	},
	kengeon: {
		num: 69012,
		name: "Kengeon",
		types: [
			"Normal",
			"Flying"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 37,
			atk: 53,
			def: 45,
			spa: 36,
			spd: 48,
			spe: 55
		},
		abilities: {
			0: "Early Bird",
			1: "Shed Skin",
			H: "Aroma Veil",
			S: "Flame Body"
		},
		heightm: 0.3,
		weightkg: 1.8,
		color: "Brown",
		evos: [
			"Frieden"
		],
		eggGroups: [
			"Flying"
		],
		gen: 8
	},
	frieden: {
		num: 69013,
		name: "Frieden",
		types: [
			"Normal",
			"Flying"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 58,
			atk: 65,
			def: 59,
			spa: 55,
			spd: 65,
			spe: 65
		},
		abilities: {
			0: "Gale Wings",
			1: "Rough Skin",
			H: "Aroma Veil",
			S: "Flame Body"
		},
		heightm: 1.1,
		weightkg: 30,
		color: "Brown",
		prevo: "Kengeon",
		evoLevel: 15,
		evos: [
			"Corooster"
		],
		eggGroups: [
			"Flying"
		],
		gen: 8
	},
	corooster: {
		num: 69014,
		name: "Corooster",
		types: [
			"Normal",
			"Flying"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 77,
			atk: 87,
			def: 77,
			spa: 67,
			spd: 77,
			spe: 87
		},
		abilities: {
			0: "Gale Wings",
			1: "Rough Skin",
			H: "Aroma Veil",
			S: "Flame Body"
		},
		heightm: 1.5,
		weightkg: 39.5,
		color: "Brown",
		prevo: "Frieden",
		evoLevel: 30,
		eggGroups: [
			"Flying"
		],
		gen: 8
	},
	curicrawl: {
		num: 69015,
		name: "Curicrawl",
		types: [
			"Bug"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 60,
			atk: 35,
			def: 45,
			spa: 10,
			spd: 20,
			spe: 20
		},
		abilities: {
			0: "Shield Dust",
			1: "Prankster",
			H: "Guts",
			S: "Friend Guard"
		},
		heightm: 1,
		weightkg: 29.4,
		color: "Yellow",
		evos: [
			"Gutsicoon"
		],
		eggGroups: [
			"Bug"
		],
		gen: 8
	},
	gutsicoon: {
		num: 69016,
		name: "Gutsicoon",
		types: [
			"Bug"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 70,
			atk: 40,
			def: 70,
			spa: 25,
			spd: 30,
			spe: 20
		},
		abilities: {
			0: "Shield Dust",
			1: "Prankster",
			H: "Guts",
			S: "Friend Guard"
		},
		heightm: 1,
		weightkg: 29.9,
		color: "Green",
		prevo: "Curicrawl",
		evoLevel: 8,
		evos: [
			"Gutsifly"
		],
		eggGroups: [
			"Bug"
		],
		gen: 8
	},
	gutsifly: {
		num: 69017,
		name: "Gutsifly",
		types: [
			"Bug",
			"Flying"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 105,
			atk: 100,
			def: 110,
			spa: 25,
			spd: 40,
			spe: 30
		},
		abilities: {
			0: "Shield Dust",
			1: "Prankster",
			H: "Guts",
			S: "Friend Guard"
		},
		heightm: 1.1,
		weightkg: 30,
		color: "Yellow",
		prevo: "Gutsicoon",
		evoLevel: 12,
		eggGroups: [
			"Bug"
		],
		gen: 8
	},
	larvades: {
		num: 69018,
		name: "Larvades",
		types: [
			"Bug"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 35,
			atk: 30,
			def: 35,
			spa: 55,
			spd: 50,
			spe: 55
		},
		abilities: {
			0: "Compound Eyes",
			1: "Shield Dust",
			H: "Poison Point",
			S: "Immunity"
		},
		heightm: 0.3,
		weightkg: 2.9,
		color: "Gray",
		evos: [
			"Proboskito"
		],
		eggGroups: [
			"Bug"
		],
		gen: 8
	},
	proboskito: {
		num: 69019,
		name: "Proboskito",
		types: [
			"Bug",
			"Electric"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 55,
			atk: 85,
			def: 40,
			spa: 85,
			spd: 55,
			spe: 125
		},
		abilities: {
			0: "Compound Eyes",
			1: "Static",
			H: "Poison Point",
			S: "Toxic Boost"
		},
		heightm: 1,
		weightkg: 30,
		color: "Gray",
		prevo: "Larvades",
		evoLevel: 12,
		evos: [
			"Venowatt"
		],
		eggGroups: [
			"Bug"
		],
		gen: 8
	},
	clovour: {
		num: 69020,
		name: "Clovour",
		types: [
			"Grass"
		],
		genderRatio: {
			M: 0.25,
			F: 0.75
		},
		baseStats: {
			hp: 60,
			atk: 60,
			def: 52,
			spa: 20,
			spd: 52,
			spe: 71
		},
		abilities: {
			0: "Natural Cure",
			1: "Sap Sipper",
			H: "Super Luck",
			S: "Serene Grace"
		},
		heightm: 0.3,
		weightkg: 2,
		color: "Green",
		evos: [
			"Chanolour",
			"Kuuroba"
		],
		eggGroups: [
			"Fairy",
			"Grass"
		],
		gen: 8
	},
	chanolour: {
		num: 69021,
		name: "Chanolour",
		types: [
			"Grass",
			"Steel"
		],
		genderRatio: {
			M: 0.25,
			F: 0.75
		},
		baseStats: {
			hp: 90,
			atk: 120,
			def: 85,
			spa: 40,
			spd: 85,
			spe: 110
		},
		abilities: {
			0: "Natural Cure",
			1: "Sap Sipper",
			H: "Super Luck",
			S: "Serene Grace"
		},
		heightm: 1.2,
		weightkg: 22.5,
		color: "Green",
		prevo: "Clovour",
		evoType: "useItem",
		evoItem: "Leaf Stone",
		eggGroups: [
			"Fairy",
			"Grass"
		],
		gen: 8
	},
	nauseon: {
		num: 69022,
		name: "Nauseon",
		types: [
			"Poison"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 55,
			atk: 55,
			def: 55,
			spa: 55,
			spd: 55,
			spe: 55
		},
		abilities: {
			0: "Poison Point",
			H: "Poison Touch",
			S: "Healer"
		},
		heightm: 0.3,
		weightkg: 0.6,
		color: "Blue",
		evos: [
			"Hazmate",
			"Ebolable"
		],
		eggGroups: [
			"Monster",
			"Amorphous"
		],
		gen: 8
	},
	hazmate: {
		num: 69023,
		name: "Hazmate",
		types: [
			"Poison",
			"Fighting"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 95,
			atk: 120,
			def: 90,
			spa: 55,
			spd: 70,
			spe: 70
		},
		abilities: {
			0: "Overcoat",
			H: "Poison Touch",
			S: "Healer"
		},
		heightm: 0.7,
		weightkg: 33.4,
		color: "Yellow",
		prevo: "Nauseon",
		evoLevel: 25,
		evoCondition: "with an Atk stat > its SpAtt",
		eggGroups: [
			"Monster",
			"Amorphous"
		],
		gen: 8
	},
	ebolable: {
		num: 69024,
		name: "Ebolable",
		types: [
			"Poison",
			"Dark"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 70,
			atk: 55,
			def: 70,
			spa: 120,
			spd: 90,
			spe: 95
		},
		abilities: {
			0: "Liquid Ooze",
			H: "Poison Touch",
			S: "Healer"
		},
		heightm: 1,
		weightkg: 14.5,
		color: "Pink",
		prevo: "Nauseon",
		evoLevel: 25,
		evoCondition: "with an Atk stat < its SpAtt",
		eggGroups: [
			"Monster",
			"Amorphous"
		],
		gen: 8
	},
	pikotton: {
		num: 69025,
		name: "Pikotton",
		types: [
			"Electric",
			"Fairy"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 55,
			atk: 40,
			def: 85,
			spa: 90,
			spd: 75,
			spe: 75
		},
		abilities: {
			0: "Static",
			1: "Sweet Veil",
			H: "Lightning Rod",
			S: "Fluffy"
		},
		heightm: 0.4,
		weightkg: 3.5,
		color: "Yellow",
		eggGroups: [
			"Fairy",
			"Field"
		],
		gen: 8
	},
	birdhouse: {
		num: 69026,
		name: "Birdhouse",
		types: [
			"Normal",
			"Flying"
		],
		gender: "N",
		baseStats: {
			hp: 70,
			atk: 77,
			def: 105,
			spa: 50,
			spd: 105,
			spe: 70
		},
		abilities: {
			0: "Sturdy",
			H: "Rattled",
			S: "Wooden Guard"
		},
		heightm: 1.4,
		weightkg: 29.5,
		color: "Brown",
		eggGroups: [
			"Flying"
		],
		gen: 8
	},
	lanshil: {
		num: 69027,
		name: "Lanshil",
		types: [
			"Rock"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 48,
			atk: 50,
			def: 75,
			spa: 40,
			spd: 62,
			spe: 50
		},
		abilities: {
			0: "Rock Head",
			1: "Sturdy",
			H: "Sand Force",
			S: "Sand Veil"
		},
		heightm: 0.4,
		weightkg: 20,
		color: "Black",
		evos: [
			"Middril"
		],
		eggGroups: [
			"Mineral"
		],
		gen: 8
	},
	middril: {
		num: 69028,
		name: "Middril",
		types: [
			"Rock"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 65,
			atk: 75,
			def: 87,
			spa: 45,
			spd: 75,
			spe: 60
		},
		abilities: {
			0: "Rock Head",
			1: "Sturdy",
			H: "Sand Force",
			S: "Sand Veil"
		},
		heightm: 1,
		weightkg: 44.2,
		color: "Black",
		prevo: "Lanshil",
		evoLevel: 19,
		evos: [
			"Shurismash"
		],
		eggGroups: [
			"Mineral"
		],
		gen: 8
	},
	shurismash: {
		num: 69029,
		name: "Shurismash",
		types: [
			"Rock",
			"Steel"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 85,
			atk: 100,
			def: 110,
			spa: 48,
			spd: 95,
			spe: 77
		},
		abilities: {
			0: "Rock Head",
			1: "Sturdy",
			H: "Sand Force",
			S: "Victory Star"
		},
		heightm: 1.4,
		weightkg: 64.5,
		color: "Black",
		prevo: "Middril",
		evoLevel: 36,
		eggGroups: [
			"Mineral"
		],
		gen: 8
	},
	maymay: {
		num: 69030,
		name: "Maymay",
		types: [
			"Normal"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 50,
			atk: 48,
			def: 52,
			spa: 37,
			spd: 40,
			spe: 52
		},
		abilities: {
			0: "Hustle",
			1: "Normalize",
			H: "Sheer Force",
			S: "Steadfast"
		},
		heightm: 0.6,
		weightkg: 11,
		color: "Brown",
		evos: [
			"Memenace"
		],
		eggGroups: [
			"Amorphous",
			"Field"
		],
		gen: 8
	},
	memenace: {
		num: 69031,
		name: "Memenace",
		types: [
			"Normal"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 106,
			atk: 83,
			def: 87,
			spa: 72,
			spd: 85,
			spe: 69
		},
		abilities: {
			0: "Hustle",
			1: "Normalize",
			H: "Sheer Force",
			S: "Steadfast"
		},
		heightm: 1.1,
		weightkg: 32.6,
		color: "Brown",
		prevo: "Maymay",
		evoLevel: 23,
		eggGroups: [
			"Amorphous",
			"Field"
		],
		gen: 8
	},
	vandash: {
		num: 69032,
		name: "Vandash",
		types: [
			"Dark",
			"Grass"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 70,
			atk: 95,
			def: 55,
			spa: 70,
			spd: 55,
			spe: 95
		},
		abilities: {
			0: "Guts",
			1: "Quick Feet",
			H: "Pickpocket",
			S: "Stakeout"
		},
		heightm: 1.7,
		weightkg: 55.6,
		color: "Black",
		eggGroups: [
			"Human-Like"
		],
		gen: 8
	},
	piguson: {
		num: 69033,
		name: "Piguson",
		types: [
			"Fighting",
			"Normal"
		],
		gender: "M",
		baseStats: {
			hp: 95,
			atk: 95,
			def: 95,
			spa: 50,
			spd: 55,
			spe: 50
		},
		abilities: {
			0: "Guts",
			1: "Scrappy",
			H: "Frisk",
			S: "Stakeout"
		},
		heightm: 1.3,
		weightkg: 110.4,
		color: "White",
		eggGroups: [
			"Monster"
		],
		gen: 8
	},
	armando: {
		num: 69034,
		name: "Armando",
		types: [
			"Fighting"
		],
		genderRatio: {
			M: 0.875,
			F: 0.125
		},
		baseStats: {
			hp: 45,
			atk: 80,
			def: 43,
			spa: 20,
			spd: 33,
			spe: 70
		},
		abilities: {
			0: "Inner Focus",
			1: "Iron Fist",
			H: "Skill Link",
			S: "Sticky Hold"
		},
		heightm: 0.8,
		weightkg: 19.5,
		color: "Red",
		evos: [
			"Muscledude"
		],
		eggGroups: [
			"Amorphous"
		],
		gen: 8
	},
	muscledude: {
		num: 69035,
		name: "Muscledude",
		types: [
			"Fighting"
		],
		genderRatio: {
			M: 0.875,
			F: 0.125
		},
		baseStats: {
			hp: 60,
			atk: 110,
			def: 55,
			spa: 36,
			spd: 55,
			spe: 80
		},
		abilities: {
			0: "Inner Focus",
			1: "Iron Fist",
			H: "Skill Link",
			S: "Sticky Hold"
		},
		heightm: 0.8,
		weightkg: 41.8,
		color: "Red",
		prevo: "Armando",
		evoLevel: 18,
		evos: [
			"Tripecs"
		],
		eggGroups: [
			"Amorphous"
		],
		gen: 8
	},
	tripecs: {
		num: 69036,
		name: "Tripecs",
		types: [
			"Fighting"
		],
		genderRatio: {
			M: 0.875,
			F: 0.125
		},
		baseStats: {
			hp: 80,
			atk: 130,
			def: 70,
			spa: 43,
			spd: 70,
			spe: 90
		},
		abilities: {
			0: "Inner Focus",
			1: "Iron Fist",
			H: "Skill Link",
			S: "Sticky Hold"
		},
		heightm: 1.7,
		weightkg: 95,
		color: "Red",
		prevo: "Muscledude",
		evoLevel: 36,
		eggGroups: [
			"Amorphous"
		],
		gen: 8
	},
	semdrop: {
		num: 69037,
		name: "Semdrop",
		types: [
			"Normal"
		],
		genderRatio: {
			M: 0.875,
			F: 0.125
		},
		baseStats: {
			hp: 80,
			atk: 35,
			def: 65,
			spa: 50,
			spd: 75,
			spe: 40
		},
		abilities: {
			0: "Insomnia",
			1: "Immunity",
			H: "Dry Skin",
			S: "Liquid Ooze"
		},
		heightm: 0.9,
		weightkg: 30,
		color: "Gray",
		evos: [
			"Semrust"
		],
		eggGroups: [
			"Amorphous",
			"Monster"
		],
		gen: 8
	},
	semrust: {
		num: 69038,
		name: "Semrust",
		types: [
			"Normal",
			"Ground"
		],
		genderRatio: {
			M: 0.875,
			F: 0.125
		},
		baseStats: {
			hp: 110,
			atk: 50,
			def: 90,
			spa: 70,
			spd: 105,
			spe: 40
		},
		abilities: {
			0: "Insomnia",
			1: "Immunity",
			H: "Dry Skin",
			S: "Liquid Ooze"
		},
		heightm: 0.9,
		weightkg: 40.5,
		color: "Yellow",
		prevo: "Semdrop",
		evoLevel: 30,
		evos: [
			"Semdemen"
		],
		eggGroups: [
			"Amorphous",
			"Monster"
		],
		gen: 8
	},
	furnazi: {
		num: 69039,
		name: "Furnazi",
		types: [
			"Fire",
			"Rock"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 35,
			atk: 40,
			def: 100,
			spa: 80,
			spd: 75,
			spe: 20
		},
		abilities: {
			0: "Flame Body",
			1: "Solid Rock",
			H: "White Smoke",
			S: "Justified"
		},
		heightm: 0.9,
		weightkg: 51.2,
		color: "Red",
		evos: [
			"Finasoven"
		],
		eggGroups: [
			"Mineral"
		],
		gen: 8
	},
	finasoven: {
		num: 69040,
		name: "Finasoven",
		types: [
			"Fire",
			"Rock"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 75,
			atk: 75,
			def: 130,
			spa: 125,
			spd: 105,
			spe: 35
		},
		abilities: {
			0: "Flame Body",
			1: "Solid Rock",
			H: "White Smoke",
			S: "Justified"
		},
		heightm: 1.7,
		weightkg: 130,
		color: "Red",
		prevo: "Furnazi",
		evoType: "useItem",
		evoItem: "Fire Stone",
		eggGroups: [
			"Mineral"
		],
		gen: 8
	},
	troubait: {
		num: 69041,
		name: "Troubait",
		types: [
			"Water"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 45,
			atk: 50,
			def: 50,
			spa: 40,
			spd: 60,
			spe: 45
		},
		abilities: {
			0: "Water Veil",
			H: "Prankster",
			S: "Hustle"
		},
		heightm: 0.4,
		weightkg: 7,
		color: "Blue",
		evos: [
			"Tulure"
		],
		eggGroups: [
			"Monster",
			"Water 2"
		],
		gen: 8
	},
	tulure: {
		num: 69042,
		name: "Tulure",
		types: [
			"Water"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 65,
			atk: 70,
			def: 70,
			spa: 58,
			spd: 62,
			spe: 70
		},
		abilities: {
			0: "Water Veil",
			H: "Prankster",
			S: "Hustle"
		},
		heightm: 1.2,
		weightkg: 24,
		color: "Blue",
		prevo: "Troubait",
		evoLevel: 15,
		evos: [
			"Monstrap",
			"Baitmaster"
		],
		eggGroups: [
			"Monster",
			"Water 2"
		],
		gen: 8
	},
	monstrap: {
		num: 69043,
		name: "Monstrap",
		types: [
			"Water",
			"Dark"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 115,
			atk: 105,
			def: 85,
			spa: 69,
			spd: 83,
			spe: 70
		},
		abilities: {
			0: "Intimidate",
			H: "Oblivious",
			S: "Defiant"
		},
		heightm: 2.3,
		weightkg: 93.7,
		color: "Blue",
		prevo: "Tulure",
		evoType: "useItem",
		evoItem: "Water Stone",
		eggGroups: [
			"Monster",
			"Water 2"
		],
		gen: 8
	},
	pixila: {
		num: 69044,
		name: "Pixila",
		types: [
			"Bug",
			"Fairy"
		],
		genderRatio: {
			M: 0.25,
			F: 0.75
		},
		baseStats: {
			hp: 55,
			atk: 55,
			def: 50,
			spa: 45,
			spd: 65,
			spe: 55
		},
		abilities: {
			0: "Natural Cure",
			1: "Cute Charm",
			H: "Sap Sipper",
			S: "Regenerator"
		},
		heightm: 0.6,
		weightkg: 13.6,
		color: "Green",
		evos: [
			"Fairileon"
		],
		eggGroups: [
			"Fairy",
			"Bug"
		],
		gen: 8
	},
	fairileon: {
		num: 69045,
		name: "Fairileon",
		types: [
			"Bug",
			"Fairy"
		],
		genderRatio: {
			M: 0.25,
			F: 0.75
		},
		baseStats: {
			hp: 110,
			atk: 65,
			def: 65,
			spa: 95,
			spd: 130,
			spe: 60
		},
		abilities: {
			0: "Natural Cure",
			1: "Shield Dust",
			H: "Sap Sipper",
			S: "Regenerator"
		},
		heightm: 0.9,
		weightkg: 22.6,
		color: "Green",
		prevo: "Pixila",
		evoLevel: 26,
		eggGroups: [
			"Fairy",
			"Bug"
		],
		gen: 8
	},
	wedgard: {
		num: 69046,
		name: "Wedgard",
		types: [
			"Ground"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 50,
			atk: 80,
			def: 60,
			spa: 10,
			spd: 50,
			spe: 75
		},
		abilities: {
			0: "Arena Trap",
			1: "Sand Veil",
			H: "Rough Skin",
			S: "Tough Claws"
		},
		heightm: 0.7,
		weightkg: 20.5,
		color: "Brown",
		evos: [
			"Knokedge"
		],
		eggGroups: [
			"Monster"
		],
		gen: 8
	},
	knokedge: {
		num: 69047,
		name: "Knokedge",
		types: [
			"Ground"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 110,
			atk: 112,
			def: 95,
			spa: 20,
			spd: 50,
			spe: 98
		},
		abilities: {
			0: "Arena Trap",
			1: "Sand Veil",
			H: "Rough Skin",
			S: "Tough Claws"
		},
		heightm: 1.4,
		weightkg: 56,
		color: "Brown",
		prevo: "Wedgard",
		evoLevel: 29,
		eggGroups: [
			"Monster"
		],
		gen: 8
	},
	ribbizap: {
		num: 69048,
		name: "Ribbizap",
		types: [
			"Electric"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 66,
			atk: 50,
			def: 57,
			spa: 112,
			spd: 73,
			spe: 102
		},
		abilities: {
			0: "Lightning Rod",
			1: "Dry Skin",
			H: "Motor Drive",
			S: "Liquid Voice"
		},
		heightm: 0.3,
		weightkg: 20,
		color: "Green",
		eggGroups: [
			"Water 1"
		],
		gen: 8
	},
	elephas: {
		num: 69049,
		name: "Elephas",
		types: [
			"Psychic",
			"Normal"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 85,
			atk: 45,
			def: 105,
			spa: 90,
			spd: 115,
			spe: 60
		},
		abilities: {
			0: "Telepathy",
			1: "Shed Skin",
			H: "Levitate",
			S: "Thick Fat"
		},
		heightm: 1.1,
		weightkg: 120,
		color: "Pink",
		eggGroups: [
			"Field"
		],
		gen: 8
	},
	seamapan: {
		num: 69050,
		name: "Seamapan",
		types: [
			"Water",
			"Normal"
		],
		genderRatio: {
			M: 0.125,
			F: 0.875
		},
		baseStats: {
			hp: 51,
			atk: 31,
			def: 70,
			spa: 60,
			spd: 81,
			spe: 106
		},
		abilities: {
			0: "Thick Fat",
			1: "Huge Power",
			H: "Cute Charm",
			S: "Water Bubble"
		},
		heightm: 0.6,
		weightkg: 9,
		color: "Pink",
		eggGroups: [
			"Water 2"
		],
		gen: 8
	},
	caroline: {
		num: 69051,
		name: "Caroline",
		types: [
			"Ground",
			"Flying"
		],
		gender: "F",
		baseStats: {
			hp: 65,
			atk: 80,
			def: 65,
			spa: 95,
			spd: 70,
			spe: 100
		},
		abilities: {
			0: "Super Luck",
			H: "Justified",
			S: "Aerilate"
		},
		heightm: 1.7,
		weightkg: 55,
		color: "Brown",
		eggGroups: [
			"Flying"
		],
		gen: 8
	},
	chompest: {
		num: 69052,
		name: "Chompest",
		types: [
			"Rock",
			"Dark"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 80,
			atk: 100,
			def: 85,
			spa: 50,
			spd: 70,
			spe: 40
		},
		abilities: {
			0: "Intimidate",
			H: "Pickup",
			S: "Jewelry"
		},
		heightm: 1,
		weightkg: 100,
		color: "Brown",
		evos: [
			"Vaultevour"
		],
		eggGroups: [
			"Amorphous",
			"Mineral"
		],
		gen: 8
	},
	masdawg: {
		num: 69053,
		name: "Masdawg",
		types: [
			"Normal"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 80,
			atk: 60,
			def: 65,
			spa: 55,
			spd: 65,
			spe: 112
		},
		abilities: {
			0: "Ball Fetch",
			1: "Cute Charm",
			H: "Sand Veil",
			S: "Swift Swim"
		},
		heightm: 0.6,
		weightkg: 31.8,
		color: "Yellow",
		evos: [
			"Pasdawg"
		],
		eggGroups: [
			"Field"
		],
		gen: 8
	},
	pasdawg: {
		num: 69054,
		name: "Pasdawg",
		types: [
			"Normal",
			"Steel"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 112,
			atk: 90,
			def: 105,
			spa: 55,
			spd: 85,
			spe: 60
		},
		abilities: {
			0: "Ball Fetch",
			1: "Intimidate",
			H: "Sand Force",
			S: "Swift Swim"
		},
		heightm: 1.4,
		weightkg: 63.6,
		color: "Gray",
		prevo: "Masdawg",
		evoLevel: 35,
		eggGroups: [
			"Field"
		],
		gen: 8
	},
	spanke: {
		num: 69055,
		name: "Spanke",
		types: [
			"Grass",
			"Fighting"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 80,
			atk: 91,
			def: 73,
			spa: 16,
			spd: 34,
			spe: 42
		},
		abilities: {
			0: "Shed Skin",
			1: "Oblivious",
			H: "Skill Link",
			S: "Iron Fist"
		},
		heightm: 1.7,
		weightkg: 6.8,
		color: "Green",
		evos: [
			"Anaconduke"
		],
		eggGroups: [
			"Field",
			"Dragon"
		],
		gen: 8
	},
	anaconduke: {
		num: 69056,
		name: "Anaconduke",
		types: [
			"Grass",
			"Fighting"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 110,
			atk: 112,
			def: 91,
			spa: 20,
			spd: 50,
			spe: 100
		},
		abilities: {
			0: "Shed Skin",
			1: "Oblivious",
			H: "Skill Link",
			S: "Limber"
		},
		heightm: 3.1,
		weightkg: 62.3,
		color: "Green",
		prevo: "Spanke",
		evoLevel: 28,
		eggGroups: [
			"Field",
			"Dragon"
		],
		gen: 8
	},
	fishnism: {
		num: 69057,
		name: "Fishnism",
		types: [
			"Water",
			"Psychic"
		],
		genderRatio: {
			M: 0.125,
			F: 0.875
		},
		baseStats: {
			hp: 60,
			atk: 55,
			def: 75,
			spa: 40,
			spd: 80,
			spe: 85
		},
		abilities: {
			0: "Rivalry",
			1: "Synchronize",
			H: "Gluttony",
			S: "Rattled"
		},
		heightm: 0.4,
		weightkg: 1.9,
		color: "Pink",
		evos: [
			"Sjwhale"
		],
		eggGroups: [
			"Water 2"
		],
		gen: 8
	},
	sjwhale: {
		num: 69058,
		name: "Sjwhale",
		types: [
			"Water",
			"Psychic"
		],
		genderRatio: {
			M: 0.125,
			F: 0.875
		},
		baseStats: {
			hp: 115,
			atk: 65,
			def: 95,
			spa: 50,
			spd: 100,
			spe: 90
		},
		abilities: {
			0: "Rivalry",
			1: "Synchronize",
			H: "Gluttony",
			S: "Thick Fat"
		},
		heightm: 2,
		weightkg: 352,
		color: "Blue",
		prevo: "Fishnism",
		evoLevel: 35,
		eggGroups: [
			"Water 2"
		],
		gen: 8
	},
	chezetta: {
		num: 69059,
		name: "Chezetta",
		types: [
			"Fairy",
			"Fire"
		],
		genderRatio: {
			M: 0.125,
			F: 0.875
		},
		baseStats: {
			hp: 60,
			atk: 40,
			def: 70,
			spa: 69,
			spd: 70,
			spe: 30
		},
		abilities: {
			0: "Gooey",
			1: "Sticky Hold",
			H: "Cute Charm",
			S: "Water Absorb"
		},
		heightm: 1.5,
		weightkg: 40,
		color: "Brown",
		evos: [
			"Mozzamazel"
		],
		eggGroups: [
			"Amorphous",
			"Human-Like"
		],
		gen: 8
	},
	mozzamazel: {
		num: 69060,
		name: "Mozzamazel",
		types: [
			"Fairy",
			"Fire"
		],
		genderRatio: {
			M: 0.125,
			F: 0.875
		},
		baseStats: {
			hp: 105,
			atk: 69,
			def: 105,
			spa: 95,
			spd: 105,
			spe: 40
		},
		abilities: {
			0: "Gooey",
			1: "Sticky Hold",
			H: "Cute Charm",
			S: "Water Absorb"
		},
		heightm: 1.9,
		weightkg: 80,
		color: "Brown",
		prevo: "Chezetta",
		evoType: "levelFriendship",
		eggGroups: [
			"Amorphous",
			"Human-Like"
		],
		gen: 8
	},
	krokling: {
		num: 69061,
		name: "Krokling",
		types: [
			"Ground",
			"Grass"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 70,
			atk: 90,
			def: 60,
			spa: 35,
			spd: 35,
			spe: 30
		},
		abilities: {
			0: "Rock Head",
			1: "Thick Fat",
			H: "Reckless",
			S: "Rivalry"
		},
		heightm: 0.9,
		weightkg: 128.3,
		color: "Green",
		evos: [
			"Krokizon"
		],
		eggGroups: [
			"Monster",
			"Dragon"
		],
		gen: 8
	},
	krokizon: {
		num: 69062,
		name: "Krokizon",
		types: [
			"Ground",
			"Grass"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 110,
			atk: 130,
			def: 100,
			spa: 65,
			spd: 65,
			spe: 50
		},
		abilities: {
			0: "Rock Head",
			1: "Thick Fat",
			H: "Reckless",
			S: "Rivalry"
		},
		heightm: 2.6,
		weightkg: 283.9,
		color: "Green",
		prevo: "Krokling",
		evoLevel: 39,
		eggGroups: [
			"Monster",
			"Dragon"
		],
		gen: 8
	},
	conchilla: {
		num: 69063,
		name: "Conchilla",
		types: [
			"Normal"
		],
		genderRatio: {
			M: 0.25,
			F: 0.75
		},
		baseStats: {
			hp: 65,
			atk: 45,
			def: 80,
			spa: 40,
			spd: 60,
			spe: 45
		},
		abilities: {
			0: "Cute Charm",
			1: "Serene Grace",
			H: "Water Compaction",
			S: "Hydrophile"
		},
		heightm: 0.3,
		weightkg: 4,
		color: "Brown",
		evos: [
			"Haremit"
		],
		eggGroups: [
			"Water 3",
			"Field"
		],
		gen: 8
	},
	haremit: {
		num: 69064,
		name: "Haremit",
		types: [
			"Normal",
			"Rock"
		],
		genderRatio: {
			M: 0.25,
			F: 0.75
		},
		baseStats: {
			hp: 105,
			atk: 85,
			def: 110,
			spa: 60,
			spd: 90,
			spe: 75
		},
		abilities: {
			0: "Shell Armor",
			1: "Serene Grace",
			H: "Water Compaction",
			S: "Hydrophile"
		},
		heightm: 0.4,
		weightkg: 45.5,
		color: "Brown",
		prevo: "Conchilla",
		evoLevel: 29,
		eggGroups: [
			"Water 3",
			"Field"
		],
		gen: 8
	},
	coolcube: {
		num: 69065,
		name: "Coolcube",
		types: [
			"Ice"
		],
		gender: "N",
		baseStats: {
			hp: 50,
			atk: 30,
			def: 64,
			spa: 58,
			spd: 67,
			spe: 20
		},
		abilities: {
			0: "Snow Cloak",
			1: "Ice Body",
			H: "Clear Body",
			S: "Weak Armor"
		},
		heightm: 0.6,
		weightkg: 10.4,
		color: "Blue",
		evos: [
			"Tankube"
		],
		eggGroups: [
			"Amorphous",
			"Fairy"
		],
		gen: 8
	},
	tankube: {
		num: 69066,
		name: "Tankube",
		types: [
			"Ice"
		],
		gender: "N",
		baseStats: {
			hp: 80,
			atk: 50,
			def: 94,
			spa: 110,
			spd: 106,
			spe: 58
		},
		abilities: {
			0: "Swift Swim",
			1: "Ice Body",
			H: "Clear Body",
			S: "Weak Armor"
		},
		heightm: 1.4,
		weightkg: 100,
		color: "Blue",
		prevo: "Coolcube",
		evoLevel: 27,
		evos: [
			"Fabkube"
		],
		eggGroups: [
			"Amorphous",
			"Fairy"
		],
		gen: 8
	},
	fabkube: {
		num: 69067,
		name: "Fabkube",
		types: [
			"Ice",
			"Fairy"
		],
		gender: "N",
		baseStats: {
			hp: 85,
			atk: 40,
			def: 79,
			spa: 125,
			spd: 96,
			spe: 105
		},
		abilities: {
			0: "Levitate",
			1: "Ice Body",
			H: "Clear Body",
			S: "Dazzling"
		},
		heightm: 2.5,
		weightkg: 80,
		color: "Blue",
		prevo: "Tankube",
		evoType: "useItem",
		evoItem: "Sun Stone",
		eggGroups: [
			"Amorphous",
			"Fairy"
		],
		gen: 8
	},
	smogaroben: {
		num: 69068,
		name: "Smogaroben",
		types: [
			"Poison",
			"Flying"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 68,
			atk: 65,
			def: 41,
			spa: 48,
			spd: 43,
			spe: 86
		},
		abilities: {
			0: "Poison Point",
			1: "White Smoke",
			H: "Technician",
			S: "Regenerator"
		},
		heightm: 0.6,
		weightkg: 9,
		color: "Purple",
		evos: [
			"Smoxilon"
		],
		eggGroups: [
			"Undiscovered"
		],
		gen: 8
	},
	smoxilon: {
		num: 69069,
		name: "Smoxilon",
		types: [
			"Poison",
			"Flying"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 78,
			atk: 85,
			def: 71,
			spa: 78,
			spd: 73,
			spe: 116
		},
		abilities: {
			0: "Poison Point",
			1: "White Smoke",
			H: "Technician",
			S: "Regenerator"
		},
		heightm: 1.6,
		weightkg: 40.5,
		color: "Purple",
		prevo: "Smogaroben",
		evoLevel: 30,
		eggGroups: [
			"Flying"
		],
		gen: 8
	},
	machmona: {
		num: 69070,
		name: "Machmona",
		types: [
			"Fighting",
			"Ghost"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 80,
			atk: 120,
			def: 80,
			spa: 60,
			spd: 80,
			spe: 100
		},
		abilities: {
			0: "Pressure",
			1: "Vital Spirit",
			H: "Iron Fist",
			S: "Moxie"
		},
		heightm: 0.9,
		weightkg: 4.4,
		color: "Purple",
		eggGroups: [
			"Amorphous",
			"Human-Like"
		],
		gen: 8
	},
	bacub: {
		num: 69071,
		name: "Bacub",
		types: [
			"Normal",
			"Fire"
		],
		genderRatio: {
			M: 0.75,
			F: 0.25
		},
		baseStats: {
			hp: 90,
			atk: 50,
			def: 60,
			spa: 40,
			spd: 55,
			spe: 40
		},
		abilities: {
			0: "Thick Fat",
			1: "Guts",
			H: "Flash Fire",
			S: "Aroma Veil"
		},
		heightm: 0.6,
		weightkg: 8.8,
		color: "Brown",
		evos: [
			"Urswine"
		],
		eggGroups: [
			"Field"
		],
		gen: 8
	},
	urswine: {
		num: 69072,
		name: "Urswine",
		types: [
			"Normal",
			"Fire"
		],
		genderRatio: {
			M: 0.75,
			F: 0.25
		},
		baseStats: {
			hp: 130,
			atk: 90,
			def: 80,
			spa: 60,
			spd: 60,
			spe: 50
		},
		abilities: {
			0: "Thick Fat",
			1: "Guts",
			H: "Flash Fire",
			S: "Aroma Veil"
		},
		heightm: 1.8,
		weightkg: 113.4,
		color: "Brown",
		prevo: "Bacub",
		evoLevel: 32,
		eggGroups: [
			"Field"
		],
		gen: 8
	},
	moostatic: {
		num: 69073,
		name: "Moostatic",
		types: [
			"Electric"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 70,
			atk: 60,
			def: 40,
			spa: 50,
			spd: 40,
			spe: 50
		},
		abilities: {
			0: "Static",
			1: "Volt Absorb",
			H: "Sap Sipper",
			S: "Illuminate"
		},
		heightm: 0.6,
		weightkg: 19.5,
		color: "Yellow",
		evos: [
			"Mooshock"
		],
		eggGroups: [
			"Field"
		],
		gen: 8
	},
	mooshock: {
		num: 69074,
		name: "Mooshock",
		types: [
			"Electric"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 120,
			atk: 110,
			def: 80,
			spa: 100,
			spd: 90,
			spe: 30
		},
		abilities: {
			0: "Static",
			1: "Volt Absorb",
			H: "Sap Sipper",
			S: "Battery"
		},
		heightm: 1.9,
		weightkg: 92.5,
		color: "Yellow",
		prevo: "Moostatic",
		evoLevel: 28,
		eggGroups: [
			"Field"
		],
		gen: 8
	},
	pretzely: {
		num: 69075,
		name: "Pretzely",
		types: [
			"Rock",
			"Ghost"
		],
		genderRatio: {
			M: 0.875,
			F: 0.125
		},
		baseStats: {
			hp: 70,
			atk: 62,
			def: 85,
			spa: 105,
			spd: 50,
			spe: 65
		},
		abilities: {
			0: "Soundproof",
			H: "Prankster",
			S: "Ghost Note"
		},
		heightm: 1.3,
		weightkg: 2.9,
		color: "White",
		eggGroups: [
			"Human-Like",
			"Mineral"
		],
		gen: 8
	},
	deemdow: {
		num: 69076,
		name: "Deemdow",
		types: [
			"Ghost",
			"Psychic"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 50,
			atk: 75,
			def: 40,
			spa: 85,
			spd: 60,
			spe: 50
		},
		abilities: {
			0: "Shadow Tag",
			1: "Cursed Body",
			H: "Bad Dreams",
			S: "Color Change"
		},
		heightm: 0.5,
		weightkg: 11,
		color: "Black",
		evos: [
			"Dowster"
		],
		eggGroups: [
			"Amorphous"
		],
		gen: 8
	},
	dowster: {
		num: 69077,
		name: "Dowster",
		types: [
			"Ghost",
			"Psychic"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 80,
			atk: 125,
			def: 50,
			spa: 135,
			spd: 90,
			spe: 70
		},
		abilities: {
			0: "Shadow Tag",
			1: "Cursed Body",
			H: "Bad Dreams",
			S: "Color Change"
		},
		heightm: 1.7,
		weightkg: 76.6,
		color: "Black",
		prevo: "Deemdow",
		evoType: "useItem",
		evoItem: "Moon Stone",
		eggGroups: [
			"Amorphous"
		],
		gen: 8
	},
	cheerly: {
		num: 69078,
		name: "Cheerly",
		types: [
			"Fairy"
		],
		gender: "F",
		baseStats: {
			hp: 45,
			atk: 55,
			def: 40,
			spa: 35,
			spd: 50,
			spe: 60
		},
		abilities: {
			0: "Cute Charm",
			1: "Healer",
			H: "Serene Grace",
			S: "Friend Guard"
		},
		heightm: 0.8,
		weightkg: 5.4,
		color: "Pink",
		evos: [
			"Cheerific"
		],
		eggGroups: [
			"Fairy",
			"Human-Like"
		],
		gen: 8
	},
	cheerific: {
		num: 69079,
		name: "Cheerific",
		types: [
			"Fairy"
		],
		gender: "F",
		baseStats: {
			hp: 60,
			atk: 72,
			def: 68,
			spa: 52,
			spd: 88,
			spe: 95
		},
		abilities: {
			0: "Cute Charm",
			1: "Healer",
			H: "Serene Grace",
			S: "Friend Guard"
		},
		heightm: 1.2,
		weightkg: 18.6,
		color: "Pink",
		prevo: "Cheerly",
		evoLevel: 19,
		evos: [
			"Mennopaws"
		],
		eggGroups: [
			"Fairy",
			"Human-Like"
		],
		gen: 8
	},
	mennopaws: {
		num: 69080,
		name: "Mennopaws",
		types: [
			"Fairy",
			"Ground"
		],
		gender: "F",
		baseStats: {
			hp: 100,
			atk: 124,
			def: 76,
			spa: 62,
			spd: 92,
			spe: 70
		},
		abilities: {
			0: "Intimidate",
			1: "Moody",
			H: "Anger Point",
			S: "Rivalry"
		},
		heightm: 1.4,
		weightkg: 118,
		color: "Green",
		prevo: "Cheerific",
		evoLevel: 42,
		eggGroups: [
			"Undiscovered"
		],
		gen: 8
	},
	caracold: {
		num: 69081,
		name: "Caracold",
		types: [
			"Ice",
			"Electric"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 35,
			atk: 20,
			def: 30,
			spa: 75,
			spd: 40,
			spe: 80
		},
		abilities: {
			0: "Pickup",
			1: "Run Away",
			H: "Frisk",
			S: "Fur Coat"
		},
		heightm: 0.4,
		weightkg: 4.2,
		color: "Blue",
		evos: [
			"Glacialynx"
		],
		eggGroups: [
			"Field"
		],
		gen: 8
	},
	glacialynx: {
		num: 69082,
		name: "Glacialynx",
		types: [
			"Ice",
			"Electric"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 60,
			atk: 55,
			def: 50,
			spa: 110,
			spd: 70,
			spe: 101
		},
		abilities: {
			0: "Adaptability",
			1: "Volt Absorb",
			H: "Frisk",
			S: "Fur Coat"
		},
		heightm: 1,
		weightkg: 32,
		color: "Blue",
		prevo: "Caracold",
		evoLevel: 31,
		eggGroups: [
			"Field"
		],
		gen: 8
	},
	pengas: {
		num: 69083,
		name: "Pengas",
		types: [
			"Ice",
			"Fire"
		],
		genderRatio: {
			M: 0.875,
			F: 0.125
		},
		baseStats: {
			hp: 111,
			atk: 50,
			def: 76,
			spa: 95,
			spd: 76,
			spe: 92
		},
		abilities: {
			0: "Berserk",
			1: "Intimidate",
			H: "Refrigerate",
			S: "Magic Guard"
		},
		heightm: 0.9,
		weightkg: 16,
		color: "Red",
		eggGroups: [
			"Water 1",
			"Flying"
		],
		gen: 8
	},
	praeteur: {
		num: 69084,
		name: "Praeteur",
		types: [
			"Water"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 30,
			atk: 55,
			def: 70,
			spa: 45,
			spd: 80,
			spe: 20
		},
		abilities: {
			0: "Intimidate",
			1: "Cursed Body",
			H: "Unnerve",
			S: "Pressure"
		},
		heightm: 0.6,
		weightkg: 15,
		color: "Red",
		evos: [
			"Praestish"
		],
		eggGroups: [
			"Water 2"
		],
		gen: 8
	},
	praestish: {
		num: 69085,
		name: "Praestish",
		types: [
			"Water"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 69,
			atk: 98,
			def: 111,
			spa: 88,
			spd: 121,
			spe: 40
		},
		abilities: {
			0: "Intimidate",
			1: "Cursed Body",
			H: "Unnerve",
			S: "Pressure"
		},
		heightm: 1.3,
		weightkg: 39,
		color: "Red",
		prevo: "Praeteur",
		evoLevel: 27,
		eggGroups: [
			"Water 2"
		],
		gen: 8
	},
	flowre: {
		num: 69086,
		name: "Flowre",
		types: [
			"Poison",
			"Dark"
		],
		genderRatio: {
			M: 0.125,
			F: 0.875
		},
		baseStats: {
			hp: 55,
			atk: 50,
			def: 60,
			spa: 85,
			spd: 85,
			spe: 79
		},
		abilities: {
			0: "Levitate",
			H: "Levitate",
			S: "Levitate"
		},
		heightm: 0.3,
		weightkg: 2,
		color: "Green",
		evos: [
			"Florious"
		],
		eggGroups: [
			"Grass",
			"Amorphous"
		],
		gen: 8
	},
	florious: {
		num: 69087,
		name: "Florious",
		types: [
			"Poison",
			"Dark"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 75,
			atk: 80,
			def: 70,
			spa: 115,
			spd: 105,
			spe: 99
		},
		abilities: {
			0: "Vital Spirit",
			H: "Insomnia",
			S: "Vital Spirit"
		},
		heightm: 1.9,
		weightkg: 69.8,
		color: "Black",
		prevo: "Flowre",
		evoType: "useItem",
		evoItem: "Moon Stone",
		eggGroups: [
			"Grass",
			"Amorphous"
		],
		gen: 8
	},
	juarecito: {
		num: 69088,
		name: "Juarecito",
		types: [
			"Ground"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 50,
			atk: 65,
			def: 45,
			spa: 30,
			spd: 35,
			spe: 65
		},
		abilities: {
			0: "Keen Eye",
			1: "Sand Stream",
			H: "Comatose",
			S: "Sand Veil"
		},
		heightm: 0.6,
		weightkg: 21,
		color: "Brown",
		evos: [
			"Ponchito"
		],
		eggGroups: [
			"Human-Like"
		],
		gen: 8
	},
	ponchito: {
		num: 69089,
		name: "Ponchito",
		types: [
			"Ground"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 60,
			atk: 90,
			def: 60,
			spa: 40,
			spd: 50,
			spe: 80
		},
		abilities: {
			0: "Keen Eye",
			1: "Sand Stream",
			H: "Comatose",
			S: "Sand Veil"
		},
		heightm: 1,
		weightkg: 36,
		color: "Brown",
		prevo: "Juarecito",
		evoLevel: 22,
		evos: [
			"Somboludo"
		],
		eggGroups: [
			"Human-Like"
		],
		gen: 8
	},
	somboludo: {
		num: 69090,
		name: "Somboludo",
		types: [
			"Ground",
			"Steel"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 110,
			atk: 115,
			def: 75,
			spa: 65,
			spd: 70,
			spe: 100
		},
		abilities: {
			0: "Sniper",
			1: "Sand Stream",
			H: "Comatose",
			S: "Sand Veil"
		},
		heightm: 1.4,
		weightkg: 105.5,
		color: "Brown",
		prevo: "Ponchito",
		evoLevel: 40,
		eggGroups: [
			"Human-Like"
		],
		gen: 8
	},
	puppacti: {
		num: 69091,
		name: "Puppacti",
		types: [
			"Grass"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 50,
			atk: 75,
			def: 40,
			spa: 50,
			spd: 40,
			spe: 70
		},
		abilities: {
			0: "Rough Skin",
			1: "Puppeteer",
			H: "Intimidate",
			S: "Water Absorb"
		},
		heightm: 0.8,
		weightkg: 14.2,
		color: "Green",
		evos: [
			"Marionettl"
		],
		eggGroups: [
			"Grass",
			"Water 1"
		],
		gen: 8
	},
	marionettl: {
		num: 69092,
		name: "Marionettl",
		types: [
			"Grass",
			"Water"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 80,
			atk: 115,
			def: 70,
			spa: 75,
			spd: 70,
			spe: 110
		},
		abilities: {
			0: "Rough Skin",
			1: "Puppeteer",
			H: "Intimidate",
			S: "Water Absorb"
		},
		heightm: 1.3,
		weightkg: 64,
		color: "Green",
		prevo: "Puppacti",
		evoLevel: 36,
		eggGroups: [
			"Grass",
			"Water 1"
		],
		gen: 8
	},
	tittai: {
		num: 69093,
		name: "Tittai",
		types: [
			"Water",
			"Fairy"
		],
		genderRatio: {
			M: 0.25,
			F: 0.75
		},
		baseStats: {
			hp: 40,
			atk: 20,
			def: 54,
			spa: 77,
			spd: 64,
			spe: 33
		},
		abilities: {
			0: "Suction Cups",
			1: "Water Absorb",
			H: "Regenerator",
			S: "Misty Surge"
		},
		heightm: 0.3,
		weightkg: 10,
		color: "Purple",
		evos: [
			"Octai"
		],
		eggGroups: [
			"Water 1",
			"Water 2"
		],
		gen: 8
	},
	octai: {
		num: 69094,
		name: "Octai",
		types: [
			"Water",
			"Fairy"
		],
		genderRatio: {
			M: 0.25,
			F: 0.75
		},
		baseStats: {
			hp: 80,
			atk: 40,
			def: 85,
			spa: 107,
			spd: 95,
			spe: 43
		},
		abilities: {
			0: "Suction Cups",
			1: "Water Absorb",
			H: "Regenerator",
			S: "Misty Surge"
		},
		heightm: 1.2,
		weightkg: 100,
		color: "Purple",
		prevo: "Tittai",
		evoLevel: 25,
		eggGroups: [
			"Water 1",
			"Water 2"
		],
		gen: 8
	},
	charagon: {
		num: 69095,
		name: "Charagon",
		types: [
			"Steel",
			"Fire"
		],
		gender: "N",
		baseStats: {
			hp: 50,
			atk: 61,
			def: 62,
			spa: 41,
			spd: 40,
			spe: 71
		},
		abilities: {
			0: "Speed Boost",
			1: "Steam Engine",
			H: "Moxie",
			S: "Mold Breaker"
		},
		heightm: 2.8,
		weightkg: 330,
		color: "Gray",
		evos: [
			"Hyletrack"
		],
		eggGroups: [
			"Mineral"
		],
		gen: 8
	},
	hyletrack: {
		num: 69096,
		name: "Hyletrack",
		types: [
			"Steel",
			"Fire"
		],
		gender: "N",
		baseStats: {
			hp: 80,
			atk: 90,
			def: 90,
			spa: 70,
			spd: 70,
			spe: 125
		},
		abilities: {
			0: "Speed Boost",
			1: "Steam Engine",
			H: "Moxie",
			S: "Mold Breaker"
		},
		heightm: 4.1,
		weightkg: 735,
		color: "Gray",
		prevo: "Charagon",
		evoLevel: 30,
		eggGroups: [
			"Mineral"
		],
		gen: 8
	},
	euphoreal: {
		num: 69097,
		name: "Euphoreal",
		types: [
			"Dark"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 55,
			atk: 70,
			def: 70,
			spa: 40,
			spd: 60,
			spe: 76
		},
		abilities: {
			0: "Oblivious",
			H: "Rivalry",
			S: "Insomnia"
		},
		heightm: 0.5,
		weightkg: 9,
		color: "Black",
		evos: [
			"Armowite"
		],
		eggGroups: [
			"Amorphous"
		],
		gen: 8
	},
	armowite: {
		num: 69098,
		name: "Armowite",
		types: [
			"Dark"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 87,
			atk: 98,
			def: 92,
			spa: 60,
			spd: 87,
			spe: 96
		},
		abilities: {
			0: "Oblivious",
			H: "Overcoat",
			S: "Blademaster"
		},
		heightm: 1.2,
		weightkg: 39.5,
		color: "Black",
		prevo: "Euphoreal",
		evoLevel: 29,
		eggGroups: [
			"Amorphous"
		],
		gen: 8
	},
	praunch: {
		num: 69099,
		name: "Praunch",
		types: [
			"Water",
			"Fighting"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 30,
			atk: 70,
			def: 70,
			spa: 40,
			spd: 25,
			spe: 60
		},
		abilities: {
			0: "Technician",
			1: "Swift Swim",
			H: "Shell Armor",
			S: "Hydration"
		},
		heightm: 0.4,
		weightkg: 2,
		color: "Red",
		evos: [
			"Karawn"
		],
		eggGroups: [
			"Water 3 "
		],
		gen: 8
	},
	karawn: {
		num: 69100,
		name: "Karawn",
		types: [
			"Water",
			"Fighting"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 55,
			atk: 85,
			def: 85,
			spa: 65,
			spd: 65,
			spe: 85
		},
		abilities: {
			0: "Technician",
			1: "Swift Swim",
			H: "Shell Armor",
			S: "Hydration"
		},
		heightm: 0.8,
		weightkg: 8.5,
		color: "Red",
		prevo: "Praunch",
		evoLevel: 23,
		evos: [
			"Mabster"
		],
		eggGroups: [
			"Water 3 "
		],
		gen: 8
	},
	mabster: {
		num: 69101,
		name: "Mabster",
		types: [
			"Water",
			"Fighting"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 75,
			atk: 115,
			def: 85,
			spa: 85,
			spd: 85,
			spe: 95
		},
		abilities: {
			0: "Iron Fist",
			1: "Swift Swim",
			H: "Shell Armor",
			S: "Hydration"
		},
		heightm: 1.1,
		weightkg: 30.5,
		color: "Red",
		prevo: "Karawn",
		evoLevel: 40,
		eggGroups: [
			"Water 3 "
		],
		gen: 8
	},
	tricient: {
		num: 69102,
		name: "Tricient",
		types: [
			"Rock",
			"Steel"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 75,
			atk: 80,
			def: 80,
			spa: 20,
			spd: 70,
			spe: 20
		},
		abilities: {
			0: "Guts",
			1: "Rock Head",
			H: "Battle Armor",
			S: "Solid Rock"
		},
		heightm: 0.4,
		weightkg: 100,
		color: "Brown",
		evos: [
			"Tricillion"
		],
		eggGroups: [
			"Monster",
			"Mineral"
		],
		gen: 8
	},
	tricillion: {
		num: 69103,
		name: "Tricillion",
		types: [
			"Rock",
			"Steel"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 110,
			atk: 130,
			def: 130,
			spa: 20,
			spd: 110,
			spe: 21
		},
		abilities: {
			0: "Guts",
			1: "Rock Head",
			H: "Battle Armor",
			S: "Solid Rock"
		},
		heightm: 1.6,
		weightkg: 508,
		color: "Brown",
		prevo: "Tricient",
		evoLevel: 37,
		eggGroups: [
			"Monster",
			"Mineral"
		],
		gen: 8
	},
	poizookie: {
		num: 69104,
		name: "Poizookie",
		types: [
			"Rock",
			"Poison"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 50,
			atk: 72,
			def: 35,
			spa: 63,
			spd: 40,
			spe: 85
		},
		abilities: {
			0: "Poison Point",
			H: "Merciless",
			S: "Corrosion"
		},
		heightm: 0.8,
		weightkg: 29.6,
		color: "Purple",
		evos: [
			"Toxiraptor"
		],
		eggGroups: [
			"Dragon",
			"Mineral"
		],
		gen: 8
	},
	toxiraptor: {
		num: 69105,
		name: "Toxiraptor",
		types: [
			"Rock",
			"Poison"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 65,
			atk: 113,
			def: 65,
			spa: 103,
			spd: 50,
			spe: 125
		},
		abilities: {
			0: "Poison Point",
			H: "Merciless",
			S: "Corrosion"
		},
		heightm: 1.5,
		weightkg: 77.9,
		color: "Purple",
		prevo: "Poizookie",
		evoLevel: 37,
		eggGroups: [
			"Dragon",
			"Mineral"
		],
		gen: 8
	},
	sabreck: {
		num: 69106,
		name: "Sabreck",
		types: [
			"Rock",
			"Normal"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 60,
			atk: 85,
			def: 45,
			spa: 33,
			spd: 47,
			spe: 75
		},
		abilities: {
			0: "Super Luck",
			1: "Strong Jaw",
			H: "Tough Claws",
			S: "Sand Rush"
		},
		heightm: 0.6,
		weightkg: 9,
		color: "Brown",
		evos: [
			"Huntabre"
		],
		eggGroups: [
			"Field",
			"Mineral"
		],
		gen: 8
	},
	huntabre: {
		num: 69107,
		name: "Huntabre",
		types: [
			"Rock",
			"Normal"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 80,
			atk: 118,
			def: 70,
			spa: 62,
			spd: 66,
			spe: 125
		},
		abilities: {
			0: "Super Luck",
			1: "Strong Jaw",
			H: "Tough Claws",
			S: "Sand Rush"
		},
		heightm: 1.1,
		weightkg: 125.8,
		color: "Brown",
		prevo: "Sabreck",
		evoLevel: 37,
		eggGroups: [
			"Field",
			"Mineral"
		],
		gen: 8
	},
	pyralink: {
		num: 69108,
		name: "Pyralink",
		types: [
			"Dragon",
			"Fire"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 100,
			atk: 111,
			def: 83,
			spa: 106,
			spd: 54,
			spe: 52
		},
		abilities: {
			0: "Magma Armor",
			1: "Intimidate",
			H: "Multiscale",
			S: "Levitate"
		},
		heightm: 2.2,
		weightkg: 111.1,
		color: "Red",
		eggGroups: [
			"Dragon"
		],
		gen: 8
	},
	singlets: {
		num: 69109,
		name: "Singlets",
		types: [
			"Psychic",
			"Electric"
		],
		gender: "N",
		baseStats: {
			hp: 50,
			atk: 50,
			def: 50,
			spa: 50,
			spd: 50,
			spe: 51
		},
		abilities: {
			0: "Skill Link",
			1: "Analytic",
			H: "Competitive",
			S: "Klutz"
		},
		heightm: 0.6,
		weightkg: 20.1,
		color: "Red",
		evos: [
			"Dubus"
		],
		eggGroups: [
			"Amorphous"
		],
		gen: 8
	},
	dubus: {
		num: 69110,
		name: "Dubus",
		types: [
			"Psychic",
			"Electric"
		],
		gender: "N",
		baseStats: {
			hp: 69,
			atk: 69,
			def: 69,
			spa: 69,
			spd: 69,
			spe: 66
		},
		abilities: {
			0: "Skill Link",
			1: "Analytic",
			H: "Competitive",
			S: "Super Luck"
		},
		heightm: 0.9,
		weightkg: 25.5,
		color: "Red",
		prevo: "Singlets",
		evoLevel: 22,
		evos: [
			"Tripsius"
		],
		eggGroups: [
			"Amorphous"
		],
		gen: 8
	},
	tripsius: {
		num: 69111,
		name: "Tripsius",
		types: [
			"Psychic",
			"Electric"
		],
		gender: "N",
		baseStats: {
			hp: 88,
			atk: 89,
			def: 99,
			spa: 88,
			spd: 80,
			spe: 111
		},
		abilities: {
			0: "Skill Link",
			1: "Analytic",
			H: "Competitive",
			S: "Super Luck"
		},
		heightm: 1.5,
		weightkg: 111,
		color: "Red",
		prevo: "Dubus",
		evoLevel: 33,
		eggGroups: [
			"Amorphous"
		],
		gen: 8
	},
	miasmer: {
		num: 69112,
		name: "Miasmer",
		types: [
			"Poison",
			"Steel"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 55,
			atk: 75,
			def: 50,
			spa: 65,
			spd: 60,
			spe: 70
		},
		abilities: {
			0: "Levitate",
			1: "Prankster",
			H: "Poison Point",
			S: "Light Metal"
		},
		heightm: 0.5,
		weightkg: 0.3,
		color: "Purple",
		evos: [
			"Miasmortor"
		],
		eggGroups: [
			"Amorphous"
		],
		gen: 8
	},
	miasmortor: {
		num: 69113,
		name: "Miasmortor",
		types: [
			"Poison",
			"Steel"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 80,
			atk: 110,
			def: 70,
			spa: 90,
			spd: 70,
			spe: 110
		},
		abilities: {
			0: "Effect Spore",
			1: "Prankster",
			H: "Poison Point",
			S: "Light Metal"
		},
		heightm: 1.1,
		weightkg: 34.6,
		color: "Purple",
		prevo: "Miasmer",
		evoLevel: 42,
		eggGroups: [
			"Amorphous"
		],
		gen: 8
	},
	cacademon: {
		num: 69114,
		name: "Cacademon",
		types: [
			"Ground",
			"Poison"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 150,
			atk: 101,
			def: 79,
			spa: 101,
			spd: 79,
			spe: 30
		},
		abilities: {
			0: "Stench",
			H: "Poison Touch",
			S: "Power of Alchemy"
		},
		heightm: 1.2,
		weightkg: 30,
		color: "Brown",
		eggGroups: [
			"Amorphous"
		],
		gen: 8
	},
	hanginy: {
		num: 69115,
		name: "Hanginy",
		types: [
			"Ghost"
		],
		gender: "F",
		baseStats: {
			hp: 120,
			atk: 5,
			def: 5,
			spa: 20,
			spd: 85,
			spe: 45
		},
		abilities: {
			0: "Aftermath",
			1: "Cute Charm",
			H: "Unnerve",
			S: "Levitate"
		},
		heightm: 0.6,
		weightkg: 24.4,
		color: "Pink",
		evos: [
			"Chancer"
		],
		eggGroups: [
			"Undiscovered"
		],
		gen: 8
	},
	chancer: {
		num: 69116,
		name: "Chancer",
		types: [
			"Ghost"
		],
		gender: "F",
		baseStats: {
			hp: 250,
			atk: 5,
			def: 5,
			spa: 35,
			spd: 105,
			spe: 50
		},
		abilities: {
			0: "Aftermath",
			1: "Cute Charm",
			H: "Unnerve",
			S: "Cursed Body"
		},
		heightm: 1.1,
		weightkg: 34.6,
		color: "Pink",
		prevo: "Hanginy",
		evoLevel: 20,
		evos: [
			"Unjoy"
		],
		eggGroups: [
			"Fairy",
			"Amorphous"
		],
		gen: 8
	},
	unjoy: {
		num: 69117,
		name: "Unjoy",
		types: [
			"Ghost"
		],
		gender: "F",
		baseStats: {
			hp: 255,
			atk: 10,
			def: 10,
			spa: 75,
			spd: 135,
			spe: 55
		},
		abilities: {
			0: "Aftermath",
			1: "Cute Charm",
			H: "Unnerve",
			S: "Cursed Body"
		},
		heightm: 1.5,
		weightkg: 46.8,
		color: "Pink",
		prevo: "Chancer",
		evoType: "levelFriendship",
		eggGroups: [
			"Fairy",
			"Amorphous"
		],
		gen: 8
	},
	frosowl: {
		num: 69118,
		name: "Frosowl",
		types: [
			"Ice",
			"Flying"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 50,
			atk: 60,
			def: 20,
			spa: 73,
			spd: 30,
			spe: 95
		},
		abilities: {
			0: "Insomnia",
			1: "Snow Warning",
			H: "Forewarn",
			S: "Snow Cloak"
		},
		heightm: 0.5,
		weightkg: 2.1,
		color: "White",
		evos: [
			"Whizzard"
		],
		eggGroups: [
			"Flying"
		],
		gen: 8
	},
	whizzard: {
		num: 69119,
		name: "Whizzard",
		types: [
			"Ice",
			"Flying"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 75,
			atk: 80,
			def: 40,
			spa: 103,
			spd: 60,
			spe: 115
		},
		abilities: {
			0: "Insomnia",
			1: "Snow Warning",
			H: "Forewarn",
			S: "Snow Cloak"
		},
		heightm: 1.6,
		weightkg: 40.8,
		color: "White",
		prevo: "Frosowl",
		evoLevel: 30,
		eggGroups: [
			"Flying"
		],
		gen: 8
	},
	drapillar: {
		num: 69120,
		name: "Drapillar",
		types: [
			"Bug",
			"Dragon"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 60,
			atk: 80,
			def: 50,
			spa: 30,
			spd: 45,
			spe: 45
		},
		abilities: {
			0: "Shield Dust",
			1: "Marvel Scale",
			H: "Shed Skin",
			S: "Overcoat"
		},
		heightm: 1.1,
		weightkg: 28.8,
		color: "Green",
		evos: [
			"Caparagon"
		],
		eggGroups: [
			"Bug",
			"Dragon"
		],
		gen: 8
	},
	caparagon: {
		num: 69121,
		name: "Caparagon",
		types: [
			"Bug",
			"Dragon"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 90,
			atk: 81,
			def: 100,
			spa: 31,
			spd: 95,
			spe: 15
		},
		abilities: {
			0: "Shield Dust",
			1: "Marvel Scale",
			H: "Shed Skin",
			S: "Overcoat"
		},
		heightm: 1.1,
		weightkg: 55.1,
		color: "Green",
		prevo: "Drapillar",
		evoLevel: 40,
		evos: [
			"Mantrake"
		],
		eggGroups: [
			"Bug",
			"Dragon"
		],
		gen: 8
	},
	mantrake: {
		num: 69122,
		name: "Mantrake",
		types: [
			"Bug",
			"Dragon"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 110,
			atk: 140,
			def: 85,
			spa: 50,
			spd: 80,
			spe: 75
		},
		abilities: {
			0: "Compound Eyes",
			1: "Tinted Lens",
			H: "Shed Skin",
			S: "Overcoat"
		},
		heightm: 1.5,
		weightkg: 112.6,
		color: "Green",
		prevo: "Caparagon",
		evoLevel: 50,
		eggGroups: [
			"Bug",
			"Dragon"
		],
		gen: 8
	},
	ogrelord: {
		num: 69123,
		name: "Ogrelord",
		types: [
			"Dark"
		],
		genderRatio: {
			M: 0.875,
			F: 0.125
		},
		baseStats: {
			hp: 100,
			atk: 130,
			def: 80,
			spa: 65,
			spd: 81,
			spe: 70
		},
		abilities: {
			0: "Victory Star",
			1: "Mold Breaker",
			H: "Sturdy",
			S: "Stench"
		},
		heightm: 2.1,
		weightkg: 432.3,
		color: "Green",
		eggGroups: [
			"Human-Like"
		],
		gen: 8
	},
	chantruth: {
		num: 69124,
		name: "Chantruth",
		types: [
			"Dark"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 100,
			atk: 61,
			def: 94,
			spa: 106,
			spd: 95,
			spe: 70
		},
		abilities: {
			0: "Keen Eye",
			1: "Jewelry",
			H: "Magnet Pull",
			S: "Infiltrator"
		},
		heightm: 1.3,
		weightkg: 208.2,
		color: "Black",
		eggGroups: [
			"Human-Like"
		],
		gen: 8
	},
	inbitween: {
		num: 69125,
		name: "Inbitween",
		types: [
			"Fairy"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 50,
			atk: 55,
			def: 55,
			spa: 65,
			spd: 60,
			spe: 70
		},
		abilities: {
			0: "Moody",
			1: "Serene Grace",
			H: "Magic Bounce",
			S: "Receiver"
		},
		heightm: 0.4,
		weightkg: 20,
		color: "Pink",
		evos: [
			"Geigh",
			"Dragking"
		],
		eggGroups: [
			"Field",
			"Fairy"
		],
		gen: 8
	},
	geigh: {
		num: 69126,
		name: "Geigh",
		types: [
			"Fairy",
			"Flying"
		],
		gender: "M",
		baseStats: {
			hp: 65,
			atk: 80,
			def: 70,
			spa: 100,
			spd: 75,
			spe: 110
		},
		abilities: {
			0: "Oblivious",
			1: "Serene Grace",
			H: "Magic Bounce",
			S: "Receiver"
		},
		heightm: 1.7,
		weightkg: 95,
		color: "Purple",
		prevo: "Inbitween",
		evoLevel: 40,
		eggGroups: [
			"Field",
			"Fairy"
		],
		gen: 8
	},
	jarape: {
		num: 69127,
		name: "Jarape",
		types: [
			"Electric",
			"Rock"
		],
		gender: "N",
		baseStats: {
			hp: 70,
			atk: 30,
			def: 85,
			spa: 40,
			spd: 85,
			spe: 10
		},
		abilities: {
			0: "Cursed Body",
			1: "Solid Rock",
			H: "Prankster",
			S: "Volt Absorb"
		},
		heightm: 0.7,
		weightkg: 92,
		color: "Yellow",
		evos: [
			"Spilefree"
		],
		eggGroups: [
			"Amorphous",
			"Mineral"
		],
		gen: 8
	},
	spilefree: {
		num: 69128,
		name: "Spilefree",
		types: [
			"Electric",
			"Ghost"
		],
		gender: "N",
		baseStats: {
			hp: 70,
			atk: 45,
			def: 45,
			spa: 125,
			spd: 125,
			spe: 125
		},
		abilities: {
			0: "Clear Body",
			1: "Prankster",
			H: "Levitate",
			S: "Volt Absorb"
		},
		heightm: 1.5,
		weightkg: 1.2,
		color: "Yellow",
		prevo: "Jarape",
		evoType: "useItem",
		evoItem: "Thunder Stone",
		eggGroups: [
			"Amorphous",
			"Mineral"
		],
		gen: 8
	},
	bongecko: {
		num: 69129,
		name: "Bongecko",
		types: [
			"Grass",
			"Fire"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 55,
			atk: 40,
			def: 45,
			spa: 60,
			spd: 45,
			spe: 10
		},
		abilities: {
			0: "Blaze",
			1: "White Smoke",
			H: "Turboblaze",
			S: "Leaf Guard"
		},
		heightm: 0.6,
		weightkg: 8.5,
		color: "Green",
		evos: [
			"Mariguana"
		],
		eggGroups: [
			"Grass",
			"Dragon"
		],
		gen: 8
	},
	mariguana: {
		num: 69130,
		name: "Mariguana",
		types: [
			"Grass",
			"Fire"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 105,
			atk: 50,
			def: 85,
			spa: 75,
			spd: 85,
			spe: 20
		},
		abilities: {
			0: "Blaze",
			1: "White Smoke",
			H: "Turboblaze",
			S: "Leaf Guard"
		},
		heightm: 1.1,
		weightkg: 19,
		color: "Green",
		prevo: "Bongecko",
		evoLevel: 24,
		evos: [
			"Marleyzard"
		],
		eggGroups: [
			"Grass",
			"Dragon"
		],
		gen: 8
	},
	marleyzard: {
		num: 69131,
		name: "Marleyzard",
		types: [
			"Grass",
			"Fire"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 130,
			atk: 60,
			def: 110,
			spa: 100,
			spd: 110,
			spe: 30
		},
		abilities: {
			0: "Blaze",
			1: "White Smoke",
			H: "Turboblaze",
			S: "Leaf Guard"
		},
		heightm: 1.7,
		weightkg: 90.5,
		color: "Green",
		prevo: "Mariguana",
		evoType: "useItem",
		evoItem: "Leaf Stone",
		eggGroups: [
			"Grass",
			"Dragon"
		],
		gen: 8
	},
	blobbos: {
		num: 69132,
		name: "Blobbos",
		types: [
			"Ice",
			"Rock"
		],
		gender: "N",
		baseStats: {
			hp: 42,
			atk: 17,
			def: 36,
			spa: 15,
			spd: 25,
			spe: 15
		},
		abilities: {
			0: "Pure Power",
			1: "Huge Power",
			H: "Comatose",
			S: "Comatose"
		},
		heightm: 0.4,
		weightkg: 5.7,
		color: "Blue",
		evos: [
			"Mega Blobbos"
		],
		eggGroups: [
			"Ditto"
		],
		gen: 8
	},
	ayylamo: {
		num: 69133,
		name: "Ayylamo",
		types: [
			"Psychic"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 70,
			atk: 50,
			def: 65,
			spa: 90,
			spd: 80,
			spe: 90
		},
		abilities: {
			0: "Compound Eyes",
			1: "Synchronize",
			H: "Tinted Lens",
			S: "Levitate"
		},
		heightm: 0.6,
		weightkg: 13,
		color: "Gray",
		evos: [
			"Uwotto"
		],
		eggGroups: [
			"Amorphous",
			"Human-Like"
		],
		gen: 8
	},
	smellox: {
		num: 69134,
		name: "Smellox",
		types: [
			"Poison"
		],
		genderRatio: {
			M: 0.875,
			F: 0.125
		},
		baseStats: {
			hp: 92,
			atk: 87,
			def: 71,
			spa: 63,
			spd: 71,
			spe: 66
		},
		abilities: {
			0: "Stench",
			1: "No Guard",
			H: "Static",
			S: "Aroma Veil"
		},
		heightm: 1.2,
		weightkg: 59.2,
		color: "Red",
		eggGroups: [
			"Amorphous",
			"Field"
		],
		gen: 8
	},
	chasumo: {
		num: 69135,
		name: "Chasumo",
		types: [
			"Fighting"
		],
		genderRatio: {
			M: 0.875,
			F: 0.125
		},
		baseStats: {
			hp: 110,
			atk: 110,
			def: 95,
			spa: 45,
			spd: 62,
			spe: 67
		},
		abilities: {
			0: "Hyper Cutter",
			1: "Anger Point",
			H: "Defiant",
			S: "Gluttony"
		},
		heightm: 1.5,
		weightkg: 70.5,
		color: "White",
		eggGroups: [
			"Human-Like"
		],
		gen: 8
	},
	oilslam: {
		num: 69136,
		name: "Oilslam",
		types: [
			"Poison",
			"Dark"
		],
		genderRatio: {
			M: 0.75,
			F: 0.25
		},
		baseStats: {
			hp: 80,
			atk: 80,
			def: 50,
			spa: 40,
			spd: 50,
			spe: 25
		},
		abilities: {
			0: "Poison Point",
			1: "Flare Boost",
			H: "Merciless",
			S: "Blademaster"
		},
		heightm: 0.9,
		weightkg: 30,
		color: "Black",
		evos: [
			"Isissin"
		],
		eggGroups: [
			"Amorphous",
			"Monster"
		],
		gen: 8
	},
	isissin: {
		num: 69137,
		name: "Isissin",
		types: [
			"Poison",
			"Dark"
		],
		genderRatio: {
			M: 0.75,
			F: 0.25
		},
		baseStats: {
			hp: 105,
			atk: 105,
			def: 75,
			spa: 95,
			spd: 100,
			spe: 50
		},
		abilities: {
			0: "Poison Point",
			1: "Flare Boost",
			H: "Merciless",
			S: "Blademaster"
		},
		heightm: 1.7,
		weightkg: 63.9,
		color: "Black",
		prevo: "Oilslam",
		evoLevel: 38,
		eggGroups: [
			"Amorphous",
			"Monster"
		],
		gen: 8
	},
	stuffowl: {
		num: 69138,
		name: "Stuffowl",
		types: [
			"Normal",
			"Flying"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 62,
			atk: 65,
			def: 55,
			spa: 55,
			spd: 48,
			spe: 65
		},
		abilities: {
			0: "Early Bird",
			H: "Big Pecks",
			S: "Keen Eye"
		},
		heightm: 0.3,
		weightkg: 2,
		color: "Brown",
		evos: [
			"Durkey"
		],
		eggGroups: [
			"Flying"
		],
		gen: 8
	},
	durkey: {
		num: 69139,
		name: "Durkey",
		types: [
			"Normal",
			"Flying"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 72,
			atk: 85,
			def: 73,
			spa: 72,
			spd: 68,
			spe: 85
		},
		abilities: {
			0: "Early Bird",
			H: "Innards Out",
			S: "Keen Eye"
		},
		heightm: 1.1,
		weightkg: 30,
		color: "Brown",
		prevo: "Stuffowl",
		evoType: "useItem",
		evoItem: "Far Doll",
		evos: [
			"Upchucken"
		],
		eggGroups: [
			"Flying"
		],
		gen: 8
	},
	upchucken: {
		num: 69140,
		name: "Upchucken",
		types: [
			"Normal",
			"Flying"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 87,
			atk: 105,
			def: 81,
			spa: 102,
			spd: 81,
			spe: 103
		},
		abilities: {
			0: "Drought",
			H: "Innards Out",
			S: "Flare Boost"
		},
		heightm: 1.5,
		weightkg: 86.7,
		color: "Brown",
		prevo: "Durkey",
		evoType: "useItem",
		evoItem: "Tor Doll",
		eggGroups: [
			"Flying"
		],
		gen: 8
	},
	dragun: {
		num: 69141,
		name: "Dragun",
		types: [
			"Dragon",
			"Steel"
		],
		genderRatio: {
			M: 0.75,
			F: 0.25
		},
		baseStats: {
			hp: 45,
			atk: 25,
			def: 65,
			spa: 100,
			spd: 45,
			spe: 20
		},
		abilities: {
			0: "Sniper",
			1: "Mega Launcher",
			H: "Keen Eye",
			S: "No Guard"
		},
		heightm: 0.4,
		weightkg: 21.4,
		color: "Gray",
		evos: [
			"Triggedon"
		],
		eggGroups: [
			"Dragon"
		],
		gen: 8
	},
	triggedon: {
		num: 69142,
		name: "Triggedon",
		types: [
			"Dragon",
			"Steel"
		],
		genderRatio: {
			M: 0.75,
			F: 0.25
		},
		baseStats: {
			hp: 65,
			atk: 50,
			def: 85,
			spa: 120,
			spd: 70,
			spe: 30
		},
		abilities: {
			0: "Sniper",
			1: "Mega Launcher",
			H: "Keen Eye",
			S: "No Guard"
		},
		heightm: 0.7,
		weightkg: 51,
		color: "Gray",
		prevo: "Dragun",
		evoLevel: 40,
		evos: [
			"Cannonance"
		],
		eggGroups: [
			"Dragon"
		],
		gen: 8
	},
	cannonance: {
		num: 69143,
		name: "Cannonance",
		types: [
			"Dragon",
			"Steel"
		],
		genderRatio: {
			M: 0.75,
			F: 0.25
		},
		baseStats: {
			hp: 95,
			atk: 95,
			def: 115,
			spa: 145,
			spd: 105,
			spe: 45
		},
		abilities: {
			0: "Sniper",
			1: "Mega Launcher",
			H: "Keen Eye",
			S: "No Guard"
		},
		heightm: 1.4,
		weightkg: 101.1,
		color: "Gray",
		prevo: "Triggedon",
		evoLevel: 65,
		eggGroups: [
			"Dragon"
		],
		gen: 8
	},
	evacycle: {
		num: 69144,
		name: "Evacycle",
		types: [
			"Steel",
			"Psychic"
		],
		gender: "N",
		baseStats: {
			hp: 150,
			atk: 90,
			def: 90,
			spa: 90,
			spd: 90,
			spe: 90
		},
		abilities: {
			0: "Flame Body",
			H: "Run Away",
			S: "Unburden"
		},
		heightm: 4.3,
		weightkg: 431.4,
		color: "Purple",
		eggGroups: [
			"Undiscovered"
		],
		gen: 8
	},
	foryu: {
		num: 69145,
		name: "Foryu",
		types: [
			"Steel",
			"Fighting"
		],
		gender: "M",
		baseStats: {
			hp: 80,
			atk: 150,
			def: 125,
			spa: 65,
			spd: 100,
			spe: 80
		},
		abilities: {
			0: "Magnet Pull",
			H: "Heavy Metal",
			S: "Big Guy"
		},
		heightm: 4.9,
		weightkg: 489,
		color: "Gray",
		eggGroups: [
			"Undiscovered"
		],
		gen: 8
	},
	scytill: {
		num: 69146,
		name: "Scytill",
		types: [
			"Steel",
			"Ghost"
		],
		gender: "N",
		baseStats: {
			hp: 100,
			atk: 135,
			def: 80,
			spa: 85,
			spd: 50,
			spe: 150
		},
		abilities: {
			0: "Levitate",
			H: "Air Lock",
			S: "Hyper Cutter"
		},
		heightm: 4,
		weightkg: 392,
		color: "Purple",
		eggGroups: [
			"Undiscovered"
		],
		gen: 8
	},
	baddon: {
		num: 69147,
		name: "Baddon",
		types: [
			"Dragon"
		],
		gender: "M",
		baseStats: {
			hp: 73,
			atk: 136,
			def: 148,
			spa: 121,
			spd: 112,
			spe: 50
		},
		abilities: {
			0: "Rough Skin",
			1: "Skill Link",
			H: "Infiltrator",
			S: "Suction Cups"
		},
		heightm: 0.7,
		weightkg: 50,
		color: "Brown",
		eggGroups: [
			"Undiscovered"
		],
		gen: 8
	},
	endranther: {
		num: 69148,
		name: "Endranther",
		types: [
			"Poison"
		],
		gender: "N",
		baseStats: {
			hp: 100,
			atk: 150,
			def: 100,
			spa: 100,
			spd: 105,
			spe: 95
		},
		abilities: {
			0: "Poison Point",
			H: "Pressure",
			S: "Aftermath"
		},
		heightm: 2.5,
		weightkg: 650,
		color: "Purple",
		eggGroups: [
			"Undiscovered"
		],
		gen: 8
	},
	notridley: {
		num: 69149,
		name: "Notridley",
		types: [
			"Dragon",
			"Flying"
		],
		gender: "M",
		baseStats: {
			hp: 90,
			atk: 120,
			def: 97,
			spa: 105,
			spd: 95,
			spe: 115
		},
		abilities: {
			0: "Pressure",
			H: "Keen Eye",
			S: "Steadfast"
		},
		heightm: 8,
		weightkg: 1113.7,
		color: "Purple",
		eggGroups: [
			"Undiscovered"
		],
		gen: 8
	},
	demiwaifu: {
		num: 69150,
		name: "Demiwaifu",
		types: [
			"Fairy"
		],
		gender: "F",
		baseStats: {
			hp: 112,
			atk: 87,
			def: 104,
			spa: 131,
			spd: 131,
			spe: 115
		},
		abilities: {
			0: "Serene Grace",
			H: "Queenly Majesty",
			S: "Triage"
		},
		heightm: 2,
		weightkg: 122,
		color: "Green",
		eggGroups: [
			"Undiscovered"
		],
		gen: 8
	},
	clovenix: {
		num: 69151,
		name: "Clovenix",
		types: [
			"Grass",
			"Fire"
		],
		gender: "N",
		baseStats: {
			hp: 120,
			atk: 125,
			def: 100,
			spa: 125,
			spd: 100,
			spe: 150
		},
		abilities: {
			0: "Regenerator",
			H: "Anticipation",
			S: "Super Luck"
		},
		heightm: 7.6,
		weightkg: 999.9,
		color: "Green",
		eggGroups: [
			"Undiscovered"
		],
		gen: 8
	},
	reptyke: {
		num: 69152,
		name: "Reptyke",
		types: [
			"Fighting"
		],
		genderRatio: {
			M: 0.875,
			F: 0.125
		},
		baseStats: {
			hp: 63,
			atk: 80,
			def: 60,
			spa: 30,
			spd: 40,
			spe: 45
		},
		abilities: {
			0: "Iron Fist",
			H: "Inner Focus",
			S: "Regenerator"
		},
		heightm: 0.6,
		weightkg: 20,
		color: "Blue",
		evos: [
			"Rasclobber"
		],
		eggGroups: [
			"Monster",
			"Dragon"
		],
		gen: 8
	},
	rasclobber: {
		num: 69153,
		name: "Rasclobber",
		types: [
			"Fighting",
			"Dragon"
		],
		genderRatio: {
			M: 0.875,
			F: 0.125
		},
		baseStats: {
			hp: 75,
			atk: 95,
			def: 80,
			spa: 40,
			spd: 60,
			spe: 55
		},
		abilities: {
			0: "Iron Fist",
			H: "Inner Focus",
			S: "Regenerator"
		},
		heightm: 1.2,
		weightkg: 41.7,
		color: "Blue",
		prevo: "Reptyke",
		evoLevel: 16,
		evos: [
			"Batterex"
		],
		eggGroups: [
			"Monster",
			"Dragon"
		],
		gen: 8
	},
	batterex: {
		num: 69154,
		name: "Batterex",
		types: [
			"Fighting",
			"Dragon"
		],
		genderRatio: {
			M: 0.875,
			F: 0.125
		},
		baseStats: {
			hp: 90,
			atk: 125,
			def: 100,
			spa: 60,
			spd: 70,
			spe: 80
		},
		abilities: {
			0: "Iron Fist",
			H: "Inner Focus",
			S: "Regenerator"
		},
		heightm: 2.5,
		weightkg: 135,
		color: "Blue",
		prevo: "Rasclobber",
		evoLevel: 36,
		eggGroups: [
			"Monster",
			"Dragon"
		],
		gen: 8
	},
	faeriock: {
		num: 69155,
		name: "Faeriock",
		types: [
			"Rock"
		],
		genderRatio: {
			M: 0.875,
			F: 0.125
		},
		baseStats: {
			hp: 53,
			atk: 50,
			def: 65,
			spa: 50,
			spd: 80,
			spe: 20
		},
		abilities: {
			0: "Solid Rock",
			H: "Magic Guard",
			S: "Telepathy"
		},
		heightm: 0.5,
		weightkg: 15.9,
		color: "Brown",
		evos: [
			"Sylvuin"
		],
		eggGroups: [
			"Mineral",
			"Fairy"
		],
		gen: 8
	},
	sylvuin: {
		num: 69156,
		name: "Sylvuin",
		types: [
			"Rock",
			"Fairy"
		],
		genderRatio: {
			M: 0.875,
			F: 0.125
		},
		baseStats: {
			hp: 60,
			atk: 60,
			def: 80,
			spa: 70,
			spd: 95,
			spe: 40
		},
		abilities: {
			0: "Solid Rock",
			H: "Magic Guard",
			S: "Telepathy"
		},
		heightm: 1.1,
		weightkg: 71.2,
		color: "Brown",
		prevo: "Faeriock",
		evoLevel: 16,
		evos: [
			"Oburonyxo"
		],
		eggGroups: [
			"Mineral",
			"Fairy"
		],
		gen: 8
	},
	oburonyxo: {
		num: 69157,
		name: "Oburonyxo",
		types: [
			"Rock",
			"Fairy"
		],
		genderRatio: {
			M: 0.875,
			F: 0.125
		},
		baseStats: {
			hp: 80,
			atk: 70,
			def: 100,
			spa: 90,
			spd: 125,
			spe: 60
		},
		abilities: {
			0: "Solid Rock",
			H: "Magic Guard",
			S: "Telepathy"
		},
		heightm: 2.4,
		weightkg: 189.5,
		color: "Brown",
		prevo: "Sylvuin",
		evoLevel: 36,
		eggGroups: [
			"Mineral",
			"Fairy"
		],
		gen: 8
	},
	cloucat: {
		num: 69158,
		name: "Cloucat",
		types: [
			"Flying"
		],
		genderRatio: {
			M: 0.875,
			F: 0.125
		},
		baseStats: {
			hp: 40,
			atk: 64,
			def: 35,
			spa: 64,
			spd: 35,
			spe: 80
		},
		abilities: {
			0: "Tough Claws",
			H: "Cloud Nine",
			S: "Shower Power"
		},
		heightm: 0.3,
		weightkg: 0.1,
		color: "White",
		evos: [
			"Felimbus"
		],
		eggGroups: [
			"Flying",
			"Amorphous"
		],
		gen: 8
	},
	felimbus: {
		num: 69159,
		name: "Felimbus",
		types: [
			"Flying",
			"Dark"
		],
		genderRatio: {
			M: 0.875,
			F: 0.125
		},
		baseStats: {
			hp: 50,
			atk: 80,
			def: 50,
			spa: 80,
			spd: 50,
			spe: 95
		},
		abilities: {
			0: "Tough Claws",
			H: "Cloud Nine",
			S: "Shower Power"
		},
		heightm: 1.2,
		weightkg: 9,
		color: "Gray",
		prevo: "Cloucat",
		evoLevel: 16,
		evos: [
			"Deathorus"
		],
		eggGroups: [
			"Flying",
			"Amorphous"
		],
		gen: 8
	},
	deathorus: {
		num: 69160,
		name: "Deathorus",
		types: [
			"Flying",
			"Dark"
		],
		genderRatio: {
			M: 0.875,
			F: 0.125
		},
		baseStats: {
			hp: 75,
			atk: 95,
			def: 70,
			spa: 90,
			spd: 70,
			spe: 125
		},
		abilities: {
			0: "Tough Claws",
			H: "Cloud Nine",
			S: "Shower Power"
		},
		heightm: 2,
		weightkg: 30.2,
		color: "Gray",
		prevo: "Felimbus",
		evoLevel: 36,
		eggGroups: [
			"Flying",
			"Amorphous"
		],
		gen: 8
	},
	knogoat: {
		num: 69161,
		name: "Knogoat",
		types: [
			"Normal"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 95,
			atk: 85,
			def: 55,
			spa: 30,
			spd: 50,
			spe: 55
		},
		abilities: {
			0: "Own Tempo",
			1: "Reckless",
			H: "Mold Breaker",
			S: "Sap Sipper"
		},
		heightm: 1,
		weightkg: 42.4,
		color: "White",
		evos: [
			"Knogrinyu"
		],
		eggGroups: [
			"Field"
		],
		gen: 8
	},
	knogrinyu: {
		num: 69162,
		name: "Knogrinyu",
		types: [
			"Normal"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 170,
			atk: 120,
			def: 70,
			spa: 40,
			spd: 70,
			spe: 75
		},
		abilities: {
			0: "Own Tempo",
			1: "Reckless",
			H: "Mold Breaker",
			S: "Sap Sipper"
		},
		heightm: 2,
		weightkg: 198,
		color: "White",
		prevo: "Knogoat",
		evoLevel: 38,
		eggGroups: [
			"Field"
		],
		gen: 8
	},
	glasshot: {
		num: 69163,
		name: "Glasshot",
		types: [
			"Ice",
			"Steel"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 31,
			atk: 74,
			def: 40,
			spa: 74,
			spd: 40,
			spe: 73
		},
		abilities: {
			0: "Keen Eye",
			1: "Bulletproof",
			H: "Clear Body",
			S: "Motor Drive"
		},
		heightm: 0.7,
		weightkg: 52.5,
		color: "Blue",
		evos: [
			"Glassannon"
		],
		eggGroups: [
			"Mineral"
		],
		gen: 8
	},
	glassannon: {
		num: 69164,
		name: "Glassannon",
		types: [
			"Ice",
			"Steel"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 45,
			atk: 139,
			def: 40,
			spa: 139,
			spd: 40,
			spe: 135
		},
		abilities: {
			0: "Speed Boost",
			1: "Bulletproof",
			H: "Clear Body",
			S: "Motor Drive"
		},
		heightm: 1.9,
		weightkg: 305.4,
		color: "Blue",
		prevo: "Glasshot",
		evoLevel: 30,
		eggGroups: [
			"Mineral"
		],
		gen: 8
	},
	fluffyeti: {
		num: 69165,
		name: "Fluffyeti",
		types: [
			"Ice"
		],
		genderRatio: {
			M: 0.75,
			F: 0.25
		},
		baseStats: {
			hp: 60,
			atk: 75,
			def: 65,
			spa: 30,
			spd: 65,
			spe: 60
		},
		abilities: {
			0: "Snow Cloak",
			1: "Ice Body",
			H: "Fluffy",
			S: "Cute Charm"
		},
		heightm: 0.8,
		weightkg: 13.3,
		color: "White",
		evos: [
			"Yedoom"
		],
		eggGroups: [
			"Field",
			"Fairy"
		],
		gen: 8
	},
	yedoom: {
		num: 69166,
		name: "Yedoom",
		types: [
			"Ice",
			"Dark"
		],
		genderRatio: {
			M: 0.75,
			F: 0.25
		},
		baseStats: {
			hp: 80,
			atk: 115,
			def: 90,
			spa: 60,
			spd: 95,
			spe: 95
		},
		abilities: {
			0: "Pressure",
			1: "Tough Claws",
			H: "Fluffy",
			S: "Intimidate"
		},
		heightm: 1.3,
		weightkg: 77.1,
		color: "White",
		prevo: "Fluffyeti",
		evoLevel: 35,
		eggGroups: [
			"Field",
			"Fairy"
		],
		gen: 8
	},
	mirrostine: {
		num: 69167,
		name: "Mirrostine",
		types: [
			"Steel",
			"Ghost"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 68,
			atk: 59,
			def: 79,
			spa: 97,
			spd: 95,
			spe: 86
		},
		abilities: {
			0: "Lightning Rod",
			1: "Trace",
			H: "Inversion",
			S: "Imposter"
		},
		heightm: 1.1,
		weightkg: 6.8,
		color: "Gray",
		eggGroups: [
			"Mineral",
			"Amorphous"
		],
		gen: 8
	},
	mudpants: {
		num: 69168,
		name: "Mudpants",
		types: [
			"Ground",
			"Fighting"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 50,
			atk: 85,
			def: 75,
			spa: 30,
			spd: 50,
			spe: 40
		},
		abilities: {
			0: "Sand Rush",
			1: "Stench",
			H: "Sand Stream",
			S: "Steadfast"
		},
		heightm: 0.6,
		weightkg: 9,
		color: "Brown",
		evos: [
			"Mudslacks"
		],
		eggGroups: [
			"Field"
		],
		gen: 8
	},
	mudslacks: {
		num: 69169,
		name: "Mudslacks",
		types: [
			"Ground",
			"Fighting"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 85,
			atk: 110,
			def: 100,
			spa: 50,
			spd: 70,
			spe: 65
		},
		abilities: {
			0: "Sand Rush",
			1: "Stench",
			H: "Sand Stream",
			S: "Steadfast"
		},
		heightm: 1,
		weightkg: 29.5,
		color: "Brown",
		prevo: "Mudpants",
		evoLevel: 29,
		eggGroups: [
			"Field"
		],
		gen: 8
	},
	bukitlee: {
		num: 69170,
		name: "Bukitlee",
		types: [
			"Steel"
		],
		gender: "N",
		baseStats: {
			hp: 50,
			atk: 30,
			def: 95,
			spa: 20,
			spd: 90,
			spe: 20
		},
		abilities: {
			0: "Own Tempo",
			H: "Aftermath",
			S: "Light Metal"
		},
		heightm: 0.3,
		weightkg: 15,
		color: "Gray",
		evos: [
			"Lossolith"
		],
		eggGroups: [
			"Mineral"
		],
		gen: 8
	},
	lossolith: {
		num: 69171,
		name: "Lossolith",
		types: [
			"Steel",
			"Psychic"
		],
		gender: "N",
		baseStats: {
			hp: 50,
			atk: 60,
			def: 200,
			spa: 60,
			spd: 140,
			spe: 30
		},
		abilities: {
			0: "Levitate",
			H: "Aftermath",
			S: "Heavy Metal"
		},
		heightm: 5.8,
		weightkg: 950,
		color: "Black",
		prevo: "Bukitlee",
		evoType: "useItem",
		evoItem: "Moon Stone",
		eggGroups: [
			"Mineral"
		],
		gen: 8
	},
	mimimie: {
		num: 69172,
		name: "Mimimie",
		types: [
			"Water",
			"Dark"
		],
		genderRatio: {
			M: 0.25,
			F: 0.75
		},
		baseStats: {
			hp: 75,
			atk: 70,
			def: 80,
			spa: 115,
			spd: 85,
			spe: 90
		},
		abilities: {
			0: "Suction Cups",
			1: "Degenerate",
			H: "Serene Grace",
			S: "Misty Surge"
		},
		heightm: 1,
		weightkg: 35,
		color: "Pink",
		eggGroups: [
			"Water 2",
			"Water 3"
		],
		gen: 8
	},
	sprucifix: {
		num: 69173,
		name: "Sprucifix",
		types: [
			"Grass",
			"Ghost"
		],
		gender: "M",
		baseStats: {
			hp: 89,
			atk: 108,
			def: 122,
			spa: 49,
			spd: 75,
			spe: 50
		},
		abilities: {
			0: "Wonder Guard",
			1: "Regenerator",
			H: "Rain Dish",
			S: "Grass pelt"
		},
		heightm: 1.7,
		weightkg: 55.2,
		color: "Brown",
		eggGroups: [
			"Grass",
			"Human-Like"
		],
		gen: 8
	},
	hulkan: {
		num: 69174,
		name: "Hulkan",
		types: [
			"Fighting"
		],
		genderRatio: {
			M: 0.75,
			F: 0.25
		},
		baseStats: {
			hp: 110,
			atk: 150,
			def: 100,
			spa: 20,
			spd: 90,
			spe: 50
		},
		abilities: {
			0: "Guts",
			1: "Hustle",
			H: "Steadfast",
			S: "Reckless"
		},
		heightm: 2,
		weightkg: 130,
		color: "Green",
		eggGroups: [
			"Human-Like"
		],
		gen: 8
	},
	nonite: {
		num: 69175,
		name: "Nonite",
		types: [
			"Fairy"
		],
		gender: "N",
		baseStats: {
			hp: 60,
			atk: 40,
			def: 45,
			spa: 55,
			spd: 50,
			spe: 55
		},
		abilities: {
			0: "Soundproof",
			1: "Boombox",
			H: "Cute Charm",
			S: "Pixilate"
		},
		heightm: 0.8,
		weightkg: 15.2,
		color: "Pink",
		evos: [
			"Nonegative"
		],
		eggGroups: [
			"Flying",
			"Fairy"
		],
		gen: 8
	},
	nonegative: {
		num: 69176,
		name: "Nonegative",
		types: [
			"Fairy"
		],
		gender: "N",
		baseStats: {
			hp: 80,
			atk: 40,
			def: 45,
			spa: 95,
			spd: 80,
			spe: 85
		},
		abilities: {
			0: "Soundproof",
			1: "Boombox",
			H: "Cute Charm",
			S: "Pixilate"
		},
		heightm: 1.5,
		weightkg: 44.5,
		color: "Pink",
		prevo: "Nonite",
		evoLevel: 26,
		evos: [
			"Nomaestro"
		],
		eggGroups: [
			"Flying",
			"Fairy"
		],
		gen: 8
	},
	nomaestro: {
		num: 69177,
		name: "Nomaestro",
		types: [
			"Fairy",
			"Flying"
		],
		gender: "N",
		baseStats: {
			hp: 100,
			atk: 105,
			def: 90,
			spa: 95,
			spd: 80,
			spe: 75
		},
		abilities: {
			0: "Soundproof",
			1: "Boombox",
			H: "Cute Charm",
			S: "Pixilate"
		},
		heightm: 1.9,
		weightkg: 120,
		color: "Pink",
		prevo: "Nonegative",
		evoType: "levelFriendship",
		eggGroups: [
			"Flying",
			"Fairy"
		],
		gen: 8
	},
	dunkypea: {
		num: 69178,
		name: "Dunkypea",
		types: [
			"Poison",
			"Flying"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 55,
			atk: 45,
			def: 45,
			spa: 45,
			spd: 50,
			spe: 60
		},
		abilities: {
			0: "Big Pecks",
			H: "Unburden",
			S: "Soundproof"
		},
		heightm: 0.6,
		weightkg: 9,
		color: "Purple",
		evos: [
			"Burdmen"
		],
		eggGroups: [
			"Flying"
		],
		gen: 8
	},
	burdmen: {
		num: 69179,
		name: "Burdmen",
		types: [
			"Poison",
			"Flying"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 70,
			atk: 60,
			def: 60,
			spa: 65,
			spd: 65,
			spe: 95
		},
		abilities: {
			0: "Big Pecks",
			H: "Unburden",
			S: "Soundproof"
		},
		heightm: 1.4,
		weightkg: 39.2,
		color: "Purple",
		prevo: "Dunkypea",
		evoLevel: 14,
		evos: [
			"Nutzboltz"
		],
		eggGroups: [
			"Flying"
		],
		gen: 8
	},
	nutzboltz: {
		num: 69180,
		name: "Nutzboltz",
		types: [
			"Poison",
			"Flying"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 105,
			atk: 70,
			def: 80,
			spa: 85,
			spd: 95,
			spe: 80
		},
		abilities: {
			0: "Big Pecks",
			H: "Unburden",
			S: "Soundproof"
		},
		heightm: 1.8,
		weightkg: 85.2,
		color: "Purple",
		prevo: "Burdmen",
		evoLevel: 32,
		eggGroups: [
			"Flying"
		],
		gen: 8
	},
	kuklux: {
		num: 69181,
		name: "Kuklux",
		types: [
			"Fire"
		],
		genderRatio: {
			M: 0.75,
			F: 0.25
		},
		baseStats: {
			hp: 40,
			atk: 45,
			def: 50,
			spa: 60,
			spd: 50,
			spe: 55
		},
		abilities: {
			0: "Flash Fire",
			1: "Levitate",
			H: "Justified",
			S: "Overcoat"
		},
		heightm: 0.7,
		weightkg: 1,
		color: "White",
		evos: [
			"Kuklan"
		],
		eggGroups: [
			"Amorphous"
		],
		gen: 8
	},
	kuklan: {
		num: 69182,
		name: "Kuklan",
		types: [
			"Fire"
		],
		genderRatio: {
			M: 0.75,
			F: 0.25
		},
		baseStats: {
			hp: 60,
			atk: 60,
			def: 60,
			spa: 115,
			spd: 115,
			spe: 105
		},
		abilities: {
			0: "Flash Fire",
			1: "Levitate",
			H: "Justified",
			S: "Overcoat"
		},
		heightm: 1.5,
		weightkg: 4.4,
		color: "White",
		prevo: "Kuklux",
		evoLevel: 35,
		eggGroups: [
			"Amorphous"
		],
		gen: 8
	},
	flameboyan: {
		num: 69183,
		name: "Flameboyan",
		types: [
			"Fire",
			"Fairy"
		],
		genderRatio: {
			M: 0.75,
			F: 0.25
		},
		baseStats: {
			hp: 85,
			atk: 62,
			def: 78,
			spa: 92,
			spd: 118,
			spe: 25
		},
		abilities: {
			0: "Rivalry",
			1: "Solar Power",
			H: "Flame Body",
			S: "Fairy Aura"
		},
		heightm: 0.7,
		weightkg: 9.5,
		color: "Purple",
		eggGroups: [
			"Fairy",
			"Amorphous "
		],
		gen: 8
	},
	piicee: {
		num: 69184,
		name: "Piicee",
		types: [
			"Psychic",
			"Poison"
		],
		genderRatio: {
			M: 0.75,
			F: 0.25
		},
		baseStats: {
			hp: 80,
			atk: 60,
			def: 75,
			spa: 95,
			spd: 110,
			spe: 80
		},
		abilities: {
			0: "Synchronize",
			1: "Triage",
			H: "Regenerator",
			S: "Healer"
		},
		heightm: 1.3,
		weightkg: 40,
		color: "Green",
		eggGroups: [
			"Amorphous",
			"Monster"
		],
		gen: 8
	},
	sonnanos: {
		num: 69185,
		name: "Sonnanos",
		types: [
			"Steel",
			"Fighting"
		],
		genderRatio: {
			M: 0.75,
			F: 0.25
		},
		baseStats: {
			hp: 105,
			atk: 115,
			def: 105,
			spa: 60,
			spd: 60,
			spe: 70
		},
		abilities: {
			0: "Sheer Force",
			H: "Stamina",
			S: "Iron Fist"
		},
		heightm: 1.6,
		weightkg: 139,
		color: "Gray",
		eggGroups: [
			"Mineral",
			"Human-Like"
		],
		gen: 8
	},
	plebbles: {
		num: 69186,
		name: "Plebbles",
		types: [
			"Rock"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 60,
			atk: 80,
			def: 160,
			spa: 50,
			spd: 70,
			spe: 70
		},
		abilities: {
			0: "Sturdy",
			1: "Levitate",
			H: "Infiltrator",
			S: "Mold Breaker"
		},
		heightm: 0.4,
		weightkg: 4.5,
		color: "Brown",
		eggGroups: [
			"Mineral"
		],
		gen: 8
	},
	sapleaf: {
		num: 69187,
		name: "Sapleaf",
		types: [
			"Grass"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 50,
			atk: 60,
			def: 45,
			spa: 65,
			spd: 40,
			spe: 75
		},
		abilities: {
			0: "Solar Power",
			H: "Leaf Guard",
			S: "Overgrow"
		},
		heightm: 1,
		weightkg: 31,
		color: "Green",
		evos: [
			"Ignut"
		],
		eggGroups: [
			"Grass",
			"Mineral"
		],
		gen: 8
	},
	ignut: {
		num: 69188,
		name: "Ignut",
		types: [
			"Fire"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 70,
			atk: 70,
			def: 80,
			spa: 85,
			spd: 55,
			spe: 90
		},
		abilities: {
			0: "Flame Body",
			H: "Flash Fire",
			S: "Blaze"
		},
		heightm: 1.4,
		weightkg: 45.8,
		color: "Red",
		prevo: "Sapleaf",
		evoLevel: 15,
		evos: [
			"Phantash"
		],
		eggGroups: [
			"Grass",
			"Mineral"
		],
		gen: 8
	},
	phantash: {
		num: 69189,
		name: "Phantash",
		types: [
			"Ghost"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 90,
			atk: 85,
			def: 65,
			spa: 110,
			spd: 110,
			spe: 60
		},
		abilities: {
			0: "White Smoke",
			H: "Air Lock",
			S: "Cursed Body"
		},
		heightm: 1.5,
		weightkg: 0.2,
		color: "Gray",
		prevo: "Ignut",
		evoLevel: 34,
		eggGroups: [
			"Grass",
			"Mineral"
		],
		gen: 8
	},
	polossus: {
		num: 69190,
		name: "Polossus",
		types: [
			"Poison"
		],
		gender: "N",
		baseStats: {
			hp: 140,
			atk: 105,
			def: 70,
			spa: 65,
			spd: 70,
			spe: 65
		},
		abilities: {
			0: "Pollution",
			1: "Poison Point",
			H: "Weak Armor",
			S: "Shield Dust"
		},
		heightm: 4.2,
		weightkg: 336,
		color: "Black",
		eggGroups: [
			"Amorphous"
		],
		gen: 8
	},
	hitmonana: {
		num: 69191,
		name: "Hitmonana",
		types: [
			"Grass",
			"Fighting"
		],
		genderRatio: {
			M: 0.75,
			F: 0.25
		},
		baseStats: {
			hp: 60,
			atk: 90,
			def: 110,
			spa: 85,
			spd: 110,
			spe: 60
		},
		abilities: {
			0: "Shed Skin",
			1: "Harvest",
			H: "Unburden",
			S: "Sweet Veil"
		},
		heightm: 0.8,
		weightkg: 15,
		color: "Yellow",
		eggGroups: [
			"Grass"
		],
		gen: 8
	},
	ballacle: {
		num: 69192,
		name: "Ballacle",
		types: [
			"Rock"
		],
		gender: "M",
		baseStats: {
			hp: 62,
			atk: 52,
			def: 65,
			spa: 40,
			spd: 56,
			spe: 75
		},
		abilities: {
			0: "Pickup",
			H: "Shell Armor",
			S: "Suction Cups"
		},
		heightm: 0.5,
		weightkg: 31,
		color: "Brown",
		evos: [
			"Barbarkley"
		],
		eggGroups: [
			"Mineral",
			"Human-Like"
		],
		gen: 8
	},
	barbarkley: {
		num: 69193,
		name: "Barbarkley",
		types: [
			"Rock",
			"Fighting"
		],
		gender: "M",
		baseStats: {
			hp: 96,
			atk: 105,
			def: 80,
			spa: 54,
			spd: 70,
			spe: 115
		},
		abilities: {
			0: "Quick Feet",
			H: "Steadfast",
			S: "Magic Bounce"
		},
		heightm: 1.3,
		weightkg: 96,
		color: "Brown",
		prevo: "Ballacle",
		evoLevel: 38,
		eggGroups: [
			"Mineral",
			"Human-Like"
		],
		gen: 8
	},
	kekroach: {
		num: 69194,
		name: "Kekroach",
		types: [
			"Dark",
			"Bug"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 55,
			atk: 65,
			def: 65,
			spa: 40,
			spd: 45,
			spe: 55
		},
		abilities: {
			0: "Swarm",
			1: "Prankster",
			H: "Sturdy",
			S: "Wimp Out"
		},
		heightm: 0.5,
		weightkg: 1.7,
		color: "Gray",
		evos: [
			"Rekroach"
		],
		eggGroups: [
			"Bug"
		],
		gen: 8
	},
	rekroach: {
		num: 69195,
		name: "Rekroach",
		types: [
			"Dark",
			"Bug"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 90,
			atk: 110,
			def: 115,
			spa: 50,
			spd: 70,
			spe: 80
		},
		abilities: {
			0: "Swarm",
			1: "Iron Fist",
			H: "Sturdy",
			S: "Emergency Exit"
		},
		heightm: 1.3,
		weightkg: 44.4,
		color: "Gray",
		prevo: "Kekroach",
		evoLevel: 30,
		eggGroups: [
			"Bug"
		],
		gen: 8
	},
	ricosheep: {
		num: 69196,
		name: "Ricosheep",
		types: [
			"Normal"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 80,
			atk: 55,
			def: 50,
			spa: 38,
			spd: 50,
			spe: 70
		},
		abilities: {
			0: "Speed Boost",
			1: "Magic Bounce",
			H: "Bulletproof",
			S: "Aerilate"
		},
		heightm: 0.5,
		weightkg: 5.5,
		color: "Yellow",
		evos: [
			"Ricosuave"
		],
		eggGroups: [
			"Field"
		],
		gen: 8
	},
	ricosuave: {
		num: 69197,
		name: "Ricosuave",
		types: [
			"Normal"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 130,
			atk: 70,
			def: 80,
			spa: 60,
			spd: 70,
			spe: 115
		},
		abilities: {
			0: "Speed Boost",
			1: "Magic Bounce",
			H: "Bulletproof",
			S: "Aerilate"
		},
		heightm: 1,
		weightkg: 12,
		color: "Yellow",
		prevo: "Ricosheep",
		evoLevel: 35,
		eggGroups: [
			"Field"
		],
		gen: 8
	},
	spaghefant: {
		num: 69198,
		name: "Spaghefant",
		types: [
			"Ground",
			"Fairy"
		],
		genderRatio: {
			M: 0.75,
			F: 0.25
		},
		baseStats: {
			hp: 100,
			atk: 60,
			def: 100,
			spa: 100,
			spd: 85,
			spe: 35
		},
		abilities: {
			0: "Water Absorb",
			1: "Intimidate",
			H: "Water Compaction",
			S: "Rattled"
		},
		heightm: 2.9,
		weightkg: 300,
		color: "White",
		eggGroups: [
			"Field",
			"Fairy"
		],
		gen: 8
	},
	crystaquil: {
		num: 69199,
		name: "Crystaquil",
		types: [
			"Ice",
			"Poison"
		],
		genderRatio: {
			M: 0.75,
			F: 0.25
		},
		baseStats: {
			hp: 65,
			atk: 70,
			def: 75,
			spa: 67,
			spd: 50,
			spe: 60
		},
		abilities: {
			0: "Rough Skin",
			1: "Poison Point",
			H: "Slush Rush",
			S: "Ice Body"
		},
		heightm: 1.1,
		weightkg: 48.2,
		color: "Blue",
		evos: [
			"Crystaking"
		],
		eggGroups: [
			"Monster"
		],
		gen: 8
	},
	crystaking: {
		num: 69200,
		name: "Crystaking",
		types: [
			"Ice",
			"Poison"
		],
		genderRatio: {
			M: 0.75,
			F: 0.25
		},
		baseStats: {
			hp: 90,
			atk: 120,
			def: 96,
			spa: 75,
			spd: 85,
			spe: 80
		},
		abilities: {
			0: "Rough Skin",
			1: "Poison Point",
			H: "Slush Rush",
			S: "Ice Body"
		},
		heightm: 2.1,
		weightkg: 100,
		color: "Blue",
		prevo: "Crystaquil",
		evoLevel: 42,
		eggGroups: [
			"Monster"
		],
		gen: 8
	},
	fontaba: {
		num: 69201,
		name: "Fontaba",
		types: [
			"Psychic"
		],
		gender: "N",
		baseStats: {
			hp: 75,
			atk: 80,
			def: 91,
			spa: 80,
			spd: 91,
			spe: 75
		},
		abilities: {
			0: "Prankster",
			H: "Technician",
			S: "Levitate"
		},
		heightm: 1,
		weightkg: 10,
		color: "Black",
		eggGroups: [
			"Undiscovered"
		],
		gen: 8
	},
	floconut: {
		num: 69202,
		name: "Floconut",
		types: [
			"Grass"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 40,
			atk: 40,
			def: 60,
			spa: 40,
			spd: 50,
			spe: 20
		},
		abilities: {
			0: "Chlorophyll",
			1: "Shell Armor",
			H: "Solar Power",
			S: "Leaf Guard"
		},
		heightm: 0.6,
		weightkg: 8.9,
		color: "Brown",
		evos: [
			"Sappalm"
		],
		eggGroups: [
			"Grass"
		],
		gen: 8
	},
	sappalm: {
		num: 69203,
		name: "Sappalm",
		types: [
			"Grass"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 70,
			atk: 70,
			def: 85,
			spa: 75,
			spd: 70,
			spe: 55
		},
		abilities: {
			0: "Chlorophyll",
			1: "Shell Armor",
			H: "Solar Power",
			S: "Leaf Guard"
		},
		heightm: 1.3,
		weightkg: 41.5,
		color: "Brown",
		prevo: "Floconut",
		evoLevel: 24,
		evos: [
			"Roynapalm"
		],
		eggGroups: [
			"Grass"
		],
		gen: 8
	},
	roynapalm: {
		num: 69204,
		name: "Roynapalm",
		types: [
			"Grass"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 90,
			atk: 50,
			def: 100,
			spa: 143,
			spd: 80,
			spe: 70
		},
		abilities: {
			0: "Chlorophyll",
			1: "Flash Fire",
			H: "Solar Power",
			S: "Leaf Guard"
		},
		heightm: 2.5,
		weightkg: 199.9,
		color: "Brown",
		prevo: "Sappalm",
		evoType: "useItem",
		evoItem: "Sun Stone",
		eggGroups: [
			"Grass"
		],
		gen: 8
	},
	manateet: {
		num: 69205,
		name: "Manateet",
		types: [
			"Water",
			"Ice"
		],
		genderRatio: {
			M: 0.75,
			F: 0.25
		},
		baseStats: {
			hp: 65,
			atk: 43,
			def: 70,
			spa: 50,
			spd: 65,
			spe: 25
		},
		abilities: {
			0: "Thick Fat",
			1: "Torrent",
			H: "Gluttony",
			S: "Iron Barbs"
		},
		heightm: 1.1,
		weightkg: 90,
		color: "Blue",
		evos: [
			"Manatorque"
		],
		eggGroups: [
			"Monster",
			"Water 2"
		],
		gen: 8
	},
	manatorque: {
		num: 69206,
		name: "Manatorque",
		types: [
			"Water",
			"Ice"
		],
		genderRatio: {
			M: 0.75,
			F: 0.25
		},
		baseStats: {
			hp: 90,
			atk: 56,
			def: 90,
			spa: 70,
			spd: 85,
			spe: 40
		},
		abilities: {
			0: "Thick Fat",
			1: "Torrent",
			H: "Gluttony",
			S: "Iron Barbs"
		},
		heightm: 1.4,
		weightkg: 150.6,
		color: "Blue",
		prevo: "Manateet",
		evoLevel: 24,
		evos: [
			"Manatank"
		],
		eggGroups: [
			"Monster",
			"Water 2"
		],
		gen: 8
	},
	manatank: {
		num: 69207,
		name: "Manatank",
		types: [
			"Water",
			"Ice"
		],
		genderRatio: {
			M: 0.75,
			F: 0.25
		},
		baseStats: {
			hp: 110,
			atk: 60,
			def: 120,
			spa: 85,
			spd: 127,
			spe: 50
		},
		abilities: {
			0: "Pure Power",
			1: "Torrent",
			H: "Gluttony",
			S: "Iron Barbs"
		},
		heightm: 2.8,
		weightkg: 300,
		color: "Blue",
		prevo: "Manatorque",
		evoLevel: 50,
		eggGroups: [
			"Monster",
			"Water 2"
		],
		gen: 8
	},
	anonymouse: {
		num: 69208,
		name: "Anonymouse",
		types: [
			"Dark",
			"Electric"
		],
		genderRatio: {
			M: 0.75,
			F: 0.25
		},
		baseStats: {
			hp: 66,
			atk: 76,
			def: 66,
			spa: 76,
			spd: 66,
			spe: 86
		},
		abilities: {
			0: "Infiltrator",
			H: "Telepathy",
			S: "Electric Surge"
		},
		heightm: 0.4,
		weightkg: 3.9,
		color: "Black",
		eggGroups: [
			"Field",
			"Fairy"
		],
		gen: 8
	},
	motherfuck: {
		num: 69209,
		name: "Motherfuck",
		types: [
			"Ground",
			"Flying"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 55,
			atk: 95,
			def: 115,
			spa: 45,
			spd: 100,
			spe: 90
		},
		abilities: {
			0: "Shadow Tag",
			H: "Aftermath",
			S: "Inversion"
		},
		heightm: 1.4,
		weightkg: 106.5,
		color: "Brown",
		eggGroups: [
			"Mineral",
			"Flying"
		],
		gen: 8
	},
	ninoop: {
		num: 69210,
		name: "Ninoop",
		types: [
			"Normal"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 60,
			atk: 40,
			def: 55,
			spa: 70,
			spd: 60,
			spe: 40
		},
		abilities: {
			0: "Huge Power",
			H: "Natural Cure",
			S: "Cute Charm"
		},
		heightm: 0.5,
		weightkg: 10,
		color: "Brown",
		evos: [
			"Draconius"
		],
		eggGroups: [
			"Fairy",
			"Dragon"
		],
		gen: 8
	},
	draconius: {
		num: 69211,
		name: "Draconius",
		types: [
			"Normal",
			"Dragon"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 130,
			atk: 65,
			def: 100,
			spa: 110,
			spd: 90,
			spe: 60
		},
		abilities: {
			0: "Huge Power",
			H: "Natural Cure",
			S: "Intimidate"
		},
		heightm: 2.4,
		weightkg: 454,
		color: "Brown",
		prevo: "Ninoop",
		evoType: "levelFriendship",
		eggGroups: [
			"Fairy",
			"Dragon"
		],
		gen: 8
	},
	ticktac: {
		num: 69212,
		name: "Ticktac",
		types: [
			"Bug"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 65,
			atk: 55,
			def: 75,
			spa: 50,
			spd: 65,
			spe: 45
		},
		abilities: {
			0: "Compound Eyes",
			1: "Hyper Cutter",
			H: "Infiltrator",
			S: "Sheer Force"
		},
		heightm: 0.3,
		weightkg: 33,
		color: "Blue",
		evos: [
			"Eareticle"
		],
		eggGroups: [
			"Bug",
			"Monster"
		],
		gen: 8
	},
	eareticle: {
		num: 69213,
		name: "Eareticle",
		types: [
			"Bug",
			"Steel"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 70,
			atk: 80,
			def: 65,
			spa: 55,
			spd: 60,
			spe: 75
		},
		abilities: {
			0: "Compound Eyes",
			1: "Hyper Cutter",
			H: "Infiltrator",
			S: "Sheer Force"
		},
		heightm: 0.2,
		weightkg: 0.8,
		color: "Blue",
		prevo: "Ticktac",
		evoLevel: 44,
		evos: [
			"Scythear"
		],
		eggGroups: [
			"Bug",
			"Monster"
		],
		gen: 8
	},
	scythear: {
		num: 69214,
		name: "Scythear",
		types: [
			"Bug",
			"Steel"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 85,
			atk: 135,
			def: 85,
			spa: 60,
			spd: 70,
			spe: 115
		},
		abilities: {
			0: "Compound Eyes",
			1: "Hyper Cutter",
			H: "Infiltrator",
			S: "Sheer Force"
		},
		heightm: 2.1,
		weightkg: 79,
		color: "Blue",
		prevo: "Eareticle",
		evoLevel: 59,
		eggGroups: [
			"Bug",
			"Monster"
		],
		gen: 8
	},
	cozload: {
		num: 69215,
		name: "Cozload",
		types: [
			"Electric",
			"Bug"
		],
		gender: "N",
		baseStats: {
			hp: 60,
			atk: 65,
			def: 75,
			spa: 40,
			spd: 50,
			spe: 55
		},
		abilities: {
			0: "Download",
			1: "Thick Fat",
			H: "Simple",
			S: "Battery"
		},
		heightm: 0.2,
		weightkg: 1.4,
		color: "Gray",
		evos: [
			"Snugware",
			"Fleespecs"
		],
		eggGroups: [
			"Amorphous",
			"Bug"
		],
		gen: 8
	},
	snugware: {
		num: 69216,
		name: "Snugware",
		types: [
			"Electric",
			"Bug"
		],
		gender: "N",
		baseStats: {
			hp: 100,
			atk: 105,
			def: 110,
			spa: 75,
			spd: 80,
			spe: 75
		},
		abilities: {
			0: "Download",
			1: "Thick Fat",
			H: "Filter",
			S: "Overcoat"
		},
		heightm: 1.1,
		weightkg: 22.5,
		color: "Gray",
		prevo: "Cozload",
		evoType: "useItem",
		evoItem: "Up-Grade",
		eggGroups: [
			"Amorphous",
			"Bug"
		],
		gen: 8
	},
	fleespecs: {
		num: 69217,
		name: "Fleespecs",
		types: [
			"Electric",
			"Bug"
		],
		gender: "N",
		baseStats: {
			hp: 100,
			atk: 75,
			def: 75,
			spa: 105,
			spd: 80,
			spe: 110
		},
		abilities: {
			0: "Download",
			1: "Motor Drive",
			H: "Analytic",
			S: "Surge Surfer"
		},
		heightm: 1.1,
		weightkg: 19,
		color: "Gray",
		prevo: "Cozload",
		evoType: "useItem",
		evoItem: "Thunder Stone",
		eggGroups: [
			"Amorphous",
			"Bug"
		],
		gen: 8
	},
	honrade: {
		num: 69218,
		name: "Honrade",
		types: [
			"Fairy",
			"Fighting"
		],
		genderRatio: {
			M: 0.75,
			F: 0.25
		},
		baseStats: {
			hp: 80,
			atk: 130,
			def: 70,
			spa: 45,
			spd: 75,
			spe: 90
		},
		abilities: {
			0: "Blademaster",
			1: "Justified",
			H: "Hyper Cutter",
			S: "No Guard"
		},
		heightm: 1,
		weightkg: 28,
		color: "Blue",
		eggGroups: [
			"Fairy",
			"Field"
		],
		gen: 8
	},
	embortion: {
		num: 69219,
		name: "Embortion",
		types: [
			"Dark",
			"Ghost"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 50,
			atk: 45,
			def: 90,
			spa: 50,
			spd: 105,
			spe: 55
		},
		abilities: {
			0: "Pressure",
			H: "Unnerve",
			S: "Insomnia"
		},
		heightm: 0.5,
		weightkg: 6.6,
		color: "Red",
		evos: [
			"Premantom"
		],
		eggGroups: [
			"Amorphous",
			"Human-Like"
		],
		gen: 8
	},
	premantom: {
		num: 69220,
		name: "Premantom",
		types: [
			"Dark",
			"Ghost"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 80,
			atk: 75,
			def: 110,
			spa: 85,
			spd: 120,
			spe: 85
		},
		abilities: {
			0: "Pressure",
			H: "Unnerve",
			S: "Insomnia"
		},
		heightm: 1.3,
		weightkg: 31,
		color: "Red",
		prevo: "Embortion",
		evoLevel: 37,
		eggGroups: [
			"Amorphous",
			"Human-Like"
		],
		gen: 8
	},
	galavik: {
		num: 69221,
		name: "Galavik",
		types: [
			"Steel"
		],
		gender: "N",
		baseStats: {
			hp: 65,
			atk: 40,
			def: 70,
			spa: 40,
			spd: 65,
			spe: 35
		},
		abilities: {
			0: "Liquid Ooze",
			H: "Heavy Metal",
			S: "Battery"
		},
		heightm: 0.9,
		weightkg: 30,
		color: "Gray",
		evos: [
			"Galavire",
			"Galaviste"
		],
		eggGroups: [
			"Amorphous",
			"Mineral"
		],
		gen: 8
	},
	galavire: {
		num: 69222,
		name: "Galavire",
		types: [
			"Steel",
			"Electric"
		],
		gender: "N",
		baseStats: {
			hp: 70,
			atk: 60,
			def: 95,
			spa: 130,
			spd: 90,
			spe: 105
		},
		abilities: {
			0: "Levitate",
			H: "Heavy Metal",
			S: "Teravolt"
		},
		heightm: 2.3,
		weightkg: 105.5,
		color: "Gray",
		prevo: "Galavik",
		evoLevel: 34,
		evoCondition: "with an Atk stat > its SpAtk stat",
		eggGroups: [
			"Amorphous",
			"Mineral"
		],
		gen: 8
	},
	galaviste: {
		num: 69223,
		name: "Galaviste",
		types: [
			"Steel",
			"Fighting"
		],
		gender: "N",
		baseStats: {
			hp: 110,
			atk: 130,
			def: 95,
			spa: 60,
			spd: 90,
			spe: 65
		},
		abilities: {
			0: "Intimidate",
			H: "Heavy Metal",
			S: "Motor Drive"
		},
		heightm: 2.8,
		weightkg: 345,
		color: "Gray",
		prevo: "Galavik",
		evoLevel: 34,
		evoCondition: "with an Atk stat < its SpAtk stat",
		eggGroups: [
			"Amorphous",
			"Mineral"
		],
		gen: 8
	},
	pollefin: {
		num: 69224,
		name: "Pollefin",
		types: [
			"Water",
			"Grass"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 30,
			atk: 20,
			def: 20,
			spa: 40,
			spd: 50,
			spe: 80
		},
		abilities: {
			0: "Effect Spore",
			1: "Flower Veil",
			H: "Shield Dust",
			S: "Swift Swim"
		},
		heightm: 0.4,
		weightkg: 4.2,
		color: "Green",
		evos: [
			"Florigrace"
		],
		eggGroups: [
			"Water 2",
			"Grass"
		],
		gen: 8
	},
	florigrace: {
		num: 69225,
		name: "Florigrace",
		types: [
			"Water",
			"Grass"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 105,
			atk: 50,
			def: 70,
			spa: 90,
			spd: 90,
			spe: 85
		},
		abilities: {
			0: "Effect Spore",
			1: "Flower Veil",
			H: "Shield Dust",
			S: "Swift Swim"
		},
		heightm: 0.9,
		weightkg: 22.6,
		color: "Green",
		prevo: "Pollefin",
		evoLevel: 26,
		eggGroups: [
			"Water 2",
			"Grass"
		],
		gen: 8
	},
	lasslee: {
		num: 69226,
		name: "Lasslee",
		types: [
			"Psychic"
		],
		genderRatio: {
			M: 0.875,
			F: 0.125
		},
		baseStats: {
			hp: 70,
			atk: 40,
			def: 70,
			spa: 80,
			spd: 75,
			spe: 30
		},
		abilities: {
			0: "Synchronize",
			1: "Cute Charm",
			H: "Infiltrator",
			S: "Limber"
		},
		heightm: 0.8,
		weightkg: 9.4,
		color: "Blue",
		evos: [
			"Wifemin"
		],
		eggGroups: [
			"Amorphous",
			"Human-Like"
		],
		gen: 8
	},
	wifemin: {
		num: 69227,
		name: "Wifemin",
		types: [
			"Psychic"
		],
		genderRatio: {
			M: 0.875,
			F: 0.125
		},
		baseStats: {
			hp: 110,
			atk: 60,
			def: 110,
			spa: 90,
			spd: 115,
			spe: 50
		},
		abilities: {
			0: "Synchronize",
			1: "Cute Charm",
			H: "Infiltrator",
			S: "Thick Fat"
		},
		heightm: 1.6,
		weightkg: 49.6,
		color: "Blue",
		prevo: "Lasslee",
		evoLevel: 39,
		eggGroups: [
			"Amorphous",
			"Human-Like"
		],
		gen: 8
	},
	uwotto: {
		num: 69228,
		name: "Uwotto",
		types: [
			"Psychic",
			"Steel"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 80,
			atk: 110,
			def: 105,
			spa: 90,
			spd: 100,
			spe: 80
		},
		abilities: {
			0: "Compound Eyes",
			1: "Intimidate",
			H: "Heavy Metal",
			S: "Bulletproof"
		},
		heightm: 1.6,
		weightkg: 84.5,
		color: "Black",
		prevo: "Ayylamo",
		evoType: "useItem",
		evoItem: "Metal Coat",
		eggGroups: [
			"Amorphous",
			"Human-Like"
		],
		gen: 8
	},
	venowatt: {
		num: 69229,
		name: "Venowatt",
		types: [
			"Electric",
			"Poison"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 85,
			atk: 60,
			def: 115,
			spa: 110,
			spd: 95,
			spe: 75
		},
		abilities: {
			0: "Illuminate",
			1: "Illuminate",
			H: "Swarm",
			S: "Levitate"
		},
		heightm: 1.7,
		weightkg: 51.5,
		color: "Gray",
		prevo: "Proboskito",
		evoType: "useItem",
		evoItem: "Thunder Stone",
		eggGroups: [
			"Bug"
		],
		gen: 8
	},
	vaultevour: {
		num: 69230,
		name: "Vaultevour",
		types: [
			"Steel",
			"Dark"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 80,
			atk: 140,
			def: 105,
			spa: 50,
			spd: 110,
			spe: 40
		},
		abilities: {
			0: "Strong Jaw",
			H: "Pickup",
			S: "Jewelry"
		},
		heightm: 1.4,
		weightkg: 250,
		color: "Gray",
		prevo: "Chompest",
		evoType: "useItem",
		evoItem: "Metal Coat",
		eggGroups: [
			"Amorphous",
			"Mineral"
		],
		gen: 8
	},
	semdemen: {
		num: 69231,
		name: "Semdemen",
		types: [
			"Water",
			"Ground"
		],
		genderRatio: {
			M: 0.875,
			F: 0.125
		},
		baseStats: {
			hp: 130,
			atk: 55,
			def: 100,
			spa: 90,
			spd: 120,
			spe: 60
		},
		abilities: {
			0: "Insomnia",
			1: "Immunity",
			H: "Damp",
			S: "Liquid Ooze"
		},
		heightm: 1.6,
		weightkg: 90.5,
		color: "White",
		prevo: "Semrust",
		evoType: "useItem",
		evoItem: "Water Stone",
		eggGroups: [
			"Amorphous",
			"Monster"
		],
		gen: 8
	},
	dragking: {
		num: 69232,
		name: "Dragking",
		types: [
			"Fairy"
		],
		gender: "F",
		baseStats: {
			hp: 65,
			atk: 100,
			def: 75,
			spa: 80,
			spd: 70,
			spe: 110
		},
		abilities: {
			0: "Oblivious",
			1: "Serene Grace",
			H: "Pozzed",
			S: "Receiver"
		},
		heightm: 1.7,
		weightkg: 95,
		color: "Purple",
		prevo: "Inbitween",
		evoType: "useItem",
		evoItem: "Sun Stone",
		eggGroups: [
			"Field",
			"Fairy"
		],
		gen: 8
	},
	kuuroba: {
		num: 69233,
		name: "Kuuroba",
		types: [
			"Grass",
			"Fighting"
		],
		genderRatio: {
			M: 0.25,
			F: 0.75
		},
		baseStats: {
			hp: 90,
			atk: 105,
			def: 90,
			spa: 80,
			spd: 90,
			spe: 75
		},
		abilities: {
			0: "Huge Power",
			1: "Huge Power",
			H: "Super Luck",
			S: "Pure Power"
		},
		heightm: 1.9,
		weightkg: 102,
		color: "Green",
		prevo: "Clovour",
		evoLevel: 60,
		eggGroups: [
			"Fairy",
			"Grass"
		],
		gen: 8
	},
	baitmaster: {
		num: 69234,
		name: "Baitmaster",
		types: [
			"Water",
			"Fairy"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 85,
			atk: 69,
			def: 70,
			spa: 105,
			spd: 83,
			spe: 115
		},
		abilities: {
			0: "Regenerator",
			H: "Dazzling",
			S: "Competitive"
		},
		heightm: 2,
		weightkg: 80.5,
		color: "Blue",
		prevo: "Tulure",
		evoType: "useItem",
		evoItem: "Sun Stone",
		eggGroups: [
			"Monster",
			"Water 2"
		],
		gen: 8
	},
	spookster: {
		num: 69235,
		name: "Spookster",
		types: [
			"Ghost"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 30,
			atk: 80,
			def: 50,
			spa: 30,
			spd: 40,
			spe: 70
		},
		abilities: {
			0: "Cursed Body",
			1: "Levitate",
			H: "Insomnia",
			S: "Bone Zone"
		},
		heightm: 0.9,
		weightkg: 1,
		color: "Purple",
		evos: [
			"Spookeer"
		],
		eggGroups: [
			"Amorphous"
		],
		gen: 8
	},
	spookeer: {
		num: 69236,
		name: "Spookeer",
		types: [
			"Ghost"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 55,
			atk: 105,
			def: 70,
			spa: 40,
			spd: 55,
			spe: 95
		},
		abilities: {
			0: "Cursed Body",
			1: "Intimidate",
			H: "Insomnia",
			S: "Bone Zone"
		},
		heightm: 1.2,
		weightkg: 7,
		color: "Purple",
		prevo: "Spookster",
		evoLevel: 35,
		evos: [
			"Spookzilla"
		],
		eggGroups: [
			"Amorphous"
		],
		gen: 8
	},
	spookzilla: {
		num: 69237,
		name: "Spookzilla",
		types: [
			"Ghost"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 90,
			atk: 137,
			def: 105,
			spa: 73,
			spd: 85,
			spe: 110
		},
		abilities: {
			0: "Cursed Body",
			1: "Intimidate",
			H: "Insomnia",
			S: "Bone Zone"
		},
		heightm: 1.6,
		weightkg: 15.5,
		color: "Purple",
		prevo: "Spookeer",
		evoLevel: 55,
		eggGroups: [
			"Amorphous"
		],
		gen: 8
	},
	derpato: {
		num: 69238,
		name: "Derpato",
		types: [
			"Ground"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 68,
			atk: 52,
			def: 50,
			spa: 45,
			spd: 40,
			spe: 20
		},
		abilities: {
			0: "Oblivious",
			1: "Klutz",
			H: "Unaware",
			S: "Simple"
		},
		heightm: 0.3,
		weightkg: 1.2,
		color: "Brown",
		evos: [
			"Retater"
		],
		eggGroups: [
			"Fairy",
			"Grass"
		],
		gen: 8
	},
	retater: {
		num: 69239,
		name: "Retater",
		types: [
			"Ground"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 85,
			atk: 108,
			def: 92,
			spa: 67,
			spd: 63,
			spe: 50
		},
		abilities: {
			0: "Oblivious",
			1: "Klutz",
			H: "Unaware",
			S: "Simple"
		},
		heightm: 0.8,
		weightkg: 10.3,
		color: "Brown",
		prevo: "Derpato",
		evoLevel: 40,
		evos: [
			"Potarded"
		],
		eggGroups: [
			"Fairy",
			"Grass"
		],
		gen: 8
	},
	potarded: {
		num: 69240,
		name: "Potarded",
		types: [
			"Ground"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 110,
			atk: 145,
			def: 116,
			spa: 80,
			spd: 79,
			spe: 70
		},
		abilities: {
			0: "Oblivious",
			1: "Klutz",
			H: "Unaware",
			S: "Rock Head"
		},
		heightm: 1.2,
		weightkg: 40,
		color: "Brown",
		prevo: "Retater",
		evoLevel: 60,
		eggGroups: [
			"Fairy",
			"Grass"
		],
		gen: 8
	},
	sadfish: {
		num: 69241,
		name: "Sadfish",
		types: [
			"Water"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 115,
			atk: 60,
			def: 75,
			spa: 70,
			spd: 75,
			spe: 40
		},
		abilities: {
			0: "Drizzle",
			H: "Defeatist",
			S: "Defeatist"
		},
		heightm: 1,
		weightkg: 18,
		color: "Blue",
		eggGroups: [
			"Water 2"
		],
		gen: 8
	},
	deloris: {
		num: 69242,
		name: "Deloris",
		types: [
			"Grass",
			"Ghost"
		],
		gender: "F",
		baseStats: {
			hp: 90,
			atk: 90,
			def: 75,
			spa: 90,
			spd: 90,
			spe: 80
		},
		abilities: {
			0: "Own Tempo",
			H: "Wonder Skin",
			S: "Tangling Hair"
		},
		heightm: 2.4,
		weightkg: 122.5,
		color: "Pink",
		eggGroups: [
			"Fairy",
			"Grass"
		],
		gen: 8
	},
	oreon: {
		num: 69243,
		name: "Oreon",
		types: [
			"Fairy",
			"Dark"
		],
		genderRatio: {
			M: 0.875,
			F: 0.125
		},
		baseStats: {
			hp: 95,
			atk: 60,
			def: 65,
			spa: 130,
			spd: 65,
			spe: 110
		},
		abilities: {
			0: "Super Luck",
			H: "Run Away",
			S: "Sweet Veil"
		},
		heightm: 1,
		weightkg: 27,
		color: "Black",
		eggGroups: [
			"Field"
		],
		gen: 8
	},
	farfigtron: {
		num: 69244,
		name: "Farfigtron",
		types: [
			"Fire",
			"Fighting"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 80,
			atk: 127,
			def: 73,
			spa: 107,
			spd: 63,
			spe: 102
		},
		abilities: {
			0: "No Guard",
			H: "Anger Point",
			S: "Mold Breaker"
		},
		heightm: 2.6,
		weightkg: 106.5,
		color: "Red",
		eggGroups: [
			"Field",
			"Monster"
		],
		gen: 8
	},
	regirode: {
		num: 69245,
		name: "Regirode",
		types: [
			"Rock",
			"Ghost"
		],
		gender: "N",
		baseStats: {
			hp: 80,
			atk: 50,
			def: 75,
			spa: 125,
			spd: 150,
			spe: 100
		},
		abilities: {
			0: "Weak Armor",
			H: "Cursed Body",
			S: "Shadow Shield"
		},
		heightm: 1.7,
		weightkg: 148.4,
		color: "Brown",
		eggGroups: [
			"Undiscovered"
		],
		gen: 8
	},
	regimelt: {
		num: 69246,
		name: "Regimelt",
		types: [
			"Ice",
			"Ghost"
		],
		gender: "N",
		baseStats: {
			hp: 80,
			atk: 125,
			def: 150,
			spa: 50,
			spd: 75,
			spe: 100
		},
		abilities: {
			0: "Weak Armor",
			H: "Cursed Body",
			S: "Shadow Shield"
		},
		heightm: 1.8,
		weightkg: 86.3,
		color: "Blue",
		eggGroups: [
			"Undiscovered"
		],
		gen: 8
	},
	regirust: {
		num: 69247,
		name: "Regirust",
		types: [
			"Steel",
			"Ghost"
		],
		gender: "N",
		baseStats: {
			hp: 80,
			atk: 85,
			def: 115,
			spa: 85,
			spd: 115,
			spe: 100
		},
		abilities: {
			0: "Weak Armor",
			H: "Cursed Body",
			S: "Shadow Shield"
		},
		heightm: 1.9,
		weightkg: 182.1,
		color: "Red",
		eggGroups: [
			"Undiscovered"
		],
		gen: 8
	},
	jewipede: {
		num: 69248,
		name: "Jewipede",
		types: [
			"Bug",
			"Normal"
		],
		gender: "M",
		baseStats: {
			hp: 105,
			atk: 90,
			def: 150,
			spa: 90,
			spd: 150,
			spe: 95
		},
		abilities: {
			0: "Pressure",
			H: "Pickpocket",
			S: "Jewelry"
		},
		heightm: 21,
		weightkg: 206.5,
		color: "Green",
		eggGroups: [
			"Undiscovered"
		],
		gen: 8
	},
	vivaiger: {
		num: 69249,
		name: "Vivaiger",
		types: [
			"Electric"
		],
		gender: "N",
		baseStats: {
			hp: 95,
			atk: 100,
			def: 105,
			spa: 150,
			spd: 100,
			spe: 100
		},
		abilities: {
			0: "Flame Body",
			H: "Regenerator",
			S: "Flare Heal"
		},
		heightm: 2.5,
		weightkg: 650,
		color: "Brown",
		eggGroups: [
			"Undiscovered"
		],
		gen: 8
	},
	heliofug: {
		num: 69250,
		name: "Heliofug",
		types: [
			"Dragon",
			"Fire"
		],
		gender: "N",
		baseStats: {
			hp: 85,
			atk: 140,
			def: 90,
			spa: 140,
			spd: 90,
			spe: 95
		},
		abilities: {
			0: "Drought",
			H: "Air Lock",
			S: "Drizzle"
		},
		heightm: 7,
		weightkg: 260,
		color: "Green",
		eggGroups: [
			"Undiscovered"
		],
		gen: 8
	},
	adesign: {
		num: 69251,
		name: "Adesign",
		types: [
			"???"
		],
		gender: "N",
		baseStats: {
			hp: 115,
			atk: 115,
			def: 115,
			spa: 115,
			spd: 115,
			spe: 115
		},
		abilities: {
			0: "An Ability",
			H: "Any Ability"
		},
		heightm: 2,
		weightkg: 0.5,
		color: "White",
		eggGroups: [
			"Undiscovered"
		],
		gen: 8
	},
	sadrog: {
		num: 69252,
		name: "Sadrog",
		types: [
			"Grass"
		],
		genderRatio: {
			M: 0.875,
			F: 0.125
		},
		baseStats: {
			hp: 44,
			atk: 55,
			def: 75,
			spa: 40,
			spd: 69,
			spe: 35
		},
		abilities: {
			0: "Overgrow",
			H: "Defeatist",
			S: "Oblivious"
		},
		heightm: 0.5,
		weightkg: 6.9,
		color: "Green",
		evos: [
			"Smugrok"
		],
		eggGroups: [
			"Grass",
			"Monster"
		],
		gen: 8
	},
	smugrok: {
		num: 69253,
		name: "Smugrok",
		types: [
			"Grass"
		],
		genderRatio: {
			M: 0.875,
			F: 0.125
		},
		baseStats: {
			hp: 75,
			atk: 70,
			def: 90,
			spa: 50,
			spd: 75,
			spe: 45
		},
		abilities: {
			0: "Overgrow",
			H: "Unaware",
			S: "Oblivious"
		},
		heightm: 0.9,
		weightkg: 21.6,
		color: "Green",
		prevo: "Sadrog",
		evoLevel: 17,
		evos: [
			"Peperee"
		],
		eggGroups: [
			"Grass",
			"Monster"
		],
		gen: 8
	},
	peperee: {
		num: 69254,
		name: "Peperee",
		types: [
			"Grass",
			"Rock"
		],
		genderRatio: {
			M: 0.875,
			F: 0.125
		},
		baseStats: {
			hp: 100,
			atk: 90,
			def: 120,
			spa: 55,
			spd: 95,
			spe: 65
		},
		abilities: {
			0: "Overgrow",
			H: "Anger Point",
			S: "Soundproof"
		},
		heightm: 1.7,
		weightkg: 155.5,
		color: "Green",
		prevo: "Smugrok",
		evoLevel: 38,
		eggGroups: [
			"Grass",
			"Monster"
		],
		gen: 8
	},
	hodtog: {
		num: 69255,
		name: "Hodtog",
		types: [
			"Fire"
		],
		genderRatio: {
			M: 0.875,
			F: 0.125
		},
		baseStats: {
			hp: 45,
			atk: 55,
			def: 43,
			spa: 60,
			spd: 50,
			spe: 65
		},
		abilities: {
			0: "Blaze",
			H: "Wonder Skin",
			S: "Skill Link"
		},
		heightm: 0.6,
		weightkg: 15.1,
		color: "Red",
		evos: [
			"Wienebark"
		],
		eggGroups: [
			"Field",
			"Dragon"
		],
		gen: 8
	},
	wienebark: {
		num: 69256,
		name: "Wienebark",
		types: [
			"Fire"
		],
		genderRatio: {
			M: 0.875,
			F: 0.125
		},
		baseStats: {
			hp: 60,
			atk: 65,
			def: 55,
			spa: 85,
			spd: 60,
			spe: 80
		},
		abilities: {
			0: "Blaze",
			H: "Wonder Skin",
			S: "Skill Link"
		},
		heightm: 1.3,
		weightkg: 46.5,
		color: "Red",
		prevo: "Hodtog",
		evoLevel: 17,
		evos: [
			"Saudoge"
		],
		eggGroups: [
			"Field",
			"Dragon"
		],
		gen: 8
	},
	saudoge: {
		num: 69257,
		name: "Saudoge",
		types: [
			"Fire",
			"Flying"
		],
		genderRatio: {
			M: 0.875,
			F: 0.125
		},
		baseStats: {
			hp: 80,
			atk: 80,
			def: 65,
			spa: 120,
			spd: 80,
			spe: 100
		},
		abilities: {
			0: "Blaze",
			H: "Wonder Skin",
			S: "Skill Link"
		},
		heightm: 3.2,
		weightkg: 130.1,
		color: "Red",
		prevo: "Wienebark",
		evoLevel: 38,
		eggGroups: [
			"Field",
			"Dragon"
		],
		gen: 8
	},
	gnarrk: {
		num: 69258,
		name: "Gnarrk",
		types: [
			"Water"
		],
		genderRatio: {
			M: 0.875,
			F: 0.125
		},
		baseStats: {
			hp: 49,
			atk: 70,
			def: 50,
			spa: 45,
			spd: 49,
			spe: 55
		},
		abilities: {
			0: "Torrent",
			H: "Download",
			S: "Mold Breaker"
		},
		heightm: 0.7,
		weightkg: 21.2,
		color: "Blue",
		evos: [
			"Corsharrk"
		],
		eggGroups: [
			"Water 1",
			"Water 2"
		],
		gen: 8
	},
	corsharrk: {
		num: 69259,
		name: "Corsharrk",
		types: [
			"Water"
		],
		genderRatio: {
			M: 0.875,
			F: 0.125
		},
		baseStats: {
			hp: 70,
			atk: 80,
			def: 70,
			spa: 55,
			spd: 65,
			spe: 65
		},
		abilities: {
			0: "Torrent",
			H: "Download",
			S: "Mold Breaker"
		},
		heightm: 1.1,
		weightkg: 30,
		color: "Blue",
		prevo: "Gnarrk",
		evoLevel: 17,
		evos: [
			"Davyjaws"
		],
		eggGroups: [
			"Water 1",
			"Water 2"
		],
		gen: 8
	},
	davyjaws: {
		num: 69260,
		name: "Davyjaws",
		types: [
			"Water",
			"Fighting"
		],
		genderRatio: {
			M: 0.875,
			F: 0.125
		},
		baseStats: {
			hp: 90,
			atk: 120,
			def: 85,
			spa: 65,
			spd: 85,
			spe: 80
		},
		abilities: {
			0: "Torrent",
			H: "Download",
			S: "Mold Breaker"
		},
		heightm: 1.7,
		weightkg: 140,
		color: "Blue",
		prevo: "Corsharrk",
		evoLevel: 38,
		eggGroups: [
			"Water 1",
			"Water 2"
		],
		gen: 8
	},
	humpunny: {
		num: 69261,
		name: "Humpunny",
		types: [
			"Normal"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 60,
			atk: 43,
			def: 57,
			spa: 29,
			spd: 35,
			spe: 50
		},
		abilities: {
			0: "Run Away",
			1: "Quick Feet",
			H: "Fur Coat",
			S: "Huge Power"
		},
		heightm: 0.8,
		weightkg: 11,
		color: "Yellow",
		evos: [
			"Bunnorgy"
		],
		eggGroups: [
			"Field"
		],
		gen: 8
	},
	bunnorgy: {
		num: 69262,
		name: "Bunnorgy",
		types: [
			"Normal"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 80,
			atk: 73,
			def: 77,
			spa: 45,
			spd: 69,
			spe: 90
		},
		abilities: {
			0: "Hustle",
			1: "Speed Boost",
			H: "Fur Coat",
			S: "Huge Power"
		},
		heightm: 2.2,
		weightkg: 120,
		color: "Yellow",
		prevo: "Humpunny",
		evoLevel: 17,
		eggGroups: [
			"Field"
		],
		gen: 8
	},
	emelgy: {
		num: 69263,
		name: "Emelgy",
		types: [
			"Normal",
			"Flying"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 40,
			atk: 45,
			def: 35,
			spa: 40,
			spd: 30,
			spe: 60
		},
		abilities: {
			0: "Sniper",
			1: "Keen Eye",
			H: "Competitive",
			S: "Rivalry"
		},
		heightm: 0.3,
		weightkg: 7.5,
		color: "White",
		evos: [
			"Fedorawk"
		],
		eggGroups: [
			"Flying"
		],
		gen: 8
	},
	fedorawk: {
		num: 69264,
		name: "Fedorawk",
		types: [
			"Fire",
			"Flying"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 55,
			atk: 65,
			def: 50,
			spa: 60,
			spd: 45,
			spe: 90
		},
		abilities: {
			0: "Sniper",
			1: "Keen Eye",
			H: "Competitive",
			S: "Rivalry"
		},
		heightm: 1.1,
		weightkg: 24.5,
		color: "White",
		prevo: "Emelgy",
		evoLevel: 16,
		evos: [
			"FaZeagle"
		],
		eggGroups: [
			"Flying"
		],
		gen: 8
	},
	fazeagle: {
		num: 69265,
		name: "FaZeagle",
		types: [
			"Fire",
			"Flying"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 75,
			atk: 90,
			def: 60,
			spa: 85,
			spd: 60,
			spe: 110
		},
		abilities: {
			0: "Sniper",
			1: "Keen Eye",
			H: "Competitive",
			S: "Rivalry"
		},
		heightm: 1.7,
		weightkg: 75.5,
		color: "Red",
		prevo: "Fedorawk",
		evoLevel: 32,
		eggGroups: [
			"Flying"
		],
		gen: 8
	},
	catikillar: {
		num: 69266,
		name: "Catikillar",
		types: [
			"Bug"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 30,
			atk: 41,
			def: 50,
			spa: 31,
			spd: 40,
			spe: 25
		},
		abilities: {
			0: "Shield Dust",
			1: "Swarm",
			H: "Compound Eyes",
			S: "Dark Aura"
		},
		heightm: 0.2,
		weightkg: 0.9,
		color: "Brown",
		evos: [
			"Tikoon"
		],
		eggGroups: [
			"Bug"
		],
		gen: 8
	},
	tikoon: {
		num: 69267,
		name: "Tikoon",
		types: [
			"Bug"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 57,
			atk: 42,
			def: 90,
			spa: 32,
			spd: 80,
			spe: 20
		},
		abilities: {
			0: "Shell Armor",
			1: "Swarm",
			H: "Compound Eyes",
			S: "Dark Aura"
		},
		heightm: 0.6,
		weightkg: 9,
		color: "Brown",
		prevo: "Catikillar",
		evoLevel: 15,
		evos: [
			"Oogabuga"
		],
		eggGroups: [
			"Bug"
		],
		gen: 8
	},
	oogabuga: {
		num: 69268,
		name: "Oogabuga",
		types: [
			"Bug",
			"Grass"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 77,
			atk: 62,
			def: 110,
			spa: 92,
			spd: 90,
			spe: 65
		},
		abilities: {
			0: "Intimidate",
			1: "Swarm",
			H: "Grassy Surge",
			S: "Dark Aura"
		},
		heightm: 1.2,
		weightkg: 27.2,
		color: "Brown",
		prevo: "Tikoon",
		evoLevel: 30,
		eggGroups: [
			"Bug"
		],
		gen: 8
	},
	ebining: {
		num: 69269,
		name: "Ebining",
		types: [
			"Dark"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 55,
			atk: 80,
			def: 55,
			spa: 55,
			spd: 40,
			spe: 65
		},
		abilities: {
			0: "Prankster",
			1: "Defiant",
			H: "Contrary",
			S: "Degradation"
		},
		heightm: 0.9,
		weightkg: 10,
		color: "Green",
		evos: [
			"Emplyin"
		],
		eggGroups: [
			"Amorphous"
		],
		gen: 8
	},
	emplyin: {
		num: 69270,
		name: "Emplyin",
		types: [
			"Dark"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 70,
			atk: 117,
			def: 60,
			spa: 75,
			spd: 55,
			spe: 93
		},
		abilities: {
			0: "Prankster",
			1: "Defiant",
			H: "Contrary",
			S: "Degradation"
		},
		heightm: 1,
		weightkg: 31.5,
		color: "Green",
		prevo: "Ebining",
		evoLevel: 24,
		eggGroups: [
			"Amorphous"
		],
		gen: 8
	},
	upbote: {
		num: 69271,
		name: "Upbote",
		types: [
			"Psychic"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 81,
			atk: 35,
			def: 41,
			spa: 71,
			spd: 82,
			spe: 40
		},
		abilities: {
			0: "Plus",
			1: "Minus",
			H: "Trace",
			S: "Emergency Exit"
		},
		heightm: 0.6,
		weightkg: 8,
		color: "White",
		evos: [
			"Upbeddit"
		],
		eggGroups: [
			"Amorphous"
		],
		gen: 8
	},
	upbeddit: {
		num: 69272,
		name: "Upbeddit",
		types: [
			"Psychic"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 82,
			atk: 50,
			def: 72,
			spa: 92,
			spd: 117,
			spe: 57
		},
		abilities: {
			0: "Plus",
			1: "Minus",
			H: "Trace",
			S: "Emergency Exit"
		},
		heightm: 1.1,
		weightkg: 20,
		color: "White",
		prevo: "Upbote",
		evoLevel: 24,
		eggGroups: [
			"Amorphous"
		],
		gen: 8
	},
	flipbird: {
		num: 69273,
		name: "Flipbird",
		types: [
			"Normal",
			"Flying"
		],
		genderRatio: {
			M: 0.25,
			F: 0.75
		},
		baseStats: {
			hp: 32,
			atk: 40,
			def: 33,
			spa: 30,
			spd: 30,
			spe: 72
		},
		abilities: {
			0: "Defeatist",
			1: "Keen Eye",
			H: "Early Bird",
			S: "Wimp Out"
		},
		heightm: 0.3,
		weightkg: 1.5,
		color: "White",
		evos: [
			"Wheygle"
		],
		eggGroups: [
			"Flying",
			"Human-Like"
		],
		gen: 8
	},
	wheygle: {
		num: 69274,
		name: "Wheygle",
		types: [
			"Fighting",
			"Flying"
		],
		genderRatio: {
			M: 0.25,
			F: 0.75
		},
		baseStats: {
			hp: 82,
			atk: 125,
			def: 77,
			spa: 45,
			spd: 65,
			spe: 93
		},
		abilities: {
			0: "Big Pecks",
			1: "No Guard",
			H: "Steelworker",
			S: "Unburden"
		},
		heightm: 1.5,
		weightkg: 50.5,
		color: "Brown",
		prevo: "Flipbird",
		evoLevel: 27,
		eggGroups: [
			"Flying",
			"Human-Like"
		],
		gen: 8
	},
	gangnome: {
		num: 69275,
		name: "Gangnome",
		types: [
			"Fairy"
		],
		genderRatio: {
			M: 0.75,
			F: 0.25
		},
		baseStats: {
			hp: 120,
			atk: 50,
			def: 115,
			spa: 55,
			spd: 125,
			spe: 40
		},
		abilities: {
			0: "Soundproof",
			1: "Concert",
			H: "Tangled Feet",
			S: "Natural Cure"
		},
		heightm: 1,
		weightkg: 22.5,
		color: "Green",
		eggGroups: [
			"Human-Like"
		],
		gen: 8
	},
	pyongnome: {
		num: 69276,
		name: "Pyongnome",
		types: [
			"Steel"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 70,
			atk: 135,
			def: 60,
			spa: 115,
			spd: 45,
			spe: 80
		},
		abilities: {
			0: "Intimidate",
			H: "Bulletproof",
			S: "Sheer Force"
		},
		heightm: 1,
		weightkg: 22.5,
		color: "Green",
		eggGroups: [
			"Human-Like"
		],
		gen: 8
	},
	bruhkid: {
		num: 69277,
		name: "Bruhkid",
		types: [
			"Ground",
			"Fighting"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 60,
			atk: 75,
			def: 60,
			spa: 50,
			spd: 60,
			spe: 35
		},
		abilities: {
			0: "Stamina",
			1: "Sturdy",
			H: "Sand Force",
			S: "Moxie"
		},
		heightm: 0.7,
		weightkg: 21.5,
		color: "Brown",
		evos: [
			"Ubruh"
		],
		eggGroups: [
			"Mineral",
			"Human-Like"
		],
		gen: 8
	},
	ubruh: {
		num: 69278,
		name: "Ubruh",
		types: [
			"Ground",
			"Fighting"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 90,
			atk: 120,
			def: 90,
			spa: 70,
			spd: 80,
			spe: 65
		},
		abilities: {
			0: "Stamina",
			1: "Sturdy",
			H: "Sand Force",
			S: "Moxie"
		},
		heightm: 2,
		weightkg: 90,
		color: "Brown",
		prevo: "Bruhkid",
		evoLevel: 30,
		eggGroups: [
			"Mineral",
			"Human-Like"
		],
		gen: 8
	},
	walruse: {
		num: 69279,
		name: "Walruse",
		types: [
			"Water"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 60,
			atk: 65,
			def: 43,
			spa: 50,
			spd: 40,
			spe: 50
		},
		abilities: {
			0: "Hydration",
			1: "Oblivious",
			H: "Defiant",
			S: "Rain Dish"
		},
		heightm: 1.1,
		weightkg: 90,
		color: "Blue",
		evos: [
			"Walruskie"
		],
		eggGroups: [
			"Water 1"
		],
		gen: 8
	},
	walruskie: {
		num: 69280,
		name: "Walruskie",
		types: [
			"Water"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 120,
			atk: 95,
			def: 83,
			spa: 60,
			spd: 70,
			spe: 80
		},
		abilities: {
			0: "Hydration",
			1: "Oblivious",
			H: "Defiant",
			S: "Steelworker"
		},
		heightm: 1.4,
		weightkg: 150.6,
		color: "Blue",
		prevo: "Walruse",
		evoLevel: 30,
		eggGroups: [
			"Water 1"
		],
		gen: 8
	},
	diobat: {
		num: 69281,
		name: "Diobat",
		types: [
			"Dark",
			"Flying"
		],
		genderRatio: {
			M: 0.75,
			F: 0.25
		},
		baseStats: {
			hp: 50,
			atk: 75,
			def: 45,
			spa: 65,
			spd: 45,
			spe: 90
		},
		abilities: {
			0: "Regenerator",
			H: "Forewarn",
			S: "Frisk"
		},
		heightm: 0.5,
		weightkg: 8,
		color: "Yellow",
		evos: [
			"warudio"
		],
		eggGroups: [
			"Human-Like",
			"Flying"
		],
		gen: 8
	},
	warudio: {
		num: 69282,
		name: "Warudio",
		types: [
			"Dark",
			"Fighting"
		],
		genderRatio: {
			M: 0.75,
			F: 0.25
		},
		baseStats: {
			hp: 80,
			atk: 105,
			def: 80,
			spa: 85,
			spd: 80,
			spe: 120
		},
		abilities: {
			0: "Regenerator",
			H: "Forewarn",
			S: "Frisk"
		},
		heightm: 1.9,
		weightkg: 105,
		color: "Yellow",
		prevo: "Diobat",
		evoType: "useItem",
		evoItem: "Moon Stone",
		eggGroups: [
			"Human-Like",
			"Flying"
		],
		gen: 8
	},
	docee: {
		num: 69283,
		name: "Docee",
		types: [
			"Steel"
		],
		gender: "N",
		baseStats: {
			hp: 37,
			atk: 60,
			def: 73,
			spa: 20,
			spd: 65,
			spe: 85
		},
		abilities: {
			0: "Trace",
			1: "Color Change",
			H: "Full Metal Body",
			S: "Neuroforce"
		},
		heightm: 0.4,
		weightkg: 5,
		color: "Gray",
		evos: [
			"Donutsteel"
		],
		eggGroups: [
			"Mineral"
		],
		gen: 8
	},
	donutsteel: {
		num: 69284,
		name: "Donutsteel",
		types: [
			"Steel"
		],
		gender: "N",
		baseStats: {
			hp: 67,
			atk: 80,
			def: 113,
			spa: 48,
			spd: 85,
			spe: 112
		},
		abilities: {
			0: "Trace",
			1: "Color Change",
			H: "Full Metal Body",
			S: "Neuroforce"
		},
		heightm: 1,
		weightkg: 35,
		color: "Gray",
		prevo: "Docee",
		evoType: "levelFriendship",
		eggGroups: [
			"Mineral"
		],
		gen: 8
	},
	cakupple: {
		num: 69285,
		name: "Cakupple",
		types: [
			"Grass",
			"Fairy"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 59,
			atk: 75,
			def: 60,
			spa: 45,
			spd: 70,
			spe: 31
		},
		abilities: {
			0: "Sweet Veil",
			1: "Aroma Veil",
			H: "Cute Charm",
			S: "Klutz"
		},
		heightm: 0.3,
		weightkg: 2,
		color: "White",
		evos: [
			"Fondupple"
		],
		eggGroups: [
			"Grass",
			"Fairy"
		],
		gen: 8
	},
	fondupple: {
		num: 69286,
		name: "Fondupple",
		types: [
			"Grass",
			"Fairy"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 89,
			atk: 115,
			def: 90,
			spa: 50,
			spd: 110,
			spe: 51
		},
		abilities: {
			0: "Sweet Veil",
			1: "Aroma Veil",
			H: "Intimidate",
			S: "Klutz"
		},
		heightm: 1.1,
		weightkg: 20.4,
		color: "White",
		prevo: "Cakupple",
		evoLevel: 30,
		eggGroups: [
			"Grass",
			"Fairy"
		],
		gen: 8
	},
	baloofang: {
		num: 69287,
		name: "Baloofang",
		types: [
			"Ghost"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 100,
			atk: 61,
			def: 85,
			spa: 80,
			spd: 105,
			spe: 64
		},
		abilities: {
			0: "Aftermath",
			1: "Unaware",
			H: "Sheer Force",
			S: "Simple"
		},
		heightm: 1.5,
		weightkg: 9,
		color: "Purple",
		eggGroups: [
			"Amorphous"
		],
		gen: 8
	},
	socckat: {
		num: 69288,
		name: "Socckat",
		types: [
			"Normal",
			"Fighting"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 80,
			atk: 105,
			def: 75,
			spa: 55,
			spd: 65,
			spe: 115
		},
		abilities: {
			0: "Quick Feet",
			1: "Striker",
			H: "Unburden",
			S: "Scrappy"
		},
		heightm: 1,
		weightkg: 32,
		color: "Brown",
		eggGroups: [
			"Field"
		],
		gen: 8
	},
	egylamp: {
		num: 69289,
		name: "Egylamp",
		types: [
			"Psychic",
			"Fire"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 50,
			atk: 40,
			def: 60,
			spa: 70,
			spd: 60,
			spe: 50
		},
		abilities: {
			0: "Flame Body",
			1: "Synchronize",
			H: "Dazzling",
			S: "Lightning Rod"
		},
		heightm: 0.3,
		weightkg: 4.5,
		color: "Yellow",
		evos: [
			"Ruselamp"
		],
		eggGroups: [
			"Mineral",
			"Fairy"
		],
		gen: 8
	},
	ruselamp: {
		num: 69290,
		name: "Ruselamp",
		types: [
			"Psychic",
			"Electric"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 70,
			atk: 65,
			def: 85,
			spa: 125,
			spd: 90,
			spe: 90
		},
		abilities: {
			0: "Illuminate",
			1: "Synchronize",
			H: "Dazzling",
			S: "Flash Fire"
		},
		heightm: 1.5,
		weightkg: 72,
		color: "Yellow",
		prevo: "Egylamp",
		evoType: "useItem",
		evoItem: "Thunder Stone",
		eggGroups: [
			"Mineral",
			"Fairy"
		],
		gen: 8
	},
	mehndior: {
		num: 69291,
		name: "Mehndior",
		types: [
			"Fire",
			"Rock"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 80,
			atk: 60,
			def: 65,
			spa: 25,
			spd: 65,
			spe: 50
		},
		abilities: {
			0: "Speed Boost",
			H: "Competitive",
			S: "Telepathy"
		},
		heightm: 1.2,
		weightkg: 52,
		color: "Red",
		evos: [
			"Tunakking"
		],
		eggGroups: [
			"Mineral",
			"Human-Like"
		],
		gen: 8
	},
	tunakking: {
		num: 69292,
		name: "Tunakking",
		types: [
			"Fire",
			"Psychic"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 80,
			atk: 50,
			def: 75,
			spa: 111,
			spd: 85,
			spe: 111
		},
		abilities: {
			0: "Levitate",
			H: "Competitive",
			S: "Telepathy"
		},
		heightm: 1.5,
		weightkg: 65,
		color: "Red",
		prevo: "Mehndior",
		evoType: "useItem",
		evoItem: "Fire Stone",
		eggGroups: [
			"Mineral",
			"Human-Like"
		],
		gen: 8
	},
	missletoe: {
		num: 69293,
		name: "Missletoe",
		types: [
			"Ice"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 41,
			atk: 10,
			def: 40,
			spa: 85,
			spd: 50,
			spe: 71
		},
		abilities: {
			0: "Levitate",
			1: "Sniper",
			H: "Technician",
			S: "Slush Rush"
		},
		heightm: 0.6,
		weightkg: 12,
		color: "Blue",
		evos: [
			"Hohohoming"
		],
		eggGroups: [
			"Mineral",
			"Field"
		],
		gen: 8
	},
	hohohoming: {
		num: 69294,
		name: "Hohohoming",
		types: [
			"Ice"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 81,
			atk: 40,
			def: 71,
			spa: 126,
			spd: 81,
			spe: 91
		},
		abilities: {
			0: "Levitate",
			1: "Sniper",
			H: "Technician",
			S: "Slush Rush"
		},
		heightm: 1.5,
		weightkg: 118,
		color: "Blue",
		prevo: "Missletoe",
		evoLevel: 24,
		eggGroups: [
			"Mineral",
			"Field"
		],
		gen: 8
	},
	flaa: {
		num: 69295,
		name: "Flaa",
		types: [
			"Bug"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 40,
			atk: 55,
			def: 70,
			spa: 35,
			spd: 60,
			spe: 85
		},
		abilities: {
			0: "Run Away",
			1: "Pickup",
			H: "Justified",
			S: "Striker"
		},
		heightm: 0.7,
		weightkg: 12.5,
		color: "Brown",
		evos: [
			"Hopault"
		],
		eggGroups: [
			"Bug",
			"Human-Like"
		],
		gen: 8
	},
	hopault: {
		num: 69296,
		name: "Hopault",
		types: [
			"Bug",
			"Fighting"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 70,
			atk: 115,
			def: 80,
			spa: 65,
			spd: 70,
			spe: 115
		},
		abilities: {
			0: "Reckless",
			1: "Guts",
			H: "Justified",
			S: "Striker"
		},
		heightm: 1.9,
		weightkg: 90,
		color: "Brown",
		prevo: "Flaa",
		evoLevel: 23,
		eggGroups: [
			"Bug",
			"Human-Like"
		],
		gen: 8
	},
	araketsu: {
		num: 69297,
		name: "Araketsu",
		types: [
			"Bug",
			"Dark"
		],
		genderRatio: {
			M: 0.25,
			F: 0.75
		},
		baseStats: {
			hp: 60,
			atk: 60,
			def: 60,
			spa: 30,
			spd: 60,
			spe: 30
		},
		abilities: {
			0: "Hyper Cutter",
			1: "Intimidate",
			H: "Blademaster",
			S: "Unburden"
		},
		heightm: 0.6,
		weightkg: 15,
		color: "Black",
		evos: [
			"Senketula"
		],
		eggGroups: [
			"Bug"
		],
		gen: 8
	},
	senketula: {
		num: 69298,
		name: "Senketula",
		types: [
			"Bug",
			"Dark"
		],
		genderRatio: {
			M: 0.25,
			F: 0.75
		},
		baseStats: {
			hp: 100,
			atk: 100,
			def: 100,
			spa: 55,
			spd: 100,
			spe: 55
		},
		abilities: {
			0: "Hyper Cutter",
			1: "Intimidate",
			H: "Blademaster",
			S: "Unburden"
		},
		heightm: 1.2,
		weightkg: 30,
		color: "Black",
		prevo: "Araketsu",
		evoLevel: 21,
		eggGroups: [
			"Bug"
		],
		gen: 8
	},
	falcaptain: {
		num: 69299,
		name: "Falcaptain",
		types: [
			"Fighting",
			"Flying"
		],
		gender: "M",
		baseStats: {
			hp: 60,
			atk: 115,
			def: 55,
			spa: 85,
			spd: 50,
			spe: 130
		},
		abilities: {
			0: "Big Pecks",
			1: "Iron Fist",
			H: "Guts",
			S: "Flash Fire"
		},
		heightm: 1.9,
		weightkg: 77.1,
		color: "Blue",
		eggGroups: [
			"Field",
			"Flying"
		],
		gen: 8
	},
	cirpent: {
		num: 69300,
		name: "Cirpent",
		types: [
			"Poison",
			"Fairy"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 51,
			atk: 51,
			def: 61,
			spa: 71,
			spd: 51,
			spe: 81
		},
		abilities: {
			0: "Prankster",
			1: "Magic Bounce",
			H: "Unnerve",
			S: "Bad Dreams"
		},
		heightm: 0.3,
		weightkg: 4.5,
		color: "White",
		evos: [
			"Traumobra"
		],
		eggGroups: [
			"Dragon",
			"Monster"
		],
		gen: 8
	},
	traumobra: {
		num: 69301,
		name: "Traumobra",
		types: [
			"Poison",
			"Fairy"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 71,
			atk: 71,
			def: 91,
			spa: 101,
			spd: 81,
			spe: 111
		},
		abilities: {
			0: "Prankster",
			1: "Magic Bounce",
			H: "Unnerve",
			S: "Bad Dreams"
		},
		heightm: 1.5,
		weightkg: 9,
		color: "White",
		prevo: "Cirpent",
		evoType: "levelFriendship",
		eggGroups: [
			"Dragon",
			"Monster"
		],
		gen: 8
	},
	lizascoop: {
		num: 69302,
		name: "Lizascoop",
		types: [
			"Ground",
			"Steel"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 55,
			atk: 70,
			def: 70,
			spa: 30,
			spd: 40,
			spe: 25
		},
		abilities: {
			0: "Strong Jaw",
			1: "Sheer Force",
			H: "Battle Armor",
			S: "Anger Point"
		},
		heightm: 0.8,
		weightkg: 33,
		color: "Yellow",
		evos: [
			"Reptrill"
		],
		eggGroups: [
			"Mineral",
			"Dragon"
		],
		gen: 8
	},
	reptrill: {
		num: 69303,
		name: "Reptrill",
		types: [
			"Ground",
			"Steel"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 85,
			atk: 120,
			def: 105,
			spa: 50,
			spd: 80,
			spe: 50
		},
		abilities: {
			0: "Strong Jaw",
			1: "Sheer Force",
			H: "Battle Armor",
			S: "Anger Point"
		},
		heightm: 1.3,
		weightkg: 56,
		color: "Yellow",
		prevo: "Lizascoop",
		evoLevel: 28,
		eggGroups: [
			"Mineral",
			"Dragon"
		],
		gen: 8
	},
	fefeion: {
		num: 69304,
		name: "Fefeion",
		types: [
			"Bug",
			"Ground"
		],
		genderRatio: {
			M: 0.25,
			F: 0.75
		},
		baseStats: {
			hp: 65,
			atk: 55,
			def: 60,
			spa: 85,
			spd: 50,
			spe: 55
		},
		abilities: {
			0: "Heatproof",
			1: "Sand Veil",
			H: "Flare Boost",
			S: "Flare Heal"
		},
		heightm: 0.6,
		weightkg: 20.5,
		color: "Red",
		evos: [
			"Feferun"
		],
		eggGroups: [
			"Bug"
		],
		gen: 8
	},
	feferun: {
		num: 69305,
		name: "Feferun",
		types: [
			"Bug",
			"Ground"
		],
		genderRatio: {
			M: 0.25,
			F: 0.75
		},
		baseStats: {
			hp: 80,
			atk: 75,
			def: 100,
			spa: 125,
			spd: 80,
			spe: 70
		},
		abilities: {
			0: "Flash Fire",
			1: "Sand Force",
			H: "Flare Boost",
			S: "Flare Heal"
		},
		heightm: 1.8,
		weightkg: 79.2,
		color: "Red",
		prevo: "Fefeion",
		evoLevel: 34,
		eggGroups: [
			"Bug"
		],
		gen: 8
	},
	jerkle: {
		num: 69306,
		name: "Jerkle",
		types: [
			"Rock",
			"Psychic"
		],
		gender: "N",
		baseStats: {
			hp: 96,
			atk: 60,
			def: 90,
			spa: 110,
			spd: 60,
			spe: 63
		},
		abilities: {
			0: "Aftermath",
			1: "Sticky Hold",
			H: "Gooey",
			S: "Psychic Surge"
		},
		heightm: 0.7,
		weightkg: 75,
		color: "Black",
		eggGroups: [
			"Mineral"
		],
		gen: 8
	},
	faptime: {
		num: 69307,
		name: "Faptime",
		types: [
			"Rock",
			"Psychic"
		],
		gender: "N",
		baseStats: {
			hp: 60,
			atk: 110,
			def: 90,
			spa: 60,
			spd: 90,
			spe: 69
		},
		abilities: {
			0: "Speed Boost",
			1: "Own Tempo",
			H: "Sticky Hold",
			S: "Stamina"
		},
		heightm: 1.5,
		weightkg: 71,
		color: "Brown",
		eggGroups: [
			"Mineral"
		],
		gen: 8
	},
	shiriman: {
		num: 69308,
		name: "Shiriman",
		types: [
			"Psychic",
			"Fairy"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 109,
			atk: 88,
			def: 87,
			spa: 86,
			spd: 85,
			spe: 64
		},
		abilities: {
			0: "Prankster",
			1: "Keen Eye",
			H: "Intimidate",
			S: "Receiver"
		},
		heightm: 0.9,
		weightkg: 31.6,
		color: "Purple",
		eggGroups: [
			"Fairy",
			"Human-Like"
		],
		gen: 8
	},
	fresrye: {
		num: 69309,
		name: "Fresrye",
		types: [
			"Grass"
		],
		gender: "N",
		baseStats: {
			hp: 30,
			atk: 35,
			def: 20,
			spa: 35,
			spd: 20,
			spe: 80
		},
		abilities: {
			0: "Truant",
			1: "Cloud Nine",
			H: "Forewarn",
			S: "Anticipation"
		},
		heightm: 0.3,
		weightkg: 0.9,
		color: "Brown",
		evos: [
			"Dedwheat"
		],
		eggGroups: [
			"Grass",
			"Amorphous"
		],
		gen: 8
	},
	dedwheat: {
		num: 69310,
		name: "Dedwheat",
		types: [
			"Grass",
			"Poison"
		],
		gender: "N",
		baseStats: {
			hp: 190,
			atk: 55,
			def: 60,
			spa: 85,
			spd: 60,
			spe: 50
		},
		abilities: {
			0: "Truant",
			1: "Effect Spore",
			H: "Forewarn",
			S: "Anticipation"
		},
		heightm: 1.5,
		weightkg: 9,
		color: "Gray",
		prevo: "Fresrye",
		evoLevel: 30,
		eggGroups: [
			"Grass",
			"Amorphous"
		],
		gen: 8
	},
	nutjobber: {
		num: 69311,
		name: "Nutjobber",
		types: [
			"Ghost",
			"Fairy"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 75,
			atk: 60,
			def: 85,
			spa: 30,
			spd: 75,
			spe: 20
		},
		abilities: {
			0: "Madman",
			1: "Strong Jaw",
			H: "Shell Armor",
			S: "Prankster"
		},
		heightm: 1,
		weightkg: 27.2,
		color: "Brown",
		evos: [
			"Deisnutz"
		],
		eggGroups: [
			"Grass",
			"Amorphous"
		],
		gen: 8
	},
	deisnutz: {
		num: 69312,
		name: "Deisnutz",
		types: [
			"Ghost",
			"Fairy"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 80,
			atk: 90,
			def: 110,
			spa: 90,
			spd: 90,
			spe: 40
		},
		abilities: {
			0: "Madman",
			1: "Strong Jaw",
			H: "Shell Armor",
			S: "Prankster"
		},
		heightm: 1.5,
		weightkg: 27.2,
		color: "Yellow",
		prevo: "Nutjobber",
		evoType: "levelFriendship",
		eggGroups: [
			"Grass",
			"Amorphous"
		],
		gen: 8
	},
	spargle: {
		num: 69313,
		name: "Spargle",
		types: [
			"Fairy"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 60,
			atk: 55,
			def: 50,
			spa: 50,
			spd: 50,
			spe: 60
		},
		abilities: {
			0: "Vital Spirit",
			1: "Insomnia",
			H: "Unnerve",
			S: "Frisk"
		},
		heightm: 1,
		weightkg: 40.5,
		color: "Brown",
		evos: [
			"Spedo"
		],
		eggGroups: [
			"Field"
		],
		gen: 8
	},
	spedo: {
		num: 69314,
		name: "Spedo",
		types: [
			"Fairy"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 105,
			atk: 100,
			def: 75,
			spa: 70,
			spd: 70,
			spe: 80
		},
		abilities: {
			0: "Arena Trap",
			1: "Sheer Force",
			H: "Unnerve",
			S: "Frisk"
		},
		heightm: 2.1,
		weightkg: 156.5,
		color: "Pink",
		prevo: "Spargle",
		evoLevel: 27,
		eggGroups: [
			"Field"
		],
		gen: 8
	},
	housant: {
		num: 69315,
		name: "Housant",
		types: [
			"Bug",
			"Rock"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 60,
			atk: 70,
			def: 80,
			spa: 30,
			spd: 40,
			spe: 50
		},
		abilities: {
			0: "More Room",
			1: "Shell Armor",
			H: "Unburden",
			S: "Emergency Exit"
		},
		heightm: 0.2,
		weightkg: 1.5,
		color: "Brown",
		evos: [
			"Apartmant"
		],
		eggGroups: [
			"Bug",
			"Mineral"
		],
		gen: 8
	},
	apartmant: {
		num: 69316,
		name: "Apartmant",
		types: [
			"Bug",
			"Rock"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 90,
			atk: 110,
			def: 120,
			spa: 50,
			spd: 60,
			spe: 70
		},
		abilities: {
			0: "More Room",
			1: "Shell Armor",
			H: "Unburden",
			S: "Emergency Exit"
		},
		heightm: 0.3,
		weightkg: 4.5,
		color: "Brown",
		prevo: "Housant",
		evoLevel: 29,
		eggGroups: [
			"Bug",
			"Mineral"
		],
		gen: 8
	},
	fuermiga: {
		num: 69317,
		name: "Fuermiga",
		types: [
			"Bug",
			"Fire"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 30,
			atk: 75,
			def: 20,
			spa: 65,
			spd: 30,
			spe: 85
		},
		abilities: {
			0: "Compound Eyes",
			1: "Gooey",
			H: "Aroma Veil",
			S: "Sticky Hold"
		},
		heightm: 0.6,
		weightkg: 33,
		color: "Yellow",
		evos: [
			"Maripyro"
		],
		eggGroups: [
			"Bug"
		],
		gen: 8
	},
	maripyro: {
		num: 69318,
		name: "Maripyro",
		types: [
			"Bug",
			"Fire"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 80,
			atk: 125,
			def: 75,
			spa: 75,
			spd: 90,
			spe: 95
		},
		abilities: {
			0: "Magic Guard",
			1: "Gooey",
			H: "Aroma Veil",
			S: "Sticky Hold"
		},
		heightm: 3.2,
		weightkg: 92,
		color: "Yellow",
		prevo: "Fuermiga",
		evoLevel: 40,
		eggGroups: [
			"Bug"
		],
		gen: 8
	},
	confirmabi: {
		num: 69319,
		name: "Confirmabi",
		types: [
			"Grass",
			"Psychic"
		],
		gender: "N",
		baseStats: {
			hp: 80,
			atk: 60,
			def: 70,
			spa: 95,
			spd: 70,
			spe: 135
		},
		abilities: {
			0: "Quick Feet",
			H: "Chlorophyll",
			S: "Dazzling"
		},
		heightm: 0.6,
		weightkg: 5,
		color: "Green",
		eggGroups: [
			"Grass"
		],
		gen: 8
	},
	bulbapedo: {
		num: 69320,
		name: "Bulbapedo",
		types: [
			"Grass",
			"Poison"
		],
		genderRatio: {
			M: 0.875,
			F: 0.125
		},
		baseStats: {
			hp: 145,
			atk: 75,
			def: 90,
			spa: 70,
			spd: 90,
			spe: 40
		},
		abilities: {
			0: "Rivalry",
			H: "Frisk",
			S: "Analytic"
		},
		heightm: 0.7,
		weightkg: 25,
		color: "Green",
		eggGroups: [
			"Grass"
		],
		gen: 8
	},
	wastenaut: {
		num: 69321,
		name: "Wastenaut",
		types: [
			"Steel",
			"Poison"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 70,
			atk: 80,
			def: 50,
			spa: 20,
			spd: 80,
			spe: 20
		},
		abilities: {
			0: "Battle Armor",
			1: "Iron Barbs",
			H: "Stench",
			S: "Heavy Metal"
		},
		heightm: 1,
		weightkg: 60,
		color: "Gray",
		evos: [
			"Wantnaut"
		],
		eggGroups: [
			"Minreal",
			"Field"
		],
		gen: 8
	},
	wantnaut: {
		num: 69322,
		name: "Wantnaut",
		types: [
			"Steel",
			"Poison"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 100,
			atk: 125,
			def: 90,
			spa: 30,
			spd: 120,
			spe: 50
		},
		abilities: {
			0: "Battle Armor",
			1: "Iron Barbs",
			H: "Stench",
			S: "Heavy Metal"
		},
		heightm: 1.9,
		weightkg: 392,
		color: "Green",
		prevo: "Wastenaut",
		evoLevel: 30,
		eggGroups: [
			"Minreal",
			"Field"
		],
		gen: 8
	},
	cansumor: {
		num: 69323,
		name: "Cansumor",
		types: [
			"Poison"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 135,
			atk: 80,
			def: 90,
			spa: 65,
			spd: 90,
			spe: 35
		},
		abilities: {
			0: "Liquid Ooze",
			H: "Shed Skin",
			S: "Corrosion"
		},
		heightm: 1,
		weightkg: 27.2,
		color: "Brown",
		eggGroups: [
			"Amorphous",
			"Field"
		],
		gen: 8
	},
	snuffant: {
		num: 69324,
		name: "Snuffant",
		types: [
			"Ice"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 70,
			atk: 85,
			def: 35,
			spa: 60,
			spd: 40,
			spe: 20
		},
		abilities: {
			0: "Snow Cloak",
			1: "Slush Rush",
			H: "Overcoat",
			S: "Snow Warning"
		},
		heightm: 1,
		weightkg: 58.5,
		color: "Blue",
		evos: [
			"Cokemmoth"
		],
		eggGroups: [
			"Field",
			"Human-Like"
		],
		gen: 8
	},
	cokemmoth: {
		num: 69325,
		name: "Cokemmoth",
		types: [
			"Ice"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 105,
			atk: 110,
			def: 75,
			spa: 115,
			spd: 80,
			spe: 45
		},
		abilities: {
			0: "Speed Boost",
			1: "Slush Rush",
			H: "Overcoat",
			S: "Snow Warning"
		},
		heightm: 2,
		weightkg: 120,
		color: "Blue",
		prevo: "Snuffant",
		evoLevel: 32,
		eggGroups: [
			"Field",
			"Human-Like"
		],
		gen: 8
	},
	grimdak: {
		num: 69326,
		name: "Grimdak",
		types: [
			"Dark",
			"Steel"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 70,
			atk: 115,
			def: 70,
			spa: 110,
			spd: 70,
			spe: 90
		},
		abilities: {
			0: "Moody",
			1: "Cursed Body",
			H: "Soul-Heart",
			S: "Dark Aura"
		},
		heightm: 1.7,
		weightkg: 90.7,
		color: "Black",
		eggGroups: [
			"Human-Like",
			"Mineral"
		],
		gen: 8
	},
	shroofle: {
		num: 69327,
		name: "Shroofle",
		types: [
			"Dark"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 101,
			atk: 76,
			def: 101,
			spa: 56,
			spd: 92,
			spe: 50
		},
		abilities: {
			0: "Immunity",
			1: "Poison Heal",
			H: "Toxic Boost",
			S: "Effect Spore"
		},
		heightm: 0.6,
		weightkg: 9,
		color: "Black",
		eggGroups: [
			"Grass"
		],
		gen: 8
	},
	betacluck: {
		num: 69328,
		name: "Betacluck",
		types: [
			"Electric",
			"Flying"
		],
		gender: "M",
		baseStats: {
			hp: 50,
			atk: 20,
			def: 50,
			spa: 75,
			spd: 50,
			spe: 40
		},
		abilities: {
			0: "Technician",
			H: "Run Away",
			S: "Rattled"
		},
		heightm: 0.3,
		weightkg: 1.7,
		color: "Gray",
		evos: [
			"Thundacock"
		],
		eggGroups: [
			"Flying",
			"Human-Like"
		],
		gen: 8
	},
	thundacock: {
		num: 69329,
		name: "Thundacock",
		types: [
			"Electric",
			"Flying"
		],
		gender: "M",
		baseStats: {
			hp: 70,
			atk: 115,
			def: 80,
			spa: 80,
			spd: 70,
			spe: 115
		},
		abilities: {
			0: "Adaptability",
			H: "Mold Breaker",
			S: "Guts"
		},
		heightm: 1.9,
		weightkg: 97.5,
		color: "Yellow",
		prevo: "Betacluck",
		evoLevel: 31,
		eggGroups: [
			"Flying",
			"Human-Like"
		],
		gen: 8
	},
	twinfowl: {
		num: 69330,
		name: "Twinfowl",
		types: [
			"Steel",
			"Flying"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 40,
			atk: 75,
			def: 40,
			spa: 20,
			spd: 40,
			spe: 70
		},
		abilities: {
			0: "Big Pecks",
			H: "Weak Armor",
			S: "Flare Heal"
		},
		heightm: 3,
		weightkg: 413.2,
		color: "Grey",
		evos: [
			"Avianjoin"
		],
		eggGroups: [
			"Flying",
			"Mineral"
		],
		gen: 8
	},
	avianjoin: {
		num: 69331,
		name: "Avianjoin",
		types: [
			"Steel",
			"Flying"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 100,
			atk: 135,
			def: 70,
			spa: 80,
			spd: 70,
			spe: 75
		},
		abilities: {
			0: "Heatproof",
			H: "Weak Armor",
			S: "Flare Heal"
		},
		heightm: 9.1,
		weightkg: 911,
		color: "Grey",
		prevo: "Twinfowl",
		evoLevel: 31,
		eggGroups: [
			"Flying",
			"Mineral"
		],
		gen: 8
	},
	illuminowl: {
		num: 69332,
		name: "Illuminowl",
		types: [
			"Psychic",
			"Flying"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 62,
			atk: 30,
			def: 65,
			spa: 93,
			spd: 70,
			spe: 58
		},
		abilities: {
			0: "Illuminate",
			1: "Forewarn",
			H: "Analytic",
			S: "Solar Power"
		},
		heightm: 1.8,
		weightkg: 15,
		color: "Brown",
		evos: [
			"Illumatrix"
		],
		eggGroups: [
			"Flying",
			"Amorphous"
		],
		gen: 8
	},
	illumatrix: {
		num: 69333,
		name: "Illumatrix",
		types: [
			"Psychic",
			"Flying"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 92,
			atk: 65,
			def: 95,
			spa: 113,
			spd: 100,
			spe: 70
		},
		abilities: {
			0: "Illuminate",
			1: "Forewarn",
			H: "Analytic",
			S: "Solar Power"
		},
		heightm: 2.8,
		weightkg: 28,
		color: "Brown",
		prevo: "Illuminowl",
		evoLevel: 42,
		eggGroups: [
			"Flying",
			"Amorphous"
		],
		gen: 8
	},
	typobop: {
		num: 69334,
		name: "Typobop",
		types: [
			"Rock",
			"Dark"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 50,
			atk: 81,
			def: 74,
			spa: 40,
			spd: 40,
			spe: 60
		},
		abilities: {
			0: "Sheer Force",
			1: "Run Away",
			H: "Rattled",
			S: "Rivalry"
		},
		heightm: 0.3,
		weightkg: 4.5,
		color: "Green",
		evos: [
			"Yeerex"
		],
		eggGroups: [
			"Monster",
			"Dragon"
		],
		gen: 8
	},
	yeerex: {
		num: 69335,
		name: "Yeerex",
		types: [
			"Rock",
			"Dark"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 81,
			atk: 130,
			def: 90,
			spa: 60,
			spd: 70,
			spe: 90
		},
		abilities: {
			0: "Sheer Force",
			1: "Intimidate",
			H: "Moxie",
			S: "Rivalry"
		},
		heightm: 1.5,
		weightkg: 190,
		color: "Green",
		prevo: "Typobop",
		evoType: "useItem",
		evoItem: "Moon Stone",
		eggGroups: [
			"Monster",
			"Dragon"
		],
		gen: 8
	},
	randomix: {
		num: 69336,
		name: "Randomix",
		types: [
			"Rock",
			"Water"
		],
		genderRatio: {
			M: 0.75,
			F: 0.25
		},
		baseStats: {
			hp: 51,
			atk: 52,
			def: 95,
			spa: 64,
			spd: 58,
			spe: 25
		},
		abilities: {
			0: "Regenerator",
			1: "Shell Armor",
			H: "Rattled",
			S: "Moody"
		},
		heightm: 0.4,
		weightkg: 7.5,
		color: "Blue",
		evos: [
			"Cthullord"
		],
		eggGroups: [
			"Water 1",
			"Water 3"
		],
		gen: 8
	},
	cthullord: {
		num: 69337,
		name: "Cthullord",
		types: [
			"Rock",
			"Water"
		],
		genderRatio: {
			M: 0.75,
			F: 0.25
		},
		baseStats: {
			hp: 110,
			atk: 116,
			def: 90,
			spa: 95,
			spd: 70,
			spe: 55
		},
		abilities: {
			0: "Regenerator",
			1: "Shell Armor",
			H: "Pressure",
			S: "Swift Swim"
		},
		heightm: 2.1,
		weightkg: 226.8,
		color: "Blue",
		prevo: "Randomix",
		evoType: "useItem",
		evoItem: "Water Stone",
		eggGroups: [
			"Water 1",
			"Water 3"
		],
		gen: 8
	},
	quiboom: {
		num: 69338,
		name: "Quiboom",
		types: [
			"Water"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 49,
			atk: 54,
			def: 45,
			spa: 54,
			spd: 45,
			spe: 74
		},
		abilities: {
			0: "Aftermath",
			H: "Damp",
			S: "Storm Drain"
		},
		heightm: 0.7,
		weightkg: 10.9,
		color: "Pink",
		evos: [
			"Gynuke"
		],
		eggGroups: [
			"Water 1"
		],
		gen: 8
	},
	gynuke: {
		num: 69339,
		name: "Gynuke",
		types: [
			"Water",
			"Fire"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 79,
			atk: 94,
			def: 65,
			spa: 94,
			spd: 65,
			spe: 124
		},
		abilities: {
			0: "Aftermath",
			H: "Damp",
			S: "Storm Drain"
		},
		heightm: 2.3,
		weightkg: 84.3,
		color: "Pink",
		prevo: "Quiboom",
		evoType: "useItem",
		evoItem: "Fire Stone",
		eggGroups: [
			"Water 1"
		],
		gen: 8
	},
	rainglock: {
		num: 69340,
		name: "Rainglock",
		types: [
			"Water"
		],
		gender: "N",
		baseStats: {
			hp: 70,
			atk: 70,
			def: 70,
			spa: 140,
			spd: 70,
			spe: 70
		},
		abilities: {
			0: "Rain Dish",
			H: "Sniper",
			S: "Mega Launcher"
		},
		heightm: 0.5,
		weightkg: 0.7,
		color: "Blue",
		eggGroups: [
			"Amorphous"
		],
		gen: 8
	},
	beatmarine: {
		num: 69341,
		name: "Beatmarine",
		types: [
			"Water",
			"Electric"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 80,
			atk: 40,
			def: 70,
			spa: 30,
			spd: 40,
			spe: 50
		},
		abilities: {
			0: "Liquid Voice",
			1: "Storm Drain",
			H: "Galvanize",
			S: "Water Bubble"
		},
		heightm: 0.5,
		weightkg: 32.5,
		color: "Yellow",
		evos: [
			"Substarr"
		],
		eggGroups: [
			"Water 2"
		],
		gen: 8
	},
	substarr: {
		num: 69342,
		name: "Substarr",
		types: [
			"Water",
			"Electric"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 120,
			atk: 60,
			def: 90,
			spa: 65,
			spd: 70,
			spe: 80
		},
		abilities: {
			0: "Liquid Voice",
			1: "Storm Drain",
			H: "Galvanize",
			S: "Water Bubble"
		},
		heightm: 1.7,
		weightkg: 81.5,
		color: "Yellow",
		prevo: "Beatmarine",
		evoLevel: 27,
		eggGroups: [
			"Water 2"
		],
		gen: 8
	},
	hofucno: {
		num: 69343,
		name: "Hofucno",
		types: [
			"Water",
			"Flying"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 50,
			atk: 40,
			def: 95,
			spa: 90,
			spd: 110,
			spe: 115
		},
		abilities: {
			0: "Shadow Tag",
			H: "Aftermath",
			S: "Soundproof"
		},
		heightm: 0.4,
		weightkg: 1.8,
		color: "Yellow",
		eggGroups: [
			"Water 2",
			"Flying"
		],
		gen: 8
	},
	hornigiri: {
		num: 69344,
		name: "Hornigiri",
		types: [
			"Ice"
		],
		genderRatio: {
			M: 0.25,
			F: 0.75
		},
		baseStats: {
			hp: 50,
			atk: 65,
			def: 75,
			spa: 30,
			spd: 50,
			spe: 65
		},
		abilities: {
			0: "Ice Body",
			1: "Clear Body",
			H: "Infiltrator",
			S: "Friend Guard"
		},
		heightm: 0.6,
		weightkg: 12,
		color: "White",
		evos: [
			"Hornicier"
		],
		eggGroups: [
			"Mineral",
			"Human-Like"
		],
		gen: 8
	},
	hornicier: {
		num: 69345,
		name: "Hornicier",
		types: [
			"Ice"
		],
		genderRatio: {
			M: 0.25,
			F: 0.75
		},
		baseStats: {
			hp: 70,
			atk: 90,
			def: 100,
			spa: 40,
			spd: 75,
			spe: 60
		},
		abilities: {
			0: "Ice Body",
			1: "Clear Body",
			H: "Infiltrator",
			S: "Friend Guard"
		},
		heightm: 1.1,
		weightkg: 31.7,
		color: "White",
		prevo: "Hornigiri",
		evoLevel: 28,
		evos: [
			"Hornititan"
		],
		eggGroups: [
			"Mineral",
			"Human-Like"
		],
		gen: 8
	},
	hornititan: {
		num: 69346,
		name: "Hornititan",
		types: [
			"Ice",
			"Ground"
		],
		genderRatio: {
			M: 0.25,
			F: 0.75
		},
		baseStats: {
			hp: 90,
			atk: 115,
			def: 130,
			spa: 45,
			spd: 100,
			spe: 55
		},
		abilities: {
			0: "Refrigerate",
			1: "Filter",
			H: "Infiltrator",
			S: "Friend Guard"
		},
		heightm: 2.4,
		weightkg: 250.5,
		color: "White",
		prevo: "Hornicier",
		evoLevel: 43,
		eggGroups: [
			"Mineral",
			"Human-Like"
		],
		gen: 8
	},
	preasu: {
		num: 69347,
		name: "Preasu",
		types: [
			"Electric"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 65,
			atk: 50,
			def: 55,
			spa: 50,
			spd: 60,
			spe: 47
		},
		abilities: {
			0: "Static",
			1: "Cursed Body",
			H: "Analytic",
			S: "Wait For It"
		},
		heightm: 1,
		weightkg: 29.5,
		color: "Yellow",
		evos: [
			"Undastand"
		],
		eggGroups: [
			"Monster",
			"Field"
		],
		gen: 8
	},
	undastand: {
		num: 69348,
		name: "Undastand",
		types: [
			"Electric"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 95,
			atk: 100,
			def: 90,
			spa: 110,
			spd: 79,
			spe: 74
		},
		abilities: {
			0: "Static",
			1: "Cursed Body",
			H: "Analytic",
			S: "Wait For It"
		},
		heightm: 1.7,
		weightkg: 80,
		color: "Yellow",
		prevo: "Preasu",
		evoLevel: 34,
		eggGroups: [
			"Monster",
			"Field"
		],
		gen: 8
	},
	warney: {
		num: 69349,
		name: "Warney",
		types: [
			"Normal"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 75,
			atk: 50,
			def: 60,
			spa: 60,
			spd: 60,
			spe: 40
		},
		abilities: {
			0: "Damp",
			1: "Intimidate",
			H: "Rattled",
			S: "Oblivious"
		},
		heightm: 0.6,
		weightkg: 25.5,
		color: "Gray",
		evos: [
			"Banageddon"
		],
		eggGroups: [
			"Monster"
		],
		gen: 8
	},
	banageddon: {
		num: 69350,
		name: "Banageddon",
		types: [
			"Normal"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 90,
			atk: 150,
			def: 80,
			spa: 70,
			spd: 80,
			spe: 60
		},
		abilities: {
			0: "Admin Abuse",
			1: "Intimidate",
			H: "Mold Breaker",
			S: "Oblivious"
		},
		heightm: 2,
		weightkg: 300,
		color: "Gray",
		prevo: "Warney",
		evoLevel: 40,
		eggGroups: [
			"Monster"
		],
		gen: 8
	},
	acufront: {
		num: 69351,
		name: "Acufront",
		types: [
			"Normal"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 100,
			atk: 50,
			def: 85,
			spa: 110,
			spd: 95,
			spe: 70
		},
		abilities: {
			0: "Forecast"
		},
		heightm: 0.6,
		weightkg: 1.6,
		color: "White",
		eggGroups: [
			"Amorphous",
			"Fairy"
		],
		otherFormes: [
			"Acufront-F",
			"Acufront-W",
			"Acufront-I"
		],
		formeOrder: [
			"Acufront",
			"Acufront-F",
			"Acufront-W",
			"Acufront-I"
		],
		gen: 8
	},
	acufrontf: {
		num: 69351,
		name: "Acufront-F",
		baseSpecies: "Acufront",
		forme: "F",
		types: [
			"Fire"
		],
		baseStats: {
			hp: 100,
			atk: 50,
			def: 85,
			spa: 110,
			spd: 95,
			spe: 70
		},
		abilities: {
			0: "Forecast"
		},
		heightm: 0.6,
		weightkg: 1.6,
		color: "Yellow",
		eggGroups: [
			"Amorphous",
			"Fairy"
		],
		requiredAbility: "Forecast",
		battleOnly: "Acufront",
		gen: 8
	},
	acufrontw: {
		num: 69351,
		name: "Acufront-W",
		baseSpecies: "Acufront",
		forme: "W",
		types: [
			"Water"
		],
		baseStats: {
			hp: 100,
			atk: 50,
			def: 85,
			spa: 110,
			spd: 95,
			spe: 70
		},
		abilities: {
			0: "Forecast"
		},
		heightm: 0.6,
		weightkg: 1.6,
		color: "Gray",
		eggGroups: [
			"Amorphous",
			"Fairy"
		],
		requiredAbility: "Forecast",
		battleOnly: "Acufront",
		gen: 8
	},
	acufronti: {
		num: 69351,
		name: "Acufront-I",
		baseSpecies: "Acufront",
		forme: "I",
		types: [
			"Ice"
		],
		baseStats: {
			hp: 100,
			atk: 50,
			def: 85,
			spa: 110,
			spd: 95,
			spe: 70
		},
		abilities: {
			0: "Forecast"
		},
		heightm: 0.6,
		weightkg: 1.6,
		color: "Blue",
		eggGroups: [
			"Amorphous",
			"Fairy"
		],
		requiredAbility: "Forecast",
		battleOnly: "Acufront",
		gen: 8
	},
	militant: {
		num: 69352,
		name: "Militant",
		types: [
			"Bug",
			"Poison"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 20,
			atk: 155,
			def: 15,
			spa: 10,
			spd: 15,
			spe: 130
		},
		abilities: {
			0: "Steelworker",
			H: "Infiltrator",
			S: "Strong Jaw"
		},
		heightm: 0.1,
		weightkg: 0.1,
		color: "Gray",
		eggGroups: [
			"Bug"
		],
		gen: 8
	},
	shiggydig: {
		num: 69353,
		name: "Shiggydig",
		types: [
			"Normal",
			"Ground"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 95,
			atk: 95,
			def: 130,
			spa: 50,
			spd: 85,
			spe: 60
		},
		abilities: {
			0: "Damp",
			1: "Limber",
			H: "Defiant",
			S: "Inner Focus"
		},
		heightm: 1,
		weightkg: 50,
		color: "Yellow",
		eggGroups: [
			"Field"
		],
		gen: 8
	},
	signot: {
		num: 69354,
		name: "Signot",
		types: [
			"Ground",
			"Dark"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 65,
			atk: 35,
			def: 80,
			spa: 40,
			spd: 60,
			spe: 25
		},
		abilities: {
			0: "Dry Skin",
			H: "Arena Trap",
			S: "Sand Rush"
		},
		heightm: 2,
		weightkg: 6.9,
		color: "Pink",
		evos: [
			"Reagain"
		],
		eggGroups: [
			"Bug",
			"Field"
		],
		gen: 8
	},
	reagain: {
		num: 69355,
		name: "Reagain",
		types: [
			"Ground",
			"Dark"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 100,
			atk: 70,
			def: 110,
			spa: 80,
			spd: 90,
			spe: 45
		},
		abilities: {
			0: "Dry Skin",
			1: "Shell Armor",
			H: "Arena Trap",
			S: "Sand Rush"
		},
		heightm: 3.5,
		weightkg: 65,
		color: "Pink",
		prevo: "Signot",
		evoLevel: 30,
		eggGroups: [
			"Bug",
			"Field"
		],
		gen: 8
	},
	ormite: {
		num: 69356,
		name: "Ormite",
		types: [
			"Rock",
			"Electric"
		],
		gender: "N",
		baseStats: {
			hp: 70,
			atk: 35,
			def: 45,
			spa: 85,
			spd: 70,
			spe: 20
		},
		abilities: {
			0: "Jewelry",
			1: "Lightning Rod",
			H: "Protean",
			S: "Prism Armor"
		},
		heightm: 0.3,
		weightkg: 11.3,
		color: "Blue",
		evos: [
			"Viristal"
		],
		eggGroups: [
			"Mineral",
			"Amorphous"
		],
		gen: 8
	},
	viristal: {
		num: 69357,
		name: "Viristal",
		types: [
			"Rock",
			"Electric"
		],
		gender: "N",
		baseStats: {
			hp: 100,
			atk: 50,
			def: 75,
			spa: 136,
			spd: 100,
			spe: 40
		},
		abilities: {
			0: "Jewelry",
			1: "Lightning Rod",
			H: "Protean",
			S: "Prism Armor"
		},
		heightm: 1.6,
		weightkg: 102,
		color: "Blue",
		prevo: "Ormite",
		evoType: "useItem",
		evoItem: "Thunder Stone",
		eggGroups: [
			"Mineral",
			"Amorphous"
		],
		gen: 8
	},
	rolango: {
		num: 69358,
		name: "Rolango",
		types: [
			"Dragon",
			"Fairy"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 72,
			atk: 35,
			def: 72,
			spa: 40,
			spd: 60,
			spe: 18
		},
		abilities: {
			0: "Trace",
			H: "Natural Cure",
			S: "Multiscale"
		},
		heightm: 0.3,
		weightkg: 5.5,
		color: "Green",
		evos: [
			"Dreameme"
		],
		eggGroups: [
			"Field",
			"Fairy"
		],
		gen: 8
	},
	dreameme: {
		num: 69359,
		name: "Dreameme",
		types: [
			"Dragon",
			"Fairy"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 102,
			atk: 85,
			def: 90,
			spa: 90,
			spd: 100,
			spe: 32
		},
		abilities: {
			0: "Trace",
			H: "Natural Cure",
			S: "Multiscale"
		},
		heightm: 1.2,
		weightkg: 65.5,
		color: "Green",
		prevo: "Rolango",
		evoLevel: 28,
		eggGroups: [
			"Field",
			"Fairy"
		],
		gen: 8
	},
	pearchie: {
		num: 69360,
		name: "Pearchie",
		types: [
			"Grass",
			"Normal"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 111,
			atk: 91,
			def: 79,
			spa: 66,
			spd: 81,
			spe: 102
		},
		abilities: {
			0: "Moody",
			1: "Reckless",
			H: "Oblivious",
			S: "Unaware"
		},
		heightm: 2.1,
		weightkg: 145,
		color: "Green",
		eggGroups: [
			"Grass",
			"Field"
		],
		gen: 8
	},
	tarditank: {
		num: 69361,
		name: "Tarditank",
		types: [
			"Bug",
			"Water"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 110,
			atk: 10,
			def: 200,
			spa: 5,
			spd: 200,
			spe: 5
		},
		abilities: {
			0: "Sturdy",
			H: "Anticipation",
			S: "Friend Guard"
		},
		heightm: 0.2,
		weightkg: 0.2,
		color: "Green",
		eggGroups: [
			"Bug",
			"Water 1"
		],
		gen: 8
	},
	iplora: {
		num: 69362,
		name: "Iplora",
		types: [
			"Bug",
			"Steel"
		],
		gender: "N",
		baseStats: {
			hp: 60,
			atk: 45,
			def: 45,
			spa: 55,
			spd: 45,
			spe: 5
		},
		abilities: {
			0: "Slow Start",
			H: "Stall",
			S: "Truant"
		},
		heightm: 0.6,
		weightkg: 17.5,
		color: "Blue",
		evos: [
			"Chromox"
		],
		eggGroups: [
			"Mineral"
		],
		gen: 8
	},
	chromox: {
		num: 69363,
		name: "Chromox",
		types: [
			"Fire",
			"Steel"
		],
		gender: "N",
		baseStats: {
			hp: 85,
			atk: 60,
			def: 60,
			spa: 115,
			spd: 60,
			spe: 145
		},
		abilities: {
			0: "Speed Boost",
			H: "Download",
			S: "Surge Surfer"
		},
		heightm: 1.6,
		weightkg: 102,
		color: "Red",
		prevo: "Iplora",
		evoType: "useItem",
		evoItem: "Up-Grade",
		eggGroups: [
			"Mineral"
		],
		gen: 8
	},
	pitayen: {
		num: 69364,
		name: "Pitayen",
		types: [
			"Grass",
			"Dragon"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 50,
			atk: 60,
			def: 50,
			spa: 40,
			spd: 50,
			spe: 30
		},
		abilities: {
			0: "Tough Claws",
			1: "Rough Skin",
			H: "Chlorophyll",
			S: "Flower Gift"
		},
		heightm: 0.7,
		weightkg: 6.9,
		color: "Pink",
		evos: [
			"Dragaya"
		],
		eggGroups: [
			"Monster",
			"Dragon"
		],
		gen: 8
	},
	dragaya: {
		num: 69365,
		name: "Dragaya",
		types: [
			"Grass",
			"Dragon"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 70,
			atk: 80,
			def: 70,
			spa: 60,
			spd: 70,
			spe: 50
		},
		abilities: {
			0: "Tough Claws",
			1: "Rough Skin",
			H: "Chlorophyll",
			S: "Flower Gift"
		},
		heightm: 1.5,
		weightkg: 95,
		color: "Pink",
		prevo: "Pitayen",
		evoLevel: 30,
		evos: [
			"Frutagon"
		],
		eggGroups: [
			"Monster",
			"Dragon"
		],
		gen: 8
	},
	frutagon: {
		num: 69366,
		name: "Frutagon",
		types: [
			"Grass",
			"Dragon"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 80,
			atk: 120,
			def: 80,
			spa: 100,
			spd: 80,
			spe: 90
		},
		abilities: {
			0: "Tough Claws",
			1: "Rough Skin",
			H: "Chlorophyll",
			S: "Flower Gift"
		},
		heightm: 2,
		weightkg: 118,
		color: "Pink",
		prevo: "Dragaya",
		evoLevel: 48,
		eggGroups: [
			"Monster",
			"Dragon"
		],
		gen: 8
	},
	biteki: {
		num: 69367,
		name: "Biteki",
		types: [
			"Ice",
			"Psychic"
		],
		gender: "N",
		baseStats: {
			hp: 70,
			atk: 30,
			def: 50,
			spa: 125,
			spd: 125,
			spe: 95
		},
		abilities: {
			0: "Soundproof",
			1: "Filter",
			H: "Gradient",
			S: "Snow Cloak"
		},
		heightm: 1.3,
		weightkg: 25.2,
		color: "Pink",
		eggGroups: [
			"Mineral",
			"Amorphous"
		],
		gen: 8
	},
	sesquatch: {
		num: 69368,
		name: "Sesquatch",
		types: [
			"Normal",
			"Ghost"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 95,
			atk: 90,
			def: 105,
			spa: 55,
			spd: 95,
			spe: 70
		},
		abilities: {
			0: "Suddenly",
			H: "Snow Cloak",
			S: "Mummy"
		},
		heightm: 2.4,
		weightkg: 80,
		color: "White",
		eggGroups: [
			"Human-Like"
		],
		gen: 8
	},
	fireshi: {
		num: 69369,
		name: "Fireshi",
		types: [
			"Fire",
			"Poison"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 30,
			atk: 30,
			def: 50,
			spa: 80,
			spd: 60,
			spe: 30
		},
		abilities: {
			0: "Flame Body",
			1: "Levitate",
			H: "White Smoke",
			S: "Stench"
		},
		heightm: 0.3,
		weightkg: 0.1,
		color: "Yellow",
		evos: [
			"Fireshitwi"
		],
		eggGroups: [
			"Amorphous",
			"Field"
		],
		gen: 8
	},
	fireshitwi: {
		num: 69370,
		name: "Fireshitwi",
		types: [
			"Fire",
			"Poison"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 50,
			atk: 40,
			def: 70,
			spa: 100,
			spd: 80,
			spe: 60
		},
		abilities: {
			0: "Flame Body",
			1: "Levitate",
			H: "White Smoke",
			S: "Stench"
		},
		heightm: 0.6,
		weightkg: 0.2,
		color: "Yellow",
		prevo: "Fireshi",
		evoLevel: 30,
		evos: [
			"Fireshitre"
		],
		eggGroups: [
			"Amorphous",
			"Field"
		],
		gen: 8
	},
	fireshitre: {
		num: 69371,
		name: "Fireshitre",
		types: [
			"Fire",
			"Poison"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 80,
			atk: 50,
			def: 95,
			spa: 120,
			spd: 105,
			spe: 100
		},
		abilities: {
			0: "Flame Body",
			1: "Levitate",
			H: "White Smoke",
			S: "Stench"
		},
		heightm: 0.9,
		weightkg: 0.3,
		color: "Yellow",
		prevo: "Fireshitwi",
		evoLevel: 48,
		eggGroups: [
			"Amorphous",
			"Field"
		],
		gen: 8
	},
	slugbud: {
		num: 69372,
		name: "Slugbud",
		types: [
			"Water",
			"Poison"
		],
		gender: "F",
		baseStats: {
			hp: 55,
			atk: 60,
			def: 65,
			spa: 35,
			spd: 45,
			spe: 20
		},
		abilities: {
			0: "Hydration",
			1: "Sap Sipper",
			H: "Rain Dish",
			S: "Gooey"
		},
		heightm: 0.4,
		weightkg: 6,
		color: "Green",
		evos: [
			"Slughug"
		],
		eggGroups: [
			"Dragon"
		],
		gen: 8
	},
	slughug: {
		num: 69373,
		name: "Slughug",
		types: [
			"Water",
			"Poison"
		],
		gender: "F",
		baseStats: {
			hp: 75,
			atk: 85,
			def: 95,
			spa: 50,
			spd: 60,
			spe: 35
		},
		abilities: {
			0: "Hydration",
			1: "Sap Sipper",
			H: "Rain Dish",
			S: "Gooey"
		},
		heightm: 0.9,
		weightkg: 18,
		color: "Green",
		prevo: "Slugbud",
		evoLevel: 30,
		evos: [
			"Slugfugg"
		],
		eggGroups: [
			"Dragon"
		],
		gen: 8
	},
	slugfugg: {
		num: 69374,
		name: "Slugfugg",
		types: [
			"Water",
			"Poison"
		],
		gender: "M",
		baseStats: {
			hp: 105,
			atk: 100,
			def: 135,
			spa: 75,
			spd: 95,
			spe: 40
		},
		abilities: {
			0: "Hydration",
			1: "Sap Sipper",
			H: "Rain Dish",
			S: "Gooey"
		},
		heightm: 2,
		weightkg: 150.5,
		color: "Green",
		prevo: "Slughug",
		evoLevel: 48,
		eggGroups: [
			"Dragon"
		],
		gen: 8
	},
	skeletroll: {
		num: 69375,
		name: "Skeletroll",
		types: [
			"Ground",
			"Ghost"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 50,
			atk: 60,
			def: 80,
			spa: 60,
			spd: 80,
			spe: 30
		},
		abilities: {
			0: "Battle Armor",
			H: "Shell Armor",
			S: "Sturdy"
		},
		heightm: 0.7,
		weightkg: 7.7,
		color: "White",
		evos: [
			"Spookscare",
			"Goryannus"
		],
		eggGroups: [
			"Mineral",
			"Amorphous"
		],
		gen: 8
	},
	spookscare: {
		num: 69376,
		name: "Spookscare",
		types: [
			"Ground",
			"Ghost"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 105,
			atk: 35,
			def: 120,
			spa: 90,
			spd: 130,
			spe: 50
		},
		abilities: {
			0: "Pressure",
			H: "Cursed Body",
			S: "Magician"
		},
		heightm: 1.4,
		weightkg: 15.3,
		color: "White",
		prevo: "Skeletroll",
		evoType: "levelFriendship",
		eggGroups: [
			"Mineral",
			"Amorphous"
		],
		gen: 8
	},
	goryannus: {
		num: 69377,
		name: "Goryannus",
		types: [
			"Ground",
			"Ghost"
		],
		genderRatio: {
			M: 0.5,
			F: 0.5
		},
		baseStats: {
			hp: 90,
			atk: 130,
			def: 85,
			spa: 35,
			spd: 85,
			spe: 105
		},
		abilities: {
			0: "Sheer Force",
			H: "Mummy",
			S: "Unnerve"
		},
		heightm: 1.8,
		weightkg: 30,
		color: "White",
		prevo: "Skeletroll",
		evoType: "useItem",
		evoItem: "Moon Stone",
		eggGroups: [
			"Mineral",
			"Amorphous"
		],
		gen: 8
	},
	lankong: {
		num: 69378,
		name: "Lankong",
		types: [
			"Normal"
		],
		gender: "M",
		baseStats: {
			hp: 50,
			atk: 75,
			def: 40,
			spa: 35,
			spd: 40,
			spe: 60
		},
		abilities: {
			0: "Long Reach",
			1: "Own Tempo",
			H: "Frisk",
			S: "Scrappy"
		},
		heightm: 0.9,
		weightkg: 19,
		color: "Brown",
		evos: [
			"Ballankey"
		],
		eggGroups: [
			"Field",
			"Human-Like"
		],
		gen: 8
	},
	ballankey: {
		num: 69379,
		name: "Ballankey",
		types: [
			"Normal",
			"Flying"
		],
		gender: "M",
		baseStats: {
			hp: 85,
			atk: 85,
			def: 60,
			spa: 60,
			spd: 60,
			spe: 70
		},
		abilities: {
			0: "Long Reach",
			1: "Own Tempo",
			H: "Frisk",
			S: "Scrappy"
		},
		heightm: 1.2,
		weightkg: 32.5,
		color: "Brown",
		prevo: "Lankong",
		evoLevel: 50,
		evos: [
			"Funnedong"
		],
		eggGroups: [
			"Field",
			"Human-Like"
		],
		gen: 8
	},
	funnedong: {
		num: 69380,
		name: "Funnedong",
		types: [
			"Normal",
			"Fighting"
		],
		gender: "M",
		baseStats: {
			hp: 100,
			atk: 130,
			def: 90,
			spa: 70,
			spd: 90,
			spe: 120
		},
		abilities: {
			0: "Long Reach",
			1: "Own Tempo",
			H: "Frisk",
			S: "Scrappy"
		},
		heightm: 1.7,
		weightkg: 90.5,
		color: "Brown",
		prevo: "Ballankey",
		evoLevel: 65,
		eggGroups: [
			"Field",
			"Human-Like"
		],
		gen: 8
	},
	narwhiz: {
		num: 69381,
		name: "Narwhiz",
		types: [
			"Water",
			"Fairy"
		],
		gender: "N",
		baseStats: {
			hp: 101,
			atk: 70,
			def: 121,
			spa: 86,
			spd: 121,
			spe: 121
		},
		abilities: {
			0: "Magician",
			H: "Healer",
			S: "Magic Bounce"
		},
		heightm: 6,
		weightkg: 132,
		color: "Blue",
		eggGroups: [
			"Undiscovered"
		],
		gen: 8
	},
	niterpent: {
		num: 69382,
		name: "Niterpent",
		types: [
			"Electric",
			"Fire"
		],
		gender: "N",
		baseStats: {
			hp: 81,
			atk: 141,
			def: 85,
			spa: 141,
			spd: 71,
			spe: 101
		},
		abilities: {
			0: "Technician",
			H: "Turboblaze",
			S: "Teravolt"
		},
		heightm: 5.8,
		weightkg: 180,
		color: "Yellow",
		eggGroups: [
			"Undiscovered"
		],
		gen: 8
	},
	griffawork: {
		num: 69383,
		name: "Griffawork",
		types: [
			"Psychic",
			"Flying"
		],
		gender: "N",
		baseStats: {
			hp: 130,
			atk: 85,
			def: 95,
			spa: 160,
			spd: 125,
			spe: 105
		},
		abilities: {
			0: "Natural Cure",
			H: "Marvel Scale",
			S: "Beast Boost"
		},
		heightm: 3.4,
		weightkg: 216,
		color: "Blue",
		eggGroups: [
			"Undiscovered"
		],
		gen: 8
	},
	boarnograf: {
		num: 69384,
		name: "Boarnograf",
		types: [
			"Dark",
			"Ground"
		],
		gender: "N",
		baseStats: {
			hp: 130,
			atk: 160,
			def: 125,
			spa: 85,
			spd: 95,
			spe: 105
		},
		abilities: {
			0: "Guts",
			H: "Mold Breaker",
			S: "Beast Boost"
		},
		heightm: 3.5,
		weightkg: 454,
		color: "Red",
		eggGroups: [
			"Undiscovered"
		],
		gen: 8
	},
	admoot: {
		num: 69385,
		name: "Admoot",
		types: [
			"Fairy"
		],
		gender: "M",
		baseStats: {
			hp: 100,
			atk: 100,
			def: 100,
			spa: 100,
			spd: 100,
			spe: 100
		},
		abilities: {
			0: "Admin Abuse",
			H: "Berserk",
			S: "Serene Grace"
		},
		heightm: 1.1,
		weightkg: 6,
		color: "White",
		eggGroups: [
			"Undiscovered"
		],
		gen: 8
	},
	tentaquil: {
		num: 69386,
		name: "Tentaquil",
		types: [
			"Bug",
			"Psychic"
		],
		gender: "N",
		baseStats: {
			hp: 100,
			atk: 100,
			def: 100,
			spa: 100,
			spd: 100,
			spe: 100
		},
		abilities: {
			0: "Immunity"
		},
		heightm: 0.7,
		weightkg: 51.9,
		color: "Blue",
		eggGroups: [
			"Undiscovered"
		],
		gen: 8
	},
	megablobbos: {
		num: 69387,
		name: "Mega Blobbos",
		types: [
			"???"
		],
		gender: "N",
		baseStats: {
			hp: 1,
			atk: 1,
			def: 1,
			spa: 1,
			spd: 1,
			spe: 1
		},
		abilities: {
			0: "Truant",
			1: "Truant",
			H: "Truant",
			S: "Truant"
		},
		heightm: 9999,
		weightkg: 9999,
		color: "Blue",
		prevo: "Blobbos",
		evoCondition: "Hack",
		evoType: "other",
		eggGroups: [
			"Ditto"
		],
		gen: 8
	},
};
