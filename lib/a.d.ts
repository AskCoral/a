interface ISimpleA<T, A> {
    TYPE: T;
    (): A;
}
interface IPayloadA<T, Payloads extends {}, A> {
    TYPE: T;
    (obj: Payloads): A;
}
declare type TSimpleAction<T extends string> = {
    type: T;
};
declare type TPayloadAction<T extends string, Payloads extends {} = {}> = TSimpleAction<T> & {
    [K in keyof Payloads]: Payloads[K];
};
declare function a<T extends string>(type: T): ISimpleA<T, TSimpleAction<T>>;
declare function a<T extends string, Payloads extends {}>(type: T, obj: Payloads): IPayloadA<T, Payloads, TPayloadAction<T, Payloads>>;
export default a;
