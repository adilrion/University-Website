import { IPaginationOption } from '../interfaces/paginationInterface';

type IPaginationOptionReturn = IPaginationOption & {
  skip: number;
};

export const PaginationHelper = (
  paginationQuery: IPaginationOption
): IPaginationOptionReturn => {
  const {
    page = 1,
    limit = 10,
    sortBy = 'userId',
    sortOrder = 'asc',
  } = paginationQuery;
  const skip = (Number(page) - 1) * Number(limit);

  return {
    page,
    limit,
    skip,
    sortBy,
    sortOrder,
  };
};
