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
const bcrypt_1 = __importDefault(require("bcrypt"));
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../config/connection"));
class User extends sequelize_1.Model {
    checkPassword(loginPw) {
        return bcrypt_1.default.compareSync(loginPw, this.password);
    }
}
User.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    username: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [6, 126],
        },
    },
}, {
    hooks: {
        beforeCreate(newUserData) {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    // eslint-disable-next-line no-param-reassign
                    newUserData.password = yield bcrypt_1.default.hash(newUserData.password, 10);
                }
                catch (err) {
                    // eslint-disable-next-line no-console
                    console.error(err);
                }
            });
        },
    },
    sequelize: connection_1.default,
    timestamps: false,
    freezeTableName: true,
    underscored: false,
    modelName: "user",
});
exports.default = User;
