/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {

  let prev = null;
  let curr = head;

  while (curr) {
    let temp = curr.next;
    curr.next = prev;
    previous = current;
    curr = temp;
  }

  return previous;

};


var reverseListRecursive = function(head) {

  if (!head) return null;

  let newHead = head;

  if (head.next) {
    newHead = reverseListRecursive(head.next)
    head.next.next = head;
  }

  head.next = null;

  return newHead;

};