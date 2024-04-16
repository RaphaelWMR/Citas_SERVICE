import { Sequelize } from "sequelize";
import dotenv from 'dotenv';
dotenv.config();

const user = process.env.DB_USER ?? '';
const password = process.env.DB_PASSWORD ?? '';
const sequelize = new Sequelize('fisibienestar', user, password, {
    host: process.env.DB_HOST,
    dialect: 'mysql',
});

export default sequelize;