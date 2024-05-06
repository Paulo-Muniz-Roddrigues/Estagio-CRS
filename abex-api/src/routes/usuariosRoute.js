import usuariosController from '../controllers/usuariosController';
import verifyToken from '../middleware/verifyToken';

export default (app) => {
  app.post('/usuarios/persist', verifyToken, usuariosController.persist);
  app.post('/usuarios/persist/:id', verifyToken, usuariosController.persist);
  app.post('/usuarios/create', verifyToken, usuariosController.create);
  app.patch('/usuarios/:id', verifyToken, usuariosController.update);
  app.delete('/usuarios/:id', verifyToken, usuariosController.destroy);
  app.get('/usuarios', verifyToken, usuariosController.get);
  app.get('/usuarios/:id', verifyToken, usuariosController.get);
  app.post('/usuarios/register/', usuariosController.register);
  app.post('/usuarios/login', usuariosController.login);
};
