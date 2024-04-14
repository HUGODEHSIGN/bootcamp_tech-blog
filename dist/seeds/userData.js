"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../models/index");
const userData = [
    {
        username: "qwer",
        password: "qwertyuiop",
    },
    {
        username: "asdf",
        password: "asdfghjkl",
    },
    {
        username: "zxcv",
        password: "zxcvbnm",
    },
    {
        username: "uiop",
        password: "uioperytqw",
    },
];
const seedUser = () => index_1.User.bulkCreate(userData);
exports.default = seedUser;
