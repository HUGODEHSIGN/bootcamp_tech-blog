import express from "express";
import { Blog, User } from "../models";

const router = express.Router();

router.get("/:id", async (req, res) => {
  try {
    const dbBlogData = await Blog.findByPk(req.params.id, {
      include: [{ model: User }],
    });
    if (dbBlogData) {
      const blog = dbBlogData.get({ plain: true });
      console.log(blog);
      res.status(200).render("blog", { ...blog, isBlogPage: true });
    } else {
      res.status(404).json("blog not found");
    }
  } catch (err) {
    console.error(err);
  }
});

export default router;
