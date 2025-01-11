import { Router } from 'express';
import { routers } from './api/v1';

const router = Router();

router.use('/v1/api', routers);

router.get('/', (_, res) => {
  res.json({ ok: true });
});

export { router };
