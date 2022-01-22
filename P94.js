function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var inorderTraversal = function (root) {
  if (!root) return [];
  let arr = [root.val];
  return inorderTraversal(root.left).concat(arr, inorderTraversal(root.right));
};
