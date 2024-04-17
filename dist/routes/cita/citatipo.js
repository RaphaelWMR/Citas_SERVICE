"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const citatipo_1 = require("../../controllers/cita/citatipo");
const router = (0, express_1.Router)();
//READ
router.get('/', citatipo_1.getTipo);
exports.default = router;
