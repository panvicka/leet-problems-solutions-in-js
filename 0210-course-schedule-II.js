/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */


let numCourses = 4;
let prerequisites = [[1, 0], [2, 0], [3, 1], [3, 2]];

var findOrder = function(numCourses, prerequisites) {

  let grph = new Map();
  let visited = new Array(numCourses).fill(0);
  let result = [];

  // create the graph as adj. list 
  for (let [v, e] of prerequisites) {
    if (grph.has(v)) {
      let values = grph.get(v);
      values.push(e);
      grph.set(v, values)
    } else {
      grph.set(v, [e])
    }
  }
  console.log(grph);



  for (let i = 0; i < numCourses; i++) {
    if (visited[i] == 0 && traverse(i)) return [];
  }

  return result;


  function traverse(index) {

    visited[index] = 1;
    let dependencies = grph.get(index);

    if (dependencies) {
      for (let dep of dependencies) {
        if (visited[dep] == 1) return true;
        if (visited[dep] == 0 && traverse(dep)) return true
      }
    }

    visited[index] = 2;
    result.push(index);
    return false
  }

};




console.log(findOrder(numCourses, prerequisites));