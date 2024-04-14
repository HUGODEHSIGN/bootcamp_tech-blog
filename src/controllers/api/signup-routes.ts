import express from "express";
import { User } from "../../models/index";

const router = express.Router();

// for testing data
router.get("/", async (req, res) => {
  try {
    const dbUserData = await User.findAll();
    res.status(200).json(dbUserData);
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const dbUserData = await User.create({
      username: req.body.username,
      password: req.body.password,
    });

    req.session.save(() => {
      (req.session as any).loggedIn = true;
      (req.session as any).userId = dbUserData.id;

      res.status(200).json(dbUserData);
    });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
    res.status(500).json(err);
  }
});

export default router;
