import express from 'express';
import ProjectController from '../controllers/ProjectController';

export default async (req, res, next) => {
  const ret = await ProjectController.soma_req();
  console.log(ret);
  return next();
};
