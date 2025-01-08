import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { env } from '../../../../config/env';

import type { IUsersRepository } from '../../../../database/repositories/users/UsersRepository.types';
import { InvalidCredentials } from '../../../../errors/InvalidCredentials';
import type {
  ISignInInputType,
  ISignInOutputType,
  ISignInService,
} from './SignInService.types';

export class SignInService implements ISignInService {
  constructor(private readonly UsersRepository: IUsersRepository) {}

  async execute({
    email,
    password,
  }: ISignInInputType): Promise<ISignInOutputType> {
    const account = await this.UsersRepository.findByEmail(email);

    if (!account) {
      throw new InvalidCredentials();
    }

    const isPasswordValid = await compare(password, account.password);

    if (!isPasswordValid) {
      throw new InvalidCredentials();
    }

    const accessToken = sign(
      {
        sub: account.id,
        role: account.role,
      },
      env.jwtSecret,
      { expiresIn: '2 days' },
    );

    return { accessToken };
  }
}
