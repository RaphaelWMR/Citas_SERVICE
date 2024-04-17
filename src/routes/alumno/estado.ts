import { Router } from 'express';
import { getEstado } from '../../controllers/alumno/estado';

const router = Router();

//READ
router.get('/', getEstado);


export default router;