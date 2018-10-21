type TPayloadFn<Payload, R> = (payload: Payload) => R

interface ISimpleActionCreator<T, A> {
  TYPE: T
  (): A
}

interface IPayloadActionCreator<T, Payload, A> {
  TYPE: T
  (payload: Payload): A
}

type TSimpleAction<T extends string> = {
  type: T
}

type TPayloadAction<T extends string, Payload> = {
  type: T
  payload: Payload
}

/**
 * a
 */
export function a<T extends string>(
  type: T,
): ISimpleActionCreator<T, TSimpleAction<T>>
export function a<T extends string, Payload, R>(
  type: T,
  fn: TPayloadFn<Payload, R>,
): IPayloadActionCreator<T, Payload, TPayloadAction<T, R>>
export function a(type: string, payloadFn?: (payload: any) => object) {
  const actionCreator: any = (payload: any) => {
    if (payloadFn) {
      const pl = payloadFn(payload)
      return { type, payload: pl }
    }
    return { type }
  }
  actionCreator.TYPE = type
  return actionCreator
}

/**
 * p
 */
export function p<Payload extends any>(): (payload: Payload) => Payload
export function p() {
  return (payload: any) => payload
}
