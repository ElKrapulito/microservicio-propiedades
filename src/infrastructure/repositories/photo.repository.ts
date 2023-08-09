import { BaseRepository } from './base.repository';
import { Photo } from '../../domain/models/photo';
import { IPhotoRepository } from '../../domain/repositories/iPhotoRepository';
export class PhotoRepository
  extends BaseRepository<Photo>
  implements IPhotoRepository
{
  constructor() {
    super();
  }
}
