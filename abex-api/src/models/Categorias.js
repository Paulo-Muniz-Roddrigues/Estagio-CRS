import { DataTypes } from 'sequelize';
import { sequelize } from '../config/config';

const Categoria = sequelize.define(
  'categoria',
  {
    id: {
      field: 'id_categ',
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    nomeCategoria: {
      field: 'nome_categoria',
      type: DataTypes.STRING(100),
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
