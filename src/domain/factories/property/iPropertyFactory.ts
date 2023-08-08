import { Photo } from './../../models/photo';
import { User } from './../../models/user';
import { Property } from './../../models/property';

export interface IPropertyFactory {
  createProperty(
    owner: User,
    title: string,
    description: string,
    photos: Photo[],
    comodities: string[],
    rules: string[],
    checkIn: Date,
    checkOut: Date,
  ): Property;
}
