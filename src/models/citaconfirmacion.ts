import { DataTypes } from 'sequelize';
import db from '../db/connection';

export const CitaConfirmacion = db.define('citaconfirmacion',
    {
        citaConfirmacion_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        citaConfirmacion_nombre: {
            type: DataTypes.STRING,
        }
    },
    {
        createdAt: false,
        updatedAt: false,
        tableName: 'citaconfirmacion'
    }
);