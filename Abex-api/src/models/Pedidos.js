import { DataTypes } from 'sequelize';
import { sequelize } from '../config/config';
import Usuario from './Usuarios';
import Endereco from './Enderecos';
import Cupom from './Cupons';

const Pedido = sequelize.define(
  'pedido',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    dataPedido: {
      field: 'data_pedido',
      type: DataTypes.DATE,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    metodoPagamento: {
      field: 'metodo_pagamento',
      type: DataTypes.STRING(20),
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

Pedido.belongsTo(Usuario, {
  as: 'usuario',
  onDelete: 'no action',
  onUpdate: 'no action',
  foreignKey: {
    field: 'id_usuario',
    name: 'idUsuario',
  },
});

Pedido.belongsTo(Endereco, {
  as: 'endereco',
  onDelete: 'no action',
  onUpdate: 'no action',
  foreignKey: {
    field: 'id_endereco',
    name: 'idEndereco',
  },
});

Pedido.belongsTo(Cupom, {
  as: 'cupom',
  onDelete: 'no action',
  onUpdate: 'no action',
  foreignKey: {
    field: 'id_cupom',
    name: 'idCupom',
  },
});

export default Pedido;
