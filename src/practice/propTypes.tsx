import React from "react";
import ReactDom from "react-dom";
import PropTypes from "prop-types";

let root: HTMLElement | null = document.getElementById("root");

/**
 * 属性校验
 */

interface PersonProps {
  name?: string;
  age?: number;
  gender?: "male" | "female";
  position?: { x: number; y: number };
  hobby?: Array<string>;
  [propName: string]: any;
}

class Person extends React.Component<PersonProps> {
  // 给默认值
  static defaultProps: PersonProps = {
    name: "未命名"
  };
  // 添加校验
  static propTypes = {
    // string & 必填
    name: PropTypes.string.isRequired,
    // oneof & 必填
    gender: PropTypes.oneOf(["male", "female"]).isRequired,
    // array
    hobby: PropTypes.arrayOf(PropTypes.string),
    // shape
    position: PropTypes.shape({
      x: PropTypes.number,
      y: PropTypes.number
    }),
    // 自定义属性
    age(
      props: PersonProps,
      propName: string,
      componentName: string
    ): Error | null {
      let age = props[propName];
      if (age < 0 || age > 100) {
        return new Error(
          `给 ${componentName} 提供一个不合法的属性 ${propName}`
        );
      }
      return null;
    }
  };
  render(): React.ReactElement {
    const { name, age, hobby, position = {}, gender } = this.props;
    return (
      <div>
        <p>name:{name}</p>
        <p>gender:{gender}</p>
        <p>age:{age}</p>
        <p>hobby:{hobby}</p>
        <p>position:{position.toString()}</p>
      </div>
    );
  }
}
let personProps: PersonProps = {
  name: "mopecat",
  gender: "male",
  age: 126,
  hobby: ["football", "basketball"],
  position: {
    x: 100,
    y: 200
  }
};
ReactDom.render(<Person {...personProps} />, root);
