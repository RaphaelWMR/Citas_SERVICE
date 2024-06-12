import { Router } from "express";
import {
    deleteCita,
    getCita,
    getCitasByAlumno,
    getCitas,
    getCitasConfirmadasCount,
    getCitasCount,
    getPorcentajeCitasConfirmadas,
    postCita,
    updateCita,
    getModalidadCitas,
    getTipoCitasCount
} from "../../controllers/cita/cita";
import { getModalidad } from "../../controllers/cita/citamodalidad";

const router = Router();
//AGREGACION
router.get('/count', getCitasCount);
router.get('/porConf', getPorcentajeCitasConfirmadas);
router.get('/countmodalidad',getModalidadCitas);
router.get('/counttipo',getTipoCitasCount);
//CREATE
router.post('/', postCita);
//READ
router.get('/', getCitas);
router.get('/:id', getCita);
router.get('/alumno/:id', getCitasByAlumno);
//UPDATE
router.put('/:id', updateCita)
//DELETE
router.delete('/:id', deleteCita);

export default router;