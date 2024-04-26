import pacientesRoutes from "./pacientesRoutes";
import diagnosticosRoutes from "./diagnosticosRoutes";
import receitasRoutes from "./receitasRoutes";
import medicamentosRoutes from "./medicamentosRoutes";
import receitasEmedicamentosRoutes from "./receitasEmedicamentosRoutes";

function Routes(app) {
  pacientesRoutes(app);
  diagnosticosRoutes(app);
  receitasRoutes(app);
  medicamentosRoutes(app);
  receitasEmedicamentosRoutes(app);
}

export default Routes