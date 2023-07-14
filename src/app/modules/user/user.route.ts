import express from 'express';
import { ValidationHandler } from '../../middleware/zodValidationHandler';
import { UserController } from './user.controller';
import { UserValidationSchema } from './user.validation';

const router = express.Router();

router.post(
  '/create-user',
  ValidationHandler(UserValidationSchema),
  UserController.createNewUser
);

router.get('/users', UserController.getAllUser);

export const UserRoutes = router;
