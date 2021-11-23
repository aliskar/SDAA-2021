import { PriorityJob, Queue } from './types'

export class PriorityQueue implements Queue {
  private line: PriorityJob[] = []

  public getMaxPriorityJob() {
    return this.line[0]
  }

  private getParentIndex(index: number) {
    return Math.floor((index - 1) / 2)
  }

  private getLeftIndex(index: number) {
    return 2 * index + 1
  }

  private getRightIndex(index: number) {
    return 2 * index + 2
  }

  private getLastJobIndex() {
    return this.line.length - 1
  }

  private swapJobs(firstIndex: number, secondIndex: number) {
    ;[this.line[firstIndex], this.line[secondIndex]] = [this.line[secondIndex], this.line[firstIndex]]
  }

  private siftUp(currentIndex: number) {
    const isRoot = currentIndex === 0

    if (!isRoot && this.line[this.getParentIndex(currentIndex)].priority < this.line[currentIndex].priority) {
      this.swapJobs(this.getParentIndex(currentIndex), currentIndex)
      this.siftUp(this.getParentIndex(currentIndex))
    }
  }

  private siftDown(currentIndex: number) {
    const leftIndex = this.getLeftIndex(currentIndex)
    const rightIndex = this.getRightIndex(currentIndex)

    let largestIndex = currentIndex

    if (leftIndex <= this.getLastJobIndex() && this.line[leftIndex].priority > this.line[currentIndex].priority) {
      largestIndex = leftIndex
    }

    if (rightIndex <= this.getLastJobIndex() && this.line[rightIndex].priority > this.line[largestIndex].priority) {
      largestIndex = rightIndex
    }

    if (largestIndex !== currentIndex) {
      this.swapJobs(currentIndex, largestIndex)
      this.siftDown(largestIndex)
    }
  }

  public push(job: PriorityJob) {
    this.line.push(job)
    this.siftUp(this.getLastJobIndex())
  }

  public pop() {
    const result = this.line[0]
    this.swapJobs(0, this.getLastJobIndex())
    this.line.pop()
    this.siftDown(0)
    return result
  }

  public remove(index: number) {
    this.line[index].priority = Infinity
    this.siftUp(index)
    this.pop()
  }

  public changePriority(index: number, priority: number) {
    const oldPriority = this.line[index].priority
    this.line[index].priority = priority
    if (priority > oldPriority) {
      this.siftUp(index)
    } else {
      this.siftDown(index)
    }
  }
}
