/* 
		该文件专门用于为count组件创建action对象
*/
import {INCREMENT,DECREMENT} from './action_types'

//创建一个“加”的action
export const createIncrementAction = value => ({type:INCREMENT,data:value})

//创建一个“减”的action
export const createDecrementAction = value => ({type:DECREMENT,data:value})

//创建一个“等一等”再加的action，它是异步的action，异步的action里面通常开启异步任务，通常都会匹配一个同步的action
export const createWaitIncrementAction = (value,time) => {
	return (dispatch)=>{
		setTimeout(()=>{
			dispatch(createIncrementAction(value))
		},time)
	}
}

