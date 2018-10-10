type TPayloadFn<Obj extends {}, R> = (obj: Obj) => R

interface ISimpleActionCreator<T, A> {
  TYPE: T
  (): A
}

interface IPayloadActionCreator<T, Obj extends {}, A> {
  TYPE: T
  (obj?: Obj): A
}

type TSimpleAction<T extends string> = {
  type: T
}

type TPayloadAction<T extends string, Payloads extends {} = {}> = TSimpleAction<
  T
> &
  { [K in keyof Payloads]: Payloads[K] }

/**
 * a
 */
export function a<T extends string>(
  type: T,
): ISimpleActionCreator<T, TSimpleAction<T>>
export function a<T extends string, Obj extends {}, R>(
  type: T,
  fn: TPayloadFn<Obj, R>,
): IPayloadActionCreator<T, Obj, TPayloadAction<T, R>>
export function a(type: string, payloadFn?: (obj: object) => object) {
  const actionCreator: any = (obj: object) => {
    if (payloadFn) {
      const extra = payloadFn(obj)
      return { type, ...extra }
    }
    return { type }
  }
  actionCreator.TYPE = type
  return actionCreator
}

/**
 * p
 */
export function p<Obj extends {}>(): (obj: Obj) => Obj
export function p() {
  return (obj: object) => obj
}
