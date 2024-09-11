import express from 'express';
import cors from 'cors';
import { DEVELOPMENT, server } from './config/config';
import connectDb from './config/db';
import question from './routes/api/question.route';
import quiz from './routes/api/quiz.route';
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
app.use('/api/questions', question);
app.use('/api/quizzes', quiz);

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
