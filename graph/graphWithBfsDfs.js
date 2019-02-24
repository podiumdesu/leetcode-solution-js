function Graph(v) {
  this.vertices = v; // 顶点数
  this.edges = 0;
  this.adj = []
  this.visited = []
  for (let i = 0; i < this.vertices; i++) {
    this.adj[i] = []
    this.visited[i] = false // never visited
  }
  this.addEdge = addEdge
  this.removeEdge = removeEdge
  this.showGraph = showGraph
  this.bfs = bfs
  this.dfs = dfs
  this.dfs_visit = dfs_visit
}

function bfs() {
  let a = [0]
  const res = []
  this.visited[0] = true
  while (a.length > 0) {
    for (let i = 0; i < this.adj[a[0]].length; i++) {
      if (!this.visited[this.adj[a[0]][i]]) { // 没有访问过
        a.push(this.adj[a[0]][i])
        this.visited[this.adj[a[0]][i]] = true
      } else {
        console.log("Yes")
      }
    }
    res.push(a.shift())
  }
  console.log(res)
}

function dfs_visit(visitNode) {
  this.visited[visitNode] = true
  console.log(visitNode)
  for (let i = 0; i < this.adj[visitNode].length; i++) {
    if (!this.visited[this.adj[visitNode][i]]) {
      this.dfs_visit(this.adj[visitNode][i])
    }
  }
  console.log("访问！" + visitNode)
}

function dfs() {
  for (let i = 0; i < this.vertices; i++) {
    if (!this.visited[i]) {
      this.dfs_visit(i)
    }
  }
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

a = new Graph(5)
a.addEdge(0, 3)
a.addEdge(0, 4)
a.addEdge(3, 1)
// a.addEdge(4, 1)
a.addEdge(2, 4)
a.showGraph()
// a.bfs()
a.dfs()