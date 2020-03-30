/* 
		该文件专门用于为person组件创建action对象
*/
import {ADD_PERSON} from '../action_types'

//创建一个“加”的action
export const createAddPersonAction = personObj => ({type:ADD_PERSON,data:personObj})

