import { hasOwnProperty } from 'shared/hasOwnProperty';
import { REACT_ELEMENT_TYPE } from 'shared/ReactSymbols';

const RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true,
};

/**
 * 创建一个 react 虚拟 dom 元素
 * @param {*} type  类型 span p...
 * @param {*} key   唯一的 key
 * @param {*} ref   引用, 可以通过 ref 来获取真实 dom
 * @param {*} props 属性对象
 * @returns  返回一个 react 虚拟 dom 元素
 */
function ReactElement(type, key, ref, props) {
  const element = {
    $$typeof: REACT_ELEMENT_TYPE, // 标识是一个 react 元素
    type,
    key,
    ref,
    props,
  };
  return element;
}

// import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// /*#__PURE__*/_jsxs("h1", {
//   children: ["Hello, ", /*#__PURE__*/_jsx("span", {
//     children: ", world!"
//   })]
// });
/**
 * 
 * @param {*} type 类名 h1 span....
 * @param {*} config 属性对象
 * @param  {*} maybeKey 唯一的 key，每个虚拟 dom 都可能有一个 key，用来区分一个父节点下的不同子节点，提高 diff 效率
 * 
 * react 17 第三个参数之后都是 children
 * react 18 children 是放在 config 中
 */
export function jsxDEV(type, config, maybeKey) {
  const props = {}; // 属性对象
  let key = null; // 唯一的 key
  let ref = null; // 引用, 可以通过 ref 来获取真实 dom

  if (typeof maybeKey !== undefined) {
    key = maybeKey;
  }
  if (hasValidRef(config)) {
    ref = config.ref;
  }

  for (let propName in config) {
    if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
      props[propName] = config[propName];
    }
  }

  return ReactElement(type, key, ref, props);
};

function hasValidRef(config) {
  return config && config.ref !== undefined;
}