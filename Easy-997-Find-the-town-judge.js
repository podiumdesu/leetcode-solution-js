/**
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 */

function Graph(v) {
  this.vertices = v; // 顶点数
  this.edges = 0;
  this.adj = []
  this.trustList = []
  for (let i = 0; i < this.vertices; i++) {
    this.adj[i] = []
    this.trustList[i] = []
  }
  this.addEdge = addEdge
  this.showGraph = showGraph
}

function addEdge(v, w) { // 有向图
  if (this.adj[v].indexOf(w) >= 0) {
    console.log("No matched edge")
    return
  }
  this.adj[v].push(w)
  this.trustList[w].push(v)
  this.edges++
}

function showGraph() {
  for (let i = 0; i < this.vertices; i++) {
    console.log(`${i} -> adj: ${this.adj[i]}`)
    console.log(`${i} -> trustList: ${this.trustList[i]}`)
    console.log("------")
    // for (let j = 0; j < this.adj[i].length; j++) {

    // }
  }
}

var findJudge = function (N, trust) {
  let townGraph = new Graph(N)
  for (let i = 0, len = trust.length; i < len; i++) {
    townGraph.addEdge(trust[i][0] - 1, trust[i][1] - 1)
  }
  townGraph.showGraph()
  for (let i = 0; i < townGraph.vertices; i++) {
    console.log(townGraph.trustList[i].length)
    if (townGraph.trustList[i].length === townGraph.vertices - 1) {
      console.log("done")
      return (townGraph.adj[i].length === 0) ? i + 1 : -1
    }
  }
  return -1

};

c = findJudge(4, [
  [1, 3],
  [1, 4],
  [2, 3],
  [2, 4],
  [4, 3]
])
console.log(c)