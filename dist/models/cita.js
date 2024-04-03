"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cita = void 0;
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
exports.Cita = connection_1.default.define('cita', {
    cita_id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    alumno_id: {
        type: sequelize_1.DataTypes.INTEGER
    },
    cita_fecha: {
        type: sequelize_1.DataTypes.DATEONLY
    },
    cita_hora: {
        type: sequelize_1.DataTypes.TIME
    },
    cita_descripcion: {
        type: sequelize_1.DataTypes.STRING
    },
    citaModalidad_id: {
        type: sequelize_1.DataTypes.INTEGER
    },
    citaTipo_id: {
        type: sequelize_1.DataTypes.INTEGER
    },
    citaConfirmacion_id: {
        type: sequelize_1.DataTypes.INTEGER
    }
}, {
    tableName: 'cita',
    createdAt: false,
    updatedAt: false
});
