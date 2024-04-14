import sequelize from "../config/connection";
import seedBlogs from "./blogData";
import seedComments from "./commentData";
import seedUser from "./userData";

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUser();
  await seedBlogs();
  await seedComments();

  process.exit(0);
};

seedAll();
