"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../models");
const commentData = [
    {
        content: "I just learned HTML",
        blog_id: 1,
        author_id: 2,
    },
    {
        content: "I just learned CSS",
        blog_id: 2,
        author_id: 3,
    },
    {
        content: "I just learned JavaScript",
        blog_id: 3,
        author_id: 4,
    },
    {
        content: "I just learned TypeScript",
        blog_id: 4,
        author_id: 1,
    },
];
const seedComments = () => models_1.Comment.bulkCreate(commentData);
exports.default = seedComments;
