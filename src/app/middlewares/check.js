import express from 'express';
import routes from '../../routes';
import projectController from '../controllers/ProjectController';

export default async (req, res, next) => {
  const { id, title } = req.body;

  const project = await projectController.retorna_lista_check();
  const result = project.find(p => p.id === id);
  if (!result) {
    return res.status(400).json({ error: 'Project not found' });
  }

  return next();
};
