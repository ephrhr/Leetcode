function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
//DFS
var isValidBST = function (root) {
  function DFS(node, left, right) {
    if (!node) return true;
    if (left < node.val && node.val < right)
      return DFS(node.left, left, node.val) && DFS(node.right, node.val, right);
    else return false;
  }
  return DFS(root, -Infinity, Infinity);
};
//BFS
var isValidBST = function (root) {
  const q = [
    {
      node: root,
      parent: null,
      pMin: Number.MIN_SAFE_INTEGER,
      pMax: Number.MAX_SAFE_INTEGER,
    },
  ];

  while (q.length > 0) {
    n = q.shift();
    if (n.parent) {
      if (n.node.val <= n.pMin || n.node.val >= n.pMax) {
        return false;
      }
    }

    if (n.node.left) {
      q.push({
        node: n.node.left,
        parent: n.node,
        pMin: n.pMin,
        pMax: n.node.val,
      });
    }
    if (n.node.right) {
      q.push({
        node: n.node.right,
        parent: n.node,
        pMin: n.node.val,
        pMax: n.pMax,
      });
    }
  }

  return true;
};
