import categoriasController from '../controllers/categoriasController';

export default (app) => {
  app.post('/categorias/persist', categoriasController.persist);
  app.post('/categorias/persist/:id', categoriasController.persist);
  app.post('/categorias/destroy', categoriasController.destroy);
  app.get('/categorias', categoriasController.get);
  app.get('/categorias/:id', categoriasController.get);
};
