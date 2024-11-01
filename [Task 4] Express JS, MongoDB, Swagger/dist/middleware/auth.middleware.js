"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const auth = (req, res, next) => {
    var _a;
    const isAuthenticated = (_a = req.cookies) === null || _a === void 0 ? void 0 : _a.isAuthenticated;
    if (isAuthenticated === "true") {
        return next();
    }
    else {
        return res.status(401).json({ message: "Akses ditolak. Silakan login." });
    }
};
module.exports = auth;
