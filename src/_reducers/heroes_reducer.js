import { ADD_CHARACTER, DELETE_CHARACTER } from '../_actions';
import { getCharacter } from './helpers_reducer'

function heroes(state = [], action) {
	let heroes;

	switch(action.type) {
		case ADD_CHARACTER: 
			heroes = [...state, getCharacter(action.id)];
			return heroes;
		case DELETE_CHARACTER:
			heroes = state.filter(item => item.id !== action.id);
			return heroes;
		default: 
			return state;
	}
}

export default heroes;