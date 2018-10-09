interface Action<T = any> {
    type: T;
}
declare type PayloadFn<Args extends any[], R> = (...args: Args) => R;
declare type ActionCreator<Args extends any[], A> = (...args: Args) => A;
declare type TAction<T extends string, Payloads extends {} = {}> = Action<T> & {
    [K in keyof Payloads]: Payloads[K];
};
export declare function a<T extends string>(type: T): {
    TYPE: T;
    create: ActionCreator<any[], TAction<T>>;
};
export declare function a<T extends string, Args extends any[], R>(type: T, fn: PayloadFn<Args, R>): {
    TYPE: T;
    create: ActionCreator<Args, TAction<T, R>>;
};
export {};
