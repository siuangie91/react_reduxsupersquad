import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

// get the characters (root) reducer
import rootReducer from './_reducers';
import { addCharacterById } from './_actions';

import { App } from './_components/App';

// create store
const store = createStore(rootReducer);
console.log('store.getState()', store.getState());

// add eventListener that fires every time the store gets updated
store.subscribe(() => {
	console.log('store', store.getState());
});

// use the store and dispatch the action
// store.dispatch(addCharacterById(2));

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, 
	document.getElementById('root'));