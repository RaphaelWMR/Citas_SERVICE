import { Sequelize } from "sequelize";
import dotenv from 'dotenv';
dotenv.config();
const db = process.env.DB_NAME ?? 'fisibienestar';
const user = process.env.DB_USER ?? 'root';
const password = process.env.DB_PASSWORD ?? '';
const host = process.env.DB_HOST ?? '';
const port = parseInt(process.env.DB_PORT ?? '0') ?? 0;
const sequelize = new Sequelize(db, user, password, {
    host: host,
    port: port,
    dialect: 'mysql',
});

export default sequelize;