import { Router } from 'express';
import { AuthRouter } from './auth.router';
import { CourtsRouter } from './courts.router';
import { SchedulePlansRouter } from './schedule-plans.router';
import { SchedulesRouter } from './schedules.router';

const routers = Router();

routers.use('/auth', AuthRouter);
routers.use('/courts', CourtsRouter);
routers.use('/schedule-plans', SchedulePlansRouter);
routers.use('/schedules', SchedulesRouter);

export { routers };
