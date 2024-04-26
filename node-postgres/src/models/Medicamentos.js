import { DataTypes } from 'sequelize';
import { sequelize } from '../config';

const Medicamento = sequelize.define(
  'medicamentos',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: false,
      primaryKey: true,
      unique: true,
    },
    nome: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  },
);

export default Medicamento;