import { Router } from 'express';
import * as errors from './middlewares/errors';
import { router as api } from './modules/routes/routes';

export const router = Router();

router.use('/rank', api);
router.use(errors.notFound);