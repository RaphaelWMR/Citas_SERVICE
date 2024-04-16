"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cita_1 = require("../controllers/cita");
const router = (0, express_1.Router)();
//CREATE
//READ
router.get('/', cita_1.getCitas);
//DELETE
//UPDATE
exports.default = router;
