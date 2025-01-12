import { ResetPasswordService } from '../../../app/modules/auth/services/reset-password/ResetPassword.service';
import { makeUsersRepository } from '../../repositories/makeUsersRepository';

export function makeResetPasswordService() {
  const usersRepository = makeUsersRepository();

  return new ResetPasswordService(usersRepository);
}
