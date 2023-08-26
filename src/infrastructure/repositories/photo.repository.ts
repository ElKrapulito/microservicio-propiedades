import { BaseRepository } from './base.repository';
import { Photo } from '../../domain/models/photo';
import { IPhotoRepository } from '../../domain/repositories/iPhotoRepository';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PhotoDocument } from '../config/mongoose/photo.schema';
import { Injectable } from '@nestjs/common';
@Injectable()
export class PhotoRepository
  extends BaseRepository<Photo>
  implements IPhotoRepository
{
  constructor(
    @InjectModel(Photo.name) private photoModel: Model<PhotoDocument>,
  ) {
    super();
    this.baseModel = this.photoModel;
  }
}
