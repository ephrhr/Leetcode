function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

//BFS
var searchBST = function (root, val) {
  if (!root) return null;
  let queue = [root];
  while (queue.length) {
    let next = [];
    while (queue.length) {
      let node = queue.shift();
      if (node.val === val) return node;
      if (node.left) next.push(node.left);
      if (node.right) next.push(node.right);
    }
    queue = next;
  }
  return null;
};
