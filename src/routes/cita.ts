import { Router } from "express";
import { deleteCita, getCitas, postCita, updateCita } from "../controllers/cita";

const router = Router();

//CREATE
router.post('/', postCita);
//READ
router.get('/', getCitas);
//UPDATE
router.put('/:id', updateCita)
//DELETE
router.delete('/:id', deleteCita);

export default router;