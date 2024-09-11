import { Request, Response } from 'express';
import axios from 'axios';
import { server } from '../../config/config';
import { IQuestion } from '../../models/question.model';

export const allQuestions = async (req: Request, res: Response) => {
	const response = await axios.get<IQuestion[]>(
		`${server.schema}://${server.host}:${server.port}/api/questions`,
	);

	const questions = response.data;

	res.render('questions/allQuestions', { questions: questions });
};
