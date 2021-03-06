export const Formats: {[k: string]: ModdedFormatData} = {
	blobbosclause: {
		effectType: 'ValidatorRule',
		name: 'Blobbos Clause',
		desc: "Blobbos cannot use Eviolite. It does not need Eviolite.",
		onValidateSet(set) {
			if (this.toID(set.item) === 'eviolite' && this.toID(set.species || set.name) === 'blobbos') {
				return ['Blobbos cannot use Eviolite. It is far too powerful for such an item.'];
			}
		},
	},
	cloveronly: {
		effectType: 'ValidatorRule',
		name: 'Clover Only',
		desc: "Only allows Pok&eacute;mon, items, and moves available in Pok&eacute;mon Clover.",
		onValidateSet(set) {
			const errors = [];

			const species = this.dex.getSpecies(set.species || set.name);
			if (!species.availability?.clover) {
				errors.push(`${species.baseSpecies} is not in Pok&eacute;mon Clover.`);
			}

			const item = this.dex.getItem(set.item);
			if (!item.availability?.clover) {
				errors.push(`${set.name || set.species} has ${item.name}, which is unavailable in Pok&eacute;mon Clover.`);
			}

			set.moves.forEach((moveName) => {
				const move = this.dex.getMove(this.toID(moveName));

				if (!move.availability?.clover) {
					errors.push(`${set.name || set.species} has ${move}, which is unavailable in Pok&eacute;mon Clover.`);
				}
			});

			if (errors.length > 0) {
				return errors;
			}
		},
	},
};
