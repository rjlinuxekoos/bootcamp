import express from 'express';

import projectController from '../controllers/ProjectController';

export default async (req, res, next) => {
  const { id } = req.params;
  console.log('id');
  console.log(id);
  const project = projectController.retorna_lista_check();
  console.log('Aqui');
  console.log(project);
  if (project === undefined) {
    return next();
  }
  project.find(p => p.id === id);

  if (!project) {
    return res.status(400).json({ error: 'Project not found' });
  }

  return next();
};
