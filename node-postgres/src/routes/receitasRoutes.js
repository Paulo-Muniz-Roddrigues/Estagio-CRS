import receitasController from '../controllers/receitasController';
export default(app) => {
  app.get('/receitas', receitasController.get);
  app.get('/receitas/:id', receitasController.get);
  app.post('/receitas', receitasController.create);
  app.patch('/receitas/:id', receitasController.update);
  app.delete('/receitas/:id', receitasController.destroy);
  app.get('/receitasId/:id', receitasController.getReceitaPorNome);
}