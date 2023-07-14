import { RequestHandler } from 'express';
import { CreateAcademicSemester } from './semester.service';

export const CreateNewSemester: RequestHandler = async (req, res, next) => {
  try {
    const { semester } = req.body;

    const result = await CreateAcademicSemester(semester);
    res.status(200).json({
      success: true,
      massage: 'Semester Creation Successfully!',
      body: result,
    });
  } catch (error) {
    next(error);
  }
};
