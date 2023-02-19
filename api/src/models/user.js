import { Model, DataTypes } from 'sequelize';
import sequelize from '../database/database';

class User extends Model {}
User.init({
    // columnas de la tabla
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password:{
      type:DataTypes.STRING,
      allowNull:false
    }
  }, { sequelize, modelName: 'user', timestamps: false })

export default User;
