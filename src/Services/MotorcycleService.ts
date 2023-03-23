import IMotorcicle from '../Interfaces/IMotorcycle';
import Motorcycle from '../Domains/Motorcycle';
import MotorcycleModel from '../Models/MotorcycleModel';

export default class MotorcyclesService {
  private createNewMotor(motorcycle: IMotorcicle | null): Motorcycle | null {
    if (motorcycle) {
      return new Motorcycle(
        motorcycle,
      );
    }
    return null;
  }

  public async create(motorcycle: IMotorcicle) {
    const motorcycleModel = new MotorcycleModel();
    const newMotor = await motorcycleModel.create(motorcycle);
    return this.createNewMotor(newMotor);
  }
}