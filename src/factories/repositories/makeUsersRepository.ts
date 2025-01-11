import { UsersRepository } from '../../app/database/repositories/users/UsersRepository';

export function makeUsersRepository() {
  return new UsersRepository();
}
