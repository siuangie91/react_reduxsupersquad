import React from 'react';
import { connect } from 'react-redux'; // returns another function for us to call
import { bindActionCreators } from 'redux';
import { removeCharacterById } from '../_actions';

class HeroList extends React.Component {
	render() {
		return (
			<div>
				<h4>Your Hero Squad</h4>
				<ul className="list-group">
					{
						this.props.heroes.map(hero => {
							return (
								<li key={hero.id} className="list-group-item">
									<div className="list-item">{hero.name}</div>
									<div 
										className="list-item right-button btn btn-danger"
										onClick={() => this.props.removeCharacterById(hero.id)}>
										<span>&times;</span>
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

function mapStateToProps(state) {
	return {
		heroes: state.heroes
	}
}

export default connect(mapStateToProps, { removeCharacterById })(HeroList);