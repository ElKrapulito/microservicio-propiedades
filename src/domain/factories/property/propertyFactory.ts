import { Property } from 'src/domain/models/property';
import { IPropertyFactory } from './iPropertyFactory';
import { Photo } from 'src/domain/models/photo';
import { User } from 'src/domain/models/user';

export class PropertyFactory implements IPropertyFactory {
  createProperty(
    owner: User,
    title: string,
    description: string,
    photos: Photo[],
    comodities: string[],
    rules: string[],
    checkIn: Date,
    checkOut: Date,
  ): Property {
    return new Property(
      owner,
      title,
      description,
      photos,
      comodities,
      rules,
      checkIn,
      checkOut,
    );
  }
}
