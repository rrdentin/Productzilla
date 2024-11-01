"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logout = exports.login = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const username_initial = process.env.USERNAME_INITIAL || "admin123";
const password_initial = process.env.PASSWORD_INITIAL || "admin123";
const login = (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res
            .status(400)
            .json({ message: "Harus input username dan password" });
    }
    if (username === username_initial && password === password_initial) {
        res.cookie("isAuthenticated", "true", {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            maxAge: 24 * 60 * 60 * 1000,
        });
        return res.json({ message: "Login Berhasil" });
    }
    else {
        return res
            .status(401)
            .json({ message: "Username atau password tidak valid" });
    }
};
exports.login = login;
const logout = (req, res) => {
    res.clearCookie("isAuthenticated", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
    });
    return res.json({ message: "Logout Berhasil" });
};
exports.logout = logout;
