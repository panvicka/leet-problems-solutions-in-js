/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */


let numCourses = 4;
let prerequisites = [[0, 3], [1, 2], [1, 3], [3, 2]];


var findOrder2 = function(numCourses, prerequisites) {
  let graph = new Array(numCourses).fill(null);
  let indegree = new Array(numCourses).fill(0);

  for (let [u, v] of prerequisites) {
    if (graph[v]) {
      graph[v].push(u);
    } else {
      graph[v] = [u];
    }
    indegree[u]++;
  }
  console.log(graph);
  console.log(indegree);


  let queue = [];

  for (let i = 0; i < numCourses; i++) {
    if (indegree[i] == 0) {
      console.log(`found a starting course ${i}`)
      queue.push(i);
    }
  }
  if (queue.length == 0) return [];

  let schedule = [];

  while (queue.length > 0) {
    let courseTaken = queue.shift();
    console.log(`got ${courseTaken} from top of my queue`);
    schedule.push(courseTaken);
    console.log(`my new schedule ${schedule}`);
    console.log(`neighboard of the course ${graph[courseTaken]}`)
    if (graph[courseTaken]) {
      for (course of graph[courseTaken]) {
        indegree[course]--;
        if (indegree[course] == 0) {
          console.log(`i can push ${course} to queue`)
          queue.push(course);
        } else {
          console.log(`i cant push ${course} to queue yet, indegree of ${indegree[course]}`)
        }
      }
    }
  }

  if (schedule.length == numCourses) return schedule;
  return [];
}


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




console.log(findOrder2(numCourses, prerequisites));