import characters_json from '../_data/characters.json';

function characters(state = characters_json, action) {
	switch(action.type) {
		default: 
			return state;
	}
}

export default characters;