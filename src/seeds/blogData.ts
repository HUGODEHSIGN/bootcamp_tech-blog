import { Blog } from "../models/index";

const blogData = [
  {
    title: "I love HTML!",
    content: "HTML is the best language in the world!",
    author: 1,
  },
  {
    title: "I love CSS!",
    content: "CSS is the best language in the world!",
    author: 2,
  },
  {
    title: "I love JavaScript!",
    content: "JavaScript is the best language in the world!",
    author: 3,
  },
  {
    title: "I love TypeScript!",
    content: "TypeScript is the best language in the world!",
    author: 4,
  },
];

const seedBlogs = () => Blog.bulkCreate(blogData);
export default seedBlogs;
