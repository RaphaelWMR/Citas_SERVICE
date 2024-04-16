import { DataTypes } from 'sequelize';
import db from '../db/connection';
import { Alumno } from './alumno';

export const Cita = db.define('cita', {
    cita_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    alumno_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Alumno,
            key: 'alumno_id'
        }
    },
    cita_fecha: {
        type: DataTypes.DATEONLY
    },
    cita_hora: {
        type: DataTypes.TIME
    },
    cita_descripcion: {
        type: DataTypes.STRING
    },
    citaModalidad_id: {
        type: DataTypes.INTEGER
    },
    citaTipo_id: {
        type: DataTypes.INTEGER
    },
    citaConfirmacion_id: {
        type: DataTypes.INTEGER
    }
}, {
    tableName: 'cita',
    createdAt: false,
    updatedAt: false
});

Cita.belongsTo(Alumno, { foreignKey: 'alumno_id', as: 'alumno' })