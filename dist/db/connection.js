"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const db = (_a = process.env.DB_NAME) !== null && _a !== void 0 ? _a : 'fisibienestar';
const user = (_b = process.env.DB_USER) !== null && _b !== void 0 ? _b : 'root';
const password = (_c = process.env.DB_PASSWORD) !== null && _c !== void 0 ? _c : '';
const sequelize = new sequelize_1.Sequelize(db, user, password, {
    host: process.env.DB_HOST,
    dialect: 'mysql',
});
exports.default = sequelize;
