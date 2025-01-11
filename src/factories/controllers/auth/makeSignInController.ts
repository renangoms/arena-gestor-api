import { SignInController } from '../../../app/modules/auth/controllers/sign-in/SignIn.controller';
import { makeSignInService } from '../../services/auth/makeSignInService';

export function makeSignInController() {
  const signInService = makeSignInService();

  return new SignInController(signInService);
}
