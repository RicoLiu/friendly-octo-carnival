/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let prev = null;
    let current = head;
    while (current !== null) {
      let temp = current.next;
      current.next = prev;
      prev = current;
      current = temp;
    }
    return prev;
};