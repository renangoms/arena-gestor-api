import { SignUpController } from '../../../app/modules/auth/controllers/sign-up/SignUp.controller';
import { makeSignUpService } from '../../services/auth/makeSignUpService';

export function makeSignUpController() {
  const signUpService = makeSignUpService();

  return new SignUpController(signUpService);
}
