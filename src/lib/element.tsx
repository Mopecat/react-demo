import { ReactElement, FunctionComponent, ClassComponent } from "./react";
/**
 *
 * @param type React 元素的类型˝
 * @param config 配置对象
 * @param children 子元素
 */
function createElement(
  type: string | FunctionComponent | ClassComponent,
  config: Record<string, any>,
  ...children: Array<any>
): ReactElement {
  let propName: string;
  const props: Record<string, any> = {};
  // 拷贝config的所有属性
  for (propName in config) {
    props[propName] = config[propName];
  }
  props.children = children;
  let element: ReactElement = {
    type,
    props
  };
  return element;
}

export default createElement;
