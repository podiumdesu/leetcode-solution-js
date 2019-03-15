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
  this.checkLoop = checkLoop
  this.loop = false
  this.checkLoop_visit = checkLoop_visit
}

function bfs(val) {
  let a = [val]
  const res = []
  this.visited[a[0]] = true
  while (a.length > 0) {
    for (let i = 0; i < this.adj[a[0]].length; i++) {
      if (!this.visited[this.adj[a[0]][i]]) { // 没有访问过
        a.push(this.adj[a[0]][i])
        this.visited[this.adj[a[0]][i]] = true
      }
    }
    res.push(a.shift())
  }
  console.log(`BFS: ${res}`)
}

function checkLoop_visit(visitNode) {
  this.visited[visitNode] = "GREY"
  for (let i = 0; i < this.adj[visitNode].length; i++) {
    if (this.visited[this.adj[visitNode][i]] === "WHITE") {
      this.checkLoop_visit(this.adj[visitNode][i])
    } else if (this.visited[this.adj[visitNode][i]] === "GREY") {
      this.loop = true
    }
  }
  this.visited[visitNode] = "BLACK"
}

function checkLoop() { // 检查是否有环路
  for (let i = 0; i < this.vertices; i++) {
    this.visited[i] = "WHITE"
  }
  for (let i = 0; i < this.vertices; i++) {
    if (this.visited[i] === "WHITE") {
      this.checkLoop_visit(i)
    }
  }
  console.log(this.loop)
}

function dfs_visit(visitNode, res) {
  this.visited[visitNode] = true
  res.push(visitNode)
  for (let i = 0; i < this.adj[visitNode].length; i++) {
    if (!this.visited[this.adj[visitNode][i]]) {
      this.dfs_visit(this.adj[visitNode][i], res)
    }
  }
}

function dfs(val) {
  let res = []
  this.dfs_visit(val, res)
  // for (let i = 0; i < this.vertices; i++) { // 可能会有多个联通分量
  //   if (!this.visited[i]) {
  //     console.log("GGG")
  //     this.dfs_visit(i, res)
  //   }
  // }
  console.log(`dfs: ${res}`)
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
a.addEdge(0, 1)

a.addEdge(2, 4)
a.showGraph()
a.dfs(3)
// a.bfs(2)
a.checkLoop()