/**
 * @param {number} V
 * @param {number[][]} adj
 * @returns {number[]}
 */
class Solution {
  // Function to return Breadth First Traversal of given graph.
  bfsOfGraph(V, adj) {
    // code here

    let bfs = [];
    let visited = new Array(V).fill(0);
    let queue = [];

    queue.push(0);
    visited[0] = 1;
    // Iterate till the q is not empty
    while (queue.length) {
      // Extract the front node
      let node = queue.shift();

      // Push the node into the bfs vector
      bfs.push(node);

      // Explore it's adjacent node
      for (let nbrs of adj[node]) {
        if (!visited[nbrs]) {
          // Mark the current nbr as visited
          visited[nbrs] = 1;

          // Push the nbrs
          queue.push(nbrs);
        }
      }
    }

    return bfs;
  }
}
