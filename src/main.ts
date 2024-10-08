import express from 'express';
import cors from 'cors';
import { DEVELOPMENT, server } from './config/config';
import connectDb from './config/db';
import questionApi from './routes/api/question.route';
import quizApi from './routes/api/quiz.route';
import question from './routes/views/question.route';
import quiz from './routes/views/quiz.route';
import morgan from 'morgan';
import { setupSwagger } from './swagger/swagger';

// CORS Middleware
const corsOptions = {
	origin: server.origin,
	methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
	credentials: true,
	optionsSuccessStatus: 204,
};

//------------------------------------------------------------

// Express App
const app = express();

// Middlewares
app.use(cors(corsOptions));
app.use(express.json());
app.use(morgan('dev'));

// Routes API
app.use('/api/questions', questionApi);
app.use('/api/quizzes', quizApi);

// Routes Views
app.use('/questions', question);
app.use('/quizzes', quiz);

// View Engine
app.set('view engine', 'ejs');
app.set('views', './src/views');

// Swagger
setupSwagger(app);

app.listen(server.port, async () => {
	// Connect to MongoDB
	await connectDb();

	console.info(`Listening on PORT ${server.port}`);

	if (DEVELOPMENT) {
		console.info(
			`Swagger UI available at http://${server.host}:${server.port}/api-docs`,
		);
	}
});
