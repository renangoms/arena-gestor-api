import { Router } from 'express';
import { makeCreateSchedulePlansController } from '../../../../factories/controllers/schedule-plans/makeCreateSchedulePlansController';
import { makeListSchedulePlansController } from '../../../../factories/controllers/schedule-plans/makeListSchedulePlansController';
import { makeAuthenticationMiddleware } from '../../../../factories/middlewares/makeAuthenticationMiddleware';
import { middlewareAdapter } from '../../../adapters/middlewareAdapter';
import { routeAdapter } from '../../../adapters/routeAdapter';

const SchedulePlansRouter = Router();

SchedulePlansRouter.get(
  '/',
  middlewareAdapter(makeAuthenticationMiddleware()),
  routeAdapter(makeListSchedulePlansController()),
);

SchedulePlansRouter.post(
  '/',
  middlewareAdapter(makeAuthenticationMiddleware()),
  routeAdapter(makeCreateSchedulePlansController()),
);

export { SchedulePlansRouter };
