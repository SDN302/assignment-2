import express from 'express';

import { allQuestions } from '../../controllers/views/question.controller';

const router = express.Router();

router.get('/', allQuestions);

export default router;
