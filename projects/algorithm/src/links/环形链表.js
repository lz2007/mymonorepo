
function ListNode(val) {
  this.val = val;
  this.next = null;
}

const list = new ListNode(1)
list.next =new ListNode(2)
list.next.next =list

const list2 = new ListNode(1)
list.next =new ListNode(1)
list.next.next =new ListNode(1)
list.next.next.next =new ListNode(1)

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
    if (head == null || head.next == null) {
        return false;
    }
    let p1 = head;
    let p2 = head.next;

    while (p1 != p2) {
        if (p2 == null || p2.next == null) {
            return false;
        }

        p1 = p1.next
        p2 = p2.next.next

    }

    return true;
};

console.log(hasCycle(list2))