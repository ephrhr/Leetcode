function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var insertIntoBST = function (root, val) {
  let newNode = new TreeNode(val);
  if (!root) return newNode;
  let queue = [root];
  while (queue.length) {
    let node = queue.shift();
    if (newNode.val < node.val) {
      if (!node.left) {
        node.left = newNode;
        return root;
      }
      queue.push(node.left);
    }
    if (newNode.val > node.val) {
      if (!node.right) {
        node.right = newNode;
        return root;
      }
      queue.push(node.right);
    }
  }
  return newNode;
};
