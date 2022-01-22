function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
var removeNthFromEnd = function (head, n) {
  if (head.next === null) return null;
  let cur = head;
  let length = 1;
  while (cur.next) {
    cur = cur.next;
    length++;
  }
  cur = head;
  if (length === n) return cur.next;
  for (let i = 1; i < length - n + 1; i++) cur = cur.next;
  cur.next = cur.next ? cur.next.next : null;
  return head;
};
