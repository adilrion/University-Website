import { IErrorGenericResponseInterface } from '../app/interfaces/errorGenericResponseInterface';
import { IErrorInterface } from '../app/interfaces/errorInterface';
import { ZodError, ZodIssue } from 'zod';

export const zodErrorHandler = (
  error: ZodError
): IErrorGenericResponseInterface => {
  const result: IErrorInterface[] = error.issues.map((issue: ZodIssue) => {
    return {
      path: issue?.path[issue?.path.length - 1].toString(),
      message: issue?.message,
    };
  });

  return {
    statusCode: 400,
    message: 'Validation Error!',
    errorMessage: result,
  };
};
