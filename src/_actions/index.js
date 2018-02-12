// create action types
export const ADD_CHARACTER = 'ADD_CHARACTER';
export const DELETE_CHARACTER = 'DELETE_CHARACTER';

// create actions
export function addCharacterById(id) {
	const action = {
		id,
		type: ADD_CHARACTER,
	}

	return action;
}

export function removeCharacterById(id) {
	const action = {
		id,
		type: DELETE_CHARACTER,
	}

	return action;
}