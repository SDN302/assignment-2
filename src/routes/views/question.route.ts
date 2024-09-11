import express from 'express';

import {
	allQuestions,
	displayQuestion,
	newQuestion,
} from '../../controllers/views/question.controller';

const router = express.Router();

router.get('/', allQuestions);

router.get('/display', displayQuestion);

router.get('/new', newQuestion);

export default router;
