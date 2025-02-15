import express from 'express';
import morgan from 'morgan';

export default function configuration(app) {
  app.use(express.json());
  app.use(morgan('dev'));
}