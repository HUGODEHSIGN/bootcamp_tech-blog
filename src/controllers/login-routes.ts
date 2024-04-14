import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  const isLoggedIn = (req.session as any).loggedIn;
  res.render("login", { isLoggedIn });
});

export default router;
