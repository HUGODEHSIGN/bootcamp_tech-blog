import express from "express";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    res.render("homepage", {
      id: "hi",
    });
  } catch (err) {
    console.error(err);
  }
});

export default router;
