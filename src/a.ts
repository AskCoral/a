export function a<Obj extends {} | undefined = undefined>(
  type: string,
): {
  TYPE: string
  (obj?: Obj): { type: string } & { [K in keyof Obj]: Obj[K] }
} {
  const actionCreator: any = (obj: Obj) => {
    return Object.assign({ type }, obj)
  }
  actionCreator.TYPE = type
  return actionCreator
}
