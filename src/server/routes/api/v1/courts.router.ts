import { Router } from 'express';
import { makeCreateCourtController } from '../../../../factories/controllers/courts/makeCreateCourtController';
import { makeListCourtsController } from '../../../../factories/controllers/courts/makeListCourtsController';
import { makeAuthenticationMiddleware } from '../../../../factories/middlewares/makeAuthenticationMiddleware';
import { middlewareAdapter } from '../../../adapters/middlewareAdapter';
import { routeAdapter } from '../../../adapters/routeAdapter';

const CourtsRouter = Router();

CourtsRouter.get('/', routeAdapter(makeListCourtsController()));
CourtsRouter.post(
  '/',
  middlewareAdapter(makeAuthenticationMiddleware()),
  routeAdapter(makeCreateCourtController()),
);

export { CourtsRouter };
