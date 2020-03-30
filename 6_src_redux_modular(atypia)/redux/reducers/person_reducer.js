/* 
	person_reducer专门用于管理person组件的状态
*/
import {ADD_PERSON} from '../action_types'

export default function (preState=[{name:'沛华',age:18}],action){ //preState=[]的含义是设置初始化状态
	//从action中获取type、data
	const {type,data} = action
	console.log('@@@@@@@@@@@person');
	//提前准备好一个newState用于返回
	let newState
	switch (type) {
		case ADD_PERSON: //如果是添加一个人
			newState = [data,...preState]
			return newState
		default:
			return preState
	}
}