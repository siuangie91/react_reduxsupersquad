// create action types
export const ADD_CHARACTER = 'ADD_CHARACTER';

// create actions
export function addCharacterById(id) {
	const action = {
		id,
		type: ADD_CHARACTER,
	}

	return action;
}