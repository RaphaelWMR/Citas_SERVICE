"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const alumno_1 = require("../../controllers/alumno/alumno");
const router = (0, express_1.Router)();
//AGREGACION
router.get('/count', alumno_1.getAlumnoCount);
router.get('/countObs', alumno_1.countAlumnosObservados);
router.get('/percObs', alumno_1.getPorcentajeObservados);
//CREATE
router.post('/', alumno_1.postAlumno);
//READ
router.get('/', alumno_1.getAlumnos);
router.get('/:id', alumno_1.getAlumno);
router.get('/email/:email', alumno_1.getAlumnoByEmail);
//UPDATE
router.put('/:id', alumno_1.updateAlumno);
//DELETE
router.delete('/:id', alumno_1.deleteAlumno);
exports.default = router;
