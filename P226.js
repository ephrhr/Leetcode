function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
//DFS
var invertTree = function (root) {
  if (!root) return root;
  invertTree(root.left);
  invertTree(root.right);
  [root.left, root.right] = [root.right, root.left];
  return root;
};

//BFS
var invertTree = function (root) {
  if (!root) return root;
  let queue = [root];
  while (queue.length) {
    let node = queue.shift();
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
    [node.left, node.right] = [node.right, node.left];
  }
  return root;
};
