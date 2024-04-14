import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  const isLoggedIn = (req.session as any).loggedIn;
  res.render("signup", { isLoggedIn });
});

export default router;
