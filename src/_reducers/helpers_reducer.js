import characters_json from '../_data/characters.json';

export function createCharacter(id) {
	let character = characters_json.find(char => char.id === id);
	return character;
}

