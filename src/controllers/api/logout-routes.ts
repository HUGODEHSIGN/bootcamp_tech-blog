import express from "express";

const router = express.Router();

router.post("/", (req, res) => {
  if ((req.session as any).loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
  res.json("this is the logout api route");
});

export default router;
