/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function(root) {
  let res = [];
  function traverse(node, num = '') {
    if (!node) return;
    console.log(`calling traverse with node ${node.val}`)
    console.log(`current number ${num}`)
    if (!node.left && !node.right) {
      console.log(`hit end of the tree with ${node.val}`)
      console.log(`adding to result ${num} + ${node.val} =  ${num + node.val}`)
      res.push(num + node.val)
      console.log(res);
    } else {
      console.log(`not pushing anything, this is not the end of the tree yet`)
    }

    traverse(node.left, num + node.val);
    traverse(node.right, num + node.val);
  }
  traverse(root);

  let result = 0;
  res.forEach(item => result = result+parseInt(item));
  return result;
};

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const n1 = new Node(1);
const n2 = new Node(2);
const n3 = new Node(3);

n1.left = n2;
n1.right = n3;


const m1 =  new Node(4);
const m2 =  new Node(9);
const m3 =  new Node(0);
const m4 =  new Node(5);
const m5 =  new Node(1);

m1.left = m2;
m1.right = m3;
m2.left =m4;
m2.right = m5;

 
console.log(sumNumbers(n1))
console.log(sumNumbers(m1))

