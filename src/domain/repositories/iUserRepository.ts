import { IRepository } from 'nurbnb-kernel/src/core/iRepository';
import { User } from '../models/user';

export interface IUserRepository extends IRepository<User> {}
