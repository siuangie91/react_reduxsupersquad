import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { App } from './_components/App';

// get the characters (root) reducer
import rootReducer from './_reducers';

// create store
const store = createStore(rootReducer);
console.log('store.getState()', store.getState());

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, 
	document.getElementById('root'));