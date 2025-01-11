import type { User } from '../../../entities/User';

export interface IInputCreateUser {
  name: string;
  phone: string;
  email: string;
  password: string;
  role: 'USER' | 'ADMIN';
}

export interface IUsersRepository {
  findByEmail(email: string): Promise<User | null>;
  create(input: IInputCreateUser): Promise<User>;
}
