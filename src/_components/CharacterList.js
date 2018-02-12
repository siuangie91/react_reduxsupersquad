import React from 'react';
import { connect } from 'react-redux'; // returns another function for us to call
import { bindActionCreators } from 'redux';
import { addCharacterById } from '../_actions';

class CharacterList extends React.Component {
	render() {
		console.log('this.props', this.props);

		return (
			<div>
				<h4>Characters</h4>
				<ul className="list-group">
					{
						this.props.characters.map(character => {
							return (
								<li key={character.id} className="list-group-item">
									<div className="list-item">{character.name}</div>
									<div 
										className="list-item right-button btn btn-primary"
										onClick={() => this.props.addCharacterById(character.id)}>
										<span>+</span>
									</div>
								</li>	
							);
						})
					}
				</ul>
			</div>
		);
	}
}

// map our redux state to the props of our component
function mapStateToProps(state) {
	// console.log('state', state);
	return { // return data to become part of the props in the component
		characters: state.characters
	};
}

/*function mapDispatchToProps(dispatch) {
	// bind action creators onto props of the component
	return bindActionCreators({ addCharacterById }, dispatch);
}*/

// connect our component to our redux state
// pass in the component we want to connect to our redux
// Param 1: get our redux state as props for our component
// Param 2: binds our action creators to our props on the component so that it can call action creators, activate reducers, and update the store
export default connect(mapStateToProps, { addCharacterById })(CharacterList);