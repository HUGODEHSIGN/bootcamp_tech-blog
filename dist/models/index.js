"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = exports.Comment = exports.Blog = void 0;
const Blog_1 = __importDefault(require("./Blog"));
exports.Blog = Blog_1.default;
const Comment_1 = __importDefault(require("./Comment"));
exports.Comment = Comment_1.default;
const User_1 = __importDefault(require("./User"));
exports.User = User_1.default;
User_1.default.hasMany(Blog_1.default, {
    foreignKey: "author_id",
});
Blog_1.default.belongsTo(User_1.default, {
    foreignKey: "author_id",
});
User_1.default.hasMany(Comment_1.default, {
    foreignKey: "author_id",
});
Comment_1.default.belongsTo(User_1.default, {
    foreignKey: "author_id",
});
Blog_1.default.hasMany(Comment_1.default, {
    foreignKey: "blog_id",
});
Comment_1.default.belongsTo(Blog_1.default, {
    foreignKey: "blog_id",
});
