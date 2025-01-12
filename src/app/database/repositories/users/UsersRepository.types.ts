import type { User } from '../../../entities/User';

export interface IInputCreateUser {
  name: string;
  phone: string;
  email: string;
  password: string;
  role: 'USER' | 'ADMIN';
}

export interface IInputUpdateUser {
  password: string;
  id: string;
}

export interface IUsersRepository {
  findByEmail(email: string): Promise<User | null>;
  create(input: IInputCreateUser): Promise<User>;
  update(input: IInputUpdateUser): Promise<User>;
}
