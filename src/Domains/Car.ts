import ICar from '../Interfaces/ICar';

class Car {
  public id?: string | undefined;
  protected model: string;
  public year: number;
  public color: string;
  public status?: boolean | undefined;
  public buyValue: number;
  private doorsQty: number;
  private seatsQty: number;

  constructor({
    id,
    model,
    year,
    color,
    status,
    buyValue,
    doorsQty,
    seatsQty,
  }: ICar) {
    this.id = id;
    this.status = status;
    this.model = model;
    this.year = year;
    this.color = color;
    this.buyValue = buyValue;
    this.doorsQty = doorsQty;
    this.seatsQty = seatsQty;
  }

  public getModel(): string {
    return this.model;
  }
  public setModel(value: string) {
    this.model = value;
  }

  public getDoorsQty(): number {
    return this.doorsQty;
  }
  public getSeatsQty(): number {
    return this.seatsQty;
  }
}

export default Car;