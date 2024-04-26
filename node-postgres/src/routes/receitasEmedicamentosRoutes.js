import receitasEmedicamentosController from '../controllers/receitasEmedicamentosController';
export default(app) => {
  app.get('/receitasEmedicamentos', receitasEmedicamentosController.get);
  app.get('/receitasEmedicamentos/:id', receitasEmedicamentosController.get);
  app.post('/receitasEmedicamentos', receitasEmedicamentosController.create);
  app.patch('/receitasEmedicamentos/:id', receitasEmedicamentosController.update);
  app.delete('/receitasEmedicamentos/:id', receitasEmedicamentosController.destroy);
}