class Graph{
  constructor(){
    this.AdjList = new Map();
  }
  addVertex(v){
    this.AdjList.set(v, [])
  }
  addEdge(v,w){
    this.AdjList.get(v).push(w)
    //this.AdjList.get(w).push(v)
  }
  print(){
    Array.from(this.AdjList).forEach((key) =>{
      console.log(key[0], "->", key[1])
    })
  }
  bfs(startingNode){
    let visited = {};
    let q = []
    let resp = []; 
    visited[startingNode] = true;
    q.push(startingNode);
    while(q.length != 0){
      let getQuEl = q.shift()
      console.log(getQuEl)
      resp.push(getQuEl)
      let getList = this.AdjList.get(getQuEl)
      for(let i in getList){
        let neigh = getList[i]
        if(!visited[neigh]){
          visited[neigh] =true
          q.push(neigh)
        }
      }
    }
  return resp
  }
  dfs(startingNode){
    let visited = {};
    let resp = []; 
    this._dfsUtil(startingNode, visited, resp)
    return resp
  }
  _dfsUtil(vert, visited, resp){
    visited[vert] = true; 
    console.log(vert)
    resp.push(vert)
    let get_neighs = this.AdjList.get(vert);
    for (let i=0; i<get_neighs.length; i++){
      let get_elm = get_neighs[i]
      if(!visited[get_elm]){
        this._dfsUtil(get_elm, visited, resp)
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
let x = g1.bfs("a")
console.log(x)
console.log("starting dfs")
let y = g1.dfs("a")
console.log(y)
