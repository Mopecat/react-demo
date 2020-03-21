import React from "react";
import ReactDom from "react-dom";

interface Props {}
interface State {
  number: number;
  name:string
}

class Counter extends React.Component<Props, State> {
  state = { number: 0 , name: "计数器"};
  // 箭头函数可以保证函数里的this永远指向当前类的实例
  // setState的更新可能是异步的，多个setState可能会被合并成一个
  handleClick = (event: React.MouseEvent) => {
    // 这里的状态对象并不是代表整个状态对象，是一个部分状态，会合并到整个状态对象上（所以不写name也可以）
    this.setState({ number: this.state.number + 1 });
    // 在事件处理韩式中调用setState的时候，this.state并没有真正的改变
    // this.setState({number: this.state.number+1})
    // this.setState({number: this.state.number+1})
    // this.setState({number: this.state.number+1})
    // 如果想实现上面这种连续改变三次的话 需要传递一个函数参数 而不是一个状态对象
    // this.setState((state)=>({number: state.number+1}))
    // this.setState((state)=>({number: state.number+1}))
    // this.setState((state)=>({number: state.number+1}))
    // this.setState({ number: this.state.number + 1 });
    // console.log(this.state.number);
    // this.setState({ number: this.state.number + 1 });
    // console.log(this.state.number);
    // setTimeout里的代码比较特殊，不会走批量更新，会立刻进行更新
    // setTimeout(() => {
    //   this.setState({ number: this.state.number + 1 });
    //   console.log(this.state.number);
    //   this.setState({ number: this.state.number + 1 });
    //   console.log(this.state.number);
    // }, 0);
  };
  render() {
    return (
      <div>
        <p>{this.state.name}: {this.state.number}</p>
        <button onClick={this.handleClick}>加1</button>
      </div>
    );
  }
}

ReactDom.render(<Counter />, document.getElementById("root")!);
