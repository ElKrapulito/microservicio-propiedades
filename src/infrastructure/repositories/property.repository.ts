import { BaseRepository } from './base.repository';
import { Property } from '../../domain/models/property';
import { IPropertyRepository } from '../../domain/repositories/iPropertyRepository';

export class PropertyRepository
  extends BaseRepository<Property>
  implements IPropertyRepository
{
  constructor() {
    super();
  }
}
