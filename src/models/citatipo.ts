import { DataTypes } from 'sequelize';
import db from '../db/connection';

export const CitaTipo = db.define('citatipo',
    {
        citaTipo_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        CitaTipo_nombre: {
            type: DataTypes.STRING,
        }
    },
    {
        createdAt: false,
        updatedAt: false,
        tableName: 'citatipo'
    }
);