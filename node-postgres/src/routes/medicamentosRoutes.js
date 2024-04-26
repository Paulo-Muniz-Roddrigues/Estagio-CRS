import medicamentosController from '../controllers/medicamentosController';
export default(app) => {
  app.get('/medicamentos', medicamentosController.get);
  app.get('/medicamentos/:id', medicamentosController.get);
  app.post('/medicamentos', medicamentosController.create);
  app.patch('/medicamentos/:id', medicamentosController.update);
  app.delete('/medicamentos/:id', medicamentosController.destroy);
}