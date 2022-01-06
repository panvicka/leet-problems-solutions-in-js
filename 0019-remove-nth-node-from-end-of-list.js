/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */


function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}


// let n9 = new ListNode(9, undefined);
// let n8 = new ListNode(8, n9);
// let n7 = new ListNode(7, n8);
// let n6 = new ListNode(6, n7);
// let n5 = new ListNode(5, undefined);
// let n4 = new ListNode(4, n5);
// let n3 = new ListNode(3, n4);
// let n2 = new ListNode(2, n3);
let n1 = new ListNode(1, undefined);


var removeNthFromEnd = function(head, n) {

  let pointer = head;
  let listLen = 0;
  while (pointer) {
    pointer = pointer.next;
    listLen++;
  }
  console.log(`length ${listLen}`)

  let toRemove = listLen - n;
  console.log(`to remove ${toRemove}`)

  pointer = head;

  let i = 0;
  while (i < toRemove - 1) {
    pointer = pointer.next;
    i++;
  }

  if (toRemove == 0) {
    head = head.next;
  } else {
    console.log(`arrived at one before removing`)
    console.log(pointer)
    if (pointer.next) {
      pointer.next = pointer.next.next;
    } else {
      pointer.next = undefined;
    }
  }

  return head;


};


/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd2pointer = function(head, n) {
  if (!head) return head
  let dummy = new ListNode(-1, head);

  let slow = dummy;
  let fast = dummy;

  while (n--) {
    fast = fast.next
  }

  while (fast.next) {
    [slow, fast] = [slow.next, fast.next]
  }

  slow.next = slow.next.next

  return dummy.next
};





let n = 1;


console.log(removeNthFromEnd2pointer(n1, n))