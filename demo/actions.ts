import { a, p } from '../src/a'

const ATestAction = a('A_TEST_ACTION', p<{ str: string }>())
type ATestAction = ReturnType<typeof ATestAction>

const ASecondTestAction = a('A_SECOND_TEST_ACTION')
type ASecondTestAction = ReturnType<typeof ASecondTestAction>

const AThirdTestAction = a('A_THIRD_TEST_ACTION', p<{ num: number }>())
type AThirdTestAction = ReturnType<typeof AThirdTestAction>

export { ATestAction, ASecondTestAction, AThirdTestAction }
