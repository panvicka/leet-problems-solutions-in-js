/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}


let c = new ListNode(1, undefined);
let b = new ListNode(0, c);
let a = new ListNode(1, b);


var getDecimalValue = function(head) {
  let numberString = '';

  let node = head;

  console.log(node);
  while (node) {
    numberString = numberString + node.val;
    node = node.next;
  }

  console.log(numberString);
  return parseInt(numberString, 2);
};


var getDecimalValueBin = function(head) {
  let res = 0;
  let node = head;
  while (node) {
    res = res << 1 | node.val;
    node = node.next;
    console.log(`current result ${res.toString(2)}`);
  }
  return res;
};

console.log(getDecimalValue(a));
console.log(getDecimalValueBin(a));