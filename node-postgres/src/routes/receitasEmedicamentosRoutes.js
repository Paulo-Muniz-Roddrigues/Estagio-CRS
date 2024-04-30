import receitasEmedicamentosController from '../controllers/receitasEmedicamentosController';
export default(app) => {
  app.get('/receitas-e-medicamentos', receitasEmedicamentosController.get);
  app.get('/receitas-e-medicamentos/:id', receitasEmedicamentosController.get);
  app.post('/receitas-e-medicamentos', receitasEmedicamentosController.create);
  app.patch('/receitas-e-medicamentos/:id', receitasEmedicamentosController.update);
  app.delete('/receitas-e-medicamentos/:id', receitasEmedicamentosController.destroy);
}