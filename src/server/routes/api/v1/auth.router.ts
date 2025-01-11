import { Router } from 'express';
import { makeSignInController } from '../../../../factories/controllers/auth/makeSignInController';
import { makeSignUpController } from '../../../../factories/controllers/auth/makeSignUpController';
import { routeAdapter } from '../../../adapters/routeAdapter';

const AuthRouter = Router();

AuthRouter.post('/sign-up', routeAdapter(makeSignUpController()));
AuthRouter.post('/sign-in', routeAdapter(makeSignInController()));

export { AuthRouter };
