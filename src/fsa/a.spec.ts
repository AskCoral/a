import { a, p } from './a'

type TMockPayload = string

const ACTION = 'ACTION'

const mockPayload: TMockPayload = 'string'

const AAction = a(ACTION)
type AAction = ReturnType<typeof AAction>

const APayloadAction = a(ACTION, (str: TMockPayload) => str)
type APayloadAction = ReturnType<typeof APayloadAction>

describe('fsA', () => {
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
        type: ACTION,
        payload: mockPayload,
      }
      expect(APayloadAction(mockPayload)).toEqual(expected)
    })
  })
})

describe('fsP', () => {
  it('returns the given payload object', () => {
    const payloadCreator = p<TMockPayload>()
    expect(payloadCreator(mockPayload)).toBe(mockPayload)
  })
})
