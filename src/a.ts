interface Action<T = any> {
  type: T
}

type PayloadFn<Obj extends {}, R> = (obj: Obj) => R
interface ActionCreator<T, Obj extends {}, A> {
  TYPE: T
  (obj: Obj): A
}

type TAction<T extends string, Payloads extends {} = {}> = Action<T> &
  { [K in keyof Payloads]: Payloads[K] }

export function a<T extends string>(type: T): ActionCreator<T, {}, TAction<T>>
export function a<T extends string, Obj extends {}, R>(
  type: T,
  fn: PayloadFn<Obj, R>,
): ActionCreator<T, Obj, TAction<T, R>>
export function a(type: string, payloadFn?: (obj: object) => object) {
  const actionCreator = (obj: object) => {
    if (payloadFn) {
      const extra = payloadFn(obj)
      return { type, ...extra }
    }
    return { type }
  }
  actionCreator.TYPE = type
  return actionCreator
}

export function p<Obj extends {}>(): (obj: Obj) => Obj
export function p() {
  return (obj: object) => obj
}
