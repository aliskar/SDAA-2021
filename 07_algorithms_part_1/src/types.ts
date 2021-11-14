export type callback = (...arg: any[]) => any

export interface PriorityJob {
  id: number
  priority: number
  run(): void
}

export interface PriorityQueue {
  getMaxPriorityJob(): PriorityJob
  insert(job: PriorityJob): void
  extractMax(): PriorityJob
  remove(index: number): void
  changePriority(index: number, priority: number): void
}
