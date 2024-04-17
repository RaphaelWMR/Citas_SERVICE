"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cita_1 = require("../../controllers/cita/cita");
const router = (0, express_1.Router)();
//CREATE
router.post('/', cita_1.postCita);
//READ
router.get('/', cita_1.getCitas);
router.get('/:id', cita_1.getCita);
//UPDATE
router.put('/:id', cita_1.updateCita);
//DELETE
router.delete('/:id', cita_1.deleteCita);
exports.default = router;
