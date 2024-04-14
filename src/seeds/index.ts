import sequelize from "../config/connection";
import seedBlogs from "./blogData";
import seedUser from "./userData";

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUser();
  await seedBlogs();

  process.exit(0);
};

seedAll();
