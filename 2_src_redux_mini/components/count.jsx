import React, {Component} from 'react'
import store from '../redux/store'

export default class Count extends Component {

	//加法
	increment = ()=>{
		//1.获取用户输入
		let {value} = this.refs.checkNumber
		//2.通知redux帮我加,加多少看上方value
		store.dispatch({type:'increment',data:value*1})
	}

	//减法
	decrement = ()=>{
		//1.获取用户输入
		let {value} = this.refs.checkNumber
		//2.通知redux帮我减,减多少看上方value
		store.dispatch({type:'decrement',data:value*1})
	}

	//当前为奇数再加
	incrementIfOdd = ()=>{
		//1.获取用户输入
		let {value} = this.refs.checkNumber
		//2.从redux中获取count值
		let count = store.getState()
		//3.判断是否为奇数
		if(count % 2 === 1){
			//4.通知redux加
			store.dispatch({type:'increment',data:value*1})
		}
	}

	//延迟500毫秒加
	incrementAsync = ()=>{
		//1.获取用户输入
		let {value} = this.refs.checkNumber
		setTimeout(()=>{
			store.dispatch({type:'increment',data:value*1})
		},500)
	}

	render() {
		return (
			<div>
				<h2>当前求和为：{store.getState()}</h2>
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
