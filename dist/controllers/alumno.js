"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAlumno = exports.updateAlumno = exports.getAlumno = exports.getAlumnos = exports.postAlumno = void 0;
const alumno_1 = require("../models/alumno");
//CREATE
const postAlumno = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        yield alumno_1.Alumno.create(body);
        res.json({
            msg: `El alumno fue agregado con exito`
        });
    }
    catch (error) {
        console.log(error);
        res.json({
            msg: `Ocurrió un error`
        });
    }
});
exports.postAlumno = postAlumno;
//READ
const getAlumnos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listAlumnos = yield alumno_1.Alumno.findAll();
    res.json(listAlumnos);
});
exports.getAlumnos = getAlumnos;
const getAlumno = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const alumno = yield alumno_1.Alumno.findByPk(id);
    if (alumno) {
        res.json(alumno);
    }
    else {
        res.status(404).json({
            msg: `No existe un alumno con el id ${id}`
        });
    }
});
exports.getAlumno = getAlumno;
//UPDATE
const updateAlumno = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { id } = req.params;
    try {
        const alumno = yield alumno_1.Alumno.findByPk(id);
        if (alumno) {
            yield alumno.update(body);
            res.json({
                msg: `Los datos del alumno fueron actualizados con exito`
            });
        }
        else {
            res.status(404).json({
                msg: {
                    msg: `No existe un alumno con el id ${id}`
                }
            });
        }
    }
    catch (error) {
        console.log(error);
        res.json({
            msg: `Ocurrió un error`
        });
    }
});
exports.updateAlumno = updateAlumno;
//DELETE
const deleteAlumno = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const alumno = yield alumno_1.Alumno.findByPk(id);
    if (!alumno) {
        res.status(404).json({
            msg: `No existe un alumno con el id ${id}`
        });
    }
    else {
        yield alumno.destroy();
        res.json({
            msg: 'El alumno fue eliminado con exito'
        });
    }
});
exports.deleteAlumno = deleteAlumno;
