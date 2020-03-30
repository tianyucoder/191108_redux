//引入UI组件
import Count from '../components/count'
//从react-redux中引入connect方法
import {connect} from 'react-redux'
//引入action_creator
import {
	createIncrementAction,
	createDecrementAction,
	createWaitIncrementAction
} from '../redux/actions/count'


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


