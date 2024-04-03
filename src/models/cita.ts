import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Cita = db.define('cita', {
    cita_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    alumno_id: {
        type: DataTypes.INTEGER
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

export default Cita;