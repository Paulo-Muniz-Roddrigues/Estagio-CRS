import cargosController from '../controllers/cargosController';

export default (app) => {
  app.post('/cargos/persist', cargosController.persist);
  app.post('/cargos/persist/:id', cargosController.persist);
  app.post('/cargos/create', cargosController.create);
  app.patch('/cargos/:id', cargosController.update);
  app.delete('/cargos/:id', cargosController.destroy);
  app.get('/cargos', cargosController.get);
  app.get('/cargos/:id', cargosController.get);
};
