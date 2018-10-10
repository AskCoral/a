declare type TPayloadFn<Obj extends {}, R> = (obj: Obj) => R;
interface ISimpleActionCreator<T, A> {
    TYPE: T;
    (): A;
}
interface IPayloadActionCreator<T, Obj extends {}, A> {
    TYPE: T;
    (obj: Obj): A;
}
declare type TSimpleAction<T extends string> = {
    type: T;
};
declare type TPayloadAction<T extends string, Payloads extends {} = {}> = TSimpleAction<T> & {
    [K in keyof Payloads]: Payloads[K];
};
export declare function a<T extends string>(type: T): ISimpleActionCreator<T, TSimpleAction<T>>;
export declare function a<T extends string, Obj extends {}, R>(type: T, fn: TPayloadFn<Obj, R>): IPayloadActionCreator<T, Obj, TPayloadAction<T, R>>;
export declare function p<Obj extends {}>(): (obj: Obj) => Obj;
export {};
