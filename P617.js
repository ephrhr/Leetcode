function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
// var mergeTrees = function (root1, root2) {
//   const callDFS = function (r1, r2) {
//     if (!r1 && !r2) return null;
//     if (!r1 || !r2) return r1 ? r1 : r2;
//     let newNode = new TreeNode();
//     newNode.val = r1.val + r2.val;
//     newNode.left = callDFS(r1.left, r2.left);
//     newNode.right = callDFS(r1.right, r2.right);
//     return newNode;
//   };
//   return callDFS(root1, root2);
// };

var mergeTrees = function (root1, root2) {
  if (!root1 && !root2) return root1;
  if (!root1 || !root2) return root1 || root2;
  root1.val += root2.val;
  root1.left = mergeTrees(root1.left, root2.left);
  root1.right = mergeTrees(root1.right, root2.right);
  return root1;
};

let root1 = new TreeNode(1);
root1.left = new TreeNode(3);
root1.left.left = new TreeNode(5);
root1.right = new TreeNode(2);
let root2 = new TreeNode(2);
root2.left = new TreeNode(1);
root2.left.right = new TreeNode(4);
root2.right = new TreeNode(3);
root2.right.right = new TreeNode(7);

console.log(mergeTrees(root1, root2));
