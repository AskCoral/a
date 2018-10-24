type TPayloadFn<Obj extends {}, R> = (obj: Obj) => R

interface ISimpleA<T, Ac> {
  TYPE: T
  (): Ac
}

interface IPayloadA<T, Obj extends {}, Ac> {
  TYPE: T
  (obj: Obj): Ac
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
export function a<T extends string>(type: T): ISimpleA<T, TSimpleAction<T>>
export function a<T extends string, Obj extends {}, R>(
  type: T,
  fn: TPayloadFn<Obj, R>,
): IPayloadA<T, Obj, TPayloadAction<T, R>>
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
