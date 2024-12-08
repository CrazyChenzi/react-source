
function FiberRootNode(containerInfo) {
  this.containerInfo = containerInfo;
  // TODO 初始化 fiber 树的根节点
};

/**
 * 创建 fiber 树的根节点
 * @param {*} containerInfo root 容器
 * @returns 
 */
export function createFiberRoot(containerInfo) {
  const root = new FiberRootNode(containerInfo);
  // TODO 初始化 root 节点
  return root;
};