let V;
// An Array of List which contains
// references to the Adjacency List of
// each vertex
let adj;

function Graph(v) {
  V = v;
  adj = new Array(V);
  for (let i = 0; i < V; i++) {
    adj[i] = [];
  }
}

// Function to add an edge to graph
function addEdge(u, v) {
  adj[u].push(v);
}

// prints a Topological Sort of the
// complete graph
function topologicalSort() {
  // Create a array to store
  // indegrees of all
  // vertices. Initialize all
  // indegrees as 0.
  let indegree = new Array(V);
  for (let i = 0; i < V; i++) {
    indegree[i] = 0;
  }

  // Traverse adjacency lists
  // to fill indegrees of
  // vertices. This step takes
  // O(V+E) time
  for (let i = 0; i < V; i++) {
    let temp = adj[i];
    for (let node = 0; node < temp.length; node++) {
      indegree[temp[node]]++;
    }
  }

  // Create a queue and enqueue
  // all vertices with indegree 0
  let q = [];
  for (let i = 0; i < V; i++) {
    if (indegree[i] == 0) {
      q.push(i);
    }
  }

  // Initialize count of visited vertices
  let cnt = 0;

  // Create a vector to store result
  // (A topological ordering of the vertices)
  let topOrder = [];
  while (q.length != 0) {
    // Extract front of queue
    // (or perform dequeue)
    // and add it to topological order
    let u = q.shift();
    topOrder.push(u);

    // Iterate through all its
    // neighbouring nodes
    // of dequeued node u and
    // decrease their in-degree
    // by 1
    for (let node = 0; node < adj[u].length; node++) {
      // If in-degree becomes zero,
      // add it to queue
      if (--indegree[adj[u][node]] == 0) {
        q.push(adj[u][node]);
      }
    }
    cnt++;
  }

  // Check if there was a cycle
  if (cnt != V) {
    document.write("There exists a cycle in the graph");
    return;
  }

  // Print topological order
  for (let i = 0; i < topOrder.length; i++) {
    document.write(topOrder[i] + " ");
  }
}
