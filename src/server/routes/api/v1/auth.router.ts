import { Router } from 'express';
import { makeForgetPasswordController } from '../../../../factories/controllers/auth/makeForgetPasswordController';
import { makeResetPasswordController } from '../../../../factories/controllers/auth/makeResetPasswordController';
import { makeSignInController } from '../../../../factories/controllers/auth/makeSignInController';
import { makeSignUpController } from '../../../../factories/controllers/auth/makeSignUpController';
import { makeAuthenticationMiddleware } from '../../../../factories/middlewares/makeAuthenticationMiddleware';
import { middlewareAdapter } from '../../../adapters/middlewareAdapter';
import { routeAdapter } from '../../../adapters/routeAdapter';

const AuthRouter = Router();

AuthRouter.post('/sign-up', routeAdapter(makeSignUpController()));
AuthRouter.post('/sign-in', routeAdapter(makeSignInController()));
AuthRouter.post(
  '/forget-password',
  routeAdapter(makeForgetPasswordController()),
);
AuthRouter.post(
  '/reset-password',
  middlewareAdapter(makeAuthenticationMiddleware()),
  routeAdapter(makeResetPasswordController()),
);

export { AuthRouter };
