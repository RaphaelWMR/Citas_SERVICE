"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Alumno = void 0;
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
exports.Alumno = connection_1.default.define('alumno', {
    alumno_id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    alumno_primerApellido: {
        type: sequelize_1.DataTypes.STRING,
    },
    alumno_segundoApellido: {
        type: sequelize_1.DataTypes.STRING,
    },
    alumno_nombres: {
        type: sequelize_1.DataTypes.STRING,
    },
    alumno_dni: {
        type: sequelize_1.DataTypes.STRING,
    },
    alumno_codigo: {
        type: sequelize_1.DataTypes.STRING,
    },
    alumno_telefono: {
        type: sequelize_1.DataTypes.STRING,
    },
    alumno_correoElectronico: {
        type: sequelize_1.DataTypes.STRING,
    },
    estado_id: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    alumno_fechaNacimiento: {
        type: sequelize_1.DataTypes.DATE,
    },
    eap_id: {
        type: sequelize_1.DataTypes.INTEGER,
    }
}, {
    createdAt: false,
    updatedAt: false,
    tableName: 'alumno'
});
