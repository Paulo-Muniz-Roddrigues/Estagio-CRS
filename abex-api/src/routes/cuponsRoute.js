import cuponsController from '../controllers/cuponsController';
import verifyAdmin from '../middleware/verifyAdmin';

export default (app) => {
  app.post('/cupons/persist', cuponsController.persist);
  app.post('/cupons/persist/:id', cuponsController.persist);
  app.post('/cupons/destroy', verifyAdmin, cuponsController.destroy);
  app.get('/cupons', cuponsController.get);
  app.get('/cupons/:id', cuponsController.get);
};
