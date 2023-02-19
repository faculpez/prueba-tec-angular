import { Model, DataTypes } from 'sequelize';
import sequelize from '../database/database';

class Client extends Model {}
Client.init({
    // columnas de la tabla
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password:{
      type:DataTypes.STRING,
      allowNull:false
    }
  }, { sequelize, modelName: 'client', timestamps: false })

export default Client;
