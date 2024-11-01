import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { Express } from "express";

const swaggerDesc = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Book Management API",
      version: "1.0.0",
      description: "API untuk memanage buku dan authentication",
    },
    servers: [
      {
        url: "http://localhost:3000/",
      },
    ],
    components: {
      securitySchemes: {
        cookieAuth: {
          type: "apiKey",
          in: "cookie",
          name: "token",
        },
      },
      schemas: {
        Book: {
          type: "object",
          required: ["title", "code", "genre", "author", "description", "year"],
          properties: {
            title: {
              type: "string",
              description: "Judul buku",
              example: "Typescript",
            },
            code: {
              type: "string",
              description: "Kode buku",
              example: "BA307",
            },
            genre: {
              type: "string",
              description: "Genre buku",
              example: "Technology",
            },
            author: {
              type: "string",
              description: "Pengarang buku",
              example: "Someone",
            },
            description: {
              type: "string",
              description: "Deskripsi buku", 
              example: "Buku panduan",
            },
            year: {
              type: "number",
              description: "The year the book was published",
              example: 2001,
            },
          },
        },
      },
      parameters: {
        bookId: {
          name: "id",
          in: "path",
          required: true,
          description: "ID of the book",
          schema: {
            type: "string",
          },
        },
      },
    },
    tags: [
      {
        name: "Auth",
        description: "Authentication operations",
      },
      {
        name: "Books",
        description: "Book management operations",
      },
    ],
  },
  apis: ["./src/routes/*.ts"],
};

const swaggerSpec = swaggerJsdoc(swaggerDesc);

const swaggerDocs = (app: Express) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};

export default swaggerDocs;
