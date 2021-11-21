import { Graph } from '../src/Graph'

describe('Graph', () => {
  it('should create adjacency matrix', () => {
    const graph = new Graph(4)
    graph.addEdge(0, 1, 10)
    graph.addEdge(0, 2, 3)
    graph.addEdge(1, 2, 4)
    graph.addEdge(2, 3, 11)

    expect(graph.printMatrix()).toEqual([
      [0, 10, 3, 0],
      [10, 0, 4, 0],
      [3, 4, 0, 11],
      [0, 0, 11, 0],
    ])
  })

  it('should find a shortest route from one vertex to another', () => {
    const graph1 = new Graph(4)
    graph1.addEdge(0, 1, 10)
    graph1.addEdge(0, 2, 3)
    graph1.addEdge(1, 2, 4)
    graph1.addEdge(2, 3, 11)

    expect(graph1.findShortestRoute(0, 3)).toEqual('0 -> 2 -> 3')

    const graph2 = new Graph(6)
    graph2.addEdge(0, 1, 4) // A -> B
    graph2.addEdge(0, 2, 2) // A -> C
    graph2.addEdge(1, 2, 1) // B -> C
    graph2.addEdge(1, 3, 5) // B -> D
    graph2.addEdge(2, 3, 8) // C -> D
    graph2.addEdge(2, 4, 10) // C -> E
    graph2.addEdge(3, 4, 2) // D -> E
    graph2.addEdge(3, 5, 6) // D -> Z
    graph2.addEdge(4, 5, 5) // E -> Z

    expect(graph2.findShortestRoute(0, 5)).toEqual('0 -> 2 -> 1 -> 3 -> 5')
  })
})
