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




function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

let d = new ListNode(3, undefined);
let c = new ListNode(1, undefined);
let b = new ListNode(4, c)
let a = new ListNode(3, b);


[3, 4, 1]


var insertionSortList = function(head) {
  if (!head) return null;
  let sortedListHead = head;
  head = head.next;
  sortedListHead.next = null;
  while (head) {
    let prev = null;
    let node = sortedListHead;
    while (node && head.val > node.val) {
      prev = node;
      node = node.next;
    }
    let insert = head;
    head = head.next;
    insert.next = node;
    if (prev) {
      prev.next = insert;
    } else {
      sortedListHead = insert;
    }
  }
  return sortedListHead;
};

console.log(insertionSortList(a));