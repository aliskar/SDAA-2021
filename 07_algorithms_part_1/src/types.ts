export type callback = (...arg: any[]) => any

export interface PriorityJob {
  id: number
  priority: number
  run(): void
}

export interface Queue {
  getMaxPriorityJob(): PriorityJob
  push(job: PriorityJob): void
  pop(): PriorityJob
  remove(index: number): void
  changePriority(index: number, priority: number): void
}
