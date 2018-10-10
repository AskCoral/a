"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function a(type, payloadFn) {
    const actionCreator = (obj) => {
        if (payloadFn) {
            const extra = payloadFn(obj);
            return Object.assign({ type }, extra);
        }
        return { type };
    };
    actionCreator.TYPE = type;
    return actionCreator;
}
exports.a = a;
function p() {
    return (obj) => obj;
}
exports.p = p;
//# sourceMappingURL=a.js.map