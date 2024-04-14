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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const models_1 = require("../models");
const router = express_1.default.Router();
router.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const isLoggedIn = req.session.loggedIn;
        const dbBlogData = yield models_1.Blog.findByPk(req.params.id, {
            include: [{ model: models_1.User }],
        });
        const dbCommentData = yield models_1.Comment.findAll({
            where: {
                blog_id: req.params.id,
            },
            include: [{ model: models_1.User }],
        });
        const comments = dbCommentData.map((comment) => comment.get({ plain: true }));
        if (dbBlogData) {
            const blog = dbBlogData.get({ plain: true });
            res.status(200).render("blog", Object.assign(Object.assign({}, blog), { comments, isBlogPage: true, isLoggedIn }));
        }
        else {
            res.status(404).json("blog not found");
        }
    }
    catch (err) {
        // eslint-disable-next-line no-console
        console.error(err);
    }
}));
exports.default = router;
