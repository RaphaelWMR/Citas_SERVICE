"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b, _c, _d, _e, _f;
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const db = (_a = process.env.DB_NAME) !== null && _a !== void 0 ? _a : 'fisibienestar';
const user = (_b = process.env.DB_USER) !== null && _b !== void 0 ? _b : 'root';
const password = (_c = process.env.DB_PASSWORD) !== null && _c !== void 0 ? _c : '';
const host = (_d = process.env.DB_HOST) !== null && _d !== void 0 ? _d : '';
const port = (_f = parseInt((_e = process.env.DB_PORT) !== null && _e !== void 0 ? _e : '0')) !== null && _f !== void 0 ? _f : 0;
console.log(db, user, password, host);
const sequelize = new sequelize_1.Sequelize(db, user, password, {
    host: host,
    port: port,
    dialect: 'mysql',
});
exports.default = sequelize;
