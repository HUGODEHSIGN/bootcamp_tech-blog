"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_1 = __importDefault(require("./api/index"));
const blog_routes_1 = __importDefault(require("./blog-routes"));
const dashboard_routes_1 = __importDefault(require("./dashboard-routes"));
const home_routes_1 = __importDefault(require("./home-routes"));
const login_routes_1 = __importDefault(require("./login-routes"));
const signup_routes_1 = __importDefault(require("./signup-routes"));
const router = express_1.default.Router();
// api routes
router.use("/api", index_1.default);
// page routes
router.use("/signup", signup_routes_1.default);
router.use("/login", login_routes_1.default);
router.use("/dashboard", dashboard_routes_1.default);
router.use("/blog", blog_routes_1.default);
router.use("/", home_routes_1.default);
exports.default = router;
