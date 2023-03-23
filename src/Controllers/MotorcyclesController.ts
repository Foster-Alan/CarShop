import { NextFunction, Request, Response } from 'express';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleService from '../Services/MotorcycleService';
import Status from '../Utils/status';

export default class MotorcyclesController {
  private req: Request;
  private res: Response;
  private service: MotorcycleService;
  private next: NextFunction;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.service = new MotorcycleService();
    this.next = next;
  }

  public async create() {
    const motorcycle: IMotorcycle = {
      model: this.req.body.model,
      year: this.req.body.year,
      color: this.req.body.color,
      status: this.req.body.status || false,
      buyValue: this.req.body.buyValue,
      category: this.req.body.category,
      engineCapacity: this.req.body.engineCapacity,
    };
    try {
      const newMotor = await this.service.create(motorcycle);
      return this.res.status(Status.created).json(newMotor);
    } catch (error) {
      this.next(error);
    }
  }
}