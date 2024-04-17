"use strict";
const express_1 = require("express");
const citamodalidad_1 = require("../../controllers/cita/citamodalidad");
const router = (0, express_1.Router)();
// READ
router.get('/', citamodalidad_1.getModalidad);
module.exports = router;
