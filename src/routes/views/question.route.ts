import express from 'express';

import {
	allQuestions,
	displayQuestion,
	editQuestion,
	newQuestion,
} from '../../controllers/views/question.controller';

const router = express.Router();

router.get('/', allQuestions);

router.get('/display', displayQuestion);

router.get('/edit', editQuestion);

router.get('/new', newQuestion);

export default router;
