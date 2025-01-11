import { SignInService } from '../../../app/modules/auth/services/sign-in/SignIn.service';
import { makeUsersRepository } from '../../repositories/makeUsersRepository';

export function makeSignInService() {
  const usersRepository = makeUsersRepository();

  return new SignInService(usersRepository);
}
