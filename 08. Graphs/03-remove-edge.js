class Graph{
    constructor(){
        this.adjacencyList = {}
    }

    removeEdge(vertex1,vertex2){
        if(this.adjacencyList[vertex1],this.adjacencyList[vertex2]){
            
            this.adjacencyList[vertex1] = this.adjacencyList[vertex1]
                .filter(v => v!== vertex2);
            this.adjacencyList[vertex2] = this.adjacencyList[vertex2]
                .filter(v => v !== vertex1)
                
            return true
        }
        return false
    }
}

