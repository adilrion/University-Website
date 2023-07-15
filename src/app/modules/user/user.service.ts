import { SortOrder } from 'mongoose';
import { ApiError } from '../../../Errors/apiError';
import config from '../../../config';
import { PaginationHelper } from '../../../helpers/paginationHelpers';
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
  const { page, skip, limit, sortOrder, sortBy } = PaginationHelper(pagination);

  const sortCondition: { [key: string]: SortOrder } = {};
  if (sortOrder && sortBy) {
    sortCondition[sortBy] = sortOrder;
  }

  const result = await User.find()
    .sort(sortCondition)
    .skip(skip)
    .limit(Number(limit))
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
