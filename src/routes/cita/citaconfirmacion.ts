import { Router } from "express";
import { getConfirmacion } from "../../controllers/cita/citaconfirmacion";

const router = Router();

//READ
router.get('/', getConfirmacion);

export default router;