"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const alumno_1 = __importDefault(require("../routes/alumno/alumno"));
const cita_1 = __importDefault(require("../routes/cita/cita"));
const citaconfirmacion_1 = __importDefault(require("../routes/cita/citaconfirmacion"));
const citatipo_1 = __importDefault(require("../routes/cita/citatipo"));
const citamodalidad_1 = __importDefault(require("../routes/cita/citamodalidad"));
const eap_1 = __importDefault(require("../routes/alumno/eap"));
const estado_1 = __importDefault(require("../routes/alumno/estado"));
const auth_1 = __importDefault(require("../routes/auth/auth"));
const connection_1 = __importDefault(require("../db/connection"));
const cors_1 = __importDefault(require("cors"));
const alumno_2 = require("./alumno");
const cita_2 = require("./cita");
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '3000';
        this.listen();
        this.midlewares();
        this.routes();
        this.dbConnect();
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`[FisiBienestar] >>>>>>>>>>>>>>>>>>>> Server running on port ${this.port}`);
        });
    }
    routes() {
        this.app.get('/', (req, res) => {
            res.json({
                msg: 'Citas Service Running'
            });
        });
        this.app.use('/api/alumnos', alumno_1.default);
        this.app.use('/api/eap', eap_1.default);
        this.app.use('/api/estado', estado_1.default);
        this.app.use('/api/citas', cita_1.default);
        this.app.use('/api/citaconfirmacion', citaconfirmacion_1.default);
        this.app.use('/api/citamodalidad', citamodalidad_1.default);
        this.app.use('/api/citatipo', citatipo_1.default);
        this.app.use('/auth', auth_1.default);
    }
    midlewares() {
        this.app.use(express_1.default.json());
        // Configuración de CORS
        const whitelist = ['http://localhost:4200', 'https://raphaelwmr.github.io/']; // Definir los orígenes permitidos
        const corsOptions = {
            origin: (origin, callback) => {
                if (!origin || whitelist.indexOf(origin) !== -1) {
                    callback(null, true);
                }
                else {
                    callback(new Error('Not allowed by CORS'));
                }
            },
            methods: ['GET', 'POST', 'PUT', 'DELETE'],
            allowedHeaders: ['Content-Type', 'Authorization'],
        };
        this.app.use((0, cors_1.default)(corsOptions));
    }
    dbConnect() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield connection_1.default.authenticate();
                yield alumno_2.Alumno.sync();
                yield cita_2.Cita.sync();
                console.log('[FisiBienestar] >>>>>>>>>>>>>>>>>>>> Successful Database Connection');
            }
            catch (error) {
                console.log('[FisiBienestar] >>>>>>>>>>>>>>>>>>>> Failed Database Connection');
                console.log(error);
            }
        });
    }
}
exports.default = Server;
