import { Router } from "express";
import { getModalidad } from "../../controllers/cita/citamodalidad";

const router = Router();

// READ
router.get('/', getModalidad);

export = router;
