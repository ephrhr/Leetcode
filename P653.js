function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
//DFS - 1
var findTarget = function (root, k) {
  function DFS(node) {
    if (!node) return false;
    return (
      DFS(node.left) || DFS(node.right) || search(node, root, k - node.val)
    );
  }
  function search(root, node, target) {
    if (!node) return false;
    if (node !== root && node.val === target) return true;
    if (target > node.val) return search(root, node.right, target);
    return search(root, node.left, target);
  }
  return DFS(root);
};
//DFS - 2
var findTarget = function (root, k) {
  let set = new Set();
  function DFS(node) {
    if (!node) return false;
    if (set.has(node.val)) return true;
    set.add(k - node.val);
    return DFS(node.left) || DFS(node.right);
  }
  return DFS(root);
};
//BFS
var findTarget = function (root, k) {
  let set = new Set();
  let queue = [root];
  while (queue.length) {
    let node = queue.shift();
    if (set.has(node.val)) return true;
    set.add(k - node.val);
    if (node.left) next.push(node.left);
    if (node.right) next.push(node.right);
  }
  return false;
};
