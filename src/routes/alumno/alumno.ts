import { Router } from 'express';
import {
    countAlumnosObservados,
    deleteAlumno,
    getAlumno,
    getAlumnoByEmail,
    getAlumnoCount,
    getAlumnos,
    postAlumno,
    updateAlumno
} from '../../controllers/alumno/alumno';

const router = Router();


//AGREGACION
router.get('/count', getAlumnoCount);
router.get('/countObs', countAlumnosObservados);

//CREATE
router.post('/', postAlumno);
//READ
router.get('/', getAlumnos);
router.get('/:id', getAlumno);
router.get('/email/:email', getAlumnoByEmail);
//UPDATE
router.put('/:id', updateAlumno);
//DELETE
router.delete('/:id', deleteAlumno);

export default router;