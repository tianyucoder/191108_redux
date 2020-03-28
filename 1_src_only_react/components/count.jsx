import React, {Component} from 'react'

export default class Count extends Component {

	state = {
		count:0
	}

	//加法
	increment = ()=>{
		//1.获取用户输入
		let {value} = this.refs.checkNumber
		//2.更新状态
		let {count} = this.state
		this.setState({count:count+value*1})
	}

	//减法
	decrement = ()=>{
		//1.获取用户输入
		let {value} = this.refs.checkNumber
		//2.更新状态
		let {count} = this.state
		this.setState({count:count-value*1})
	}

	//当前为奇数再加
	incrementIfOdd = ()=>{
		//1.获取用户输入
		let {value} = this.refs.checkNumber
		//2.更新状态
		let {count} = this.state
		if(count % 2 === 1){
			this.setState({count:count+value*1})
		}
	}

	//延迟500毫秒加
	incrementAsync = ()=>{
		//1.获取用户输入
		let {value} = this.refs.checkNumber
		//2.更新状态
		let {count} = this.state
		setTimeout(()=>{
			this.setState({count:count+value*1})
		},500)
	}

	render() {
		return (
			<div>
				<h2>当前求和为：{this.state.count}</h2>
				<select ref="checkNumber">
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
				</select>&nbsp;
				<button onClick={this.increment}>+</button>&nbsp;
				<button onClick={this.decrement}>-</button>&nbsp;
				<button onClick={this.incrementIfOdd}>increment if odd</button>&nbsp;
				<button onClick={this.incrementAsync}>increment async</button>
			</div>
		)
	}
}
