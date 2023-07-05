function ListNode(val) {
  this.val = val;
  this.next = null;
}

const node = new ListNode(2);
node.next = new ListNode(4);
node.next.next = new ListNode(3);

const node2 = new ListNode(5);
node2.next = new ListNode(6);
node2.next.next = new ListNode(4);
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let p3 = new ListNode(null);
  let cur = p3;
  let count = 0;

  while (l1 || l2) {
    const v1 = l1 ? l1.val : 0;
    const v2 = l2 ? l2.val : 0;
    const sum = v1 + v2 + count;
    const val = sum % 10;

    cur.next = new ListNode(val);

    if (sum >= 10) {
      count = 1;
    } else {
      count = 0;
    }

    l1 = l1?.next;
    l2 = l2?.next;
    cur = cur.next;
  }

  if (count) {
    next.next = new ListNode(count);
  }

  return p3.next;
};

addTwoNumbers(node, node2);
