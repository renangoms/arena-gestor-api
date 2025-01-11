import type { User } from '../../../entities/User';
import { prismaClient } from '../../../libs/prismaClient';
import type { IUsersRepository } from './UsersRepository.types';

export class UsersRepository implements IUsersRepository {
  findByEmail(email: string): Promise<User | null> {
    // return prismaClient.user.findUnique({
    //   where: { email },
    // });

    return new Promise((resolve) => resolve(null));
  }
}
