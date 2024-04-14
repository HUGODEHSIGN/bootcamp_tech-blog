import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  const isLoggedIn = (req.session as any).loggedIn;
  res.render("dashboard", { isLoggedIn });
});

export default router;
