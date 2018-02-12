import characters_json from '../_data/characters.json';

export function getCharacter(id) {
	let character = characters_json.find(char => char.id === id);
	return character;
}

// export function removeCharacter(id) {
// 	let character = 
// }

