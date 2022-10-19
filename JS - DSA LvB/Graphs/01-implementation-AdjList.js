class Graph {
  constructor(no_ofVertices) {
    this.no_ofVertices = no_ofVertices;
    this.adjList = new Map();
  }

  addVertex(v) {
    this.adjList.set(v, []);
  }

  addEdge(v1, v2) {
    this.adjList.get(v1).push(v2);
    this.adjList.get(v2).push(v1);
  }

  showGraph() {
    let keys = this.adjList.keys();
    for (let key of keys) {
      let values = this.adjList.get(key);
      console.log(`${key} -> ${values}`);
    }
  }
}

const myGraph = new Graph(6);
const vertices = ["A", "B", "C", "D", "E", "F"];
for (let i = 0; i < vertices.length; i++) {
  myGraph.addVertex(vertices[i]);
}

myGraph.addEdge("A", "B");
myGraph.addEdge("A", "D");
myGraph.addEdge("A", "E");
myGraph.addEdge("B", "C");
myGraph.addEdge("D", "E");
myGraph.addEdge("E", "F");
myGraph.addEdge("E", "C");
myGraph.addEdge("C", "F");

myGraph.showGraph();
