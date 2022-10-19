/**
 * @param {number} V
 * @param {number[][]} adj
 * @returns {number[]}
 */
class Solution {
  DFSUtil(v, visited, ans, adj) {
    visited[v] = true;
    ans.push(v);

    for (const n of adj[v]) {
      if (!visited[n]) this.DFSUtil(n, visited, ans, adj);
    }
  }

  dfsOfGraph(V, adj) {
    let visited = new Array(V).fill(false);
    let ans = [];

    for (let i = 0; i < V; ++i)
      if (visited[i] == false) this.DFSUtil(i, visited, ans, adj);
    return ans;
  }
}
