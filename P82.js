function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
var deleteDuplicates = function (head) {
  const dummy = new ListNode();
  dummy.next = head;
  let node = dummy;
  while (head) {
    if (head.next && head.val === head.next.val) {
      while (head.next && head.val === head.next.val)
        head.next = head.next.next;
      node.next = head.next;
    } else node = node.next;
    head = head.next;
  }
  return dummy.next;
};
