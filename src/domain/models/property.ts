import { User } from './user';
import { Photo } from './photo';
import { AggregateRoot } from '../../../nurbnb-kernel/src/core/aggregateRoot';

export class Property extends AggregateRoot {
  owner: User;
  title: string;
  description: string;
  photos: Photo[];
  comodities: string[];
  rules: string[];
  checkIn: Date;
  checkOut: Date;

  constructor(
    owner: User,
    title: string,
    description: string,
    photos: Photo[],
    comodities: string[],
    rules: string[],
    checkIn: Date,
    checkOut: Date,
  ) {
    super();
    this.id = crypto.randomUUID();
    this.owner = owner;
    this.title = title;
    this.description = description;
    this.photos = photos;
    this.comodities = comodities;
    this.rules = rules;
    this.checkIn = checkIn;
    this.checkOut = checkOut;
  }
}
