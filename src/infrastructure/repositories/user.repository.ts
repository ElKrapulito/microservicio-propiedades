import { User } from './../../domain/models/user';
import { IUserRepository } from './../../domain/repositories/iUserRepository';
import { Injectable } from '@nestjs/common';
import { BaseRepository } from './base.repository';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDocument } from '../config/mongoose/user.schema';

@Injectable()
export class UserRepository
  extends BaseRepository<User>
  implements IUserRepository
{
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {
    super();
    this.baseModel = this.userModel;
  }
}
