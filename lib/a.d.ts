interface Action<T = any> {
    type: T;
}
declare type PayloadFn<Obj extends {}, R> = (obj: Obj) => R;
interface ActionCreator<T, Obj extends {}, A> {
    TYPE: T;
    (obj: Obj): A;
}
declare type TAction<T extends string, Payloads extends {} = {}> = Action<T> & {
    [K in keyof Payloads]: Payloads[K];
};
export declare function a<T extends string>(type: T): ActionCreator<T, {}, TAction<T>>;
export declare function a<T extends string, Obj extends {}, R>(type: T, fn: PayloadFn<Obj, R>): ActionCreator<T, Obj, TAction<T, R>>;
export declare function p<Obj extends {}>(): (obj: Obj) => Obj;
export {};
