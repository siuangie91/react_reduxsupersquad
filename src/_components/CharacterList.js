import React from 'react';
import { connect } from 'react-redux'; // returns another function for us to call

class CharacterList extends React.Component {
	render() {
		return (
			<div>
				<h4>Characters</h4>
				<ul>
					{
						this.props.characters.map(character => {
							return (
								<li key={character.id}>
									<div>{character.name}</div>
								</li>	
							);
						})
					}
				</ul>
			</div>
		);
	}
}

function mapStateToProps(state) {
	console.log('state', state);
	return {
		characters: state.characters
	};
}

// connect our component to our redux state
export default connect(mapStateToProps, null)(CharacterList);