import {
  isValidObjectId, Model, models, Schema, UpdateQuery, model,
} from 'mongoose';
  
abstract class AbstractODM<T> {
  public model: Model<T>;
  public modelName: string;
  public schema: Schema;
  
  constructor(schema: Schema, modelName: string) {
    this.modelName = modelName;
    this.schema = schema;
    this.model = models[this.modelName] || model(this.modelName, this.schema);
  }
  
  public async create(e: T): Promise<T> {
    return this.model.create({ ...e });
  }
  
  public async upt(_id: string, e: Partial<T>): Promise<T | null> {
    if (!isValidObjectId(_id)) throw Error('Invalid Mongo id');
  
    return this.model.findByIdAndUpdate(
      { _id },
      { ...e } as UpdateQuery<T>,
      { new: true },
    );
  }
}
  
export default AbstractODM;
