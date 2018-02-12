import React from 'react';
import CharacterList from './CharacterList';
import HeroList from './HeroList';

import '../_styles/index.css';

export class App extends React.Component {
	render() {
		return (
			<div className="App">
				<h2>SuperSquad!</h2>
				<div className="col-sm-6">
					<CharacterList />
				</div>
				<div className="col-sm-6">
					<HeroList />
				</div>
			</div>
		);
	}
}