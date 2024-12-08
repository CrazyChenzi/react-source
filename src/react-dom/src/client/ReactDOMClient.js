import { createContainer } from 'react-reconciler/src/client/ReactFiberReconciler';

/**
 * 
 * @param {*} internalRoot fiber 树的根节点
 */
function ReactDOMRoot(internalRoot) {
  this._internalRoot = internalRoot;
}

/**
 * 创建 dom root
 * @param {*} container 容器
 * @returns 
 */
export function createRoot(container) {
  // 创建 fiber 树的根节点
  const root = createContainer(container);
  return new ReactDOMRoot(root);
}
