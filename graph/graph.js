function Graph(v) {
  this.vertices = v; // 顶点数
  this.edges = 0;
  this.adj = []
  for (let i = 0; i < this.vertices; i++) {
    this.adj[i] = []
  }
  this.addEdge = addEdge
  this.removeEdge = removeEdge
  this.showGraph = showGraph
}

function addEdge(v, w) {
  if (this.adj[v].indexOf(w) >= 0) {
    console.log("No matched edge")
    return
  }
  this.adj[v].push(w)
  this.adj[w].push(v)
  this.edges++
}

function removeEdge(v, w) {
  if (this.adj[v].indexOf(w) < 0) {
    console.log("No matched edge")
    return
  }
  this.adj[v] = this.adj[v].reduce((c, i) => {
    if (i != w) {
      c.push(i)
    };
    return c
  }, [])
  this.adj[w] = this.adj[w].reduce((c, i) => {
    if (i != v) {
      c.push(i)
    };
    return c
  }, [])
  this.edges--
}

function showGraph() {
  for (let i = 0; i < this.vertices; i++) {
    console.log(`${i} -> ${this.adj[i]}`)
    // for (let j = 0; j < this.adj[i].length; j++) {

    // }
  }
}