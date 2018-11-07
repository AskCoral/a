import a from './a'

interface IMockPayloadInterface {
  str: string
  num: number
}

const ACTION = 'ACTION'

const mockPayload: IMockPayloadInterface = { str: 'string', num: 123 }

const AAction = a(ACTION)
type AAction = ReturnType<typeof AAction>

const APayloadAction = a(ACTION, <IMockPayloadInterface>{})
type APayloadAction = ReturnType<typeof APayloadAction>

describe('a', () => {
  describe('a simple action', () => {
    it('returns TYPE', () => {
      expect(AAction.TYPE).toBe(ACTION)
    })

    it('returns action', () => {
      const expected: AAction = { type: ACTION }
      expect(AAction()).toEqual(expected)
    })
  })

  describe('a payload action', () => {
    it('returns TYPE', () => {
      expect(APayloadAction.TYPE).toBe(ACTION)
    })

    it('returns action', () => {
      const expected: APayloadAction = {
        ...mockPayload,
        type: ACTION,
      }
      expect(APayloadAction(mockPayload)).toEqual(expected)
    })
  })
})
