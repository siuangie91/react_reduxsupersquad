import React from 'react';

import CharacterList from './CharacterList';

export class App extends React.Component {
	render() {
		return (
			<div>
				<h2>SuperSquad!</h2>
				<CharacterList />
			</div>
		);
	}
}