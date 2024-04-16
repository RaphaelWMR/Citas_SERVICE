"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Eap = void 0;
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
exports.Eap = connection_1.default.define('eap', {
    eap_id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    eap_nombre: {
        type: sequelize_1.DataTypes.STRING,
    }
}, {
    createdAt: false,
    updatedAt: false,
    tableName: 'eap'
});
