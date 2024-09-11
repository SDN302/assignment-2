import express from 'express';

import { allQuizzes } from '../../controllers/views/quiz.controller';

const router = express.Router();

router.get('/', allQuizzes);

export default router;
