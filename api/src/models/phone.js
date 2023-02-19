import { Model, DataTypes } from 'sequelize';
import sequelize from '../database/database';
import Client from './client';

class Phone extends Model {}
Phone.init({
    // columnas de la tabla
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    brand: {
      type: DataTypes.STRING,
      allowNull: false
    },
    model: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, { sequelize, modelName: 'phone', timestamps: false })
  Client.hasMany(Phone); // Un usuario puede tener muchos teléfonos
  Phone.belongsTo(Client); // Cada teléfono pertenece a un usuario
export default Phone;
