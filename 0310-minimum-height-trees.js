/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findMinHeightTrees = function(n, edges) {

  let res = [];

  if (n <= 2) {
    for (let i = 0; i < n; i++) {
      res.push(i);
    }
    return res;
  }

  let graph = makeAdjacencyList(n, edges);
  console.log(graph);


  let leaves = [];
  for (let i = 0; i < n; i++) {
    if (graph[i].length == 1) {
      leaves.push(i)
    }
  }
  console.log(`initial leaves ${leaves}`)

  let remainingNodes = n;

  while (remainingNodes > 2) {
    remainingNodes = remainingNodes - leaves.length;
    let temp = [];

    for (leaf of leaves) {
      let leaveNeighbors = graph[leaf];
      console.log(`neighboars of leaf ${leaf} are ${leaveNeighbors}`);

      for (neighbor of leaveNeighbors) {
        var index = graph[neighbor].indexOf(leaf);
        if (index != -1) {
          graph[neighbor].splice(index, 1);
        }
        console.log(`graph after removal of ${leaf}`);
        console.log(graph);

        if (graph[neighbor].length == 1) {
          temp.push(neighbor);
          console.log(`after removal, neighbor ${neighbor} is now leaf itself`)
        }
      }

    }

    leaves = temp;
    console.log(`new leaves ${leaves}`)

  }

  return leaves;



};

function makeAdjacencyList(n, edges) {
  const graph = {};

  for (let edge of edges) {

    const [a, b] = edge;
    if (!(a in graph)) {
      graph[a] = [];
    }
    if (!(b in graph)) {
      graph[b] = [];
    }
    graph[a].push(b);
    graph[b].push(a);
  }
  return graph
}


let n = 4;
let edges = [[1, 0], [1, 2], [1, 3]]


n = 6;
edges = [[3, 0], [3, 1], [3, 2], [3, 4], [5, 4]]

console.log(findMinHeightTrees(n, edges));