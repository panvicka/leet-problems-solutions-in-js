class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
    this.next = null;
  }
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

module.exports = {
  Node,
  insertLevelOrder
}


