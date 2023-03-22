import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import Car from '../../../src/Domains/Car';
import ICar from '../../../src/Interfaces/ICar';
import CarService from '../../../src/Services/CarsService';

const MAREA_ID = '6348513f34c397abcad040b2';

describe('', function () {
  afterEach(async function () {
    sinon.restore(); 
  });

  it('Add Car', async function () {
    const carInput: ICar = {
      model: 'Marea',
      year: 2002,
      color: 'Black',
      status: true,
      buyValue: 15.990,
      doorsQty: 4,
      seatsQty: 5,
    };
    const carOutput: Car = new Car(
      {
        id: MAREA_ID,
        model: 'Marea',
        year: 2002,
        color: 'Black',
        status: true,
        buyValue: 15.990,
        doorsQty: 4,
        seatsQty: 5,
      },
    );
    sinon.stub(Model, 'create').resolves(carOutput);

    const service = new CarService();
    const result = await service.create(carInput);

    expect(result).to.be.deep.equal(carOutput);
  });
  it('Get by id', async function () {
    const carOutput: Car = new Car(
      {
        id: MAREA_ID,
        model: 'Marea',
        year: 2002,
        color: 'Black',
        status: true,
        buyValue: 15.990,
        doorsQty: 4,
        seatsQty: 5,
      },
    );
    sinon.stub(Model, 'findOne').resolves(carOutput);

    const service = new CarService();
    const result = await service.getCar(MAREA_ID);

    expect(result).to.be.deep.equal(carOutput);
  });
});