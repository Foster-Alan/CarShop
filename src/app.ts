import express from 'express';
import carsRouter from './Routes/carsRouter';
import motorcyclesRoutes from './Routes/motorcyclesRoutes';

const app = express();

app.use(express.json());
app.use('/cars', carsRouter);
app.use('/motorcycles', motorcyclesRoutes);

export default app;
