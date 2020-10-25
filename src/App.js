import React, { Component } from 'react'
import Home from './pages/Home'
import {Provider} from 'react-redux'
import Store from './Store'

import './App.css';
import 'bulma/css/bulma.css'


class App extends Component {

	render() {

		return (
			<Provider store={Store}>
			<div className="App">
				<Home/>
			</div>
			</Provider>

		)
	}
}

export default App;