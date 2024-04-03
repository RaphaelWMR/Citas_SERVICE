import express, { Application, Request, Response } from 'express';
import routesAlumno from '../routes/alumno';
import db from '../db/connection';

class Server {
    private app: express.Application;
    private port: string;

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '3001';
        this.listen();
        this.routes();
        this.dbConnect();
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`[FisiBienestar] >>>>>>>>>>>>>>>>>>>> Server running on port ${this.port}`);
        })
    }

    routes() {
        this.app.get('/', (req: Request, res: Response) => {
            res.json({
                msg: 'API Working'
            })
        })
        this.app.use('/api/alumnos', routesAlumno);
    }

    async dbConnect() {
        try {
            await db.authenticate();
            console.log('[FisiBienestar] >>>>>>>>>>>>>>>>>>>> Successful Database Connection');
        } catch (error) {
            console.log('[FisiBienestar] >>>>>>>>>>>>>>>>>>>> Failed Database Connection');
            //console.log(error);
        }
    }
}
export default Server; 