import { DataTypes } from 'sequelize';
import db from '../db/connection';

export const CitaModalidad = db.define('citamodalidad',
    {
        citaModalidad_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        citaModalidad_nombre: {
            type: DataTypes.STRING,
        }
    },
    {
        createdAt: false,
        updatedAt: false,
        tableName: 'citamodalidad'
    }
);
