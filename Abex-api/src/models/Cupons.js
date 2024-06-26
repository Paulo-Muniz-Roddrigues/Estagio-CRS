import { DataTypes } from 'sequelize';
import { sequelize } from '../config/config';

const Cupom = sequelize.define(
  'cupom',
  {
    id: {
      field: 'id_cupom',
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    cupom: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    desconto: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    ativo: {
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

export default Cupom;
