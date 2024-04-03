import Server from "./models/server";
import dotenv from 'dotenv';

// Enviroment variables
dotenv.config();

const server = new Server();

//nodemon start
//tsc --watch