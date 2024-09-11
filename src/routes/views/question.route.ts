import express from 'express';

import {
	allQuestions,
	newQuestion,
} from '../../controllers/views/question.controller';

const router = express.Router();

router.get('/', allQuestions);

router.get('/new', newQuestion);

export default router;
