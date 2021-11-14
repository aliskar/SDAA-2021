import { Job } from '../src/Job'
import { JobRunner } from '../src/JobRunner'
import { Queue } from '../src/PriorityQueue'

describe('JobRunner', () => {
  it('stack and execute job by particular priority', async () => {
    const mockedCallback = jest.fn()

    const job1 = new Job(4, 200, mockedCallback)
    const job2 = new Job(7, 200, mockedCallback)
    const job3 = new Job(14, 200, mockedCallback)
    const job4 = new Job(12, 200, mockedCallback)
    const job5 = new Job(11, 200, mockedCallback)

    const jobRunner = new JobRunner(new Queue())

    jobRunner.addJob(job1).addJob(job2).addJob(job3).addJob(job4).addJob(job5)

    await jobRunner.run()

    expect(mockedCallback).toBeCalledTimes(5)
  })
})
