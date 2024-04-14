"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const blog_routes_1 = __importDefault(require("./blog-routes"));
const comment_routes_1 = __importDefault(require("./comment-routes"));
const login_routes_1 = __importDefault(require("./login-routes"));
const logout_routes_1 = __importDefault(require("./logout-routes"));
const signup_routes_1 = __importDefault(require("./signup-routes"));
const router = express_1.default.Router();
// user routes
router.use("/signup", signup_routes_1.default);
router.use("/login", login_routes_1.default);
router.use("/logout", logout_routes_1.default);
// content routes
router.use("/blog", blog_routes_1.default);
router.use("/comment", comment_routes_1.default);
exports.default = router;
