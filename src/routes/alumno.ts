import { Router } from 'express';
import { deleteAlumno, getAlumno, getAlumnos, postAlumno, updateAlumno } from '../controllers/alumno';

const router = Router();

//CREATE
router.post('/', postAlumno);
//READ
router.get('/', getAlumnos);
router.get('/:id', getAlumno);
//UPDATE
router.put('/:id', updateAlumno);
//DELETE
router.delete('/:id', deleteAlumno);


export default router;