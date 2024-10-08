import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';
import { Express } from 'express';

const swaggerOptions = {
	swaggerDefinition: {
		openapi: '3.0.0',
		info: {
			version: '1.0.0',
			title: 'SDN302 - Assignment 2',
			description: 'Question Bank Management Application',
			contact: {
				name: 'Minh Vương',
			},
		},
		schemes: ['http', 'https'],
	},
	apis: ['src/routes/api/*.ts'],
};

//------------------------------------------------------------

export const setupSwagger = (app: Express) => {
	const swaggerDocs = swaggerJSDoc(swaggerOptions);

	app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
};
