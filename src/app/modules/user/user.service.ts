import { ApiError } from '../../../Errors/apiError';
import config from '../../../config';
import { IGenericDataResponse } from '../../../interfaces/genericDataResponse';
import { IPaginationOption } from '../../../interfaces/paginationInterface';
import { IUser } from './user.interface';
import { User } from './user.model';
import { createNewUserId } from './user.utils';

//  Create new user

const createUser = async (user: IUser): Promise<IUser | null> => {
  if (!user?.password) {
    user.password = config.user_password as string;
  }

  if (user) {
    user.userId = await createNewUserId();
  }

  const createUser = await User.create(user);

  if (!createUser) {
    throw new ApiError(400, 'Failed to create user!');
  }

  return createUser;
};

// Get All user
const getAllUsers = async (
  pagination: IPaginationOption
): Promise<IGenericDataResponse<IUser[]>> => {
  const { page = 1, limit = 10 } = pagination;

  const skip = (page - 1) * limit;
  const result = await User.find()
    .sort({ createdAt: -1 })
    .skip(skip)
    .limit(limit)
    .exec();

  const total = await User.countDocuments().exec();

  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  };
};

export const UserService = {
  createUser,
  getAllUsers,
};
