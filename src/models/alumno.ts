import { DataTypes } from 'sequelize';
import db from '../db/connection';

export const Alumno = db.define('alumno',
    {
        alumno_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        alumno_primerApellido: {
            type: DataTypes.STRING,
            field: 'alumno_primerApellido'
        },
        alumno_segundoApellido: {
            type: DataTypes.STRING,
            field: 'alumno_segundoApellido'
        },
        alumno_nombres: {
            type: DataTypes.STRING,
            field: 'alumno_nombres'
        }
        ,
        alumno_dni: {
            type: DataTypes.STRING,
            field: 'alumno_dni'
        }
        ,
        alumno_codigo: {
            type: DataTypes.STRING,
            field: 'alumno_codigo'

        }
        ,
        alumno_telefono: {
            type: DataTypes.STRING,
            field: 'alumno_telefono'
        }
        ,
        alumno_correoElectronico: {
            type: DataTypes.STRING,
            field: 'alumno_correoElectronico'
        }
        ,
        estado_id: {
            type: DataTypes.INTEGER,
            field: 'estado_id'
        }
        ,
        alumno_fechaNacimiento: {
            type: DataTypes.DATE,
            field: 'alumno_fechaNacimiento'
        }
        ,
        eap_id: {
            type: DataTypes.INTEGER,
            field: 'eap_id'
        }
    },
    {

        createdAt: false,
        updatedAt: false,
        tableName: 'alumno'
    }
);
