import { a } from '../src/a'

const ATestAction = a<{ str: string }>('A_TEST_ACTION')
type ATestAction = ReturnType<typeof ATestAction>

const ASecondTestAction = a('A_SECOND_TEST_ACTION')
type ASecondTestAction = ReturnType<typeof ASecondTestAction>

const AThirdTestAction = a<{ num: number }>('A_THIRD_TEST_ACTION')
type AThirdTestAction = ReturnType<typeof AThirdTestAction>

export { ATestAction, ASecondTestAction, AThirdTestAction }
