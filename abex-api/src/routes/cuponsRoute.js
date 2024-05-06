import cuponsController from '../controllers/cuponsController';

export default (app) => {
  app.post('/cupons/persist', cuponsController.persist);
  app.post('/cupons/persist/:id', cuponsController.persist);
  app.post('/cupons/destroy', cuponsController.destroy);
  app.get('/cupons', cuponsController.get);
  app.get('/cupons/:id', cuponsController.get);
};
