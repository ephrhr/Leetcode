function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
var pairSum = function (head) {
  let nums = [];
  let slow = head;
  let fast = head;
  while (fast) {
    nums.push(slow.val);
    slow = slow.next;
    fast = fast.next.next;
  }
  for (let i = nums.length - 1; i >= 0; i--) {
    nums[i] += slow.val;
    slow = slow.next;
  }
  return Math.max(...nums);
};
