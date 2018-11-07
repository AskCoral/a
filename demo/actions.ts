import a from '../src/a'

const ATestAction = a('A_TEST_ACTION', <{ str: string }>{})
const ASecondTestAction = a('A_SECOND_TEST_ACTION')
const AThirdTestAction = a('A_THIRD_TEST_ACTION', <{ num: number }>{})

type ATestAction = ReturnType<typeof ATestAction>
type ASecondTestAction = ReturnType<typeof ASecondTestAction>
type AThirdTestAction = ReturnType<typeof AThirdTestAction>

export { ATestAction, ASecondTestAction, AThirdTestAction }
