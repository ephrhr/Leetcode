function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var postorderTraversal = function (root) {
  if (!root) return [];
  let arr = [root.val];
  return postorderTraversal(root.left).concat(
    postorderTraversal(root.right),
    arr
  );
};
