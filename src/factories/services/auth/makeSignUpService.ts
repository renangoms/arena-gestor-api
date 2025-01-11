import { SignUpService } from '../../../app/modules/auth/services/sign-up/SignUp.service';
import { makeUsersRepository } from '../../repositories/makeUsersRepository';

export function makeSignUpService() {
  const usersRepository = makeUsersRepository();

  return new SignUpService(usersRepository);
}
