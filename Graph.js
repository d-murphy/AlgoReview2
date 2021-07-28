
class Graph {
  constructor(){
    this.AdjList = new Map();
  }
  addVertex(v){
    this.AdjList.set(v,[])
  }
  addEdge(v,w){
    this.AdjList.get(v).push(w);
    this.AdjList.get(w).push(v);
  }
  print(){
    Array.from(this.AdjList).forEach((key) =>{
      console.log(key[0], "->", key[1])
    })
  }
  bfs(startingNode){
    let visited = {}; 
    let q = [];
    visited[startingNode] = true;
    q.push(startingNode);
    while(q.length>0){
      let getQueueElm = q.shift();
      console.log(getQueueElm);
      let getList = this.AdjList.get(getQueueElm)
      for (let i in getList){
        let neighbor = getList[i];
        if(!visited[neighbor]){
          visited[neighbor] = true;
          q.push(neighbor)
        }
      }
    }
  }
  dfs(startingNode){
    let visited = {};
    this._dfsUtil(startingNode, visited)
  }
  _dfsUtil(vert, visited){
    visited[vert] = true;
    console.log(vert)
    let get_neighbors = this.AdjList.get(vert);
    for (let i in get_neighbors){
      let get_elm = get_neighbors[i];
      if(!visited[get_elm]){
        this._dfsUtil(get_elm, visited)
      }
    }
  }
}

let g1 = new Graph();
g1.addVertex("a")
g1.addVertex("b")
g1.addVertex("c")
g1.addVertex("d")
g1.addVertex("e")
g1.addEdge("a","c")
g1.addEdge("a","b")
g1.addEdge("c","d")
g1.addEdge("c","e")
g1.print()
console.log("starting bfs")
g1.bfs("a")
console.log("starting dfs")
g1.dfs("a")