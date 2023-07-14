import { RequestHandler } from 'express';
import statusCode from 'http-status';
import { ApiResponse } from '../../../shared/ApiResponse';
import { TryCatchAsync } from '../../../shared/tryCatchAsync';
import { UserService } from './user.service';

const createNewUser: RequestHandler = TryCatchAsync(async (req, res, next) => {
  const { user } = req.body;
  const result = await UserService.createUser(user);
  next();
  ApiResponse(res, {
    statusCode: statusCode.OK,
    success: true,
    message: 'User Create Successfully!',
    body: result,
  });
});

export const UserController = {
  createNewUser,
};
