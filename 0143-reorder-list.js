/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

let n5 = new ListNode(5, undefined);
let n4 = new ListNode(4, n5);
let n3 = new ListNode(3, n4);
let n2 = new ListNode(2, n3);
let n1 = new ListNode(1, n2);

// Input: head = [1,2,3,4,5]
// Output: [1,5,2,4,3]


var reorderList = function(head) {

  let slow = head;
  let fast = head.next;

  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }

  second = slow.next;
  console.log(`middle of the list is ${second.val}`);
  // define the first part of the list by splitting it in half
  slow.next = null;

  // reverse the second part of the list
  let prev = null;
  while (second) {
    let temp = second.next;
    second.next = prev;
    prev = second;
    second = temp;

  }

  // merge the two lists
  second = prev;
  let first = head;

  while (second) {
    let tmp1 = first.next;
    let tmp2 = second.next;
    first.next = second;
    second.next = tmp1;
    first = tmp1;
    second = tmp2;
  }


};


reorderList(n1);
console.log(n1)