/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {

  let result = [];
  let endNode = graph.length - 1;
  console.log(`end node is ${endNode}`)
  let queue = [[0]]

  while (queue.length > 0) {

    const path = queue.shift();
    console.log(`path shifted from queue: ${path}`)
    // check if last element is the target element 
    let lastElement = path[path.length - 1];
    console.log(`lastElement of the current path ${lastElement}`);

    if (lastElement === endNode) {
      console.log(`last element of path ${path} is endNote ${endNode}, pushing to result`);
      result.push(path);
      console.log(result);
    } else {
      let neighbors = graph[lastElement];
      console.log(`creating new element for queue, neighbors of ${lastElement} are ${neighbors}`)
      for (let i = 0; i < neighbors.length; i++) {
        let newArrayPath = [...path, neighbors[i]];
        console.log(`new path ${newArrayPath}`)
        queue.push(newArrayPath);
      }
    }
  }

  return result;

};


// result [[0,1,3],[0,2,3]]
// const graph = [[1, 2], [3], [3], []];
// console.log(allPathsSourceTarget(graph));


// resulte [[0,4],[0,3,4],[0,1,3,4],[0,1,2,3,4],[0,1,4]]
const graph2 = [[4, 3, 1], [3, 2, 4], [3], [4], []]
console.log(allPathsSourceTarget(graph2));


