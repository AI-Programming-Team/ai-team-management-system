import sampleTeams from './sampleTeams'
import { describe, it, expect } from 'vitest'

describe('sampleTeams data', () => {
  it('contains 4 teams', () => {
    expect(sampleTeams.length).toBe(4)
  })
})