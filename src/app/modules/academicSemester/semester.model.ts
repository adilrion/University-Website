import { model, Schema } from 'mongoose';
import {
  AcademicSemesterModelType,
  IAcademicSemester,
} from './semester.interface';

const AcademicSemesterModelSchema = new Schema<IAcademicSemester>(
  {
    semesterName: {
      type: String,
      required: true,
    },
    startDate: {
      type: String,
      required: true,
    },
    endDate: {
      type: String,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
  }
);

export const AcademicSemesterModel = model<
  IAcademicSemester,
  AcademicSemesterModelType
>('AcademicSemester', AcademicSemesterModelSchema);
