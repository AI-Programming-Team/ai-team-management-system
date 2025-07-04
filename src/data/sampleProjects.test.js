import sampleProjects from './sampleProjects'
import { describe, it, expect } from 'vitest'

describe('sampleProjects data', () => {
  it('contains 4 projects', () => {
    expect(sampleProjects.length).toBe(4)
  })
})