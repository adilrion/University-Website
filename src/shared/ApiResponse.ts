import { Response } from 'express';

type ResponseType<T> = {
  statusCode: number;
  success: boolean;
  message: string;
  meta?: {
    page?: number;
    limit?: number;
    total?: number;
    sortBy?: number;
    sortOrder?: number;
    filter?: string;
    search?: string;
  };
  body: T | null;
};

export const ApiResponse = <T>(res: Response, data: ResponseType<T>) => {
  res.status(data.statusCode).json({
    success: data.success,
    message: data.message || null,
    meta: data.meta || null,
    body: data.body,
  });
};
