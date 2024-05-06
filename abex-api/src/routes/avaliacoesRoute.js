import avaliacoesController from '../controllers/avaliacoesController';
import verificarDescricao from '../middleware/verifyToken';

export default (app) => {
  app.post('/avaliacoes/persist', avaliacoesController.persist);
  app.post('/avaliacoes/persist/:id', avaliacoesController.persist);
  app.post('/avaliacoes', avaliacoesController.create);
  app.patch('/avaliacoes/:id', avaliacoesController.update);
  app.delete('/avaliacoes/:id', avaliacoesController.destroy);
  app.get('/avaliacoes', avaliacoesController.get);
  app.get('/avaliacoes/:id', avaliacoesController.get);
};
