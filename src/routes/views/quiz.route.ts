import express from 'express';

import {
	allQuizzes,
	displayQuiz,
	editQuiz,
	newQuiz,
} from '../../controllers/views/quiz.controller';

const router = express.Router();

router.get('/', allQuizzes);

router.get('/display', displayQuiz);

router.get('/edit', editQuiz);

router.get('/new', newQuiz);

export default router;
