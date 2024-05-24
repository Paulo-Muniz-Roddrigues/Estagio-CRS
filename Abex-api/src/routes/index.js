import cargosRoute from './cargosRoute';
import cuponsRoute from './cuponsRoute';
import categoriasRoute from './categoriasRoute';
import usuariosRoute from './usuariosRoute';
import produtosRoute from './produtosRoute';
import enderecosRoute from './enderecosRoute';
import avaliacoesRoute from './avaliacoesRoute';
import pedidosRoute from './pedidosRoute';
import prodPedidosRoute from './prodPedidosRoute';

function Routes(app) {
  cargosRoute(app);
  cuponsRoute(app);
  categoriasRoute(app);
  usuariosRoute(app);
  produtosRoute(app);
  enderecosRoute(app);
  avaliacoesRoute(app);
  pedidosRoute(app);
  prodPedidosRoute(app);
}

export default Routes;
