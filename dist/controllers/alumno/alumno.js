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
exports.getPorcentajeObservados = exports.getTotaAlumnosObservados = exports.countAlumnosObservados = exports.getTotalAlumnos = exports.getAlumnoCount = exports.deleteAlumno = exports.updateAlumno = exports.getAlumnoByEmail = exports.getAlumno = exports.getAlumnos = exports.postAlumno = void 0;
const alumno_1 = require("../../models/alumno");
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
const getAlumnoByEmail = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email } = req.params;
        const emailunmsm = email + "@unmsm.edu.pe";
        const alumno = yield alumno_1.Alumno.findOne({ where: { alumno_correoElectronico: emailunmsm } });
        if (alumno) {
            res.json(alumno);
        }
        else {
            res.status(404).json({
                msg: `No existe un alumno con el email ${emailunmsm}`
            });
        }
    }
    catch (error) {
        console.error('Error al buscar alumno por email:', error);
        res.status(500).json({
            msg: 'Error al buscar alumno. Por favor, inténtalo de nuevo.'
        });
    }
});
exports.getAlumnoByEmail = getAlumnoByEmail;
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
//Funciones de agregacion
const getAlumnoCount = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const alumnoCount = yield alumno_1.Alumno.count();
    res.json({
        alumnoCount
    });
});
exports.getAlumnoCount = getAlumnoCount;
function getTotalAlumnos() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const count = yield alumno_1.Alumno.count(); // Use the count() method
            return count; // Return the count directly
        }
        catch (error) {
            console.error("Error while fetching alumno count:", error);
            // Handle errors appropriately (e.g., throw a specific error)
            throw new Error("Failed to retrieve alumno count");
        }
    });
}
exports.getTotalAlumnos = getTotalAlumnos;
;
const countAlumnosObservados = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const countObs = yield alumno_1.Alumno.count({
        where: {
            estado_id: 1,
        },
    });
    res.json({
        countObs
    });
});
exports.countAlumnosObservados = countAlumnosObservados;
function getTotaAlumnosObservados() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const count = yield alumno_1.Alumno.count({
                where: {
                    estado_id: 1,
                },
            }); // Use the count() method
            return count; // Return the count directly
        }
        catch (error) {
            console.error("Error while fetching alumbnoobs count:", error);
            // Handle errors appropriately (e.g., throw a specific error)
            throw new Error("Failed to retrieve alumbnoobs count");
        }
    });
}
exports.getTotaAlumnosObservados = getTotaAlumnosObservados;
;
const getPorcentajeObservados = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const totalAlumnos = getTotalAlumnos();
        const alumnosObs = yield getTotaAlumnosObservados();
        console.log("Total totalAlumnos: ", totalAlumnos);
        console.log("Total alumnosObs: ", alumnosObs);
        if ((yield totalAlumnos) === 0) {
            res.json({ porcentaje: 0 }); // Handle division by zero
        }
        else {
            const porcentaje = Math.round((alumnosObs / (yield totalAlumnos)) * 100);
            res.json({ porcentaje });
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Error calculating obs percentage"
        });
    }
});
exports.getPorcentajeObservados = getPorcentajeObservados;
