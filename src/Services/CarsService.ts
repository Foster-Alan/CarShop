import ICar from '../Interfaces/ICar';
import Car from '../Domains/Car';
import CarModel from '../Models/CarModel';

export default class CarsService {
  private createNewCar(car: ICar | null): Car | null {
    if (car) {
      return new Car(
        car,
      );
    }
    return null;
  }

  public async create(car: ICar) {
    const carModel = new CarModel();
    const newCar = await carModel.create(car);
    return this.createNewCar(newCar);
  }

  public async getAllCars() {
    const carModel = new CarModel();
    const cars = await carModel.findAll();
    const carMap = cars.map((car) => this.createNewCar(car));
    return carMap;
  }

  public async getOneCar(carId: string) {
    const carModel = new CarModel();
    const car = await carModel.getOne(carId);
    const carMap = this.createNewCar(car);
    return carMap;
  }
}