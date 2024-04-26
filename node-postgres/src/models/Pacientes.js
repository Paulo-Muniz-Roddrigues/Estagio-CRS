import { DataTypes } from "sequelize";
import { sequelize } from "../config";

const Paciente = sequelize.define(
  'pacientes',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: false,
      primaryKey: true,
      unique: true,
    },
    nome: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    cpf: {
      type: DataTypes.STRING(14),
      allowNull: false,
      unique: true,
    },
    endereco: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
    },
    telefone: {
      type: DataTypes.STRING(17),
      allowNull: false,
      unique: true,
    }
  },
  {
    freezeTableName: true,
    timestamps: false,
  },
);

export default Paciente;
