import { AggregateRoot } from '../../../nurbnb-kernel/src/core/aggregateRoot';

export class Photo extends AggregateRoot {
  url: string;
  mimeType: string;

  constructor(url: string, mimeType: string) {
    super();
    this.url = url;
    this.mimeType = mimeType;
    this.id = crypto.randomUUID();
  }
}
