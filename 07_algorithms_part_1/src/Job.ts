import { callback, PriorityJob } from './types'

const sleep = (delay: number) => new Promise((resolve) => setTimeout(resolve, delay))

export class Job implements PriorityJob {
  private static ID = 0
  public id: number

  constructor(public priority: number, private delay: number, private cb?: callback) {
    this.id = Job.ID++
  }

  public async run(): Promise<void> {
    await sleep(this.delay)
    this.cb?.()
    console.log(`[log][job priority=${this.priority}]: Job.id = ${this.id} executed with ${this.delay} delay`)
  }
}
