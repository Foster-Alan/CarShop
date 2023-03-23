import IMotorcycle from '../Interfaces/IMotorcycle';

class Motorcycle implements Motorcycle {
  public id?: string | undefined;
  protected model: string;
  public year: number;
  public color: string;
  public status?: boolean | undefined;
  public buyValue: number;
  private category: string;
  private engineCapacity: number;

  constructor({
    id,
    model,
    year,
    color,
    status,
    buyValue,
    category,
    engineCapacity,
  } : IMotorcycle) {
    this.id = id;
    this.category = category;
    this.engineCapacity = engineCapacity;
    this.model = model;
    this.status = status;
    this.color = color;
    this.year = year;
    this.buyValue = buyValue;
  }

  public getCategory(): string {
    return this.category;
  }

  public getEngineCapacity(): number {
    return this.engineCapacity;
  }
}

export default Motorcycle;