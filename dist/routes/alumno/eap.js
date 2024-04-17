"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const eap_1 = require("../../controllers/alumno/eap");
const router = (0, express_1.Router)();
//READ
router.get('/', eap_1.getEAP);
exports.default = router;
