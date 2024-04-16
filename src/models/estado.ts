import { DataTypes } from 'sequelize';
import db from '../db/connection';

export const Estado = db.define('estado',
    {
        estado_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        estado_nombre: {
            type: DataTypes.STRING,
        }
    },
    {
        createdAt: false,
        updatedAt: false,
        tableName: 'estado'
    }
);