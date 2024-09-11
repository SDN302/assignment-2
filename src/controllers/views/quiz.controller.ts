import { Request, Response } from 'express';
import { IQuiz } from '../../models/quiz.model';
import { server } from '../../config/config';
import axios from 'axios';

export const allQuizzes = async (req: Request, res: Response) => {
	const response = await axios.get<IQuiz[]>(
		`${server.schema}://${server.host}:${server.port}/api/quizzes`,
	);

	const quizzes = response.data;

	res.render('quizzes/allQuizzes', { quizzes: quizzes });
};
