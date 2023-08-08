import { UUID } from 'crypto';
import { DomainEvent } from '../../../nurbnb-kernel/src/core/domainEvent';
export class PublishProperty extends DomainEvent {
  public readonly propertyId: UUID;
  public readonly isPublished: boolean;

  constructor(propertyId: UUID) {
    super(new Date());
    this.propertyId = propertyId;
    this.isPublished = true;
  }
}
