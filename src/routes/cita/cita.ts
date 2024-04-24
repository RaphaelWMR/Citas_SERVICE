import { Router } from "express";
import {
    deleteCita,
    getCita,
    getCitas,
    getCitasConfirmadasCount,
    getCitasCount,
    getPorcentajeCitasConfirmadas,
    postCita,
    updateCita
} from "../../controllers/cita/cita";

const router = Router();
//AGREGACION
router.get('/count', getCitasCount);
router.get('/porConf', getPorcentajeCitasConfirmadas);
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