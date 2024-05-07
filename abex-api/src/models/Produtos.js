import { DataTypes } from 'sequelize';
import { sequelize } from '../config/config';
import Categoria from './Categorias';

const Produto = sequelize.define(
  'produto',
  {
    id: {
      field: 'id_produto',
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nomeProduto: {
      type: DataTypes.STRING(50),
    },
    preco: {
      type: DataTypes.FLOAT,
    },
    estoque: {
      type: DataTypes.INTEGER,
    },
  },
  {
    freezeTableName: true,
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
);

Produto.belongsTo(Categoria, {
  as: 'categoria',
  onDelete: 'no action',
  onUpdate: 'no action',
  foreignKey: {
    field: 'id_categoria',
    name: 'idCategoria',
  },
});

export default Produto;
