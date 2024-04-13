import express from "express";
const router = express.Router();

router.post("/", (req, res) => {
  res.json("this is the login api route");
});

export default router;
