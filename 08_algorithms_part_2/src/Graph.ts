export class Graph {
  private matrix: number[][] = []

  constructor(private size: number = 1) {
    for (let i = 0; i < this.size; i++) {
      this.matrix.push(Array(size).fill(0))
    }
  }

  public printMatrix() {
    return this.matrix
  }

  public addVertex() {
    this.size++
    this.matrix.forEach((row) => row.push(0))
    this.matrix.push(Array(this.size).fill(0))
  }

  public addEdge(x: number, y: number, weight: number = 1) {
    if (x === y) {
      throw new Error('Vertices cant be the same')
    }
    if (weight < 0) {
      throw new Error('Weight cant be negative value')
    }

    if (x > this.size - 1 || y > this.size - 1) {
      throw new Error('Vertices cant be out of the matrix')
    }
    this.matrix[x][y] = weight
    this.matrix[y][x] = weight
  }

  private findClosestVertex(minDist: number[], visited: boolean[]) {
    let minDistance = Infinity
    let closest = null

    minDist.forEach((vertex, index) => {
      if (!visited[index] && vertex < minDistance) {
        minDistance = vertex
        closest = index
      }
    })

    return closest
  }

  private handleVertex(minDist: number[], vertex: number, closestVertices: number[], visited: boolean[]) {
    const currentDistance = minDist[vertex]

    minDist.forEach((value, index) => {
      const edgeWeight = this.matrix[vertex][index]
      const newMinDist = currentDistance + edgeWeight

      if (edgeWeight > 0 && newMinDist < value) {
        minDist[index] = newMinDist
        closestVertices[index] = vertex
      }
    })

    visited[vertex] = true
  }

  private formPath(closestVertices: number[], from: number, to: number) {
    const path = []
    while (to !== from) {
      path.push(to)
      to = closestVertices[to]
    }
    return [from, ...path.reverse()].join(' -> ')
  }

  public findShortestRoute(from: number, to: number) {
    const visited: boolean[] = Array(this.size).fill(false)
    const minDist: number[] = Array(this.size).fill(Infinity)
    const closestVertices: number[] | null[] = Array(this.size).fill(null)

    minDist[from] = 0

    let activeVertex = this.findClosestVertex(minDist, visited)

    while (activeVertex !== null) {
      this.handleVertex(minDist, activeVertex, closestVertices, visited)
      activeVertex = this.findClosestVertex(minDist, visited)
    }

    return this.formPath(closestVertices, from, to)
  }
}
