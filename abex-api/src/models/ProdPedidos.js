import { DataTypes } from 'sequelize';
import { sequelize } from '../config/config';
import Produto from './Produtos';
import Pedido from './Pedidos';

const ProdPedido = sequelize.define(
  'prod_pedido',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    quantidade: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
);

ProdPedido.belongsTo(Produto, {
  as: 'produto',
  onDelete: 'no action',
  onUpdate: 'no action',
  foreignKey: {
    field: 'id_produto',
    name: 'idProduto',
  },
});

ProdPedido.belongsTo(Pedido, {
  as: 'pedido',
  onDelete: 'no action',
  onUpdate: 'no action',
  foreignKey: {
    field: 'id_pedido',
    name: 'idPedido',
  },
});

export default ProdPedido;
