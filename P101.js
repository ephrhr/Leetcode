function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
// var isSymmetric = function (root) {
//   function leftDFS(node) {
//     if (!node) return ['null'];
//     let stk = [node.val];
//     return stk.concat(leftDFS(node.left), leftDFS(node.right));
//   }
//   function rightDFS(node) {
//     if (!node) return ['null'];
//     let stk = [node.val];
//     return stk.concat(rightDFS(node.right), rightDFS(node.left));
//   }
//   let left = leftDFS(root.left);
//   let right = rightDFS(root.right);
//   console.log(left);
//   console.log(right);
//   if (left.length !== right.length) return false;
//   for (let i = 0; i < left.length; i++) if (left[i] !== right[i]) return false;
//   return true;
// };

var isSymmetric = function (root) {
  if (!root) return true;
  function symmetricCheck(left, right) {
    if (!left && !right) return true;
    if (!left || !right) return false;
    if (left.val !== right.val) return false;
    return (
      symmetricCheck(left.left, right.right) &&
      symmetricCheck(left.right, right.left)
    );
  }
  return symmetricCheck(root.left, root.right);
};
