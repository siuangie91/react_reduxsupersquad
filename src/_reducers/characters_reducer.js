import characters_json from '../_data/characters.json';
import { getCharacter } from './helpers_reducer';
import { ADD_CHARACTER, DELETE_CHARACTER } from '../_actions';

// default the state to the full characters list from the json object
function characters(state = characters_json, action) {
	let characters;

	switch(action.type) {
		case ADD_CHARACTER: 
			// the new characters array should contain everything except the chosen ID
			characters = state.filter(item => item.id !== action.id);
			return characters;
		case DELETE_CHARACTER:
			// put the specified character back into the state array
			characters = [...state, getCharacter(action.id)];
			return characters;
		default: 
			return state;
	}
}

export default characters;