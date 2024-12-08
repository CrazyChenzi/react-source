import { createFiberRoot } from './ReactFiberRoot';

/**
 * 创建 fiber 树的根节点
 * @param {*} containerInfo root 容器
 * @returns 
 */
export function createContainer(containerInfo) {
  // 创建 fiber 树的根节点的方法
  return createFiberRoot(containerInfo);
}