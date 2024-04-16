import express, { Application, Request, Response } from 'express';
import routesAlumno from '../routes/alumno';
import routesCitas from '../routes/cita'
import db from '../db/connection';
import cors from 'cors';
import { Alumno } from './alumno';
import { Cita } from './cita';

class Server {
    private app: Application;
    private port: string;

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '3001';
        this.listen();
        this.midlewares();
        this.routes();
        this.dbConnect();
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`[FisiBienestar] >>>>>>>>>>>>>>>>>>>> Server running on port ${this.port}`);
        })
    }

    routes() {
        this.app.use('/api/alumnos', routesAlumno);
        this.app.use('/api/citas', routesCitas);
    }
    midlewares() {
        this.app.use(express.json());
        // Cors
        this.app.use(cors());
    }

    async dbConnect() {
        try {
            await db.authenticate();
            await Alumno.sync();
            await Cita.sync();
            console.log('[FisiBienestar] >>>>>>>>>>>>>>>>>>>> Successful Database Connection');
        } catch (error) {
            console.log('[FisiBienestar] >>>>>>>>>>>>>>>>>>>> Failed Database Connection');
            //console.log(error);
        }
    }
}
export default Server; 