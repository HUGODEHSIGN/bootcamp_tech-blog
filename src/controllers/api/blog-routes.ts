import express from "express";
import { Blog } from "../../models";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const dbBlogData = await Blog.create({ ...req.body, author_id: (req.session as any).userId });

    res.status(200).json(dbBlogData);
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
  }
});

export default router;
