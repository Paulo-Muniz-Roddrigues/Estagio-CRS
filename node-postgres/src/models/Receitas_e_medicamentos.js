import { DataTypes } from 'sequelize';
import { sequelize } from '../config';
import Receita from './Receitas';
import Medicamento from './Medicamentos';

const ReceitaEMedicamento = sequelize.define(
  'receitas_e_medicamentos',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: false,
      primaryKey: true,
    },
    dosagem: {
      type: DataTypes.STRING(100),
    }
  },
  {
    freezeTableName: true,
    timestamps: false,
  },
);

ReceitaEMedicamento.belongsTo(Receita, {
  as: 'receitasEmedicamentos',
  onDelete: 'no action',
  onUpdate: 'no action',
  foreignKey: {
    field: 'id_receitas',
    name: 'idReceitas',
    allowNull: false,
  },
});

ReceitaEMedicamento.belongsTo(Medicamento, {
  as: 'medicamentos',
  onDelete: 'no action',
  onUpdate: 'no action',
  foreignKey: {
    field: 'id_medicamentos',
    name: 'idMedicamentos',
    allowNull: false,
  },
});

export default ReceitaEMedicamento;