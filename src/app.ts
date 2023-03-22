import express from 'express';
import carsRouter from './Routes/carsRouter';

const app = express();

app.use(express.json());
app.use('/cars', carsRouter);

export default app;
