"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const citaconfirmacion_1 = require("../../controllers/cita/citaconfirmacion");
const router = (0, express_1.Router)();
//READ
router.get('/', citaconfirmacion_1.getConfirmacion);
exports.default = router;
