import { HydratedDocument, Schema } from 'mongoose';
import { Photo } from '../../../domain/models/photo';

export type PhotoDocument = HydratedDocument<Photo>;

export const PhotoSchema = new Schema({
  url: {
    type: String,
    required: [true],
  },
  mimeType: {
    type: String,
    required: [true],
  },
});
