"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const alumno_1 = require("../controllers/alumno");
const router = (0, express_1.Router)();
//CREATE
router.post('/', alumno_1.postAlumno);
//READ
router.get('/', alumno_1.getAlumnos);
router.get('/:id', alumno_1.getAlumno);
//DELETE
router.delete('/:id', alumno_1.deleteAlumno);
//UPDATE
router.put('/:id', alumno_1.updateAlumno);
exports.default = router;
