//该组件是UI组件，不可以使用任何的redux中的API
import React, {Component} from 'react'

export default class Count extends Component {

	//加法
	increment = ()=>{
		//1.获取用户输入
		let {value} = this.refs.checkNumber
		this.props.increment(value*1)
	}

	//减法
	decrement = ()=>{
		//1.获取用户输入
		let {value} = this.refs.checkNumber
		this.props.decrement(value*1)
	}

	//当前为奇数再加
	incrementIfOdd = ()=>{
		//1.获取用户输入
		let {value} = this.refs.checkNumber
		//2.从redux中获取count值
		let {number} = this.props
		//3.判断是否为奇数
		if(number % 2 === 1){
			this.props.increment(value*1)
		}
	}

	//延迟500毫秒加
	incrementAsync = ()=>{
		//1.获取用户输入
		let {value} = this.refs.checkNumber
		/* setTimeout(()=>{
			this.props.jia(value*1)
		},500) */
		this.props.incrementAsync(value*1,1000)
	}

	render() {
		const {number,personCount} = this.props
		return (
			<div>
				<h2>当前求和为：{number}，下方的Person组件中，总人数为：{personCount}</h2>
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
