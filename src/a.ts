interface Action<T = any> {
  type: T
}

type PayloadFn<Args extends any[], R> = (...args: Args) => R
type ActionCreator<Args extends any[], A> = (...args: Args) => A

type TAction<T extends string, Payloads extends {} = {}> = Action<T> &
  { [K in keyof Payloads]: Payloads[K] }

export function a<T extends string>(
  type: T,
): { TYPE: T; create: ActionCreator<any[], TAction<T>> }
export function a<T extends string, Args extends any[], R>(
  type: T,
  fn: PayloadFn<Args, R>,
): { TYPE: T; create: ActionCreator<Args, TAction<T, R>> }
export function a(type: string, payloadFn?: (...args: any[]) => object) {
  return {
    TYPE: type,
    create: (...args: any[]) => {
      if (payloadFn) {
        const extra = payloadFn(...args)
        return { type, ...extra }
      }
      return { type }
    },
  }
}
