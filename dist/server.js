"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connect_session_sequelize_1 = __importDefault(require("connect-session-sequelize"));
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const express_handlebars_1 = require("express-handlebars");
const express_session_1 = __importDefault(require("express-session"));
const path_1 = __importDefault(require("path"));
const connection_1 = __importDefault(require("./config/connection"));
const controllers_1 = __importDefault(require("./controllers"));
const helpers_1 = __importDefault(require("./utils/helpers"));
const SequelizeStore = (0, connect_session_sequelize_1.default)(express_session_1.default.Store);
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 3001;
const sess = {
    secret: "Super secret secret",
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: connection_1.default,
    }),
};
app.use((0, express_session_1.default)(sess));
const hbs = (0, express_handlebars_1.create)({ helpers: helpers_1.default });
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.static(path_1.default.join(__dirname, "../public")));
app.use("/", controllers_1.default);
connection_1.default.sync({ force: false }).then(() => {
    app.listen(port, () => {
        console.log(`[server]: Server is running at http://localhost:${port}`);
    });
});
