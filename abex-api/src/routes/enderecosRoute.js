import enderecoController from '../controllers/enderecosController';

export default (app) => {
  app.post('/endereco/persist', enderecoController.persist);
  app.post('/endereco/persist/:id', enderecoController.persist);
  app.post('/endereco/destroy', enderecoController.destroy);
  app.get('/endereco', enderecoController.get);
  app.get('/endereco/:id', enderecoController.get);
};
