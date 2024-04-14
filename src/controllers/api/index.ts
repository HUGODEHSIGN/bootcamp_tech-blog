import express from "express";
import loginRoutes from "./login-routes";
import logoutRoutes from "./logout-routes";
import signupRoutes from "./signup-routes";

const router = express.Router();

router.use("/signup", signupRoutes);
router.use("/login", loginRoutes);
router.use("/logout", logoutRoutes);

export default router;
