import { a } from '../src/a'

const ATestAction = a('A_TEST_ACTION', (str: string) => ({ str }))
type ATestAction = ReturnType<typeof ATestAction.create>

const ASecondTestAction = a('A_SECOND_TEST_ACTION')
type ASecondTestAction = ReturnType<typeof ASecondTestAction.create>

const AThirdTestAction = a('A_THIRD_TEST_ACTION', (num: number) => ({ num }))
type AThirdTestAction = ReturnType<typeof AThirdTestAction.create>

export { ATestAction, ASecondTestAction, AThirdTestAction }
