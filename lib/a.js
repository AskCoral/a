"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function a(type, payloadFn) {
    return {
        TYPE: type,
        create: (...args) => {
            if (payloadFn) {
                const extra = payloadFn(...args);
                return Object.assign({ type }, extra);
            }
            return { type };
        },
    };
}
exports.a = a;
//# sourceMappingURL=a.js.map