function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var removeElements = function (head, val) {
  //shift condition
  while (head?.val === val) {
    if (!head.next) head = null;
    else head = head.next;
  }
  if (!head) return head;
  //remove condition
  let cur = head;
  while (cur && cur.next) {
    if (cur.next.val === val) cur.next = cur.next.next || null;
    else cur = cur.next;
  }
  return head;
};
