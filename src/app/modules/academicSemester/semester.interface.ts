import { Model } from 'mongoose';

export type IAcademicSemester = {
  semesterName: string;
  startDate: string;
  endDate: string;
  year: number;
  admin?: string;
  faculty?: string[];
};

export type AcademicSemesterModelType = Model<
  IAcademicSemester,
  Record<string, unknown>
>;
