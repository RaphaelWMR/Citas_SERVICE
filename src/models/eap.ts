import { DataTypes } from 'sequelize';
import db from '../db/connection';

export const Eap = db.define('eap',
    {
        eap_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        eap_nombre: {
            type: DataTypes.STRING,
        }
    },
    {
        createdAt: false,
        updatedAt: false,
        tableName: 'eap'
    }
);