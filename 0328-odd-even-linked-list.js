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


let n9 = new ListNode(9, undefined);
let n8 = new ListNode(8, n9);
let n7 = new ListNode(7, n8);
let n6 = new ListNode(6, n7);
let n5 = new ListNode(5, n6);
let n4 = new ListNode(4, n5);
let n3 = new ListNode(3, n4);
let n2 = new ListNode(2, n3);
let n1 = new ListNode(1, n2);

console.log(n1);

var oddEvenListSecondWay = function(head) {
  if (head == null) return null;

  let odd = head;
  let even = head.next;

  let oddHead = head;
  let evenHead = head.next;

  while (even && even.next) {
    odd.next = oddHead.next.next;
    even.next = evenHead.next.next;
    odd = odd.next;
    even = even.next;
  }
  odd.next = evenHead;
  return head;
}

var oddEvenList = function(head) {

  if (head == null) return null;

  let endPointer = head;
  let counter = 1;
  while (endPointer.next) {
    endPointer = endPointer.next;
    counter++;
  }
  console.log(`this list is ${counter} long`);
  counter = Math.floor(counter / 2);
  console.log(`i need to jump ${counter} times`)

  let temp = head;
  while (counter--) {
    endPointer.next = temp.next;
    temp.next = temp.next.next;
    endPointer.next.next = null;
    temp = temp.next;
    endPointer = endPointer.next;


    console.log(`printing the list after the operation`)
    let curr = head;
    let string = ``;
    while (curr) {
      string = string + ' ' + curr.val;
      curr = curr.next;
    }
    console.log(string);



  }

  let curr = head;
  let string = ``;
  while (curr) {
    string = string + ' ' + curr.val;
    curr = curr.next;
  }
  console.log(string);

  return head;

};

console.log(oddEvenList(n1));