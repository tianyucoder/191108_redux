/* 
	用于合并所有的reducer，最终生成一个总的reducer
*/

//引入count_reducer
import countReducer from './count_reducer'
//引入person_reducer
import personReducer from './person_reducer'
//引入combineReducers专门用于合并所有的reducer，最终生成一个总的reducer
import {combineReducers} from 'redux'

//调用combineReducers所传入的那个对象，就是redux帮我们所保存的总状态！！！！！！！
export default combineReducers({
	number:countReducer,
	persons:personReducer
})