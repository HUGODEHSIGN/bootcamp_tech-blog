import sessionSequelize from "connect-session-sequelize";
import dotenv from "dotenv";
import express, { Express } from "express";
import { engine } from "express-handlebars";
import session from "express-session";
import path from "path";
import sequelize from "./config/connection";
import router from "./controllers";

const SequelizeStore = sessionSequelize(session.Store);

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3001;

const sess = {
  secret: "Super secret secret",
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

app.engine("handlebars", engine());
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../public")));

app.use("/", router);

sequelize.sync({ force: false }).then(() => {
  app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
  });
});
