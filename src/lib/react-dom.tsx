import { ReactElement, FunctionComponent, ClassComponent } from "./react";

function render(element: ReactElement, container: HTMLElement): any {
  if (typeof element === "string") {
    return container.appendChild(document.createTextNode(element));
  }
  let { type, props } = element;

  if ((type as ClassComponent).isReactComponent) {
    element = new (type as ClassComponent)(props).render()!;
    type = element.type;
    props = element.props;
  } else if (typeof type === "function") {
    // 如果type是一个函数类型即使函数组件的情况
    let el = (type as FunctionComponent)(props);
    type = el.type;
    props = el.props;
  }

  let domElement: HTMLElement = document.createElement(type as string); // 这里需要将type断言成string
  for (let propName in props) {
    // 如果属性时className 那么把className 添加到元素上
    if (propName === "className") {
      domElement.className = props[propName];
    } else if (propName === "style") {
      // 如果属性是style 则将style也添加上
      let styleObject = props[propName];
      // 将css样式改变为cssText格式字符串
      let cssText = Object.keys(styleObject)
        .map(attr => {
          return (
            // 将大写的字幕转换为-小写字母，如 fontSize => font-size
            attr.replace(/([A-Z])/g, function() {
              return "-" + arguments[1].toLowerCase();
            }) +
            ":" +
            styleObject[attr]
          );
        })
        .join(";");
      domElement.style.cssText = cssText;
    } else if (propName === "children") {
      // 递归调用
      props[propName].forEach((child: any) => {
        render(child, domElement);
      });
    } else {
      domElement.setAttribute(propName, props[propName]);
    }
  }
  return container.appendChild(domElement);
}
export default { render };
