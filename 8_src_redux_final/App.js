import React, { Component } from 'react'
import CountContainer from './containers/count'
import PersonContainer from './containers/person'

export default class App extends Component {
	render() {
		return (
			<div>
				<CountContainer/>
				<br/>
				<hr/>
				<br/>
				<PersonContainer/>
			</div>
		)
	}
}
