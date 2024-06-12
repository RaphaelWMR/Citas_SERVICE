"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cita_1 = require("../../controllers/cita/cita");
const router = (0, express_1.Router)();
//AGREGACION
router.get('/count', cita_1.getCitasCount);
router.get('/porConf', cita_1.getPorcentajeCitasConfirmadas);
router.get('/countmodalidad', cita_1.getModalidadCitas);
router.get('/counttipo', cita_1.getTipoCitasCount);
//CREATE
router.post('/', cita_1.postCita);
//READ
router.get('/', cita_1.getCitas);
router.get('/:id', cita_1.getCita);
router.get('/alumno/:id', cita_1.getCitasByAlumno);
//UPDATE
router.put('/:id', cita_1.updateCita);
//DELETE
router.delete('/:id', cita_1.deleteCita);
exports.default = router;
