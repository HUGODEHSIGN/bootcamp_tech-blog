import express from "express";
const router = express.Router();

router.post("/", (req, res) => {
  res.json("this is the signup api route");
});

export default router;
