import { AggregateRoot } from '../../../nurbnb-kernel/src/core/aggregateRoot';

export class User extends AggregateRoot {
  name: string;
  email: string;

  constructor(name: string, email: string) {
    super();
    this.id = crypto.randomUUID();
    this.name = name;
    this.email = email;
  }
}
