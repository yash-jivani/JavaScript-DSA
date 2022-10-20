class Solution {
  topologicalSortUtil(v, visited, stack, adj) {
    // Mark the current node as visited.
    visited[v] = true;
    let i = 0;

    // Recur for all the vertices adjacent
    // to thisvertex
    for (i = 0; i < adj[v].length; i++) {
      if (!visited[adj[v][i]]) {
        this.topologicalSortUtil(adj[v][i], visited, stack, adj);
      }
    }

    // Push current vertex to stack
    // which stores result
    stack.push(v);
  }

  topoSort(V, adj) {
    // code here
    let stack = new Array();

    let visited = new Array(V);
    for (let i = 0; i < V; i++) {
      visited[i] = false;
    }

    for (let i = 0; i < V; i++) {
      if (visited[i] == false) {
        this.topologicalSortUtil(i, visited, stack, adj);
      }
    }

    let ans = [];
    while (stack.length != 0) {
      ans.push(stack.pop());
    }
    return ans;
  }
}
