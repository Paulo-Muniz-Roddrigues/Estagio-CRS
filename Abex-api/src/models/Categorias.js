import { DataTypes } from 'sequelize';
import { sequelize } from '../config/config';

const Categoria = sequelize.define(
  'categoria',
  {
    id: {
      field: 'id_categoria',
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nomeCategoria: {
      field: 'nome_categoria',
      type: DataTypes.STRING(100),
    },
  },

  {
    freezeTableName: true,
    timestamps: false,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
);

export default Categoria;
