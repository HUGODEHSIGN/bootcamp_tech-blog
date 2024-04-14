import { User } from "../models/index";

const userData = [
  {
    username: "qwer",
    password: "qwertyuiop",
  },
  {
    username: "asdf",
    password: "asdfghjkl",
  },
  {
    username: "zxcv",
    password: "zxcvbnm",
  },
  {
    username: "uiop",
    password: "uioperytqw",
  },
];

const seedUser = () => User.bulkCreate(userData);
export default seedUser;
