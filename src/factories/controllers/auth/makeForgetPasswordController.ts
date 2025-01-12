import { ForgetPasswordController } from '../../../app/modules/auth/controllers/forget-password/ForgetPassword.controller';
import { makeForgetPasswordService } from '../../services/auth/makeForgetPasswordService';

export function makeForgetPasswordController() {
  const forgetPasswordService = makeForgetPasswordService();

  return new ForgetPasswordController(forgetPasswordService);
}
