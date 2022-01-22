function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
var addTwoNumbers = function (l1, l2) {
  if (l1.val === null || l2.val === null) return l1.val !== null ? l1 : l2;
  let tmpNode = new ListNode(0, null);
  let resultNode = tmpNode;
  let carry = 0;
  let sum = 0;
  while (l1 !== null || l2 !== null || sum > 0) {
    if (l1 !== null) {
      sum += l1.val;
      l1 = l1.next;
    }
    if (l2 !== null) {
      sum += l2.val;
      l2 = l2.next;
    }
    if (sum >= 10) {
      sum -= 10;
      carry = 1;
    }
    resultNode.next = new ListNode(sum);
    resultNode = resultNode.next;
    sum = carry;
    carry = 0;
  }
  return tmpNode.next;
};
