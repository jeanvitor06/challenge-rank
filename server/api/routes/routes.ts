import * as errors from '../../middlewares/errors';

import { Router } from 'express';
import { list } from './actions';

export const router = Router();

router.get('/', list);
router.use(errors.notFound);