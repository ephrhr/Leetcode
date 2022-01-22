function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
var levelOrder = function (root) {
  if (!root) return [];
  let result = [];
  let queue = [root];
  while (queue.length) {
    let next = [];
    let curLevel = [];
    while (queue.length) {
      let curNode = queue.shift();
      curLevel.push(curNode.val);
      if (curNode.left) next.push(curNode.left);
      if (curNode.right) next.push(curNode.right);
    }
    queue = next;
    result.push(curLevel);
  }
  return result;
};
