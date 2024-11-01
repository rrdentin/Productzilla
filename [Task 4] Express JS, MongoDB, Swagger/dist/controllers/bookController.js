"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBook = exports.findBookById = exports.getAllBook = exports.updateBook = exports.createBook = void 0;
const Book_1 = require("../models/Book");
const createBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, code, genre, author, description, year } = req.body;
        if (!title || !code || !genre || !author || !description || !year) {
            return res.status(400).json({ message: "Semua field harus diisi" });
        }
        const bookExist = yield Book_1.Book.findOne({ code });
        if (bookExist) {
            return res.status(400).json({ message: "Kode buku sudah ada" });
        }
        const book = new Book_1.Book({
            title,
            code,
            genre,
            author,
            description,
            year,
        });
        yield book.save();
        return res.status(201).json({
            status: "success",
            message: "Buku berhasil ditambahkan",
            data: book,
        });
    }
    catch (error) {
        return res.status(500).json({
            status: "error",
            message: error.message,
        });
    }
});
exports.createBook = createBook;
const updateBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { title, author, genre, code, description, year } = req.body;
        const bookExist = yield Book_1.Book.findOne({ code });
        if (bookExist) {
            return res.status(400).json({ message: "Kode buku sudah ada" });
        }
        const book = yield Book_1.Book.findByIdAndUpdate(id, { title, author, genre, code, description, year }, { new: true });
        if (!book) {
            return res.status(404).json({
                status: "error",
                message: "Buku tidak ditemukan",
            });
        }
        return res.status(200).json({
            status: "success",
            message: "Buku berhasil diperbarui",
            data: book,
        });
    }
    catch (error) {
        return res.status(500).json({
            status: "error",
            message: error.message,
        });
    }
});
exports.updateBook = updateBook;
const getAllBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const books = yield Book_1.Book.find();
        return res.status(200).json({
            status: "success",
            message: "Daftar buku berhasil ditemukan",
            data: books,
        });
    }
    catch (error) {
        return res.status(500).json({
            status: "error",
            message: error.message,
        });
    }
});
exports.getAllBook = getAllBook;
const findBookById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const book = yield Book_1.Book.findById(id);
        if (!book) {
            return res.status(404).json({
                status: "error",
                message: "Buku tidak ditemukan",
            });
        }
        return res.status(200).json({
            status: "success",
            message: "Buku berhasil ditemukan",
            data: book,
        });
    }
    catch (error) {
        return res.status(500).json({
            status: "error",
            message: error.message,
        });
    }
});
exports.findBookById = findBookById;
const deleteBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const book = yield Book_1.Book.findByIdAndDelete(id);
        if (!book) {
            return res.status(404).json({
                status: "error",
                message: "Buku tidak ditemukan",
            });
        }
        return res.status(200).json({
            status: "success",
            message: "Buku berhasil dihapus",
        });
    }
    catch (error) {
        return res.status(500).json({
            status: "error",
            message: error.message,
        });
    }
});
exports.deleteBook = deleteBook;
