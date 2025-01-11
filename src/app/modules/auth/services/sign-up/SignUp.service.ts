import { hash } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { env } from '../../../../config/env';
import type { IUsersRepository } from '../../../../database/repositories/users/UsersRepository.types';
import { AccountAlreadyExists } from '../../../../errors/AccountAlreadyExists';
import type {
  ISignUpInputType,
  ISignUpOutputType,
  ISignUpService,
} from './SignUpService.types';

export class SignUpService implements ISignUpService {
  constructor(private readonly usersRepository: IUsersRepository) {}

  async execute({
    name,
    email,
    phone,
    password,
  }: ISignUpInputType): Promise<ISignUpOutputType> {
    const emailTaken = await this.usersRepository.findByEmail(email);

    if (emailTaken) {
      throw new AccountAlreadyExists();
    }

    const hashedPassword = await hash(password, 12);

    const account = await this.usersRepository.create({
      name,
      email,
      phone,
      password: hashedPassword,
      role: 'USER',
    });

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
