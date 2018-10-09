import { a } from '../src/a'

export const ATestAction = a('A_TEST_ACTION', (str: string) => ({ str }))
export type ATestAction = ReturnType<typeof ATestAction.create>

export const ASecondTestAction = a('A_SECOND_TEST_ACTION')
export type ASecondTestAction = ReturnType<typeof ASecondTestAction.create>

export const AThirdTestAction = a('A_THIRD_TEST_ACTION', (num: number) => ({
  num,
}))
export type AThirdTestAction = ReturnType<typeof AThirdTestAction.create>
