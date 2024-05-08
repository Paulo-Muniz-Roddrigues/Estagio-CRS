import { DataTypes } from 'sequelize';
import { sequelize } from '../config/config';
import Usuario from './Usuarios';

const Endereco = sequelize.define(
  'endereco',
  {
    id: {
      field: 'id_endereco',
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    cep: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    cidade: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    bairro: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    rua: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    numero: {
      type: DataTypes.STRING(5),
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

Endereco.belongsTo(Usuario, {
  as: 'usuario',
  onDelete: 'no action',
  onUpdate: 'no action',
  foreignKey: {
    field: 'id_usuario',
    name: 'idUsuario',
  },
});

export default Endereco;
