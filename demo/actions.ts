import { a, p } from '../src/a'
import { a as A, p as P } from '../src/fsa/a'

const ATestAction = a('TEST_ACTION', p<{ str: string }>())
type ATestAction = ReturnType<typeof ATestAction>

const ASecondTestAction = a('SECOND_TEST_ACTION')
type ASecondTestAction = ReturnType<typeof ASecondTestAction>

const AThirdTestAction = a('THIRD_TEST_ACTION', p<{ num: number }>())
type AThirdTestAction = ReturnType<typeof AThirdTestAction>

const AFSAAction = A('FSA', P<string>())
type AFSAAction = ReturnType<typeof AFSAAction>

export { ATestAction, ASecondTestAction, AThirdTestAction, AFSAAction }
