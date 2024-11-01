"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
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
const swaggerSpec = (0, swagger_jsdoc_1.default)(swaggerDesc);
const swaggerDocs = (app) => {
    app.use("/api-docs", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerSpec));
};
exports.default = swaggerDocs;
