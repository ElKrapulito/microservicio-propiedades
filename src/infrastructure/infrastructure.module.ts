import { Photo } from './../domain/models/photo';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User } from '../domain/models/user';
import { UserSchema } from './config/mongoose/user.schema';
import { Property } from '../domain/models/property';
import { PropertySchema } from './config/mongoose/property.schema';
import { PhotoSchema } from './config/mongoose/photo.schema';
import { UserRepository } from './repositories/user.repository';
import { PropertyRepository } from './repositories/property.repository';
import { PhotoRepository } from './repositories/photo.repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: User.name, schema: UserSchema },
      { name: Property.name, schema: PropertySchema },
      { name: Photo.name, schema: PhotoSchema },
    ]),
  ],
  controllers: [],
  providers: [UserRepository, PropertyRepository, PhotoRepository],
  exports: [UserRepository, PropertyRepository, PhotoRepository],
})
export class InfrastructureModule {}
