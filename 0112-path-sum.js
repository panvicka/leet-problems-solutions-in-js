class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
  console.log(`searching for ${targetSum}`)
  return dfs(root, targetSum);
};


const dfs = (root, target) => {
  if (!root) return false;


  console.log(`visiting next node ${root.val}, target right now ${target}`)

  if (!root.left && !root.right) {
    console.log(`found leef on ${root.val}`);
    console.log(`did i end up with null? ${target - root.val}`);
    if (target - root.val === 0) return true;
    return false;

  }

 return dfs(root.left, target - root.val) ||
    dfs(root.right, target - root.val);
 
}

// Function to insert nodes in level order
function insertLevelOrder(arr, root, i) {
  // Base case for recursion
  if (i < arr.length) {
    let temp = new Node(arr[i]);
    root = temp;
    // insert left child
    root.left = insertLevelOrder(arr, root.left,
      2 * i + 1);
    // insert right child
    root.right = insertLevelOrder(arr, root.right,
      2 * i + 2);
  }
  return root;
}


const arr = [5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1]
let a;
a = insertLevelOrder(arr, a, 0);
 

const arr2 = [1,2,3];
let b;
b = insertLevelOrder(arr2, b, 0);

console.log(hasPathSum(a, 22));
console.log(hasPathSum(b, 5));


