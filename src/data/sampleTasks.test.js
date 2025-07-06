import sampleTasks from './sampleTasks'
import { describe, it, expect } from 'vitest'

describe('sampleTasks data', () => {
  it('contains 4 tasks', () => {
    expect(sampleTasks.length).toBe(4)
  })
})