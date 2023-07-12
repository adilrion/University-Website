import express from 'express';
import { ValidationHandler } from '../../middleware/validationZodHandler';
import { UserController } from './user.controller';
import { UserValidationSchema } from './user.validation';

const router = express.Router();

router.post(
  '/create-user',
  ValidationHandler(UserValidationSchema),
  UserController.createNewUser
);

export const UserRoutes = router;
