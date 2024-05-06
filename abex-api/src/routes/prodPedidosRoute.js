import prodPedidosController from '../controllers/prodPedidosController';

export default (app) => {
  app.post('/prodPedidos/persist', prodPedidosController.persist);
  app.post('/prodPedidos/persist/:id', prodPedidosController.persist);
  app.post('/prodPedidos/destroy', prodPedidosController.destroy);
  app.get('/prodPedidos', prodPedidosController.get);
  app.get('/prodPedidos/:id', prodPedidosController.get);
};
*