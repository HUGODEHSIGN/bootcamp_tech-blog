import express from "express";
import blogRoutes from "./blog-routes";
import commentRoutes from "./comment-routes";
import loginRoutes from "./login-routes";
import logoutRoutes from "./logout-routes";
import signupRoutes from "./signup-routes";

const router = express.Router();

// user routes
router.use("/signup", signupRoutes);
router.use("/login", loginRoutes);
router.use("/logout", logoutRoutes);

// content routes
router.use("/blog", blogRoutes);
router.use("/comment", commentRoutes);

export default router;
