/* 
一个组件要和redux交互，按照如下步骤：
		第一步：引入connect，用于创建容器组件。
		第二步：引入action （如果不操作状态，这一步就不用）
		第三步：connect(映射状态，映射操作状态的方法)(原本你定义的组件)
*/
import React, {Component} from 'react'
//从react-redux中引入connect方法
import {connect} from 'react-redux'
//引入action_creator
import {
	createIncrementAction,
	createDecrementAction,
	createWaitIncrementAction
} from '../redux/actions/count'

class Count extends Component {

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

//创建好为Count服务的容器组件，并且为Count组件传递了：(1).状态 (2).操作状态的方法。
export default connect(
	state => ({//state是redux帮你保存的总状态，是那个大大的对象，传递给UI组件状态
		number:state.number,
		personCount:state.persons.length
	}), 
	{ //传递给UI组件操作状态的方法
		increment:createIncrementAction,
		decrement:createDecrementAction,
		incrementAsync:createWaitIncrementAction
	}
)(Count)


