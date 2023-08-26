import { HydratedDocument, Schema } from 'mongoose';
import { User } from '../../../domain/models/user';

export type UserDocument = HydratedDocument<User>;

export const UserSchema = new Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
});
