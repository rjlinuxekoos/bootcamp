import { Router } from 'express';
import ProjectController from './app/controllers/ProjectController';
import checkProjectExists from './app/middlewares/check';
import countRequest from './app/middlewares/countRequest';

const routes = new Router();

routes.get('/projects', countRequest, ProjectController.listall);
routes.post('/projects', countRequest, ProjectController.store);
routes.post('/projects/:id/tasks', countRequest, ProjectController.storetasks);
// routes.use(checkProjectExists);
routes.put(
  '/projects/:id',
  countRequest,
  checkProjectExists,
  ProjectController.update
);
routes.delete('/projects/:id', countRequest, ProjectController.delete);
export default routes;
