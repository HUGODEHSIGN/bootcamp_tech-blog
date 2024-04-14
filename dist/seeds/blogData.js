"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../models/index");
const blogData = [
    {
        title: "I love HTML!",
        content: "HTML is the best language in the world!",
        author_id: 1,
    },
    {
        title: "I love CSS!",
        content: "CSS is the best language in the world!",
        author_id: 2,
    },
    {
        title: "I love JavaScript!",
        content: "JavaScript is the best language in the world!",
        author_id: 3,
    },
    {
        title: "I love TypeScript!",
        content: "TypeScript is the best language in the world!",
        author_id: 4,
    },
];
const seedBlogs = () => index_1.Blog.bulkCreate(blogData);
exports.default = seedBlogs;
