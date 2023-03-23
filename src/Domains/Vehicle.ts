import IVehicle from '../Interfaces/IVehicle';

class Vehicle {
  public id?: string | undefined;
  protected model: string;
  public year: number;
  public color: string;
  public status?: boolean;
  public buyValue: number;

  constructor({
    id,
    model,
    year,
    color,
    status,
    buyValue,
  }: IVehicle) {
    this.id = id;
    this.model = model;
    this.year = year;
    this.color = color;
    this.status = status;
    this.buyValue = buyValue;
  }

  public getModel(): string {
    return this.model;
  }

  public setModel(value: string) {
    this.model = value;
  }
}

export default Vehicle;