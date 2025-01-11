import { Router } from 'express';
import { AuthRouter } from './auth.router';

const routers = Router();

routers.use('/auth', AuthRouter);

export { routers };
