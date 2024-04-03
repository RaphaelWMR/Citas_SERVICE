import { Sequelize } from "sequelize";

const sequelize = new Sequelize('fisibienestar', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
});

export default sequelize;