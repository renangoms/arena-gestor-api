import { ResetPasswordController } from '../../../app/modules/auth/controllers/reset-password/ResetPassword.controller';
import { makeResetPasswordService } from '../../services/auth/makeResetPasswordService';

export function makeResetPasswordController() {
  const resetPasswordService = makeResetPasswordService();

  return new ResetPasswordController(resetPasswordService);
}
