import { DataTypes } from 'sequelize';
import { sequelize } from '../config/config';

const Cargo = sequelize.define(
  'cargo',
  {
    id: {
      field: 'id_cargo',
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    profissao: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    admin: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
);

export default Cargo;
