import sinon from 'sinon';

import { expect } from 'chai';
import { Model } from 'mongoose';
import { cycleInput, cycleOutput } from '../../../src/mock/cycleMock';

import MotorcycleService from '../../../src/Services/MotorcycleService';

describe('', function () {
  afterEach(async function () {
    sinon.restore(); 
  });

  it('Add Motorcycle', async function () {
    sinon.stub(Model, 'create').resolves(cycleOutput);

    const service = new MotorcycleService();
    const result = await service.create(cycleInput);

    expect(result).to.be.deep.equal(cycleOutput);
  });
  it('return null', async function () {
    sinon.stub(Model, 'create').resolves(null);

    const service = new MotorcycleService();
    const result = await service.create(cycleInput);

    expect(result).to.be.deep.equal(null);
  });
});