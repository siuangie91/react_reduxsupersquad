import characters_json from '../_data/characters.json';
import { ADD_CHARACTER } from '../_actions';

export function createCharacter(id) {
	let character = characters_json.find(char => char.id === id);
	return character;
}

