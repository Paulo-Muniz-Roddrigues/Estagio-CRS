import { DataTypes } from 'sequelize';
import { sequelize } from '../config/config';
import Cargo from './Cargos';

const Usuario = sequelize.define(
  'usuario',
  {
    id: {
      field: 'id_usuario',
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    login: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    passwordHash: {
      field: 'password_hash',
      type: DataTypes.STRING(1000),
    },
    nomeCliente: {
      field: 'nome_cliente',
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    telefone: {
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

Usuario.belongsTo(Cargo, {
  as: 'cargo',
  onDelete: 'no action',
  onUpdate: 'no action',
  foreignKey: {
    field: 'id_cargo',
    name: 'idCargo',
  },
  allowNull: false,
});

export default Usuario;
