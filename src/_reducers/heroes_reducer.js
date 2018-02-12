import { ADD_CHARACTER, DELETE_CHARACTER } from '../_actions';
import { getCharacter } from './helpers_reducer'

// default the state to an empty array because the initial state is an empty list
function heroes(state = [], action) {
	let heroes;

	switch(action.type) {
		case ADD_CHARACTER: 
			// append the specified character to the state array
			heroes = [...state, getCharacter(action.id)];
			return heroes;
		case DELETE_CHARACTER:
			// filter out the specified character and return the rest of the array
			heroes = state.filter(item => item.id !== action.id);
			return heroes;
		default: 
			return state;
	}
}

export default heroes;