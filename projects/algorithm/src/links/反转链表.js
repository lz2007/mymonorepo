function ListNode(val) {
  this.val = val;
  this.next = null;
}

const node = new ListNode(4);
node.next = new ListNode(5);
node.next.next = new ListNode(1);
node.next.next.next = new ListNode(9);

// 输入：head = [1,2,3,4,5]
// 输出：[5,4,3,2,1]

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// var reverseList = function (head) {
//     const reverse = (pre, cur) => {
//         if (!cur) return pre;
//         const next = cur.next;
//         cur.next = pre;
//         return reverse(cur, next);
//     }

//     return reverse(null, head);
// };

var reverseList = function (head) {
    const pre = null;
    const cur = head;
    while(cur){
      const next = cur.next
      cur.next = pre
      pre = cur
      cur = next
    }
    return pre
};
