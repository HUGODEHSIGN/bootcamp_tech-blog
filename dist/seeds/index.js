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
const connection_1 = __importDefault(require("../config/connection"));
const blogData_1 = __importDefault(require("./blogData"));
const commentData_1 = __importDefault(require("./commentData"));
const userData_1 = __importDefault(require("./userData"));
const seedAll = () => __awaiter(void 0, void 0, void 0, function* () {
    yield connection_1.default.sync({ force: true });
    yield (0, userData_1.default)();
    yield (0, blogData_1.default)();
    yield (0, commentData_1.default)();
    process.exit(0);
});
seedAll();
