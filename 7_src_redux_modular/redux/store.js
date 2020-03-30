/* 
	整个redux中最最核心的store对象
*/
//引入使用createStore方法，用于创建一个store对象
import {createStore,applyMiddleware} from 'redux'
//引入合并之后的reducer
import reducer from './reducers'
//引入redux-thunk用于支持异步action
import thunk from  'redux-thunk'

//创建并暴露一个store,同时指定了reducer ------- 老板在创业之初就找好了手下人
export default createStore(reducer,applyMiddleware(thunk))
