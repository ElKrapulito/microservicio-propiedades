import { HydratedDocument, Schema } from 'mongoose';
import { Property } from 'src/domain/models/property';
import { User } from '../../../domain/models/user';
import { Photo } from '../../../domain/models/photo';

export type PropertyDocument = HydratedDocument<Property>;

export const PropertySchema = new Schema(
  {
    owner: {
      type: Schema.Types.ObjectId,
      required: [true],
      ref: User.name,
    },
    title: {
      type: String,
      required: [true],
    },
    description: {
      type: String,
    },
    photos: [
      {
        type: Schema.Types.ObjectId,
        ref: Photo.name,
      },
    ],
    comodities: [
      {
        type: String,
      },
    ],
    rules: [
      {
        type: String,
      },
    ],
  },
  { timestamps: true },
);
