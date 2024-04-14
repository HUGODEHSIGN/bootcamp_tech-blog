import express from "express";
import { Blog } from "../../models";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    console.log({ ...req.body, author_id: (req.session as any).userId });
    const dbBlogData = await Blog.create({ ...req.body, author_id: (req.session as any).userId });

    res.status(200).json(dbBlogData);
  } catch (err) {
    console.error(err);
  }
});

export default router;
