import React from "../lib/react";
import ReactDom from "../lib/react-dom";

let style = { color: "red", fontSize: "25px" };
// let element = (
//   <h1 className="title" style={style}>
//     hello
//   </h1>
// );
// let element = React.createElement("h1", { className: "title", style }, "hello",'world');
interface Props {
  title: string;
}
// 函数组件
// const Welcome1:FunctionComponent = (props:Props)=>{
//   return React.createElement("h1", { className: "title", style }, "hello",'world');
// }

// 类组件
class Welcome extends React.Component {
  render() {
    return React.createElement(
      "h1",
      { className: "title", style },
      this.props.title
    );
  }
}
let element = React.createElement(Welcome, { title: "标题" });
console.log(element);

ReactDom.render(element, document.getElementById("root")!);
