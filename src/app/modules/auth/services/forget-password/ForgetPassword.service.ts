import { sign } from 'jsonwebtoken';
import { env } from '../../../../config/env';
import type { IUsersRepository } from '../../../../database/repositories/users/UsersRepository.types';
import { InvalidCredentials } from '../../../../errors/InvalidCredentials';
import type { ISendMailService } from '../../../mail/services/send/SendService.types';
import type {
  IForgetPasswordInputType,
  IForgetPasswordService,
} from './ForgetPasswordService.types';

export class ForgetPasswordService implements IForgetPasswordService {
  constructor(
    private readonly usersRepository: IUsersRepository,
    private readonly sendMailService: ISendMailService,
  ) {}

  async execute({ email }: IForgetPasswordInputType): Promise<void> {
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      return;
    }

    const resetToken = sign(
      {
        sub: user.id,
      },
      env.jwtSecret,
      { expiresIn: '5m' },
    );

    await this.sendMailService.execute({
      to: user.email,
      subject: 'Recuperação de senha',
      msg: resetToken,
      isRecoverPass: true,
    });
  }
}
