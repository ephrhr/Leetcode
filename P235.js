function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var lowestCommonAncestor = function (root, p, q) {
  while ((root.val - p.val) * (root.val - q.val) > 0)
    root = p.val < root.val ? root.left : root.right;
  return root;
};
