/**
 * @swagger
 * components:
 *   schemas:
 *     Book:
 *       type: object
 *       required:
 *         - title
 *         - code
 *         - genre
 *         - author
 *         - description
 *        -  year
 */

import { Schema, model } from "mongoose";

interface IBook {
  title: string;
  code: string;
  genre: string;
  author: string;
  description: string;
  year: number;
}

const BookSchema = new Schema<IBook>({
  title: { type: String, required: true },
  code: { type: String, required: true, unique: true },
  genre: { type: String, required: true },
  author: { type: String, required: true },
  description: { type: String, required: true },
  year: { type: Number, required: true },
});

export const Book = model<IBook>("Book", BookSchema);
