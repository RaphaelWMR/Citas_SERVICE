import { Router } from 'express';
import { getEAP } from '../../controllers/alumno/eap';

const router = Router();

//READ
router.get('/', getEAP);


export default router;