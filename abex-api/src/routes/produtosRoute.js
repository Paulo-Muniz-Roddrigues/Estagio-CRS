import produtosController from '../controllers/produtosController';

export default (app) => {
  app.post('/produtos/persist', produtosController.persist);
  app.post('/produtos/persist/:id', produtosController.persist);
  app.post('/produtos/destroy', produtosController.destroy);
  app.get('/produtos', produtosController.get);
  app.get('/produtos/:id', produtosController.get);
};
