declare type TPayloadFn<Payload, R> = (payload: Payload) => R;
interface ISimpleActionCreator<T, A> {
    TYPE: T;
    (): A;
}
interface IPayloadActionCreator<T, Payload, A> {
    TYPE: T;
    (payload: Payload): A;
}
declare type TSimpleAction<T extends string> = {
    type: T;
};
declare type TPayloadAction<T extends string, Payload> = {
    type: T;
    payload: Payload;
};
export declare function a<T extends string>(type: T): ISimpleActionCreator<T, TSimpleAction<T>>;
export declare function a<T extends string, Payload, R>(type: T, fn: TPayloadFn<Payload, R>): IPayloadActionCreator<T, Payload, TPayloadAction<T, R>>;
export declare function p<Payload extends any>(): (payload: Payload) => Payload;
export {};
