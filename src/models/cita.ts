import { DataTypes } from 'sequelize';
import db from '../db/connection';
import { Alumno } from './alumno';
import { CitaModalidad } from './citamodalidad';
import { CitaTipo } from './citatipo';
import { CitaConfirmacion } from './citaconfirmacion';

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
        type: DataTypes.INTEGER,
        references: {
            model: CitaModalidad,
            key: 'citaModalidad_id'
        }
    },
    citaTipo_id: {
        type: DataTypes.INTEGER,
        references: {
            model: CitaTipo,
            key: 'citaTipo_id'
        }
    },
    citaConfirmacion_id: {
        type: DataTypes.INTEGER,
        references: {
            model: CitaConfirmacion,
            key: 'citaConfirmacion_id'
        }
    }
}, {
    tableName: 'cita',
    createdAt: false,
    updatedAt: false
});

Cita.belongsTo(Alumno, { foreignKey: 'alumno_id', as: 'alumno' });
Cita.belongsTo(CitaConfirmacion, { foreignKey: 'citaConfirmacion_id', as: 'citaconfirmacion' });
Cita.belongsTo(CitaModalidad, { foreignKey: 'citaModalidad_id', as: 'citamodalidad' });
Cita.belongsTo(CitaTipo, { foreignKey: 'citaTipo_id', as: 'citatipo' });
