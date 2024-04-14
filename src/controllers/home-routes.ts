import express from "express";
import { Blog, User } from "../models";

const router = express.Router();

router.get("/", async (req, res) => {
  const isLoggedIn = (req.session as any).loggedIn;
  try {
    const dbBlogData = await Blog.findAll({
      include: [{ model: User }],
    });
    const blogs = dbBlogData.map((blog) => blog.get({ plain: true }));
    console.log(blogs);
    res.render("homepage", {
      blogs,
      isLoggedIn,
    });
  } catch (err) {
    console.error(err);
  }
});

export default router;
