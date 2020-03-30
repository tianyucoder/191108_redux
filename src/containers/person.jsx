//引入UI组件
import Person from '../components/person'
//从react-redux中引入connect方法
import {connect} from 'react-redux'
//引入action
import {createAddPersonAction} from '../redux/actions/person'


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