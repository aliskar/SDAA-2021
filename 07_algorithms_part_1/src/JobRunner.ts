import { PriorityJob, PriorityQueue } from './types'

export class JobRunner {
  constructor(private priorityQueue: PriorityQueue) {}

  public addJob(job: PriorityJob) {
    this.priorityQueue.insert(job)
    return this
  }

  public async run() {
    let nextJob = this.priorityQueue.extractMax()

    while (nextJob) {
      await nextJob.run()
      nextJob = this.priorityQueue.extractMax()
    }
  }
}
