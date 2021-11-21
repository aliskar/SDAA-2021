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

  public findShortestRoute(from: number, to: number) {
    if (from > this.size - 1 || to > this.size - 1) {
      throw Error('Vertices cant be out of the matrix')
    }

    const visited: boolean[] = Array(this.size).fill(false)
    const minDist: number[] = Array(this.size).fill(Infinity)
    const closestVertices: number[] = []
    minDist[from] = 0

    for (let i = 0; i < this.size; i++) {
      let minDistPretender = Infinity
      let closest = 0

      minDist.forEach((value, index) => {
        if (!visited[index] && value < minDistPretender) {
          minDistPretender = value
          closest = index
        }
      })

      visited[closest] = true

      // console.log(`------${i}-------`)
      // console.log('minDistPretender =>', minDistPretender)
      // console.log('closest =>', closest)
      // console.log(`minDist =>`, minDist)

      minDist.forEach((value, index) => {
        const edgeWeight = this.matrix[closest][index]
        const newMinDist = minDistPretender + edgeWeight
        //console.log(`i = ${i} =>`, edgeWeight)

        if (edgeWeight > 0 && newMinDist < value) {
          minDist[index] = newMinDist
          closestVertices[index] = closest
        }
      })
    }

    const path = []
    while (to !== from) {
      path.push(to)
      to = closestVertices[to]
    }

    return [from, ...path.reverse()].join(' -> ')
  }
}
