import { DataTypes } from 'sequelize';
import { sequelize } from '../config/config';
import Usuario from './Usuarios';
import Produto from './Produtos';

const Avaliacao = sequelize.define(
  'avaliacao',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    nota: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    comentario: {
      type: DataTypes.STRING(100),
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

Avaliacao.belongsTo(Usuario, {
  as: 'usuario',
  onDelete: 'no action',
  onUpdate: 'no action',
  foreignKey: {
    field: 'id_usuario',
    name: 'idUsuario',
  },
});

Avaliacao.belongsTo(Produto, {
  as: 'produto',
  onDelete: 'no action',
  onUpdate: 'no action',
  foreignKey: {
    field: 'id_produto',
    name: 'idProduto',
  },
});

export default Avaliacao;
