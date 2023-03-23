import sinon from 'sinon';

import { expect } from 'chai';
import { Model } from 'mongoose';
import { carInput, carOutput } from '../../../src/mock/carMock';

import CarService from '../../../src/Services/CarsService';
import ICar from '../../../src/Interfaces/ICar';

const MAREA_ID = '6348513f34c397abcad040b2';

describe('', function () {
  afterEach(async function () {
    sinon.restore(); 
  });

  it('Add Car', async function () {
    sinon.stub(Model, 'create').resolves(carOutput);

    const service = new CarService();
    const result = await service.create(carInput);

    expect(result).to.be.deep.equal(carOutput);
  });
  it('Get by id', async function () {
    sinon.stub(Model, 'findOne').resolves(carOutput);

    const service = new CarService();
    const result = await service.getCar(MAREA_ID);

    expect(result).to.be.deep.equal(carOutput);
  });

  it('return null', async function () {
    sinon.stub(Model, 'create').resolves(null);
    const forceNull = null as unknown as ICar;

    const service = new CarService();
    const result = await service.create(forceNull);

    expect(result).to.be.deep.equal(null);
  });
});