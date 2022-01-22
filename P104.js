function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
// var maxDepth = function (root) {
//   if (!root) return 0;
//   let maxDepth = 0;
//   function dfs(node, level) {
//     if (!node.left && !node.right) {
//       maxDepth = Math.max(maxDepth, level);
//       return;
//     }
//     if (node.left) dfs(node.left, level + 1);
//     if (node.right) dfs(node.right, level + 1);
//   }
//   dfs(root, 1);
//   return maxDepth;
// };

var maxDepth = function (root) {
  if (!root) return 0;
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};
