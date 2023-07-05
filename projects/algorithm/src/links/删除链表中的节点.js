// 237 删除链表中的节点

//  Definition for singly-linked list.
function ListNode(val) {
  this.val = val;
  this.next = null;
}

const node = new ListNode(4);
node.next = new ListNode(5);
node.next.next = new ListNode(1);
node.next.next.next = new ListNode(9);

/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function (node) {
    node.val = node.next.val
    node.next = node.next.next
};
