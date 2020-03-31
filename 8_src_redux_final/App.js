import React, { Component } from 'react'
import Count from './containers/count'
import Person from './containers/person'

export default class App extends Component {
	render() {
		return (
			<div>
				<Count/>
				<br/>
				<hr/>
				<br/>
				<Person/>
			</div>
		)
	}
}
