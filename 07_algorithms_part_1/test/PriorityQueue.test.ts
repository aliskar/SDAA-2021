import { StubbyJob } from '../src/StubbyJob'
import { PriorityQueue } from '../src/PriorityQueue'

describe('PriorityQueue', () => {
  it('place and execute jobs in particular priority', () => {
    const job1 = new StubbyJob(4, 200)
    const job2 = new StubbyJob(7, 200)
    const job3 = new StubbyJob(14, 200)
    const job4 = new StubbyJob(12, 200)
    const job5 = new StubbyJob(11, 200)

    const priorityQueue = new PriorityQueue()

    priorityQueue.push(job1)
    priorityQueue.push(job2)
    priorityQueue.push(job3)
    priorityQueue.push(job4)
    priorityQueue.push(job5)

    expect(priorityQueue.pop().priority).toEqual(14)
    expect(priorityQueue.pop().priority).toEqual(12)
    expect(priorityQueue.pop().priority).toEqual(11)
    expect(priorityQueue.pop().priority).toEqual(7)
    expect(priorityQueue.pop().priority).toEqual(4)
  })
})
