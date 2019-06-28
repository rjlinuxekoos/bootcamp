import { Router } from 'express';
import ProjectController from './app/controllers/ProjectController';
import checkProjectExists from './app/middlewares/check';

const routes = new Router();

routes.get('/projects', ProjectController.listall);
console.log(ProjectController.projects);
routes.use(checkProjectExists);
routes.post('/projects', ProjectController.store);
routes.post('/projects/:id/tasks', ProjectController.storetasks);
routes.put('/projects', ProjectController.update);
routes.delete('/projects/:id', ProjectController.delete);
export default routes;
