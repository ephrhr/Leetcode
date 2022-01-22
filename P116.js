function Node(val, left, right, next) {
  this.val = val === undefined ? null : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
  this.next = next === undefined ? null : next;
}

//DFS
var connect = function (root) {
  if (!root || !root.left) return root;
  root.left.next = root.right;
  root.right.next = root.next ? root.next.left : null;
  connect(root.left);
  connect(root.right);
  return root;
};

//BFS
var connect = function (root) {
  if (!root) return root;
  let queue = [root];
  while (queue.length) {
    let next = [];
    while (queue.length) {
      let node = queue.shift();
      node.next = queue[0] || null;
      if (node.left) {
        next.push(node.left);
        next.push(node.right);
      }
    }
    queue = next;
  }
  return root;
};
