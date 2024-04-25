import { DataTypes } from 'sequelize';
import { sequelize } from '../config';
import Paciente from './pacientes';
import Diagnostico from './diagnosticos';

const Receita = sequelize.define(
  'receitas',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: false,
      primaryKey: true,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  },
);

Receita.belongsTo(Paciente, {
  as: 'paciente',
  onDelete: 'no action',
  onUpdate: 'no action',
  foreignKey: {
    field: 'id_pacientes',
    name: 'idPacientes',
    allowNull: false,
  },
});

Receita.belongsTo(Diagnostico, {
  as: 'diagnostico',
  onDelete: 'no action',
  onUpdate: 'no action',
  foreignKey: {
    field: 'id_diagnosticos',
    name: 'idDiagnosticos',
    allowNull: false,
  },
});

export default Receita;