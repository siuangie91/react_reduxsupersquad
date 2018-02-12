import React from 'react';
import CharacterList from './CharacterList';

import '../_styles/index.css';

export class App extends React.Component {
	render() {
		return (
			<div className="App">
				<h2>SuperSquad!</h2>
				<CharacterList />
			</div>
		);
	}
}