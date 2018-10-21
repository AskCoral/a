"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function a(type, payloadFn) {
    const actionCreator = (payload) => {
        if (payloadFn) {
            const pl = payloadFn(payload);
            return { type, payload: pl };
        }
        return { type };
    };
    actionCreator.TYPE = type;
    return actionCreator;
}
exports.a = a;
function p() {
    return (payload) => payload;
}
exports.p = p;
//# sourceMappingURL=a.js.map