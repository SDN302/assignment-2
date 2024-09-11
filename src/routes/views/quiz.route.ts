import express from 'express';

import { allQuizzes, newQuiz } from '../../controllers/views/quiz.controller';

const router = express.Router();

router.get('/', allQuizzes);

router.get('/new', newQuiz);

export default router;
