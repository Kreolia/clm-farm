import express from 'express';
import farmRouter from './components/farm/routes.js';
const app = express();

app.use("", farmRouter);

export default app;