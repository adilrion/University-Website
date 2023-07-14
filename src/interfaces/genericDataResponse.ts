export type IGenericDataResponse<T> = {
  meta: {
    page?: number;
    limit?: number;
    total?: number;
    sortBy?: number;
    sortOrder?: number;
    filter?: string;
    search?: string;
  };
  data: T;
};
