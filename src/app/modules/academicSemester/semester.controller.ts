import { RequestHandler } from 'express';
import { CreateAcademicSemester } from './semester.service';
import { TryCatchAsync } from '../../../shared/tryCatchAsync';
import { ApiResponse } from '../../../shared/ApiResponse';
import statusCode from 'http-status';

export const CreateNewSemester: RequestHandler = TryCatchAsync(
  async (req, res, next) => {
    const { semester } = req.body;
    const result = await CreateAcademicSemester(semester);
    next();
    ApiResponse(res, {
      statusCode: statusCode.OK,
      success: true,
      message: 'Semester Creation successfully!',
      body: result,
    });
  }
);
