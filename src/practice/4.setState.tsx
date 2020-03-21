import React from "react";
import ReactDom from "react-dom";

interface Props {}
interface State {
  number: number;
}

class Clock extends React.Component<Props, State> {
  timerId!: number;
  constructor(props: Props) {
    super(props);
    this.state = {
      number: 0
    };
  }
  // 组件挂载完成后 会执行此生命周期函数
  componentDidMount() {
    // this.timerId = setInterval(() => {
    //   this.setState({ number: this.state.number + 1 });
    // }, 1000);
  }
  componentWillUnmount(){
    clearInterval(this.timerId)
  }
  render() {
    return (
      <div>
        <p>{this.state.number}</p>
      </div>
    );
  }
}

ReactDom.render(<Clock />, document.getElementById("root")!);
