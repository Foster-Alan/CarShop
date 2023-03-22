import { NextFunction, Request, Response } from 'express';
import ICar from '../Interfaces/ICar';
import CarsService from '../Services/CarsService';
import Status from '../Utils/status';

export default class CarsPostController {
  private req: Request;
  private res: Response;
  private service: CarsService;
  private next: NextFunction;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.service = new CarsService();
    this.next = next;
  }

  public async create() {
    const car: ICar = {
      model: this.req.body.model,
      year: this.req.body.year,
      color: this.req.body.color,
      status: this.req.body.status || false,
      buyValue: this.req.body.buyValue,
      doorsQty: this.req.body.doorsQty,
      seatsQty: this.req.body.seatsQty,
    };
    try {
      const newCar = await this.service.create(car);
      return this.res.status(Status.created).json(newCar);
    } catch (error) {
      this.next(error);
    }
  }

  public async findAllCars() {
    const cars = await this.service.getCars();
    return this.res.status(Status.ok).json(cars);
  }

  public async findOneCar() {
    const carId = this.req.params.id;
    try {
      const car = await this.service.getCar(carId);
      if (!car) return this.res.status(Status.notFound).json({ message: 'Car not found' });
      return this.res.status(Status.ok).json(car);
    } catch (error) {
      this.res.status(Status.unprocess).json({ message: 'Invalid mongo id' });
    }
  }
  public async updateOneCar() {
    const car: ICar = {
      model: this.req.body.model,
      year: this.req.body.year,
      color: this.req.body.color,
      status: this.req.body.status || false,
      buyValue: this.req.body.buyValue,
      doorsQty: this.req.body.doorsQty,
      seatsQty: this.req.body.seatsQty,
    };
    const carId = this.req.params.id;

    try {
      const result = await this.service.attCar(carId, car);
      if (!result) return this.res.status(Status.notFound).json({ message: 'Car not found' });
      return this.res.status(Status.ok).json(result);
    } catch (error) {
      this.res.status(Status.unprocess).json({ message: 'Invalid mongo id' });
    }
  }
}
