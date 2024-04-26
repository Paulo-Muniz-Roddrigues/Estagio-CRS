import { DataTypes } from 'sequelize';
import { sequelize } from '../config';

const Diagnostico = sequelize.define(
  'diagnosticos',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: false,
      primaryKey: true,
      unique: true,
    },
    condicaoMedica: {
      field: 'condicao_medica',
      name: 'condicaoMedica',
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    data: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  },
);

export default Diagnostico;