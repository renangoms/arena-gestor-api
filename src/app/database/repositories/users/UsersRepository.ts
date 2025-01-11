import { prismaClient } from '../../../libs/prismaClient';

import type { User } from '../../../entities/User';
import type {
  IInputCreateUser,
  IUsersRepository,
} from './UsersRepository.types';

export class UsersRepository implements IUsersRepository {
  findByEmail(email: string): Promise<User | null> {
    return prismaClient.user.findUnique({
      where: { email },
    });
  }

  create(input: IInputCreateUser): Promise<User> {
    return prismaClient.user.create({
      data: input,
    });
  }
}
