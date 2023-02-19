import { Model, DataTypes } from 'sequelize';
import sequelize from '../database/database';
import Phone from './phone';

class Fix extends Model {}
Fix.init({
    // columnas de la tabla
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, { sequelize, modelName: 'fix', timestamps: true })
  Phone.hasMany(Fix); // Un usuario puede tener muchos teléfonos
  Fix.belongsTo(Phone); // Cada teléfono pertenece a un usuario
export default Fix;
