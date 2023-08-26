import { Model } from 'mongoose';
import { AggregateRoot } from '../../../nurbnb-kernel/src/core/aggregateRoot';
import { IRepository } from '../../../nurbnb-kernel/src/core/iRepository';

export abstract class BaseRepository<T extends AggregateRoot>
  implements IRepository<T>
{
  protected baseModel: Model<T>;
  constructor() {}

  async create(dto: Partial<T>): Promise<T> {
    return await this.baseModel.create(dto);
  }

  async update(_id: string, dto: Partial<T>) {
    return await this.baseModel
      .findOneAndUpdate({ _id }, dto, {
        new: true,
      })
      .exec();
  }

  async findById(_id: string): Promise<T> {
    return await this.baseModel.findOne({ _id }).exec();
  }

  async getAll() {
    return await this.baseModel.find().exec();
  }

  async delete(_id: string) {
    const deletedModel = await this.baseModel.findByIdAndRemove({ _id }).exec();
    return deletedModel;
  }
}
