import express from 'express';
import { ValidationHandler } from '../../middleware/zodValidationHandler';
import { CreateNewSemester } from './semester.controller';
import { AcademicSemesterZodValidation } from './semester.zod.validation';
const semesterRouter = express.Router();

semesterRouter.post(
  '/create-new-semester',
  ValidationHandler(AcademicSemesterZodValidation),
  CreateNewSemester
);

export const CreateNewSemesterRoute = semesterRouter;
