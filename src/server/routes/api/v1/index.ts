import { Router } from 'express';
import { AuthRouter } from './auth.router';
import { CourtsRouter } from './courts.router';

const routers = Router();

routers.use('/auth', AuthRouter);
routers.use('/courts', CourtsRouter);

export { routers };
