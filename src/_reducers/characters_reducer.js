import characters_json from '../_data/characters.json';
import { ADD_CHARACTER } from '../_actions';

function characters(state = characters_json, action) {
	switch(action.type) {
		case ADD_CHARACTER: 
			let characters = state.filter(item => item.id !== action.id);
			return characters;
		default: 
			return state;
	}
}

export default characters;