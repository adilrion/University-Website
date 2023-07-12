import { z } from 'zod';

export const UserValidationSchema = z.object({
  body: z.object({
    user: z.object({
      firstName: z.string().nonempty('First name is required!'),
      lastName: z.string().nonempty('Last name is required!'),
      gender: z.string().nonempty('Gender is required!'),
      email: z
        .string()
        .email('Invalid email format!')
        .nonempty('Email is required!'),
      role: z.string().nonempty('Role is required!'),
      contactNumber: z.string().nonempty('Contact number is required!'),
    }),
  }),
});
