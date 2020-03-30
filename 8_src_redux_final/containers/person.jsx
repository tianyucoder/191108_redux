/* 
一个组件要和redux交互，按照如下步骤：
		第一步：引入connect，用于创建容器组件。
		第二步：引入action （如果不操作状态，这一步就不用）
		第三步：connect(映射状态，映射操作状态的方法)(原本你定义的组件)
*/
import React, { Component } from 'react'
//从react-redux中引入connect方法
import {connect} from 'react-redux'
//引入action
import {createAddPersonAction} from '../redux/actions/person'

class Person extends Component {

	add = ()=>{
		//1.获取用户的输入
		const {name,age} = this.refs
		//告诉redux添加一个人
		this.props.addPerson({name:name.value,age:age.value})
		//清空输入
		name.value = ''
		age.value = ''
	}

	render() {
		const {persons,number} = this.props
		return (
			<div>
				<h2>当前总人数为：{persons.length}，上方的Count组件中，当前的和为：{number}</h2>
				<input ref="name" type="text" placeholder="输入名字"/>
				<input ref="age" type="text" placeholder="输入年龄"/>
				<button onClick={this.add}>添加</button>
				<ul>
					{
						this.props.persons.map((personObj,index)=>{
							return <li key={index}>姓名：{personObj.name}，年龄：{personObj.age}</li>
						})
					}
				</ul>
			</div>
		)
	}
}

//创建好为Count服务的容器组件，并且为Count组件传递了：(1).状态 (2).操作状态的方法。
export default connect(
	//state是redux帮你保存的总状态，是那个大大的对象，传递给UI组件状态
	state => ({
		persons:state.persons,
		number:state.number
	}), 
	{
		addPerson:createAddPersonAction
	}
)(Person)
