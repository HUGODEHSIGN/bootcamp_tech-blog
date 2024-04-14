import express from "express";
import { User } from "../../models";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const dbUserData = await User.findOne({
      where: {
        username: req.body.username,
      },
    });

    if (!dbUserData) {
      res.status(400).json({ message: "Incorrect email or password. Please try again!" });
      return;
    }

    const validPassword = await dbUserData.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json({ message: "Incorrect email or password. Please try again!" });
      return;
    }

    req.session.save(() => {
      (req.session as any).loggedIn = true;
      (req.session as any).userId = dbUserData.id;

      res.status(200).json({ user: dbUserData, message: "You are now logged in!" });
    });
  } catch (err) {
    console.error(err);
  }
});

export default router;
