"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CitaTipo = void 0;
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
exports.CitaTipo = connection_1.default.define('citatipo', {
    citaTipo_id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    CitaTipo_nombre: {
        type: sequelize_1.DataTypes.STRING,
    }
}, {
    createdAt: false,
    updatedAt: false,
    tableName: 'citatipo'
});
