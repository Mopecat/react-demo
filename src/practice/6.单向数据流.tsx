import React from "react";
import ReactDom from "react-dom";

interface Props {
  name: string;
}
interface State {
  number: number;
  
}

class Counter extends React.Component<Props, State> {
  state = { number: 0 };

  handleClick = (event: React.MouseEvent) => {
    // 这里的状态对象并不是代表整个状态对象，是一个部分状态，会合并到整个状态对象上（所以不写name也可以）
    this.setState({ number: this.state.number + 1 });
  };
  render() {
    return (
      <div>
        <p>
          {this.props.name}: {this.state.number}
        </p>
        <button onClick={this.handleClick}>加1</button>
        <hr/>
        <SubCounter {...this.props} {...this.state} /> 
      </div>
     
    );
  }
}

// 如果子组件想要修改父组件状态 可以在父组件中添加一个方法传给子组件
class SubCounter extends React.Component<Props&State>{
  render(){
    return (
    <div>{this.props.name}: {this.props.number}</div>
    )
  }
}
ReactDom.render(<Counter name={"计数器"} />, document.getElementById("root")!);
