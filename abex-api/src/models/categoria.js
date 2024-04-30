import { DataTypes } from 'sequelize';
import { sequelize } from '../config/config';

const Categoria = sequelize.define(
  'categoria',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
  },

  {
    freezeTableName: true,
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
);

export default Categoria;
