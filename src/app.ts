import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import { globalErrorHandler } from './app/middleware/globalErrorHandler';

import { ApiNotFoundError } from './app/middleware/apiNotFoundError';
import router from './app/routes';

const app: Application = express();

app.use(cors());

// Parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Application Route
app.use(router);

// testing route
app.get('/', (req: Request, res: Response) => {
  res.send('hello world');
});

// Global Error Handler
app.use(globalErrorHandler);
app.use(ApiNotFoundError);

export default app;
