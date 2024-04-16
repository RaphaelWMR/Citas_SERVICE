import { Router } from "express";
import { getCitas } from "../controllers/cita";

const router = Router();

//CREATE

//READ
router.get('/', getCitas);
//DELETE

//UPDATE


export default router;