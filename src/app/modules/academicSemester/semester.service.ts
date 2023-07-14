import { ApiError } from '../../../Error/apiError';
import { IAcademicSemester } from './semester.interface';
import { AcademicSemesterModel } from './semester.model';

export const CreateAcademicSemester = async (
  data: IAcademicSemester
): Promise<IAcademicSemester | null> => {
  const CreateAcademicSemester = await AcademicSemesterModel.create(data);

  if (!CreateAcademicSemester) {
    throw new ApiError(400, 'Failed To create new Academic Semester');
  }

  return CreateAcademicSemester;
};
