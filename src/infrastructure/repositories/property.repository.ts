import { BaseRepository } from './base.repository';
import { Property } from '../../domain/models/property';
import { InjectModel } from '@nestjs/mongoose';
import { IPropertyRepository } from '../../domain/repositories/iPropertyRepository';
import { PropertyDocument } from '../config/mongoose/property.schema';
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PropertyRepository
  extends BaseRepository<Property>
  implements IPropertyRepository
{
  constructor(
    @InjectModel(Property.name) private propertyModel: Model<PropertyDocument>,
  ) {
    super();
    this.baseModel = this.propertyModel;
  }
}
