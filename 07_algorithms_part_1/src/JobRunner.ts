import { PriorityJob, Queue } from './types'

export class JobRunner {
  constructor(private priorityQueue: Queue) {}

  public addJob(job: PriorityJob) {
    this.priorityQueue.push(job)
    return this
  }

  public async run() {
    let nextJob = this.priorityQueue.pop()

    while (nextJob) {
      await nextJob.run()
      nextJob = this.priorityQueue.pop()
    }
  }
}
