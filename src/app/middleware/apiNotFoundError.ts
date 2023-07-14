import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import { ApiResponse } from '../../shared/ApiResponse';

export const ApiNotFoundError = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  ApiResponse(res, {
    statusCode: httpStatus.NOT_FOUND,
    success: false,
    message: 'Api not Found',
    body: [
      {
        path: req.originalUrl,
        message: 'API Not Found',
      },
    ],
  });
  next();
};
