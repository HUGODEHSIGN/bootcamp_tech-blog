import Blog from "./Blog";
import User from "./User";

User.hasMany(Blog, {
  foreignKey: "author_id",
});

Blog.belongsTo(User, {
  foreignKey: "author_id",
});

export { Blog, User };
