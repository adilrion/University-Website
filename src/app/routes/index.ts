import express from 'express';
import { CreateNewSemesterRoute } from '../modules/academicSemester/semester.router';
import { UserRoutes } from '../modules/user/user.route';

const router = express.Router();

const allRouters = [
  {
    path: '/admin/',
    route: UserRoutes,
  },
  {
    path: '/admin/',
    route: CreateNewSemesterRoute,
  },
];

allRouters.forEach(route => router.use(route.path, route.route));

export default router;
