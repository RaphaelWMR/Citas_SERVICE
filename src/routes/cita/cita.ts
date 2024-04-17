import { Router } from "express";
import {
    deleteCita,
    getCita,
    getCitas,
    postCita,
    updateCita
} from "../../controllers/cita/cita";

const router = Router();

//CREATE
router.post('/', postCita);
//READ
router.get('/', getCitas);
router.get('/:id', getCita);
//UPDATE
router.put('/:id', updateCita)
//DELETE
router.delete('/:id', deleteCita);

export default router;