import { UUID } from 'crypto';
import { AggregateRoot } from './aggregateRoot';
export interface IRepository<T extends AggregateRoot> {
  findById(id: UUID): Promise<T>;
  create(obj: T): Promise<void>;
}
