import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import store from './redux/store'

ReactDOM.render(<App store={store}/>,document.getElementById('root'))
//store.subscribe专门用于检测redux中状态的变化，只要状态变化，就调用
//subscribe所指定的回调
store.subscribe(()=>{
	ReactDOM.render(<App store={store}/>,document.getElementById('root'))
})