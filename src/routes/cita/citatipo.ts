import { Router } from "express";
import { getTipo } from "../../controllers/cita/citatipo";

const router = Router();

//READ
router.get('/', getTipo);

export default router;