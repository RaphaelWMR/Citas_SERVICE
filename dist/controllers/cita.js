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
exports.deleteCita = exports.updateCita = exports.getCita = exports.getCitas = exports.postCita = void 0;
const cita_1 = require("../models/cita");
const alumno_1 = require("../models/alumno");
// CREATE
const postCita = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        yield cita_1.Cita.create(body);
        res.json({
            msg: `La cita fue agregada con exito`
        });
    }
    catch (error) {
        console.log(error);
        res.json({
            msg: `Ocurrio un error`
        });
    }
});
exports.postCita = postCita;
// READ
const getCitas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const listCitas = yield cita_1.Cita.findAll({
            include: [{ model: alumno_1.Alumno, as: 'alumno' }]
        });
        res.json(listCitas);
    }
    catch (error) {
        console.log(error);
        res.json({
            msg: `Ocurrió un problema`
        });
    }
});
exports.getCitas = getCitas;
const getCita = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const cita = yield cita_1.Cita.findByPk(id);
    if (cita)
        res.json(cita);
    else {
        res.status(404).json({
            msg: `No existe cita con id ${id}`
        });
    }
});
exports.getCita = getCita;
// UPDATE
const updateCita = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { id } = req.params;
    try {
        const cita = yield cita_1.Cita.findByPk(id);
        if (cita) {
            yield cita.update(body);
            res.json({
                msg: `Los datos de la cita fueron actualizados con exito`
            });
        }
        else {
            res.status(404).json({
                msg: {
                    msg: `No existe cita con id ${id}`
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
exports.updateCita = updateCita;
// DELETE
const deleteCita = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const cita = yield cita_1.Cita.findByPk(id);
    if (!cita)
        res.status(404).json({
            msg: `No existe cita con id ${id}`
        });
    else {
        yield cita_1.Cita.destroy();
        res.json({
            msg: `La cita fue eliminada con exito`
        });
    }
});
exports.deleteCita = deleteCita;
