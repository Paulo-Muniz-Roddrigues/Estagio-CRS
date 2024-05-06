import pedidosController from '../controllers/pedidosController';

export default (app) => {
  app.post('/pedidos/persist', pedidosController.persist);
  app.post('/pedidos/persist/:id', pedidosController.persist);
  app.post('/pedidos/destroy', pedidosController.destroy);
  app.get('/pedidos', pedidosController.get);
  app.get('/pedidos/:id', pedidosController.get);
};
