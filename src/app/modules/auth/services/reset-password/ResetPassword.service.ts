import { hash } from 'bcryptjs';
import type { IUsersRepository } from '../../../../database/repositories/users/UsersRepository.types';
import type {
  IResetPasswordInputType,
  IResetPasswordService,
} from './ResetPassword.types';

export class ResetPasswordService implements IResetPasswordService {
  constructor(private readonly usersRepository: IUsersRepository) {}

  async execute(input: IResetPasswordInputType): Promise<void> {
    const { userId, newPassword } = input;

    const hashedNewPassword = await hash(newPassword, 12);

    await this.usersRepository.update({
      id: userId,
      password: hashedNewPassword,
    });
  }
}
