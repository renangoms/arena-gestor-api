import { ForgetPasswordService } from '../../../app/modules/auth/services/forget-password/ForgetPassword.service';
import { makeUsersRepository } from '../../repositories/makeUsersRepository';
import { makeSendMailService } from '../mail/makeSendMailService';

export function makeForgetPasswordService() {
  const usersRepository = makeUsersRepository();
  const sendMailService = makeSendMailService();

  return new ForgetPasswordService(usersRepository, sendMailService);
}
