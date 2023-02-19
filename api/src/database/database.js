import { Sequelize } from 'sequelize';
import config from '../config';


const sequelize = new Sequelize( config.uri || 'mysql://prueba:admin@localhost:3306/prueba_tec',{
    dialect: 'mysql'
});

export default sequelize;
