import { StubbyJob } from '../src/StubbyJob'
import { JobRunner } from '../src/JobRunner'
import { PriorityQueue } from '../src/PriorityQueue'

describe('JobRunner', () => {
  it('stack and execute job by particular priority', async () => {
    const mockedCallback = jest.fn()

    const job1 = new StubbyJob(4, 200, mockedCallback)
    const job2 = new StubbyJob(7, 200, mockedCallback)
    const job3 = new StubbyJob(14, 200, mockedCallback)
    const job4 = new StubbyJob(12, 200, mockedCallback)
    const job5 = new StubbyJob(11, 200, mockedCallback)

    const jobRunner = new JobRunner(new PriorityQueue())

    jobRunner.addJob(job1).addJob(job2).addJob(job3).addJob(job4).addJob(job5)

    await jobRunner.run()

    expect(mockedCallback).toBeCalledTimes(5)
  })
})
