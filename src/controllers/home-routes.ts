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
    res.render("homepage", {
      blogs,
      isLoggedIn,
    });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
  }
});

export default router;
