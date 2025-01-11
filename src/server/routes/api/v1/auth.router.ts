import { Router } from 'express';
import { makeSignInController } from '../../../../factories/controllers/auth/makeSignInController';
import { routeAdapter } from '../../../adapters/routeAdapter';

const AuthRouter = Router();

AuthRouter.post('/sign-in', routeAdapter(makeSignInController()));

export { AuthRouter };
