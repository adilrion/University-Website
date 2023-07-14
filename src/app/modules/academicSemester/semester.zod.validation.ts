import { z } from 'zod';

export const AcademicSemesterZodValidation = z.object({
  body: z.object({
    semester: z
      .object({
        semesterName: z
          .string({
            required_error: 'Semester name is required!',
          })
          .refine(value => value.trim() !== '', {
            message: 'Semester name is required!',
          }),
        startDate: z
          .string({
            required_error: 'Semester Start Date is required!',
          })
          .refine(value => /^\d{2}\/\d{2}\/\d{4}$/.test(value), {
            message: 'Invalid Semester start date format! (dd/mm/yyyy)',
            path: ['startDate'], // Specify the path to associate the error message with the specific field
          })
          .refine(value => value.trim() !== '', {
            message: 'Semester Start date is required!',
            path: ['startDate'], // Specify the path to associate the error message with the specific field
          }),
        endDate: z
          .string({
            required_error: 'Semester End Date is required!',
          })

          .refine(value => /^\d{2}\/\d{2}\/\d{4}$/.test(value), {
            message: 'Invalid Semester end date format! (dd/mm/yyyy)',
            path: ['endDate'], // Specify the path to associate the error message with the specific field
          })
          .refine(value => value.trim() !== '', {
            message: 'Semester End date is required!',
            path: ['endDate'], // Specify the path to associate the error message with the specific field
          }),
        year: z
          .number({
            required_error: 'Semester year is required!',
          })
          .int()
          .positive()
          .refine(value => value.toString().length === 4, {
            message: 'Year must be in a four-digit format (e.g., 2023)',
            path: ['year'], // Specify the path to associate the error message with the specific field
          }),
      })
      .refine(value => Object.keys(value).length > 0, {
        message: 'Semester details are required!',
        path: ['semester'], // Specify the path to associate the error message with the specific field
      }),
  }),
});
