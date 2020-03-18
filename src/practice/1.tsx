import React from 'react'
import ReactDom from 'react-dom'

let root: HTMLElement|null = document.getElementById('root')


// props 接口
interface Props{
    name:string
}

// 循环更新
function tick(){
    const ele:React.ReactElement = (
        <div>{new Date().toLocaleTimeString()}</div>
    )
    ReactDom.render(ele, root)
}
setInterval(tick,1000)
// 函数组件
// function Geeting(props:Props):React.ReactElement{
//     return <h1>Hello {props.name}</h1>
// }
// ts写法
// let Geeting:React.FunctionComponent<Props> = (props)=>{
//     return <h1>Hello {props.name}</h1>
// }

// 类组件
class Geeting extends React.Component<Props>{
    render(){
        return <h1>Hello {this.props.name}</h1>
    }
}
// ts
let Geeting1:React.ComponentClass<Props> = Geeting

ReactDom.render(<Geeting1 name='Mopecat'/>,root)