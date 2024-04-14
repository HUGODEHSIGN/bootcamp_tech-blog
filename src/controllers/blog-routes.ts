import express from "express";
import { Blog, Comment, User } from "../models";

const router = express.Router();

router.get("/:id", async (req, res) => {
  try {
    const isLoggedIn = (req.session as any).loggedIn;
    const dbBlogData = await Blog.findByPk(req.params.id, {
      include: [{ model: User }],
    });

    const dbCommentData = await Comment.findAll({
      where: {
        blog_id: req.params.id,
      },
      include: [{ model: User }],
    });
    const comments = dbCommentData.map((comment) => comment.get({ plain: true }));
    if (dbBlogData) {
      const blog = dbBlogData.get({ plain: true });
      console.log(comments);
      res.status(200).render("blog", { ...blog, comments, isBlogPage: true, isLoggedIn });
    } else {
      res.status(404).json("blog not found");
    }
  } catch (err) {
    console.error(err);
  }
});

export default router;
