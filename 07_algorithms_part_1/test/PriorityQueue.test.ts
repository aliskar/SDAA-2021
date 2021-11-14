import { Job } from '../src/Job'
import { Queue } from '../src/PriorityQueue'

describe('PriorityQueue', () => {
  it('place and execute jobs in particular priority', () => {
    const job1 = new Job(4, 200)
    const job2 = new Job(7, 200)
    const job3 = new Job(14, 200)
    const job4 = new Job(12, 200)
    const job5 = new Job(11, 200)

    const priorityQueue = new Queue()

    priorityQueue.insert(job1)
    priorityQueue.insert(job2)
    priorityQueue.insert(job3)
    priorityQueue.insert(job4)
    priorityQueue.insert(job5)

    expect(priorityQueue.extractMax().priority).toEqual(14)
    expect(priorityQueue.extractMax().priority).toEqual(12)
    expect(priorityQueue.extractMax().priority).toEqual(11)
    expect(priorityQueue.extractMax().priority).toEqual(7)
    expect(priorityQueue.extractMax().priority).toEqual(4)
  })
})
