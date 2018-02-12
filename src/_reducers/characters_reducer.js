import characters_json from '../_data/characters.json';
import { getCharacter } from './helpers_reducer';
import { ADD_CHARACTER, DELETE_CHARACTER } from '../_actions';

function characters(state = characters_json, action) {
	let characters;

	switch(action.type) {
		case ADD_CHARACTER: 
			characters = state.filter(item => item.id !== action.id);
			return characters;
		case DELETE_CHARACTER:
			characters = [...state, getCharacter(action.id)];
			return characters;
		default: 
			return state;
	}
}

export default characters;