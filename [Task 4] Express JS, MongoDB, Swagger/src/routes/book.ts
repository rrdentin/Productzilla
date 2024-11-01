import express from "express";
const route = express.Router();
const authMiddleware = require("../middleware/auth.middleware");

const {
  createBook,
  updateBook,
  getAllBook,
  findBookById,
  deleteBook,
} = require("../controllers/bookController");

/**
 * @swagger
 * /books:
 *   post:
 *     summary: Menambahkan data buku baru
 *     tags: [Books]
 *     security:
 *       - cookieAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Book'
 *     responses:
 *       201:
 *         description: Buku berhasil ditambahkan
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: "success"
 *                 message:
 *                   type: string
 *                   example: "Buku berhasil ditambahkan"
 *       400:
 *         description: Kode sudah ada
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: "error"
 *                 message:
 *                   type: string
 *                   example: "Kode buku sudah ada"
 */
route.post("/", authMiddleware, createBook);

/**
 * @swagger
 * /books/{id}:
 *   put:
 *     summary: Memperbarui buku berdasarkan ID
 *     tags: [Books]
 *     security:
 *       - cookieAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID buku
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Book'
 *     responses:
 *       200:
 *         description: Buku berhasil diperbarui
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: "success"
 *                 message:
 *                   type: string
 *                   example: "Buku berhasil diperbarui"
 *                 data:
 *                   $ref: '#/components/schemas/Book'
 *       404:
 *         description: Buku tidak ditemukan
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: "error"
 *                 message:
 *                   type: string
 *                   example: "Buku tidak ditemukan"
 *       400:
 *         description: Kode sudah ada
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: "error"
 *                 message:
 *                   type: string
 *                   example: "Kode buku sudah ada"
 */
route.put("/:id", authMiddleware, updateBook);

/**
 * @swagger
 * /books:
 *   get:
 *     summary: Mengambil semua daftar buku
 *     tags: [Books]
 *     responses:
 *       200:
 *         description: Daftar semua buku
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Book'
 */
route.get("/", getAllBook);

/**
 * @swagger
 * /books/{id}:
 *   get:
 *     summary: Mencari buku berdasarkan ID
 *     tags: [Books]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID buku
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Objek buku
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: "success"
 *                 message:
 *                   type: string
 *                   example: "Buku berhasil ditemukan"
 *                 data:
 *                   $ref: '#/components/schemas/Book'
 *       404:
 *         description: Buku tidak ditemukan
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: "error"
 *                 message:
 *                   type: string
 *                   example: "Buku tidak ditemukan"
 */
route.get("/:id", findBookById);


/**
 * @swagger
 * /books/{id}:
 *   delete:
 *     summary: Menghapus buku berdasarkan ID
 *     tags: [Books]
 *     security:
 *       - cookieAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID buku
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Buku berhasil dihapus
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: "success"
 *                 message:
 *                   type: string
 *                   example: "Buku berhasil dihapus"
 *       404:
 *         description: Buku tidak ditemukan
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: "error"
 *                 message:
 *                   type: string
 *                   example: "Buku tidak ditemukan"
 */
route.delete("/:id", authMiddleware, deleteBook);

module.exports = route;
