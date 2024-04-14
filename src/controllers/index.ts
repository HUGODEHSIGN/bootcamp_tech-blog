import express from "express";
import userRoutes from "./api/index";
import blogRoutes from "./blog-routes";
import dashboardRoutes from "./dashboard-routes";
import homeRoutes from "./home-routes";
import loginRoutes from "./login-routes";
import signupRoutes from "./signup-routes";

const router = express.Router();

// api routes
router.use("/api", userRoutes);

// page routes
router.use("/signup", signupRoutes);
router.use("/login", loginRoutes);
router.use("/dashboard", dashboardRoutes);
router.use("/blog", blogRoutes);
router.use("/", homeRoutes);

export default router;
