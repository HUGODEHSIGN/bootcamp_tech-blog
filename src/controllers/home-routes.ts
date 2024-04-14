import express from "express";
import { Blog } from "../models";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const dbBlogData = await Blog.findAll();
    const blogs = dbBlogData.map((blog) => blog.get({ plain: true }));
    console.log(blogs);
    res.render("homepage", {
      blogs,
    });
  } catch (err) {
    console.error(err);
  }
});

export default router;
