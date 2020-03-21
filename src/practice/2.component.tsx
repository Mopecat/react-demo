import React from "react";
import ReactDom from "react-dom";

let root: HTMLElement | null = document.getElementById("root");

/**
 * 复合组件和提供组件
 */
interface PannelProps {
  headString: string;
  bodyString: string;
}
interface HeadProps {
  headString: string;
}
interface BodyProps {
  bodyString: string;
}

class Head extends React.Component<HeadProps> {
  render() {
    let { headString } = this.props;
    return (
      <div style={{ border: "1px solid green", padding: 5 }}>{headString}</div>
    );
  }
}
class Body extends React.Component<BodyProps> {
  render() {
    let { bodyString } = this.props;
    return (
      <div style={{ border: "1px solid blue", padding: 5 }}>{bodyString}</div>
    );
  }
}

class Pannel extends React.Component<PannelProps> {
  render() {
    let { headString, bodyString } = this.props;
    return (
      <div style={{ border: "1px solid red", padding: 5 }}>
        <Head headString={headString} />
        <Body bodyString={bodyString} />
      </div>
    );
  }
}
let PannelProps: PannelProps = {
  headString: "我是头",
  bodyString: "我是身体"
};

ReactDom.render(<Pannel {...PannelProps} />, root);
