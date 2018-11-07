interface ISimpleA<T, A> {
  TYPE: T
  (): A
}

interface IPayloadA<T, Payloads extends {}, A> {
  TYPE: T
  (obj: Payloads): A
}

interface ISimpleAction<T extends string> {
  type: T
}

type TPayloadAction<T extends string, Payloads extends {} = {}> = ISimpleAction<
  T
> &
  { [K in keyof Payloads]: Payloads[K] }

/**
 * a
 */
function a<T extends string>(type: T): ISimpleA<T, ISimpleAction<T>>
function a<T extends string, Payloads extends {}>(
  type: T,
  obj: Payloads,
): IPayloadA<T, Payloads, TPayloadAction<T, Payloads>>
function a(type: string, payloads?: object) {
  const actionCreator: any = (obj: object) => {
    if (payloads) {
      return { type, ...obj }
    }
    return { type }
  }
  actionCreator.TYPE = type
  return actionCreator
}

export default a
