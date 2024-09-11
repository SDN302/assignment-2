import express from 'express';

import {
	allQuizzes,
	displayQuiz,
	newQuiz,
} from '../../controllers/views/quiz.controller';

const router = express.Router();

router.get('/', allQuizzes);

router.get('/display', displayQuiz);

router.get('/new', newQuiz);

export default router;
