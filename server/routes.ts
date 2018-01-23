import { Router } from 'express';
import * as errors from './middlewares/errors';
import { router as api } from './api/routes/routes';

export const router = Router();

router.use('/', api);
router.use(errors.notFound);