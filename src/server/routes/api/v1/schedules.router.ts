import { Router } from 'express';
import { makeCreateSchedulesController } from '../../../../factories/controllers/schedules/makeCreateSchedulesController';
import { makeListSchedulesController } from '../../../../factories/controllers/schedules/makeListSchedulesController';
import { makeAuthenticationMiddleware } from '../../../../factories/middlewares/makeAuthenticationMiddleware';
import { middlewareAdapter } from '../../../adapters/middlewareAdapter';
import { routeAdapter } from '../../../adapters/routeAdapter';

const SchedulesRouter = Router();

SchedulesRouter.get(
  '/',
  middlewareAdapter(makeAuthenticationMiddleware()),
  routeAdapter(makeListSchedulesController()),
);

SchedulesRouter.post(
  '/',
  middlewareAdapter(makeAuthenticationMiddleware()),
  routeAdapter(makeCreateSchedulesController()),
);

export { SchedulesRouter };
