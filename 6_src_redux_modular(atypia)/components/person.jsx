import React, { Component } from 'react'

export default class Person extends Component {

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
		return (
			<div>
				<h2>当前总人数为：{this.props.persons.length}</h2>
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
