"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAlumno = exports.updateAlumno = exports.getAlumno = exports.getAlumnos = exports.postAlumno = void 0;
//CREATE
const postAlumno = (req, res) => {
    const { body } = req;
    res.json({
        msg: "post Alumno",
        body
    });
};
exports.postAlumno = postAlumno;
//READ
const getAlumnos = (req, res) => {
    res.json({
        msg: 'get Alumnos'
    });
};
exports.getAlumnos = getAlumnos;
const getAlumno = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: 'get Alumno',
        id
    });
};
exports.getAlumno = getAlumno;
//UPDATE
const updateAlumno = (req, res) => {
    const { body } = req;
    const { id } = req.params;
    res.json({
        msg: "update Alumno",
        id,
        body
    });
};
exports.updateAlumno = updateAlumno;
//DELETE
const deleteAlumno = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: "delete Alumno",
        id
    });
};
exports.deleteAlumno = deleteAlumno;
