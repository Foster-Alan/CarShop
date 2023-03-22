import { NextFunction, Request, Response, Router } from 'express';
import CarsController from '../Controllers/CarsController';

const router = Router();

router.post(
  '/',
  (req: Request, res: Response, next: NextFunction) => new 
  CarsController(req, res, next).create(),
);
router.get(
  '/',
  (req: Request, res: Response, next: NextFunction) => new 
  CarsController(req, res, next).findAllCars(),
);
router.get(
  '/:id',
  (req: Request, res: Response, next: NextFunction) => new 
  CarsController(req, res, next).findOneCar(),
);

export default router;