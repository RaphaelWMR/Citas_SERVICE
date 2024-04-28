import { Sequelize } from "sequelize";
import dotenv from 'dotenv';
dotenv.config();
const db = process.env.DB_NAME ?? 'fisibienestar';
const user = process.env.DB_USER ?? 'root';
const password = process.env.DB_PASSWORD ?? '';
const sequelize = new Sequelize(db, user, password, {
    host: process.env.DB_HOST,
    dialect: 'mysql',
});

export default sequelize;