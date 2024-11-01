import { Request, Response } from "express";
import { Book } from "../models/Book";

export const createBook = async (req: Request, res: Response) => {
  try {
    const { title, code, genre, author, description, year } = req.body;
    if (!title || !code || !genre || !author || !description || !year) {
      return res.status(400).json({ message: "Semua field harus diisi" });
    }
    const bookExist = await Book.findOne({ code });
    if (bookExist) {
      return res.status(400).json({ message: "Kode buku sudah ada" });
    }

    const book = new Book({
      title,
      code,
      genre,
      author,
      description,
      year,
    });
    await book.save();
    return res.status(201).json({
      status: "success",
      message: "Buku berhasil ditambahkan",
      data: book,
    });
  } catch (error: any) {
    return res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

export const updateBook = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { title, author, genre, code, description, year } = req.body;

    const bookExist = await Book.findOne({ code, _id: { $ne: id }});
    if (bookExist) {
      return res.status(400).json({ message: "Kode buku sudah ada" });
    }

    const book = await Book.findByIdAndUpdate(
      id,
      { title, author, genre, code, description, year },
      { new: true },
    );
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
  } catch (error: any) {
    return res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

export const getAllBook = async (req: Request, res: Response) => {
  try {
    const books = await Book.find();
    return res.status(200).json({
      status: "success",
      message: "Daftar buku berhasil ditemukan",
      data: books,
    });
  } catch (error: any) {
    return res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

export const findBookById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id);
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
  } catch (error: any) {
    return res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

export const deleteBook = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const book = await Book.findByIdAndDelete(id);
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
  } catch (error: any) {
    return res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};
