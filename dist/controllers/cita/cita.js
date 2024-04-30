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
exports.getPorcentajeCitasConfirmadas = exports.getCitasConfirmadasCount = exports.getTotalCitas = exports.getCitasCount = exports.deleteCita = exports.updateCita = exports.getCita = exports.getCitasByAlumno = exports.getCitas = exports.postCita = void 0;
const cita_1 = require("../../models/cita");
const alumno_1 = require("../../models/alumno");
const citaconfirmacion_1 = require("../../models/citaconfirmacion");
const citamodalidad_1 = require("../../models/citamodalidad");
const citatipo_1 = require("../../models/citatipo");
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
    try {
        const listCitas = yield cita_1.Cita.findAll({
            include: [
                { model: alumno_1.Alumno, as: 'alumno' },
                { model: citaconfirmacion_1.CitaConfirmacion, as: 'citaconfirmacion' },
                { model: citamodalidad_1.CitaModalidad, as: 'citamodalidad' },
                { model: citatipo_1.CitaTipo, as: 'citatipo' },
            ]
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
const getCitasByAlumno = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params; // ID del alumno
    try {
        // Buscar el alumno por su ID
        const alumno = yield alumno_1.Alumno.findByPk(id);
        if (!alumno) {
            return res.status(404).json({ msg: `No se encontró ningún alumno con el ID ${id}` });
        }
        // Obtener todas las citas asociadas al alumno utilizando la relación
        const listCitas = yield cita_1.Cita.findAll({
            where: { alumno_id: id }, // Filtrar por ID de alumno
            include: [
                { model: alumno_1.Alumno, as: 'alumno' },
                { model: citaconfirmacion_1.CitaConfirmacion, as: 'citaconfirmacion' },
                { model: citamodalidad_1.CitaModalidad, as: 'citamodalidad' },
                { model: citatipo_1.CitaTipo, as: 'citatipo' },
            ]
        });
        // Si no se encontraron citas para el alumno, devolver un array vacío
        if (!listCitas || listCitas.length === 0) {
            return res.json([]);
        }
        // Mapear las citas para formatear el JSON de salida
        const formattedCitas = listCitas.map((cita) => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
            return {
                cita_id: cita.cita_id,
                alumno_id: cita.alumno_id,
                cita_fecha: cita.cita_fecha,
                cita_hora: cita.cita_hora,
                cita_descripcion: cita.cita_descripcion,
                citaModalidad_id: cita.citaModalidad_id,
                citaTipo_id: cita.citaTipo_id,
                citaConfirmacion_id: cita.citaConfirmacion_id,
                alumno: {
                    // Propiedades del alumno asociado
                    alumno_id: (_a = cita.alumno) === null || _a === void 0 ? void 0 : _a.alumno_id,
                    alumno_primerApellido: (_b = cita.alumno) === null || _b === void 0 ? void 0 : _b.alumno_primerApellido,
                    alumno_segundoApellido: (_c = cita.alumno) === null || _c === void 0 ? void 0 : _c.alumno_segundoApellido,
                    alumno_nombres: (_d = cita.alumno) === null || _d === void 0 ? void 0 : _d.alumno_nombres,
                    alumno_dni: (_e = cita.alumno) === null || _e === void 0 ? void 0 : _e.alumno_dni,
                    alumno_codigo: (_f = cita.alumno) === null || _f === void 0 ? void 0 : _f.alumno_codigo,
                    alumno_telefono: (_g = cita.alumno) === null || _g === void 0 ? void 0 : _g.alumno_telefono,
                    alumno_correoElectronico: (_h = cita.alumno) === null || _h === void 0 ? void 0 : _h.alumno_correoElectronico,
                    estado_id: (_j = cita.alumno) === null || _j === void 0 ? void 0 : _j.estado_id,
                    alumno_fechaNacimiento: (_k = cita.alumno) === null || _k === void 0 ? void 0 : _k.alumno_fechaNacimiento,
                    eap_id: (_l = cita.alumno) === null || _l === void 0 ? void 0 : _l.eap_id
                },
                citamodalidad: {
                    // Propiedades de la modalidad asociada
                    citaModalidad_id: (_m = cita.citamodalidad) === null || _m === void 0 ? void 0 : _m.citaModalidad_id,
                    citaModalidad_nombre: (_o = cita.citamodalidad) === null || _o === void 0 ? void 0 : _o.citaModalidad_nombre
                },
                citatipo: {
                    // Propiedades del tipo de cita asociado
                    citaTipo_id: (_p = cita.citatipo) === null || _p === void 0 ? void 0 : _p.citaTipo_id,
                    CitaTipo_nombre: (_q = cita.citatipo) === null || _q === void 0 ? void 0 : _q.CitaTipo_nombre
                },
                citaconfirmacion: cita.citaconfirmacion // Mantener la confirmación de la cita
            };
        });
        res.json(formattedCitas);
    }
    catch (error) {
        console.error("Error al obtener citas por alumno:", error);
        res.status(500).json({ msg: "Ocurrió un error al obtener las citas por alumno" });
    }
});
exports.getCitasByAlumno = getCitasByAlumno;
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
        yield cita.destroy();
        res.json({
            msg: `La cita fue eliminada con exito`
        });
    }
});
exports.deleteCita = deleteCita;
//Funciones de agregacion
const getCitasCount = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const ctasCount = yield cita_1.Cita.count();
    console.log("gcc: ", ctasCount);
    res.json({
        ctasCount
    });
    return ctasCount;
});
exports.getCitasCount = getCitasCount;
function getTotalCitas() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const count = yield cita_1.Cita.count(); // Use the count() method
            return count; // Return the count directly
        }
        catch (error) {
            console.error("Error while fetching cita count:", error);
            // Handle errors appropriately (e.g., throw a specific error)
            throw new Error("Failed to retrieve cita count");
        }
    });
}
exports.getTotalCitas = getTotalCitas;
;
function getCitasConfirmadasCount() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const count = yield cita_1.Cita.count({
                where: {
                    citaConfirmacion_id: 1,
                },
            }); // Use the count() method
            return count; // Return the count directly
        }
        catch (error) {
            console.error("Error while fetching cita count:", error);
            // Handle errors appropriately (e.g., throw a specific error)
            throw new Error("Failed to retrieve cita count");
        }
    });
}
exports.getCitasConfirmadasCount = getCitasConfirmadasCount;
;
// Function to calculate and return the percentage of confirmed appointments
const getPorcentajeCitasConfirmadas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const totalCitas = getTotalCitas();
        const confirmedCitas = yield getCitasConfirmadasCount(); // Reuse existing function
        console.log("Total citas: ", totalCitas);
        console.log("Total citas conf: ", confirmedCitas);
        if ((yield totalCitas) === 0) {
            res.json({ porcentaje: 0 }); // Handle division by zero
        }
        else {
            const porcentaje = Math.round((confirmedCitas / (yield totalCitas)) * 100);
            res.json({ porcentaje });
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Error calculating appointment confirmation percentage" });
    }
});
exports.getPorcentajeCitasConfirmadas = getPorcentajeCitasConfirmadas;
