import {Application, Router} from 'express';
import CitiesController from '../app/controllers/CitiesController';
import {allRequiredValidation,
  queriesRequiredValidation} from '../app/middlewares/validations/city';

export default (server: Application, router: Router) => {
  router.post('/city', allRequiredValidation, CitiesController.postACity);
  router.get('/city/all?', CitiesController.getAllCities);
  router.get('/city/?', queriesRequiredValidation, CitiesController.findCity);
  router.delete('/city/:id', CitiesController.deleteCity);
  server.use('/api/v1', router);
};