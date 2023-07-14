import express from 'express';
import { CreateNewSemester } from './semester.controller';
const semesterRouter = express.Router();

semesterRouter.post('/create-new-semester', CreateNewSemester);

export const CreateNewSemesterRoute = semesterRouter;
