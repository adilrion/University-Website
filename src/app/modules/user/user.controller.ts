import { RequestHandler } from 'express';
import statusCode from 'http-status';
import { PaginationField } from '../../../constants/pagination';
import { ApiResponse } from '../../../shared/ApiResponse';
import { TryCatchAsync } from '../../../shared/tryCatchAsync';
import { Pick } from '../../../utils/pick';
import { UserService } from './user.service';
import { IUser } from './user.interface';
import httpStatus from 'http-status';

const createNewUser: RequestHandler = TryCatchAsync(async (req, res, next) => {
  const { user } = req.body;
  const result = await UserService.createUser(user);
  ApiResponse<IUser>(res, {
    statusCode: statusCode.OK,
    success: true,
    message: 'User Create Successfully!',
    body: result,
  });
  next();
});

const getAllUser: RequestHandler = TryCatchAsync(async (req, res) => {
  const paginationOption = Pick(req.query, PaginationField);

  const result = await UserService.getAllUsers(paginationOption);
  ApiResponse<IUser[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User Retrieved Successfully',
    meta: result.meta,
    body: result.data,
  });
});

export const UserController = {
  createNewUser,
  getAllUser,
};
