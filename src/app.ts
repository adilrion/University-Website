import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import { globalErrorHandler } from './app/middleware/globalErrorHandler';
import { UserRoutes } from './app/modules/user/user.route';
import { CreateNewSemesterRoute } from './app/modules/academicSemester/semester.router';

const app: Application = express();

app.use(cors());

// Parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Application Route
app.use('/admin/', UserRoutes);
app.use('/admin/', CreateNewSemesterRoute);

// testing route
app.get('/', (req: Request, res: Response) => {
  res.send('hello world');
});

// Global Error Handler
app.use(globalErrorHandler);

export default app;
