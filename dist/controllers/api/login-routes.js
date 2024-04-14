"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const models_1 = require("../../models");
const router = express_1.default.Router();
router.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const dbUserData = yield models_1.User.findOne({
            where: {
                username: req.body.username,
            },
        });
        if (!dbUserData) {
            res.status(400).json({ message: "Incorrect email or password. Please try again!" });
            return;
        }
        const validPassword = yield dbUserData.checkPassword(req.body.password);
        if (!validPassword) {
            res.status(400).json({ message: "Incorrect email or password. Please try again!" });
            return;
        }
        req.session.save(() => {
            req.session.loggedIn = true;
            req.session.userId = dbUserData.id;
            res.status(200).json({ user: dbUserData, message: "You are now logged in!" });
        });
    }
    catch (err) {
        // eslint-disable-next-line no-console
        console.error(err);
    }
}));
exports.default = router;
