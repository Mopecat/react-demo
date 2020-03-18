import React from 'react'
import ReactDom from 'react-dom'

let root: HTMLElement|null = document.getElementById('root')


// props 接口
interface Props{
    name:string
}

// 函数组件
// function Geeting(props:Props):React.ReactElement{
//     return <h1>Hello {props.name}</h1>
// }

// 类组件
class Geeting extends React.Component<Props>{
    render(){
        return <h1>Hello {this.props.name}</h1>
    }
}

ReactDom.render(<Geeting name='Mopecat'/>,root)