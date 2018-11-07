"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function a(type, payloads) {
    const actionCreator = (obj) => {
        if (payloads) {
            return Object.assign({ type }, obj);
        }
        return { type };
    };
    actionCreator.TYPE = type;
    return actionCreator;
}
exports.default = a;
//# sourceMappingURL=a.js.map